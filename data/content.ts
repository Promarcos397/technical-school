import { Department, ProgressStage } from '../types';

export const COLORS = {
    primary: '#0f172a',   // Slate 900
    secondary: '#ea580c', // Orange 600 (Safety Orange)
    accent: '#334155',    // Slate 700
    background: '#f8fafc', // Slate 50
};

export const IMAGES = {
    HERO_BG: "/images/hero-image.svg",
    VISION_CONSTRUCTION: "/images/school-img-07.webp",
    MAIN_BUILDING: "/images/white-building-under-construction-exterior.jpg",
    WORKSHOP_HANGARS: "/images/workshops.jpg",
    BUILDING_INTERIOR: "/images/school-inside.jpg",
    FOUNDATION_WORK: "/images/school-img-11.webp",
    KARAMA_CEREMONY: "/images/camel-slayed.png",
    COMMUNITY_INVOLVEMENT: "/images/school-img-13.webp",
    VIDEO_CONSTRUCTION: "/images/construction-progress.mp4",
    VIDEO_WATER_STATION: "/images/water-station.mp4",
    VIDEO_SOLAR_STATION: "/images/solar-water-station.mp4",
    LOGO: "/images/logo.png"
};

export const NEWS_ITEMS = [
    {
        text: { en: "Main Building Concrete Skeleton 100% Complete", ar: "اكتمل الهيكل الخرساني للمبنى الرئيسي بنسبة 100%" },
        date: "2025-05-15"
    },
    {
        text: { en: "Solar Water Station Fully Operational (11k Gallons)", ar: "تشغيل محطة المياه بالطاقة الشمسية (سعة 11 ألف جالون)" },
        date: "2025-04-20"
    },
    {
        text: { en: "Artesian Well Drilled to 550ft Depth", ar: "اكتمال حفر البئر الارتوازي بعمق 550 قدم" },
        date: "2025-03-10"
    },
    {
        text: { en: "Equipment & Furnishing Phase Begins - Donate Now", ar: "انطلاق مرحلة التجهيز وتأثيث الورش - ساهم معنا" },
        date: "Now"
    }
];

export const DEPARTMENTS: Department[] = [
    {
        id: 'elec',
        title: { en: 'General Electricity', ar: 'الكهرباء العامة' },
        description: { en: 'Wiring and power systems.', ar: 'التمديدات والأنظمة الكهربائية.' },
        icon: 'ph-lightning'
    },
    {
        id: 'auto',
        title: { en: 'Automotive Mechanics', ar: 'ميكانيكا السيارات' },
        description: { en: 'Engine repair and diagnostics.', ar: 'صيانة وتشخيص أعطال السيارات.' },
        icon: 'ph-car'
    },
    {
        id: 'prod',
        title: { en: 'Production Mechanics (Lathe)', ar: 'ميكانيكا الإنتاج (الخراطة)' },
        description: { en: 'Machining and metalworking.', ar: 'تشغيل المعادن والمخارط.' },
        icon: 'ph-wrench'
    },
    {
        id: 'cool',
        title: { en: 'Refrigeration & A/C Engineering', ar: 'هندسة التبريد والتكييف' },
        description: { en: 'HVAC installation and repair.', ar: 'تركيب وصيانة التكييف والتبريد.' },
        icon: 'ph-snowflake'
    },
    {
        id: 'arch',
        title: { en: 'Architecture', ar: 'الهندسة المعمارية' },
        description: { en: 'Building design and drafting.', ar: 'التصميم والرسم المعماري.' },
        icon: 'ph-blueprint'
    },
    {
        id: 'sanit',
        title: { en: 'Sanitary Engineering (Plumbing)', ar: 'الهندسة الصحية (السباكة)' },
        description: { en: 'Plumbing and water systems.', ar: 'السباكة وأنظمة المياه والصرف.' },
        icon: 'ph-drop'
    },
    {
        id: 'comp',
        title: { en: 'Computer Science', ar: 'علوم الحاسوب' },
        description: { en: 'Software and hardware basics.', ar: 'أساسيات البرمجيات والعتاد.' },
        icon: 'ph-desktop'
    },
    {
        id: 'food',
        title: { en: 'Food Processing & Rural Industries', ar: 'التصنيع الغذائي والصناعات التحويلية الريفية' },
        description: { en: 'Food preservation technology.', ar: 'تقنيات حفظ وتصنيع الأغذية.' },
        icon: 'ph-bowl-food'
    },
];

export const PROGRESS: ProgressStage[] = [
    {
        title: { en: 'Main Academic Building (Phase 1)', ar: 'المرحلة الأولى: المبنى الرئيسي' },
        details: {
            en: [
                'Area: 750 sqm (Ground + 2 Floors)',
                'Ground & First Floor: Completed',
                '6 Lecture Halls (12x6m)',
                '4 Labs (10x6m) + Admin Offices',
                '4 Restgroups per floor',
                'Contractor: Al-Fadel Contracting Co.'
            ],
            ar: [
                'المساحة: 750 متر مربع (أرضي + طابقين)',
                'المنفذ حالياً: الطابق الأرضي والأول',
                '6 قاعات محاضرات (12×6م)',
                '4 معامل (10×6م) + مكاتب إدارية',
                '4 دورات مياه لكل طابق',
                'المقاول: شركة الفاضل للمقاولات'
            ]
        }
    },
    {
        title: { en: 'Industrial Workshops (Phase 2)', ar: 'المرحلة الثانية: ورش الجملون' },
        details: {
            en: [
                '2 Hangars (40x15m each)',
                'Teacher Office + Storage',
                'Theory Classroom',
                'Large Practical Training Hall',
                'Contractor: Amlak Engineering',
                'Consultant: Al-Mak Engineering'
            ],
            ar: [
                'عدد 2 جملون (40×15م للواحد)',
                'مكتب أستاذ + مخزن معدات',
                'فصل دراسي نظري',
                'صالة كبيرة للتدريب العملي',
                'المقاول: شركة أملاك الهندسية',
                'الاستشاري: المك الهندسية'
            ]
        }
    },
    {
        title: { en: 'Dormitories & Facilities (Phase 3)', ar: 'المرحلة الثالثة: السكن والخدمات' },
        details: {
            en: [
                'Residential Tower (40x25m - 2 Wings)',
                'Foundation for 3 Floors (Ground Done)',
                'VIP Guest House (2 Wings)',
                'Guard Residence',
                'Water Station: 11k Gallon + Solar',
                'Well Depth: 550ft'
            ],
            ar: [
                'برج الداخليات (40×25م - جناحين)',
                'مؤسس لثلاث طوابق (المنفذ الأرضي)',
                'استراحة كبار الزوار (جناحين)',
                'سكن الغفير بمنافعه',
                'محطة مياه (11 ألف جالون + طاقة شمسية)',
                'عمق البئر: 550 قدم'
            ]
        }
    }
];

export const DICTIONARY = {
    en: {
        navHome: 'Home',
        navAbout: 'About',
        navInfrastructure: 'Facilities',
        navCurriculum: 'Departments',
        navCommunity: 'Community',
        navContact: 'Donate',

        brandName: 'Adeeb Al-Hajri Technical School',
        brandSubtitle: 'Vocational Training',

        heroTitle: 'Adeeb Al-Hajri Technical School',
        heroSubtitle: 'A landmark vocational education project in the Northern State, serving 4 localities and providing "a skill in every hand".',
        heroLocation: 'Shabtout Village, Al-Qawlad, Northern State',
        heroCTA: 'Support Construction',
        heroNewsLabel: 'Status',

        coords: '18°34\'38"N, 30°33\'29"E',

        aboutTitle: 'Our Vision',
        aboutBody: 'Founded through the generous initiative of Mr. Adeeb Ibrahim Yousef Al-Hajri (Kuwait), this school aims to be a model for technical education in Sudan. It empowers youth with practical skills to bridge the gap between academic learning and market needs.',
        aboutAdditional: 'Located at Km 419 on the Northern Artery Road, 90km south of Dongola.',

        gapTitle: 'Goal',
        gapBody: 'To provide a qualitative leap in technical training, serving as a national reference and training center.',
        communityTitle: 'Scope',
        communityBody: 'Covering 69,000 sqm to serve a high-density population across 4 localities.',

        curriculumTitle: 'Academic Departments',

        progressTitle: 'Construction Phases',
        progressIntro: 'With over $1M USD invested in infrastructure, the concrete skeletons and essential services are in place.',

        contactTitle: 'Contact Us',
        contactCoord: 'Hassan Mohamed Hamad Tongilab',
        contactRole: 'Volunteer Coordinator',
        contactInstruction: 'For inquiries or to coordinate donations (furniture/equipment):',

        ctaTitle: 'A Call for Support',
        ctaText: 'We appeal to all government bodies, charities, and individuals to help furnish this great edifice. Join us in providing the movable assets and workshop equipment needed to launch.',
        supportBtn: 'Get Involved',

        footerRights: 'All Rights Reserved',
        statStudents: 'Total Area (sqm)',
        statDepts: 'Departments',
        statJobReady: 'Localities Served',
        statWorkshops: 'Workshops',

        navContactShort: 'Contact',

        contactName: 'Name',
        contactEmail: 'Email',
        contactSubject: 'Subject',
        contactMessage: 'Message',
        contactSend: 'Send',

        btnToggle: 'العربية',
        email: 'Email',
        phone: 'Phone',
        realPhone: '+33 6 16 45 83 99',
        realEmail: 'tongilabhassan@gmail.com',
        locationLabel: 'Location',
        quickLinks: 'Quick Links',
        footerCopyright: 'Northern State - Republic of Sudan'
    },
    ar: {
        navHome: 'الرئيسية',
        navAbout: 'عن المدرسة',
        navInfrastructure: 'المرافق',
        navCurriculum: 'الأقسام',
        navCommunity: 'أهدافنا',
        navContact: 'تواصل معنا',

        brandName: 'أديب الهاجري',
        brandSubtitle: 'المدرسة الفنية',

        heroTitle: 'مدرسة أديب الهاجري الفنية',
        heroSubtitle: 'صرح تعليمي يهدف لنهضة الولاية الشمالية والبلاد عبر التدريب المهني المتخصص. "مهنة في كل يد".',
        heroLocation: 'قرية شبتوت، محلية القولد، الولاية الشمالية',
        heroCTA: 'ساهم في التأثيث',
        heroNewsLabel: 'حالة المشروع',

        coords: '18°34\'38"N, 30°33\'29"E',

        aboutTitle: 'نبذة عن المشروع',
        aboutBody: 'مدرسة مسجلة بوزارة التربية والتعليم. بمبادرة كريمة وتمويل من رجل البر والإحسان السيد/ أديب إبراهيم يوسف الهاجري من دولة الكويت الشقيقة. تم تصميم البنية التحتية لتكون مرجعاً للتعليم الفني ونقلة نوعية تساهم في نهضة البلاد.',
        aboutAdditional: 'الموقع: مطلة على شارع شريان الشمال (الكيلو 419)، وتبعد 90 كم جنوب دنقلا.',

        gapTitle: 'الهدف',
        gapBody: 'توفير العمالة المهرة للمشاريع التنموية، وتمليك الفرد وسيلة معيشة كريمة (مهنة في اليد) لمحاربة الفقر.',
        communityTitle: 'النطاق',
        communityBody: 'المساحة الكلية 69,000 متر مربع. تخدم 4 محليات ذات كثافة سكانية عالية.',

        curriculumTitle: 'أقسام المنهج الدراسي',

        progressTitle: 'مراحل سير العمل',
        progressIntro: 'تجاوزت تكلفة الإنشاءات مليون دولار. اكتملت المباني الرئيسية ومحطة المياه. الآن نحتاج تضافر الجهود للتأثيث.',

        contactTitle: 'تواصل معنا',
        contactCoord: 'حسن محمد حمد تنجلاب',
        contactRole: 'المنسق الطوعي',
        contactInstruction: 'للاستفسار أو التنسيق لدعم تأثيث الورش والمباني:',

        ctaTitle: 'دعوة للمساهمة',
        ctaText: 'نناشد جميع الجهات الحكومية والخيرية والأفراد للمساهمة الفاعلة في تذليل العقبات لتأثيث هذا الصرح بالأصول المنقولة ومعدات الورش. بتضامنكم تكتمل الصورة.',
        supportBtn: 'تواصل للتبرع',

        footerRights: 'جميع الحقوق محفوظة',
        statStudents: 'المساحة (متر مربع)',
        statDepts: 'تخصص تقني',
        statJobReady: 'محليات مستفيدة',
        statWorkshops: 'ورشة تدريب',

        navContactShort: 'تواصل',

        contactName: 'الاسم',
        contactEmail: 'البريد',
        contactSubject: 'الموضوع',
        contactMessage: 'الرسالة',
        contactSend: 'إرسال',

        btnToggle: 'English',
        email: 'البريد',
        phone: 'الهاتف',
        realPhone: '+33 6 16 45 83 99',
        realEmail: 'tongilabhassan@gmail.com',
        locationLabel: 'الموقع الجغرافي',
        quickLinks: 'روابط سريعة',
        footerCopyright: 'الولاية الشمالية - جمهورية السودان'
    }
};
