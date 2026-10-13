'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk scroll halus tanpa mengubah URL / tanpa tanda #
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ 
        y: showNavbar ? 12 : -50, 
        opacity: showNavbar ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-xl backdrop-blur-2xl bg-white/10 border border-white/25 shadow-2xl rounded-2xl px-6 py-3 flex items-center justify-between overflow-hidden">
        
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-bold text-sm tracking-wider text-white cursor-pointer"
          >
            PSM<span className="text-neutral-400">.</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex items-center space-x-6 text-xs font-medium text-neutral-200"
        >
          <button onClick={(e) => scrollToSection(e, 'about')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Tentang Saya</button>
          <button onClick={(e) => scrollToSection(e, 'education')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Pendidikan</button>
          <button onClick={(e) => scrollToSection(e, 'projects')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Proyek</button>
          <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none">Kontak</button>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-xl bg-white/20 text-white hover:bg-white/30 transition backdrop-blur-md border border-white/20 shadow-inner cursor-pointer"
          >
            Hubungi
          </button>
        </motion.div>

      </div>
    </motion.header>
  );
}