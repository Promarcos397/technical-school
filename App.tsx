import React, { useState, useEffect } from 'react';
import { DICTIONARY } from './data/content';

// Simple Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Content from './components/Content';
import Infrastructure from './components/Infrastructure';
import Footer from './components/Footer';

import Contact from './components/Contact';

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const isRtl = lang === 'ar';
  const t = DICTIONARY[lang];

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en');

  return (
    <div className={`min-h-screen font-sans text-slate-900 bg-white ${isRtl ? 'font-arabic' : ''}`}>
      <Navbar lang={lang} t={t} toggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <Stats t={t} />
        <About isRtl={isRtl} t={t} />
        <Content isRtl={isRtl} t={t} />
        <Infrastructure isRtl={isRtl} t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

export default App;
