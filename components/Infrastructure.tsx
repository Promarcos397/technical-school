import React from 'react';
import { NEWS_ITEMS, PROGRESS, IMAGES } from '../data/content';

interface InfrastructureProps {
    isRtl: boolean;
    t: any;
}

const Infrastructure: React.FC<InfrastructureProps> = ({ isRtl, t }) => {
    return (
        <section className="bg-slate-50 border-t-2 border-b-2 border-slate-900">
            <div className="grid lg:grid-cols-2 gap-0">

                {/* Update Log / News (Left Side) - Keeping as is often relevant */}
                <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-slate-300 bg-white">
                    <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest mb-8 inline-block">
                        {t.heroNewsLabel}
                    </span>

                    <h2 className="text-4xl font-black text-slate-900 uppercase mb-12 tracking-tighter">{t.progressTitle}</h2>

                    <div className="space-y-6">
                        {NEWS_ITEMS.map((item, idx) => (
                            <div key={idx} className="border-l-4 border-slate-900 pl-6 py-2">
                                <span className="font-mono text-xs text-slate-500 block mb-1">{item.date}</span>
                                <p className="font-bold text-slate-900 text-lg leading-tight uppercase">
                                    {isRtl ? item.text.ar : item.text.en}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Construction Phases (Right Side) - NEW: Using PROGRESS data */}
                <div className="bg-slate-100 p-12 md:p-16 overflow-y-auto max-h-[800px]">
                    <span className="font-mono text-xs text-slate-500 mb-8 block uppercase tracking-widest">// DETAILED PHASES</span>

                    <div className="space-y-12">
                        {PROGRESS.map((stage, idx) => (
                            <div key={idx} className="relative">
                                {/* Connector Line */}
                                {idx !== PROGRESS.length - 1 && (
                                    <div className="absolute left-[11px] top-8 bottom-[-48px] w-0.5 bg-slate-300"></div>
                                )}

                                <div className="flex gap-6 items-start">
                                    <div className="w-6 h-6 rounded-full bg-slate-900 shrink-0 mt-1 border-4 border-slate-200"></div>
                                    <div>
                                        <h3 className="text-xl font-black text-slate-900 uppercase mb-4 leading-tight">
                                            {isRtl ? stage.title.ar : stage.title.en}
                                        </h3>
                                        <ul className="space-y-2">
                                            {(isRtl ? stage.details.ar : stage.details.en).map((detail, dIdx) => (
                                                <li key={dIdx} className="text-sm font-mono text-slate-600 flex items-start gap-2">
                                                    <span className="text-slate-400 select-none">-</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-slate-300">
                        <p className="text-sm font-bold text-slate-900 mb-4 uppercase">{t.ctaTitle}</p>
                        <a href="#contact" className="inline-block px-6 py-3 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest hover:bg-slate-700 transition-colors">
                            {t.supportBtn}
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Infrastructure;
