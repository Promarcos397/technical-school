import fs from 'fs';
import path from 'path';

const localesDir = path.resolve('src/locales');

const translations = {
  ar: {
    programs: {
      title: 'البرامج الأكاديمية',
      description: 'نقدم ثمانية مسارات تخصصية دقيقة تمثل عصب التنمية والصناعة. كل مسار مصمم بعناية لتخريج أيدي عاملة محترفة ومواكبة للتكنولوجيا وتلبية احتياجات سوق العمل والمجتمع المحلي.',
      electricityTitle: 'قسم الكهرباء العامة',
      electricityDesc: 'دراسة وتطبيق أساسيات الدوائر الكهربائية، التمديدات المنزلية والصناعية، وصيانة المولدات والمحركات.',
      autoMechanicsTitle: 'قسم ميكانيكا السيارات',
      autoMechanicsDesc: 'تشخيص وإصلاح أعطال السيارات الحديثة، دراسة محركات الاحتراق الداخلي، وأنظمة التعليق والفرامل.',
      productionMechanicsTitle: 'قسم ميكانيكا الإنتاج',
      productionMechanicsDesc: 'التدريب الشامل على الخراطة، التفريز، تشكيل المعادن، وبرمجة ماكينات التحكم الرقمي (CNC).',
      hvacTitle: 'قسم هندسة التبريد',
      hvacDesc: 'تركيب وصيانة أنظمة التكييف والتبريد المنزلية والتجارية، وغرف التبريد الصناعية.',
      architectureTitle: 'قسم الهندسة المعمارية',
      architectureDesc: 'أساسيات التصميم المعماري، حساب الكميات، رسم الخرائط الهندسية، وتقنيات التشييد الحديثة.',
      plumbingTitle: 'قسم الهندسة الصحية',
      plumbingDesc: 'تمديدات شبكات المياه والصرف الصحي، تقنيات الري الحديثة، ومعالجة المياه.',
      computerTitle: 'قسم الحاسوب',
      computerDesc: 'صيانة البرمجيات والعتاد، الشبكات، مقدمة في البرمجة وتصميم المواقع الإلكترونية.',
      foodProcessingTitle: 'قسم التصنيع الغذائي',
      foodProcessingDesc: 'حفظ وتغليف المنتجات الزراعية (التمور، المانجو، الخضروات)، الصناعات التحويلية الريفية لتعزيز الدخل.',
      curriculumNote: 'يتم تجهيز المنهج العملي وجدول الساعات المعتمدة لهذا التخصص.',
      registerBtn: 'التسجيل بالمسار',
      communityService: 'خدمة المجتمع: التصنيع الغذائي',
      communityServiceDesc: 'يعُتبر قسم التصنيع الغذائي خدمة اجتماعية مباشرة لأهل المنطقة، خاصة للخريجين والخريجات. يركز القسم على استغلال المواسم الزراعية لتغليف وحفظ التمور، المانجو، البطاطس، والطماطم، بهدف ضمان وفرتها في مواسم الندرة وتوفير مصدر دخل مستدام للأسر المنتجة.'
    },
    admissions: {
      title: 'القبول والتسجيل',
      description: 'بوابتك نحو مستقبل مهني واعد. املأ استمارة التسجيل المبدئي أدناه وسيقوم فريق القبول بالتواصل معك لاستكمال باقي الإجراءات والمستندات.',
      contactInfo: 'معلومات الاتصال',
      location: 'الموقع',
      locationDesc: 'الولاية الشمالية - محلية القولد\nقرية شبتوت - شارع شريان الشمال الكيلو 419',
      inquiries: 'للاستفسار',
      email: 'البريد الإلكتروني',
      formTitle: 'استمارة التسجيل المبدئي',
      fullName: 'الاسم الرباعي',
      fullNamePlaceholder: 'أدخل اسمك الكامل',
      phone: 'رقم الهاتف',
      phonePlaceholder: '112 345 6789',
      emailLabel: 'البريد الإلكتروني (اختياري)',
      emailPlaceholder: 'example@domain.com',
      programLabel: 'البرنامج المطلوب',
      programSelect: 'اختر التخصص...',
      notesLabel: 'ملاحظات إضافية أو استفسارات',
      notesPlaceholder: 'اكتب رسالتك هنا...',
      submitBtn: 'إرسال الطلب',
      submitting: 'جاري الإرسال...',
      successTitle: 'تم إرسال طلبك بنجاح!',
      successDesc: 'شُكراً لك. سيقوم فريق الإدارة بمراجعة بياناتك والتواصل معك قريباً.',
      errorTitle: 'عذراً، حدث خطأ أثناء الإرسال.',
      errorDesc: 'يرجى التأكد من اتصالك بالإنترنت والمحاولة مرة أخرى، أو التواصل معنا مباشرة عبر الهاتف.'
    },
    news: {
      title: 'الأخبار والفعاليات',
      description: 'تابع أحدث المستجدات، الإنجازات الطلابية، والفعاليات التقنية في مدرسة أديب الهاجري.',
      article1Tag: 'تحديثات المشروع',
      article1Status: 'التطوير مستمر',
      article1Title: 'حملة المساهمة واستكمال تجهيزات الورش الفنية',
      article1P1: 'التكلفة المالية الكلية للإنشاءات المذكورة تتجاوز واحد مليون دولار أمريكي. وما نرجوه من جميع الجادين سواء الجهات الحكومية أو المنظمات الخيرية والأفراد المساهمة الفاعلة والمتبني الكامل لتذليل العقبات.',
      article1P2: 'نأمل تضافر الجهود لتأثيث المدرسة بالأصول المنقولة والمعدات اللازمة للورش بأقسامها المختلفة ليتحقق حلم الأجيال.',
      article2Tag: 'المجتمع المحلي',
      article2Title: 'نبذة عن قرية شبتوت',
      article2P1: 'مقر المدرسة هو قرية شبتوت بالولاية الشمالية وتبعد حوالي 90 كيلومتر جنوب دنقلا عاصمة الولاية، وعشرة كيلومترات من مدينة القولد.',
      article2P2: 'هذا المشروع يخدم مجتمع محلي متعطش للتدريب المهني وللثورة التعليمية التي ستساهم بشكل مباشر في رفع مستوى المعيشة ومحاربة البطالة من خلال اكتساب مهارات تقنية وحرفية.',
      moreNewsTitle: 'نعمل باستمرار لصناعة الأخبار!',
      moreNewsDesc: 'تابعنا قريباً لتلقي أحدث التحديثات حول الفعاليات، الإنجازات الطلابية، وتطورات البناء خطوة بخطوة.'
    }
  },
  en: {
    programs: {
      title: 'Academic Programs',
      description: 'We offer eight highly specialized tracks representing the backbone of development and industry. Each track is carefully designed to graduate professional hands keeping pace with technology and meeting the needs of the labor market and local community.',
      electricityTitle: 'General Electricity',
      electricityDesc: 'Study and application of electrical circuit basics, residential and industrial wiring, and maintenance of generators and motors.',
      autoMechanicsTitle: 'Auto Mechanics',
      autoMechanicsDesc: 'Diagnosing and repairing modern car faults, studying internal combustion engines, suspension, and braking systems.',
      productionMechanicsTitle: 'Production Mechanics',
      productionMechanicsDesc: 'Comprehensive training on turning, milling, metal forming, and CNC machine programming.',
      hvacTitle: 'HVAC Engineering',
      hvacDesc: 'Installation and maintenance of residential and commercial air conditioning and refrigeration systems, and industrial cold rooms.',
      architectureTitle: 'Architecture',
      architectureDesc: 'Basics of architectural design, quantity surveying, engineering drafting, and modern construction techniques.',
      plumbingTitle: 'Sanitary Engineering',
      plumbingDesc: 'Water and sanitation network installations, modern irrigation techniques, and water treatment.',
      computerTitle: 'Computer Science',
      computerDesc: 'Software and hardware maintenance, networks, introduction to programming, and web design.',
      foodProcessingTitle: 'Food Processing',
      foodProcessingDesc: 'Preservation and packaging of agricultural products (dates, mangoes, vegetables), rural transformational industries to boost income.',
      curriculumNote: 'The practical curriculum and credit hours schedule for this major are being prepared.',
      registerBtn: 'Register for Track',
      communityService: 'Community Service: Food Processing',
      communityServiceDesc: 'The Food Processing department is considered a direct social service to the people of the region, especially graduates. The department focuses on utilizing agricultural seasons to package and preserve dates, mangoes, potatoes, and tomatoes, aiming to ensure their availability during scarce seasons and provide a sustainable income source for productive families.'
    },
    admissions: {
      title: 'Admissions and Registration',
      description: 'Your gateway to a promising professional future. Fill out the initial registration form below, and the admissions team will contact you to complete the remaining procedures and documents.',
      contactInfo: 'Contact Information',
      location: 'Location',
      locationDesc: 'Northern State - Al-Golid Locality\nShabtout Village - Northern Artery Road, Km 419',
      inquiries: 'For Inquiries',
      email: 'Email',
      formTitle: 'Initial Registration Form',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      phone: 'Phone Number',
      phonePlaceholder: '112 345 6789',
      emailLabel: 'Email (Optional)',
      emailPlaceholder: 'example@domain.com',
      programLabel: 'Desired Program',
      programSelect: 'Select a major...',
      notesLabel: 'Additional Notes or Inquiries',
      notesPlaceholder: 'Write your message here...',
      submitBtn: 'Submit Request',
      submitting: 'Submitting...',
      successTitle: 'Your request has been sent successfully!',
      successDesc: 'Thank you. The management team will review your details and contact you shortly.',
      errorTitle: 'Sorry, an error occurred while sending.',
      errorDesc: 'Please check your internet connection and try again, or contact us directly by phone.'
    },
    news: {
      title: 'News and Events',
      description: 'Follow the latest updates, student achievements, and technical events at Adeeb Al-Hajri School.',
      article1Tag: 'Project Updates',
      article1Status: 'Development Ongoing',
      article1Title: 'Contribution Campaign and Equipping Technical Workshops',
      article1P1: 'The total financial cost of the aforementioned constructions exceeds one million US dollars. We hope all serious parties, whether government entities, charitable organizations, or individuals, will actively contribute and fully adopt to overcome obstacles.',
      article1P2: 'We hope for joint efforts to furnish the school with movable assets and necessary equipment for the workshops in their various departments to realize the dream of generations.',
      article2Tag: 'Local Community',
      article2Title: 'About Shabtout Village',
      article2P1: 'The school\'s headquarters is Shabtout village in the Northern State, about 90 kilometers south of Dongola, the state capital, and ten kilometers from Al-Golid city.',
      article2P2: 'This project serves a local community thirsty for vocational training and an educational revolution that will directly contribute to raising the standard of living and combating unemployment through the acquisition of technical and craft skills.',
      moreNewsTitle: 'Constantly Working to Make News!',
      moreNewsDesc: 'Follow us soon to receive the latest updates on events, student achievements, and step-by-step construction developments.'
    }
  },
  fr: {
    programs: {
      title: 'Programmes Académiques',
      description: 'Nous proposons huit filières hautement spécialisées représentant l\'épine dorsale du développement et de l\'industrie. Chaque filière est soigneusement conçue pour former des professionnels en phase avec la technologie et répondant aux besoins du marché du travail et de la communauté locale.',
      electricityTitle: 'Électricité Générale',
      electricityDesc: 'Étude et application des bases des circuits électriques, câblage résidentiel et industriel, et entretien des générateurs et moteurs.',
      autoMechanicsTitle: 'Mécanique Automobile',
      autoMechanicsDesc: 'Diagnostic et réparation des pannes de voitures modernes, étude des moteurs à combustion interne, systèmes de suspension et de freinage.',
      productionMechanicsTitle: 'Mécanique de Production',
      productionMechanicsDesc: 'Formation complète sur le tournage, le fraisage, le formage des métaux et la programmation des machines CNC.',
      hvacTitle: 'Génie Climatique (CVC)',
      hvacDesc: 'Installation et entretien des systèmes de climatisation et de réfrigération résidentiels et commerciaux, et des chambres froides industrielles.',
      architectureTitle: 'Architecture',
      architectureDesc: 'Bases de la conception architecturale, métré, dessin technique et techniques de construction modernes.',
      plumbingTitle: 'Génie Sanitaire',
      plumbingDesc: 'Installations de réseaux d\'eau et d\'assainissement, techniques d\'irrigation modernes et traitement de l\'eau.',
      computerTitle: 'Informatique',
      computerDesc: 'Maintenance logicielle et matérielle, réseaux, introduction à la programmation et conception de sites web.',
      foodProcessingTitle: 'Transformation Alimentaire',
      foodProcessingDesc: 'Conservation et conditionnement des produits agricoles (dattes, mangues, légumes), industries de transformation rurales pour augmenter les revenus.',
      curriculumNote: 'Le programme pratique et le calendrier des heures de cours pour cette spécialisation sont en cours de préparation.',
      registerBtn: 'S\'inscrire à la filière',
      communityService: 'Service Communautaire : Transformation Alimentaire',
      communityServiceDesc: 'Le département de Transformation Alimentaire est considéré comme un service social direct pour les habitants de la région, en particulier les diplômés. Le département se concentre sur l\'utilisation des saisons agricoles pour conditionner et conserver les dattes, mangues, pommes de terre et tomates, dans le but d\'assurer leur disponibilité pendant les saisons creuses et de fournir une source de revenus durable aux familles productrices.'
    },
    admissions: {
      title: 'Admissions et Inscription',
      description: 'Votre passerelle vers un avenir professionnel prometteur. Remplissez le formulaire d\'inscription initiale ci-dessous, et l\'équipe des admissions vous contactera pour compléter le reste des procédures et documents.',
      contactInfo: 'Coordonnées',
      location: 'Emplacement',
      locationDesc: 'État du Nord - Localité d\'Al-Golid\nVillage de Shabtout - Route Artère Nord, Km 419',
      inquiries: 'Pour toute demande',
      email: 'E-mail',
      formTitle: 'Formulaire d\'Inscription Initiale',
      fullName: 'Nom Complet',
      fullNamePlaceholder: 'Entrez votre nom complet',
      phone: 'Numéro de Téléphone',
      phonePlaceholder: '112 345 6789',
      emailLabel: 'E-mail (Facultatif)',
      emailPlaceholder: 'exemple@domaine.com',
      programLabel: 'Programme Souhaité',
      programSelect: 'Sélectionnez une spécialisation...',
      notesLabel: 'Notes Supplémentaires ou Demandes',
      notesPlaceholder: 'Écrivez votre message ici...',
      submitBtn: 'Soumettre la Demande',
      submitting: 'Soumission...',
      successTitle: 'Votre demande a été envoyée avec succès !',
      successDesc: 'Merci. L\'équipe de direction examinera vos informations et vous contactera sous peu.',
      errorTitle: 'Désolé, une erreur s\'est produite lors de l\'envoi.',
      errorDesc: 'Veuillez vérifier votre connexion internet et réessayer, ou contactez-nous directement par téléphone.'
    },
    news: {
      title: 'Actualités et Événements',
      description: 'Suivez les dernières mises à jour, les réalisations des étudiants et les événements techniques à l\'école Adeeb Al-Hajri.',
      article1Tag: 'Mises à jour du Projet',
      article1Status: 'Développement en cours',
      article1Title: 'Campagne de Contribution et Équipement des Ateliers Techniques',
      article1P1: 'Le coût financier total des constructions susmentionnées dépasse un million de dollars américains. Nous espérons que toutes les parties sérieuses, qu\'il s\'agisse d\'entités gouvernementales, d\'organisations caritatives ou de particuliers, contribueront activement et adopteront pleinement le projet pour surmonter les obstacles.',
      article1P2: 'Nous espérons des efforts conjoints pour meubler l\'école avec des biens mobiliers et l\'équipement nécessaire pour les ateliers dans leurs différents départements afin de réaliser le rêve de plusieurs générations.',
      article2Tag: 'Communauté Locale',
      article2Title: 'À propos du village de Shabtout',
      article2P1: 'Le siège de l\'école est le village de Shabtout dans l\'État du Nord, à environ 90 kilomètres au sud de Dongola, la capitale de l\'État, et à dix kilomètres de la ville d\'Al-Golid.',
      article2P2: 'Ce projet sert une communauté locale assoiffée de formation professionnelle et d\'une révolution éducative qui contribuera directement à élever le niveau de vie et à lutter contre le chômage grâce à l\'acquisition de compétences techniques et artisanales.',
      moreNewsTitle: 'Nous travaillons constamment pour créer l\'actualité !',
      moreNewsDesc: 'Suivez-nous bientôt pour recevoir les dernières mises à jour sur les événements, les réalisations des étudiants et les développements de la construction étape par étape.'
    }
  }
};

['ar', 'en', 'fr'].forEach(lang => {
  const filePath = path.join(localesDir, lang, 'translation.json');
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.programs = translations[lang].programs;
    data.admissions = translations[lang].admissions;
    data.news = translations[lang].news;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Updated ${lang}/translation.json`);
  }
});
