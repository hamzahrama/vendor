export default function WorkflowSection() {
  const steps = [
    { n: "01", title: "Konsultasi & Briefing", desc: "Ceritakan kebutuhan bisnis, target audiens, dan anggaran.", deliverable: "Briefing & proposal awal" },
    { n: "02", title: "Perancangan & UI/UX", desc: "Wireframe, desain visual, dan persetujuan sebelum development.", deliverable: "Desain final + mockup" },
    { n: "03", title: "Development & Testing", desc: "Pengerjaan, uji di berbagai perangkat, perbaikan bug.", deliverable: "Website/app siap pakai" },
    { n: "04", title: "Deployment & Serah Terima", desc: "Deploy online, dokumentasi, masa garansi bug.", deliverable: "Live + panduan penggunaan" },
  ];

  return (
    <section id="workflow" className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Cara Kerja</h2>
          <p className="mt-3 text-slate-400 text-sm max-w-lg mx-auto">Proses jelas, transparan, dan sesuai kebutuhan bisnis Anda.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition">
              <div className="text-cyan-500 font-mono text-3xl font-bold mb-2">{s.n}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
              <div className="text-xs text-slate-500 border-t border-slate-800 pt-3">Anda dapat: <strong className="text-slate-300">{s.deliverable}</strong></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}