'use client';
import { motion } from 'framer-motion';

const skills = [
  // Programming/Coding Languages
  "PHP", "CSS", "HTML", "MySQL", "JavaScript", "TypeScript", "Python", "VB.Net", "Golang",
  // Frameworks
  "CI 4", "Angular", "Vue", "Next.js", "Vue.js", "React.js", "Express.js", "Ionic", "Yii", "Laravel",
  // Development Tools & Integration
  "Visual Studio Code", "GitHub", "Git", "Postman", "Chrome DevTools", "Figma",
  "Elastic Kibana", "Dynatrace", "OCP", "SonarQube", "REST API & Web Service"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">Keahlian & Teknologi</h2>
        <p className="text-neutral-400 text-sm">Alat, bahasa pemrograman, dan kerangka kerja profesional sesuai kualifikasi teknis.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            whileHover={{ scale: 1.05, backgroundColor: "#262626" }}
            className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs md:text-sm font-medium tracking-wide transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}