'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function ProjectModal({ isOpen, item, activeTab, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const isCertificate = activeTab === "Certificates";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
        >
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-40 p-2 rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Gambar Pratinjau Murni Tanpa Bingkai */}
          <div className={`${isCertificate ? 'h-[550px] sm:h-[640px]' : 'h-56'} w-full bg-neutral-950 relative overflow-hidden shrink-0 flex items-center justify-center`}>
            
            {/* Efek Garis Kaca Mengkilap Berjalan (Shimmer Sweep) */}
            {isCertificate && (
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", repeatDelay: 2 }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </div>
            )}

            <img 
              src={item.image} 
              alt={item.title} 
              className={`w-full h-full ${isCertificate ? 'object-cover bg-neutral-950' : 'object-cover object-top'}`}
            />
          </div>

          {/* Detail Konten Modal (Hanya Tampil untuk Proyek) */}
          {!isCertificate ? (
            <div className="p-8 overflow-y-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/20">
                  {item.category}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {item.client}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                {item.details}
              </p>

              {item.tags && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">Teknologi yang Digunakan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-950 text-neutral-200 border border-neutral-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-3 pt-4 border-t border-neutral-800">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-neutral-800 text-white text-xs font-mono hover:bg-neutral-700 transition cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-neutral-200 transition inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Preview <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ) : (
            /* Bagian Khusus Sertifikat (Tombol Tutup Saja) */
            <div className="p-4 flex justify-end bg-neutral-900 border-t border-neutral-800">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-neutral-800 text-white text-xs font-mono hover:bg-neutral-700 transition cursor-pointer"
              >
                Tutup
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}