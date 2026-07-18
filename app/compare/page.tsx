"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GraduationCap, GitCompare, Plus, X } from "lucide-react";
import { directions } from "@/lib/data/directions";
import { getUniversity } from "@/lib/data/universities";

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return directions
      .filter((d) => d.name.toLowerCase().includes(q) || d.code.includes(q))
      .slice(0, 8);
  }, [query]);

  const items = selected.map((id) => directions.find((d) => d.id === id)!).filter(Boolean);

  const add = (id: string) => {
    if (selected.length >= 4) return;
    if (selected.includes(id)) return;
    setSelected([...selected, id]);
    setQuery("");
  };
  const remove = (id: string) => setSelected(selected.filter((x) => x !== id));

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
        <h1 className="mb-2 text-3xl font-bold">🔀 Yo'nalishlarni taqqoslash</h1>
        <p className="mb-6 text-slate-500">2-4 ta yo'nalishni tanlab, yonma-yon taqqoslang</p>

        {/* SELECTOR */}
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔍 Yo'nalish qidirish (kod yoki nom)..."
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm outline-none focus:border-brand-400"
            />
            {filtered.length > 0 && (
              <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                {filtered.map((d) => {
                  const u = getUniversity(d.universityId);
                  return (
                    <button
                      key={d.id}
                      onClick={() => add(d.id)}
                      className="flex w-full items-center justify-between gap-3 border-b border-slate-100 px-4 py-2 text-left text-sm last:border-0 hover:bg-slate-50"
                    >
                      <div>
                        <div className="font-medium">{d.name}</div>
                        <div className="text-xs text-slate-500">{d.code} · {u?.shortName}</div>
                      </div>
                      <Plus className="h-4 w-4 text-brand-600" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* CHIPS */}
        {items.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {items.map((d) => (
              <div key={d.id} className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
                {d.name.slice(0, 40)}…
                <button onClick={() => remove(d.id)} className="hover:text-brand-900"><X className="h-3 w-3" /></button>
              </div>
            ))}
          </div>
        )}

        {/* TABLE */}
        {items.length >= 2 ? (
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Parametr</th>
                  {items.map((d) => (
                    <th key={d.id} className="px-4 py-3 text-left">{d.code}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <Row label="Yo'nalish" values={items.map((d) => d.name)} />
                <Row label="OTM" values={items.map((d) => getUniversity(d.universityId)?.shortName || "—")} />
                <Row label="Til" values={items.map((d) => d.language.toUpperCase())} />
                <Row label="Muddat" values={items.map((d) => `${d.duration} yil`)} />
                <Row label="Ball 2025" values={items.map((d) => d.passingScore2025)} highlight />
                <Row label="Ball 2024" values={items.map((d) => d.passingScore2024 || "—")} />
                <Row label="Δ Ball" values={items.map((d) => {
                  const diff = d.passingScore2025 - (d.passingScore2024 || 0);
                  return `${diff > 0 ? "+" : ""}${diff.toFixed(1)}`;
                })} />
                <Row label="Grant kvota" values={items.map((d) => d.grantQuota2025 || "—")} />
                <Row label="Kontrakt kvota" values={items.map((d) => d.contractQuota2025)} />
                <Row label="Kontrakt narxi" values={items.map((d) => `${(d.contractPrice2025/1000000).toFixed(1)} mln`)} highlight />
                <Row label="Minimal ball" values={items.map((d) => d.minScore)} />
                <Row
                  label=""
                  values={items.map((d) => (
                    <Link key={d.id} href={`/directions/${d.id}`} className="text-xs font-medium text-brand-600 hover:underline">
                      Batafsil →
                    </Link>
                  ))}
                />
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
            <GitCompare className="mx-auto mb-3 h-12 w-12 text-slate-300" />
            <h3 className="mb-1 font-semibold text-slate-700">Kamida 2 ta yo'nalish tanlang</h3>
            <p className="text-sm text-slate-500">Yuqoridagi qidiruv orqali yo'nalish qidiring va qo'shing</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, values, highlight }: { label: string; values: (string | number | React.ReactNode)[]; highlight?: boolean }) {
  return (
    <tr className={highlight ? "bg-brand-50/40" : ""}>
      <td className="px-4 py-3 text-xs font-medium text-slate-500">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="px-4 py-3 font-medium">{v}</td>
      ))}
    </tr>
  );
}
