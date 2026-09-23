"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { SITE } from "@/data/site";
import { CheckCircleIcon } from "./icons";

type FieldName = "name" | "phone" | "email" | "message";
type ContactFormData = Record<FieldName, string>;
/** true = lỗi, false = hợp lệ, không có key = chưa kiểm tra. */
type FormErrors = Partial<Record<FieldName, boolean>>;

const FIELDS: FieldName[] = ["name", "phone", "email", "message"];

const INITIAL_DATA: ContactFormData = { name: "", phone: "", email: "", message: "" };

const RULES: Record<FieldName, (value: string) => boolean> = {
  name: (v) => v.trim().length >= 2,
  phone: (v) => /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(v.replace(/[\s.-]/g, "")),
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  message: (v) => v.trim().length >= 10,
};

const ERROR_MESSAGES: Record<FieldName, string> = {
  name: "Nhập họ tên của bạn, ít nhất 2 ký tự.",
  phone: "Nhập số di động 10 chữ số, bắt đầu bằng 0.",
  email: "Nhập email đúng dạng, ví dụ ban@email.com.",
  message: "Viết vài dòng để chúng tôi tư vấn đúng khóa, ít nhất 10 ký tự.",
};

const SUBMIT_ERROR = `Chưa gửi được thông tin. Kiểm tra kết nối mạng rồi thử lại, hoặc gọi hotline ${SITE.hotline.display}.`;

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => () => abortRef.current?.abort(), []);

  const validateField = (name: FieldName, value: string) => {
    const invalid = !RULES[name](value);
    setErrors((prev) => ({ ...prev, [name]: invalid }));
    return invalid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name as FieldName;
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Chỉ kiểm tra lại khi ô đang báo lỗi, để lỗi biến mất ngay khi sửa đúng.
    if (errors[name]) validateField(name, value);
  };

  const handleBlur = (name: FieldName) => {
    if (formData[name]) validateField(name, formData[name]);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSuccess(false);
    setFormError("");

    const nextErrors: FormErrors = {};
    for (const name of FIELDS) nextErrors[name] = !RULES[name](formData[name]);
    setErrors(nextErrors);

    const form = e.currentTarget;
    const firstInvalid = FIELDS.find((name) => nextErrors[name]);
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }

    const body = new FormData(form);
    const controller = new AbortController();
    abortRef.current = controller;
    setSubmitting(true);

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setFormData(INITIAL_DATA);
      setErrors({});
      setSuccess(true);
    } catch {
      if (controller.signal.aborted) return;
      setFormError(SUBMIT_ERROR);
    } finally {
      if (!controller.signal.aborted) setSubmitting(false);
    }
  };

  const fieldProps = (name: FieldName) => ({
    id: name,
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: () => handleBlur(name),
    "aria-invalid": errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const fieldClass = (name: FieldName) => `field${errors[name] ? " invalid" : ""}`;

  const errorText = (name: FieldName) => (
    <span className="error" id={`${name}-error`}>
      {ERROR_MESSAGES[name]}
    </span>
  );

  return (
    <form className="form-card" action={SITE.formEndpoint} method="POST" noValidate onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="PairLab: yêu cầu tư vấn mới" />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />
      <div className="form-row">
        <div className={fieldClass("name")}>
          <label htmlFor="name">Họ và tên</label>
          <input {...fieldProps("name")} type="text" autoComplete="name" placeholder="Nguyễn Văn An" />
          {errorText("name")}
        </div>
        <div className={fieldClass("phone")}>
          <label htmlFor="phone">Số điện thoại</label>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="0901 234 567" />
          {errorText("phone")}
        </div>
      </div>
      <div className={fieldClass("email")}>
        <label htmlFor="email">Email</label>
        <input {...fieldProps("email")} type="email" autoComplete="email" placeholder="ban@email.com" />
        {errorText("email")}
      </div>
      <div className={fieldClass("message")}>
        <label htmlFor="message">
          Nội dung <small>(bạn muốn học gì, trình độ hiện tại)</small>
        </label>
        <textarea {...fieldProps("message")} placeholder="Mình đã biết HTML/CSS, muốn học làm web app với AI..." />
        {errorText("message")}
      </div>
      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Đang gửi..." : "Gửi thông tin"}
      </button>
      <div className={`form-success${success ? " show" : ""}`} role="status" aria-live="polite">
        <CheckCircleIcon />
        <span>Đã gửi thành công. Chúng tôi sẽ gọi lại cho bạn sớm.</span>
      </div>
      <div className={`form-error${formError ? " show" : ""}`} role="alert">
        {formError}
      </div>
    </form>
  );
}
