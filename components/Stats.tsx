import React from 'react';

interface StatsProps {
    t: any;
}

const Stats: React.FC<StatsProps> = ({ t }) => {
    return (
        <section className="bg-black text-white py-12 border-b-2 border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">

                    <div className="flex flex-col items-center justify-center p-4 border border-slate-800 hover:bg-slate-900 transition-colors">
                        <span className="text-4xl md:text-5xl font-black tracking-tighter block mb-2">69K</span>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{t.statStudents}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 border border-slate-800 hover:bg-slate-900 transition-colors">
                        <span className="text-4xl md:text-5xl font-black tracking-tighter block mb-2">8</span>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{t.statDepts}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 border border-slate-800 hover:bg-slate-900 transition-colors">
                        <span className="text-4xl md:text-5xl font-black tracking-tighter block mb-2">4</span>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{t.statJobReady}</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-4 border border-slate-800 hover:bg-slate-900 transition-colors">
                        <span className="text-4xl md:text-5xl font-black tracking-tighter block mb-2">3</span>
                        <span className="text-xs text-slate-500 uppercase tracking-widest">{t.progressTitle.split(' ')[0] || 'PHASES'}</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
