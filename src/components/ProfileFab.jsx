import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileDown } from 'lucide-react';

// Floating quick-access button for the school profile PDF.
// Fully self-contained: to remove it entirely, delete this file and the
// single <ProfileFab /> line (+ import) in App.jsx.
// Restraint rules: only appears after scrolling past the hero, no pulse,
// charcoal-glass styling matching the navbar family.
const ProfileFab = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    href="/files/school-profile.pdf"
                    download="Adeeb-Al-Hajri-Technical-School-Profile.pdf"
                    aria-label={t('footer.downloadPdf', 'تنزيل الملف (PDF)')}
                    className="group fixed z-40 right-4 bottom-24 lg:right-8 lg:bottom-8 flex items-center gap-0 rounded-full bg-ink-800/80 backdrop-blur-xl border border-white/10 text-gold-sun shadow-lg shadow-black/10 hover:border-white/25 transition-colors"
                >
                    <span className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shrink-0">
                        <FileDown size={20} strokeWidth={2.25} />
                    </span>
                    {/* Label slides out on hover (desktop only) */}
                    <span className="hidden lg:block max-w-0 overflow-hidden whitespace-nowrap text-paper text-sm font-bold group-hover:max-w-[220px] group-hover:pe-5 transition-all duration-300">
                        {t('footer.downloadPdf', 'تنزيل الملف (PDF)')}
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default ProfileFab;
