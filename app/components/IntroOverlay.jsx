'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

export default function IntroOverlay() {
  const [countdown, setCountdown] = useState(5);
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [hasScrolledAway, setHasScrolledAway] = useState(false);
  const [isAtTop, setIsAtTop] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Hitung mundur awal
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (countdown > 1) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsCountingDown(false);
        document.body.style.overflow = 'auto';
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Deteksi ketika user sudah scroll ke bawah lalu kembali ke paling atas (Farewell)
  useEffect(() => {
    if (isCountingDown) return;

    const handleWindowScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolledAway(true);
      }
      if (hasScrolledAway && window.scrollY < 10) {
        setIsAtTop(true);
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [isCountingDown, hasScrolledAway]);

  const handleRefresh = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHasScrolledAway(false);
    setIsAtTop(false);
    setCountdown(5);
    setIsCountingDown(true);
    setRefreshKey((prev) => prev + 1);
    document.body.style.overflow = 'hidden';
  };

  const showFarewell = hasScrolledAway && isAtTop;

  if (!isCountingDown && !showFarewell) return null;

  return (
    <div key={refreshKey} className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center px-4 overflow-hidden pointer-events-auto">
      <div className="absolute w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-3xl -top-32 -left-32 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center w-full max-w-5xl mx-auto z-30 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block mb-3 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-400 tracking-widest uppercase"
        >
          {showFarewell ? "Sampai Jumpa Kembali" : "Portofolio Interaktif"}
        </motion.div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {isCountingDown ? (
            <>
              <motion.span initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-white">
                Selamat Datang di
              </motion.span>
              <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-neutral-400 w-full md:w-auto text-center">
                Portofolio Saya.
              </motion.span>
            </>
          ) : (
            <>
              <motion.span initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-white">
                Selamat
              </motion.span>
              <motion.span initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-neutral-500 font-light">
                Tinggal
              </motion.span>
              <motion.span initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-neutral-300 w-full md:w-auto text-center">
                Terima Kasih.
              </motion.span>
            </>
          )}
        </h1>

        {isCountingDown ? (
          <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-neutral-400 text-xs md:text-sm tracking-wider uppercase">Memuat dalam:</p>
            <div className="relative w-20 h-20 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={countdown}
                  initial={{ scale: 0.3, opacity: 0, filter: "blur(4px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  exit={{ scale: 1.8, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-3xl font-bold text-white font-mono"
                >
                  {countdown}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="mt-6 flex flex-col items-center gap-2 z-30">
            <p className="text-neutral-400 text-xs md:text-sm tracking-wider uppercase">Tekan tombol di bawah untuk kembali ke awal</p>
            <button
              onClick={handleRefresh}
              className="p-4 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-all shadow-2xl flex items-center justify-center group cursor-pointer"
              title="Muat Ulang Portofolio"
            >
              <RotateCcw size={22} className="group-hover:-rotate-90 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}