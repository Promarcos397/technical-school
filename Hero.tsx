
import React from 'react';
import { Language } from './types';
import { IMAGES } from './constants';

interface HeroProps {
  lang: Language;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ lang, t }) => {
  const isRtl = lang === 'ar';

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  const scrollToInfra = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('infrastructure');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
      <img 
        src={IMAGES.HERO_BG} 
        alt="Technical School Main Campus"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="inline-block bg-[#C2B280] text-[#2D5A5A] px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[11px] md:text-xs font-black mb-6 md:mb-10 animate-bounce shadow-2xl">
          {isRtl ? 'بناء الإنسان.. نهضة الوطن' : 'Building People.. National Progress'}
        </div>
        <h2 className="text-3xl md:text-8xl font-black mb-6 md:mb-10 drop-shadow-2xl leading-[1.1] tracking-tight">
          {t.heroTitle}
        </h2>
        <p className="text-lg md:text-3xl mb-8 md:mb-14 text-white/95 font-medium max-w-4xl mx-auto drop-shadow-lg leading-relaxed opacity-90 px-4 md:px-0">
          {t.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-sm mx-auto sm:max-w-none">
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="bg-[#C2B280] hover:bg-white text-[#2D5A5A] px-10 md:px-14 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
          >
            <i className="ph ph-hand-heart"></i> {t.heroCTA}
          </a>
          <a 
            href="#infrastructure" 
            onClick={scrollToInfra}
            className="bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white px-10 md:px-14 py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-lg md:text-xl border border-white/40 transition-all shadow-xl flex items-center justify-center gap-3"
          >
            <i className="ph ph-buildings"></i> {t.navInfrastructure}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
