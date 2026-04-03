import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import logo from '../../public/logo.png';
import { NeuralNetwork } from '../components/NeuralNetwork';

type Lang = 'en' | 'pl';

const content = {
  en: {
    subtitle: 'Research Initiative',
    university: 'Cracow University of Technology',
    scroll: 'scroll',
    coreTeam: 'Core Team',
    otherMembers: 'Other members:',
    clubLink: 'MyAI Student Research Club',
    people: [
      {
        name: 'Ilona Urbaniak',
        role: 'Founder and Director, MyAI Research Initiative; Faculty Lead, MyAI Student Research Club',
      },
      {
        name: 'Alicja Kowalska',
        role: 'Student Lead. President of the student research club MyAI Sknum',
      },
      {
        name: 'Wiktoria Kosek',
        role: 'Vice Student Lead. Vice President of the student research club MyAI Sknum',
      },
      {
        name: 'Antoni Jaros',
        role: 'Student Researcher',
      },
    ],
  },
  pl: {
    subtitle: 'Research Initiative',
    university: 'Politechnika Krakowska',
    scroll: 'przewiń',
    coreTeam: 'Główny Zespół',
    otherMembers: 'Pozostali członkowie:',
    clubLink: 'Studenckie Koło Naukowe MyAI',
    people: [
      {
        name: 'Ilona Urbaniak',
        role: 'Założycielka i Dyrektorka MyAI Research Initiative; Opiekun Studenckiego Koła Naukowego Uczenia Maszynowego MyAI',
      },
      {
        name: 'Alicja Kowalska',
        role: 'Lider studentów. Przewodnicząca Studenckiego Koła Naukowego MyAI Sknum',
      },
      {
        name: 'Wiktoria Kosek',
        role: 'Wicelider studentów. Wiceprzewodnicząca Studenckiego Koła Naukowego MyAI Sknum',
      },
      {
        name: 'Antoni Jaros',
        role: 'Student Badacz',
      },
    ],
  },
};

const photos = [
  '/team/ilona-urbaniak.jpg',
  '/team/alicja-kowalska.jpg',
  '/team/wiktoria-kosek.jpg',
  '/team/antoni-jaros.jpg',
];

function PersonCard({ name, role, photo, delay }: { name: string; role: string; photo: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3 text-center"
    >
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-lg shadow-purple-500/20 bg-white/5 flex-shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = 'none';
            const parent = img.parentElement;
            if (parent) {
              parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-5xl text-white/30">${name.charAt(0)}</div>`;
            }
          }}
        />
      </div>
      <div>
        <p className="text-white font-semibold text-lg">{name}</p>
        <p className="text-purple-300 text-sm mt-1 leading-snug max-w-[180px]">{role}</p>
      </div>
    </motion.div>
  );
}

export function LandingPage() {
  const [lang, setLang] = useState<Lang>('pl');
  const t = content[lang];

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">

      {/* Language switcher */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
        <button
          onClick={() => setLang('en')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${lang === 'en' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('pl')}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${lang === 'pl' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'}`}
        >
          PL
        </button>
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-25">
          <NeuralNetwork />
        </div>
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="lg2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="url(#lg1)" strokeWidth="1.5" />
          <line x1="60%" y1="30%" x2="80%" y2="70%" stroke="url(#lg1)" strokeWidth="1.5" />
          <line x1="30%" y1="70%" x2="70%" y2="40%" stroke="url(#lg2)" strokeWidth="1.5" />
          <circle cx="10%" cy="20%" r="5" fill="#ec4899" className="animate-pulse" />
          <circle cx="40%" cy="60%" r="5" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="60%" cy="30%" r="5" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="70%" r="5" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        </svg>
      </div>

      {/* ── Hero ── */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-24">
        <motion.img
          src={logo}
          alt="MyAI Logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-24 h-24 md:w-32 md:h-32 mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative inline-block mb-3"
        >
          <div className="absolute inset-0 blur-[70px] bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-blue-500/40 rounded-full scale-150" />
          <h1
            className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            MyAI
          </h1>
          <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/80 text-lg md:text-2xl font-semibold mb-2"
        >
          {t.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/40 text-sm md:text-base tracking-widest uppercase mb-12"
        >
          {t.university}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col items-center gap-2 text-white/20 text-xs tracking-widest uppercase"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-purple-500/60 animate-pulse" />
          {t.scroll}
        </motion.div>
      </section>

      {/* ── People ── */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white/50 text-xs tracking-[0.3em] uppercase mb-14"
          >
            {t.coreTeam}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {t.people.map((p, i) => (
              <PersonCard key={p.name} name={p.name} role={p.role} photo={photos[i]} delay={i * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <p className="text-white/40 text-sm">
              {t.otherMembers}&nbsp;
              <Link
                to="/skn"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors font-medium"
              >
                {t.clubLink}
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
