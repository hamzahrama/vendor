"use client";

import { useState } from "react";
import { portfolioData } from "./data/portfolio";
import { ExternalLink, Github, Folder } from "lucide-react";

const categories = ["Semua", "Web App", "Mobile App", "POS / ERP", "Landing Page"] as const;

export default function PortfolioSection() {
  const [cat, setCat] = useState<string>("Semua");
  const [open, setOpen] = useState<typeof portfolioData[0] | null>(null);

  const list = cat === "Semua" ? portfolioData : portfolioData.filter((p) => p.category === cat);

  return (
    <section id="portfolio" className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            <Folder className="w-4 h-4" /> Portofolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Karya yang Sudah Kami Kerjakan</h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">Pilih kategori untuk melihat proyek. Label "Proyek Konsep" menandakan demo, bukan karya klien.</p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat === c ? "bg-cyan-600 text-white" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <div key={p.id} onClick={() => setOpen(p)} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all cursor-pointer group flex flex-col">
              <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-slate-200 text-xs px-3 py-1 rounded-full border border-slate-700">{p.category}{p.concept && " · Proyek Konsep"}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-cyan-400 transition">{p.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">{p.techStack.map((t) => <span key={t} className="bg-slate-800 text-slate-300 text-[11px] px-2.5 py-1 rounded-md">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>

        {list.length === 0 && <p className="text-center text-slate-500 py-10">Belum ada proyek di kategori ini.</p>}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full text-xs">✕</button>
            <img src={open.image} alt={open.title} className="w-full h-56 object-cover rounded-xl mb-5" />
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">{open.category}</span>
            {open.concept && <span className="ml-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">Proyek Konsep</span>}
            <h3 className="text-2xl font-bold mt-1 mb-3">{open.title}</h3>
            <p className="text-slate-300 text-sm mb-5 leading-relaxed">{open.description}</p>
            <div className="mb-5"><h4 className="text-xs font-semibold text-slate-400 uppercase mb-2">Tech Stack</h4><div className="flex flex-wrap gap-2">{open.techStack.map((t) => <span key={t} className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs px-3 py-1 rounded-lg">{t}</span>)}</div></div>
            <div className="flex gap-3 border-t border-slate-800 pt-5">
              {open.liveUrl && <a href={open.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm px-4 py-2.5 rounded-xl font-medium">Live Demo <ExternalLink className="w-4 h-4" /></a>}
              {open.githubUrl && <a href={open.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm px-4 py-2.5 rounded-xl font-medium">GitHub <Github className="w-4 h-4" /></a>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}