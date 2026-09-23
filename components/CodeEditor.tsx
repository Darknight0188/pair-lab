"use client";

import { Fragment, useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const PROMPT = "// Tạo API đăng ký khóa học, kiểm tra email hợp lệ";

/** Mỗi dòng gợi ý là một dãy token; token không có class là text thường. */
type Token = [text: string, className?: "kw" | "fn" | "str"];

const SUGGESTION: Token[][] = [
  [["async function", "kw"], [" "], ["dangKyKhoaHoc", "fn"], ["(req, res) {"]],
  [["  "], ["const", "kw"], [" { email, khoaHoc } = req.body;"]],
  [["  "], ["if", "kw"], [" (!"], ["isEmail", "fn"], ["(email))"]],
  [["    "], ["return", "kw"], [" res."], ["status", "fn"], ["(400)."], ["json", "fn"], ["({ loi: "], ['"Email không hợp lệ"', "str"], [" });"]],
  [["  "], ["const", "kw"], [" hv = "], ["await", "kw"], [" db.hocVien."], ["upsert", "fn"], ["({ email });"]],
  [["  "], ["await", "kw"], [" db.dangKy."], ["create", "fn"], ["({ hv, khoaHoc });"]],
  [["  res."], ["json", "fn"], ["({ ok: "], ["true", "kw"], [" });"]],
  [["}"]],
];

/**
 * idle → typing → thinking → suggesting → pressing → accepted → (lặp lại)
 * "final" là trạng thái tĩnh khi người dùng bật giảm chuyển động.
 */
type Phase = "idle" | "typing" | "thinking" | "suggesting" | "pressing" | "accepted" | "final";

const STATUS: Record<Phase, string> = {
  idle: "Đang chờ bạn mô tả việc cần làm",
  typing: "Đang chờ bạn mô tả việc cần làm",
  thinking: "AI đang viết nháp...",
  suggesting: "Gợi ý 8 dòng. Nhấn Tab để nhận.",
  pressing: "Gợi ý 8 dòng. Nhấn Tab để nhận.",
  accepted: "Đã nhận gợi ý. Giờ đến lượt bạn review.",
  final: "Đã nhận gợi ý. Giờ đến lượt bạn review.",
};

function suggestionClass(phase: Phase) {
  switch (phase) {
    case "idle":
    case "typing":
    case "thinking":
      return "suggestion ghost hidden";
    case "suggesting":
    case "pressing":
      return "suggestion ghost";
    case "accepted":
      return "suggestion accepted";
    case "final":
      return "suggestion";
  }
}

export default function CodeEditor() {
  const reduceMotion = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const [animPhase, setAnimPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    const timers = new Set<number>();
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const id = window.setTimeout(() => {
          timers.delete(id);
          resolve();
        }, ms);
        timers.add(id);
      });

    async function run() {
      while (!cancelled) {
        await wait(700);
        if (cancelled) return;
        setAnimPhase("typing");
        for (let i = 1; i <= PROMPT.length; i++) {
          setTyped(i);
          await wait(38 + Math.random() * 40);
          if (cancelled) return;
        }
        setAnimPhase("thinking");
        await wait(900);
        if (cancelled) return;
        setAnimPhase("suggesting");
        await wait(1800);
        if (cancelled) return;
        setAnimPhase("pressing");
        await wait(220);
        if (cancelled) return;
        setAnimPhase("accepted");
        await wait(5200);
        if (cancelled) return;
        setTyped(0);
        setAnimPhase("idle");
      }
    }
    run();

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
      timers.clear();
    };
  }, [reduceMotion]);

  const phase: Phase = reduceMotion ? "final" : animPhase;
  const promptText = reduceMotion ? PROMPT : PROMPT.slice(0, typed);
  const done = phase === "accepted" || phase === "final";

  return (
    <div className="editor" role="img" aria-label="Minh họa: viết một dòng mô tả, AI gợi ý hàm hoàn chỉnh, nhấn Tab để nhận">
      <div className="editor-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="editor-tab">dang-ky.js</span>
      </div>
      <div className="editor-body" aria-hidden="true">
        <div className="code-line">
          <span className="ln">1</span>
          <span className="code">
            <span className="cm">{promptText}</span>
            {phase !== "final" && <span className="caret" />}
          </span>
        </div>
        <div className={suggestionClass(phase)}>
          {SUGGESTION.map((line, i) => (
            <div className="code-line" key={i}>
              <span className="ln">{i + 2}</span>
              <span className="code">
                {line.map(([text, cls], j) =>
                  cls ? (
                    <span className={cls} key={j}>
                      {text}
                    </span>
                  ) : (
                    <Fragment key={j}>{text}</Fragment>
                  ),
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="editor-status" aria-hidden="true">
        <span className={`status-msg${done ? " ok" : ""}`}>{STATUS[phase]}</span>
        <span className={`kbd${phase === "pressing" ? " pressed" : ""}`}>Tab</span>
      </div>
    </div>
  );
}
