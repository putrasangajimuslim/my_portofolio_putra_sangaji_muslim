'use client';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    step: "01",
    role: "Frontend Developer",
    company: "PT. Mitra Integrasi Informatika (Site: Bank Jakarta)",
    period: "Juni 2026 – October 2026",
    description: "Menerjemahkan spesifikasi frontend, arsitektur UI, manajemen state, dan integrasi API untuk Internal Corporate & Auction Web.",
    skills: ["React/Next.js", "Tailwind CSS", "REST API", "SonarQube", "Postman"],
    position: "top"
  },
  {
    step: "02",
    role: "System Integration",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "August 2025 – Feb 2026",
    description: "Menganalisis integrasi sistem, validasi payload API, data mapping, dan transformation logic.",
    skills: ["REST API", "JSON", "XML", "Elastic Kibana", "Dynatrace"],
    position: "bottom"
  },
  {
    step: "03",
    role: "L2 Support",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "Juni 2024 – Juli 2025",
    description: "Melakukan tracing error menggunakan Elastic Kibana dan maintenance Redis pada aplikasi Wondr.",
    skills: ["Elastic Kibana", "Dynatrace", "SQL", "Redis", "OCP"],
    position: "top"
  },
  {
    step: "04",
    role: "Angular Developer",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "Desember 2023 – Mei 2024",
    description: "Mengembangkan dan memelihara aplikasi web backoffice serta RESTful API untuk kebutuhan operasional.",
    skills: ["Angular JS", "MySQL", "Git", "JSON", "XML"],
    position: "bottom"
  },
  {
    step: "05",
    role: "Application Developer",
    company: "PT. Vads Indonesia",
    period: "Desember 2022 – November 2023",
    description: "Mengembangkan aplikasi web Recruitment Management dan Sales Tracking, serta perancangan database.",
    skills: ["PHP", "Laravel", "Yii", "MySQL", "JavaScript", "jQuery"],
    position: "top"
  },
  {
    step: "06",
    role: "Backend Developer",
    company: "The Big Rich Group",
    period: "Februari 2021 – November 2022",
    description: "Mengembangkan RESTful API untuk proyek Aeon dan Matchapp serta integrasi third-party API.",
    skills: ["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript", "Ionic"],
    position: "bottom"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto relative z-20 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-32 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3 shadow-inner">
          <Briefcase size={15} className="text-white" /> Alur Perjalanan Karir Profesional
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Jejak Langkah Karir
        </h2>
      </motion.div>

      {/* Tampilan Desktop: Alur Zigzag dengan Lebar Kartu & Jarak Optimal */}
      <div className="hidden lg:block relative py-48">
        {/* Garis Dasar */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-800 -translate-y-1/2 z-0" />
        
        {/* Garis Animasi Berjalan Berulang */}
        <motion.div 
          animate={{ width: ["0%", "100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-neutral-600 via-white to-neutral-400 -translate-y-1/2 z-0 shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        />

        <div className="grid grid-cols-6 gap-8 relative z-10 px-4">
          {experiences.map((exp, index) => {
            const isTop = exp.position === "top";
            return (
              <div key={index} className="relative flex flex-col items-center">
                
                {/* Kotak Konten Bagian Atas */}
                {isTop && (
                  <motion.div
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ scale: 1.03 }}
                    className="absolute bottom-28 w-64 -left-28 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow-2xl flex flex-col justify-between hover:border-neutral-600 transition-colors z-30"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/10 text-neutral-300">
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                        {exp.company}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-neutral-300 text-[11px] font-light leading-relaxed mb-3">
                        {exp.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Titik Node Angka Bundar */}
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.3, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-full bg-neutral-900 border-4 border-neutral-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-2xl relative z-20 hover:border-white transition-colors"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    className="absolute inset-0 rounded-full border border-white/60" 
                  />
                  {exp.step}
                </motion.div>

                {/* Kotak Konten Bagian Bawah */}
                {!isTop && (
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    whileHover={{ scale: 1.03 }}
                    className="absolute top-28 w-64 -left-28 bg-neutral-900/95 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow-2xl flex flex-col justify-between hover:border-neutral-600 transition-colors z-30"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/10 text-neutral-300">
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                        {exp.company}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-neutral-300 text-[11px] font-light leading-relaxed mb-3">
                        {exp.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[9px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* Tampilan Mobile & Tablet: Kartu Responsif Vertikal */}
      <div className="block lg:hidden space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
              className="w-10 h-10 shrink-0 rounded-full bg-neutral-900 border-2 border-neutral-600 flex items-center justify-center text-xs font-mono font-bold text-white shadow-xl mt-1"
            >
              {exp.step}
            </motion.div>

            <div className="flex-1 bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 p-5 rounded-2xl shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-white/10 text-neutral-200 border border-white/20 w-fit">
                  {exp.period}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {exp.company}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {exp.role}
              </h3>

              <p className="text-neutral-300 text-xs font-light leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((s, sIdx) => (
                  <span key={sIdx} className="text-[10px] font-mono px-2 py-1 rounded bg-neutral-950 text-neutral-400 border border-neutral-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}