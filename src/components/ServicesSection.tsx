"use client";

import { useState } from "react";
import { packages } from "./services";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Layanan Kami</h2>
          <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">Paket dirancang untuk UMKM & startup lokal. Harga mulai dari Rp 500rb.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.id} onMouseEnter={() => setHover(p.id)} onMouseLeave={() => setHover(null)} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition flex flex-col">
              <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-2">{p.tagline}</div>
              <h3 className="text-xl font-bold mb-3">{p.name}</h3>
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">Rp {p.priceMin.toLocaleString("id-ID")} – {p.priceMax.toLocaleString("id-ID")}</div>
              <div className="text-xs text-slate-500 mb-4">{p.duration}</div>
              <ul className="space-y-2 text-sm text-slate-300 mb-5 flex-1">
                {p.highlights.map((h) => <li key={h} className="flex items-start gap-2">✓ <span>{h}</span></li>)}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.techBadges.map((t) => <span key={t} className="bg-slate-800 text-slate-300 text-[11px] px-2.5 py-1 rounded-md font-mono">{t}</span>)}
              </div>
              <a href="#estimator" className="bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 transition">Estimasi <ArrowRight className="w-4 h-4" /></a>
              <div className="text-[11px] text-slate-500 mt-3">Cocok untuk: {p.suitableFor}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}