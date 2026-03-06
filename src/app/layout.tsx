import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "常久株式会社 | 宠物用品专业经销商",
  description:
    "常久株式会社专注于宠物用品进口和销售，专业从事猫砂及宠物用品经销批发的综合服务商。主营豆腐猫砂、膨润土猫砂、混合猫砂等主流产品。",
  keywords: "猫砂,宠物用品,批发,经销商,豆腐猫砂,膨润土猫砂,OEM,ODM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${notoSansJP.variable} ${notoSansSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
