import React from 'react';

interface AboutProps {
    isRtl: boolean;
    t: any;
}

const About: React.FC<AboutProps> = ({ isRtl, t }) => {
    return (
        <section id="about" className="py-24 bg-white border-b-2 border-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Main Vision */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase leading-none tracking-tighter">
                            {t.aboutTitle}
                        </h2>

                        {/* Founder Spotlight */}
                        <div className="mb-8 p-6 border-l-4 border-slate-900 bg-slate-50">
                            <span className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">// INITIATIVE BY</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Adip Ibrahim Yosef Al-Hajri</h3>
                            <p className="text-sm text-slate-600 font-mono">Kuwait</p>
                        </div>

                        <p className="text-xl md:text-2xl font-bold text-slate-800 mb-8 leading-tight">
                            {t.aboutBody}
                        </p>
                        <p className="text-slate-600 border-l-2 border-slate-900 pl-4">
                            {t.aboutAdditional}
                        </p>
                    </div>

                    {/* Goals Grid */}
                    <div className="grid gap-0 border-t border-l border-slate-200">
                        <div className="p-8 border-b border-r border-slate-200 hover:bg-slate-50 transition-colors">
                            <h3 className="text-xl font-black text-slate-900 uppercase mb-4">{t.gapTitle}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{t.gapBody}</p>
                        </div>
                        <div className="p-8 border-b border-r border-slate-200 hover:bg-slate-50 transition-colors">
                            <h3 className="text-xl font-black text-slate-900 uppercase mb-4">{t.communityTitle}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">{t.communityBody}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
