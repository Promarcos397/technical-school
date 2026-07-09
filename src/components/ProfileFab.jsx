import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileDown } from 'lucide-react';

// Floating quick-access button for the school profile PDF.
// Fully self-contained: to remove it entirely, delete this file and the
// single <ProfileFab /> line (+ import) in App.jsx.
// Restraint rules: appears only after scrolling past the hero; the label
// auto-expands ONCE per session as a gentle download reminder, then
// collapses (hover re-expands it on desktop). No pulse, no bounce.
//
// Mobile alignment: the bottom tab bar is w-[82%] max-w-[400px] centered,
// so its edge sits at max(9%, (100%-400px)/2) from the viewport edge —
// the FAB shares that offset and floats directly above the bar.
const ProfileFab = () => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [hint, setHint] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // One-time reminder: expand the label for a few seconds on first appearance
    useEffect(() => {
        if (!visible || sessionStorage.getItem('pdfFabHintShown')) return;
        sessionStorage.setItem('pdfFabHintShown', '1');
        setHint(true);
        const timer = setTimeout(() => setHint(false), 3500);
        return () => clearTimeout(timer);
    }, [visible]);

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
                    className="group fixed z-40 right-[max(9%,calc((100%-400px)/2))] bottom-[100px] lg:right-8 lg:bottom-8 flex items-center rounded-full bg-ink-800/80 backdrop-blur-xl border border-white/10 text-gold-sun shadow-lg shadow-black/10 hover:border-white/25 transition-colors"
                >
                    <span className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center shrink-0">
                        <FileDown size={20} strokeWidth={2.25} />
                    </span>
                    {/* Label: expanded during the one-time hint, and on desktop hover */}
                    <span className={`overflow-hidden whitespace-nowrap text-paper text-sm font-bold transition-all duration-300 ${hint ? 'max-w-[220px] pe-5' : 'max-w-0 pe-0 lg:group-hover:max-w-[220px] lg:group-hover:pe-5'}`}>
                        {t('footer.downloadPdf', 'تنزيل الملف (PDF)')}
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default ProfileFab;
