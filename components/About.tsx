import Reveal from "./Reveal";
import Stats from "./Stats";

export default function About() {
  return (
    <Reveal id="gioi-thieu" className="about">
      <div className="wrap">
        <div className="section-head">
          <h2>AI viết nháp. Bạn là người quyết định.</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              PairLab ra đời năm 2020 từ một nhóm kỹ sư phần mềm muốn dạy lập trình theo cách chính họ đang làm việc mỗi
              ngày: ngồi cặp với một trợ lý AI.
            </p>
            <p>
              Chúng tôi không dạy bạn chép prompt. Mỗi buổi học xoay quanh một tính năng thật: bạn chia nhỏ yêu cầu,
              giao cho AI viết nháp, đọc lại từng dòng, viết test và sửa lỗi. Sau khóa học, bạn biết khi nào nên tin AI
              và khi nào phải tự viết.
            </p>
            <p>
              Mentor là các senior đang làm tại công ty sản phẩm. Lớp tối đa 20 người, mỗi bài nộp đều được review
              trong 24 giờ.
            </p>
          </div>
          <Stats />
        </div>
      </div>
    </Reveal>
  );
}
