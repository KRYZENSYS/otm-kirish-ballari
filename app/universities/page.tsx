"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MapPin, GraduationCap, Building2 } from "lucide-react";
import { universities } from "@/lib/data/universities";

export default function UniversitiesPage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<string>("all");
  const [ownership, setOwnership] = useState<string>("all");
  const [type, setType] = useState<string>("all");

  const regions = useMemo(
    () => Array.from(new Set(universities.map((u) => u.region))).sort(),
    []
  );

  const filtered = useMemo(() => {
    return universities.filter((u) => {
      if (region !== "all" && u.region !== region) return false;
      if (ownership !== "all" && u.ownership !== ownership) return false;
      if (type !== "all" && u.type !== type) return false;
      if (query) {
        const q = query.toLowerCase();
        if (
          !u.name.toLowerCase().includes(q) &&
          !u.shortName.toLowerCase().includes(q) &&
          !u.city.toLowerCase().includes(q)
        ) return false;
      }
      return true;
    });
  }, [query, region, ownership, type]);

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
        <h1 className="mb-2 text-3xl font-bold">📚 Barcha OTMlar</h1>
        <p className="mb-6 text-slate-500">{universities.length} ta oliy ta'lim muassasasi</p>

        {/* FILTERS */}
        <div className="mb-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 md:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="OTM, shahar yoki qisqartma..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:bg-white"
            />
          </div>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:bg-white">
            <option value="all">🌍 Barcha hududlar</option>
            {regions.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <select value={ownership} onChange={(e) => setOwnership(e.target.value)} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:bg-white">
            <option value="all">🏛 Barcha turdagi</option>
            <option value="state">Davlat</option>
            <option value="private">Xususiy</option>
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:bg-white">
            <option value="all">📋 Barcha turlar</option>
            <option value="university">Universitet</option>
            <option value="institute">Institut</option>
            <option value="academy">Akademiya</option>
          </select>
        </div>

        <p className="mb-3 text-sm text-slate-500">{filtered.length} ta natija</p>

        {/* GRID */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((u) => (
            <Link
              key={u.id}
              href={`/universities/${u.id}`}
              className="group rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand-400 hover:shadow-md"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-indigo-600 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  u.ownership === "state" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                }`}>
                  {u.ownership === "state" ? "Davlat" : "Xususiy"}
                </span>
              </div>
              <div className="text-xs font-medium uppercase tracking-wide text-brand-600">{u.shortName}</div>
              <h3 className="mt-1 line-clamp-2 font-semibold leading-tight group-hover:text-brand-700">{u.name}</h3>
              <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="h-3 w-3" /> {u.city}, {u.region}
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            Hech narsa topilmadi. Boshqa filtr bilan urinib ko'ring.
          </div>
        )}
      </div>
    </div>
  );
}
