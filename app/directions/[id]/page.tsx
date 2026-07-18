import Link from "next/link";
import { notFound } from "next/navigation";
import { GraduationCap, ArrowLeft, BookOpen, Users, DollarSign, Calendar, TrendingUp, Languages, GraduationCap as GIcon } from "lucide-react";
import { directions, getDirection } from "@/lib/data/directions";
import { getUniversity } from "@/lib/data/universities";

export function generateStaticParams() {
  return directions.map((d) => ({ id: d.id }));
}

export default async function DirectionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const d = getDirection(id);
  if (!d) notFound();
  const u = getUniversity(d.universityId);
  const diff = d.passingScore2025 - (d.passingScore2024 || 0);
  const priceDiff = d.contractPrice2025 - (d.contractPrice2024 || 0);

  // Tavsiya etiladigan boshqa yo'nalishlar (xuddi shu OTMda)
  const related = directions.filter((x) => x.universityId === d.universityId && x.id !== d.id).slice(0, 5);

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
        <Link href="/directions" className="mb-4 inline-flex items-center gap-1 text-sm text-brand-600 hover:underline">
          <ArrowLeft className="h-4 w-4" /> Yo'nalishlar
        </Link>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600">{d.code}</div>
          <h1 className="text-2xl font-bold md:text-3xl">{d.name}</h1>
          <div className="mt-2 text-sm text-slate-500">
            <Link href={`/universities/${u?.id}`} className="text-brand-600 hover:underline">
              {u?.name}
            </Link> · {d.faculty}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            <div className="rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 p-4 text-white">
              <div className="text-xs uppercase tracking-wide opacity-80">O'tish balli</div>
              <div className="mt-1 text-3xl font-black">{d.passingScore2025}</div>
              <div className="mt-1 text-xs opacity-80">
                {diff > 0 ? "▲" : diff < 0 ? "▼" : "="} {Math.abs(diff).toFixed(1)} (2024 ga nisbatan)
              </div>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <Users className="h-5 w-5 text-emerald-600" />
              <div className="mt-1 text-xs text-emerald-700">Grant kvota</div>
              <div className="text-2xl font-bold text-emerald-900">{d.grantQuota2025 || "—"}</div>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <DollarSign className="h-5 w-5 text-amber-600" />
              <div className="mt-1 text-xs text-amber-700">Kontrakt</div>
              <div className="text-xl font-bold text-amber-900">{(d.contractPrice2025 / 1000000).toFixed(1)} mln</div>
              <div className="text-[10px] text-amber-600">
                {priceDiff > 0 ? "+" : ""}{(priceDiff / 1000000).toFixed(1)} mln
              </div>
            </div>
            <div className="rounded-xl border border-violet-200 bg-violet-50 p-4">
              <Users className="h-5 w-5 text-violet-600" />
              <div className="mt-1 text-xs text-violet-700">Kontrakt kvota</div>
              <div className="text-2xl font-bold text-violet-900">{d.contractQuota2025}</div>
            </div>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-3 font-semibold">📚 Ta'lim haqida</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><GIcon className="h-4 w-4 text-slate-400" /> Daraja: <strong>{d.degree === "bachelor" ? "Bakalavr" : "Magistr"}</strong></li>
              <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-slate-400" /> Muddat: <strong>{d.duration} yil</strong></li>
              <li className="flex items-center gap-2"><Languages className="h-4 w-4 text-slate-400" /> Til: <strong>{d.language.toUpperCase()}</strong></li>
              <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-slate-400" /> Shakl: <strong>{d.studyForm}</strong></li>
              <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-slate-400" /> Minimal ball: <strong>{d.minScore}</strong></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="mb-3 font-semibold">📝 Imtihon fanlari</h3>
            <div className="flex flex-wrap gap-2">
              {d.subjects.map((s) => (
                <span key={s} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {s}
                </span>
              ))}
            </div>
            <h3 className="mb-3 mt-5 font-semibold">📅 2024 vs 2025 taqqoslash</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Ball 2024:</span><span className="font-medium">{d.passingScore2024 || "—"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Ball 2025:</span><span className="font-bold text-brand-600">{d.passingScore2025}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Kontrakt 2024:</span><span className="font-medium">{d.contractPrice2024 ? `${(d.contractPrice2024/1000000).toFixed(1)} mln` : "—"}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Kontrakt 2025:</span><span className="font-bold text-amber-600">{(d.contractPrice2025/1000000).toFixed(1)} mln</span></div>
            </div>
          </div>
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold">🔗 Shu OTMdagi boshqa yo'nalishlar</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/directions/${r.id}`}
                  className="rounded-xl border border-slate-200 bg-white p-3 transition hover:border-brand-400 hover:shadow"
                >
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                    <span>{r.code}</span>
                    <span className="font-bold text-brand-600">{r.passingScore2025}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
