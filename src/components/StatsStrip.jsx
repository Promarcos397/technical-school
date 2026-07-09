import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CountUp = ({ end, duration = 1.2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        let startTime;
        let frame;
        const update = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const pct = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOut = pct === 1 ? 1 : 1 - Math.pow(2, -10 * pct);
            setCount(Math.floor(easeOut * end));
            if (pct < 1) frame = requestAnimationFrame(update);
            else setCount(end);
        };
        frame = requestAnimationFrame(update);
        return () => cancelAnimationFrame(frame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}</span>;
};

const StatsStrip = () => {
    const { t } = useTranslation();

    const stats = [
        { value: <>{t('stats.areaValue')}</>, label: t('stats.areaLabel') },
        { value: <CountUp end={8} />, label: t('stats.departmentsLabel') },
        { value: <CountUp end={200} />, label: t('stats.boardingLabel') },
        { value: <CountUp end={4} />, label: t('stats.localitiesLabel') },
    ];

    return (
        <section className="relative px-4 sm:px-6 lg:px-8">
            {/* Editorial: no card chrome — thin rules and whitespace do the work */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="max-w-6xl mx-auto border-y border-stone-200 py-8 md:py-10"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center md:divide-x md:divide-stone-200 md:rtl:divide-x-reverse">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5 px-2">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-coal" dir="ltr">
                                {s.value}
                            </span>
                            <span className="text-stone-500 font-medium text-xs sm:text-sm tracking-wide max-w-[10rem] leading-snug">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default StatsStrip;
