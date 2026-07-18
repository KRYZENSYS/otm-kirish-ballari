import Link from "next/link";
import { GraduationCap, Search, TrendingUp, BookOpen, Filter, Sparkles, Award, Globe2, Users } from "lucide-react";
import { universities, getUniversity } from "@/lib/data/universities";
import { directions } from "@/lib/data/directions";

export default function HomePage() {
  const totalUniversities = universities.length;
  const totalDirections = directions.length;
  const totalRegions = new Set(universities.map((u) => u.region)).size;
  const stateCount = universities.filter((u) => u.ownership === "state").length;
  const privateCount = universities.filter((u) => u.ownership === "private").length;

  // Top 10 yo'nalish — eng baland o'tish balli bo'yicha
  const topDirections = [...directions]
    .sort((a, b) => b.passingScore2025 - a.passingScore2025)
    .slice(0, 10);

  // Top 5 ta OTM — yo'nalishlar soni bo'yicha
  const topUniversities = [...universities]
    .map((u) => ({ u, count: directions.filter((d) => d.universityId === u.id).length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 text-white shadow-md">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold leading-tight">OTM Ballari</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">KRYZENSYS · 2025-2026</div>
            </div>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
            <Link href="/universities" className="hover:text-brand-600">OTMlar</Link>
            <Link href="/directions" className="hover:text-brand-600">Yo'nalishlar</Link>
            <Link href="/compare" className="hover:text-brand-600">Taqqoslash</Link>
            <Link href="/about" className="hover:text-brand-600">Ma'lumot</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-bg">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <Sparkles className="h-3 w-3" /> 2025-2026 o'quv yili ma'lumotlari
            </div>
            <h1 className="mb-4 text-4xl font-black leading-tight md:text-6xl">
              OTM <span className="gradient-text">kirish ballari</span> bir joyda
            </h1>
            <p className="mb-8 text-lg text-slate-600">
              O'zbekistondagi barcha {totalUniversities} ta OTM va {totalDirections}+ yo'nalish uchun
              2025-2026 yilgi kirish ballari, kvotalar va kontrakt narxlari.
            </p>
            <Link
              href="/universities"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-700"
            >
              <Search className="h-4 w-4" /> OTMlarni ko'rish
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { icon: GraduationCap, label: "OTM", value: totalUniversities },
              { icon: BookOpen, label: "Yo'nalish", value: totalDirections + "+" },
              { icon: Globe2, label: "Hudud", value: totalRegions },
              { icon: Users, label: "Davlat / Xususiy", value: `${stateCount} / ${privateCount}` },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <s.icon className="mb-2 h-5 w-5 text-brand-600" />
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOP 10 DIRECTIONS */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">🏆 Top 10 yo'nalish</h2>
            <p className="text-sm text-slate-500">Eng yuqori kirish ballari bo'yicha 2025-2026</p>
          </div>
          <Link href="/directions" className="text-sm font-medium text-brand-600 hover:underline">Barchasi →</Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {topDirections.map((d, idx) => {
            const u = getUniversity(d.universityId);
            return (
              <Link
                key={d.id}
                href={`/directions/${d.id}`}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 text-sm font-bold text-white">
                  {idx + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold">{d.name}</div>
                  <div className="truncate text-xs text-slate-500">{u?.shortName} · {d.code}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-brand-600">{d.passingScore2025}</div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-400">ball</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TOP 5 UNIVERSITIES */}
      <section className="bg-slate-50/60 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">🎓 Top OTMlar</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topUniversities.map(({ u, count }) => (
              <Link
                key={u.id}
                href={`/universities/${u.id}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-brand-300 hover:shadow-lg"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wide text-brand-600">{u.shortName}</div>
                    <h3 className="mt-1 line-clamp-2 text-base font-bold leading-tight">{u.name}</h3>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${u.ownership === "state" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                    {u.ownership === "state" ? "Davlat" : "Xususiy"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>📍 {u.city}</span>
                  <span>·</span>
                  <span>{count} yo'nalish</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Qanday foydalanish?</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Search, title: "OTM tanlang", desc: "Viloyat, shahar yoki nom bo'yicha qidiring" },
            { icon: Filter, title: "Filtr qo'llang", desc: "Yo'nalish, til, ball, kvota bo'yicha saralash" },
            { icon: TrendingUp, title: "Taqqoslang", desc: "2024 vs 2025 o'zgarishini ko'ring" },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p className="mb-2">© 2026 <strong>KRYZENSYS</strong> · OTM Kirish Ballari</p>
          <p>Ma'lumotlar DTM (davlat test markazi) rasmiy ma'lumotlari asosida. 100% bepul.</p>
        </div>
      </footer>
    </div>
  );
}
