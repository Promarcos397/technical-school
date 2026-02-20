import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { List, X, Globe, Heart } from '@phosphor-icons/react';

interface NavbarProps {
  lang: Language;
  t: any;
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, t, toggleLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'vision', label: t.navAbout },
    { id: 'infrastructure', label: t.navInfrastructure },
    { id: 'curriculum', label: t.navCurriculum },
    // Removed contact from here to handle separately
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-none py-4'}`}>
      {/* Top utility bar (Hidden on scroll to save space, or kept simplified) */}
      <div className={`bg-primary text-white text-xs transition-all duration-300 overflow-hidden ${scrolled ? 'h-0' : 'h-8 py-2'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <span className="opacity-80">{t.heroLocation}</span>
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg text-xs font-semibold transition-colors border border-white/10"
          >
            <Globe size={14} weight="bold" /> {t.btnToggle}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-transparent">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <img
              src="/images/logo-no-text.svg"
              alt={`${t.brandName} ${t.brandSubtitle}`}
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? 'h-10' : 'h-14'}`}
            />
            <div className={`hidden sm:flex flex-col border-l border-slate-300 pl-4 transition-opacity duration-300 ${scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
              <span className="font-bold text-lg text-primary leading-tight">{t.brandName}</span>
              <span className="text-xs text-slate-500 uppercase tracking-wide">{t.brandSubtitle}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                className="text-sm font-medium text-slate-600 hover:text-secondary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Redesigned Donate Button */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:bg-orange-600 hover:-translate-y-0.5 transition-all active:translate-y-0 active:shadow-md"
            >
              <Heart weight="fill" className="animate-pulse" />
              {t.navContact}
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mini Donate for Mobile */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className="p-2 text-secondary bg-orange-50 rounded-lg"
            >
              <Heart weight="fill" size={20} />
            </a>
            <button
              className="p-2 text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0 top-full">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                className="py-3 px-4 font-medium text-slate-700 border-l-4 border-transparent hover:border-secondary hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className="mt-2 py-3 px-4 font-bold bg-secondary text-white rounded-lg flex items-center justify-center gap-2 text-center shadow-md"
            >
              <Heart weight="fill" /> {t.navContact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
