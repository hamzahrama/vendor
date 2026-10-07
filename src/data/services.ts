export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  priceMin: number;
  priceMax: number;
  duration: string;
  highlights: string[];
  techBadges: string[];
  suitableFor: string;
}

export interface AddOn {
  id: string;
  name: string;
  priceMin: number;
  priceMax: number;
  suitableFor: string[];
}

export const packages: ServicePackage[] = [
  {
    id: "portfolio",
    name: "Portofolio Digital & Landing Page",
    tagline: "Cepat jadi, rapi, dan siap dipakai bisnis.",
    priceMin: 500000,
    priceMax: 1000000,
    duration: "3–7 hari kerja",
    highlights: [
      "Desain responsif (HP & desktop)",
      "SEO dasar & halaman cepat",
      "Hubungi langsung via WhatsApp",
    ],
    techBadges: ["Next.js", "Tailwind", "Vercel"],
    suitableFor: "Pencari kerja, freelancer, UMKM kecil",
  },
  {
    id: "webapp",
    name: "Web App & Mobile App Custom",
    tagline: "Full-stack, clean code, siap dipakai.",
    priceMin: 2000000,
    priceMax: 5000000,
    duration: "2–6 minggu",
    highlights: [
      "Frontend + backend terstruktur",
      "Auth, database, deploy otomatis",
      "Garansi bug 30 hari",
    ],
    techBadges: ["Next.js", "NestJS", "PostgreSQL", "Tailwind"],
    suitableFor: "Startup & bisnis berkembang",
  },
  {
    id: "pos",
    name: "Sistem Bisnis (POS & ERP)",
    tagline: "Kasir, inventaris, laporan — sesuai alur kerja Anda.",
    priceMin: 3000000,
    priceMax: 8000000,
    duration: "4–8 minggu",
    highlights: [
      "Kasir & manajemen inventaris",
      "Laporan penjualan otomatis",
      "Bisa diakses HP & desktop",
    ],
    techBadges: ["Next.js", "Prisma", "PostgreSQL", "Docker"],
    suitableFor: "UMKM menengah & toko online",
  },
];

export const addOns: AddOn[] = [
  { id: "auth", name: "Fitur Auth & Multi-role", priceMin: 500000, priceMax: 1500000, suitableFor: ["webapp", "pos"] },
  { id: "payment", name: "Integrasi Payment Gateway", priceMin: 750000, priceMax: 1500000, suitableFor: ["webapp", "pos"] },
  { id: "wa", name: "Integrasi WhatsApp / Notif", priceMin: 300000, priceMax: 750000, suitableFor: ["portfolio", "webapp", "pos"] },
  { id: "cms", name: "Admin Dashboard / CMS", priceMin: 1000000, priceMax: 2500000, suitableFor: ["webapp", "pos"] },
  { id: "seo", name: "SEO & Performance", priceMin: 500000, priceMax: 1000000, suitableFor: ["portfolio", "webapp"] },
  { id: "domain", name: "Domain & Hosting Tahun Pertama", priceMin: 200000, priceMax: 350000, suitableFor: ["portfolio", "webapp", "pos"] },
];
