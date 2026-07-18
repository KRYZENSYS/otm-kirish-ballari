import Link from "next/link";
import { GraduationCap, Github, Database, Sparkles, Shield, Smartphone, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold">OTM Ballari</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-3 text-3xl font-bold">Loyiha haqida</h1>
        <p className="mb-8 text-slate-600">
          <strong>OTM Ballari</strong> — O'zbekistondagi barcha oliy ta'lim muassasalari (OTM) uchun
          2025-2026 o'quv yili kirish ballari, kvotalar va kontrakt narxlarini
          birlashtirgan ochiq platforma. Loyiha KRYZENSYS tomonidan bepul yaratilgan.
        </p>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {[
            { icon: Database, title: "Ma'lumotlar", desc: "DTM (davlat test markazi) ma'lumotlari asosida. Har yili yangilanadi." },
            { icon: Sparkles, title: "Tezkor", desc: "Next.js 15 + Tailwind CSS — 1 soniyada yuklanadi." },
            { icon: Smartphone, title: "Mobil", desc: "To'liq responsive — telefon, planshet, kompyuterda ishlaydi." },
            { icon: Shield, title: "Bepul & Ochiq", desc: "100% bepul, reklama yo'q, ma'lumotlaringiz xavfsiz." },
          ].map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
              <f.icon className="mb-2 h-6 w-6 text-brand-600" />
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-3 text-xl font-bold">📌 Ma'lumot manbasi</h2>
          <p className="mb-3 text-sm text-slate-600">
            Barcha ballar, kvotalar va narxlar <a href="https://dtm.uz" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">DTM.uz</a> rasmiy saytidan olingan.
            2025-2026 yilgi ma'lumotlar e'lon qilingan zahotiyoq sayt yangilanadi.
          </p>
          <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
            ⚠️ Eslatma: Ballar taxminiy bo'lib, 2024-2025 yilgi ma'lumotlar asosida ko'rsatilgan.
            DTM tomonidan 2025-2026 rasmiy natijalari e'lon qilinganda to'liq yangilanadi.
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <Heart className="h-4 w-4 text-rose-500" /> Made with care by <strong className="text-brand-600">KRYZENSYS</strong>
        </div>
      </div>
    </div>
  );
}
