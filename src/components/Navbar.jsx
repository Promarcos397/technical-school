import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useVelocity, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, BookOpen, GraduationCap, Newspaper, Globe } from 'lucide-react';

// Generates a displacement map for a "Pill" shape (rounded rectangle)
const generatePillMap = (width, height) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(width, height);
  
  const r = height / 2;
  const cx1 = r; // Left focal point
  const cx2 = width - r; // Right focal point
  const cy = r; // Vertical center
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let dx = 0;
      let dy = y - cy;
      let dist = 0;
      
      // Calculate distance to the medial line (the straight spine of the pill)
      if (x < cx1) {
        dx = x - cx1;
        dist = Math.sqrt(dx * dx + dy * dy);
      } else if (x > cx2) {
        dx = x - cx2;
        dist = Math.sqrt(dx * dx + dy * dy);
      } else {
        dx = 0;
        dist = Math.abs(dy);
      }
      
      let rCol = 128;
      let gCol = 128;
      
      if (dist < r) {
        const normalizedDist = dist / r;
        
        // Steeper edges to simulate high surface tension (water drop look)
        let magnitude = 0;
        const edgeStart = 0.4; 

        if (normalizedDist > edgeStart) {
          const t = (normalizedDist - edgeStart) / (1 - edgeStart);
          magnitude = Math.pow(t, 3) * 1.8; 
        } else {
          magnitude = -0.05 * Math.sin(normalizedDist * Math.PI);
        }

        magnitude = Math.max(-1.2, Math.min(1.2, magnitude));

        const dirX = dist === 0 ? 0 : dx / dist;
        const dirY = dist === 0 ? 0 : dy / dist;

        const dispX = dirX * magnitude;
        const dispY = dirY * magnitude;

        rCol = Math.min(255, Math.max(0, 128 + dispX * 100));
        gCol = Math.min(255, Math.max(0, 128 + dispY * 100));
      }

      const index = (y * width + x) * 4;
      imgData.data[index] = rCol;
      imgData.data[index + 1] = gCol;
      imgData.data[index + 2] = 128;
      imgData.data[index + 3] = 255;
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
  return canvas.toDataURL('image/png');
};

const Navbar = () => {
    const location = useLocation();
    const { i18n, t } = useTranslation();

    // --- LIQUID PILL STATE & PHYSICS ---
    const [hoverIndex, setHoverIndex] = useState(null);
    const [pillState, setPillState] = useState({ opacity: 0, width: 0, height: 48, mapUrl: '' });
    const navRefs = useRef([]);
    const containerRef = useRef(null);
    const mapCache = useRef(new Map());

    const activeX = useMotionValue(0);
    const activeWidth = useMotionValue(0);
    
    // Sloshy spring for position
    const springX = useSpring(activeX, { stiffness: 150, damping: 12, mass: 1.2 });
    // Snappier spring for width
    const springWidth = useSpring(activeWidth, { stiffness: 200, damping: 16, mass: 0.8 });
    
    const xVel = useVelocity(springX);
    // Symbiote Effect: squash/stretch based on speed
    const scaleY = useTransform(xVel, [-1500, 0, 1500], [0.35, 1, 0.35], { clamp: true });
    const scaleX = useTransform(xVel, [-1500, 0, 1500], [1.3, 1, 1.3], { clamp: true });

    const navLinks = [
        { id: '/', label: t('nav.home'), href: '/' },
        { id: '/programs', label: t('nav.programs'), href: '/programs' },
        { id: '/admissions', label: t('nav.admissions'), href: '/admissions' },
        { id: '/news', label: t('nav.news'), href: '/news' },
    ];

    const activeIndex = navLinks.findIndex(link => location.pathname === link.href);
    const currentIndex = hoverIndex !== null ? hoverIndex : (activeIndex >= 0 ? activeIndex : null);

    // Update Pill Position
    useEffect(() => {
        const updatePill = () => {
            if (currentIndex === null || !navRefs.current[currentIndex] || !containerRef.current) {
                setPillState(s => ({ ...s, opacity: 0 }));
                return;
            }

            const el = navRefs.current[currentIndex];
            const container = containerRef.current;
            const elRect = el.getBoundingClientRect();
            const contRect = container.getBoundingClientRect();
            
            const paddingX = 12;
            const paddingY = 8;
            
            const pillWidth = elRect.width + paddingX * 2;
            const pillHeight = elRect.height + paddingY * 2;
            // Add 2px to X position to visually compensate for the 'tracking-widest' letter spacing
            const xPos = (elRect.left - contRect.left) - paddingX;

            const cacheKey = `${Math.round(pillWidth)}x${Math.round(pillHeight)}`;
            let url = mapCache.current.get(cacheKey);
            
            if (!url) {
                url = generatePillMap(pillWidth, pillHeight);
                mapCache.current.set(cacheKey, url);
            }

            activeX.set(xPos);
            activeWidth.set(pillWidth);

            setPillState({
                opacity: 1,
                width: pillWidth,
                height: pillHeight,
                mapUrl: url
            });
        };

        updatePill();
        window.addEventListener('resize', updatePill);
        return () => window.removeEventListener('resize', updatePill);
    }, [currentIndex, location.pathname, i18n.language, activeX, activeWidth]);

    return (
        <header className="fixed top-0 w-full z-50 pt-4 md:pt-6 px-4 sm:px-6 lg:px-8 pointer-events-none">
            
            {/* SVG Filter Definition for the Liquid Pill */}
            <svg className="absolute w-0 h-0 pointer-events-none">
                <defs>
                    <filter id="liquid-pill" colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
                        {pillState.mapUrl && (
                            <feImage
                                href={pillState.mapUrl}
                                result="displacement_map"
                                width={pillState.width || 100}
                                height={pillState.height || 48}
                                preserveAspectRatio="none"
                            />
                        )}
                        <feDisplacementMap 
                            in="SourceGraphic" 
                            in2="displacement_map" 
                            scale={pillState.height ? pillState.height * 1.5 : 50} 
                            xChannelSelector="R" 
                            yChannelSelector="G" 
                            result="refracted"
                        />
                        <feGaussianBlur in="refracted" stdDeviation="0.5" result="blurred_refraction" />
                        <feMerge>
                            <feMergeNode in="blurred_refraction" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            <div className="max-w-7xl mx-auto flex justify-between items-center relative">

                {/* Independent Floating Logo Section (Right side in RTL) */}
                <Link to="/" className="pointer-events-auto flex items-center gap-3 lg:gap-4 group cursor-pointer bg-white/10 backdrop-blur-[40px] backdrop-brightness-75 backdrop-saturate-150 px-6 py-4 rounded-3xl border-[0.5px] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src="/images/logo.svg"
                            alt={t('a11y.logoAlt')}
                            className="h-8 lg:h-10 w-auto transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-teal-950 font-black text-sm lg:text-lg tracking-tight leading-none mb-0.5 whitespace-nowrap">
                            {t('hero.school')}
                        </span>
                        <span className="text-emerald-custom font-bold text-[10px] lg:text-xs tracking-widest uppercase">
                            {t('hero.technical')}
                        </span>
                    </div>
                </Link>


                {/* Floating Glass Pill Navigation (Desktop Center/Left) */}
                <nav 
                    ref={containerRef}
                    onMouseLeave={() => setHoverIndex(null)}
                    className="pointer-events-auto hidden lg:flex relative items-center gap-2 bg-white/10 backdrop-blur-[40px] backdrop-brightness-75 backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-4 rounded-full mt-1"
                >
                    <div className="relative z-10 flex items-center gap-1 px-4">
                        {navLinks.map((link, i) => {
                            const isActive = location.pathname === link.href;
                            const isHovered = hoverIndex === i;
                            return (
                                <Link
                                    key={link.id}
                                    ref={el => navRefs.current[i] = el}
                                    to={link.href}
                                    onMouseEnter={() => setHoverIndex(i)}
                                    className="relative flex items-center justify-center transition-colors px-6 py-3 font-bold text-lg tracking-widest rounded-full cursor-pointer z-10"
                                >
                                    <span className={`relative z-10 transition-colors duration-300 ${isActive || isHovered ? 'text-teal-950' : 'text-white/70 hover:text-teal-950'}`}>
                                        {link.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* LIQUID GLASS SYMBIOTE PILL */}
                    <AnimatePresence>
                        {pillState.opacity > 0 && (
                            <motion.div
                                className="absolute top-[50%] left-0 pointer-events-none z-20"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                style={{
                                    // Shifted up by 2px for better visual vertical alignment
                                    y: "calc(-50%)",
                                    x: springX,
                                    width: springWidth,
                                    scaleY: scaleY,
                                    scaleX: scaleX,
                                    height: pillState.height,
                                    // Refracts everything underneath it (including the z-10 text) without blurring it out
                                    backdropFilter: `url(#liquid-pill)`,
                                    WebkitBackdropFilter: `url(#liquid-pill)`,
                                    borderRadius: '9999px',
                                    clipPath: 'inset(0px round 9999px)',
                                    transformOrigin: 'center center'
                                }}
                            >
                                {/* Glossy edges and inner glow to make it pop like a water droplet */}
                                <div className="absolute inset-0 rounded-full border-[0.5px] border-white/20 mix-blend-overlay" />
                                <div className="absolute inset-0 rounded-full opacity-40 shadow-[inset_0_3px_6px_rgba(255,255,255,0.8),inset_0_-3px_8px_rgba(0,0,0,0.1)]" />
                    <div className="absolute inset-x-2 top-0 h-[25%] rounded-full bg-gradient-to-b from-white/20 to-transparent blur-[0.5px]" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Language Toggle Button (Responsive Component) */}
                <div className="pointer-events-auto flex items-center mt-1">
                    <button 
                        onClick={() => {
                            const current = i18n.language || 'ar';
                            const next = current.startsWith('ar') ? 'en' : (current.startsWith('en') ? 'fr' : 'ar');
                            i18n.changeLanguage(next);
                        }}
                        className="flex flex-col items-center justify-center gap-1 bg-white/10 backdrop-blur-[40px] backdrop-brightness-75 backdrop-saturate-150 border-[0.5px] border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] text-emerald-custom font-black w-[64px] h-[64px] lg:w-[72px] lg:h-[72px] rounded-full hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 transition-all tracking-widest text-[10px] lg:text-xs ms-2 group"
                    >
                        <Globe size={18} strokeWidth={2.5} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span>{i18n.language?.startsWith('ar') ? 'EN' : (i18n.language?.startsWith('en') ? 'FR' : 'عربي')}</span>
                    </button>
                </div>

            </div>

            {/* Mobile Bottom Tab Navigation */}
            {/* Mobile Bottom Tab Navigation */}
            <nav className="lg:hidden fixed bottom-4 w-[82%] max-w-[400px] left-1/2 -translate-x-1/2 z-50 pointer-events-auto" dir={i18n.language?.startsWith('ar') ? 'rtl' : 'ltr'}>
                {/* The Glass Bubble Background — same properties as desktop pill */}
                <div className="absolute inset-0 z-0 pointer-events-none rounded-full overflow-hidden bg-white/10 backdrop-blur-[7px] backdrop-brightness-75 backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
                    <div className="absolute inset-0 rounded-full border-[0.5px] border-white/20 mix-blend-overlay" />
                    <div className="absolute inset-0 rounded-full opacity-40 shadow-[inset_0_3px_6px_rgba(255,255,255,0.8),inset_0_-3px_8px_rgba(0,0,0,0.1)]" />
                    <div className="absolute inset-x-2 top-0 h-[25%] rounded-full bg-gradient-to-b from-white/20 to-transparent blur-[0.5px]" />
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
                                className={`relative flex flex-col items-center justify-center flex-1 py-2 transition-all z-10 ${isActive ? 'text-teal-950' : 'text-white/70 hover:text-teal-950'}`}
                            >
                                {isActive && (
                                    <motion.div 
                                        layoutId="mobileActivePill" 
                                        className="absolute inset-0 bg-white/20 rounded-full z-[-1] overflow-hidden" 
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    >
                                        <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]" />
                                        <div className="absolute top-0 inset-x-2 h-1/4 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-[0.5px]" />
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
