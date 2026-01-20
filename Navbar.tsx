
import React, { useState } from 'react';
import { Language } from './types';

interface NavbarProps {
  lang: Language;
  t: any;
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, t, toggleLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const navLinks = [
    { id: 'home', label: t.navHome },
    { id: 'vision', label: t.navAbout },
    { id: 'infrastructure', label: t.navInfrastructure },
    { id: 'departments', label: t.navCurriculum },
    { id: 'community', label: t.navCommunity },
    { id: 'contact', label: t.navContact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="w-9 h-9 md:w-11 md:h-11 bg-[#2D5A5A] rounded-lg md:rounded-xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg border border-white/20 transform hover:rotate-6 transition-transform">
            A
          </div>
          <div>
            <h1 className="text-sm md:text-xl font-black text-[#2D5A5A] leading-tight tracking-tight">
              {t.heroTitle}
            </h1>
            <p className="text-[9px] md:text-xs text-[#C2B280] font-bold uppercase tracking-widest">
              {t.heroLocation}
            </p>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex gap-8 text-sm font-black text-[#4A4A4A]">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                className="hover:text-[#2D5A5A] transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#2D5A5A] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <button 
            onClick={toggleLang}
            className="px-5 py-2 rounded-full bg-[#2D5A5A] text-white text-xs font-black hover:bg-[#1E3C3C] transition-all shadow-md flex items-center gap-2 active:scale-95 ring-4 ring-[#2D5A5A]/10"
          >
            <i className="ph ph-globe text-base"></i> {t.btnToggle}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-[#2D5A5A] bg-[#2D5A5A]/5 rounded-lg active:scale-90 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ph ${isMenuOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-6 mb-8">
            {navLinks.map(link => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
                className="text-xl font-black text-[#2D5A5A] hover:translate-x-2 transition-transform flex items-center gap-3"
              >
                <i className={`ph ph-caret-${lang === 'ar' ? 'left' : 'right'} text-sm opacity-30`}></i>
                {link.label}
              </a>
            ))}
          </nav>
          <button 
            onClick={toggleLang}
            className="w-full py-4 rounded-2xl bg-[#2D5A5A] text-white font-black shadow-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
          >
            <i className="ph ph-globe text-xl"></i> {t.btnToggle}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
