import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OTM Kirish Ballari 2025-2026 | KRYZENSYS",
  description:
    "O'zbekistondagi barcha OTM (Oliy Ta'lim Muassasalari) uchun 2025-2026 o'quv yili kirish ballari. Qidiruv, filtr, taqqoslash.",
  keywords: ["OTM", "kirish ballari", "DTМ", "2025", "2026", "O'zbekiston", "universitet"],
  authors: [{ name: "KRYZENSYS" }],
  openGraph: {
    title: "OTM Kirish Ballari 2025-2026",
    description: "Barcha O'zbekiston OTMlari kirish ballari bir joyda",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
