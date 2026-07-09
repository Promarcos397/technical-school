import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-paper flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Decorative noise/texture overlay handled globally by index.css, so just content here */}

            <motion.div
                className="relative z-10 flex flex-col items-center text-center max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="mb-8"
                >
                    <img
                        src="/images/charecter-404.png"
                        alt={t('notFound.imageAlt')}
                        className="w-64 h-auto drop-shadow-2xl"
                    />
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-extrabold text-coal mb-6">404</h1>

                <p className="text-xl md:text-2xl font-bold text-coal mb-10 leading-relaxed">
                    {t('notFound.desc')}
                </p>

                <Link to="/">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gold-sun text-coal px-8 py-4 rounded-md font-bold text-lg md:text-xl shadow-lg shadow-gold-sun/30 transition-shadow hover:shadow-2xl hover:shadow-gold-sun/50"
                    >
                        {t('notFound.backHome')}
                    </motion.button>
                </Link>
            </motion.div>

            {/* Decorative elements behind the character */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ink-800/5 rounded-full blur-3xl z-0 pointer-events-none" />
        </div>
    );
};

export default NotFound;
