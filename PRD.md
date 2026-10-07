# PRD: Website Boyle Byte (v2)

## 1. Ringkasan

**Boyle Byte** adalah dev house / digital agency untuk UMKM, profesional, dan solopreneur.
Website ini berfungsi sebagai **mesin konversi**: pengunjung memahami layanan, melihat bukti karya,
memperkirakan biaya, lalu menghubungi lewat WhatsApp.

**Tagline utama:** "Solusi Perangkat Lunak & Portofolio Digital Berdampak Tinggi untuk UMKM dan Profesional."
(Opsional, versi lebih singkat untuk hero: "Kami bangun website dan sistem yang membuat bisnis Anda lebih dipercaya.")

**Vibe:** modern, sleek, teknis, profesional. Dark-first, bersih, banyak ruang kosong.

## 2. Tujuan & Indikator Keberhasilan

| Tujuan                | Indikator (KPI)                                        | Target awal |
| --------------------- | ------------------------------------------------------ | ----------- |
| Menghasilkan lead     | Klik tombol WhatsApp / submit form per 100 pengunjung  | >= 5        |
| Mengedukasi harga     | Persentase pengunjung yang memakai kalkulator          | >= 20%      |
| Membangun kepercayaan | Pengunjung yang membuka minimal 1 detail proyek        | >= 30%      |
| Performa              | Lighthouse (mobile): Performance / Accessibility / SEO | >= 90       |

## 3. Target Audiens (persona)

1. **Pemilik UMKM**: butuh landing page, toko online, atau sistem kasir. Bahasa sederhana, fokus hasil (lebih banyak pelanggan, lebih rapi).
2. **Pencari kerja / freelancer**: butuh portofolio digital. Fokus nilai tawar karier, harga terjangkau, cepat jadi.
3. **Solopreneur / individu**: butuh aplikasi atau integrasi custom. Fokus kemampuan teknis dan proses yang jelas.

Hero menampilkan **pemilih jalur** (3 chip). Klik chip menggulir ke layanan yang relevan dan menyesuaikan sorotan di kalkulator.

## 4. Layanan (dikelompokkan jadi 3 paket utama)

| Paket                                 | Isi                                                                                            | Cocok untuk                           |
| ------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------- |
| **Portofolio Digital & Landing Page** | Website personal/produk, responsif, cepat, SEO dasar                                           | Pencari kerja, freelancer, UMKM kecil |
| **Web & Mobile App Custom**           | Full-stack web app, aplikasi Android/iOS, UI/UX, API & integrasi (payment gateway, WA gateway) | Solopreneur, bisnis berkembang        |
| **Sistem Bisnis (POS & ERP)**         | Kasir, inventaris, penjualan, laporan sesuai alur kerja klien                                  | UMKM menengah                         |

Aturan konten: setiap kartu layanan memuat (1) manfaat untuk klien dalam 1 kalimat, (2) 3 poin isi,
(3) **badge tech stack**, (4) tautan "Hitung estimasi" yang membuka kalkulator dengan paket terpilih.

> Catatan jujur: tampilkan layanan yang sudah punya contoh karya sebagai unggulan. Layanan yang belum punya bukti cukup ditulis di bagian "Layanan lainnya".

## 5. Struktur Halaman (urutan berdasarkan alur keputusan)

1. **Navbar** sticky + tombol CTA + toggle tema
2. **Hero**: headline, sub-headline, pemilih jalur, CTA "Konsultasi Gratis" (WhatsApp) dan "Lihat Karya"
3. **Trust bar**: angka singkat (jumlah proyek, tahun pengalaman) dan logo/tech stack
4. **Layanan**: 3 paket di atas
5. **Portofolio**: galeri dengan filter + modal detail
6. **Kalkulator Estimasi Biaya**
7. **Cara Kerja** (4 langkah)
8. **Testimoni**
9. **FAQ** (accordion)
10. **Kontak / Booking Konsultasi** + footer

## 6. Spesifikasi Fitur

### 6.1 Hero

- Satu headline berorientasi hasil, bukan daftar teknologi.
- CTA primer: **Konsultasi Gratis** (buka WhatsApp dengan pesan otomatis). CTA sekunder: **Lihat Karya** (scroll ke portofolio).
- Animasi masuk halus (Framer Motion), menghormati `prefers-reduced-motion`.

### 6.2 Portofolio + Modal Detail

- Filter: Semua, Web App, Mobile App, POS/ERP, Portofolio/Landing Page. Filter bekerja tanpa reload dan tersimpan di URL (`?kategori=pos`).
- Kartu: gambar, judul, kategori, 2-3 badge stack.
- **Modal detail (studi kasus singkat):** Masalah klien, Solusi, Hasil, Stack, tautan demo (jika ada).
- Jika belum ada proyek klien, tampilkan **proyek konsep** dan beri label jelas "Proyek Konsep". Jangan klaim sebagai karya klien.
- Tambahan: bagian **Galeri Template Portofolio** (demo template yang bisa langsung dilihat calon klien pencari kerja).

### 6.3 Kalkulator Estimasi Biaya

**Alur:** pilih paket layanan, pilih add-on, lihat estimasi, klik **Ambil Penawaran Ini**.

**Aturan:**

- Harga ditampilkan sebagai **rentang** ("Rp X - Rp Y") dengan label "estimasi kasar, belum mengikat".
- Durasi ditampilkan sebagai rentang hari/minggu dan dihitung dari paket + add-on.
- Hasil berubah real-time (React state), ada transisi angka halus.
- Semua harga, add-on, dan durasi disimpan di **satu file konfigurasi** (`data/pricing.ts`) agar mudah diubah tanpa menyentuh komponen.

**Contoh struktur data:**

- Paket: `id`, `nama`, `hargaMin`, `hargaMax`, `durasiMinHari`, `durasiMaxHari`
- Add-on: `id`, `nama`, `tambahanHarga`, `tambahanHari`, `berlakuUntuk[]` (paket mana saja)
- Contoh add-on: halaman tambahan, integrasi WhatsApp/payment gateway, CMS/panel admin, SEO lanjutan, domain & hosting, maintenance bulanan.

**Pesan WhatsApp otomatis (contoh format):**
"Halo Boyle Byte, saya tertarik dengan paket _[nama paket]_ dengan add-on: [daftar]. Estimasi di website: [rentang harga], [rentang durasi]. Mohon info lebih lanjut."

Harga di atas hanyalah struktur. **Isi angka sesuai harga Anda sendiri.**

### 6.4 Cara Kerja (4 langkah)

1. Konsultasi & Briefing: kebutuhan, target, anggaran
2. Perancangan & UI/UX: wireframe, desain, persetujuan klien
3. Development & Testing: pengerjaan, uji di berbagai perangkat
4. Deployment & Serah Terima: online, dokumentasi, masa garansi bug

Tiap langkah menampilkan estimasi durasi dan **apa yang klien terima** di langkah itu.

### 6.5 Testimoni

- Format: nama, jenis klien (UMKM / profesional / individu), isi, hasil singkat. Foto atau inisial.
- Gunakan testimoni asli. Jika belum ada, sembunyikan section ini dulu atau tandai "contoh".

### 6.6 FAQ (baru)

Pertanyaan umum: berapa lama pengerjaan, berapa kali revisi, apakah termasuk domain/hosting, sistem pembayaran (DP/termin), apakah ada garansi, bagaimana jika ingin menambah fitur nanti. Memakai komponen accordion Shadcn.

### 6.7 Form Inquiry / Booking Konsultasi

- Field: nama, kebutuhan (dropdown paket), anggaran (opsional), pesan.
- Aksi: **Kirim via WhatsApp** (utama) dan **Kirim via Email** (alternatif).
- Validasi di sisi klien, pesan error jelas dalam bahasa Indonesia, dan **honeypot** sederhana untuk menahan spam.

### 6.8 Fitur Sederhana Tambahan

| Fitur                                            | Manfaat                                                  |
| ------------------------------------------------ | -------------------------------------------------------- |
| Tombol WhatsApp mengambang                       | Kontak selalu terjangkau di HP                           |
| Mode gelap / terang                              | Kenyamanan, kesan teknis                                 |
| Progress bar scroll                              | Navigasi terasa halus                                    |
| Pelacakan klik CTA (Plausible/GA4)               | Mengukur KPI dan tahu bagian mana yang efektif           |
| Metadata SEO + gambar Open Graph                 | Tampilan bagus saat link dibagikan                       |
| Tombol "Salin link estimasi"                     | Calon klien bisa membagikan hasil kalkulator ke rekan    |
| Banner ketersediaan ("Slot proyek bulan ini: 2") | Dorongan keputusan yang jujur (isi sesuai kondisi nyata) |

## 7. Stack Teknis

- **Framework:** Next.js (App Router), React, TypeScript
- **UI:** Tailwind CSS, Shadcn UI, Lucide React
- **Animasi:** Framer Motion (durasi singkat, hormati reduced-motion)
- **Hosting:** Vercel
- **Gambar:** `next/image`, format WebP/AVIF
- **Tanpa backend** untuk versi awal. Seluruh konten dari file data bertipe.

**Struktur folder yang disarankan:**

    src/
    ├── app/                 -> halaman & layout
    ├── components/
    │   ├── sections/        -> Hero, Services, Portfolio, Estimator, dll.
    │   └── ui/              -> komponen Shadcn
    ├── data/                -> services.ts, projects.ts, pricing.ts, faq.ts, testimonials.ts
    ├── lib/                 -> whatsapp.ts (pembuat pesan), analytics.ts
    └── public/              -> gambar, favicon, OG image

Nomor WhatsApp dan alamat email disimpan di `.env` (`NEXT_PUBLIC_WA_NUMBER`), bukan ditulis di komponen.

## 8. Arahan Desain

- **Warna:** latar gelap (navy/slate), satu warna aksen terang (misalnya cyan atau violet), teks putih keabuan. Mode terang tersedia.
- **Tipografi:** font sans modern (Inter atau Geist) + font monospace untuk badge stack dan angka.
- **Spasi:** kelipatan 4/8 px, jarak antar section konsisten.
- **Animasi:** muncul saat scroll, hover kartu, transisi angka kalkulator. Maksimal satu efek per elemen.
- **Mobile-first:** mayoritas pengunjung UMKM datang dari HP. Area sentuh minimal 44 px.

## 9. Persyaratan Non-Fungsional

- **Performa:** LCP < 2,5 detik di 4G, tanpa pergeseran layout berlebih.
- **Aksesibilitas:** kontras WCAG AA, navigasi keyboard, label form, `alt` pada gambar.
- **SEO:** judul dan deskripsi per halaman, sitemap, `robots.txt`, data terstruktur Organization.
- **Keamanan & privasi:** tanpa menyimpan data pengunjung di server pada versi awal. Beri keterangan singkat jika memakai analytics.

## 10. Rencana Rilis

**Fase 1 (MVP):** Hero, Layanan, Portofolio + modal, Kalkulator, Cara Kerja, Kontak, tombol WhatsApp mengambang, SEO dasar.
**Fase 2:** Testimoni, FAQ, mode gelap/terang, galeri template, analytics.
**Fase 3 (opsional):** blog/artikel, studi kasus lengkap per proyek, versi bahasa Inggris, panel admin ringan untuk mengubah harga.

## 11. Kriteria Selesai (Definition of Done)

- [ ] Semua section tampil rapi di lebar 360 px, 768 px, dan 1280 px
- [ ] Kalkulator menghasilkan rentang harga dan durasi yang benar untuk semua kombinasi
- [ ] Tombol WhatsApp membuka chat dengan pesan terisi dengan benar
- [ ] Filter dan modal portofolio berfungsi, dapat ditutup dengan tombol Esc
- [ ] Skor Lighthouse mobile >= 90 untuk Performance, Accessibility, dan SEO
- [ ] Tidak ada konten placeholder yang terlihat publik (foto, harga, testimoni)

## 12. Hal yang Perlu Anda Siapkan

- Nomor WhatsApp dan email resmi
- Daftar harga, add-on, dan estimasi durasi yang nyata
- Minimal 3 proyek untuk portofolio (karya klien atau proyek konsep yang diberi label)
- Testimoni asli (jika ada) dan foto/logo
- Pilihan warna aksen dan logo Boyle Byte
