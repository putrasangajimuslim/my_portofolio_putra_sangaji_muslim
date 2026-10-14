'use client';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Educations from "./components/Educations"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import IntroOverlay from "./components/IntroOverlay"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col gap-2 md:gap-4 pb-6 relative">
      {/* Overlay Intro terpisah di depan */}
      <IntroOverlay />

      {/* Konten Portofolio */}
      <Navbar />
      <Hero />
      <Educations />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}