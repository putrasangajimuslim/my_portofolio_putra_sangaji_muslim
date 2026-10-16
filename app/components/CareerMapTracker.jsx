'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Navigation, Play, Pause, RotateCcw, 
  Calendar, ZoomIn, ZoomOut, Briefcase, Award, CheckCircle2 
} from 'lucide-react';

const careerRoutes = [
  {
    id: 1,
    step: "01",
    role: "Backend Developer",
    company: "The Big Rich Group",
    period: "Februari 2021 – November 2022",
    duration: "1 Tahun 10 Bulan",
    location: "Jakarta Timur",
    status: "Titik Awal (Start Point)",
    description: "Mengembangkan RESTful API untuk proyek Aeon dan Matchapp serta integrasi third-party API.",
    skills: ["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript", "Ionic"],
    coordinates: { x: 12, y: 48 }
  },
  {
    id: 2,
    step: "02",
    role: "Application Developer",
    company: "PT. Vads Indonesia",
    period: "Desember 2022 – November 2023",
    duration: "1 Tahun",
    location: "Jakarta Barat",
    status: "Checkpoint #2",
    description: "Mengembangkan aplikasi web Recruitment Management dan Sales Tracking, serta perancangan database.",
    skills: ["PHP", "Laravel", "Yii", "MySQL", "JavaScript", "jQuery"],
    coordinates: { x: 29, y: 68 }
  },
  {
    id: 3,
    step: "03",
    role: "Angular Developer",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "Desember 2023 – Mei 2024",
    duration: "6 Bulan",
    location: "Jakarta Selatan",
    status: "Checkpoint #3",
    description: "Mengembangkan dan memelihara aplikasi web backoffice serta RESTful API untuk kebutuhan operasional.",
    skills: ["Angular JS", "MySQL", "Git", "JSON", "XML"],
    coordinates: { x: 46, y: 38 }
  },
  {
    id: 4,
    step: "04",
    role: "L2 Support",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "Juni 2024 – Juli 2025",
    duration: "1 Tahun 2 Bulan",
    location: "Jakarta Pusat",
    status: "Checkpoint #4",
    description: "Melakukan tracing error menggunakan Elastic Kibana dan maintenance Redis pada aplikasi Wondr.",
    skills: ["Elastic Kibana", "Dynatrace", "SQL", "Redis", "OCP"],
    coordinates: { x: 63, y: 65 }
  },
  {
    id: 5,
    step: "05",
    role: "System Integration",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "Agustus 2025 – Feb 2026",
    duration: "7 Bulan",
    location: "Jakarta Pusat",
    status: "Checkpoint #5",
    description: "Menganalisis integrasi sistem, validasi payload API, data mapping, dan transformation logic.",
    skills: ["REST API", "JSON", "XML", "Elastic Kibana", "Dynatrace"],
    coordinates: { x: 80, y: 42 }
  },
  {
    id: 6,
    step: "06",
    role: "Frontend Developer",
    company: "PT. Mitra Integrasi Informatika (Site: Bank Jakarta)",
    period: "Juni 2026 – Oktober 2026",
    duration: "5 Bulan",
    location: "Jakarta, Indonesia",
    status: "Posisi Saat Ini",
    description: "Menerjemahkan spesifikasi frontend, arsitektur UI, manajemen state, dan integrasi API untuk Internal Corporate & Auction Web.",
    skills: ["React/Next.js", "Tailwind CSS", "REST API", "SonarQube", "Postman"],
    coordinates: { x: 91, y: 58 }
  }
];

export default function CareerMapTracker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(0.9);

  // Auto GPS Tracking Simulation
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % careerRoutes.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeRoute = careerRoutes[activeIndex];

  return (
    <section id="career-map" className="py-10 px-4 sm:px-6 max-w-7xl mx-auto relative z-20">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-emerald-400 mb-3 shadow-inner">
          <Navigation size={14} className="animate-pulse text-emerald-400" /> Google Maps Style Career Tracker
        </div> */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
          Jejak Langkah Karir
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Simulasi rute peta navigasi interaktif dari awal karir (Point 1) hingga posisi saat ini (Point 6).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Kolom Kiri: Peta Interaktif Bergaya Google Maps */}
        <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-800 rounded-3xl p-4 sm:p-6 shadow-2xl relative flex flex-col">
          
          {/* Status Bar GPS */}
          <div className="flex items-center justify-between bg-neutral-900/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-neutral-800 mb-4 z-10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-neutral-300">Rute: <strong className="text-white">Checkpoint {activeRoute.step}</strong></span>
            </div>
            {/* <span className="text-neutral-400 text-[10px]">GPS: Aktif</span> */}
          </div>

          {/* Area Peta dengan Kustom Scrollbar Gelap */}
          <div className="relative w-full overflow-x-auto pb-3 rounded-2xl bg-neutral-950 border border-neutral-900 shadow-inner [scrollbar-width:thin] [scrollbar-color:#262626_#0a0a0a] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-[#0a0a0a] [&::-webkit-scrollbar-thumb]:bg-neutral-800 [&::-webkit-scrollbar-thumb]:rounded-full">
            <div className="min-w-[620px] h-[340px] sm:h-[380px] relative flex items-center justify-center">
              
              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:3rem_3.5rem] opacity-40 pointer-events-none" />

              <div 
                className="absolute inset-0 transition-transform duration-500 ease-out flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                {/* Jalur Rute Garis SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M 12 48 Q 20 68, 29 68 T 46 38 T 63 65 T 80 42 T 91 58"
                    fill="none"
                    stroke="#262626"
                    strokeWidth="2.5"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M 12 48 Q 20 68, 29 68 T 46 38 T 63 65 T 80 42 T 91 58"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                  />
                </svg>

                {/* Titik Pin Checkpoint */}
                {careerRoutes.map((route, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={route.id}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsPlaying(false);
                      }}
                      style={{ left: `${route.coordinates.x}%`, top: `${route.coordinates.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group z-30 flex flex-col items-center cursor-pointer transition-all duration-300 ${
                        isActive ? 'scale-125 z-40' : 'hover:scale-110'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute -top-7 px-2 py-0.5 bg-emerald-500 text-black font-mono text-[9px] font-bold rounded-md shadow-lg whitespace-nowrap animate-bounce">
                          POSISI ANDA
                        </span>
                      )}
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold border-2 transition-all shadow-xl ${
                        isActive 
                          ? 'bg-emerald-500 text-black border-white shadow-[0_0_20px_rgba(16,185,129,0.9)]' 
                          : 'bg-neutral-900 text-neutral-300 border-neutral-700 hover:border-white hover:bg-neutral-800'
                      }`}>
                        {route.step}
                      </div>
                      <span className={`text-[10px] font-mono mt-1 px-2 py-0.5 rounded backdrop-blur-md transition-all ${
                        isActive ? 'bg-black/90 text-emerald-400 font-semibold border border-emerald-500/30' : 'bg-black/60 text-neutral-400'
                      }`}>
                        {route.role.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Kontrol Peta Bawah (Zoom & Play) */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 shadow-lg transition-all cursor-pointer ${
                isPlaying 
                  ? 'bg-amber-500 text-black hover:bg-amber-400' 
                  : 'bg-emerald-500 text-black hover:bg-emerald-400'
              }`}
            >
              {isPlaying ? <><Pause size={13} /> Jeda Rute</> : <><Play size={13} /> Putar Auto-GPS</>}
            </button>

            <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800">
              <button 
                onClick={() => setZoomLevel((prev) => Math.min(prev + 0.15, 1.3))}
                className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition"
                title="Zoom In"
              >
                <ZoomIn size={14} />
              </button>
              <button 
                onClick={() => setZoomLevel((prev) => Math.max(prev - 0.15, 0.75))}
                className="p-1.5 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition"
                title="Zoom Out"
              >
                <ZoomOut size={14} />
              </button>
              <button 
                onClick={() => setZoomLevel(0.9)}
                className="px-2 py-1 rounded-lg bg-neutral-800 text-neutral-300 hover:text-white transition font-mono text-[10px]"
              >
                Fit
              </button>
            </div>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 text-center mt-2">
            💡 Geser peta ke kiri/kanan di layar kecil untuk melihat keseluruhan rute.
          </span>
        </div>

        {/* Kolom Kanan: Detail Checkpoint Karir & Total Pengalaman */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoute.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 p-6 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                    {activeRoute.status}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                    <Calendar size={13} className="text-emerald-400" /> {activeRoute.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3 bg-neutral-950 px-3 py-1.5 rounded-xl border border-neutral-800/80 w-fit">
                  <Briefcase size={13} className="text-emerald-400" />
                  <span className="text-xs font-mono text-neutral-300">Durasi: <strong className="text-white">{activeRoute.duration}</strong></span>
                </div>

                <span className="text-xs font-mono text-neutral-400 block mb-1">
                  {activeRoute.company} • <span className="text-neutral-200">{activeRoute.location}</span>
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                  {activeRoute.role}
                </h3>

                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {activeRoute.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">Tech Stack & Tools:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRoute.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-neutral-950 text-neutral-200 border border-neutral-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigasi Manual */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveIndex((prev) => (prev > 0 ? prev - 1 : careerRoutes.length - 1));
                  }}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono transition cursor-pointer"
                >
                  ← Sebelumnya
                </button>
                
                <span className="text-xs font-mono text-neutral-400 font-semibold">
                  {activeIndex + 1} / {careerRoutes.length}
                </span>

                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveIndex((prev) => (prev + 1) % careerRoutes.length);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono transition cursor-pointer"
                >
                  Berikutnya →
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Kartu Informasi Total Pengalaman Kerja di Bawah Detail */}
          <div className="bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 p-4 rounded-2xl flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Akumulasi Pengalaman Kerja</p>
                <p className="text-sm font-bold text-white font-mono">5+ Tahun <span className="text-xs font-normal text-neutral-400">(2021 – Sekarang)</span></p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-neutral-950 px-3 py-1.5 rounded-xl border border-neutral-800">
              <CheckCircle2 size={14} /> 6 Checkpoint
            </div>
          </div>

          <button
            onClick={() => {
              setActiveIndex(0);
              setIsPlaying(false);
            }}
            className="w-full py-3 rounded-2xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-400 hover:text-white font-mono text-xs transition flex items-center justify-center gap-2 shadow-lg cursor-pointer"
          >
            <RotateCcw size={14} /> Reset ke Posisi Awal (Point 1)
          </button>
        </div>

      </div>

    </section>
  );
}