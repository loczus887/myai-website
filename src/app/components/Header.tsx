import { Menu, X, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import logo from '../../public/logo.png';
import { useLanguage } from '../i18n/LanguageContext';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navClick = (id: string) => {
    scrollTo(id);
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-1 text-white/40 hover:text-white/80 transition-colors text-sm"
              title="Strona główna / Home"
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-1">
              <img src={logo} alt="MyAI Logo" className="w-12 h-12" />
              <span className="text-xl font-bold text-white">MyAI</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => navClick('about')}      className="text-white/80 hover:text-white transition-colors">{t.nav.about}</button>
            <button onClick={() => navClick('team')}       className="text-white/80 hover:text-white transition-colors">{t.nav.team}</button>
            <button onClick={() => navClick('activities')} className="text-white/80 hover:text-white transition-colors">{t.nav.activities}</button>
            <button onClick={() => navClick('portfolio')}  className="text-white/80 hover:text-white transition-colors">{t.nav.portfolio}</button>
            <button onClick={() => navClick('news')}       className="text-white/80 hover:text-white transition-colors">{t.nav.news}</button>
            <button onClick={() => navClick('contact')}    className="text-white/80 hover:text-white transition-colors">{t.nav.contact}</button>
          </div>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'en' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pl')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'pl' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                PL
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <button onClick={() => navClick('about')}      className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 text-left">{t.nav.about}</button>
          <button onClick={() => navClick('team')}       className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 text-left">{t.nav.team}</button>
          <button onClick={() => navClick('activities')} className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 text-left">{t.nav.activities}</button>
          <button onClick={() => navClick('portfolio')}  className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 text-left">{t.nav.portfolio}</button>
          <button onClick={() => navClick('news')}       className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 text-left">{t.nav.news}</button>
          <button onClick={() => navClick('contact')}    className="text-white/80 hover:text-white transition-colors py-2 text-left">{t.nav.contact}</button>
        </div>
      )}
    </header>
  );
}
