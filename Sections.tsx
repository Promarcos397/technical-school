import React from 'react';
import { IMAGES, DEPARTMENTS, PROGRESS } from './constants';
import {
  Users, Handshake, Buildings, Wrench,
  Phone, Envelope, MapPin, ArrowRight
} from '@phosphor-icons/react';

// --- Shared Components ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">{children}</h2>
);

const SectionSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-slate-600 mb-8 max-w-2xl">{children}</p>
);

// --- Stats Bar ---
export const StatsBar: React.FC<{ isRtl: boolean; t: any }> = ({ t }) => (
  <div className="bg-primary text-white py-12 relative z-20">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-white/10 rtl:divide-x-reverse">
        {[
          { icon: Users, val: '500+', label: t.statStudents },
          { icon: Buildings, val: '8', label: t.statDepts },
          { icon: Handshake, val: '100%', label: t.statJobReady },
          { icon: Wrench, val: '12', label: t.statWorkshops },
        ].map((s, i) => (
          <div key={i} className="p-2 group">
            <div className="mb-3 flex justify-center">
              <s.icon size={40} className="text-secondary opacity-90" weight="duotone" />
            </div>
            <div className="text-3xl font-bold mb-1 tracking-tight">{s.val}</div>
            <div className="text-sm text-white/70 font-medium uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Vision Section ---
export const VisionSection: React.FC<{ isRtl: boolean; t: any }> = ({ isRtl, t }) => (
  <section id="vision" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle>{t.aboutTitle}</SectionTitle>
          <SectionSubtitle>{t.aboutBody}</SectionSubtitle>

          <div className="grid gap-6 mt-8">
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-primary font-bold">01</div>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{t.gapTitle}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.gapBody}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-secondary font-bold">02</div>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-1">{t.communityTitle}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.communityBody}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-primary/5 transform rotate-3 rounded-2xl transition-transform group-hover:rotate-1"></div>
          <img
            src={IMAGES.VISION_CONSTRUCTION}
            alt="School Construction Vision"
            className="relative w-full h-[400px] object-cover rounded-2xl shadow-xl z-10"
          />
          <div className={`absolute -bottom-6 ${isRtl ? '-right-6' : '-left-6'} bg-white p-6 rounded-xl shadow-lg border border-slate-100 z-20 max-w-xs`}>
            <div className="flex items-center gap-2 text-secondary mb-2">
              <MapPin weight="fill" />
              <span className="text-xs font-bold uppercase">{isRtl ? 'الموقع' : 'Location'}</span>
            </div>
            <p className="text-sm text-slate-700 font-medium">{t.aboutAdditional}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Infrastructure Section ---
export const InfrastructureSection: React.FC<{ isRtl: boolean; t: any }> = ({ isRtl, t }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const activeStage = PROGRESS[activeTab];

  // Map tabs to content
  const renderMedia = () => {
    // Logic: 
    // Tab 0 (Main Building) -> Construction Video
    // Tab 3 (Water Station) -> Water Station Video
    // Others -> Static Image
    if (activeTab === 0) {
      return (
        <video controls preload="metadata" className="w-full h-full object-cover">
          <source src={IMAGES.VIDEO_CONSTRUCTION} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    if (activeTab === 3) {
      return (
        <video controls preload="metadata" className="w-full h-full object-cover">
          <source src={IMAGES.VIDEO_WATER_STATION} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    // Default image fallback
    let imageSrc = IMAGES.MAIN_BUILDING;
    if (activeTab === 1) imageSrc = IMAGES.WORKSHOP_HANGARS;
    if (activeTab === 2) imageSrc = IMAGES.BUILDING_INTERIOR; // Dorms usually interior or specific

    return (
      <img
        src={imageSrc}
        className="w-full h-full object-cover"
        alt="Project Milestone"
      />
    );
  };

  return (
    <section id="infrastructure" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle>{t.progressTitle}</SectionTitle>
          <SectionSubtitle>{t.progressIntro}</SectionSubtitle>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {PROGRESS.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === idx
                ? 'bg-primary text-white shadow-lg transform -translate-y-1'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-primary/50'
                }`}
            >
              {isRtl ? stage.title.ar : stage.title.en}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary mb-6 border-b border-slate-100 pb-4">
                {isRtl ? activeStage.title.ar : activeStage.title.en}
              </h3>
              <ul className="space-y-4">
                {(isRtl ? activeStage.details.ar : activeStage.details.en).map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 text-secondary text-xs font-bold mt-0.5">
                      {i + 1}
                    </div>
                    <span className="leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 h-[400px] lg:h-auto relative">
              {renderMedia()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Curriculum Section ---
export const CurriculumSection: React.FC<{ isRtl: boolean; t: any }> = ({ isRtl, t }) => (
  <section id="curriculum" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <SectionTitle>{t.curriculumTitle}</SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <SectionSubtitle>{t.foodProcessingBody}</SectionSubtitle>
          <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl text-primary">
              <Users />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4 relative z-10">{t.foodProcessingTitle}</h3>
            <p className="text-slate-600 relative z-10 mb-6">{t.foodProcessingBody}</p>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {['Dates', 'Mangoes', 'Packaging'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-secondary">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  {isRtl ? 'منتجات محلية' : item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 content-start">
          {DEPARTMENTS.slice(0, 6).map((dept) => (
            <div key={dept.id} className="bg-white border border-slate-200 p-6 text-center hover:border-secondary hover:shadow-lg transition-all rounded-xl group">
              <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-primary mb-3 group-hover:bg-secondary group-hover:text-white transition-colors">
                {/* Icons would ideally map here, using generic for now */}
                <Wrench size={20} weight="fill" />
              </div>
              <h3 className="font-medium text-primary text-sm">{isRtl ? dept.title.ar : dept.title.en}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Community Section ---
export const CommunitySection: React.FC<{ isRtl: boolean; t: any }> = ({ isRtl, t }) => (
  <section id="community" className="py-20 bg-slate-50 border-y border-slate-200">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-secondary/10 transform rotate-3 rounded-3xl"></div>
          <img
            src={IMAGES.KARAMA_CEREMONY}
            alt="Community Ceremony"
            className="relative rounded-3xl shadow-xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
            <p className="text-sm font-medium text-slate-600 italic">"{t.communityBody}"</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionTitle>{t.communityTitle}</SectionTitle>
          <div className="space-y-8 mt-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary border border-slate-100 shadow-sm shrink-0">
                <Users size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">{t.impactTitle}</h3>
                <ul className="mt-2 space-y-2 text-slate-600">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>{t.impactGraduates}</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>{t.impactEconomy}</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>{t.impactCommunity}</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary border border-slate-100 shadow-sm shrink-0">
                <Handshake size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary">{t.donorTitle}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed text-sm">
                  {t.donorBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Support CTA ---
export const SupportCTA: React.FC<{ isRtl: boolean; t: any }> = ({ t }) => (
  <section className="py-24 bg-primary text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/images/school-inside.jpg')] opacity-10 bg-cover bg-fixed"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{t.ctaTitle}</h2>
      <p className="text-white/80 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">{t.ctaText}</p>

      <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
        {[t.needEquipment, t.needFurniture, t.needTools, t.needComputers].map((need, i) => (
          <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="text-secondary font-bold text-lg mb-1">0{i + 1}</div>
            <div className="text-sm font-medium">{need}</div>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-4 font-bold rounded-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-orange-900/20"
      >
        {t.supportBtn} <ArrowRight size={20} weight="bold" />
      </a>
    </div>
  </section>
);

// --- Contact Section ---
export const Contact: React.FC<{ isRtl: boolean; t: any }> = ({ isRtl, t }) => (
  <section id="contact" className="py-16 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <SectionTitle>{t.contactTitle}</SectionTitle>
          <SectionSubtitle>{t.contactInstruction}</SectionSubtitle>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white border border-slate-200">
              <Users size={24} className="text-secondary" />
              <div>
                <div className="text-xs text-slate-500 uppercase">{t.contactRole}</div>
                <div className="font-medium text-primary">{t.contactCoord}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white border border-slate-200">
              <Phone size={24} className="text-secondary" />
              <div>
                <div className="text-xs text-slate-500 uppercase">{t.phone}</div>
                <div dir="ltr" className="font-medium text-primary">{t.realPhone}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white border border-slate-200">
              <Envelope size={24} className="text-secondary" />
              <div>
                <div className="text-xs text-slate-500 uppercase">{t.email}</div>
                <div className="font-medium text-primary">{t.realEmail}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="w-full p-3 border border-slate-300 focus:border-secondary focus:outline-none"
                placeholder={t.contactName}
              />
              <input
                className="w-full p-3 border border-slate-300 focus:border-secondary focus:outline-none"
                placeholder={t.contactEmail}
              />
            </div>
            <input
              className="w-full p-3 border border-slate-300 focus:border-secondary focus:outline-none"
              placeholder={t.contactSubject}
            />
            <textarea
              rows={4}
              className="w-full p-3 border border-slate-300 focus:border-secondary focus:outline-none"
              placeholder={t.contactMessage}
            />
            <button className="w-full bg-secondary text-white py-3 font-medium hover:bg-orange-600 transition-colors">
              {t.contactSend}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// --- Footer ---
export const Footer: React.FC<{ isRtl: boolean; t: any }> = ({ isRtl, t }) => (
  <footer className="bg-primary text-white py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/20">
        <div>
          <h3 className="font-bold text-lg mb-4">{t.brandName}</h3>
          <p className="text-sm text-white/70">{t.brandSubtitle}</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">{isRtl ? 'روابط سريعة' : 'Quick Links'}</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#vision" className="hover:text-secondary">{t.navAbout}</a></li>
            <li><a href="#infrastructure" className="hover:text-secondary">{t.navInfrastructure}</a></li>
            <li><a href="#curriculum" className="hover:text-secondary">{t.navCurriculum}</a></li>
            <li><a href="#contact" className="hover:text-secondary">{t.navContact}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">{t.contactTitle}</h3>
          <div className="text-sm text-white/70 space-y-2">
            <p dir="ltr">{t.realPhone}</p>
            <p>{t.realEmail}</p>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-white/50">
        © {new Date().getFullYear()} {t.brandName}. {t.footerRights}
      </div>
    </div>
  </footer>
);
