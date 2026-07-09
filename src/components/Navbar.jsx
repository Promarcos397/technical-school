import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, BookOpen, GraduationCap, Newspaper, Globe } from 'lucide-react';

// Editorial register: one flat header bar, active route marked by a thin
// sliding underline. No glass, no floating bubbles, no physics.
const Navbar = () => {
    const location = useLocation();
    const { i18n, t } = useTranslation();

    const navLinks = [
        { id: '/', label: t('nav.home'), href: '/' },
        { id: '/programs', label: t('nav.programs'), href: '/programs' },
        { id: '/admissions', label: t('nav.admissions'), href: '/admissions' },
        { id: '/news', label: t('nav.news'), href: '/news' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-paper/95 backdrop-blur-sm border-b border-stone-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 lg:h-16 flex items-center justify-between gap-4">

                {/* Brand */}
                <Link to="/" className="flex items-center gap-3 shrink-0">
                    <img
                        src="/images/logo.svg"
                        alt={t('a11y.logoAlt')}
                        className="h-8 lg:h-9 w-auto"
                    />
                    <div className="flex flex-col">
                        <span className="text-teal-950 font-bold text-sm lg:text-base tracking-tight leading-none whitespace-nowrap">
                            {t('hero.school')}
                        </span>
                        <span className="text-stone-500 font-semibold text-[9px] lg:text-[10px] tracking-widest uppercase">
                            {t('hero.technical')}
                        </span>
                    </div>
                </Link>

                {/* Desktop links */}
                <nav className="hidden lg:flex items-center h-full">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.id}
                                to={link.href}
                                className={`relative flex items-center h-full px-5 font-semibold text-sm transition-colors ${isActive ? 'text-teal-950' : 'text-stone-500 hover:text-teal-950'}`}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="navUnderline"
                                        className="absolute bottom-0 inset-x-3 h-[2px] bg-emerald-custom"
                                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Language switch — text button, same height as the bar content */}
                <button
                    onClick={() => {
                        const current = i18n.language || 'ar';
                        const next = current.startsWith('ar') ? 'en' : (current.startsWith('en') ? 'fr' : 'ar');
                        i18n.changeLanguage(next);
                    }}
                    className="flex items-center gap-1.5 text-stone-600 hover:text-teal-950 font-semibold text-xs lg:text-sm border border-stone-300 hover:border-stone-400 rounded-md px-3 py-1.5 transition-colors shrink-0"
                >
                    <Globe size={14} strokeWidth={2.25} />
                    <span>{i18n.language?.startsWith('ar') ? 'EN' : (i18n.language?.startsWith('en') ? 'FR' : 'عربي')}</span>
                </button>
            </div>

            {/* Mobile bottom tabs — flat, solid, thin top rule */}
            <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-paper/95 backdrop-blur-sm border-t border-stone-200" dir={i18n.language?.startsWith('ar') ? 'rtl' : 'ltr'}>
                <div className="flex items-stretch justify-between max-w-md mx-auto">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        let IconComponent = Home;
                        if (link.id === '/programs') IconComponent = BookOpen;
                        if (link.id === '/admissions') IconComponent = GraduationCap;
                        if (link.id === '/news') IconComponent = Newspaper;

                        return (
                            <Link
                                key={link.id}
                                to={link.href}
                                className={`relative flex flex-col items-center justify-center flex-1 pt-2.5 pb-2 transition-colors ${isActive ? 'text-teal-950' : 'text-stone-400 hover:text-teal-950'}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="mobileNavMark"
                                        className="absolute top-0 inset-x-4 h-[2px] bg-emerald-custom"
                                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                    />
                                )}
                                <IconComponent size={19} strokeWidth={isActive ? 2.5 : 2} />
                                <span className="text-[9px] font-semibold mt-0.5 tracking-wide">{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
