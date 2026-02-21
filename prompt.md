You are an elite, senior front-end engineer and visionary UI/UX architect. Your task is to initialize and build the core foundation, global styles, and the first half of a single-page storytelling web application for "Adib Al-Hajri Technical School" (مدرسة أديب الهاجري الفنية). This is not a standard corporate website or a basic template. It is an immersive, organic, narrative-driven digital experience designed to dignify technical education in Sudan and present it as a cutting-edge, prestigious pathway. You must strictly use React (functional components, hooks), Vite, Tailwind CSS 3.4, and Framer Motion for sophisticated micro-interactions. The entire application must be strictly Right-to-Left (RTL) for Arabic language support.

PART 1: THE "MOTHER COLOR" AND ORGANIC "PAPER" INFRASTRUCTURE
We are actively rejecting the sterile, plastic, bright-white aesthetic of modern tech websites. You must configure the global CSS and Tailwind config to simulate physical, high-quality architectural drafting paper.

The Mother Color Palette: Set the background of the body and root elements to a warm, sun-baked desert sand hue (#FDFBF7). This is our "Mother Color." You must mathematically inject a slight percentage of this warm sand tone into every other color in the application. Do not use pure blacks (#000000); use a deep, warm charcoal (#1A1918). Do not use default Tailwind blues; use a deep, rich architectural teal (#0F373A to #0A2527). Primary interactions should use a dignified, muted emerald green (#10B981 adjusted with a warm tint).

The Paper Texture: In the global index.css, you must write a pure CSS SVG noise filter or a base64 encoded noise background to overlay a microscopic, organic grain across the entire body. It should have an opacity of no more than 0.03 or 0.04, creating a subliminal tactile feel, making the screen feel like physical parchment or thick architectural paper.

RTL and Typography: Set <html dir="rtl" lang="ar">. You must import and map a premium, geometric Arabic typeface (such as 'Cairo', 'Tajawal', or 'IBM Plex Sans Arabic') to the font-sans Tailwind utility. Headings must feature tight tracking and bold weights, while body paragraphs must utilize generous, loose line heights (e.g., leading-loose) to accommodate Arabic diacritics and ascenders perfectly, mimicking editorial print magazines. All layout utilities must use logical properties (ps-, pe-, ms-, me-, text-start) instead of physical left/right properties.

PART 2: THE HEADER AND NAVIGATION
Create a highly refined, glassmorphism <Navbar /> component that acts as a sticky top layer (sticky top-0 z-50 backdrop-blur-md bg-[#FDFBF7]/80 border-b border-stone-200/50).

Logo Integration: On the right side (the start of the RTL flow), integrate the provided SVG logo from C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\logo.svg. Render it cleanly, accompanied by the text "مدرسة أديب الهاجري الفنية" in a bold, dignified teal typographic treatment.

Navigation: On the left side, provide smooth-scrolling anchor links: "عن المدرسة" (About), "الأقسام" (Departments), and "مراحل العمل" (Progress Phases). Implement a subtle, meaningful micro-interaction on hover: a thin emerald line drawing itself beneath the text using Framer Motion (layoutId="underline" style approach).

PART 3: THE CINEMATIC HERO SECTION
Create a monumental <Hero /> component (min-h-[90vh] relative overflow-hidden flex items-center justify-center).

The Visual Asset: Import the high-resolution render from C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\school-3d-render.jpeg. Use this as an absolute, full-cover background image. However, it must not overpower the text. Apply a rigorous gradient overlay (bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/60 to-[#FDFBF7]) so the building fades beautifully into the paper texture of the site. Implement a Framer Motion parallax scroll effect so the background image moves at a slightly slower rate than the foreground text as the user scrolls down.

The Manifesto Text: Center the content. Use Framer Motion to stagger the fade-in and slight upward translation of these elements.

H1 Headline: "مدرسة أديب الهاجري الفنية" (Massive text, 5xl to 7xl, deep teal, bold).

Sub-headline: "صرح تعليمي يهدف لنهضة الولاية الشمالية والبلاد عبر التدريب المهني المتخصص." (An educational edifice aiming for the renaissance of the Northern State and the country through specialized vocational training.)

The Core Philosophy (Overline/Badge): Create a small, elegant floating badge above the H1 containing the phrase "مهنة في كل يد" (A profession in every hand) with a subtle glowing pulse animation to draw the eye.

The Call to Action: Below the text, render an oversized, dignified emerald green button: "ساهم في بناء المستقبل" (Contribute to Building the Future). On hover, it should not just change color; it should slightly elevate, and its drop shadow should expand warmly, giving it physical weight and importance.

PART 4: THE NARRATIVE DISPARITY SECTION (ABOUT)
Create an <About /> component that immediately follows the Hero. This section must emotionally contextualize the project without bombarding the user with dry logistics.

Layout: A split typographic grid. Right side: A massive, deeply weighted statistic acting as typographic art. Left side: The narrative paragraphs.

The Conflict: On the right, display a massive "90" in an aggressive, stark tone, opposed by a small, delicate "2" in the primary emerald color. Beneath it, the explanatory text: "تسعون مدرسة أكاديمية في الولاية الشمالية، مقابل مدرستين فنيتين فقط." (Ninety academic schools in the Northern State, compared to only two technical schools.)

The Resolution: On the left, render the dignified narrative: "بمبادرة كريمة من السيد/ أديب إبراهيم يوسف الهاجري، نؤسس نقلة نوعية في التعليم الفني. نحن لا نبني مجرد جدران، بل نؤسس لجيل من العمالة الماهرة والمهندسين القادرين على قيادة المشاريع التنموية في السودان." (Through the generous initiative of Mr. Adib Ibrahim Youssef Al-Hajri, we are establishing a qualitative leap in technical education. We are not just building walls, but establishing a generation of skilled labor and engineers capable of leading developmental projects in Sudan.)

Interaction: As the user scrolls into this section, use Intersection Observer or Framer Motion whileInView to cause the "90" and "2" to count up dynamically from zero, solidifying the impact of the disparity.

Output the complete React, Vite, and Tailwind code for the setup, global CSS, Navbar, Hero, and About sections. Ensure all file paths strictly reference the provided local directories. Do not use placeholder text; use exactly what I have provided.

PROMPT 2: LIVING DEPARTMENTS, PROGRESS TIMELINE, & MEDIA INTEGRATION
Copy everything below this line for the second prompt:

You are an elite front-end architect continuing the development of the "Adib Al-Hajri Technical School" digital narrative. Building upon the organic "Paper" aesthetic and RTL architecture established in the previous step, you must now implement the interactive core of the platform: The Departments Grid, the Multimedia Progress Timeline, the Footer, and the 404 Error system. We are focusing on "Meaningful Micro-interactions"—where every hover, scroll, and click possesses a soul and directly relates to the physical trades being taught.

PART 1: THE LIVING DEPARTMENTS GRID (<Departments />)
We must present the technical trades not as secondary blue-collar labor, but as highly prestigious, precision-engineered career paths.

Architecture: Create a CSS Grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8). Each department is a distinct, physical-feeling card (bg-white/50 backdrop-blur-sm border border-stone-200/50 rounded-3xl p-8 relative overflow-hidden group).

Data Payload: You must map over the following exact Arabic data:

"الكهرباء العامة" (General Electricity) - "التمديدات والأنظمة الكهربائية" (Wiring and electrical systems)

"ميكانيكا السيارات" (Auto Mechanics) - "صيانة وتشخيص أعطال السيارات" (Maintenance and diagnosis of car faults)

"ميكانيكا الإنتاج" (Production Mechanics) - "تشغيل المعادن والمخارط" (Metalworking and lathes)

"هندسة التبريد والتكييف" (Refrigeration & AC Eng.) - "تركيب وصيانة التكييف والتبريد" (Installation and maintenance)

"التصنيع الغذائي" (Food Processing) - "تغليف التمور والمانجو وحفظ المنتجات الزراعية" (Packaging dates, mangoes, and preserving agricultural products)

The "Goldfish" Micro-interactions: Inside each card, implement a dedicated, trade-specific hover animation using Framer Motion and standard CSS.

For the Production Mechanics card, set the background image C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\workshop-blueprint.png as an absolute layer with opacity 0. On group-hover, the opacity shifts to 0.15, and the blueprint slowly translates across the card, mimicking a sliding drafting table.

For the Food Processing card, utilize a subtle mouse-tracking parallax effect where a soft, organic gradient moves in response to the cursor coordinates, simulating liquid dynamics or organic growth.

All cards should slightly lift off the page (hover:-translate-y-2) with an expanding, warm drop shadow, reinforcing the physical, tactile nature of the site.

PART 2: THE MULTIMEDIA PROGRESS TIMELINE (<Progress />)
This section is critical for institutional donors. It must look rigorous, highly documented, and architecturally sound. Design a vertical timeline layout mapped to the center of the screen on desktop, alternating sides.

Phase 1: The Main Building (Completed):

Title: "المرحلة الأولى: المبنى الرئيسي" (Phase One: Main Building).

Text: "مؤسس على طابق أرضي وطابقين بمساحة 750 متر مربع. يضم قاعات محاضرات ومعامل متطورة."

Visual Integration: Create an interactive image comparison slider or a split layout using C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\school-blueprint.png to represent the plan, smoothly transitioning into C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\workers-progress.png to show the physical execution.

Phase 2: The Gable Workshops (Active Phase):

Title: "المرحلة الثانية: ورش الجملون" (Phase Two: Gable Workshops).

Text: "مساحات ضخمة للتدريب العملي لضمان تطبيق شعار مهنة في كل يد."

Visual Integration: Render a beautifully styled, rounded image container displaying C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\school-workshops.png. Apply a subtle pulsing border in an orange/amber hue to indicate that this is the currently active, funding-required phase.

Phase 3: Housing and Infrastructure (Vision):

Title: "المرحلة الثالثة: السكن والخدمات" (Phase Three: Housing and Services).

Visual Integration (Dorms): Display C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\dorms.png alongside dorms-blueprint.png, utilizing a hover interaction that overlays the blueprint onto the conceptual render to prove structural readiness.

Video Integration (Water & Solar): You must embed two HTML5 video players for C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\water-station.mp4 and solar-station.mp4. Ensure these videos have autoPlay, loop, muted, and playsInline attributes. Wrap them in elegant, rounded UI frames that look like modern data dashboards, with text noting the 550-foot artesian well and 11,000-gallon solar tank capacity.

PART 3: THE FOOTER AND LOGISTICAL DECOUPLING (<Footer />)
We are purposefully keeping the heavy metrics off the main narrative flow.

The PDF Decoupling: In the top section of the footer, create a highly technical, utilitarian banner. Text: "للمؤسسات والشركاء: تحميل الملف الهندسي والمالي المفصل" (For Institutions and Partners: Download detailed engineering and financial dossier). Provide a rigorous-looking download button with a document icon. (This represents the LaTeX-compiled PDF we discussed).

Contact & Meta: Below that, display a clean grid in deep teal (bg-teal-950 text-sand-50).

Address data: "الموقع: شارع شريان الشمال الكيلو 419، قرية شبتوت، محلية القولد."

Contact: "المنسق الطوعي: حسن محمد حمد تنجلاب | +33616458399 | tongilabhassan@gmail.com".

Copyright: "© 2026 مدرسة أديب الهاجري الفنية."

PART 4: THE ORGANIC 404 EXPERIENCE (<NotFound />)
Instead of a standard broken link page, build a dedicated component that fits the mechanical/engineering theme.

Use the image C:\Users\ibrah\.gemini\antigravity\scratch\technical-school\images\charecter-404.png.

Implement a layout where this character sits prominently in the center of the screen. Add Arabic text: "عذراً، يبدو أن هناك عطلاً فنياً في هذا المسار." (Sorry, it seems there is a technical fault in this route.)

Include a primary button reading "العودة إلى المخطط الرئيسي" (Return to the main blueprint) that links back to the home route (/). Use a gentle, continuous bobbing animation on the character image using Framer Motion to make the error state feel like an intentional, living part of the application.