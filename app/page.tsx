'use client';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Educations from "./components/Educations";
import CareerMapTracker from "./components/CareerMapTracker";
import GitHubStatsCard from "./components/GitHubStatsCard";
import OptimizationHub from "./components/OptimizationHub.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import IntroOverlay from "./components/IntroOverlay";

export default function Home() {
  const [showFarewell, setShowFarewell] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  // Mengunci scroll di sisi samping ketika layar Intro atau Farewell aktif
  useEffect(() => {
    if (!isEntered || showFarewell) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isEntered, showFarewell]);

  const handleEnter = () => {
    setIsEntered(true);
    document.body.style.overflow = 'auto';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col gap-2 md:gap-4 pb-6 relative">
      {/* Intro Overlay / Selamat Datang / Selamat Tinggal */}
      {(!isEntered || showFarewell) && (
        <IntroOverlay 
          showFarewell={showFarewell} 
          setShowFarewell={setShowFarewell} 
          onEnter={handleEnter} 
        />
      )}

      {/* Navbar dengan tombol Keluar */}
      <Navbar onLogout={() => setShowFarewell(true)} />

      {/* Konten Portofolio */}
      <Hero />
      <Educations />
      
      <div id="career-map">
        <CareerMapTracker />
      </div>
      
      <div id="knowledge">
        <OptimizationHub />
      </div>

      <GitHubStatsCard />
      <Projects />
      <Skills />
      
      {/* Tambahkan id="contact" agar navbar mendeteksi active pada bagian kontak */}
      <div id="contact">
        <Contact />
      </div>
    </main>
  );
}