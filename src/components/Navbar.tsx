"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Hash } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-cyan-400 font-mono">BB</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#hero" onClick={() => {}} className="hover:text-white transition">Beranda</a>
          <a href="#services" onClick={() => {}} className="hover:text-white transition">Layanan</a>
          <a href="#portfolio" onClick={() => {}} className="hover:text-white transition">Portofolio</a>
          <a href="#estimator" onClick={() => {}} className="hover:text-white transition">Estimator</a>
          <a href="#contact" onClick={() => {}} className="hover:text-white transition">Kontak</a>
          <a href="https://wa.me/6285199653255" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium transition">WhatsApp</a>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className="text-slate-400 hover:text-white" aria-label="Toggle theme">{dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</button>
          <button onClick={() => setOpen(true)} className="md:hidden text-slate-300"><Menu className="w-6 h-6" /></button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
          <a href="#hero" onClick={() => setOpen(false)} className="block text-sm text-slate-300 hover:text-white">Beranda</a>
          <a href="#services" onClick={() => setOpen(false)} className="block text-sm text-slate-300 hover:text-white">Layanan</a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="block text-sm text-slate-300 hover:text-white">Portofolio</a>
          <a href="#estimator" onClick={() => setOpen(false)} className="block text-sm text-slate-300 hover:text-white">Estimator</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm text-slate-300 hover:text-white">Kontak</a>
          <a href="https://wa.me/6285199653255" target="_blank" rel="noreferrer" className="block bg-green-600 hover:bg-green-500 text-white text-center px-4 py-2 rounded-full text-sm font-medium">WhatsApp</a>
          <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-slate-400"><X className="w-6 h-6" /></button>
        </div>
      )}
    </header>
  );
}