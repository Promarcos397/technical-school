
import { Department, ProgressStage } from './types';

export const COLORS = {
  primary: '#2D5A5A', 
  secondary: '#C2B280', 
  accent: '#71797E', 
  background: '#FDFCF0', 
};

/**
 * IMAGE KEYS FOR THE USER:
 * Please provide the direct links for these keys.
 */
export const IMAGES = {
  HERO_BG: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000",
  VISION_MAIN: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1400",
  INFRA_ACADEMIC: "https://images.unsplash.com/photo-1503387762-592dea58ef23",
  INFRA_WORKSHOP: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
  INFRA_DORMITORY: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
  INFRA_UTILITIES: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
  COMMUNITY_1: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800",
  COMMUNITY_2: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
  COORD_AVATAR: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
};

export const DEPARTMENTS: Department[] = [
  { id: 'elec', title: { en: 'General Electricity', ar: 'قسم الكهرباء العامة' }, icon: 'ph-lightning' },
  { id: 'auto', title: { en: 'Automotive Mechanics', ar: 'قسم ميكانيكا السيارات' }, icon: 'ph-car' },
  { id: 'prod', title: { en: 'Production Mechanics (Lathe)', ar: 'قسم ميكانيكا انتاج (الخراطة)' }, icon: 'ph-wrench' },
  { id: 'cool', title: { en: 'Refrigeration & A/C Engineering', ar: 'قسم هندسة التبريد والتكييف' }, icon: 'ph-snowflake' },
  { id: 'arch', title: { en: 'Architectural Engineering', ar: 'قسم الهندسة المعمارية' }, icon: 'ph-blueprint' },
  { id: 'sanit', title: { en: 'Sanitary Engineering (Plumbing)', ar: 'قسم الهندسة الصحية' }, icon: 'ph-drop' },
  { id: 'comp', title: { en: 'Computer Science', ar: 'قسم الحاسوب' }, icon: 'ph-desktop' },
  { id: 'food', title: { en: 'Food Processing & Rural Industry', ar: 'قسم التصنيع الغذائي والصناعات التحويلية الريفية' }, icon: 'ph-bowl-food' },
];

export const PROGRESS: ProgressStage[] = [
  {
    title: { en: 'Main Academic Building', ar: 'المبنى الأكاديمي الرئيسي' },
    details: {
      en: [
        'Total footprint: 750 sqm (Ground + 2 stories foundation)',
        'Status: Ground and First floors completed',
        'Includes 6 lecture halls (12x6m)',
        '4 high-tech laboratories (10x6m)',
        'Administrative suite and faculty offices',
        'Built by: Al-Fadel Contracting Co.',
        'Supervision: Islamic Call Organization'
      ],
      ar: [
        'المساحة: 750 متر مربع (تأسيس أرضي + طابقين)',
        'الوضع: اكتمل الطابق الأرضي والأول بالكامل',
        'يضم 6 قاعات محاضرات (12×6 متر)',
        '4 معامل تقنية متخصصة (10×6 متر)',
        'مكاتب إدارية وغرف لهيئة التدريس',
        'المنفذ: شركة الفاضل للمقاولات',
        'الإشراف: منظمة الدعوة الإسلامية'
      ]
    }
  },
  {
    title: { en: 'Industrial Training Workshops', ar: 'ورش التدريب الصناعي (الجملونات)' },
    details: {
      en: [
        'Two massive hangars (40x15m each)',
        'Teacher offices, equipment stores, and theory halls in each unit',
        'Expansive central hall for practical heavy machinery training',
        'Contractor: Amlak Engineering Co.',
        'Consultant: Al-Mak Engineering'
      ],
      ar: [
        'جملونين ضخمين بمساحة 40×15 متر للواحد',
        'يضم كل واحد مكتب معلم، مخزن معدات، وقاعة دراسة نظرية',
        'صالة مركزية كبرى للتدريب العملي والميداني',
        'المنفذ: شركة أملاك الهندسية',
        'الاستشاري: المك الهندسية'
      ]
    }
  },
  {
    title: { en: 'Dormitories & Residential Wings', ar: 'الداخليات وإستراحة الزوار' },
    details: {
      en: [
        'Student residential tower (40x25m) founded for 3 floors',
        'VIP Guesthouse with dual wings and private kitchen',
        'Guard residence (Room + Kitchen + Bathroom)',
        'Contractor: Amlak Engineering Co.',
        'Designed to house students from all 4 surrounding localities'
      ],
      ar: [
        'برج الداخليات بمساحة 40×25 متر (تأسيس 3 طوابق)',
        'إستراحة كبار الزوار بجناحين ومطبخ مشترك ومنافع خاصة',
        'سكن الخفير المناوب (غرفة، مطبخ، دورة مياه)',
        'المنفذ: شركة أملاك الهندسية',
        'مصممة لاستيعاب الطلاب من المحليات الأربع المجاورة'
      ]
    }
  },
  {
    title: { en: 'Solar Water Station & Utilities', ar: 'محطة المياه والطاقة الشمسية' },
    details: {
      en: [
        'Artesian well drilled to 550 feet depth',
        '11,000-gallon storage tank',
        'Powered entirely by renewable solar energy',
        'Comprehensive sanitation network (Siphon & Septic)',
        'Implementation: Abdul Majeed Ibrahim Qurashi'
      ],
      ar: [
        'بئر ارتوازي بعمق 550 قدم',
        'صهريج مياه سعة 11 ألف جالون',
        'تعمل بالكامل بالطاقة الشمسية المتجددة',
        'شبكة صرف صحي متكاملة (بئر سايفون وسب تنك)',
        'التنفيذ: عبدالمجيد ابراهيم قرشي'
      ]
    }
  }
];

export const DICTIONARY = {
  en: {
    navHome: 'Home',
    navAbout: 'The Vision',
    navInfrastructure: 'Construction',
    navCurriculum: 'Curriculum',
    navCommunity: 'Impact',
    navContact: 'Support',
    heroTitle: 'Adeeb Al-Hajri Technical School',
    heroSubtitle: 'A Pioneering Center for Vocational Excellence in Northern Sudan',
    heroLocation: 'Shabtout Village - Al-Qawlad Locality',
    heroCTA: 'Partner With Us',
    aboutTitle: 'About the School',
    aboutBody: 'Established by the generous endowment of Mr. Adeeb Ibrahim Yousef Al-Hajri (Kuwait), this institution aims to serve as a national reference for technical education in Sudan. It is designed to bridge the gap between academic theory and vocational mastery.',
    gapTitle: 'Why Technical Education?',
    gapBody: 'While Northern State has 90 academic schools, it has only 2 technical facilities. This disparity limits the economic prospects of youth. Our school provides "Skills in Hand" to fight poverty and support national development projects.',
    coords: 'Coordinates: 18°34\'38" N, 30°33\'29" E',
    locationDetail: 'Located on the Northern Artery Road (Km 419), 90km south of Dongola. Serving a high-density population area.',
    curriculumTitle: 'Academic Curriculum',
    foodProcessingTitle: 'Food Processing & Local Economy',
    foodProcessingBody: 'This unique department focuses on the regions rich agricultural output (Dates, Mangoes, Tomatoes). Students learn packaging and preservation, enabling local farmers to market their produce year-round and improve livelihoods.',
    communityTitle: 'Community & Heritage',
    communityBody: 'Shabtout is a vibrant village 10km from Al-Qawlad. The school is a source of pride for the locals, who celebrated its foundation with traditional ceremonies (Karama), symbolizing the union between donors and the community.',
    progressTitle: 'Construction Status',
    progressIntro: 'Infrastructure costs have exceeded $1,000,000 USD. We have reached the final stage and are now focusing on furnishing and workshop equipment.',
    contactTitle: 'Direct Contact',
    contactCoord: 'Hassan Mohamed Hamad Tongilab',
    contactRole: 'Volunteer Coordinator',
    contactInstruction: 'For official verification, please contact the Ministry of Education in Dongola or use the details below:',
    ctaTitle: 'Help Us Open the Doors',
    ctaText: 'The buildings are standing. We now invite government agencies, NGOs, and individuals to help furnish the classrooms and equip the workshops with tools and machinery.',
    supportBtn: 'Contribute Now',
    btnToggle: 'العربية',
    footerQuickLinks: 'Quick Links',
    footerCopyright: '© 2025 Adeeb Al-Hajri Technical School. All Rights Reserved.'
  },
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'الرؤية',
    navInfrastructure: 'سير العمل',
    navCurriculum: 'التخصصات',
    navCommunity: 'المجتمع',
    navContact: 'المساهمة',
    heroTitle: 'مدرسة أديب الهاجري الفنية',
    heroSubtitle: 'نقطة تحول استراتيجية في مستقبل التعليم الفني بالسودان',
    heroLocation: 'قرية شبتوت - محلية القولد',
    heroCTA: 'ساهم في التجهيز',
    aboutTitle: 'نبذة عن المدرسة',
    aboutBody: 'بمبادرة كريمة وتمويل من السيد أديب إبراهيم يوسف الهاجري (دولة الكويت)، تم تشييد هذا الصرح وفق أحدث المواصفات ليكون مركزاً لتدريب الكوادر الصناعية ومرجعاً وطنياً للتعليم الفني بالبلاد.',
    gapTitle: 'لماذا التعليم الفني؟',
    gapBody: 'توجد بالولاية الشمالية 90 مدرسة أكاديمية مقابل مدرستين فنيتين فقط. هذا المشروع يسد هذه الفجوة الكبيرة ويمنح الشباب "مهنة في اليد" لتحسين ظروفهم المعيشية ودعم مسيرة التنمية.',
    coords: 'الإحداثيات: 18"34"18 N | 29"33"30 E',
    locationDetail: 'الموقع: طريق شريان الشمال (الكيلو 419)، 90 كلم جنوب دنقلا. تخدم 4 محليات ذات كثافة سكانية عالية.',
    curriculumTitle: 'أقسام المنهج الدراسي',
    foodProcessingTitle: 'التصنيع الغذائي وخدمة المنطقة',
    foodProcessingBody: 'يختص هذا القسم بتدريب الخريجين من أبناء المنطقة على تغليف وحفظ التمور والمانجو والمنتجات الزراعية، مما يتيح حفظها لمواسم الندرة وترحيلها لمناطق الاستهلاك، وهو ما يعد خدمة اجتماعية كبرى.',
    communityTitle: 'المجتمع والانتماء',
    communityBody: 'شبتوت إحدى قرى محلية القولد العريقة. يحظى المشروع بدعم مجتمعي واسع، وقد شهدت مراحل البناء احتفالات "الكرامة" بحضور أعيان المنطقة تعبيراً عن الفرح بهذا المنجز التعليمي الكبير.',
    progressTitle: 'مراحل سير العمل',
    progressIntro: 'تجاوزت تكلفة الإنشاءات مليون دولار أمريكي. اكتملت معظم المباني والبنى التحتية، ونحن الآن بصدد دعوة الجميع للمساهمة في تأثيث المدرسة وتجهيز الورش.',
    contactTitle: 'تواصل معنا',
    contactCoord: 'حسن محمد حمد تنجلاب',
    contactRole: 'المنسق الطوعي للمشروع',
    contactInstruction: 'للاستفسار الرسمي يرجى مراجعة وزارة التربية والتعليم بدنقلا أو التواصل مع المنسق مباشرة:',
    ctaTitle: 'ساهم في إكمال الصرح',
    ctaText: 'المباني قائمة والحمد لله، ونناشد كل الجهات الخيرية والأفراد للمساهمة الفاعلة في توفير الأصول المنقولة ومعدات الورش لبدء المسيرة التعليمية.',
    supportBtn: 'تواصل للمساهمة',
    btnToggle: 'English',
    footerQuickLinks: 'روابط سريعة',
    footerCopyright: '© 2025 مدرسة أديب الهاجري الفنية. جميع الحقوق محفوظة.'
  }
};
