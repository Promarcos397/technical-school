import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const News = () => {
    const { t } = useTranslation();

    // Ensure page starts at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="text-start text-center md:text-start"
                >
                    <h1 className="text-4xl md:text-7xl font-extrabold text-coal mb-6">{t('news.title')}</h1>
                    <p className="text-xl text-stone-600 max-w-2xl font-medium leading-relaxed ltr:mx-auto ltr:md:ml-0 rtl:mx-auto rtl:md:mr-0">
                        {t('news.description')}
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-start">
                    {/* News Article 1 - Funding Call */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        className="bg-white rounded-lg p-8 border border-stone-200/50 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-gold-sun/10 text-gold-deep font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">{t('news.article1Tag')}</span>
                            <span className="text-stone-400 text-sm">{t('news.article1Status')}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-coal mb-4 leading-tight">{t('news.article1Title')}</h2>
                        <p className="text-stone-600 leading-relaxed font-medium mb-6 text-lg">
                            {t('news.article1P1')}
                            <br /><br />
                            {t('news.article1P2')}
                        </p>
                    </motion.article>

                    {/* News Article 2 - Village Context */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.25 }}
                        className="bg-white rounded-lg p-8 border border-stone-200/50 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-gold-sun/10 text-gold-deep font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">{t('news.article2Tag')}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-coal mb-4 leading-tight">{t('news.article2Title')}</h2>
                        <p className="text-stone-600 leading-relaxed font-medium text-lg">
                            {t('news.article2P1')}
                            <br /><br />
                            {t('news.article2P2')}
                        </p>
                    </motion.article>

                    {/* "More news coming" Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="md:col-span-2 mt-8 flex flex-col items-center justify-center text-center p-12 bg-white/50 backdrop-blur-sm border border-stone-200/50 rounded-lg"
                    >
                        <h3 className="text-2xl font-bold text-coal mb-3">{t('news.moreNewsTitle')}</h3>
                        <p className="text-stone-500 max-w-sm">
                            {t('news.moreNewsDesc')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default News;
