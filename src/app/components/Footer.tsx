import { Mail, MapPin, Github, Linkedin, Facebook } from 'lucide-react';
import logo from '../../public/logo.png';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="MyAI Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-white">MyAI</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a href="mailto:myai.sknum@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                myai.sknum@gmail.com
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {t.footer.university}<br />
                  ul. Warszawska 24, 31-155 Kraków, Poland
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/studenckie-ko%C5%82o-naukowe-uczenia-maszynowego-myai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61575823721644"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/SKNUM-MyAI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            {t.footer.rights}
          </p>
          <p className="text-white/40 text-sm">
            {t.footer.university}
          </p>
        </div>
      </div>
    </footer>
  );
}
