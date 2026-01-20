
import React from 'react';
import { Language } from './types';
import { IMAGES } from './constants';

interface SectionProps {
  lang: Language;
  t: any;
  isRtl?: boolean;
}

export const SupportCTA: React.FC<SectionProps> = ({ lang, t }) => (
  <section className="py-20 md:py-40 bg-[#2D5A5A] relative overflow-hidden text-center text-white">
    <div className="absolute top-0 right-0 w-80 h-80 md:w-[60rem] md:h-[60rem] bg-white/5 rounded-full blur-[60px] md:blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 md:w-[50rem] md:h-[50rem] bg-[#C2B280]/10 rounded-full blur-[60px] md:blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-8xl font-black mb-8 md:mb-12 leading-tight drop-shadow-2xl tracking-tighter">{t.ctaTitle}</h2>
      <p className="text-lg md:text-4xl text-white/80 mb-10 md:mb-20 font-medium leading-relaxed max-w-4xl mx-auto opacity-90 px-4 md:px-0">
        {t.ctaText}
      </p>
      <a 
        href="#contact" 
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('contact');
          if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }}
        className="inline-flex bg-[#C2B280] hover:bg-white text-[#2D5A5A] px-10 md:px-24 py-5 md:py-10 rounded-2xl md:rounded-[3rem] font-black text-xl md:text-4xl transition-all shadow-2xl transform hover:scale-105 active:scale-95 ring-4 md:ring-8 ring-white/10 items-center gap-4"
      >
        <i className="ph ph-handshake"></i> {t.heroCTA}
      </a>
    </div>
  </section>
);

export const ContactSection: React.FC<SectionProps> = ({ lang, t, isRtl }) => (
  <section id="contact" className="py-16 md:py-40 px-6 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-stretch">
        <div className="bg-[#FDFCF0] rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-28 border-4 md:border-8 border-[#2D5A5A]/5 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-[#C2B280]/5 rounded-bl-[10rem] md:rounded-bl-[15rem]"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-12 md:mb-20 text-[#2D5A5A] tracking-tight">{t.contactTitle}</h2>
          <div className="space-y-10 md:space-y-20">
            <div className="flex gap-6 md:gap-12 items-center">
               <div className="relative">
                  <img 
                    src={IMAGES.COORD_AVATAR} 
                    className="w-20 h-20 md:w-32 md:h-32 rounded-2xl md:rounded-[3rem] object-cover shadow-2xl border-4 border-white transform -rotate-3"
                    alt="Coordinator"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#2D5A5A] text-white rounded-full flex items-center justify-center border-2 border-white text-xs">
                     <i className="ph ph-user-check"></i>
                  </div>
               </div>
               <div>
                 <p className="text-[10px] md:text-sm text-[#C2B280] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] mb-2 md:mb-4">{t.contactRole}</p>
                 <p className="text-xl md:text-4xl font-black text-[#2D2D2D] leading-tight">{t.contactCoord}</p>
               </div>
            </div>
            <div className="pt-10 md:pt-20 border-t-2 md:border-t-4 border-gray-100">
              <div className="flex items-center gap-6 md:gap-12 mb-10 md:mb-16 group">
                <div className="w-14 h-14 md:w-24 md:h-24 bg-[#2D5A5A]/5 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center text-2xl md:text-5xl group-hover:bg-[#2D5A5A] group-hover:text-white transition-all shadow-inner text-[#2D5A5A]">
                   <i className="ph ph-phone"></i>
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-400 font-black mb-1 md:mb-3 uppercase tracking-widest">{lang === 'ar' ? 'اتصال دولي' : 'International Call'}</p>
                  <a href="tel:+33616458399" className="text-xl md:text-5xl font-black text-[#2D5A5A] tracking-tighter transition-colors hover:text-[#C2B280]" dir="ltr">+33 6 16 45 83 99</a>
                </div>
              </div>
              <div className="flex items-center gap-6 md:gap-12 group">
                <div className="w-14 h-14 md:w-24 md:h-24 bg-[#2D5A5A]/5 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center text-2xl md:text-5xl group-hover:bg-[#2D5A5A] group-hover:text-white transition-all shadow-inner text-[#2D5A5A]">
                   <i className="ph ph-envelope"></i>
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-400 font-black mb-1 md:mb-3 uppercase tracking-widest">{lang === 'ar' ? 'البريد المباشر' : 'Direct Email'}</p>
                  <a href="mailto:tongilabhassan@gmail.com" className="text-lg md:text-4xl font-black text-[#2D5A5A] hover:underline break-all leading-tight transition-colors hover:text-[#C2B280]">tongilabhassan@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="bg-[#2D5A5A]/5 p-8 md:p-20 rounded-[2.5rem] md:rounded-[5rem] flex-1 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 text-6xl md:text-9xl text-[#2D5A5A]">
                <i className="ph ph-briefcase"></i>
             </div>
             <h4 className="text-2xl md:text-4xl font-black text-[#2D5A5A] mb-6 md:mb-10">{lang === 'ar' ? 'كيفية المساهمة' : 'How to Support'}</h4>
             <p className="text-base md:text-2xl text-gray-600 font-bold leading-relaxed mb-8 md:mb-16 italic opacity-80">
               {lang === 'ar' 
                ? 'نناشد الجميع للمساهمة بتذليل العقبات لتأثيث الصرح بالأصول المنقولة ومعدات الورش بأقسامها المختلفة.' 
                : 'We appeal to everyone to contribute by facilitating the furnishing of the building and workshop equipment.'}
             </p>
             <div className="grid grid-cols-2 gap-6 md:gap-10">
                <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[4rem] text-center border-2 border-gray-100 shadow-2xl group hover:scale-105 transition-transform">
                   <p className="text-3xl md:text-6xl font-black text-[#C2B280]">100%</p>
                   <p className="text-[9px] md:text-xs font-black uppercase text-gray-400 mt-2 md:mt-6 tracking-[0.2em]">{lang === 'ar' ? 'الهياكل' : 'Structure'}</p>
                </div>
                <div className="bg-[#2D5A5A] p-6 md:p-12 rounded-[2rem] md:rounded-[4rem] text-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform cursor-pointer border-2 md:border-4 border-white/20">
                   <p className="text-3xl md:text-6xl font-black text-white">NEXT</p>
                   <p className="text-[9px] md:text-xs font-black uppercase text-white/50 mt-2 md:mt-6 tracking-[0.2em]">{lang === 'ar' ? 'التجهيز' : 'Equipping'}</p>
                </div>
             </div>
          </div>
          <div className="bg-[#C2B280]/20 p-8 md:p-14 rounded-[2rem] md:rounded-[4rem] border-4 md:border-8 border-dashed border-[#C2B280]/40 flex items-center justify-center text-center">
             <p className="text-sm md:text-2xl font-black text-[#2D5A5A]/90 leading-relaxed italic">
               <i className="ph ph-info mr-2 inline-block"></i> {t.contactInstruction}
             </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Footer: React.FC<SectionProps> = ({ lang, t, isRtl }) => (
  <footer className="py-20 md:py-32 bg-[#1A1A1A] text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 mb-16 md:mb-24">
        <div className="max-w-lg">
          <div className="flex items-center gap-6 mb-8 md:mb-10">
            <div className="w-12 h-12 md:w-20 md:h-20 bg-[#2D5A5A] rounded-2xl md:rounded-[2rem] flex items-center justify-center font-black text-2xl md:text-4xl text-white border-2 md:border-4 border-white/10 shadow-2xl transform -rotate-6">A</div>
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">{t.heroTitle}</h3>
              <p className="text-[10px] md:text-sm font-bold text-[#C2B280] tracking-[0.3em] uppercase mt-1 md:mt-3">{t.heroLocation}</p>
            </div>
          </div>
          <p className="text-gray-400 font-bold leading-relaxed text-base md:text-xl opacity-70 italic">
            {lang === 'ar' ? 'صرح تعليمي يهدف لنهضة الولاية الشمالية والبلاد عبر التدريب المهني المتخصص.' : 'An educational landmark aimed at uplifting the Northern State and the country.'}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 w-full md:w-auto">
          <div className="flex flex-col gap-4 md:gap-8">
            <h4 className="text-[#C2B280] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 md:mb-4">{t.footerQuickLinks}</h4>
            <a href="#home" className="text-gray-400 hover:text-white transition-colors font-black text-sm md:text-lg">{t.navHome}</a>
            <a href="#vision" className="text-gray-400 hover:text-white transition-colors font-black text-sm md:text-lg">{t.navAbout}</a>
            <a href="#infrastructure" className="text-gray-400 hover:text-white transition-colors font-black text-sm md:text-lg">{t.navInfrastructure}</a>
          </div>
          <div className="flex flex-col gap-4 md:gap-8">
            <h4 className="text-[#C2B280] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 md:mb-4">{lang === 'ar' ? 'المنهج' : 'Curriculum'}</h4>
            <a href="#departments" className="text-gray-400 hover:text-white transition-colors font-black text-sm md:text-lg">{t.navCurriculum}</a>
            <a href="#community" className="text-gray-400 hover:text-white transition-colors font-black text-sm md:text-lg">{t.navCommunity}</a>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 col-span-2 md:col-span-1">
             <h4 className="text-[#C2B280] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-2 md:mb-4">{lang === 'ar' ? 'تابعنا' : 'Connect'}</h4>
             <div className="flex gap-4">
                {['facebook', 'twitter-x', 'youtube'].map(social => (
                  <span key={social} className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-2xl font-black text-gray-300 hover:bg-[#C2B280] hover:text-[#2D2D2D] transition-all cursor-pointer shadow-xl">
                     <i className={`ph ph-${social}-logo`}></i>
                  </span>
                ))}
             </div>
          </div>
        </div>
      </div>
      <div className="pt-10 md:pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 text-gray-600 font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px]">
        <p className="text-center md:text-left">{t.footerCopyright}</p>
        <p className="flex items-center gap-4 bg-white/5 px-6 md:px-8 py-2 md:py-3 rounded-full text-[#C2B280]">
           <i className="ph ph-globe"></i> {lang === 'ar' ? 'الولاية الشمالية - جمهورية السودان' : 'NORTHERN STATE - SUDAN'}
        </p>
      </div>
    </div>
  </footer>
);
