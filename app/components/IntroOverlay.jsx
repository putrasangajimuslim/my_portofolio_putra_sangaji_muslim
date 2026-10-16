'use client';
import { motion } from 'framer-motion';
import { RotateCcw, ArrowDown } from 'lucide-react';

export default function IntroOverlay({ showFarewell, setShowFarewell, onEnter }) {

  const handleRefresh = () => {
    sessionStorage.removeItem('hasSeenIntro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowFarewell(false);
    window.location.reload();
  };

  // Jika tombol "Keluar" diklik di Navbar (Tampilan Selamat Tinggal)
  if (showFarewell) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center px-4 overflow-hidden pointer-events-auto">
        <div className="absolute w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-3xl -top-32 -left-32 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full max-w-4xl mx-auto z-30 flex flex-col items-center justify-center"
        >
          <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-400 tracking-widest uppercase">
            Sampai Jumpa Kembali
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <motion.span initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-white">
              Selamat
            </motion.span>
            <motion.span initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-neutral-500 font-light">
              Tinggal
            </motion.span>
            <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-neutral-300 w-full md:w-auto text-center">
              Terima Kasih.
            </motion.span>
          </h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="mt-6 flex flex-col items-center gap-2 z-30">
            <p className="text-neutral-400 text-xs md:text-sm tracking-wider uppercase">Tekan tombol di bawah untuk kembali masuk</p>
            <button
              onClick={handleRefresh}
              className="p-3.5 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-all shadow-2xl flex items-center justify-center group cursor-pointer"
              title="Masuk Kembali"
            >
              <RotateCcw size={20} className="group-hover:-rotate-90 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Tampilan Selamat Datang awal (sebelum di-klik)
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center px-4 overflow-hidden pointer-events-auto">
      <div className="absolute w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-3xl -top-32 -left-32 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center w-full max-w-4xl mx-auto z-30 flex flex-col items-center justify-center"
      >
        <div className="inline-block mb-3 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-400 tracking-widest uppercase">
          Portofolio Interaktif
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-6">
          <motion.span initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-white">
            Selamat Datang di
          </motion.span>
          <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-neutral-400 w-full md:w-auto text-center">
            Portofolio Saya.
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col items-center gap-3 mt-4"
        >
          <p className="text-neutral-400 text-xs md:text-sm tracking-widest uppercase font-mono">
            Geser ke bawah untuk menjelajahi
          </p>
          <button
            onClick={onEnter}
            className="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900/80 backdrop-blur-xl flex items-center justify-center text-neutral-300 shadow-xl hover:border-neutral-500 hover:text-white transition-all cursor-pointer animate-bounce"
            title="Gulir ke Bawah"
          >
            <ArrowDown size={18} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}