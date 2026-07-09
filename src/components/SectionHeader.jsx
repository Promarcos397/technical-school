import React from 'react';
import { motion } from 'framer-motion';

// Editorial section header: index number, small-caps eyebrow, hairline rule,
// then the title. Start-aligned; gives every section the same structural rhythm.
const SectionHeader = ({ index, eyebrow, title, subtitle, dark = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mb-12 md:mb-16 text-start"
    >
        <div className="flex items-center gap-4 mb-4">
            <span className={`text-xs font-bold tracking-widest ${dark ? 'text-gold-sun' : 'text-gold-deep'}`} dir="ltr">
                {String(index).padStart(2, '0')}
            </span>
            {eyebrow && (
                <span className={`text-xs md:text-sm font-bold tracking-widest uppercase ${dark ? 'text-stone-300' : 'text-stone-500'}`}>
                    {eyebrow}
                </span>
            )}
            <span className={`h-px flex-1 ${dark ? 'bg-white/10' : 'bg-stone-200'}`} />
        </div>
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight ${dark ? 'text-paper' : 'text-coal'}`}>
            {title}
        </h2>
        {subtitle && (
            <p className={`mt-4 text-base md:text-lg font-medium max-w-2xl ${dark ? 'text-stone-300/90' : 'text-stone-500'}`}>
                {subtitle}
            </p>
        )}
    </motion.div>
);

export default SectionHeader;
