import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const CountUp = ({ end, duration = 2, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const updateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Add delay
            if (progress < delay * 1000) {
                animationFrame = requestAnimationFrame(updateCount);
                return;
            }

            const effectiveProgress = progress - (delay * 1000);
            const percentage = Math.min(effectiveProgress / (duration * 1000), 1);

            // Easing function (easeOutExpo)
            const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            const currentCount = Math.floor(easeOut * end);

            setCount(currentCount);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(updateCount);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration, delay]);

    return <span ref={ref}>{count}</span>;
};

const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-14 md:py-28 bg-paper relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    index={1}
                    eyebrow={t('about.subtitle')}
                    title={<>{t('about.title1')} {t('about.title2')}</>}
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Narrative (Left side in RTL, so Col span 7) */}
                    <div className="lg:col-span-7 space-y-5 md:space-y-6 text-center lg:text-start">
                        {/* Basmala as a standalone opening mark, translated per locale */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.55, ease: "easeOut" }}
                            className="text-gold-deep text-lg md:text-xl font-semibold tracking-wide"
                        >
                            {t('about.basmala')}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
                            className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed md:leading-loose font-medium mx-auto lg:mx-0 max-w-2xl"
                        >
                            {t('about.desc')}
                        </motion.p>
                    </div>

                    {/* The Conflict Statistic (Right side in RTL, Col span 5) */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.55 }}
                            className="bg-white/40 backdrop-blur-md border border-stone-200/50 rounded-lg p-8 sm:p-10 md:p-14 shadow-xl shadow-stone-200/20 text-center mx-auto max-w-md lg:max-w-none"
                        >
                            <div className="flex justify-center items-baseline sm:items-center gap-3 md:gap-4 mb-4 md:mb-6 leading-none" dir="ltr">
                                <span className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-coal drop-shadow-sm">
                                    <CountUp end={90} duration={1} />
                                </span>
                                <span className="text-3xl sm:text-4xl text-stone-300 font-light translate-y-[-10px] sm:translate-y-0">{t('about.vs')}</span>
                                <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-gold-deep drop-shadow-md">
                                    <CountUp end={2} duration={1} delay={0.5} />
                                </span>
                            </div>

                            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-stone-300 to-transparent mx-auto mb-4 md:mb-6"></div>

                            <p className="text-stone-500 font-semibold text-base sm:text-lg md:text-xl max-w-[250px] sm:max-w-xs mx-auto leading-relaxed">
                                {t('about.stats')}
                            </p>
                        </motion.div>

                        {/* Decorative Blueprint Lines - Hidden on smallest mobile */}
                        <div className="hidden sm:block absolute -z-10 -top-8 -right-8 w-24 md:w-32 h-24 md:h-32 border-t-2 border-r-2 border-ink-700/10 rounded-tr-3xl"></div>
                        <div className="hidden sm:block absolute -z-10 -bottom-8 -left-8 w-24 md:w-32 h-24 md:h-32 border-b-2 border-l-2 border-ink-700/10 rounded-bl-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
