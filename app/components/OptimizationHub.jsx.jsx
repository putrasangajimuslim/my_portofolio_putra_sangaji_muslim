'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Loader2, ShieldAlert, Send, 
  Database, Zap, ArrowLeft, CheckCircle2, Cpu, BookOpen 
} from 'lucide-react';

export default function OptimizationHub() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // State untuk Debounce Demo
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // State untuk Rate Limiter Demo
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [rateLimitMsg, setRateLimitMsg] = useState('Tekan tombol untuk menguji pembatasan aksi.');
  const lastClickTime = useRef(0);

  // State untuk N+1 Query Demo
  const [nPlusOneLogs, setNPlusOneLogs] = useState([]);

  // Efek Debounce
  useEffect(() => {
    if (selectedTopic !== 'debounce') return;
    setIsSearching(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setIsSearching(false);
    }, 600);
    return () => clearTimeout(handler);
  }, [searchQuery, selectedTopic]);

  // Handler Rate Limiter
  const handleRateLimitClick = () => {
    const now = Date.now();
    if (now - lastClickTime.current < 2000) {
      setIsRateLimited(true);
      setRateLimitMsg('⚠️ Rate Limit Aktif! Terlalu banyak klik dalam waktu singkat.');
      setTimeout(() => setIsRateLimited(false), 2000);
      return;
    }
    lastClickTime.current = now;
    setRateLimitMsg('✅ Permintaan berhasil diproses oleh sistem.');
  };

  // Simulasi N+1 Query
  const simulateNPlusOne = async (mode) => {
    setNPlusOneLogs([]);
    if (mode === 'bad') {
      setNPlusOneLogs((prev) => [...prev, '🌐 [1 Request] Mengambil daftar 3 Author utama...']);
      await new Promise((r) => setTimeout(r, 400));
      setNPlusOneLogs((prev) => [...prev, '⚠️ Mengambil detail Author ID: 1 (Request tambahan ke-1)']);
      await new Promise((r) => setTimeout(r, 300));
      setNPlusOneLogs((prev) => [...prev, '⚠️ Mengambil detail Author ID: 2 (Request tambahan ke-2)']);
      await new Promise((r) => setTimeout(r, 300));
      setNPlusOneLogs((prev) => [...prev, '⚠️ Mengambil detail Author ID: 3 (Request tambahan ke-3)']);
      setNPlusOneLogs((prev) => [...prev, '❌ Total terjadi 4 request jaringan (Masalah N+1 Query)!']);
    } else {
      setNPlusOneLogs((prev) => [...prev, '🌐 [1 Request] Mengambil data batch author [1, 2, 3] sekaligus...']);
      await new Promise((r) => setTimeout(r, 500));
      setNPlusOneLogs((prev) => [...prev, '⚡ Semua data relasional berhasil dimuat secara efisien!']);
      setNPlusOneLogs((prev) => [...prev, '✅ Total: Hanya 1 Request jaringan (Optimasi Batch Fetching).']);
    }
  };

  const topics = [
    {
      id: 'debounce',
      title: 'Debounce Search',
      category: 'Optimasi Input',
      icon: <Search className="text-emerald-400" size={24} />,
      desc: 'Teknik menunda eksekusi fungsi pencarian hingga pengguna selesai mengetik.',
      color: 'border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5'
    },
    {
      id: 'ratelimit',
      title: 'Rate Limiter',
      category: 'Keamanan & Anti-Spam',
      icon: <ShieldAlert className="text-amber-400" size={24} />,
      desc: 'Membatasi frekuensi klik tombol atau pengiriman data ganda secara beruntun.',
      color: 'border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5'
    },
    {
      id: 'nplusone',
      title: 'N+1 Query Optimization',
      category: 'Efisiensi Jaringan',
      icon: <Database className="text-cyan-400" size={24} />,
      desc: 'Menghindari banyak request beruntun dengan teknik batch fetching data relasional.',
      color: 'border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/5'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto relative z-20 text-neutral-200">
      
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-emerald-400 mb-3 shadow-inner">
          <Cpu size={14} className="animate-pulse" /> Interactive Knowledge Base
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Pusat Informasi & Studi Kasus Optimasi
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
          Klik salah satu kotak di bawah untuk mempelajari konsep serta mencoba simulasi interaktifnya secara langsung.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!selectedTopic ? (
          /* TAMPILAN KOTAK-KOTAK (GRID) */
          <motion.div 
            key="grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {topics.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedTopic(item.id)}
                className={`group p-6 rounded-3xl border ${item.color} backdrop-blur-xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-4 shadow-inner group-hover:border-neutral-700 transition">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-emerald-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>Pelajari & Simulasi</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          /* TAMPILAN DETAIL KETIKA KOTAK DIKLIK */
          <motion.div 
            key="detail"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0b0b0b] border border-neutral-800 p-6 sm:p-8 rounded-3xl shadow-2xl relative"
          >
            {/* Tombol Kembali */}
            <button
              onClick={() => setSelectedTopic(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white hover:border-neutral-700 transition mb-6 cursor-pointer"
            >
              <ArrowLeft size={14} /> Kembali ke Menu Utama
            </button>

            {/* KONTEN TOPIK 1: DEBOUNCE */}
            {selectedTopic === 'debounce' && (
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono mb-2 uppercase tracking-wider">
                  <BookOpen size={14} /> Topik 01 • Manajemen Input
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Debounce Search Implementation
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  Debounce menunda pemanggilan API sampai jeda waktu tertentu (misal 600ms) setelah ketikan terakhir pengguna berhenti. Ini menghemat bandwith dan mencegah server overload akibat *request* yang terlalu sering.
                </p>

                <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl">
                  <h4 className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">Live Simulation:</h4>
                  <div className="relative mb-4">
                    <Search className="absolute left-3.5 top-3.5 text-neutral-500" size={16} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Coba ketik sesuatu di sini..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-10 py-3 text-xs text-white focus:outline-none focus:border-emerald-500 transition"
                    />
                    {isSearching && <Loader2 className="absolute right-3.5 top-3.5 animate-spin text-emerald-400" size={16} />}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <span className="text-neutral-500 block mb-1">Input Mentah:</span>
                      <span className="text-white font-bold">{searchQuery || '(kosong)'}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                      <span className="text-neutral-500 block mb-1">Trigger API (Debounced):</span>
                      <span className="text-emerald-400 font-bold">{debouncedQuery || '(menunggu jeda...)'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* KONTEN TOPIK 2: RATE LIMITER */}
            {selectedTopic === 'ratelimit' && (
              <div>
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-2 uppercase tracking-wider">
                  <BookOpen size={14} /> Topik 02 • Keamanan & Anti-Spam
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Client-side Rate Limiter
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  Rate limiter memastikan tombol aksi (seperti submit form atau checkout) memiliki jeda minimum antar klik. Mencegah duplikasi data akibat *double click* atau aksi spam pengguna.
                </p>

                <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl">
                  <h4 className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">Live Simulation:</h4>
                  <button
                    onClick={handleRateLimitClick}
                    className={`w-full py-3 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider transition flex items-center justify-center gap-2 cursor-pointer mb-4 ${
                      isRateLimited ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-emerald-500 text-black hover:bg-emerald-400'
                    }`}
                  >
                    <Send size={14} /> Klik Cepat Beruntun (Uji Pembatasan)
                  </button>

                  <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300 flex items-center gap-2">
                    <ShieldAlert size={14} className={isRateLimited ? 'text-red-400' : 'text-emerald-400'} />
                    <span>{rateLimitMsg}</span>
                  </div>
                </div>
              </div>
            )}

            {/* KONTEN TOPIK 3: N+1 QUERY */}
            {selectedTopic === 'nplusone' && (
              <div>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2 uppercase tracking-wider">
                  <BookOpen size={14} /> Topik 03 • Efisiensi Jaringan
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Solusi Masalah N+1 Query (Batch Fetching)
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                  Masalah N+1 terjadi saat frontend melakukan 1 request untuk daftar utama, lalu melakukan N request tambahan untuk mengambil detail setiap relasi. Menggantinya dengan Batch Fetching mereduksi request menjadi hanya 1 kali perjalanan jaringan.
                </p>

                <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl">
                  <h4 className="text-xs font-mono text-neutral-300 uppercase tracking-wider mb-3">Live Simulation:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <button
                      onClick={() => simulateNPlusOne('bad')}
                      className="py-2.5 px-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 font-mono text-xs transition cursor-pointer"
                    >
                      Simulasi Alur N+1 Buruk
                    </button>
                    <button
                      onClick={() => simulateNPlusOne('batch')}
                      className="py-2.5 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20 font-mono text-xs transition cursor-pointer"
                    >
                      Simulasi Solusi Batch Fetch
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono space-y-2 min-h-[100px] flex flex-col justify-center">
                    {nPlusOneLogs.length === 0 ? (
                      <span className="text-neutral-500 text-center">Pilih tombol simulasi di atas untuk melihat log proses...</span>
                    ) : (
                      nPlusOneLogs.map((log, index) => (
                        <p key={index} className={log.includes('❌') ? 'text-red-400' : log.includes('✅') || log.includes('⚡') ? 'text-emerald-400' : 'text-neutral-300'}>
                          {log}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}