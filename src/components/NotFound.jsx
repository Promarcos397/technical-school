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
                {/* Typographic 404 in the site register: hairline rules + one gold mark */}
                <div className="flex items-center gap-4 w-full max-w-md mb-8">
                    <span className="h-px flex-1 bg-stone-200" />
                    <span className="h-2 w-2 rotate-45 bg-gold-sun" />
                    <span className="h-px flex-1 bg-stone-200" />
                </div>

                <h1 className="text-7xl md:text-8xl font-extrabold text-coal mb-6 tracking-tight" dir="ltr">404</h1>

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

        </div>
    );
};

export default NotFound;
