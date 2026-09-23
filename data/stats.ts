export type Stat = {
  value: number;
  suffix: string;
  label: string;
  /** Định dạng hàng nghìn theo vi-VN (4200 → 4.200). */
  thousands?: boolean;
};

export const stats: Stat[] = [
  { value: 6, suffix: "năm", label: "đào tạo lập trình" },
  { value: 4200, suffix: "+", label: "học viên đã tốt nghiệp", thousands: true },
  { value: 180, suffix: "+", label: "sản phẩm học viên đã ra mắt" },
  { value: 92, suffix: "%", label: "có việc hoặc lên lương sau 6 tháng" },
];
