"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [path, setPath] = useState("portfolio");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("show", e.isIntersecting)),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const jumps = {
    portfolio: "#portfolio",
    webapp: "#services",
    pos: "#services",
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center bg-slate-950 text-white px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(139,92,246,0.25),_transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto text-center reveal" ref={ref}>
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-cyan-500/20">Dev House untuk UMKM & Startup</div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">Website & Sistem yang <span className="text-cyan-400">cepat jadi</span>, langsung dipakai bisnis.</h1>
        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">Clean code, hasil terstruktur, dan pengerjaan sesuai kebutuhan UMKM lokal.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#contact" className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition text-sm">Konsultasi Gratis <ArrowRight className="w-4 h-4" /></a>
          <a href="#portfolio" className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition text-sm border border-slate-700">Lihat Karya <ChevronDown className="w-4 h-4" /></a>
        </div>
        <div className="mt-10 flex justify-center gap-3 flex-wrap">
          {[{id:"portfolio",label:"Portofolio Digital",icon:"🌐"},{id:"webapp",label:"Web & Mobile App",icon:"📱"},{id:"pos",label:"POS & ERP",icon:"🖥️"}].map((c) => (
            <button key={c.id} onClick={() => document.querySelector(c.id === "portfolio" ? "#portfolio" : "#services")?.scrollIntoView({behavior:"smooth"})} className={`px-5 py-3 rounded-xl border text-sm font-medium transition ${path===c.id?"bg-cyan-600 border-cyan-500 text-white":"bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600"}`}>{c.icon} {c.label}</button>
          ))}
        </div>
      </div>
    </section>
  );
}