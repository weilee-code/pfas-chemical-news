import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "低溫拆解永久化學物質｜物質觀察",
  description: "一則關於 PFAS 低溫催化分解技術的模擬科學新聞。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
