import { Menu } from 'lucide-react';
import logo from 'figma:asset/81f1d01eff03020ed49590e371fd1a448191c702.png';
import { useLanguage } from '../i18n/LanguageContext';

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MyAI Logo" className="w-12 h-12" />
            <span className="text-xl font-bold text-white">MyAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">{t.nav.about}</a>
            <a href="#team" className="text-white/80 hover:text-white transition-colors">{t.nav.team}</a>
            <a href="#activities" className="text-white/80 hover:text-white transition-colors">{t.nav.activities}</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-blue-500 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('pl')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'pl'
                    ? 'bg-blue-500 text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                PL
              </button>
            </div>

            <button className="md:hidden text-white">
              <Menu />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
