import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { id: '/', label: 'الرئيسية', href: '/' },
        { id: '/programs', label: 'البرامج الأكاديمية', href: '/programs' },
        { id: '/admissions', label: 'القبول والتسجيل', href: '/admissions' },
        { id: '/news', label: 'الأخبار', href: '/news' },
    ];

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: { duration: 0.2 }
        }
    };

    const mobileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <header className="fixed top-0 w-full z-50 pt-4 md:pt-6 px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-between items-start relative">

                {/* Independent Floating Logo Section (Right side in RTL) */}
                <Link to="/" className="pointer-events-auto flex items-center gap-3 md:gap-4 group cursor-pointer bg-paper/70 backdrop-blur-xl md:bg-paper/50 md:backdrop-blur-md px-3 md:px-4 py-2 rounded-2xl border border-stone-200/50 shadow-sm">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/images/logo.svg"
                            alt="شعار المدرسة"
                            className="h-8 md:h-10 w-auto transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-teal-950 font-black text-sm md:text-lg tracking-tight leading-none mb-0.5 whitespace-nowrap">
                            مدرسة أديب الهاجري
                        </span>
                        <span className="text-emerald-custom font-bold text-[10px] md:text-xs tracking-widest uppercase">
                            الفنية
                        </span>
                    </div>
                </Link>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="pointer-events-auto md:hidden bg-paper/70 backdrop-blur-xl border border-stone-200/50 shadow-sm p-2 rounded-xl text-teal-950 flex flex-col justify-center items-center gap-1.5 w-10 h-10 mt-1"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-5 h-[2px] bg-current block transition-transform"
                    ></motion.span>
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="w-5 h-[2px] bg-current block transition-opacity"
                    ></motion.span>
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-5 h-[2px] bg-current block transition-transform"
                    ></motion.span>
                </button>

                {/* Floating Glass Pill Navigation (Desktop Center/Left) */}
                <nav className="pointer-events-auto hidden md:flex items-center gap-2 bg-paper/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-3 py-2 rounded-full mt-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.id}
                                to={link.href}
                                className="relative text-coal hover:text-teal-950 transition-colors px-6 py-2.5 font-bold text-sm tracking-widest rounded-full"
                            >
                                <span className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-teal-950' : ''}`}>{link.label}</span>
                                {/* Pill Active Background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="navPill"
                                        className="absolute inset-0 bg-white shadow-sm rounded-full z-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="pointer-events-auto fixed inset-0 top-[72px] bg-paper/95 backdrop-blur-2xl px-4 py-8 z-40 md:hidden flex flex-col gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-2xl font-black border-b border-stone-200/50 pb-4 ${location.pathname === link.href ? 'text-emerald-custom' : 'text-teal-950'}`}
                            >
                                <motion.div variants={mobileItemVariants}>
                                    {link.label}
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
