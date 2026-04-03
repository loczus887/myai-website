import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Folder, BookOpen, Calendar, ExternalLink, Tag, Trophy, Mic, ChevronLeft, ChevronRight, X, ZoomIn, User } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type Tab = 'projects' | 'publications' | 'events' | 'awards' | 'conferences';

// ── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }: { images: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrent(c => (c - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrent(c => (c + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center" onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10">
        <X className="w-8 h-8" />
      </button>

      <div className="relative max-w-5xl max-h-[90vh] w-full px-12" onClick={e => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-h-[80vh] object-contain rounded-xl"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent(c => (c - 1 + images.length) % images.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/90 border border-white/20 rounded-full flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrent(c => (c + 1) % images.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/90 border border-white/20 rounded-full flex items-center justify-center text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </>
        )}

        <p className="text-center text-white/40 text-sm mt-2">{current + 1} / {images.length}</p>
      </div>
    </div>,
    document.body
  );
}

// ── ImageGallery ─────────────────────────────────────────────────────────────
function ImageGallery({ images, accentColor = 'bg-white' }: { images: string[]; accentColor?: string }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent(c => (c - 1 + images.length) % images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent(c => (c + 1) % images.length); };

  return (
    <>
      <div className="relative w-full h-52 overflow-hidden flex-shrink-0 group/gallery cursor-zoom-in" onClick={() => setLightbox(current)}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </AnimatePresence>

        {/* Zoom hint */}
        <div className="absolute inset-0 bg-black/0 group-hover/gallery:bg-black/20 transition-colors flex items-center justify-center">
          <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/gallery:opacity-80 transition-opacity" />
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/80 border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover/gallery:opacity-100 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setCurrent(i); }}
                  className={`rounded-full transition-all ${i === current ? `w-4 h-2.5 ${accentColor}` : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox images={images} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

// ── EmptyState ───────────────────────────────────────────────────────────────
function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-white/30">
      <Folder className="w-16 h-16 mb-4" />
      <p className="text-lg">{message}</p>
    </div>
  );
}

// ── Cards ────────────────────────────────────────────────────────────────────
function ProjectCard({ item }: { item: { title: string; description: string; image?: string; tags?: string[]; authors?: string[]; link?: string } }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
        className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col"
      >
        {item.image && (
          <div className="relative w-full h-48 overflow-hidden flex-shrink-0 cursor-zoom-in group/img" onClick={() => setLightbox(0)}>
            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/img:opacity-80 transition-opacity" />
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4 p-6 flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
            {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0"><ExternalLink className="w-5 h-5" /></a>}
          </div>
          <p className="text-white/60 text-sm leading-relaxed flex-1">{item.description}</p>
          {item.authors && item.authors.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.authors.map(author => (
                <span key={author} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-white/10 border border-white/20 text-white/70">
                  <User className="w-3 h-3" />{author}
                </span>
              ))}
            </div>
          )}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-purple-500/20 border border-purple-500/30 text-purple-300">
                  <Tag className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
      {lightbox !== null && item.image && (
        <Lightbox images={[item.image]} startIndex={0} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

function PublicationCard({ item }: { item: { title: string; authors: string; venue: string; year: string; link?: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group flex flex-col gap-3"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">{item.title}</h3>
        {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0"><ExternalLink className="w-5 h-5" /></a>}
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

function EventCard({ item }: { item: { title: string; date: string; location: string; description: string; images?: string[]; link?: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col"
    >
      {item.images && item.images.length > 0 && <ImageGallery images={item.images} accentColor="bg-blue-400" />}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">{item.title}</h3>
          {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0"><ExternalLink className="w-5 h-5" /></a>}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 text-blue-300"><Calendar className="w-4 h-4" /><span>{item.date}</span></div>
          <div className="flex items-center gap-2 text-white/50"><span>📍</span><span>{item.location}</span></div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{item.description}</p>
      </div>
    </motion.div>
  );
}

function AwardCard({ item, index }: { item: { title: string; competition: string; date: string; description: string; images?: string[]; link?: string }; index: number }) {
  const medals = ['🥇', '🥈', '🥉'];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white/5 border border-yellow-500/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col"
    >
      {item.images && item.images.length > 0 && <ImageGallery images={item.images} accentColor="bg-yellow-400" />}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{medals[index] ?? '🏆'}</span>
            <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">{item.title}</h3>
          </div>
          {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0"><ExternalLink className="w-5 h-5" /></a>}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <span className="flex items-center gap-1 text-yellow-400"><Trophy className="w-4 h-4" />{item.competition}</span>
          <span className="text-white/40">{item.date}</span>
        </div>
        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{item.description}</p>
      </div>
    </motion.div>
  );
}

function ConferenceCard({ item }: { item: { title: string; date: string; location: string; description: string; images?: string[]; link?: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
      className="bg-white/5 border border-emerald-500/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col"
    >
      {item.images && item.images.length > 0 && <ImageGallery images={item.images} accentColor="bg-emerald-400" />}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">{item.title}</h3>
          {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors flex-shrink-0"><ExternalLink className="w-5 h-5" /></a>}
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 text-emerald-400"><Calendar className="w-4 h-4" /><span>{item.date}</span></div>
          <div className="flex items-center gap-2 text-white/50"><span>📍</span><span>{item.location}</span></div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{item.description}</p>
      </div>
    </motion.div>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export function PortfolioSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<Tab>('projects');

  const tabs: { key: Tab; label: string; icon: React.ReactNode; color: string }[] = [
    { key: 'projects',      label: t.portfolio.tabs.projects,      icon: <Folder className="w-4 h-4" />,   color: 'text-purple-400 border-purple-400 bg-purple-500/10' },
    { key: 'publications',  label: t.portfolio.tabs.publications,  icon: <BookOpen className="w-4 h-4" />, color: 'text-pink-400 border-pink-400 bg-pink-500/10' },
    { key: 'events',        label: t.portfolio.tabs.events,        icon: <Calendar className="w-4 h-4" />, color: 'text-blue-400 border-blue-400 bg-blue-500/10' },
    { key: 'awards',        label: t.portfolio.tabs.awards,        icon: <Trophy className="w-4 h-4" />,   color: 'text-yellow-400 border-yellow-400 bg-yellow-500/10' },
    { key: 'conferences',   label: t.portfolio.tabs.conferences,   icon: <Mic className="w-4 h-4" />,      color: 'text-emerald-400 border-emerald-400 bg-emerald-500/10' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.portfolio.title}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${activeTab === tab.key ? tab.color : 'text-white/50 border-white/10 hover:text-white hover:border-white/30'}`}
            >
              {tab.icon}{tab.label}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {activeTab === 'projects' && (
            t.portfolio.projects.length === 0 ? <EmptyState message={t.portfolio.empty} />
            : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{(t.portfolio.projects as any[]).map((item, i) => <ProjectCard key={i} item={item} />)}</div>
          )}
          {activeTab === 'publications' && (
            t.portfolio.publications.length === 0 ? <EmptyState message={t.portfolio.empty} />
            : <div className="grid md:grid-cols-2 gap-6">{(t.portfolio.publications as any[]).map((item, i) => <PublicationCard key={i} item={item} />)}</div>
          )}
          {activeTab === 'events' && (
            t.portfolio.events.length === 0 ? <EmptyState message={t.portfolio.empty} />
            : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{(t.portfolio.events as any[]).map((item, i) => <EventCard key={i} item={item} />)}</div>
          )}
          {activeTab === 'awards' && (
            t.portfolio.awards.length === 0 ? <EmptyState message={t.portfolio.empty} />
            : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{(t.portfolio.awards as any[]).map((item, i) => <AwardCard key={i} item={item} index={i} />)}</div>
          )}
          {activeTab === 'conferences' && (
            t.portfolio.conferences.length === 0 ? <EmptyState message={t.portfolio.empty} />
            : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{(t.portfolio.conferences as any[]).map((item, i) => <ConferenceCard key={i} item={item} />)}</div>
          )}
        </div>
      </div>
    </section>
  );
}
