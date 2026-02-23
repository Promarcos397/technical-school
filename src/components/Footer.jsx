import React, { useState, useRef } from 'react';
import { FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const SERVICE_ID = 'service_s04f026';
        const TEMPLATE_ID = 'template_mx5hjbt';
        const PUBLIC_KEY = 'fvwV98-eqKNpXz2oI';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                formRef.current.reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            }, () => {
                setSubmitStatus('error');
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <footer className="mt-24 border-t border-stone-200/50">

            {/* Decoupled Utility Banner for Institutions */}
            <div className="bg-paper/80 py-8 px-4 sm:px-6 lg:px-8 border-b border-stone-200/50 flex flex-col items-center justify-center gap-4">
                <p className="text-coal font-bold text-lg text-center">
                    للمؤسسات والشركاء: تحميل الملف الهندسي والمالي المفصل
                </p>
                <button className="flex items-center gap-2 bg-stone-800 text-white hover:bg-coal px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md">
                    <FileText className="w-5 h-5" />
                    <span>تنزيل الملف (PDF)</span>
                </button>
            </div>

            {/* Meta & Contact Grid */}
            <div className="bg-teal-950 text-paper py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-custom/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">

                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h4 className="text-emerald-custom font-bold text-xl drop-shadow-sm">مدرسة أديب الهاجري الفنية</h4>
                        <p className="text-teal-100 text-sm leading-relaxed pr-2 border-r-2 border-emerald-custom/30">
                            مهنة في كل يد. بناء قدرات الشباب وإرساء قواعد التنمية المستدامة في الولاية الشمالية والسودان.
                        </p>
                    </div>

                    {/* Column 2: Map */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">الموقع</h4>
                        <div className="w-full h-32 rounded-xl overflow-hidden border border-teal-800/50 relative bg-teal-900/20 group">
                            <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
                            <iframe
                                title="خريطة موقع المدرسة"
                                src="https://maps.google.com/maps?q=18.577222,30.558056&hl=ar&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                        <div className="text-teal-200 text-sm mt-3">
                            شارع شريان الشمال الكيلو 419، <br /> قرية شبتوت، محلية القولد.
                        </div>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">التواصل</h4>
                        <div className="text-teal-200 text-sm leading-loose flex flex-col gap-2">
                            <p className="text-white/80">المنسق الطوعي : حسن محمد حمد تنجلاب</p>
                            <a href="tel:+33616458399" dir="ltr" className="hover:text-emerald-400 hover:underline transition-colors block w-fit">📞 +33 616458399</a>
                            <a href="mailto:tongilabhassan@gmail.com" className="hover:text-emerald-400 hover:underline transition-colors block w-fit">✉️ tongilabhassan@gmail.com</a>
                        </div>
                    </div>

                    {/* Column 4: Quick Inquiry Form */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">استفسار سريع</h4>
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="user_name"
                                required
                                placeholder="الاسم"
                                className="w-full bg-teal-900/30 border border-teal-800 text-white placeholder-teal-300/50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-custom transition-all"
                            />
                            <input
                                type="email"
                                name="user_email"
                                required
                                placeholder="البريد الإلكتروني"
                                dir="rtl"
                                className="w-full bg-teal-900/30 border border-teal-800 text-white placeholder-teal-300/50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-custom transition-all"
                            />
                            <textarea
                                name="message"
                                required
                                placeholder="رسالتك..."
                                rows="2"
                                className="w-full bg-teal-900/30 border border-teal-800 text-white placeholder-teal-300/50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-custom transition-all resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all
                                    ${isSubmitting ? 'bg-teal-800 text-teal-400 cursor-not-allowed' : 'bg-emerald-custom text-teal-950 hover:bg-emerald-400 active:scale-95'}`}
                            >
                                {isSubmitting ? 'جاري الإرسال...' : (
                                    <>
                                        إرسال <Send className="w-4 h-4 rtl:-scale-x-100" />
                                    </>
                                )}
                            </button>

                            {/* Status Messages for Quick Form */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-emerald-400 text-xs flex items-center gap-1 mt-1">
                                        <CheckCircle2 className="w-4 h-4" /> تم الإرسال بنجاح!
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs flex items-center gap-1 mt-1">
                                        <AlertCircle className="w-4 h-4" /> حدث خطأ، حاول ثانية.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-teal-900/50 flex flex-col md:flex-row items-center justify-between text-teal-400 text-sm gap-4 relative z-10">
                    <p>© 2026 مدرسة أديب الهاجري الفنية. جميع الحقوق محفوظة.</p>
                    <p className="opacity-60 text-xs tracking-wide">تصميم وتطوير بكل فخر لدعم التعليم الفني</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
