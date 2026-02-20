import React from 'react';
import { IMAGES } from '../data/images'; // Ensure this uses hero-image.svg or whatever implies "hero"

interface HeroProps {
    t: any;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-slate-900 border-b-2 border-black overflow-hidden">

            {/* Background Graphic - Darkened Image */}
            <div className="absolute inset-0 z-0 bg-black">
                <img src={IMAGES.HERO_BG} className="w-full h-full object-cover opacity-50 grayscale" alt="Background" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
                        {t.heroTitle}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mb-12 leading-relaxed border-l-4 border-white pl-6">
                        {t.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 items-start">
                        <a href="#contact" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-slate-200 transition-colors border border-white text-center">
                            {t.heroCTA}
                        </a>
                        <a href="#programs" className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border border-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-center">
                            {t.navCurriculum}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
