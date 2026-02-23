import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Phone, Mail, BookOpen, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const programsList = [
    'قسم الكهرباء العامة',
    'قسم ميكانيكا السيارات',
    'قسم ميكانيكا الإنتاج',
    'قسم هندسة التبريد',
    'قسم الهندسة المعمارية',
    'قسم الهندسة الصحية',
    'قسم الحاسوب',
    'قسم التصنيع الغذائي'
];

const Admissions = () => {
    const formRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [countryCode, setCountryCode] = useState('+249');
    const [phoneNumber, setPhoneNumber] = useState('');

    const toEnglishDigits = (str) => {
        const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return str.replace(/[٠-٩]/g, w => arabicNumbers.indexOf(w));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const SERVICE_ID = 'service_s04f026';
        const TEMPLATE_ID = 'template_35kkt52';
        const PUBLIC_KEY = 'fvwV98-eqKNpXz2oI';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmitStatus('success');
                setIsSubmitting(false);
                setPhoneNumber('');
                setCountryCode('+249');
                formRef.current.reset(); // Clear the form
            }, (error) => {
                console.log(error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <section className="pt-32 pb-24 min-h-screen bg-paper relative overflow-hidden">
            {/* Background noise/accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-custom/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center md:text-right"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-coal mb-6">القبول والتسجيل</h1>
                    <p className="text-xl text-stone-600 max-w-3xl font-medium leading-relaxed">
                        بوابتك نحو مستقبل مهني واعد. املأ استمارة التسجيل المبدئي أدناه وسيقوم فريق القبول بالتواصل معك لاستكمال باقي الإجراءات والمستندات.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Right Column: Contact Info & Mascot */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-4 flex flex-col space-y-8"
                    >
                        <div className="bg-coal text-paper p-8 rounded-3xl shadow-xl relative overflow-hidden border border-stone-800">
                            {/* Decorative Grid Lines */}
                            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                            <h3 className="text-2xl font-bold mb-6 text-white relative z-10">معلومات الاتصال</h3>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-teal-900/50 p-3 rounded-full flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-emerald-custom" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-teal-100 mb-1">الموقع</h4>
                                        <p className="text-sm text-stone-400 leading-relaxed">
                                            الولاية الشمالية - محلية القولد<br />
                                            قرية شبتوت - شارع شريان الشمال الكيلو 419
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-teal-900/50 p-3 rounded-full flex-shrink-0">
                                        <Phone className="w-6 h-6 text-emerald-custom" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-teal-100 mb-1">للاستفسار</h4>
                                        <a href="tel:+33616458399" className="text-sm text-stone-400 hover:text-emerald-custom hover:underline transition-all block" dir="ltr">+33 616458399</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-teal-900/50 p-3 rounded-full flex-shrink-0">
                                        <Mail className="w-6 h-6 text-emerald-custom" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-teal-100 mb-1">البريد الإلكتروني</h4>
                                        <a href="mailto:tongilabhassan@gmail.com" className="text-sm text-stone-400 hover:text-emerald-custom hover:underline transition-all block">tongilabhassan@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mascot Graphic */}
                        <div className="hidden lg:flex justify-center items-center flex-1">
                            <img
                                src="/images/mascot-addmission.png"
                                alt="Mascot Welcome"
                                className="w-64 h-auto drop-shadow-2xl opacity-90"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                        </div>
                    </motion.div>

                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-8 bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-stone-200/50 relative"
                    >
                        <h2 className="text-3xl font-black text-coal mb-8">استمارة التسجيل المبدئي</h2>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="user_name" className="block text-sm font-bold text-coal">الاسم الرباعي <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            required
                                            placeholder="أدخل اسمك الكامل"
                                            className="w-full bg-paper border border-stone-300 rounded-xl py-4 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-custom focus:border-transparent transition-all"
                                        />
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                                    </div>
                                </div>

                                {/* Phone Input */}
                                <div className="space-y-2">
                                    <label htmlFor="user_phone_display" className="block text-sm font-bold text-coal">رقم الهاتف <span className="text-red-500">*</span></label>
                                    <div className="flex" dir="ltr">
                                        {/* Country Code Form */}
                                        <div className="relative z-10">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="h-full py-4 pl-4 pr-10 bg-stone-100 border border-stone-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-emerald-custom focus:border-transparent transition-all font-bold text-coal appearance-none cursor-pointer"
                                            >
                                                <option value="+249">🇸🇩 +249</option>
                                                <option value="+966">🇸🇦 +966</option>
                                                <option value="+971">🇦🇪 +971</option>
                                                <option value="+974">🇶🇦 +974</option>
                                                <option value="+20">🇪🇬 +20</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                        {/* Phone Number Field */}
                                        <div className="relative flex-1 -ml-px">
                                            <input
                                                type="tel"
                                                id="user_phone_display"
                                                required
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(toEnglishDigits(e.target.value).replace(/\D/g, ''))}
                                                placeholder="112 345 6789"
                                                className="w-full h-full bg-paper border border-stone-300 rounded-r-xl py-4 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-custom focus:border-transparent transition-all tracking-wider relative z-0 focus:z-20 text-left"
                                            />
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 z-10" />
                                        </div>
                                    </div>
                                    {/* Combined for EmailJS */}
                                    <input type="hidden" name="user_phone" value={`${countryCode} ${phoneNumber}`} />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="user_email" className="block text-sm font-bold text-coal">البريد الإلكتروني (اختياري)</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            dir="ltr"
                                            placeholder="example@domain.com"
                                            className="w-full text-right bg-paper border border-stone-300 rounded-xl py-4 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-custom focus:border-transparent transition-all"
                                        />
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                                    </div>
                                </div>

                                {/* Program Selection */}
                                <div className="space-y-2">
                                    <label htmlFor="selected_program" className="block text-sm font-bold text-coal">البرنامج المطلوب <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select
                                            id="selected_program"
                                            name="selected_program"
                                            required
                                            className="w-full bg-paper border border-stone-300 rounded-xl py-4 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-custom focus:border-transparent transition-all"
                                        >
                                            <option value="" disabled selected>اختر التخصص...</option>
                                            {programsList.map((prog, idx) => (
                                                <option key={idx} value={prog}>{prog}</option>
                                            ))}
                                        </select>
                                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* Message / Additional Info */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-bold text-coal">ملاحظات إضافية أو استفسارات</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="اكتب رسالتك هنا..."
                                    className="w-full bg-paper border border-stone-300 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-custom focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 origin-center
                                    ${isSubmitting ? 'bg-stone-300 text-stone-500 cursor-not-allowed scale-95' : 'bg-emerald-custom text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95'}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-stone-500 border-t-transparent rounded-full animate-spin"></span>
                                        جاري الإرسال...
                                    </>
                                ) : (
                                    <>
                                        إرسال الطلب
                                        <Send className="w-5 h-5 rtl:-scale-x-100" />
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        className="bg-emerald-50 text-emerald-800 p-4 rounded-xl flex items-start gap-3 border border-emerald-200"
                                    >
                                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-emerald-600" />
                                        <div>
                                            <p className="font-bold">تم إرسال طلبك بنجاح!</p>
                                            <p className="text-sm mt-1 opacity-90">شُكراً لك. سيقوم فريق الإدارة بمراجعة بياناتك والتواصل معك قريباً.</p>
                                        </div>
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        className="bg-red-50 text-red-800 p-4 rounded-xl flex items-start gap-3 border border-red-200"
                                    >
                                        <AlertCircle className="w-6 h-6 flex-shrink-0 text-red-600" />
                                        <div>
                                            <p className="font-bold">عذراً، حدث خطأ أثناء الإرسال.</p>
                                            <p className="text-sm mt-1 opacity-90">يرجى التأكد من اتصالك بالإنترنت والمحاولة مرة أخرى، أو التواصل معنا مباشرة عبر الهاتف.</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Admissions;
