'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

export default function Navbar({ onLogout }) {
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
      className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto w-full max-w-xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl px-6 py-3 flex items-center justify-between overflow-hidden">
        
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="font-bold text-sm tracking-wider text-white cursor-pointer px-3 py-1.5 rounded-xl bg-transparent hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 transition-all duration-300"
          >
            PSM<span className="text-neutral-400">.</span>
          </a>
        </motion.div>

        {/* Menu Navigasi */}
        <motion.div 
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex items-center space-x-1 text-xs font-medium text-neutral-200"
        >
          <button 
            onClick={(e) => scrollToSection(e, 'about')} 
            className="px-3 py-1.5 rounded-xl bg-transparent hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer border-none shadow-sm"
          >
            Tentang
          </button>
          <button 
            onClick={(e) => scrollToSection(e, 'education')} 
            className="px-3 py-1.5 rounded-xl bg-transparent hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer border-none shadow-sm"
          >
            Pendidikan
          </button>
          <button 
            onClick={(e) => scrollToSection(e, 'projects')} 
            className="px-3 py-1.5 rounded-xl bg-transparent hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer border-none shadow-sm"
          >
            Proyek
          </button>
          <button 
            onClick={(e) => scrollToSection(e, 'contact')} 
            className="px-3 py-1.5 rounded-xl bg-transparent hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-white transition-all duration-300 cursor-pointer border-none shadow-sm"
          >
            Kontak
          </button>
        </motion.div>

        {/* Tombol Keluar */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2"
        >
          <button 
            onClick={onLogout}
            className="text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-xl bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-all duration-300 backdrop-blur-md border border-red-500/30 shadow-inner cursor-pointer flex items-center gap-1.5"
            title="Keluar"
          >
            <LogOut size={13} /> Keluar
          </button>
        </motion.div>

      </div>
    </motion.header>
  );
}