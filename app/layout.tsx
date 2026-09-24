import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "무료 세미나 | ChatGPT 앱 사용법",
  description:
    "ChatGPT 앱의 Work, 사이트, 원격제어 사용법을 안내하는 무료 온라인 Zoom 세미나입니다.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

