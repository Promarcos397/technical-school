import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Car, PenTool, Snowflake, Home, Waves, Monitor, Wheat } from 'lucide-react';

const programsData = [
    {
        id: 'electricity',
        title: 'قسم الكهرباء العامة',
        description: 'دراسة وتطبيق أساسيات الدوائر الكهربائية، التمديدات المنزلية والصناعية، وصيانة المولدات والمحركات.',
        icon: Settings,
        color: 'bg-amber-500',
        textColor: 'text-amber-600',
        bgImage: '/images/electrical-bg.png'
    },
    {
        id: 'auto-mechanics',
        title: 'قسم ميكانيكا السيارات',
        description: 'تشخيص وإصلاح أعطال السيارات الحديثة، دراسة محركات الاحتراق الداخلي، وأنظمة التعليق والفرامل.',
        icon: Car,
        color: 'bg-blue-600',
        textColor: 'text-blue-700',
        bgImage: '/images/auto-bg.png'
    },
    {
        id: 'production-mechanics',
        title: 'قسم ميكانيكا الإنتاج',
        description: 'التدريب الشامل على الخراطة، التفريز، تشكيل المعادن، وبرمجة ماكينات التحكم الرقمي (CNC).',
        icon: PenTool,
        color: 'bg-slate-600',
        textColor: 'text-slate-700',
        bgImage: '/images/production-bg.jpg'
    },
    {
        id: 'hvac',
        title: 'قسم هندسة التبريد',
        description: 'تركيب وصيانة أنظمة التكييف والتبريد المنزلية والتجارية، وغرف التبريد الصناعية.',
        icon: Snowflake,
        color: 'bg-cyan-500',
        textColor: 'text-cyan-600',
        bgImage: '/images/hvac-bg.png'
    },
    {
        id: 'architecture',
        title: 'قسم الهندسة المعمارية',
        description: 'أساسيات التصميم المعماري، حساب الكميات، رسم الخرائط الهندسية، وتقنيات التشييد الحديثة.',
        icon: Home,
        color: 'bg-emerald-600',
        textColor: 'text-emerald-700',
        bgImage: '/images/architecture-bg.png'
    },
    {
        id: 'plumbing',
        title: 'قسم الهندسة الصحية',
        description: 'تمديدات شبكات المياه والصرف الصحي، تقنيات الري الحديثة، ومعالجة المياه.',
        icon: Waves,
        color: 'bg-teal-500',
        textColor: 'text-teal-600',
        bgImage: '/images/sanitary-bg.png'
    },
    {
        id: 'computer',
        title: 'قسم الحاسوب',
        description: 'صيانة البرمجيات والعتاد، الشبكات، مقدمة في البرمجة وتصميم المواقع الإلكترونية.',
        icon: Monitor,
        color: 'bg-indigo-500',
        textColor: 'text-indigo-600',
        bgImage: '/images/computer-bg.png'
    },
    {
        id: 'food-processing',
        title: 'قسم التصنيع الغذائي',
        description: 'حفظ وتغليف المنتجات الزراعية (التمور، المانجو، الخضروات)، الصناعات التحويلية الريفية لتعزيز الدخل.',
        icon: Wheat,
        color: 'bg-orange-500',
        textColor: 'text-orange-600',
        bgImage: '/images/food-bg.png'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Programs = () => {
    return (
        <section className="pt-32 pb-24 min-h-screen bg-paper overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center md:text-right"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-coal mb-6">البرامج الأكاديمية</h1>
                    <p className="text-xl text-stone-600 max-w-3xl font-medium leading-relaxed">
                        نقدم ثمانية مسارات تخصصية دقيقة تمثل عصب التنمية والصناعة. كل مسار مصمم بعناية لتخريج أيدي عاملة محترفة ومواكبة للتكنولوجيا وتلبية احتياجات سوق العمل والمجتمع المحلي.
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {programsData.map((program) => {
                        const Icon = program.icon;
                        return (
                            <motion.div
                                key={program.id}
                                variants={itemVariants}
                                className="group relative bg-white/50 backdrop-blur-md border border-stone-200/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500 flex flex-col items-center text-center p-8"
                            >
                                {/* Static Icon (Moves down on hover) */}
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transform group-hover:translate-y-4 group-hover:scale-90 transition-all duration-500 ${program.color} bg-opacity-10`}>
                                    <Icon className={`w-10 h-10 ${program.textColor}`} />
                                </div>

                                {/* Title (Moves down on hover) */}
                                <h3 className="text-2xl font-bold text-coal mb-4 transform group-hover:translate-y-4 transition-all duration-500">
                                    {program.title}
                                </h3>

                                {/* Description (Fades out on hover) */}
                                <p className="text-stone-600 leading-relaxed opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    {program.description}
                                </p>

                                {/* Hover Reveal Content */}
                                <div className="absolute inset-0 bg-coal translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 flex flex-col items-center justify-center p-8">
                                    {/* Optional Background Image inside hover state */}
                                    <div
                                        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
                                        style={{ backgroundImage: `url(${program.bgImage})` }}
                                    ></div>

                                    <h4 className="text-white text-xl font-bold mb-4 relative z-20">{program.title}</h4>
                                    <p className="text-stone-300 text-sm relative z-20">
                                        يتم تجهيز المنهج العملي وجدول الساعات المعتمدة لهذا التخصص.
                                    </p>
                                    <button className="mt-6 px-6 py-2 bg-white text-coal font-bold rounded-full text-sm hover:scale-105 transition-transform relative z-20">
                                        التسجيل بالمسار
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
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 bg-emerald-custom/10 border border-emerald-custom/30 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-custom/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="w-16 h-16 bg-emerald-custom rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Wheat className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-teal-900 mb-2">خدمة المجتمع: التصنيع الغذائي</h3>
                            <p className="text-teal-800/80 leading-relaxed max-w-4xl font-medium">
                                يعُتبر قسم التصنيع الغذائي خدمة اجتماعية مباشرة لأهل المنطقة، خاصة للخريجين والخريجات. يركز القسم على استغلال المواسم الزراعية لتغليف وحفظ التمور، المانجو، البطاطس، والطماطم، بهدف ضمان وفرتها في مواسم الندرة وتوفير مصدر دخل مستدام للأسر المنتجة.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Programs;
