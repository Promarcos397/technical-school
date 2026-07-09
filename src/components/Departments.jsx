import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Wrench, Settings, Snowflake, Wheat, Ruler, Droplets, Monitor } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Departments = () => {
    const { t } = useTranslation();
    const [hoveredIndex, setHoveredIndex] = useState(2); // Default open is Production Mechanics

    const departmentsData = [
        {
            id: 1,
            title: t('programs.electricityTitle', 'الكهرباء العامة'),
            subtitle: t('programs.electricitySubtitle', 'التمديدات والأنظمة الكهربائية'),
            icon: Zap,
            image: '/images/electrical-bg.jpeg',
            color: 'from-ink-800/80 to-ink-950/90'
        },
        {
            id: 2,
            title: t('programs.autoMechanicsTitle', 'ميكانيكا السيارات'),
            subtitle: t('programs.autoMechanicsSubtitle', 'صيانة وتشخيص أعطال السيارات'),
            icon: Wrench,
            image: '/images/auto-bg.jpeg',
            color: 'from-ink-800/80 to-ink-950/90'
        },
        {
            id: 3,
            title: t('programs.productionMechanicsTitle', 'ميكانيكا الإنتاج'),
            subtitle: t('programs.productionMechanicsSubtitle', 'تشغيل المعادن والمخارط'),
            icon: Settings,
            image: '/images/production-bg.jpeg',
            color: 'from-ink-800/80 to-ink-950/90'
        },
        {
            id: 4,
            title: t('programs.hvacTitle', 'هندسة التبريد والتكييف'),
            subtitle: t('programs.hvacSubtitle', 'تركيب وصيانة التكييف والتبريد'),
            icon: Snowflake,
            image: '/images/hvac-bg.png',
            color: 'from-ink-800/80 to-ink-950/90'
        },
        {
            id: 5,
            title: t('programs.architectureTitle', 'الهندسة المعمارية'),
            subtitle: t('programs.architectureSubtitle', 'التصميم والرسم الهندسي'),
            icon: Ruler,
            image: '/images/school-blueprint.png',
            color: 'from-ink-800/80 to-ink-950/90'
        },
        {
            id: 6,
            title: t('programs.plumbingTitle', 'الهندسة الصحية'),
            subtitle: t('programs.plumbingSubtitle', 'تمديدات المياه والصرف الصحي'),
            icon: Droplets,
            image: '/images/sanitary-bg.png', 
            color: 'from-ink-800/80 to-ink-950/90'
        },
        {
            id: 7,
            title: t('programs.computerTitle', 'الحاسوب'),
            subtitle: t('programs.computerSubtitle', 'تقنية المعلومات وعلوم الشبكات'),
            icon: Monitor,
            image: '/images/computer-bg.png', 
            color: 'from-ink-800/80 to-ink-950/90'
        },
        {
            id: 8,
            title: t('programs.foodProcessingTitle', 'التصنيع الغذائي'),
            subtitle: t('programs.foodProcessingSubtitle', 'تغليف التمور وحفظ المنتجات الزراعية'),
            icon: Wheat,
            image: '/images/food-bg.png',
            color: 'from-ink-800/80 to-ink-950/90'
        },
    ];

    return (
        <section id="departments" className="py-24 md:py-32 bg-coal relative overflow-hidden">

            {/* Ambient Background Glow based on active card */}
            <div className="absolute inset-0 opacity-20 transition-colors duration-1000 ease-in-out"
                style={{
                    background: `radial-gradient(circle at 50% 50%, var(--tw-gradient-from) 0%, transparent 70%)`
                }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-paper mb-6 tracking-tight">
                            {t('departments.title', 'الأقسام الفنية')}
                        </h2>
                        <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            {t('departments.description', 'مسارات مهنية رفيعة المستوى، صُممت لتلبي احتياجات سوق العمل بأعلى معايير الجودة الهندسية والميكانيكية.')}
                        </p>
                    </motion.div>
                </div>

                {/* The Expanding Gallery */}
                <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] gap-2 lg:gap-4 w-full">
                    {departmentsData.map((dept, index) => {
                        const isActive = hoveredIndex === index;
                        const Icon = dept.icon;

                        return (
                            <motion.div
                                key={dept.id}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onClick={() => setHoveredIndex(index)}
                                layout
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    layout: { type: "spring", stiffness: 300, damping: 25 },
                                    opacity: { duration: 0.4, delay: index * 0.05 }
                                }}
                                className={`relative rounded-lg overflow-hidden cursor-pointer group flex-shrink-0 lg:flex-shrink
                                    ${isActive ? 'flex-[4] lg:flex-[5] shadow-2xl shadow-black/50' : 'flex-[1] lg:flex-[1] hover:bg-stone-800'}
                                    bg-stone-900 border border-stone-800 transition-colors duration-300
                                `}
                            >
                                {/* Background Image with Gradient Overlay */}
                                <div className="absolute inset-0 z-0 bg-stone-900">
                                    <img
                                        src={dept.image}
                                        alt={dept.title}
                                        className={`w-full h-full object-cover transition-transform duration-500 ease-out mix-blend-screen
                                            ${isActive ? 'scale-105 opacity-80' : 'scale-100 opacity-30 group-hover:opacity-50 grayscale'}
                                        `}
                                        onError={(e) => {
                                            // Fallback to a geometric pattern if image doesn't exist yet
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} mix-blend-multiply opacity-50`} />
                                    {/* Hard gradient from bottom for text readability */}
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                {/* Content Container */}
                                <div className="absolute inset-0 z-10 p-6 lg:p-8 flex flex-col justify-end">
                                    <div className="flex items-center gap-4 mb-2 lg:mb-4">
                                        <div className={`p-3 rounded-lg backdrop-blur-md border transition-all duration-300
                                            ${isActive ? 'bg-white/10 border-white/20' : 'bg-black/20 border-white/5'}
                                        `}>
                                            <Icon className={`w-6 h-6 lg:w-8 lg:h-8 transition-colors duration-300
                                                ${isActive ? 'text-paper' : 'text-stone-500'}
                                            `} />
                                        </div>

                                        {/* Horizontal Title - Only visible when Active or Mobile */}
                                        <AnimatePresence>
                                            {(isActive || window.innerWidth < 1024) && (
                                                <motion.h3
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="text-2xl lg:text-3xl font-bold text-paper drop-shadow-lg whitespace-nowrap"
                                                >
                                                    {dept.title}
                                                </motion.h3>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Subtitle - Only visible when Active */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, y: 10 }}
                                                animate={{ opacity: 1, height: 'auto', y: 0 }}
                                                exit={{ opacity: 0, height: 0, y: 10 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-stone-300 font-medium text-base lg:text-lg leading-relaxed mt-2 lg:mt-0 pr-16 lg:pr-20 rtl:pr-16 rtl:lg:pr-20 ltr:pl-16 ltr:lg:pl-20 ltr:pr-0">
                                                    {dept.subtitle}
                                                </p>

                                                <div className="mt-6 flex items-center gap-2 text-paper text-sm font-bold tracking-widest uppercase cursor-pointer group/btn w-fit">
                                                    <span className="relative">
                                                        {t('departments.explore', 'اكتشف المسار')}
                                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-paper transition-all duration-300 group-hover/btn:w-full"></span>
                                                    </span>
                                                    <span className="transform rtl:-translate-x-2 ltr:translate-x-2 transition-transform duration-300 rtl:group-hover/btn:translate-x-0 ltr:group-hover/btn:translate-x-0 rtl:scale-x-100 ltr:-scale-x-100">←</span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Vertical Title - Only visible when Inactive on Desktop */}
                                <div className={`hidden lg:flex absolute inset-0 items-end justify-center pb-8 p-6 z-20 pointer-events-none transition-opacity duration-300
                                    ${isActive ? 'opacity-0' : 'opacity-100'}
                                `}>
                                    <span className="text-stone-400 font-bold text-xl writing-mode-vertical rotate-180 whitespace-nowrap tracking-wider">
                                        {dept.title}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Departments;
