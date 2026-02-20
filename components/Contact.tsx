import React from 'react';

interface ContactProps {
    t: any;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
    return (
        <section id="contact" className="py-24 bg-slate-900 text-white border-t-8 border-black">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-0 border border-slate-700">

                    {/* Contact Data */}
                    <div className="p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-slate-700">
                        <span className="font-mono text-slate-500 mb-6 block">// INQUIRIES</span>
                        <h2 className="text-5xl font-black mb-12 uppercase tracking-tighter">{t.contactTitle}</h2>

                        <div className="space-y-8 font-mono">
                            <div className="border-l-2 border-slate-500 pl-6">
                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">{t.contactRole}</div>
                                <div className="text-xl font-bold text-white uppercase">{t.contactCoord}</div>
                            </div>

                            <div className="border-l-2 border-slate-500 pl-6">
                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">{t.phone}</div>
                                <a href={`tel:${t.realPhone}`} className="text-2xl text-white hover:text-slate-300 hover:underline decoration-2 underline-offset-4" dir="ltr">
                                    {t.realPhone}
                                </a>
                            </div>

                            <div className="border-l-2 border-slate-500 pl-6 w-full overflow-hidden">
                                <div className="text-xs text-slate-500 uppercase tracking-widest mb-2">{t.email}</div>
                                <a href={`mailto:${t.realEmail}`} className="text-lg text-white hover:text-slate-300 hover:underline decoration-2 underline-offset-4 break-words block">
                                    {t.realEmail}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Area */}
                    <div className="relative h-[500px] lg:h-auto bg-slate-800 p-4">
                        <div className="h-full w-full bg-slate-900 border border-slate-700 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3725.968862803364!2d30.555866999999996!3d18.577222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM0JzM4LjAiTiAzMMKwMzMnMjkuMCJF!5e1!3m2!1sen!2s!4v1737920000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>

                            <div className="absolute top-0 right-0 bg-black text-white px-4 py-2 font-mono text-xs border-l border-b border-slate-700">
                                LAT: 18.5772 | LON: 30.5558
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
