import React, { useState, useEffect } from 'react';
import { IMAGES, NEWS_ITEMS } from './constants';
import { MapPin, ArrowRight } from '@phosphor-icons/react';

interface HeroProps {
  isRtl: boolean;
  t: any;
}

const Hero: React.FC<HeroProps> = ({ isRtl, t }) => {
  const [activeNews, setActiveNews] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNews(prev => (prev + 1) % NEWS_ITEMS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-16 bg-slate-50">
      {/* Hero Image Banner */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={IMAGES.HERO_BG}
          alt="Technical School"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content below banner */}
      <div className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-secondary" weight="fill" />
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{isRtl ? 'الموقع' : 'Location'}</h3>
                <p className="text-sm text-slate-600">{t.heroLocation}</p>
                <p className="text-xs text-slate-400 mt-1">{t.coords}</p>
              </div>
            </div>

            {/* News */}
            <div className="md:col-span-2 border-l border-slate-200 pl-6">
              <h3 className="font-bold text-primary mb-2">{t.heroNewsLabel}</h3>
              <p className="text-sm text-slate-600">
                {isRtl ? NEWS_ITEMS[activeNews].text.ar : NEWS_ITEMS[activeNews].text.en}
                <span className="text-xs text-slate-400 ml-2">[{NEWS_ITEMS[activeNews].date}]</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              {t.heroCTA} <ArrowRight size={18} />
            </a>
            <a
              href="#infrastructure"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
            >
              {t.navInfrastructure} <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
