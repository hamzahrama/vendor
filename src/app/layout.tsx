import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Boyle Byte — Dev House untuk UMKM & Startup",
  description: "Solusi perangkat lunak & portofolio digital berdampak tinggi untuk UMKM dan profesional. Cepat jadi, clean code, hasil langsung dipakai bisnis.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
