'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { GraduationCap, Award, Terminal, Cpu, CheckCircle2 } from 'lucide-react';

const terminalLines = [
  { text: "Menjalankan skrip sistem akademik...", type: "system" },
  { text: "Memuat jenjang: Diploma (D3) Manajemen Informatika", type: "code" },
  { text: "Institusi: Politeknik LP3I Jakarta", type: "code" },
  { text: "Nilai IPK / GPA: 3.41 / 4.00 [Terverifikasi]", type: "success" },
  { text: "Periode Studi: 2019 – 2021 | Status: Lulus", type: "success" },
  { text: "Fokus Utama: Rekayasa Perangkat Lunak & Analisis Sistem", type: "info" },
  { text: "Looping sh selesai. Menjalankan ulang proses...", type: "system" }
];

export default function Education() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLineIndex < terminalLines.length) {
        setDisplayedLines((prev) => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      } else {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [currentLineIndex]);

  return (
    <section id="education" className="py-16 px-6 max-w-6xl mx-auto relative z-25">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3 shadow-inner">
          <GraduationCap size={15} className="text-white" /> Riwayat Akademik Profesional
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Pendidikan & Latar Belakang
        </h2>
        <p className="text-neutral-400 text-xs md:text-sm max-w-lg mx-auto font-light">
          Pondasi keahlian teknologi dan komputasi yang membentuk fondasi karir profesional saya.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/50 to-black/90 border border-neutral-800/80 p-6 md:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-all duration-500"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition duration-700" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg backdrop-blur-md">
                <GraduationCap size={22} />
              </div>
              <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-white/10 text-neutral-200 border border-white/20 tracking-wider">
                2019 – 2021
              </span>
            </div>

            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
              Diploma (D3) • Jenjang Pendidikan Tinggi
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              Politeknik LP3I Jakarta
            </h3>
            <p className="text-neutral-300 text-sm md:text-base font-medium mb-4">
              Manajemen Informatika <span className="text-neutral-500 font-normal">(Informatics Management)</span>
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <Award size={16} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">IPK / GPA</p>
                <p className="text-white font-bold text-xs tracking-tight">3.41 <span className="text-neutral-500 font-normal">/ 4.00</span></p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-emerald-400">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Status Kelulusan</p>
                <p className="text-white font-bold text-xs tracking-tight">Lulus Memuaskan</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 rounded-3xl bg-[#0b0b0b] border border-neutral-800 shadow-2xl overflow-hidden flex flex-col justify-between font-mono"
        >
          <div className="bg-neutral-900/90 px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-neutral-400 text-xs flex items-center gap-1 font-medium">
              <Terminal size={13} /> education_loop.sh
            </span>
            <div className="w-8" />
          </div>

          <div className="p-5 text-xs leading-relaxed space-y-2 flex-1 flex flex-col justify-start min-h-[180px]">
            {displayedLines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-2"
              >
                {line.type === 'system' && <span className="text-neutral-500">$</span>}
                {line.type === 'code' && <span className="text-neutral-400">&gt;</span>}
                {line.type === 'success' && <span className="text-emerald-400">✓</span>}
                {line.type === 'info' && <span className="text-blue-400">ℹ</span>}
                <span className={
                  line.type === 'success' ? 'text-emerald-300 font-semibold' :
                  line.type === 'info' ? 'text-blue-300' : 'text-neutral-300'
                }>
                  {line.text}
                </span>
              </motion.div>
            ))}
            <div className="flex items-center gap-2 text-neutral-500 mt-1">
              <span>$</span>
              <span className="inline-block w-2 h-3.5 bg-white animate-pulse" />
            </div>
          </div>

          <div className="bg-neutral-950 px-4 py-2.5 border-t border-neutral-900 flex items-center justify-between text-[10px] text-neutral-500">
            <span className="flex items-center gap-1">
              <Cpu size={11} className="text-neutral-400" /> Proses Berjalan (Looping .sh)
            </span>
            <span className="text-emerald-400 font-mono animate-pulse">● BERJALAN</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}