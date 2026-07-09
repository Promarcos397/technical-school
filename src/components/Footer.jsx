import React, { useState, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
        <footer className="mt-14 md:mt-24 border-t border-stone-200/50">

            {/* Meta & Contact Grid */}
            <div className="bg-ink-900 text-paper py-10 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center md:text-start">

                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h4 className="text-gold-sun font-bold text-xl drop-shadow-sm">{t('hero.school')}</h4>
                        <p className="text-stone-300 text-sm leading-relaxed md:pr-2 md:border-r-2 md:ltr:pr-0 md:ltr:pl-2 md:ltr:border-r-0 md:ltr:border-l-2 border-gold-sun/30 mx-auto md:mx-0">
                            {t('hero.desc')}
                        </p>
                    </div>

                    {/* Column 2: Map */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">{t('footer.location', 'الموقع')}</h4>
                        <div className="w-full h-32 rounded-md overflow-hidden border border-ink-700/50 relative bg-ink-800/20 group">
                            <div className="absolute inset-0 bg-ink-800/20 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
                            <iframe
                                title={t('footer.mapTitle', 'خريطة موقع المدرسة')}
                                src={`https://maps.google.com/maps?q=18.5777582,30.5585055&output=embed&z=17&hl=${i18n.language}`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                        <div className="text-stone-300 text-sm mt-3 leading-relaxed whitespace-pre-line">
                            {t('admissions.locationDesc')}
                        </div>
                    </div>

                    {/* Column 3: Contact Details */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">{t('footer.contactTitle', 'التواصل')}</h4>
                        <div className="text-stone-300 text-sm leading-loose flex flex-col gap-2 items-center md:items-start">
                            <p className="text-white/80">{t('footer.coordinator', 'المنسق الطوعي : حسن محمد حمد تنجلاب')}</p>
                            <a href="tel:+33616458399" dir="ltr" className="hover:text-gold-sun hover:underline transition-colors flex items-center gap-2 w-fit"><Phone className="w-4 h-4 shrink-0" /> +33 616458399</a>
                            <a href="mailto:tongilabhassan@gmail.com" className="hover:text-gold-sun hover:underline transition-colors flex items-center gap-2 w-fit"><Mail className="w-4 h-4 shrink-0" /> tongilabhassan@gmail.com</a>
                        </div>
                    </div>

                    {/* Column 4: Quick Inquiry Form */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg">{t('footer.quickInquiry', 'استفسار سريع')}</h4>
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="user_name"
                                required
                                placeholder={t('admissions.fullNamePlaceholder', 'الاسم')}
                                className="w-full bg-ink-800/30 border border-ink-700 text-white placeholder-stone-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-stone-400 transition-all"
                            />
                            <input
                                type="email"
                                name="user_email"
                                required
                                placeholder={t('admissions.emailPlaceholder', 'البريد الإلكتروني')}
                                dir="ltr"
                                className="w-full bg-ink-800/30 border border-ink-700 text-white placeholder-stone-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-stone-400 transition-all md:text-left text-center"
                            />
                            <textarea
                                name="message"
                                required
                                placeholder={t('admissions.notesPlaceholder', 'رسالتك...')}
                                rows="2"
                                className="w-full bg-ink-800/30 border border-ink-700 text-white placeholder-stone-400 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-stone-400 transition-all resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-2.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all
                                    ${isSubmitting ? 'bg-ink-800 text-stone-400 cursor-not-allowed' : 'bg-gold-sun text-coal hover:brightness-95 active:scale-95'}`}
                            >
                                {isSubmitting ? t('admissions.submitting', 'جاري الإرسال...') : (
                                    <>
                                        {t('admissions.submitBtn', 'إرسال')} <Send className="w-4 h-4 rtl:-scale-x-100 ltr:scale-x-100" />
                                    </>
                                )}
                            </button>

                            {/* Status Messages for Quick Form */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-gold-sun text-xs flex items-center gap-1 mt-1 justify-center md:justify-start">
                                        <CheckCircle2 className="w-4 h-4" /> {t('footer.successMessage', 'تم الإرسال بنجاح!')}
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-400 text-xs flex items-center gap-1 mt-1 justify-center md:justify-start">
                                        <AlertCircle className="w-4 h-4" /> {t('footer.errorMessage', 'حدث خطأ، حاول ثانية.')}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-ink-700/50 flex flex-col md:flex-row items-center justify-between text-stone-400 text-sm gap-4 relative z-10 text-center">
                    <p>{t('footer.copyright', '© 2026 مدرسة أديب الهاجري الفنية. جميع الحقوق محفوظة.')}</p>
                    <p className="opacity-60 text-xs tracking-wide">{t('footer.credits', 'تصميم وتطوير بكل فخر لدعم التعليم الفني')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
