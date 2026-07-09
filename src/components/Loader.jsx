import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Loader = () => {
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            >

                <div className="relative z-10 flex flex-col items-center">
                    {/* Logo & Spinner Section */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="mb-12 flex flex-col items-center"
                    >
                        <div className="w-24 h-24 mb-6 relative">
                            {/* Creative Orbital Spinner */}
                            <motion.svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 100 100"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 0.4, ease: "linear" }}
                            >
                                {/* Faint background track */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="text-coal/10"
                                />
                                {/* Rotating sweeping tail */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="text-coal"
                                    strokeDasharray="90 289.026"
                                />
                            </motion.svg>

                            {/* Logo Image - Static, no pulsing */}
                            <div className="absolute inset-[6px] bg-white rounded-full flex items-center justify-center p-4 shadow-sm border border-stone-100 overflow-hidden z-10">
                                <motion.img
                                    src="/images/logo.png"
                                    alt={t('a11y.logoAlt')}
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.15, duration: 0.45, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        {/* Title text */}
                        <div className="text-center overflow-hidden">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25, duration: 0.45 }}
                                className="text-2xl md:text-3xl font-extrabold text-coal font-arabic tracking-tight"
                            >
                                {t('loader.schoolName')}
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.25, duration: 0.45 }}
                                className="text-sm md:text-base text-stone-500 font-medium mt-2 tracking-wide font-arabic"
                            >
                                {t('loader.slogan')}
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;