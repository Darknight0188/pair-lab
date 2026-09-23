import CodeEditor from "./CodeEditor";

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Viết code nhanh gấp 3 lần, mà vẫn hiểu từng dòng.</h1>
          <p className="hero-lead">
            Khóa học lập trình cùng AI cho người mới và dev đang đi làm. Bạn học cách giao việc cho Cursor, Claude Code,
            Copilot, rồi tự tay review, sửa và ra mắt sản phẩm thật sau 8 tuần.
          </p>
          <div className="hero-actions">
            <a href="#lien-he" className="btn btn-primary">
              Nhận lộ trình miễn phí
            </a>
            <a href="#san-pham" className="btn btn-ghost">
              Xem các khóa học
            </a>
          </div>
          <p className="hero-note">
            <span className="dot" aria-hidden="true" />
            Khai giảng lớp K24 ngày 12/10, còn 14 chỗ
          </p>
        </div>

        <CodeEditor />
      </div>
    </section>
  );
}
