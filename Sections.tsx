
import React from 'react';
import { Language } from './types';
import { PROGRESS, DEPARTMENTS, IMAGES } from './constants';

interface SectionProps {
  lang: Language;
  t: any;
  isRtl?: boolean;
}

export const StatsBar: React.FC<{ lang: Language, isRtl: boolean }> = ({ lang, isRtl }) => (
  <div className="bg-[#2D5A5A] py-8 md:py-16 text-white relative z-30 -mt-12 md:-mt-20 mx-4 md:mx-auto max-w-7xl rounded-[1.5rem] md:rounded-[3rem] shadow-2xl border border-white/10">
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-12 text-center divide-x divide-white/10 rtl:divide-x-reverse">
      <div className="px-2">
        <div className="text-3xl md:text-5xl font-black text-[#C2B280]">69k</div>
        <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-white/50 mt-1 md:mt-4">{lang === 'ar' ? 'متر مربع' : 'SQM Area'}</div>
      </div>
      <div className="px-2">
        <div className="text-3xl md:text-5xl font-black text-[#C2B280]">$1M+</div>
        <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-white/50 mt-1 md:mt-4">{lang === 'ar' ? 'تكلفة الإنشاءات' : 'Structural Cost'}</div>
      </div>
      <div className="px-2">
        <div className="text-3xl md:text-5xl font-black text-[#C2B280]">90:2</div>
        <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-white/50 mt-1 md:mt-4">{lang === 'ar' ? 'نسبة المدارس' : 'School Gap'}</div>
      </div>
      <div className="px-2">
        <div className="text-3xl md:text-5xl font-black text-[#C2B280]">550ft</div>
        <div className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-white/50 mt-1 md:mt-4">{lang === 'ar' ? 'عمق البئر' : 'Well Depth'}</div>
      </div>
    </div>
  </div>
);

export const VisionSection: React.FC<SectionProps> = ({ lang, t, isRtl }) => (
  <section id="vision" className="py-16 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
    <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
      <div>
        <div className="flex items-center gap-4 mb-6 md:mb-10">
          <div className="h-1 md:h-2 w-12 md:w-20 bg-[#C2B280] rounded-full"></div>
          <span className="text-[#2D5A5A] font-black tracking-widest uppercase text-[10px] md:text-sm">
            {t.navAbout}
          </span>
        </div>
        <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 text-[#2D2D2D] leading-tight tracking-tight">{t.gapTitle}</h2>
        <div className="space-y-6 md:space-y-10 text-base md:text-xl text-gray-700 leading-relaxed">
          <p className="font-bold text-[#2D5A5A] border-l-4 md:border-l-8 border-[#C2B280] pl-6 md:pl-8 rtl:border-l-0 rtl:border-r-4 md:rtl:border-r-8 rtl:pr-6 md:rtl:pr-8 text-lg md:text-2xl">
            {t.aboutBody}
          </p>
          <p className="opacity-80 leading-relaxed">{t.gapBody}</p>
          <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col gap-4 md:gap-6">
             <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2D5A5A]/10 rounded-xl md:rounded-3xl flex items-center justify-center text-2xl md:text-4xl text-[#2D5A5A]">
                   <i className="ph ph-map-pin"></i>
                </div>
                <h4 className="font-black text-[#2D5A5A] text-base md:text-2xl leading-tight">{t.locationDetail}</h4>
             </div>
             <p className="text-[9px] md:text-sm font-black text-[#C2B280] md:px-20 opacity-70 tracking-widest" dir="ltr">{t.coords}</p>
          </div>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 md:-inset-6 bg-[#C2B280]/10 rounded-[2.5rem] md:rounded-[5rem] blur-[30px] md:blur-[80px] group-hover:bg-[#C2B280]/20 transition-all duration-1000"></div>
        <img 
          src={IMAGES.VISION_MAIN} 
          className="relative rounded-[2rem] md:rounded-[4rem] shadow-2xl w-full object-cover h-[350px] md:h-[700px] border border-white/20" 
          alt="Community Spirit" 
        />
        <div className="absolute -bottom-6 md:-bottom-10 -right-4 md:-right-10 bg-white p-5 md:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100 max-w-[220px] md:max-w-sm hidden sm:block">
           <div className="text-3xl md:text-4xl mb-3 md:mb-6 text-[#C2B280]">
              <i className="ph ph-house-line"></i>
           </div>
           <h4 className="font-black text-[#2D5A5A] mb-2 md:mb-4 text-base md:text-2xl">{isRtl ? 'خدمة المنطقة' : 'Serving the Area'}</h4>
           <p className="text-[11px] md:text-base text-gray-600 font-bold leading-relaxed">{isRtl ? 'المدرسة تخدم 4 محليات ذات كثافة سكانية عالية.' : 'The school serves 4 high-density localities.'}</p>
        </div>
      </div>
    </div>
  </section>
);

export const InfrastructureSection: React.FC<SectionProps> = ({ lang, t }) => (
  <section id="infrastructure" className="py-16 md:py-32 bg-[#f4f3ea] overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
        <h2 className="text-3xl md:text-7xl font-black mb-6 md:mb-10 text-[#2D5A5A] tracking-tighter">{t.progressTitle}</h2>
        <p className="text-base md:text-2xl text-gray-600 font-black leading-relaxed opacity-80">{t.progressIntro}</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        {PROGRESS.map((stage, idx) => (
          <div key={idx} className="bg-white rounded-[2.5rem] md:rounded-[4.5rem] overflow-hidden shadow-xl hover:shadow-inner transition-all border border-gray-100 flex flex-col group">
            <div className="h-44 md:h-80 relative overflow-hidden">
              <img 
                src={[IMAGES.INFRA_ACADEMIC, IMAGES.INFRA_WORKSHOP, IMAGES.INFRA_DORMITORY, IMAGES.INFRA_UTILITIES][idx]}
                alt={stage.title[lang]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-[#2D5A5A] text-white w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-[2rem] flex items-center justify-center font-black text-lg md:text-4xl shadow-2xl border border-white/20">
                {idx + 1}
              </div>
            </div>
            <div className="p-8 md:p-16 flex-1 flex flex-col">
              <h3 className="text-lg md:text-3xl font-black text-[#2D5A5A] mb-6 md:mb-10 group-hover:text-[#C2B280] transition-colors leading-tight">{stage.title[lang]}</h3>
              <ul className="space-y-3 md:space-y-6 flex-1">
                {stage.details[lang].map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 md:gap-6 text-[13px] md:text-lg text-gray-700 font-black leading-snug">
                    <span className="text-[#C2B280] font-black text-lg md:text-3xl mt-[-2px] md:mt-[-4px]">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CurriculumSection: React.FC<SectionProps> = ({ lang, t }) => (
  <section id="departments" className="py-16 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
    <div className="flex flex-col lg:flex-row justify-between items-center mb-16 md:mb-24 gap-12 md:gap-20">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 text-[#2D5A5A] tracking-tight">{t.curriculumTitle}</h2>
        <div className="bg-[#2D5A5A] text-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4.5rem] shadow-2xl relative overflow-hidden transform hover:-rotate-1 transition-transform group">
           <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 text-6xl md:text-[12rem] group-hover:scale-110 transition-transform">
              <i className="ph ph-bowl-food"></i>
           </div>
           <h4 className="text-2xl md:text-4xl font-black mb-4 md:mb-8 text-[#C2B280]">{t.foodProcessingTitle}</h4>
           <p className="text-base md:text-2xl opacity-90 leading-relaxed font-medium">
             {t.foodProcessingBody}
           </p>
        </div>
      </div>
      <div className="hidden lg:block">
         <div className="w-48 h-48 md:w-64 md:h-64 rounded-[4rem] md:rounded-[5rem] border-[12px] md:border-[16px] border-dashed border-[#C2B280]/20 animate-spin-slow flex items-center justify-center">
            <i className="ph ph-gear text-7xl text-[#C2B280]/20"></i>
         </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
      {DEPARTMENTS.map(dept => (
        <div key={dept.id} className="p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-white border-2 md:border-4 border-transparent hover:border-[#C2B280] transition-all hover:shadow-2xl hover:-translate-y-4 group shadow-lg flex flex-col items-center text-center">
          <div className="w-16 h-16 md:w-28 md:h-28 bg-[#FDFCF0] rounded-2xl md:rounded-[2.5rem] flex items-center justify-center text-4xl md:text-6xl mb-8 md:mb-12 group-hover:bg-[#2D5A5A] group-hover:text-white transition-colors group-hover:rotate-12 shadow-inner text-[#2D5A5A]">
            <i className={`ph ${dept.icon}`}></i>
          </div>
          <h3 className="text-base md:text-2xl font-black text-[#2D5A5A] group-hover:scale-105 transition-transform leading-tight">{dept.title[lang]}</h3>
          <div className="mt-4 md:mt-8 w-12 md:w-20 h-1 md:h-2 bg-[#C2B280] rounded-full opacity-20 group-hover:opacity-100 group-hover:w-32 transition-all"></div>
        </div>
      ))}
    </div>
  </section>
);

export const CommunitySection: React.FC<SectionProps> = ({ lang, t, isRtl }) => (
  <section id="community" className="py-16 md:py-32 bg-white px-6 overflow-hidden">
     <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-24">
        <div className="lg:w-1/2 relative w-full">
           <div className="grid grid-cols-2 gap-4 md:gap-6">
              <img src={IMAGES.COMMUNITY_1} className="rounded-[1.5rem] md:rounded-[3rem] shadow-xl transform -rotate-3 w-full border border-gray-100" alt="Community 1" />
              <img src={IMAGES.COMMUNITY_2} className="rounded-[1.5rem] md:rounded-[3rem] shadow-xl translate-y-8 md:translate-y-12 rotate-2 w-full border border-gray-100" alt="Community 2" />
           </div>
        </div>
        <div className="lg:w-1/2 w-full">
           <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="h-1 md:h-2 w-12 md:w-20 bg-[#C2B280] rounded-full"></div>
              <span className="text-[#2D5A5A] font-black tracking-widest uppercase text-[10px] md:text-sm">{t.navCommunity}</span>
           </div>
           <h2 className="text-3xl md:text-6xl font-black mb-8 md:mb-12 text-[#2D2D2D] leading-tight tracking-tight">{t.communityTitle}</h2>
           <p className="text-lg md:text-2xl text-gray-700 leading-relaxed font-bold opacity-80 mb-8 md:mb-10 italic">
              {t.communityBody}
           </p>
           <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-[1.5rem] md:rounded-[3rem] bg-[#C2B280]/10 border-2 border-dashed border-[#C2B280]/40">
                 <span className="text-3xl md:text-5xl text-[#C2B280]">
                    <i className="ph ph-users-three"></i>
                 </span>
                 <p className="text-sm md:text-lg font-black text-[#2D5A5A]">
                    {lang === 'ar' ? 'تم الشروع بالمشروع بمبادرة كريمة كمركز تدريب لكوادر التعليم الصناعي.' : 'Initiated as a training center for industrial education cadres.'}
                 </p>
              </div>
           </div>
        </div>
     </div>
  </section>
);
