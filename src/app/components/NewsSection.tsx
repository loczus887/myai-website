import { motion } from 'motion/react';
import { Newspaper, CalendarDays, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-white/30">
      <Newspaper className="w-16 h-16 mb-4" />
      <p className="text-lg">{message}</p>
    </div>
  );
}

function NewsCard({ item, index }: { item: { title: string; date: string; summary: string; image?: string; link?: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col"
    >
      {item.image && (
        <div className="w-full h-48 overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-center gap-2 text-white/40 text-sm">
          <CalendarDays className="w-4 h-4" />
          <span>{item.date}</span>
        </div>

        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
          {item.title}
        </h3>

        <p className="text-white/60 text-sm leading-relaxed flex-1 whitespace-pre-line">{item.summary}</p>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors mt-auto w-fit"
          >
            <span>Formularz zgłoszeniowy</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export function NewsSection() {
  const { t } = useLanguage();

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="newsLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="40%" x2="30%" y2="70%" stroke="url(#newsLineGradient)" strokeWidth="1" />
        <line x1="70%" y1="20%" x2="90%" y2="50%" stroke="url(#newsLineGradient)" strokeWidth="1" />
        <circle cx="10%" cy="40%" r="4" fill="#a855f7" opacity="0.5" />
        <circle cx="30%" cy="70%" r="4" fill="#3b82f6" opacity="0.5" />
        <circle cx="70%" cy="20%" r="4" fill="#a855f7" opacity="0.5" />
        <circle cx="90%" cy="50%" r="4" fill="#3b82f6" opacity="0.5" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.news.title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.news.subtitle}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {t.news.items.length === 0 ? (
            <EmptyState message={t.news.empty} />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...(t.news.items as any[])]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((item, i) => (
                  <NewsCard key={i} item={item} index={i} />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
