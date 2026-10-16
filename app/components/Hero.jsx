'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const profileImages = [
  "/img/mypic1.jpeg",
  "/img/mypic2.jpg",
  "/img/mypic3.jpg"
];

export default function Hero() {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fullText = "Putra Sangaji Muslim";
  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
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
  }, [displayedName, isDeleting, loopNum, typingSpeed, fullText]);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX / rect.width - 0.5);
    y.set(e.clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleImageClick = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
  };

  return (
    <section ref={containerRef} className="w-full relative flex items-center justify-center py-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center bg-[#0a0a0a] relative z-20">
        
        <div className="absolute w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-3xl -top-32 -left-32 pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          id="about"
          className="w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center pointer-events-auto py-1"
        >
          {/* Kolom Kiri */}
          <div className="lg:col-span-6 xl:col-span-4 text-left flex flex-col justify-center">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block mb-1">
              Hi, Perkenalkan
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight min-h-[50px] md:min-h-[75px]">
              <span>{displayedName}</span>
              <span className="inline-block w-1.5 h-4 md:h-6 bg-white ml-1 animate-pulse align-middle" />
            </h2>
            <p className="text-neutral-200 text-xs sm:text-sm font-light leading-relaxed mb-3">
              Berpengalaman dalam merancang antarmuka web yang interaktif, bersih, dan responsif dengan performa optimal.
            </p>
            <div>
              <a href="#education" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition shadow-lg">
                Lihat Pendidikan <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Kolom Tengah */}
          <div className="lg:col-span-6 xl:col-span-4 flex justify-center perspective-[1000px]">
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleImageClick}
              className="relative w-36 h-48 sm:w-40 sm:h-52 md:w-44 md:h-56 rounded-2xl overflow-hidden border border-white/35 cursor-pointer shadow-[0_20px_50px_rgba(255,255,255,0.15)] group"
              title="Geser kursor untuk efek 3D, klik untuk ganti foto"
            >
              <div className="absolute inset-0 w-full h-full transform translate-z-[30px]">
                <Image 
                  src={profileImages[currentImageIndex]} 
                  alt="Putra Sangaji Muslim" 
                  fill 
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-cover object-top group-hover:scale-105 transition duration-500"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Kolom Kanan */}
          <div className="lg:col-span-12 xl:col-span-4 text-left bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 p-4 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-sm md:text-base font-bold text-white mb-1.5">
                Tentang Saya
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm font-light leading-relaxed mb-3">
                Saya adalah seorang Front End Developer dan lulusan Manajemen Informatika dari Politeknik LP3I Jakarta yang berdedikasi tinggi dalam pengembangan perangkat lunak dan teknologi web modern.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">Temukan:</span>
              
              <div className="flex flex-col gap-1.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com/ptrasangaji" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-neutral-700 transition group"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-[14px] h-[14px] fill-current text-neutral-400 group-hover:text-white transition" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-mono">Instagram</span>
                  </div>
                  <ArrowUpRight size={13} className="text-neutral-500 group-hover:text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/putrasangajimuslim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-neutral-700 transition group"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-[14px] h-[14px] fill-current text-neutral-400 group-hover:text-white transition" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span className="font-mono">GitHub</span>
                  </div>
                  <ArrowUpRight size={13} className="text-neutral-500 group-hover:text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6282117633116" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-neutral-700 transition group"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-[14px] h-[14px] fill-current text-neutral-400 group-hover:text-white transition" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    <span className="font-mono">WhatsApp</span>
                  </div>
                  <ArrowUpRight size={13} className="text-neutral-500 group-hover:text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}