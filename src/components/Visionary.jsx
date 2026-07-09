import { Check } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';
import DepthMapImage from './DepthMapImage';
import { visionaries, councilMembers } from '../data/peopleData';

const Visionary = () => {
    const { t, i18n } = useTranslation();
    
    const getProp = (obj, propBase) => {
        const lang = i18n.language || 'ar';
        if (lang.startsWith('fr') && obj[`${propBase}Fr`]) return obj[`${propBase}Fr`];
        if (lang.startsWith('en') && obj[`${propBase}En`]) return obj[`${propBase}En`];
        return obj[`${propBase}Ar`];
    };

    return (
        <section id="visionary" className="py-20 md:py-28 bg-ink-900 text-paper relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    index={3}
                    dark
                    title={t('visionary.title')}
                    subtitle={t('visionary.subtitle')}
                />

                <div className="space-y-32">
                    {visionaries.map((person, index) => {
                        // Alternate layout direction based on index
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={person.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.55 }}
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
                            >
                                {/* Portrait Area */}
                                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="relative p-2 bg-gradient-to-tr from-gold-sun/25 to-ink-800/20 rounded-lg">
                                        <div className={`absolute inset-0 bg-paper/5 backdrop-blur-sm rounded-lg transform ${isEven ? 'rotate-3' : '-rotate-3'} scale-105 z-0 transition-transform duration-300 hover:rotate-1`}></div>

                                        <div className="rounded-md overflow-hidden relative z-10 border border-ink-700/50 aspect-square flex items-center justify-center bg-coal">
                                            {/* Image rendering with WebGL Depth Map */}
                                            <DepthMapImage
                                                imageSrc={person.image}
                                                depthSrc={person.image.replace('.png', '').replace('-prortrait', '-depth').replace('-portrait', '-depth') + '.png'}
                                                alt={getProp(person, 'name')}
                                                className="w-full h-full object-cover z-10"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center text-coal/50 -z-10 font-bold text-xl text-center px-6 leading-relaxed">
                                                [يرجى وضع الصورة باسم {person.image.split('/').pop()} في مجلد images]
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bio Text Area */}
                                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="inline-block border-b-2 border-gold-sun pb-2 mb-2">
                                        <span className="text-gold-sun font-bold tracking-widest uppercase text-sm">
                                            {getProp(person, 'title')}
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                                        {getProp(person, 'name')}
                                    </h3>
                                    
                                    <div className="space-y-4 text-stone-200/80 leading-relaxed text-lg">
                                        {getProp(person, 'bio')?.map((paragraph, pIdx) => (
                                            <p key={pIdx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contributors & Council Section */}
                <div className="mt-32 pt-16 border-t border-ink-700/30">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">{t('visionary.council')}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-stone-200/80 text-lg">
                        {councilMembers.map((member, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-sun/10 flex items-center justify-center text-gold-sun">
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span>{getProp(member, 'name')} ({getProp(member, 'title')})</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visionary;
