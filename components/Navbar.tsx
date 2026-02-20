import React, { useState } from 'react';
import { IMAGES } from '../data/images';
import { List, X, Globe } from '@phosphor-icons/react';

interface NavbarProps {
    lang: 'en' | 'ar';
    t: any;
    toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, t, toggleLang }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b-2 border-slate-900 h-20">
            <div className="container mx-auto px-6 h-full flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-4">
                    <img src={IMAGES.LOGO} alt="Logo" className="h-10 w-auto object-contain grayscale" />
                    <div className="hidden md:block">
                        <h1 className="font-black text-slate-900 text-lg uppercase tracking-tight">{t.brandName}</h1>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest block border-t border-slate-300 mt-0.5 pt-0.5">{t.brandSubtitle}</span>
                    </div>
                </a>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#about" className="text-sm font-bold text-slate-600 hover:text-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all">{t.navAbout}</a>
                    <a href="#programs" className="text-sm font-bold text-slate-600 hover:text-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all">{t.navCurriculum}</a>
                    <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-black uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all">{t.navContact}</a>

                    <button onClick={toggleLang} className="flex items-center gap-2 text-sm font-black text-white bg-slate-900 px-4 py-2 hover:bg-black uppercase border border-slate-900 transition-colors">
                        <Globe size={18} /> {lang === 'en' ? 'Arabic' : 'English'}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-900 p-2 border border-slate-300 hover:bg-slate-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-white border-b-2 border-slate-900 p-0 flex flex-col md:hidden shadow-none">
                    <a href="#about" className="text-lg font-bold text-slate-900 border-b border-slate-100 p-6 uppercase" onClick={() => setIsMenuOpen(false)}>{t.navAbout}</a>
                    <a href="#programs" className="text-lg font-bold text-slate-900 border-b border-slate-100 p-6 uppercase" onClick={() => setIsMenuOpen(false)}>{t.navCurriculum}</a>
                    <a href="#contact" className="text-lg font-bold text-slate-900 border-b border-slate-100 p-6 uppercase" onClick={() => setIsMenuOpen(false)}>{t.navContact}</a>
                    <button onClick={toggleLang} className="text-left text-lg font-bold text-slate-900 p-6 bg-slate-50 uppercase">
                        {lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
