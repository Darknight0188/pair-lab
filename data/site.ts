export const SITE = {
  name: "PairLab",
  url: "https://pairlab.vn/",
  ogImage: "https://pairlab.vn/og-image.png",
  themeColor: "#5B4BFF",
  hotline: {
    display: "0901 234 567",
    href: "tel:0901234567",
  },
  email: "hello@pairlab.vn",
  address: "Tầng 7, 68 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM",
  workingHours: "Thứ 2 đến Thứ 7: 8:30 đến 21:00",
  formEndpoint: "https://formspree.io/f/mvkgrzlj",
  socials: {
    facebook: "https://facebook.com/",
    zalo: "https://zalo.me/0901234567",
    youtube: "https://youtube.com/",
  },
  copyright: "© 2026 Công ty TNHH Giáo dục PairLab. Bảo lưu mọi quyền.",
  taxId: "MST 0317 xxx xxx, cấp tại TP.HCM",
} as const;

export const NAV_LINKS = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#phan-hoi", label: "Phản hồi" },
  { href: "#lien-he", label: "Liên hệ" },
] as const;
