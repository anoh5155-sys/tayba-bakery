import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "طيبة من الفينو للجاتوه | Rigosa",
  description: "مخبوزات وحلويات شرقية وغربية طازة يوميًا - فروع طيبة والطلب عبر واتساب.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
