"use client";

import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { PortfolioItem } from "../data/portfolio";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const items = portfolioData.filter((p) => !p.concept);
  const t = items.length ? items[idx % items.length] : null;

  if (!t) return null;

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight">Apa Kata Klien</h2>
        <p className="mt-3 text-slate-400 text-sm">Testimoni dari klien yang sudah bekerja sama dengan Boyle Byte.</p>
        <div className="mt-8 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <p className="text-slate-300 text-sm italic leading-relaxed">"Proyek {t.title} selesai tepat waktu, komunikasi responsif, dan hasilnya langsung bisa dipakai bisnis."</p>
          <div className="mt-5 text-sm font-medium text-cyan-400">— Klien {t.title}</div>
        </div>
        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {items.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full ${i === idx % items.length ? "bg-cyan-500" : "bg-slate-700"}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}