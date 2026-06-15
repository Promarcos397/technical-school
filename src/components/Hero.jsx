import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const containerRef = useRef(null);
    const { t } = useTranslation();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Vertical Scroll Parallax
    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // 3D Mouse Tracking Setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Atmospheric Orbs (Opposite Pan)
    const orbX = useSpring(useTransform(mouseX, [-0.5, 0.5], [40, -40]), { damping: 40, stiffness: 50 });
    const orbY = useSpring(useTransform(mouseY, [-0.5, 0.5], [40, -40]), { damping: 40, stiffness: 50 });

    const handleMouseMove = (event) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate normalized mouse position from -0.5 to 0.5
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        // Return to center
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-paper pt-28 md:pt-32 pb-16 md:pb-24"
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10">

                {/* Left Side (RTL) - Typography & Story */}
                <motion.div
                    style={{ y: yText, opacity: opacityText }}
                    className="lg:w-1/2 flex flex-col justify-center text-center lg:text-start order-2 lg:order-1 items-center lg:items-start"
                >
                    {/* Kinematic Typography Container */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                            }
                        }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-teal-950 leading-[1.1] tracking-tight mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 md:gap-x-4">
                            <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } } }}>
                                {t('hero.school')}
                            </motion.span>
                            <br className="hidden lg:block" />
                            <motion.span variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } } }} className="text-emerald-custom font-bold">
                                {t('hero.technical')}
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                        className="mb-10 relative max-w-lg w-full flex flex-col items-center lg:items-start"
                    >
                        {/* Decorative quote line - hidden on mobile for central alignment, visible on md+ */}
                        <div className="hidden lg:block absolute right-0 top-2 bottom-2 w-1 bg-emerald-custom/30 rounded-full"></div>
                        <p className="text-lg md:text-xl lg:text-2xl text-coal/70 font-medium leading-relaxed lg:pr-6 text-center lg:text-start">
                            {t('hero.desc')}
                        </p>
                    </motion.div>

                    {/* Magnetic Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                        className="relative w-max mt-4"
                        onMouseMove={(e) => {
                            // Only apply magnetic effect on desktop (using a simple check)
                            if (window.innerWidth >= 1024) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left - rect.width / 2;
                                const y = e.clientY - rect.top - rect.height / 2;
                                e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = `translate(0px, 0px)`;
                        }}
                        style={{ transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)' }}
                    >
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group inline-flex items-center justify-center gap-3 bg-teal-950 text-paper px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all hover:bg-emerald-custom hover:shadow-[0_8px_30px_rgba(16,185,129,0.3)]"
                        >
                            <span className="translate-x-0 lg:group-hover:-translate-x-1 transition-transform">{t('hero.explore')}</span>
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Side (RTL) - The Gallery Arch */}
                <div className="lg:w-1/2 flex justify-center order-1 lg:order-2 w-full px-4 sm:px-8 lg:px-0">

                    {/* Base Arch Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
                        className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] aspect-[3/4]"
                    >
                        {/* The Arch Frame */}
                        <div
                            className="absolute inset-0 rounded-t-[250px] rounded-b-3xl overflow-hidden shadow-2xl shadow-teal-900/10 border-[6px] border-white/50 bg-stone-200"
                        >
                            <motion.div
                                style={{ y: yImage }}
                                className="w-full h-[120%]" // Extra height for parallax
                            >
                                <img
                                    src="/images/school-3d-render.jpeg"
                                    alt="المدرسة 3D"
                                    className="w-full h-full object-cover scale-105" // Slight scale to avoid edge clipping on tilt
                                />
                                {/* Soft inner shadow vignette */}
                                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] rounded-t-[250px] rounded-b-3xl"></div>
                            </motion.div>
                        </div>

                        {/* Atmospheric Orbs (Opposite Parallax panning) */}
                        <motion.div
                            style={{ x: orbX, y: orbY, transform: "translateZ(-80px)" }} // Pushed back to create deep depth
                            className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-custom/10 rounded-full blur-2xl pointer-events-none"
                        />
                        <motion.div
                            style={{ x: orbX, y: orbY, transform: "translateZ(-40px)" }}
                            className="absolute -top-12 -right-12 w-40 h-40 bg-teal-800/10 rounded-full blur-3xl pointer-events-none"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
