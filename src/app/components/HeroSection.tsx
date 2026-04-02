import { motion } from 'motion/react';
import { NeuralNetwork } from './NeuralNetwork';
import { useLanguage } from '../i18n/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Neural network animation */}
        <div className="absolute inset-0 opacity-30">
          <NeuralNetwork />
        </div>

        {/* Additional neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          {/* More neural network connections */}
          <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="60%" y1="30%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1.5" />
          <line x1="30%" y1="70%" x2="70%" y2="40%" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          <line x1="15%" y1="80%" x2="45%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="70%" y1="15%" x2="85%" y2="85%" stroke="url(#lineGradient2)" strokeWidth="1" />
          <line x1="25%" y1="40%" x2="55%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="50%" y1="10%" x2="90%" y2="50%" stroke="url(#lineGradient2)" strokeWidth="1" />

          {/* Nodes */}
          <circle cx="10%" cy="20%" r="5" fill="#ec4899" className="animate-pulse" />
          <circle cx="40%" cy="60%" r="5" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="60%" cy="30%" r="5" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="80%" cy="70%" r="5" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="15%" cy="80%" r="4" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="45%" cy="30%" r="4" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          <circle cx="70%" cy="15%" r="4" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          <circle cx="85%" cy="85%" r="4" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '1.7s' }} />
          <circle cx="25%" cy="40%" r="3" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          <circle cx="55%" cy="80%" r="3" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '1.1s' }} />
          <circle cx="50%" cy="10%" r="3" fill="#a855f7" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
          <circle cx="90%" cy="50%" r="3" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '1.9s' }} />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="mb-8 relative inline-block">
              {/* Glow behind text */}
              <div className="absolute inset-0 blur-[60px] bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-blue-500/40 rounded-full scale-150" />
              <h1
                className="relative text-7xl md:text-9xl font-black tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                MyAI
              </h1>
              {/* Underline accent */}
              <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
            </div>

            <h2 className="text-xl md:text-2xl text-white/80 mb-4 tracking-wide uppercase" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '0.95rem', letterSpacing: '0.2em' }}>
              {t.hero.subtitle}
            </h2>

            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
              {t.hero.aboutTitle}
            </h3>
            <div className="text-white/80 leading-relaxed space-y-4">
              {t.hero.aboutText.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
