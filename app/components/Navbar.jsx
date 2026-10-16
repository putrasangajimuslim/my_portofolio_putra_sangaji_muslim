'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

export default function Navbar({ onLogout }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Munculkan navbar jika scroll lebih dari 30px
      if (window.scrollY > 30) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Penyesuaian section ID tanpa 'experience', menggunakan 'career-map'
  useEffect(() => {
    const sections = ['about', 'education', 'career-map', 'knowledge', 'projects', 'contact'];
    
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25, // 25% bagian section terlihat di layar
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getButtonClass = (id) => {
    const isActive = activeSection === id;
    return `px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer border-none shadow-sm ${
      isActive 
        ? 'bg-white/20 text-white backdrop-blur-md border border-white/30 font-semibold' 
        : 'bg-transparent text-neutral-200 hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:text-white'
    }`;
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
      <div className="pointer-events-auto w-full max-w-2xl backdrop-blur-2xl bg-white/10 border border-white/25 shadow-2xl rounded-2xl px-6 py-3 flex items-center justify-between overflow-hidden">
        
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

        {/* Menu Navigasi dengan Penyesuaian Active Section */}
        <motion.div 
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:flex items-center space-x-1 text-xs font-medium"
        >
          <button onClick={(e) => scrollToSection(e, 'about')} className={getButtonClass('about')}>
            Tentang
          </button>
          <button onClick={(e) => scrollToSection(e, 'education')} className={getButtonClass('education')}>
            Pendidikan
          </button>
          <button onClick={(e) => scrollToSection(e, 'career-map')} className={getButtonClass('career-map')}>
            Karir
          </button>
          <button onClick={(e) => scrollToSection(e, 'knowledge')} className={getButtonClass('knowledge')}>
            Knowledge
          </button>
          <button onClick={(e) => scrollToSection(e, 'projects')} className={getButtonClass('projects')}>
            Proyek
          </button>
          <button onClick={(e) => scrollToSection(e, 'contact')} className={getButtonClass('contact')}>
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