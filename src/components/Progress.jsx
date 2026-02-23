import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProgressSlider = ({ image1, image2 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full h-80 rounded-2xl overflow-hidden cursor-ew-resize group shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image1} alt="Blueprint" className="absolute inset-0 w-full h-full object-cover" />

            <motion.div
                className="absolute inset-y-0 right-0 overflow-hidden"
                initial={{ width: "50%" }}
                animate={{ width: isHovered ? "100%" : "50%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <img src={image2} alt="Progress" className="absolute top-0 right-0 w-[200%] h-full object-cover max-w-none" style={{ width: '200%' }} />
            </motion.div>

            {/* Divider Line */}
            <motion.div
                className="absolute inset-y-0 bg-emerald-custom w-1 z-10"
                initial={{ right: "50%" }}
                animate={{ right: isHovered ? "100%" : "50%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-custom rounded-full flex items-center justify-center text-white text-xs">
                    ↔
                </div>
            </motion.div>
        </div>
    );
};

const Progress = () => {
    return (
        <section id="progress" className="py-24 bg-paper/50 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-coal mb-6">مراحل العمل والتنفيذ</h2>
                    <p className="text-xl text-stone-500 font-medium">توثيق دقيق وتدرج منهجي لتحقيق الرؤية.</p>
                </div>

                <div className="space-y-24 md:space-y-32">

                    {/* Phase 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-right"
                    >
                        <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                            <span className="text-emerald-custom font-bold tracking-widest text-xs md:text-sm uppercase inline-block bg-emerald-custom/10 px-3 py-1 rounded-full">المرحلة الأولى - قيد الإكتمال</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-teal-900">المبنى الرئيسي</h3>
                            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                                مبنى مؤسس على طابق أرضي وطابقين متكررين بمساحة 750 متر مربع. تم الانتهاء من الطابقين الأرضي والأول، ويضمان 6 قاعات محاضرات، 4 معامل، وعدد من المكاتب الإدارية.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 px-4 sm:px-8 lg:px-0">
                            <ProgressSlider image1="/images/school-blueprint.png" image2="/images/workers-progress.png" />
                        </div>
                    </motion.div>

                    {/* Phase 2: Active Phase */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:flex-row-reverse text-center lg:text-right"
                    >
                        <div className="order-1 lg:order-1 relative group rounded-2xl p-1 bg-gradient-to-br from-amber-400 to-orange-600 animate-pulse-slow mx-4 sm:mx-8 lg:mx-0">
                            <div className="absolute inset-0 bg-orange-500/20 blur-xl animate-pulse rounded-full z-[-1]" />
                            <div className="rounded-xl overflow-hidden shadow-2xl relative bg-white">
                                <img src="/images/school-workshops.png" alt="Gable Workshops" className="w-full h-80 object-cover" />
                                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                                    مرحلة نشطة - تتطلب تمويلاً
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6 order-2 lg:order-2">
                            <span className="text-orange-600 font-bold tracking-widest text-xs md:text-sm uppercase inline-block bg-orange-600/10 px-3 py-1 rounded-full">المرحلة الثانية - التنفيذ الجاري</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-teal-900">الورش العملية (الجملون)</h3>
                            <p className="text-base md:text-lg text-stone-600 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                                تشييد عدد 2 ورش جملون بمساحة 40×15 متر لكل ورشة. تضم كل ورشة: صالة للتدريب العملي، قاعة دراسة نظرية، مكتب أستاذ، ومخزن معدات.
                            </p>
                        </div>
                    </motion.div>

                    {/* Phase 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12 md:space-y-16"
                    >
                        <div className="text-center max-w-2xl mx-auto space-y-4 px-4">
                            <span className="text-teal-600 font-bold tracking-widest text-xs md:text-sm uppercase inline-block bg-teal-600/10 px-3 py-1 rounded-full">المرحلة الثالثة - الرؤية المستقبلية</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-teal-900">السكن والخدمات والبنية التحتية</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-8 lg:px-0">

                            {/* Dorms Blueprint Hover */}
                            <div className="col-span-1 border border-stone-200/50 bg-white/30 backdrop-blur p-4 rounded-2xl group overflow-hidden relative min-h-[300px] md:min-h-[400px]">
                                <img src="/images/dorms.png" alt="Dorms Render" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" />
                                <img src="/images/dorms-blueprint.png" alt="Dorms Blueprint" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply" />
                                <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-coal/90 via-coal/40 to-transparent p-6 flex flex-col justify-end">
                                    <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md mb-1">مبنى الداخليات والخدمات</h4>
                                    <p className="text-white/80 text-sm drop-shadow-md leading-relaxed">جناحين مساحة 40×25 م. تم تشييد الطابق الأرضي من أصل 3 طوابق. ومبنى لاستراحة كبار الزوار.</p>
                                </div>
                            </div>

                            {/* Video 1: Water */}
                            <div className="col-span-1 border border-stone-200/50 bg-white/30 backdrop-blur p-4 rounded-2xl relative overflow-hidden min-h-[300px] md:min-h-[400px]">
                                <video src="/images/water-station.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-teal-900/90 via-teal-900/40 to-transparent p-6 flex flex-col justify-end">
                                    <h4 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">محطة إمداد المياه</h4>
                                    <p className="text-teal-100 text-xs md:text-sm">بئر ارتوازية بعمق 550 قدم مزودة بصهريج</p>
                                </div>
                            </div>

                            {/* Video 2: Solar */}
                            <div className="col-span-1 border border-stone-200/50 bg-white/30 backdrop-blur p-4 rounded-2xl relative overflow-hidden min-h-[300px] md:min-h-[400px]">
                                <video src="/images/solar-station.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-teal-900/90 via-teal-900/40 to-transparent p-6 flex flex-col justify-end">
                                    <h4 className="text-white font-bold text-lg md:text-xl mb-1 md:mb-2">الطاقة الشمسية</h4>
                                    <p className="text-teal-100 text-xs md:text-sm">لتشغيل محطة مياه الشرب بسعة 11 ألف جالون</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Progress;
