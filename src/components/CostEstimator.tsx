"use client";

import { useState } from "react";
import { packages, addOns, ServicePackage, AddOn } from "./services";
import { hitungEstimasi, waMessage } from "./estimator";
import { Calculator, ArrowRight, Hash } from "lucide-react";

export default function CostEstimator() {
  const [pkgId, setPkgId] = useState("portfolio");
  const [addOnsIds, setAddOnsIds] = useState<string[]>([]);
  const [name, setName] = useState("");

  const pkg = packages.find((p) => p.id === pkgId)!;
  const availableAddOns = addOns.filter((a) => a.suitableFor.includes(pkgId));
  const result = hitungEstimasi(pkgId, addOnsIds);

  const toggleAddOn = (id: string) => {
    setAddOnsIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleWA = () => {
    const text = waMessage(pkgId, addOnsIds, name || undefined);
    window.open(`https://wa.me/6285199653255?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleTelegram = () => {
    const text = waMessage(pkgId, addOnsIds, name || undefined);
    window.open(`https://t.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const formatRupiah = (v: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(v);

  return (
    <section id="estimator" className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
            <Calculator className="w-4 h-4" /> Kalkulator Estimasi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Estimasi Biaya Proyek Anda</h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">Pilih paket & fitur tambahan. Hasil langsung muncul.</p>
          <p className="mt-1 text-xs text-slate-500">Harga menyesuaikan tingkat kerumitan dan custom fitur.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-5 bg-slate-900/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Nama (opsional)</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama bisnis Anda" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 mb-2">1. Pilih Paket</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {packages.map((p) => (
                  <button key={p.id} onClick={() => { setPkgId(p.id); setAddOnsIds([]); }} className={`p-4 rounded-xl text-left border transition ${pkgId === p.id ? "bg-cyan-600/20 border-cyan-500 text-white" : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600"}`}>
                    <div className="font-medium text-sm">{p.name}</div>
                    <div className="text-xs text-slate-400 mt-1">{formatRupiah(p.priceMin)} – {formatRupiah(p.priceMax)}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-300 mb-2">2. Add-on (opsional)</h3>
              <div className="space-y-2">
                {availableAddOns.length === 0 && <p className="text-xs text-slate-500">Tidak ada add-on untuk paket ini.</p>}
                {availableAddOns.map((a) => {
                  const on = addOnsIds.includes(a.id);
                  return (
                    <div key={a.id} onClick={() => toggleAddOn(a.id)} className={`flex items-center justify-between p-3 rounded-xl cursor-pointer border transition text-sm ${on ? "bg-cyan-500/10 border-cyan-500/40 text-white" : "bg-slate-800 border-slate-700/60 text-slate-300"}`}>
                      <span>{a.name}</span>
                      <span className="text-xs text-slate-400">{formatRupiah(a.priceMin)} – {formatRupiah(a.priceMax)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-5 sm:p-6 rounded-2xl border border-cyan-500/30 sticky top-20 shadow-xl">
            <h3 className="text-lg font-bold mb-4">Ringkasan</h3>
            <div className="space-y-2 text-sm text-slate-300 mb-4">
              <div className="flex justify-between"><span>Paket</span><span className="text-white font-medium">{pkg.name}</span></div>
              <div className="flex justify-between"><span>Add-on</span><span className="text-white">{result.addOnNames.length ? result.addOnNames.join(", ") : "—"}</span></div>
              <div className="flex justify-between"><span>Durasi</span><span className="text-cyan-400">±{result.daysMin}–{result.daysMax} hari</span></div>
            </div>
            <div className="border-t border-slate-800 pt-4 mb-4">
              <div className="text-[11px] text-slate-500 uppercase">Estimasi Investasi</div>
              <div className="text-2xl font-extrabold text-cyan-400">{formatRupiah(result.priceMin)} – {formatRupiah(result.priceMax)}</div>
              <p className="text-[11px] text-slate-500 mt-1">Estimasi kasar, belum mengikat.</p>
            </div>
            <button onClick={handleWA} className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm mb-2">
              Kirim via WhatsApp <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={handleTelegram} className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition text-sm border border-slate-700">
              Kirim via Telegram <Hash className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}