import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

// Editorial register: full-bleed documentary image, quiet type hierarchy,
// a grounding location line, and two purposeful CTAs. Single parallax only.
const Hero = () => {
    const containerRef = useRef(null);
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="min-h-screen relative overflow-hidden flex items-end bg-teal-950"
        >
            {/* Full-bleed image, sharp edges */}
            <motion.div style={{ y: yImage }} className="absolute inset-0 scale-105">
                <img
                    src="/images/school-3d-render.jpeg"
                    alt={t('a11y.hero3dAlt')}
                    className="w-full h-full object-cover object-center"
                />
                {/* Legibility gradient anchored to the text side */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/95 via-teal-950/45 to-teal-950/15" />
            </motion.div>

            <motion.div
                style={{ opacity: opacityText }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-28 pt-36"
            >
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
                    }}
                    className="max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-start"
                >
                    {/* Eyebrow: where this is */}
                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                        className="flex items-center gap-2 text-emerald-300 font-semibold text-xs md:text-sm tracking-widest uppercase mb-5"
                    >
                        <MapPin size={14} strokeWidth={2.25} />
                        {t('hero.location')}
                    </motion.p>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight mb-5"
                    >
                        {t('hero.school')}{' '}
                        <span className="text-emerald-400">{t('hero.technical')}</span>
                    </motion.h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                        className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-2xl mb-9"
                    >
                        {t('hero.desc')}
                    </motion.p>

                    {/* Two CTAs: donors/partners first, students second */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
                    >
                        <button
                            onClick={() => document.getElementById('support')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center justify-center bg-emerald-custom text-white px-6 py-3 rounded-md font-bold text-sm md:text-base transition-colors hover:bg-emerald-600"
                        >
                            {t('hero.ctaSupport')}
                        </button>
                        <Link
                            to="/programs"
                            className="inline-flex items-center justify-center border border-white/40 text-white px-6 py-3 rounded-md font-bold text-sm md:text-base transition-colors hover:bg-white/10 hover:border-white/60"
                        >
                            {t('hero.ctaPrograms')}
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
