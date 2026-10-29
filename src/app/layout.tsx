import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "احسان کشتگر | توسعه نرم‌افزار و راهکارهای سازمانی",
  description:
    "وب‌سایت شخصی احسان کشتگر؛ توسعه نرم‌افزار، ERP، CRM، طراحی وب و راهکارهای دیجیتال.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}