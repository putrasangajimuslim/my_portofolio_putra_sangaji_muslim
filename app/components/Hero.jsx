'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, RotateCcw } from 'lucide-react';
import Image from 'next/image';

const profileImages = [
  "/img/mypic1.jpeg",
  "/img/mypic2.jpg",
  "/img/mypic3.jpg"
];

export default function Hero() {
  const containerRef = useRef(null);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [countdown, setCountdown] = useState(5);
  const [isCountingDown, setIsCountingDown] = useState(true);

  const fullText = "Putra Sangaji Muslim";
  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    if (isCountingDown) return;

    const handleTyping = () => {
      const i = loopNum % fullText.length;
      if (isDeleting) {
        setDisplayedName(fullText.substring(0, displayedName.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayedName(fullText.substring(0, displayedName.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedName === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedName === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedName, isDeleting, loopNum, isCountingDown, typingSpeed, fullText]);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    if (isCountingDown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCountingDown]);

  useEffect(() => {
    if (!isCountingDown) return;

    if (countdown > 1) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsCountingDown(false);
        setHasScrolledDown(true);
        document.body.style.overflow = 'auto';
        window.scrollTo({ top: 100, behavior: 'smooth' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, isCountingDown]);

  useEffect(() => {
    if (isCountingDown) return;

    const handleWindowScroll = () => {
      if (window.scrollY < 10) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        if (window.scrollY > 40) {
          setHasScrolledDown(true);
        }
      }
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [isCountingDown]);

  const isFarewell = hasScrolledDown && isAtTop && !isCountingDown;

  useEffect(() => {
    if (isFarewell) {
      document.body.style.overflow = 'hidden';
    } else if (!isCountingDown) {
      document.body.style.overflow = 'auto';
    }
    return () => {
      if (!isCountingDown) document.body.style.overflow = 'auto';
    };
  }, [isFarewell, isCountingDown]);

  const handleRefresh = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHasScrolledDown(false);
    setIsAtTop(true);
    setCountdown(5);
    setIsCountingDown(true);
    setRefreshKey((prev) => prev + 1);
  };

  const handleImageClick = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
  };

  const showIntro = isCountingDown || isFarewell;

  return (
    <section ref={containerRef} className="min-h-[95vh] relative flex items-center justify-center pt-52 pb-16">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center bg-[#0a0a0a] relative">
        
        <div className="absolute w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-3xl -top-32 -left-32 pointer-events-none" />

        {showIntro && (
          <motion.div 
            key={refreshKey}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center w-full max-w-5xl mx-auto z-30 px-4 flex flex-col items-center justify-center py-8 pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs text-neutral-400 tracking-widest uppercase"
            >
              {isFarewell ? "Sampai Jumpa Kembali" : "Portofolio Interaktif"}
            </motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
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
              <div className="mt-6 flex flex-col items-center gap-3">
                <p className="text-neutral-400 text-xs md:text-sm tracking-wider uppercase mb-1">Memuat dalam:</p>
                <div className="relative w-16 h-16 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={countdown}
                      initial={{ scale: 0.3, opacity: 0, filter: "blur(4px)" }}
                      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                      exit={{ scale: 1.8, opacity: 0, filter: "blur(4px)" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-2xl font-bold text-white font-mono"
                    >
                      {countdown}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="mt-6 flex flex-col items-center gap-3 z-30 pointer-events-auto">
                <p className="text-neutral-400 text-xs md:text-sm tracking-wider uppercase">Tekan tombol di bawah untuk kembali ke awal</p>
                <button
                  onClick={handleRefresh}
                  className="p-3.5 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:bg-neutral-800 transition-all shadow-2xl flex items-center justify-center group cursor-pointer"
                  title="Muat Ulang Portofolio"
                >
                  <RotateCcw size={20} className="group-hover:-rotate-90 transition-transform duration-300" />
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {!showIntro && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            id="about"
            className="w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto py-6"
          >
            <div className="lg:col-span-4 text-left flex flex-col justify-center">
              <motion.span initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-sm font-mono text-neutral-400 uppercase tracking-widest block mb-3">
                Hi, Perkenalkan
              </motion.span>
              
              <motion.h2 initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight min-h-[110px] md:min-h-[140px]">
                <span>{displayedName}</span>
                <span className="inline-block w-1.5 h-7 md:h-9 bg-white ml-1 animate-pulse align-middle" />
              </motion.h2>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }} className="text-neutral-200 text-base md:text-lg font-light leading-relaxed mb-6">
                Berpengalaman dalam merancang antarmuka web yang interaktif, bersih, dan responsif dengan performa optimal.
              </motion.p>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <a href="#education" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm tracking-wider uppercase hover:bg-neutral-200 transition shadow-lg">
                  Lihat Pendidikan <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>

            <div className="lg:col-span-4 flex justify-center perspective-[1000px]">
              <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={handleImageClick}
                className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-white/35 cursor-pointer shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:shadow-[0_30px_70px_rgba(255,255,255,0.3)] transition-shadow duration-500 group"
                title="Geser kursor untuk efek 3D, klik untuk ganti foto"
              >
                <div className="absolute inset-0 w-full h-full transform translate-z-[30px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={profileImages[currentImageIndex]} 
                        alt="Putra Sangaji Muslim" 
                        fill 
                        sizes="(max-width: 768px) 224px, 256px"
                        className="object-cover object-top group-hover:scale-105 transition duration-500"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4 text-left bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <motion.h3 initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-xl font-bold text-white mb-3">
                  Tentang Saya
                </motion.h3>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-neutral-200 text-base md:text-lg font-light leading-relaxed mb-6">
                  Saya adalah seorang Front End Developer dan lulusan Manajemen Informatika dari Politeknik LP3I Jakarta yang berdedikasi tinggi dalam pengembangan perangkat lunak dan teknologi web modern.
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="flex items-center gap-3 pt-4 border-t border-neutral-800">
                <span className="text-xs text-neutral-400 font-mono mr-2">Temukan:</span>
                
                {/* Instagram */}
                <a href="https://instagram.com/ptrasangaji" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-neutral-800/60 text-neutral-300 hover:text-white hover:bg-neutral-700 transition flex items-center justify-center" title="Instagram">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/putrasangajimuslim" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-neutral-800/60 text-neutral-300 hover:text-white hover:bg-neutral-700 transition flex items-center justify-center" title="GitHub">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>

                {/* WhatsApp */}
                <a href="https://wa.me/6282117633116" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-neutral-800/60 text-neutral-300 hover:text-white hover:bg-neutral-700 transition flex items-center justify-center" title="WhatsApp">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </a>
              </motion.div>
            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}