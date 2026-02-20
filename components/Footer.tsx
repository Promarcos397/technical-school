import React from 'react';

interface FooterProps {
    t: any;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
    return (
        <footer className="bg-white border-t-2 border-slate-900 py-12 text-center">
            <div className="container mx-auto px-6">
                <div className="inline-block border border-slate-200 px-4 py-1 mb-4">
                    <p className="text-slate-900 text-xs font-bold uppercase tracking-widest">{t.brandName}</p>
                </div>
                <p className="text-slate-500 text-xs font-mono">
                    © {new Date().getFullYear()} {t.footerRights}. {t.footerCopyright}.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
