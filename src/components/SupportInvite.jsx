import React from 'react';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Homepage-only section inviting institutions/partners to download the
// detailed engineering & financial file. Lives once on the homepage —
// intentionally NOT part of the global footer.
// NOTE: deliberately NOT named "PartnerBanner" — words like "banner"/"partner"
// in the module URL get blocked by ad blockers in dev (ERR_BLOCKED_BY_CLIENT).
const SupportInvite = () => {
    const { t } = useTranslation();

    return (
        <section id="support" className="scroll-mt-20 bg-paper/80 py-10 px-4 sm:px-6 lg:px-8 border-y border-stone-200/50 flex flex-col items-center justify-center gap-4">
            <p className="text-coal font-bold text-lg text-center">
                {t('footer.partnerBannerTitle', 'للمؤسسات والشركاء: تحميل الملف الهندسي والمالي المفصل')}
            </p>
            <button className="flex items-center gap-2 bg-stone-800 text-white hover:bg-coal px-6 py-3 rounded-lg font-bold text-sm transition-colors shadow-md">
                <FileText className="w-5 h-5" />
                <span>{t('footer.downloadPdf', 'تنزيل الملف (PDF)')}</span>
            </button>
        </section>
    );
};

export default SupportInvite;
