import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, BookOpen, GraduationCap, Newspaper, Globe } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const { i18n, t } = useTranslation();
    const [hoverIndex, setHoverIndex] = useState(null);

    const navLinks = [
        { id: '/', label: t('nav.home'), href: '/' },
        { id: '/programs', label: t('nav.programs'), href: '/programs' },
        { id: '/admissions', label: t('nav.admissions'), href: '/admissions' },
        { id: '/news', label: t('nav.news'), href: '/news' },
    ];

    const activeIndex = navLinks.findIndex(link => location.pathname === link.href);
    // Hover takes precedence; otherwise highlight the active route
    const currentIndex = hoverIndex !== null ? hoverIndex : (activeIndex >= 0 ? activeIndex : null);

    return (
        <header className="fixed top-0 w-full z-50 pt-4 md:pt-6 px-4 sm:px-6 lg:px-8 pointer-events-none">

            <div className="max-w-7xl mx-auto flex justify-between items-center relative">

                {/* Independent Floating Logo Section (Right side in RTL) */}
                <Link to="/" className="pointer-events-auto flex items-center gap-3 group cursor-pointer bg-white/10 backdrop-blur-[40px] backdrop-brightness-75 backdrop-saturate-150 px-5 h-12 lg:h-14 rounded-full border-[0.5px] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/images/logo.svg"
                            alt={t('a11y.logoAlt')}
                            className="h-7 lg:h-8 w-auto"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-coal font-extrabold text-sm lg:text-base tracking-tight leading-none mb-0.5 whitespace-nowrap">
                            {t('hero.school')}
                        </span>
                        <span className="text-gold-sun font-bold text-[9px] lg:text-[10px] tracking-widest uppercase">
                            {t('hero.technical')}
                        </span>
                    </div>
                </Link>


                {/* Glass Pill Navigation (Desktop) — calm sliding indicator, no liquid physics */}
                <nav
                    onMouseLeave={() => setHoverIndex(null)}
                    className="pointer-events-auto hidden lg:flex relative items-center h-12 lg:h-14 px-2 bg-white/10 backdrop-blur-[40px] backdrop-brightness-75 backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full"
                >
                    <div className="relative z-10 flex items-center gap-1 px-2">
                        {navLinks.map((link, i) => {
                            const isCurrent = currentIndex === i;
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.id}
                                    to={link.href}
                                    onMouseEnter={() => setHoverIndex(i)}
                                    className="relative flex items-center justify-center px-5 py-2 font-bold text-base tracking-widest rounded-full cursor-pointer"
                                >
                                    {isCurrent && (
                                        <motion.div
                                            layoutId="desktopActivePill"
                                            className="absolute inset-0 bg-white/25 rounded-full"
                                            transition={{ type: "spring", stiffness: 400, damping: 34 }}
                                        >
                                            <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />
                                        </motion.div>
                                    )}
                                    <span className={`relative z-10 transition-colors duration-300 ${isActive || isCurrent ? 'text-coal' : 'text-white/70'}`}>
                                        {link.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Language Toggle Button (Responsive Component) */}
                <div className="pointer-events-auto flex items-center">
                    <button
                        onClick={() => {
                            const current = i18n.language || 'ar';
                            const next = current.startsWith('ar') ? 'en' : (current.startsWith('en') ? 'fr' : 'ar');
                            i18n.changeLanguage(next);
                        }}
                        className="flex flex-col items-center justify-center gap-0.5 bg-white/10 backdrop-blur-[40px] backdrop-brightness-75 backdrop-saturate-150 border-[0.5px] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] text-gold-sun font-extrabold w-12 h-12 lg:w-14 lg:h-14 rounded-full hover:bg-white/20 transition-colors tracking-widest text-[9px] lg:text-[10px] ms-2 group"
                    >
                        <Globe size={15} strokeWidth={2.5} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span>{i18n.language?.startsWith('ar') ? 'EN' : (i18n.language?.startsWith('en') ? 'FR' : 'عربي')}</span>
                    </button>
                </div>

            </div>

            {/* Mobile Bottom Tab Navigation */}
            <nav className="lg:hidden fixed bottom-4 w-[82%] max-w-[400px] left-1/2 -translate-x-1/2 z-50 pointer-events-auto" dir={i18n.language?.startsWith('ar') ? 'rtl' : 'ltr'}>
                {/* The Glass Bubble Background — same properties as desktop pill */}
                <div className="absolute inset-0 z-0 pointer-events-none rounded-full overflow-hidden bg-white/10 backdrop-blur-[7px] backdrop-brightness-75 backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
                    <div className="absolute inset-0 rounded-full border-[0.5px] border-white/20 mix-blend-overlay" />
                    <div className="absolute inset-0 rounded-full opacity-40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)]" />
                </div>

                <div className="relative z-10 flex items-center justify-between p-1.5">
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
                                className={`relative flex flex-col items-center justify-center flex-1 py-2 transition-all z-10 ${isActive ? 'text-coal' : 'text-white/70 hover:text-coal'}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="mobileActivePill"
                                        className="absolute inset-0 bg-white/20 rounded-full z-[-1] overflow-hidden"
                                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                                    >
                                        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />
                                    </motion.div>
                                )}
                                <IconComponent size={20} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
                                <span className="text-[9px] font-bold mt-0.5 tracking-wider relative z-10">{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
