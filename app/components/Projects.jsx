'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Award, ShieldCheck, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    title: "Kasir Mini (Ziptea POS)",
    client: "Aplikasi Web Proyek",
    description: "Aplikasi Point of Sale (POS) kasir mini berbasis web untuk manajemen menu, pemesanan, dan transaksi pembayaran secara digital.",
    details: "Aplikasi kasir mini yang dirancang untuk memudahkan transaksi penjualan produk seperti minuman dan makanan. Dilengkapi dengan manajemen kategori menu, kalkulasi total bayar, serta pilihan metode pembayaran Cash dan QRIS.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "POS System"],
    category: "Aplikasi Web",
    image: "/project/porto1.png",
    link: "https://kasir-mini-pi.vercel.app/"
  },
  {
    title: "Bengkel Vespa Matic (Vesbooth)",
    client: "E-Commerce & Booking Servis",
    description: "Platform web dan sistem informasi layanan bengkel serta sparepart original khusus Vespa Matic dengan fitur booking servis online.",
    details: "Website resmi Vesbooth yang menyediakan layanan booking servis, katalog sparepart original, galeri modifikasi, serta informasi jam operasional bengkel secara transparan dan profesional.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    category: "E-Commerce / Booking",
    image: "/project/porto2.png",
    link: "https://vesboot-v1.vercel.app/"
  },
  {
    title: "Wedding Platform Authentication",
    client: "Web Application Project",
    description: "Platform manajemen undangan pernikahan digital lengkap dengan sistem autentikasi pengguna yang aman.",
    details: "Sistem platform undangan pernikahan digital yang dilengkapi halaman autentikasi (login/register) untuk manajemen tamu, buku tamu digital, dan pengaturan acara pernikahan.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Authentication"],
    category: "Web Application",
    image: "/project/porto3.png",
    link: "https://wedding-io-five.vercel.app/auth"
  },
  {
    title: "Digital Invitation Platform",
    client: "Digital Invitation Project",
    description: "Aplikasi web undangan digital interaktif dengan desain elegan untuk berbagai acara spesial.",
    details: "Platform undangan digital modern yang menyajikan informasi acara secara informatif, RSVP online, galeri foto, serta peta lokasi interaktif bagi para tamu undangan.",
    tags: ["React.js", "Tailwind CSS", "Vercel", "UI/UX"],
    category: "Web Application",
    image: "/project/porto4.png",
    link: "https://digital-invitation-beta-1.vercel.app/"
  }
];

const certificatesData = [
  {
    title: "Sertifikat 1",
    image: "/documents/sertif1.jpg"
  },
  {
    title: "Sertifikat 2",
    image: "/documents/sertif2.jpg"
  },
  {
    title: "Sertifikat 3",
    image: "/documents/sertif3.png"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const dataset = activeTab === "Projects" ? projectsData : certificatesData;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dataset.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + dataset.length) % dataset.length);
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-20">
      
      {/* Bagian Header Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3 shadow-inner">
          <FolderGit2 size={15} className="text-white" /> Etalase Portofolio
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          Portofolio & Sertifikasi
        </h2>
        <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto font-light mb-8">
          Jelajahi perjalanan karir saya melalui proyek unggulan dan sertifikasi resmi.
        </p>

        {/* Tab Minimalis */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 backdrop-blur-md shadow-2xl">
          {[
            { name: "Projects", label: "Proyek", icon: FolderGit2 },
            { name: "Certificates", label: "Sertifikat", icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => { setActiveTab(tab.name); setCurrentIndex(0); }}
                className={`relative px-8 py-2.5 rounded-full text-xs font-mono tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "bg-neutral-800 text-white font-semibold shadow-lg border border-neutral-700" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Icon size={13} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Konten 3 Kartu Gaya Windows Alt+Tab Switcher */}
      <div className="relative max-w-4xl mx-auto h-[480px] flex items-center justify-center">
        
        {/* Tombol Navigasi Kiri */}
        <button 
          onClick={handlePrev}
          className="absolute left-2 sm:-left-12 z-40 p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition shadow-2xl cursor-pointer"
          title="Sebelumnya"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Tombol Navigasi Kanan */}
        <button 
          onClick={handleNext}
          className="absolute right-2 sm:-right-12 z-40 p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 transition shadow-2xl cursor-pointer"
          title="Selanjutnya"
        >
          <ChevronRight size={20} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center perspective-[1000px]">
          {dataset.map((item, index) => {
            const position = (index - currentIndex + dataset.length) % dataset.length;
            
            let cardStyle = "";
            if (position === 0) {
              cardStyle = "z-30 scale-100 opacity-100 translate-x-0 translate-y-0 shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-neutral-700 bg-neutral-900/95 cursor-pointer";
            } else if (position === 1) {
              cardStyle = "z-20 scale-90 opacity-60 translate-x-32 sm:translate-x-48 translate-y-4 shadow-xl border-neutral-800 bg-neutral-900/60 cursor-pointer";
            } else {
              cardStyle = "z-10 scale-90 opacity-60 -translate-x-32 sm:-translate-x-48 translate-y-4 shadow-xl border-neutral-800 bg-neutral-900/60 cursor-pointer";
            }

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => {
                  if (position === 0) {
                    setSelectedItem(item);
                  } else {
                    setCurrentIndex(index);
                  }
                }}
                className={`absolute w-[320px] sm:w-[420px] rounded-3xl overflow-hidden border backdrop-blur-2xl transition-all ${cardStyle}`}
              >
                {/* Gambar Preview Murni Tanpa Bingkai */}
                <div className={`${activeTab === "Certificates" ? 'h-72' : 'h-48'} w-full bg-neutral-950 relative overflow-hidden group`}>
                  
                  {/* Efek Garis Kaca Mengkilap Lewat (Shimmer Animation) */}
                  {activeTab === "Certificates" && (
                    <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", repeatDelay: 2 }}
                        className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12"
                      />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition duration-300 z-10" />
                  
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full ${activeTab === "Certificates" ? 'object-cover bg-neutral-950' : 'object-cover object-top'} group-hover:scale-105 transition duration-500`}
                  />
                  
                  {position === 0 && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                      <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-mono font-semibold flex items-center gap-1.5 shadow-lg">
                        <Eye size={14} /> Lihat Detail
                      </span>
                    </div>
                  )}

                  {activeTab === "Projects" && (
                    <span className="absolute top-3 right-3 z-20 text-[10px] font-mono px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/25">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Konten Kartu (Hanya Tampil untuk Proyek) */}
                {activeTab === "Projects" && (
                  <div className="p-6 text-center">
                    <span className="text-xs font-mono text-neutral-400 block mb-1">
                      {item.client}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-neutral-300 text-xs font-light leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-1.5 pt-4 border-t border-neutral-800/80">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Memanggil Komponen Modal Terpisah */}
      <ProjectModal 
        isOpen={!!selectedItem}
        item={selectedItem}
        activeTab={activeTab}
        onClose={() => setSelectedItem(null)}
      />

    </section>
  );
}