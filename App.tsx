
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { DICTIONARY } from './constants';
import Navbar from './Navbar';
import Hero from './Hero';
import { StatsBar, VisionSection, InfrastructureSection, CurriculumSection, CommunitySection } from './Sections';
import { SupportCTA, ContactSection, Footer } from './ContactAndFooter';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const isRtl = lang === 'ar';
  const t = DICTIONARY[lang];

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Handle initial hash on load
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [lang, isRtl]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'ar' : 'en');

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF0] text-[#2D2D2D] selection:bg-[#C2B280] selection:text-white overflow-x-hidden">
      <Navbar lang={lang} t={t} toggleLang={toggleLang} />
      
      <main>
        <Hero lang={lang} t={t} />
        <StatsBar lang={lang} isRtl={isRtl} />
        <VisionSection lang={lang} t={t} isRtl={isRtl} />
        <InfrastructureSection lang={lang} t={t} />
        <CurriculumSection lang={lang} t={t} />
        <CommunitySection lang={lang} t={t} isRtl={isRtl} />
        <SupportCTA lang={lang} t={t} />
        <ContactSection lang={lang} t={t} isRtl={isRtl} />
      </main>

      <Footer lang={lang} t={t} isRtl={isRtl} />
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
