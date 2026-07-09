import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Car, PenTool, Snowflake, Home, Waves, Monitor, Wheat } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

const Programs = () => {
    const { t } = useTranslation();

    const programsData = [
        {
            id: 'electricity',
            title: t('programs.electricityTitle'),
            description: t('programs.electricityDesc'),
            icon: Settings,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/electrical-bg.png'
        },
        {
            id: 'auto-mechanics',
            title: t('programs.autoMechanicsTitle'),
            description: t('programs.autoMechanicsDesc'),
            icon: Car,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/auto-bg.png'
        },
        {
            id: 'production-mechanics',
            title: t('programs.productionMechanicsTitle'),
            description: t('programs.productionMechanicsDesc'),
            icon: PenTool,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/production-bg.jpg'
        },
        {
            id: 'hvac',
            title: t('programs.hvacTitle'),
            description: t('programs.hvacDesc'),
            icon: Snowflake,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/hvac-bg.png'
        },
        {
            id: 'architecture',
            title: t('programs.architectureTitle'),
            description: t('programs.architectureDesc'),
            icon: Home,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/architecture-bg.png'
        },
        {
            id: 'plumbing',
            title: t('programs.plumbingTitle'),
            description: t('programs.plumbingDesc'),
            icon: Waves,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/sanitary-bg.png'
        },
        {
            id: 'computer',
            title: t('programs.computerTitle'),
            description: t('programs.computerDesc'),
            icon: Monitor,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/computer-bg.png'
        },
        {
            id: 'food-processing',
            title: t('programs.foodProcessingTitle'),
            description: t('programs.foodProcessingDesc'),
            icon: Wheat,
            color: 'bg-ink-800',
            textColor: 'text-ink-800',
            bgImage: '/images/food-bg.png'
        }
    ];

    return (
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-paper overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="mb-10 md:mb-20 text-center md:text-start"
                >
                    <h1 className="text-4xl md:text-7xl font-extrabold text-coal mb-6">{t('programs.title')}</h1>
                    <p className="text-xl text-stone-600 max-w-3xl font-medium leading-relaxed ltr:mx-auto ltr:md:ml-0 rtl:mx-auto rtl:md:mr-0">
                        {t('programs.description')}
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
                >
                    {programsData.map((program) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={program.id}
                                variants={itemVariants}
                                className="group relative bg-white/50 backdrop-blur-md border border-stone-200/50 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col items-center text-center p-4 md:p-8"
                            >
                                {/* Static Icon (Moves down on hover) */}
                                <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-6 transform group-hover:translate-y-4 group-hover:scale-90 transition-all duration-300 ${program.color} bg-opacity-10`}>
                                    <Icon className={`w-6 h-6 md:w-10 md:h-10 ${program.textColor}`} />
                                </div>

                                {/* Title (Moves down on hover) */}
                                <h3 className="text-base md:text-2xl font-bold text-coal mb-2 md:mb-4 transform group-hover:translate-y-4 transition-all duration-300">
                                    {program.title}
                                </h3>

                                {/* Description (Fades out on hover) */}
                                <p className="text-xs md:text-base text-stone-600 leading-relaxed opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    {program.description}
                                </p>

                                {/* Hover Reveal Content */}
                                <div className="absolute inset-0 bg-coal translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-10 flex flex-col items-center justify-center p-8">
                                    {/* Optional Background Image inside hover state */}
                                    <div
                                        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
                                        style={{ backgroundImage: `url(${program.bgImage})` }}
                                    ></div>

                                    <h4 className="text-white text-xl font-bold mb-4 relative z-20">{program.title}</h4>
                                    <p className="text-stone-300 text-sm relative z-20">
                                        {t('programs.curriculumNote')}
                                    </p>
                                    <button className="mt-6 px-6 py-2 bg-white text-coal font-bold rounded-full text-sm hover:scale-105 transition-transform relative z-20">
                                        {t('programs.registerBtn')}
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Special Note for Food Processing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.55 }}
                    className="mt-20 bg-white border border-stone-200 rounded-lg p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 text-start">
                        <div className="w-16 h-16 bg-gold-sun/15 border border-gold-sun/40 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Wheat className="w-8 h-8 text-gold-deep" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-coal mb-2">{t('programs.communityService')}</h3>
                            <p className="text-coal/80 leading-relaxed max-w-4xl font-medium">
                                {t('programs.communityServiceDesc')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Programs;
