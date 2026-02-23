import React from 'react';
import { motion } from 'framer-motion';
import DepthMapImage from './DepthMapImage';

const Visionary = () => {
    const visionaries = [
        {
            id: 'adib',
            name: 'أديب إبراهيم الهاجري',
            title: 'صاحب المبادرة',
            image: '/images/adib-portrait.png',
            bio: [
                'خريج أمريكا.',
                'بدأت حياتي المهنية مع الوالد، رحمه الله عليه، مسيرة استمرت حتى التخرج.',
                'عملت لمدة 8 سنوات بالخطوط الجوية الكويتية، خبرة ساهمت في صقل الرؤية الاستراتيجية التي تقود اليوم هذه المبادرة التنموية.'
            ]
        },
        {
            id: 'hassan',
            name: 'حسن محمد حمد تنجلاب (حسن بردو)',
            title: 'المنسق الطوعي للمشروع',
            image: '/images/hassan-portrait.png',
            bio: [
                'مواليد 1957. التحق بمكتب اتصال شركة رينو الفرنسية بالخرطوم عام 1977م.',
                'افتتح شركته الخاصة بالاستيراد والتصدير عام 1983م وعمل في مجال قطع الغيار، الدواجن، والأدوية البيطرية.',
                'عام 1993م أسس شركة في مجال خدمات الطيران والتخليص الجمركي.',
                'بين 2011م و 2019م نشط في العمل الطوعي، قائماً بإجراءات تصديق المدرسة ومتابعة الموقع وتأهيل المشروع الزراعي التعاوني بمسقط رأسه بقرية شبتوت بحري بمحلية القولد.'
            ]
        }
    ];

    return (
        <section id="visionary" className="py-24 bg-teal-950 text-paper relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.4) 0%, transparent 40%)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">قادة المبادرة والتأسيس</h2>
                    <p className="text-xl text-teal-200/80 font-medium">رجال كرسوا خبراتهم وحياتهم لخدمة المجتمع وبناء الأجيال.</p>
                </div>

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
                                transition={{ duration: 0.8 }}
                                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
                            >
                                {/* Portrait Area */}
                                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="relative p-2 bg-gradient-to-tr from-emerald-custom/40 to-teal-800/20 rounded-2xl">
                                        <div className={`absolute inset-0 bg-paper/5 backdrop-blur-sm rounded-2xl transform ${isEven ? 'rotate-3' : '-rotate-3'} scale-105 z-0 transition-transform duration-500 hover:rotate-1`}></div>

                                        <div className="rounded-xl overflow-hidden relative z-10 border border-teal-800/50 aspect-square flex items-center justify-center bg-coal">
                                            {/* Image rendering with WebGL Depth Map */}
                                            <DepthMapImage
                                                imageSrc={person.image}
                                                depthSrc={person.image.replace('.png', '').replace('-prortrait', '-depth').replace('-portrait', '-depth') + '.png'}
                                                alt={person.name}
                                                className="w-full h-full object-cover z-10"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center text-teal-800/50 -z-10 font-bold text-xl text-center px-6 leading-relaxed">
                                                [يرجى وضع الصورة باسم {person.image.split('/').pop()} في مجلد images]
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bio Text Area */}
                                <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <div className="inline-block border-b-2 border-emerald-custom pb-2 mb-2">
                                        <span className="text-teal-400 font-bold tracking-widest uppercase text-sm">
                                            {person.title}
                                        </span>
                                    </div>

                                    <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                        {person.name}
                                    </h3>

                                    <div className="space-y-4 text-lg md:text-xl text-teal-100/90 leading-loose border-r-4 border-emerald-custom/40 pr-6 ps-2">
                                        {person.bio.map((paragraph, pIdx) => (
                                            <p key={pIdx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Visionary;
