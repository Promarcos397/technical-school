import React from 'react';
import { DEPARTMENTS } from '../data/content';
import * as PhosphorIcons from '@phosphor-icons/react';

interface ContentProps {
    isRtl: boolean;
    t: any;
}

const Content: React.FC<ContentProps> = ({ isRtl, t }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <>
            {/* Programs Grid */}
            <section id="programs" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex items-end justify-between mb-12 border-b-2 border-slate-900 pb-4">
                        <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">{t.curriculumTitle}</h2>
                        <span className="font-mono text-slate-500 hidden md:block text-xs">// DEPARTMENTS</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
                        {DEPARTMENTS.slice(0, isExpanded ? undefined : 4).map((dept, idx) => {
                            // @ts-ignore
                            const Icon = PhosphorIcons[dept.icon.replace('ph-', '').split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')] || PhosphorIcons.Wrench;
                            const description = isRtl ? dept.description?.ar : dept.description?.en;

                            return (
                                <div key={idx} className="flex flex-col p-8 border-r border-b border-slate-200 hover:bg-slate-50 transition-colors group cursor-default">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="text-slate-900 group-hover:scale-110 transition-transform duration-300">
                                            <Icon size={40} weight="regular" />
                                        </div>
                                        <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-tight">{isRtl ? dept.title.ar : dept.title.en}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                        {description || (isRtl ? 'تدريب شامل ومكثف.' : 'Comprehensive training.')}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile Toggle Button */}
                    <div className="md:hidden mt-8 text-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="bg-slate-900 text-white px-8 py-3 uppercase font-bold tracking-widest text-xs hover:bg-slate-800 transition-colors"
                        >
                            {isExpanded ? (isRtl ? 'عرض أقل' : 'View Less') : (isRtl ? 'عرض المزيد' : 'View All')}
                        </button>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Content;
