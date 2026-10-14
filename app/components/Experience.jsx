'use client';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    step: "01",
    role: "Frontend Developer",
    company: "PT. Mitra Integrasi Informatika (Site: Bank Jakarta)",
    period: "Juni 2026 – October 2026",
    description: "Menerjemahkan spesifikasi frontend, arsitektur UI, manajemen state, dan integrasi API untuk Internal Corporate & Auction Web.",
    skills: ["React/Next.js", "Tailwind CSS", "REST API", "SonarQube", "Postman"]
  },
  {
    step: "02",
    role: "System Integration",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "August 2025 – Feb 2026",
    description: "Menganalisis integrasi sistem, validasi payload API, data mapping, dan transformation logic.",
    skills: ["REST API", "JSON", "XML", "Elastic Kibana", "Dynatrace"]
  },
  {
    step: "03",
    role: "L2 Support",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "Juni 2024 – Juli 2025",
    description: "Melakukan tracing error menggunakan Elastic Kibana dan maintenance Redis pada aplikasi Wondr.",
    skills: ["Elastic Kibana", "Dynatrace", "SQL", "Redis", "OCP"]
  },
  {
    step: "04",
    role: "Angular Developer",
    company: "PT. Mitra Integrasi Informatika (Site: BNI)",
    period: "Desember 2023 – Mei 2024",
    description: "Mengembangkan dan memelihara aplikasi web backoffice serta RESTful API untuk kebutuhan operasional.",
    skills: ["Angular JS", "MySQL", "Git", "JSON", "XML"]
  },
  {
    step: "05",
    role: "Application Developer",
    company: "PT. Vads Indonesia",
    period: "Desember 2022 – November 2023",
    description: "Mengembangkan aplikasi web Recruitment Management dan Sales Tracking, serta perancangan database.",
    skills: ["PHP", "Laravel", "Yii", "MySQL", "JavaScript", "jQuery"]
  },
  {
    step: "06",
    role: "Backend Developer",
    company: "The Big Rich Group",
    period: "Februari 2021 – November 2022",
    description: "Mengembangkan RESTful API untuk proyek Aeon dan Matchapp serta integrasi third-party API.",
    skills: ["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript", "Ionic"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-6 md:py-8 px-6 max-w-5xl mx-auto relative z-20 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 md:mb-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400 mb-2 shadow-inner">
          <Briefcase size={15} className="text-white" /> Alur Perjalanan Karir Profesional
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          Jejak Langkah Karir
        </h2>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          <div className="px-5 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center gap-3 shadow-xl">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <Calendar size={18} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono text-neutral-400 uppercase">Pengalaman IT</p>
              <p className="text-sm font-bold text-white font-mono">5+ Tahun <span className="text-xs font-normal text-neutral-400">(2021 – Sekarang)</span></p>
            </div>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center gap-3 shadow-xl">
            <div className="p-2 rounded-xl bg-white/10 text-white">
              <CheckCircle2 size={18} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono text-neutral-400 uppercase">Total Proyek</p>
              <p className="text-sm font-bold text-white font-mono">6+ Proyek Enterprise & Klien</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-800 -translate-x-1/2 hidden md:block" />
        
        <div className="space-y-6 md:space-y-8 relative">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-5/12">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 p-6 rounded-3xl shadow-2xl relative group hover:border-neutral-600 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-neutral-200 border border-white/20">
                        {exp.period}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-neutral-400 block mb-1">
                      {exp.company}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                      {exp.role}
                    </h3>

                    <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800">
                      {exp.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800">
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex w-2/12 justify-center relative z-10 my-auto">
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                    className="w-12 h-12 rounded-full bg-neutral-900 border-4 border-neutral-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-2xl"
                  >
                    {exp.step}
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12" />

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}