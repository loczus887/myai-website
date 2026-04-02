import { LanguageProvider } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TeamSection } from './components/TeamSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <HeroSection />
        <TeamSection />
        <ActivitiesSection />
        <PortfolioSection />
        <NewsSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
