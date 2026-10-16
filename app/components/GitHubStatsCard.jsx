'use client';
import { motion } from 'framer-motion';
import { GitBranch, GitPullRequest, Star, FolderGit2, ArrowUpRight, Code2 } from 'lucide-react';

export default function GitHubStatsCard() {
  // Anda dapat menyesuaikan angka di bawah ini atau nantinya dihubungkan dengan GitHub API
  const githubStats = {
    totalRepositories: 15, // Estimasi / total repositori publik Anda
    publicProjects: 12,
    contributionsThisYear: '450+',
    topLanguages: ['JavaScript', 'TypeScript', 'PHP', 'HTML/CSS'],
    profileUrl: 'https://github.com/putrasangajimuslim?tab=repositories'
  };

  return (
    <section className="py-6 px-4 sm:px-6 max-w-7xl mx-auto relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-neutral-900/90 backdrop-blur-2xl border border-neutral-800 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
      >
        {/* Glow Background Effect */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Info Kiri */}
        <div className="flex flex-col items-start max-w-lg z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-emerald-400 mb-3 shadow-inner">
            <FolderGit2 size={14} /> GitHub Repository Analytics
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Aktivitas & Proyek GitHub
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
            Rekam jejak open-source, eksperimen kode, dan pengembangan aplikasi full-stack yang saya kerjakan dan publikasikan di repositori GitHub pribadi.
          </p>
          <a
            href={githubStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-2xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 shadow-xl cursor-pointer"
          >
            Kunjungi Repositori GitHub <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Statistik Grid Kanan */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 w-full lg:w-auto z-10">
          
          <div className="bg-neutral-950/80 border border-neutral-800/80 p-5 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Total Repos</span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                <FolderGit2 size={16} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white font-mono">{githubStats.totalRepositories}</p>
              <p className="text-[11px] text-neutral-400 mt-0.5">Repositori Publik</p>
            </div>
          </div>

          <div className="bg-neutral-950/80 border border-neutral-800/80 p-5 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Kontribusi</span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                <GitPullRequest size={16} />
              </div>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white font-mono">{githubStats.contributionsThisYear}</p>
              <p className="text-[11px] text-neutral-400 mt-0.5">Aktivitas Tahun Ini</p>
            </div>
          </div>

          <div className="col-span-2 bg-neutral-950/80 border border-neutral-800/80 p-5 rounded-2xl flex flex-col justify-between shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Bahasa Pemrograman Utama</span>
              <Code2 size={16} className="text-neutral-400" />
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {githubStats.topLanguages.map((lang, index) => (
                <span key={index} className="text-[11px] font-mono px-3 py-1 rounded-xl bg-neutral-900 text-neutral-200 border border-neutral-800">
                  {lang}
                </span>
              ))}
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}