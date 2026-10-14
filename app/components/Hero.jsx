'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
              <p className="text-neutral-200 text-xs sm:text-sm font-light leading-relaxed mb-2.5">
                Saya adalah seorang Front End Developer dan lulusan Manajemen Informatika dari Politeknik LP3I Jakarta yang berdedikasi tinggi dalam pengembangan perangkat lunak dan teknologi web modern.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-neutral-800">
              <span className="text-[10px] text-neutral-400 font-mono mr-1">Temukan:</span>
              <a href="https://instagram.com/ptrasangaji" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-neutral-800/60 text-neutral-300 hover:text-white transition" title="Instagram">Instagram</a>
              <a href="https://github.com/putrasangajimuslim" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-neutral-800/60 text-neutral-300 hover:text-white transition" title="GitHub">GitHub</a>
              <a href="https://wa.me/6282117633116" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-lg bg-neutral-800/60 text-neutral-300 hover:text-white transition" title="WhatsApp">WhatsApp</a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}