import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VELURE | Root Volume. Redefined.",
  description:
    "한국 프로페셔널 헤어케어 브랜드 VELURE — 드라이 없이도, 뿌리부터 자연스러운 볼륨.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${playfair.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
