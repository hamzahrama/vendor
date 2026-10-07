"use client";

import { useState } from "react";
import { Send, Hash } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [pkg, setPkg] = useState("");
  const [budget, setBudget] = useState("");
  const [msg, setMsg] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);

  const handleWA = () => {
    if (honeypot) return;
    const text = `Halo Boyle Byte,${name ? ` ini ${name},` : ""}\n\nKebutuhan: ${pkg || "Belum dipilih"}\nAnggaran: ${budget || "Belum ditentukan"}\nPesan: ${msg}\n\nMohon info lebih lanjut.`;
    window.open(`https://wa.me/6285199653255?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  const handleTG = () => {
    if (honeypot) return;
    const text = `Halo Boyle Byte,${name ? ` ini ${name},` : ""}\n\nKebutuhan: ${pkg || "Belum dipilih"}\nAnggaran: ${budget || "Belum ditentukan"}\nPesan: ${msg}`;
    window.open(`https://t.me/?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  if (sent) return (
    <section id="contact" className="py-20 bg-slate-950 text-white px-4 text-center">
      <h2 className="text-3xl font-bold">Terima kasih! Pesan terkirim.</h2>
      <p className="mt-3 text-slate-400">Kami akan balas sesegera mungkin via WhatsApp/Telegram.</p>
    </section>
  );

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">Konsultasi Gratis</h2>
        <p className="mt-3 text-slate-400 text-sm text-center">Ceritakan kebutuhan proyek Anda.</p>
        <div className="mt-8 space-y-4">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama bisnis Anda" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500" />
          <select value={pkg} onChange={(e) => setPkg(e.target.value)} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500">
            <option value="">Pilih paket (opsional)</option>
            <option>Portofolio Digital & Landing Page</option>
            <option>Web App & Mobile App Custom</option>
            <option>Sistem Bisnis (POS & ERP)</option>
          </select>
          <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Anggaran (opsional)" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500" />
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="Ceritakan kebutuhan Anda..." className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500" />
          <div className="hidden"><input value={honeypot} onChange={(e) => setHoneypot(e.target.value)} /></div>
          <div className="flex gap-3">
            <button onClick={handleWA} className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm">Kirim WA <Send className="w-4 h-4" /></button>
            <button onClick={handleTG} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm border border-slate-700">Kirim TG <Hash className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}