import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "常久株式会社 | ペット用品専門卸売",
  description:
    "常久株式会社はペット用品の輸入・販売を専門とする総合卸売商社です。豆腐猫砂、ベントナイト猫砂、混合猫砂など各種猫砂を取り扱っております。",
  keywords: "猫砂,ペット用品,卸売,代理店,豆腐猫砂,ベントナイト猫砂,OEM,ODM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
