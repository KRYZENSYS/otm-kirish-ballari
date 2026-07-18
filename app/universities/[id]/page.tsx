import Link from "next/link";
import { notFound } from "next/navigation";
import { GraduationCap, MapPin, Globe, Building2, BookOpen, ArrowRight } from "lucide-react";
import { universities, getUniversity } from "@/lib/data/universities";
import { getDirectionsByUniversity } from "@/lib/data/directions";

export function generateStaticParams() {
  return universities.map((u) => ({ id: u.id }));
}

export default async function UniversityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const u = getUniversity(id);
  if (!u) notFound();
  const dirs = getDirectionsByUniversity(id);
  const avgScore = dirs.length ? (dirs.reduce((s, d) => s + d.passingScore2025, 0) / dirs.length).toFixed(1) : "—";

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

      <div className="container mx-auto px-4 py-8">
        <Link href="/universities" className="mb-4 inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          ← Barcha OTMlar
        </Link>

        {/* HEADER */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 text-3xl font-bold text-white shadow-lg">
              {u.shortName.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-600">{u.shortName}</div>
              <h1 className="mt-1 text-2xl font-bold md:text-3xl">{u.name}</h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {u.city}, {u.region}</span>
                <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> {u.type === "university" ? "Universitet" : u.type === "institute" ? "Institut" : "Akademiya"}</span>
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${u.ownership === "state" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                  {u.ownership === "state" ? "🏛 Davlat" : "💼 Xususiy"}
                </span>
                {u.website && (
                  <a href={u.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-brand-600 hover:underline">
                    <Globe className="h-4 w-4" /> Rasmiy sayt
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
            <div>
              <div className="text-xs text-slate-500">Yo'nalishlar</div>
              <div className="text-2xl font-bold">{dirs.length}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">O'rtacha ball</div>
              <div className="text-2xl font-bold text-brand-600">{avgScore}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Grant o'rni</div>
              <div className="text-2xl font-bold">{dirs.reduce((s, d) => s + d.grantQuota2025, 0)}</div>
            </div>
          </div>
        </div>

        {/* DIRECTIONS LIST */}
        <h2 className="mb-4 text-xl font-bold">📋 Yo'nalishlar</h2>
        <div className="space-y-2">
          {dirs.map((d) => {
            const diff = d.passingScore2025 - (d.passingScore2024 || 0);
            return (
              <Link
                key={d.id}
                href={`/directions/${d.id}`}
                className="group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-400 hover:shadow-md md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <div className="font-semibold text-slate-900 group-hover:text-brand-600">{d.name}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {d.code} · {d.faculty} · {d.duration} yil · {d.language.toUpperCase()}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Ball 2025</div>
                    <div className="font-bold text-brand-600">{d.passingScore2025}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Grant</div>
                    <div className="font-semibold">{d.grantQuota2025 || "—"}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Kontrakt</div>
                    <div className="font-semibold">{(d.contractPrice2025 / 1000000).toFixed(1)} mln</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-brand-600" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
