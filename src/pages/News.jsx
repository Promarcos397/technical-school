import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const News = () => {
    // Ensure page starts at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="pt-32 pb-24 min-h-screen bg-paper">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-black text-coal mb-6">الأخبار والفعاليات</h1>
                    <p className="text-xl text-stone-600 max-w-2xl font-medium leading-relaxed">
                        تابع أحدث المستجدات، الإنجازات الطلابية، والفعاليات التقنية في مدرسة أديب الهاجري.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* News Article 1 - Funding Call */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-orange-100 text-orange-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">تحديثات المشروع</span>
                            <span className="text-stone-400 text-sm">التطوير مستمر</span>
                        </div>
                        <h2 className="text-3xl font-bold text-teal-950 mb-4 leading-tight">حملة المساهمة واستكمال تجهيزات الورش الفنية</h2>
                        <p className="text-stone-600 leading-relaxed font-medium mb-6 text-lg">
                            التكلفة المالية الكلية للإنشاءات المذكورة تتجاوز واحد مليون دولار أمريكي. وما نرجوه من جميع الجادين سواء الجهات الحكومية أو المنظمات الخيرية والأفراد المساهمة الفاعلة والمتبني الكامل لتذليل العقبات.
                            <br /><br />
                            نأمل تضافر الجهود لتأثيث المدرسة بالأصول المنقولة والمعدات اللازمة للورش بأقسامها المختلفة ليتحقق حلم الأجيال.
                        </p>
                    </motion.article>

                    {/* News Article 2 - Village Context */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white rounded-3xl p-8 border border-stone-200/50 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-emerald-100 text-emerald-700 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">المجتمع المحلي</span>
                        </div>
                        <h2 className="text-3xl font-bold text-teal-950 mb-4 leading-tight">نبذة عن قرية شبتوت</h2>
                        <p className="text-stone-600 leading-relaxed font-medium text-lg">
                            مقر المدرسة هو قرية شبتوت بالولاية الشمالية وتبعد حوالي 90 كيلومتر جنوب دنقلا عاصمة الولاية، وعشرة كيلومترات من مدينة القولد.
                            <br /><br />
                            هذا المشروع يخدم مجتمع محلي متعطش للتدريب المهني وللثورة التعليمية التي ستساهم بشكل مباشر في رفع مستوى المعيشة ومحاربة البطالة من خلال اكتساب مهارات تقنية وحرفية.
                        </p>
                    </motion.article>

                    {/* Fun Mascot Block for "More news coming" */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 mt-8 flex flex-col items-center justify-center text-center p-12 bg-white/50 backdrop-blur-sm border border-stone-200/50 rounded-3xl"
                    >
                        <motion.div
                            className="relative w-64 h-64 md:w-80 md:h-80 mb-6"
                        >
                            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-2xl"></div>
                            <img
                                src="/images/mascot-news.png"
                                alt="Mascot News"
                                className="relative z-10 w-full h-full object-contain drop-shadow-lg"
                                onError={(e) => {
                                    e.target.src = '/images/charecter-404.png';
                                }}
                            />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-teal-950 mb-3">نعمل باستمرار لصناعة الأخبار!</h3>
                        <p className="text-stone-500 max-w-sm">
                            تابعنا قريباً لتلقي أحدث التحديثات حول الفعاليات، الإنجازات الطلابية، وتطورات البناء خطوة بخطوة.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default News;
