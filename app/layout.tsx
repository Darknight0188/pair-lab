import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { SITE } from "@/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "PairLab | Học lập trình cùng AI, ra sản phẩm thật sau 8 tuần",
  description:
    "PairLab dạy lập trình cùng AI: dùng Cursor, Claude Code, Copilot đúng cách để viết code nhanh hơn mà vẫn hiểu từng dòng. Khóa học cho người mới, dev đi làm và doanh nghiệp.",
  openGraph: {
    type: "website",
    title: "PairLab | Học lập trình cùng AI",
    description: "Viết code nhanh hơn mà vẫn hiểu từng dòng. Lộ trình 8 tuần, mentor kèm dự án thật.",
    locale: "vi_VN",
    siteName: SITE.name,
    url: SITE.url,
    images: [SITE.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE.themeColor,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={spaceGrotesk.variable} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
