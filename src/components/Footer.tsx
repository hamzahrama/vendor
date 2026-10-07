"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold text-cyan-400 font-mono">BB</div>
          <p className="mt-2 text-xs text-slate-500">Boyle Byte — Dev house untuk UMKM & startup lokal.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-300 mb-3">Kontak</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="https://wa.me/6285199653255" target="_blank" rel="noreferrer" className="hover:text-white transition">WhatsApp: 0851-9965-3255</a></li>
            <li><a href="https://t.me/" target="_blank" rel="noreferrer" className="hover:text-white transition">Telegram: t.me/</a></li>
            <li><a href="mailto:hello@boylebyte.dev" className="hover:text-white transition">hello@boylebyte.dev</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-300 mb-3">Navigasi</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#hero" className="hover:text-white transition">Beranda</a></li>
            <li><a href="#services" className="hover:text-white transition">Layanan</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portofolio</a></li>
            <li><a href="#estimator" className="hover:text-white transition">Estimator</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-[11px] text-slate-600">© {year} Boyle Byte. All rights reserved.</div>
    </footer>
  );
}