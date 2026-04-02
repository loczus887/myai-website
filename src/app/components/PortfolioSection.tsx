import { useState } from 'react';
import { motion } from 'motion/react';
import { Folder, BookOpen, Calendar, ExternalLink, Tag } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type Tab = 'projects' | 'publications' | 'events';

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-white/30">
      <Folder className="w-16 h-16 mb-4" />
      <p className="text-lg">{message}</p>
    </div>
  );
}

function ProjectCard({ item }: { item: { title: string; description: string; tags?: string[]; link?: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      <p className="text-white/60 text-sm leading-relaxed flex-1">{item.description}</p>
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-purple-500/20 border border-purple-500/30 text-purple-300">
              <Tag className="w-3 h-3" />{tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function PublicationCard({ item }: { item: { title: string; authors: string; venue: string; year: string; link?: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">{item.title}</h3>
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      <p className="text-white/50 text-sm">{item.authors}</p>
      <div className="flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-pink-400" />
        <span className="text-pink-300 text-sm">{item.venue}</span>
        <span className="text-white/30 text-sm">· {item.year}</span>
      </div>
    </motion.div>
  );
}

function EventCard({ item }: { item: { title: string; date: string; location: string; description: string; link?: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group flex flex-col gap-4"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{item.title}</h3>
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 text-blue-300">
          <Calendar className="w-4 h-4" />
          <span>{item.date}</span>
        </div>
        <div className="flex items-center gap-2 text-white/50">
          <span>📍</span>
          <span>{item.location}</span>
        </div>
      </div>
      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

export function PortfolioSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  const tabs: { key: Tab; label: string; icon: React.ReactNode; color: string }[] = [
    { key: 'projects', label: t.portfolio.tabs.projects, icon: <Folder className="w-4 h-4" />, color: 'text-purple-400 border-purple-400 bg-purple-500/10' },
    { key: 'publications', label: t.portfolio.tabs.publications, icon: <BookOpen className="w-4 h-4" />, color: 'text-pink-400 border-pink-400 bg-pink-500/10' },
    { key: 'events', label: t.portfolio.tabs.events, icon: <Calendar className="w-4 h-4" />, color: 'text-blue-400 border-blue-400 bg-blue-500/10' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.portfolio.title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? tab.color
                  : 'text-white/50 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'projects' && (
            t.portfolio.projects.length === 0
              ? <EmptyState message={t.portfolio.empty} />
              : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(t.portfolio.projects as any[]).map((item, i) => <ProjectCard key={i} item={item} />)}
                </div>
          )}
          {activeTab === 'publications' && (
            t.portfolio.publications.length === 0
              ? <EmptyState message={t.portfolio.empty} />
              : <div className="grid md:grid-cols-2 gap-6">
                  {(t.portfolio.publications as any[]).map((item, i) => <PublicationCard key={i} item={item} />)}
                </div>
          )}
          {activeTab === 'events' && (
            t.portfolio.events.length === 0
              ? <EmptyState message={t.portfolio.empty} />
              : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(t.portfolio.events as any[]).map((item, i) => <EventCard key={i} item={item} />)}
                </div>
          )}
        </div>
      </div>
    </section>
  );
}
