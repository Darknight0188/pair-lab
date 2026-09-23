export type Course = {
  level: string;
  levelNumber: 1 | 2 | 3;
  title: string;
  description: string;
  tools: string[];
  duration: string;
  price: string;
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
};

export const courses: Course[] = [
  {
    level: "Chưa biết code",
    levelNumber: 1,
    title: "AI Coding Căn bản",
    description: "Hiểu biến, hàm, API qua các bài tập nhỏ. Dùng AI để giải thích code thay vì chỉ để viết hộ.",
    tools: ["JavaScript", "ChatGPT", "Cursor"],
    duration: "4 tuần, 8 buổi",
    price: "2.490.000đ",
    ctaLabel: "Đăng ký tư vấn",
  },
  {
    level: "Đã biết code cơ bản",
    levelNumber: 2,
    title: "Xây Web App với AI",
    description:
      "Từ ý tưởng đến sản phẩm chạy thật: thiết kế dữ liệu, viết API, giao diện, test và deploy. Cuối khóa demo trước nhà tuyển dụng.",
    tools: ["Next.js", "Claude Code", "Supabase"],
    duration: "8 tuần, 24 buổi",
    price: "6.900.000đ",
    ctaLabel: "Đăng ký tư vấn",
    featured: true,
    badge: "Được chọn nhiều nhất",
  },
  {
    level: "Dev đang đi làm",
    levelNumber: 3,
    title: "AI Agent & Tự động hóa",
    description:
      "Xây agent gọi công cụ, đọc tài liệu nội bộ và tự động hóa quy trình. Học cách đo chất lượng và kiểm soát chi phí.",
    tools: ["Python", "Claude API", "MCP"],
    duration: "6 tuần, 18 buổi",
    price: "8.500.000đ",
    ctaLabel: "Đăng ký tư vấn",
  },
  {
    level: "Dev đang đi làm",
    levelNumber: 2,
    title: "Review & Test code do AI viết",
    description:
      "Nhận ra lỗi bảo mật, lỗi logic và code thừa mà AI hay tạo ra. Viết test để AI không phá vỡ tính năng cũ.",
    tools: ["TypeScript", "Vitest", "Copilot"],
    duration: "3 tuần, 6 buổi",
    price: "3.200.000đ",
    ctaLabel: "Đăng ký tư vấn",
  },
  {
    level: "Mọi trình độ",
    levelNumber: 1,
    title: "Kèm 1-1 theo dự án",
    description:
      "Mang dự án của bạn đến, mentor ngồi cặp cùng bạn và AI mỗi tuần. Phù hợp khi bạn cần ra sản phẩm gấp.",
    tools: ["Theo dự án", "Lịch linh hoạt"],
    duration: "Gói 10 buổi",
    price: "9.800.000đ",
    ctaLabel: "Đăng ký tư vấn",
  },
  {
    level: "Đội kỹ thuật",
    levelNumber: 3,
    title: "Đào tạo doanh nghiệp",
    description:
      "Chương trình riêng cho team 10–50 người: quy trình dùng AI an toàn với mã nguồn, chuẩn review và đo năng suất.",
    tools: ["Tại văn phòng", "Online"],
    duration: "Thiết kế theo yêu cầu",
    price: "Liên hệ",
    ctaLabel: "Nhận đề xuất",
  },
];
