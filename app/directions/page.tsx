"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpDown, GraduationCap, TrendingUp, TrendingDown } from "lucide-react";
import { directions } from "@/lib/data/directions";
import { getUniversity } from "@/lib/data/universities";

export default function DirectionsPage() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"score" | "price" | "code">("score");
  const [dir, setDir] = useState<"asc" | "desc">("desc");
  const [language, setLanguage] = useState<string>("all");
  const [degree, setDegree] = useState<string>("all");

  const filtered = useMemo(() => {
    let list = [...directions];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (d) => d.name.toLowerCase().includes(q) || d.code.includes(q) || d.faculty.toLowerCase().includes(q)
      );
    }
    if (language !== "all") list = list.filter((d) => d.language === language);
    if (degree !== "all") list = list.filter((d) => d.degree === degree);

    list.sort((a, b) => {
      let av: number, bv: number;
      if (sort === "score") { av = a.passingScore2025; bv = b.passingScore2025; }
      else if (sort === "price") { av = a.contractPrice2025; bv = b.contractPrice2025; }
      else { av = parseInt(a.code); bv = parseInt(b.code); }
      return dir === "asc" ? av - bv : bv - av;
    });
    return list;
  }, [query, sort, dir, language, degree]);

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
        <h1 className="mb-2 text-3xl font-bold">📋 Barcha yo'nalishlar</h1>
        <p className="mb-6 text-slate-500">{directions.length}+ yo'nalish · 2025-2026</p>

        <div className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Yo'nalish yoki kod..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:bg-white"
            />
          </div>
          <select value={`${sort}-${dir}`} onChange={(e) => { const [s, d] = e.target.value.split("-"); setSort(s as "score"|"price"|"code"); setDir(d as "asc"|"desc"); }} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:bg-white">
            <option value="score-desc">📊 Ball: yuqori → past</option>
            <option value="score-asc">📊 Ball: past → yuqori</option>
            <option value="price-desc">💰 Narx: yuqori → past</option>
            <option value="price-asc">💰 Narx: past → yuqori</option>
            <option value="code-asc">🔢 Kod: A → Z</option>
          </select>
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:bg-white">
            <option value="all">🌐 Barcha tillar</option>
            <option value="uz">O'zbek</option>
            <option value="ru">Rus</option>
            <option value="en">Ingliz</option>
          </select>
          <select value={degree} onChange={(e) => setDegree(e.target.value)} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:bg-white">
            <option value="all">🎓 Barcha darajalar</option>
            <option value="bachelor">Bakalavr</option>
            <option value="master">Magistr</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Yo'nalish</th>
                <th className="px-4 py-3">OTM</th>
                <th className="px-4 py-3 text-right">Ball 2025</th>
                <th className="px-4 py-3 text-right">Δ 2024</th>
                <th className="px-4 py-3 text-right">Grant</th>
                <th className="px-4 py-3 text-right">Kontrakt</th>
                <th className="px-4 py-3">Til</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((d) => {
                const u = getUniversity(d.universityId);
                const diff = (d.passingScore2025 - (d.passingScore2024 || 0)).toFixed(1);
                const isUp = parseFloat(diff) > 0;
                return (
                  <tr key={d.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <Link href={`/directions/${d.id}`} className="block">
                        <div className="font-medium text-slate-900 hover:text-brand-600">{d.name}</div>
                        <div className="text-xs text-slate-500">{d.code} · {d.faculty}</div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-600">
                      <Link href={`/universities/${d.universityId}`} className="hover:text-brand-600">{u?.shortName}</Link>
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-brand-600">{d.passingScore2025}</td>
                    <td className={`px-4 py-3 text-right text-xs font-medium ${isUp ? "text-emerald-600" : "text-rose-600"}`}>
                      <span className="inline-flex items-center gap-1">
                        {isUp ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {isUp ? "+" : ""}{diff}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-slate-700">{d.grantQuota2025 || "—"}</td>
                    <td className="px-4 py-3 text-right text-slate-700">{(d.contractPrice2025 / 1000000).toFixed(1)} mln</td>
                    <td className="px-4 py-3 text-xs uppercase text-slate-500">{d.language}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            Hech narsa topilmadi.
          </div>
        )}
      </div>
    </div>
  );
}
