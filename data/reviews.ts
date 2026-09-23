export type Review = {
  quote: string;
  result: string;
  name: string;
  /** Chức danh và nơi làm việc, hiển thị dưới tên. */
  subtitle: string;
  initials: string;
  avatarColor: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Trước đây mình dùng AI kiểu copy rồi cầu nguyện. Giờ mình biết chia việc, đọc diff và viết test trước. Code ít lỗi hơn hẳn.",
    result: "Lên Middle Frontend sau 5 tháng",
    name: "Nguyễn Minh Anh",
    subtitle: "Frontend Developer, Hà Nội",
    initials: "MA",
    avatarColor: "#FFD95A",
  },
  {
    quote:
      "Mình làm kế toán, không biết code. Sau 8 tuần mình tự làm được công cụ đối soát hóa đơn cho công ty, tiết kiệm mỗi tháng hai ngày công.",
    result: "Ra mắt công cụ nội bộ đầu tiên",
    name: "Trần Thu Hà",
    subtitle: "Kế toán trưởng, TP.HCM",
    initials: "TH",
    avatarColor: "#B7A8FF",
  },
  {
    quote:
      "Team 12 dev của chúng tôi học khóa doanh nghiệp. Thời gian từ ticket đến merge giảm khoảng 40%, và review code gọn hơn nhiều.",
    result: "Rút ngắn chu kỳ phát triển 40%",
    name: "Lê Quốc Bảo",
    subtitle: "CTO, công ty Fintech",
    initials: "QB",
    avatarColor: "#7FD4FF",
  },
];
