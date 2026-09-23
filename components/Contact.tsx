import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Reveal id="lien-he">
      <div className="wrap">
        <div className="section-head">
          <h2>Nhận lộ trình học phù hợp với bạn</h2>
          <p>Để lại thông tin, tư vấn viên sẽ gọi lại trong vòng 2 giờ làm việc.</p>
        </div>
        <div className="contact-grid">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </Reveal>
  );
}
