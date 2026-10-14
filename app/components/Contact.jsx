'use client';
import { motion } from 'framer-motion';
import { Mail, Download, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-6 md:py-8 px-6 max-w-7xl mx-auto relative z-20">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-mono text-neutral-400 mb-3 shadow-inner">
            MARI BERKOLABORASI
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none">
            MARI KITA <br />
            BEKERJA <br />
            SAMA
          </h2>

          <p className="text-neutral-400 text-sm md:text-base font-light max-w-md mb-6 leading-relaxed">
            Mencari tantangan baru untuk diselesaikan. Saya terbuka untuk peluang di mana saya dapat berkontribusi dalam pengembangan web, integrasi sistem, pengujian perangkat lunak, dan alur kerja digital.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition-all duration-300 inline-flex items-center gap-2 shadow-xl cursor-pointer"
            >
              UNDUH CV (RESUME) <Download size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-3"
        >
          <a
            href="mailto:putrasangajimuslim3@gmail.com"
            className="group bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 p-4 rounded-2xl flex items-center justify-between hover:border-neutral-600 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block tracking-widest">EMAIL</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white group-hover:underline">
                  putrasangajimuslim3@gmail.com
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-neutral-500">01</span>
          </a>

          <a
            href="https://wa.me/6282117633116"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 p-4 rounded-2xl flex items-center justify-between hover:border-neutral-600 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block tracking-widest">WHATSAPP</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white group-hover:underline">
                  0821-1763-3116
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-mono text-neutral-500">02</span>
              <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
            </div>
          </a>

          <a
            href="https://github.com/putrasangajimuslim"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 p-4 rounded-2xl flex items-center justify-between hover:border-neutral-600 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block tracking-widest">GITHUB</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white group-hover:underline">
                  github.com/putrasangajimuslim
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-mono text-neutral-500">03</span>
              <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/putra-sangaji-muslim?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 p-4 rounded-2xl flex items-center justify-between hover:border-neutral-600 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block tracking-widest">LINKEDIN</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white group-hover:underline">
                  linkedin.com/in/putra-sangaji-muslim
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-mono text-neutral-500">04</span>
              <ArrowUpRight size={14} className="text-neutral-500 group-hover:text-white transition-colors" />
            </div>
          </a>

          <a
            href="mailto:putrasangajimuslim3@gmail.com"
            className="mt-1 w-full py-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:bg-neutral-800 hover:border-neutral-600 text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
          >
             KIRIM PESAN <Send size={14} />
          </a>

        </motion.div>

      </div>

    </section>
  );
}