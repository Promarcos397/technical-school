import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simple progress simulation
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.floor(Math.random() * 15) + 5;
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onLoadingComplete(), 600); // Wait a bit after 100%
                    return 100;
                }
                return next;
            });
        }, 300);

        // Fallback timeout in case loading takes too long
        const timeout = setTimeout(() => {
            setProgress(100);
            setTimeout(() => onLoadingComplete(), 600);
        }, 4000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onLoadingComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
                {/* Background decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sand-200/50 rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-stone-200/50 rounded-full blur-3xl mix-blend-multiply opacity-50 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                    {/* Logo Section */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mb-12 flex flex-col items-center"
                    >
                        <div className="w-24 h-24 mb-6 relative">
                            {/* Inner Circle outline */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-4 border-stone-200"
                            ></motion.div>

                            {/* Animated progress circle */}
                            <motion.svg
                                className="absolute inset-0 w-full h-full -rotate-90"
                                viewBox="0 0 100 100"
                            >
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    className="text-teal-900"
                                    strokeDasharray="289.026"
                                    initial={{ strokeDashoffset: 289.026 }}
                                    animate={{ strokeDashoffset: 289.026 - (289.026 * progress) / 100 }}
                                    transition={{ ease: "linear", duration: 0.3 }}
                                />
                            </motion.svg>

                            {/* Logo Image */}
                            <div className="absolute inset-[6px] bg-white rounded-full flex items-center justify-center p-4 shadow-sm border border-stone-100 overflow-hidden z-10">
                                <motion.img
                                    src="/images/logo.png"
                                    alt="School Logo"
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
                                />
                            </div>
                        </div>

                        {/* Title text */}
                        <div className="text-center overflow-hidden">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-2xl md:text-3xl font-black text-coal font-arabic tracking-tight"
                            >
                                مدرسة أديب الهاجري الفنية
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="text-sm md:text-base text-stone-500 font-medium mt-2 tracking-wide font-arabic"
                            >
                                نبني المستقبل بأيدٍ ماهرة
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Progress Percentage */}
                    <div className="h-6 overflow-hidden flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={progress}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-teal-950 font-bold font-mono text-lg"
                            >
                                {progress}%
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;
