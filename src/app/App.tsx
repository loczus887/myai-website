import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TeamSection } from './components/TeamSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <HeroSection />
        <TeamSection />
        <ActivitiesSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
