import { 
  ServiceItem, 
  CaseStudy, 
  PricingPlan, 
  MaintenanceTier, 
  Testimonial, 
  FaqItem 
} from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'school-website',
    category: 'school',
    titleBn: 'স্কুল ওয়েবসাইট সল্যুশন',
    titleEn: 'School Website Solution',
    taglineBn: 'প্রাথমিক ও মাধ্যমিক বিদ্যালয়ের জন্য সম্পূর্ণ ডিজিটাল ক্যাম্পাস পোর্টাল',
    taglineEn: 'Complete digital campus portal for primary & secondary schools',
    descriptionBn: 'ডায়নামিক নোটিশ বোর্ড, স্বয়ংক্রিয় রেজাল্ট শিট, পূর্ণাঙ্গ শিক্ষক ডিরেক্টরি এবং ঝামেলামুক্ত অনলাইন ভর্তি ফরমসহ আধুনিক ওয়েবসাইট।',
    descriptionEn: 'Modern institutional website with dynamic notice boards, automated result publishing, teacher directories, and hassle-free online admission forms.',
    icon: 'GraduationCap',
    featuresBn: [
      'ডায়নামিক নোটিশ বোর্ড ও সার্কুলার আর্কাইভ',
      'শিক্ষার্থী অনলাইন ভর্তি আবেদন ও ফর্ম প্রিন্ট',
      'রোল ভিত্তিক স্বয়ংক্রিয় রেজাল্ট অনুসন্ধান পোর্টাল',
      'শিক্ষক ও কর্মচারী প্রোফাইল ডিরেক্টরি',
      'ইভেন্টভিত্তিক স্মার্ট ফটো ও ভিডিও গ্যালারি',
      'ক্লাস রুটিন, সিলেবাস ও একাডেমিক ক্যালেন্ডার ডাউনলোড',
      'অভিভাবক ফিডব্যাক ও সরাসরি যোগাযোগ ব্যবস্থা',
      'সহজ বাংলা ও ইংরেজি অ্যাডমিন প্যানেল'
    ],
    featuresEn: [
      'Dynamic Notice Board & Circular Archive',
      'Student Online Admission & Printable Forms',
      'Roll-wise Automated Result Search Portal',
      'Teacher & Staff Profile Directory',
      'Smart Photo & Event Video Gallery',
      'Class Routine, Syllabus & Academic Calendar Downloads',
      'Parent Feedback & Direct Contact Form',
      'Easy Bilingual (Bangla + English) Admin Panel'
    ],
    recommendedForBn: 'উচ্চ বিদ্যালয়, মডেল স্কুল ও ক্যাডেট একাডেমি',
    recommendedForEn: 'High Schools, Model Schools & Cadet Academies'
  },
  {
    id: 'college-website',
    category: 'college',
    titleBn: 'কলেজ ওয়েবসাইট পোর্টাল',
    titleEn: 'College Website Portal',
    taglineBn: 'উচ্চ মাধ্যমিক ও স্নাতক কলেজের জন্য অ্যাডভান্সড মাল্টি-ডিপার্টমেন্টাল পোর্টাল',
    taglineEn: 'Advanced multi-departmental portal for higher secondary & degree colleges',
    descriptionBn: 'বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগের পৃথক তথ্যকোষ, অনার্স ও ডিগ্রি কোর্স ক্যাটালগ, সেমিনার আপডেট এবং অনলাইন ভর্তি সমন্বয়।',
    descriptionEn: 'Departmental categorization for Science, Humanities & Business Studies, degree course catalogs, academic event scheduler, and integrated admission portal.',
    icon: 'Building2',
    featuresBn: [
      'পৃথক ডিপার্টমেন্ট (বিজ্ঞান/মানবিক/ব্যবসায় শিক্ষা/অনার্স)',
      'ডিজিটাল প্রসপেক্টাস ও কোর্স সিলেবাস আর্কাইভ',
      'এইচএসসি ও ডিগ্রি অনলাইন ভর্তি সহায়তা ড্যাশবোর্ড',
      'গভর্নিং বডি ও গভর্নিং কমিটি প্রোফাইল',
      'কলেজ ম্যাগাজিন ও পাবলিকেশন লাইব্রেরি',
      'সেমিনার, ল্যাব ও লাইব্রেরি ফ্যাসিলিটি শোকেস',
      'বোর্ড নোটিশ ও সরকারি প্রজ্ঞাপন অটো সিঙ্ক',
      'উন্নত ক্লাউড ডাটাবেজ সিকিউরিটি'
    ],
    featuresEn: [
      'Separate Departmental Sections (Science/Arts/Commerce/Degree)',
      'Digital Prospectus & Course Syllabus Archive',
      'HSC & Degree Online Admission Guidance Dashboard',
      'Governing Body & Managing Committee Profiles',
      'College Magazine & Research Publication Library',
      'Seminar, Science Lab & Library Facility Showcase',
      'Education Board Circular & Gov Notification Sync',
      'High-Grade Cloud Database Security'
    ],
    recommendedForBn: 'সরকারি ও বেসরকারি কলেজ, ডিগ্রি মহাবিদ্যালয়',
    recommendedForEn: 'Govt. & Private Colleges, Degree Institutions'
  },
  {
    id: 'madrasa-website',
    category: 'madrasa',
    titleBn: 'মাদ্রাসা পোর্টাল সল্যুশন',
    titleEn: 'Madrasa Portal Solution',
    taglineBn: 'কওমি, আলিয়া ও হিফজ মাদ্রাসার জন্য বিশেষায়িত ইসলামিক তথ্যকোষ',
    taglineEn: 'Specialized Islamic academic portal for Qawmi, Kamil & Hifz Madrasas',
    descriptionBn: 'হিফজুল কুরআন বিভাগ, কিতাবখানা ক্যাটালগ, বার্ষিক মাহফিল আপডেট, আরবি-বাংলা ফন্ট সাপোর্ট এবং দেশ-বিদেশ থেকে যাকাত ও অনুদান সংগ্রহ।',
    descriptionEn: 'Hifz section tracking, library book catalog, annual Islamic event scheduler, Arabic calligraphy support, and secure online donation gateway.',
    icon: 'BookOpen',
    featuresBn: [
      'হিফজ, কিতাব ও আলিয়া বিভাগের পৃথক তথ্যকোষ',
      'হিজরি ও বাংলা দ্বৈত ক্যালেন্ডার ইন্টিগ্রেশন',
      'অনলাইন দান, সদকা ও লিল্লাহ ফান্ড গেটওয়ে',
      'বার্ষিক ওয়াজ ও সিরাত মাহফিল লাইভ আপডেট',
      'মুহতামিম ও সম্মানিত ওস্তাদবৃন্দের পরিচিতি',
      'দারুল ইফতা ও ফতোয়া জিজ্ঞাসা ডিরেক্টরি',
      'মাদ্রাসা লাইব্রেরি ও কিতাবখানা তালিকা',
      'সুন্দর আরবি ও বাংলা টাইপোগ্রাফি আর্কিটেকচার'
    ],
    featuresEn: [
      'Distinct Sections for Hifz, Kitab & Kamil Wings',
      'Hijri, Bangla & Gregorian Dual Calendar Sync',
      'Online Donation, Sadaqah & Zakat Gateway',
      'Annual Mahfil & Seerat Conference Updates',
      'Muhtamim & Esteemed Scholars Directory',
      'Darul Ifta & Fatwa Inquiry Submissions',
      'Madrasa Kitabkhana & Book Library Index',
      'Culturally Refined Arabic & Bangla Typography'
    ],
    recommendedForBn: 'কওমি মাদ্রাসা, আলিয়া মাদ্রাসা, হিফজখানা ও ইসলামিক একাডেমি',
    recommendedForEn: 'Qawmi, Kamil & Alia Madrasas, Hifz Institutions'
  },
  {
    id: 'custom-website',
    category: 'custom',
    titleBn: 'কোচিং ও ট্রাস্ট একাডেমি ওয়েবসাইট',
    titleEn: 'Coaching & Training Institute Platform',
    taglineBn: 'কোচিং সেন্টার, ট্রেনিং একাডেমি ও শিক্ষা ট্রাস্টের জন্য কাস্টম সল্যুশন',
    taglineEn: 'Bespoke high-converting platforms for coaching networks & training academies',
    descriptionBn: 'ব্রাঞ্চ ম্যানেজমেন্ট, কোর্স ব্যাচ শিডিউল, ফ্রি ট্রায়াল ক্লাস রেজিস্ট্রেশন এবং সরাসরি হোয়াটসঅ্যাপ ও পেমেন্ট ইন্টিগ্রেশন।',
    descriptionEn: 'Branch management, batch schedules, free trial registration funnels, direct WhatsApp lead flows, and payment triggers.',
    icon: 'Layers',
    featuresBn: [
      'ব্যাচ ও টাইম-স্লট ভিত্তিক কোর্স ডিরেক্টরি',
      'ফ্রি সেমিনার ও স্কলারশিপ পরীক্ষা রেজিস্ট্রেশন',
      'সফল শিক্ষার্থীদের রেজাল্ট ও টেস্টিমোনিয়াল ক্যারোজেল',
      'মাল্টিপল ব্রাঞ্চ বা ক্যাম্পাস লোকেশন ম্যাপ',
      'পিডিএফ ক্লাস নোট ও এক্সাম সলিউশন আর্কাইভ',
      'সরাসরি হোয়াটসঅ্যাপ অ্যাডমিশন বুস্টিং',
      'কাস্টম সিআরএম ও লিড ম্যানেজমেন্ট'
    ],
    featuresEn: [
      'Batch & Time-Slot Course Enrolment Flow',
      'Free Seminar & Scholarship Exam Registration',
      'Alumni Rank & Success Stories Showcase',
      'Multi-Branch Geographic Directory & Maps',
      'Lecture Notes & PDF Solution Archive',
      'Direct WhatsApp Admission Conversion Triggers',
      'Custom CRM & Inbound Lead Management'
    ],
    recommendedForBn: 'মেডিকেল/ইঞ্জিনিয়ারিং কোচিং, আইটি ট্রেনিং ইনস্টিটিউট, একাডেমি',
    recommendedForEn: 'Admission Coaching, Skill Institutes, Education Trusts'
  },
  {
    id: 'maintenance-care',
    category: 'maintenance',
    titleBn: 'সার্ভার নিরাপত্তা ও বাৎসরিক রক্ষণাবেক্ষণ',
    titleEn: 'Maintenance, Security & Cloud Care',
    taglineBn: 'ওয়েবসাইট লাইভ হওয়ার পরেও নিরবচ্ছিন্ন সুরক্ষা ও টেকনিক্যাল সহযোগিতা',
    taglineEn: 'Continuous uptime, bank-grade cloud security, and dedicated tech care',
    descriptionBn: 'প্রতিদিনের অটো ক্লাউড ব্যাকআপ, এনক্রিপ্টেড ডাটাবেজ, ফ্রি SSL রিনিউয়াল, কনটেন্ট চেঞ্জ এবং ডেডিকেটেড ফোন/হোয়াটসঅ্যাপ সাপোর্ট।',
    descriptionEn: 'Daily automated cloud snapshots, encrypted student records, free SSL renewal, routine content updates, and fast WhatsApp phone support.',
    icon: 'ShieldCheck',
    featuresBn: [
      'স্বয়ংক্রিয় ক্লাউড ব্যাকআপ (প্রতিদিন ও সাপ্তাহিক)',
      '১০০% আপটাইম গ্যারান্টিযুক্ত সার্ভার হোস্টিং',
      'নিরাপদ এনক্রিপ্টেড ডাটাবেজ ও ফায়ারওয়াল গার্ড',
      'মাসে যেকোনো জরুরি কনটেন্ট বা নোটিশ আপডেট সহায়তা',
      'ডোমেন ও সিকিউরিটি লাইসেন্স নিয়মিত রিনিউয়াল',
      'সরাসরি জরুরি হটলাইন ও টেকনিক্যাল হেল্পডেস্ক'
    ],
    featuresEn: [
      'Automated Cloud Backups (Daily & Weekly Snapshots)',
      '99.9% Guaranteed High-Speed Server Uptime',
      'DDoS Protection & SSL Certificate Management',
      'Monthly Content & Routine Notice Update Assistance',
      'Domain DNS Configuration & Annual Renewal Handling',
      'Direct Priority Tech Hotline & WhatsApp Support'
    ],
    recommendedForBn: 'যেকোনো শিক্ষা প্রতিষ্ঠান যারা নিশ্চিন্তে ওয়েবসাইট চালাতে চায়',
    recommendedForEn: 'Any Educational Institution Seeking Stress-Free Web Operations'
  }
];

export const FEATURED_PROJECTS: CaseStudy[] = [
  {
    id: 'apex-model-school',
    titleBn: 'এপেক্স রেসিডেনসিয়াল মডেল স্কুল ও কলেজ',
    titleEn: 'Apex Model High School & College',
    institutionBn: 'এপেক্স রেসিডেনসিয়াল মডেল হাই স্কুল',
    institutionEn: 'Apex Model High School',
    type: 'school',
    categoryLabelBn: 'স্কুল পোর্টাল',
    categoryLabelEn: 'School Portal',
    locationBn: 'ধানমন্ডি, ঢাকা',
    locationEn: 'Dhanmondi, Dhaka',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    summaryBn: 'অনলাইন ভর্তি ও স্বয়ংক্রিয় রেজাল্ট সিস্টেম বাস্তবায়নের মাধ্যমে প্রতিষ্ঠানটির অফিসিয়াল চাপ ৭০% কমেছে এবং শিক্ষার্থী সন্তুষ্টি বেড়েছে।',
    summaryEn: 'Implemented a dynamic bilingual portal with automated roll-based grading and admissions, reducing office desk rush by 70%.',
    challengeBn: 'পূর্বে স্কুলটির কেবল একটি স্ট্যাটিক পেজ ছিল যা মোবাইল ফোনে ভেঙে যেত। ভর্তি ও পরীক্ষার রেজাল্টের সময় অফিসে হাজারো অভিভাবকের লাইন লাগত।',
    challengeEn: 'The school previously had a legacy static website broken on mobile screens, leading to long physical queues during admission and exam periods.',
    goalsBn: [
      'মোবাইল-বান্ধব ও ১০০% আধুনিক ডিজাইন তৈরি করা',
      'রোল নাম্বার দিয়ে স্বয়ংক্রিয় টার্মিনাল রেজাল্ট প্রকাশের ব্যবস্থা',
      'অফিস সহকারীদের জন্য সহজ নোটিশ ও রুটিন আপলোড ব্যবস্থা'
    ],
    goalsEn: [
      'Deliver a responsive, mobile-first institutional interface',
      'Provide instant roll-based student examination results',
      'Empower teachers with a 2-minute notice publishing engine'
    ],
    solutionBn: 'আমরা Next.js ও ক্লাউড ডাটাবেজের ওপর ভিত্তি করে একটি আধুনিক পোর্টাল তৈরি করি, যাতে যুক্ত রয়েছে এক্সেল শিট আপলোডের মাধ্যমে নিমেষেই হাজার শিক্ষার্থীর ফলাফল প্রকাশ ও ভর্তি ফরম যাচাইয়ের সুবিধা।',
    solutionEn: 'We engineered a high-performance Next.js solution with a customized Excel-to-Result parser and instant admission application viewer.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL Cloud', 'Edge CDN'],
    adminFeaturesBn: [
      '১ ক্লিকে এক্সেল শিট থেকে পুরো ক্লাসের ফলাফল আপলোড',
      'নতুন নোটিশ যোগ করা ও পিডিএফ এটাচমেন্ট যুক্তকরণ',
      'ভর্তি ফরম ভেরিফিকেশন ও তালিকা প্রিন্ট'
    ],
    adminFeaturesEn: [
      '1-Click bulk Excel result sheet synchronization',
      'Drafting & publishing circulars with PDF attachments',
      'Admission application verification & roll card generation'
    ],
    performanceMetrics: {
      speedScore: 99,
      mobileIndex: 100,
      loadTime: '0.8s',
      uptime: '99.99%'
    },
    resultsBn: [
      'ভর্তির সময় অফিসে শারীরিক ভিড় কমেছে ৭০%',
      'নোটিশ ও রুটিন ডাউনলোড বৃদ্ধি পেয়েছে ১৫০%',
      'গুগল পেজস্পিড স্কোর ৯৯/১০০ নিশ্চিত'
    ],
    resultsEn: [
      '70% reduction in in-person administrative queues',
      '150% surge in monthly circular downloads',
      'Achieved 99/100 Core Web Vitals audit rating'
    ],
    testimonial: {
      quoteBn: 'CampusDev-এর তৈরি সাইটটি আমাদের পুরো স্কুলের প্রশাসনিক কাজের ধরন পাল্টে দিয়েছে। শিক্ষকরা নিজেরাই এখন ছবি ও নোটিশ আপডেট করেন।',
      quoteEn: 'CampusDev completely transformed our academic operations. Even non-tech teachers update circulars in two minutes.',
      authorBn: 'মোহাম্মদ মোতাহার হোসেন',
      authorEn: 'Mohammad Motahar Hossain',
      roleBn: 'প্রধান শিক্ষক',
      roleEn: 'Headmaster'
    }
  },
  {
    id: 'greenfield-ideal-college',
    titleBn: 'গ্রীনফিল্ড আইডিয়াল কলেজ ও ডিগ্রি একাডেমি',
    titleEn: 'Greenfield Ideal College & Degree Academy',
    institutionBn: 'গ্রীনফিল্ড আইডিয়াল কলেজ',
    institutionEn: 'Greenfield Ideal College',
    type: 'college',
    categoryLabelBn: 'কলেজ পোর্টাল',
    categoryLabelEn: 'College Portal',
    locationBn: 'উত্তরা, ঢাকা',
    locationEn: 'Uttara, Dhaka',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
    summaryBn: 'উচ্চ মাধ্যমিক ও ডিগ্রি শিক্ষার্থীদের জন্য মাল্টি-ডিসিপ্লিনারি বিভাগীয় আর্কিটেকচার ও অনলাইন আবেদন ব্যবস্থা তৈরি।',
    summaryEn: 'Engineered an advanced collegiate portal featuring department-wise faculties, digital prospectus, and online application tracking.',
    challengeBn: 'এইচএসসি ও ডিগ্রি শাখায় ৩০০০+ শিক্ষার্থীর জন্য নিয়মিত ক্লাস রুটিন, ল্যাব শিডিউল এবং বিভাগীয় নোটিশ আলাদাভাবে প্রদর্শনের কোনো কার্যকর ব্যবস্থা ছিল না।',
    challengeEn: 'Managing 3000+ students across HSC and Degree levels without structured departmental notice boards created extreme confusion during exam schedules.',
    goalsBn: [
      'বিজ্ঞান, মানবিক ও বাণিজ্য শাখার জন্য পৃথক নোটিশ হাব',
      'অনলাইন ভর্তি ফর্ম পূরণ ও ফি পেমেন্ট সহায়তা নির্দেশিকা',
      'কলেজ ম্যাগাজিন ও শিক্ষক প্রোফাইল লাইব্রেরি গঠন'
    ],
    goalsEn: [
      'Structured faculty portals for Science, Arts & Commerce',
      'Streamlined digital admission guidelines & registration forms',
      'Interactive college magazine and faculty directory'
    ],
    solutionBn: 'কাস্টম ফিল্টারিং সমৃদ্ধ বিভাগীয় আর্কিটেকচার তৈরি করা হয়েছে। শিক্ষার্থীরা নিজেদের গ্রুপ সিলেক্ট করলেই স্বয়ংক্রিয়ভাবে প্রাসঙ্গিক রুটিন ও নোটিশ পেয়ে যায়।',
    solutionEn: 'Designed an intuitive group-specific hub where students filter notifications, routines, and syllabi according to their faculty with single tap.',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Cloud Storage', 'PWA Engine'],
    adminFeaturesBn: [
      'বিভাগ ভিত্তিক নোটিশ আলাদাভাবে শিডিউল করার ক্ষমতা',
      'শিক্ষক ও লেকচারারদের প্রোফাইল ও বায়োগ্রাফি এডিট',
      'লাইব্রেরি ও অডিটোরিয়াম ইভেন্ট বুকিং ক্যালেন্ডার'
    ],
    adminFeaturesEn: [
      'Department-specific announcement scheduling',
      'Faculty bio, publication & contact manager',
      'Auditorium, seminar & lab calendar scheduler'
    ],
    performanceMetrics: {
      speedScore: 98,
      mobileIndex: 99,
      loadTime: '0.9s',
      uptime: '100%'
    },
    resultsBn: [
      'অনলাইন ভর্তি আবেদন গত বছরের তুলনায় ২.৪ গুণ বৃদ্ধি',
      'রুটিন সংক্রান্ত কল সেন্টারের ফোন চাপ ৬০% হ্রাস',
      'অভিভাবকদের পক্ষ থেকে শতভাগ ইতিবাচক প্রতিক্রিয়া'
    ],
    resultsEn: [
      '2.4x increase in digital admission submissions',
      '60% drop in routine enquiry phone calls',
      '100% positive feedback on mobile navigation'
    ],
    testimonial: {
      quoteBn: 'আমাদের কলেজের ডিজিটাল পরিচিতি এখন ঢাকার সেরা কলেজগুলোর সাথে প্রতিযোগিতা করার মতো পেশাদার ও আকর্ষণীয়।',
      quoteEn: 'Our collegiate digital identity now matches the standard of premier nationwide colleges.',
      authorBn: 'ড. নাসরিন জাহান',
      authorEn: 'Dr. Nasreen Jahan',
      roleBn: 'উপাধ্যক্ষ',
      roleEn: 'Vice Principal'
    }
  },
  {
    id: 'al-hikmah-madrasa',
    titleBn: 'আল-হিকমাহ ইসলামিক একাডেমি ও কামিল মাদ্রাসা',
    titleEn: 'Al-Hikmah Islamic Academy & Kamil Madrasa',
    institutionBn: 'আল-হিকমাহ ইসলামিক একাডেমি',
    institutionEn: 'Al-Hikmah Islamic Academy',
    type: 'madrasa',
    categoryLabelBn: 'মাদ্রাসা তথ্যকোষ',
    categoryLabelEn: 'Madrasa Portal',
    locationBn: 'মিরপুর, ঢাকা',
    locationEn: 'Mirpur, Dhaka',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    summaryBn: 'হিফজুল কুরআন বিভাগ, কিতাবখানা ক্যাটালগ ও প্রবাসীদের জন্য অনলাইন দান সংগ্রহের নিরাপদ গেটওয়ে সমন্বিত আধুনিক পোর্টাল।',
    summaryEn: 'Integrated Hifz academic records, Islamic library book repository, and secure donor sponsorship channels for domestic & diaspora supporters.',
    challengeBn: 'পূর্বে মাদ্রাসার কার্যক্রম প্রবাসে অবস্থানরত শুভাকাঙ্ক্ষী ও অভিভাবকদের কাছে পৌঁছানো কঠিন ছিল এবং দান সংগ্রহে কোনো স্বচ্ছ ডিজিটাল চ্যানেল ছিল না।',
    challengeEn: 'Struggled to connect with diaspora donors and expatriate guardians, lacking transparent digital channels for orphan sponsorship and donation.',
    goalsBn: [
      'নান্দনিক ইসলামিক টাইপোগ্রাফি ও আরবি-বাংলা ইন্টারফেস',
      'হিফজ ও কিতাব বিভাগের পরীক্ষার ফলাফল প্রকাশ',
      'অনলাইন যাকাত ও এতিমখানা অনুদানের নিরাপদ গেটওয়ে'
    ],
    goalsEn: [
      'Culturally refined Arabic-Bangla typography layout',
      'Automated semester grades for Hifz & Kitab branches',
      'Secure donation & orphan sponsorship portal'
    ],
    solutionBn: 'আরবি ও বাংলা সমন্বিত একটি মার্জিত প্ল্যাটফর্ম তৈরি করা হয়েছে যাতে রয়েছে লাইভ হিজরি ক্যালেন্ডার, ওয়াজ মাহফিলের নোটিশ এবং স্বয়ংক্রিয় মানিরিসিপ্টসহ ডোনেশন সিস্টেম।',
    solutionEn: 'Crafted an elegant Islamic aesthetic with Hijri calendar widgets, conference updates, and an instant automated donation receipt generator.',
    techStack: ['Next.js', 'Tailwind CSS', 'Payment API', 'Cloud Storage'],
    adminFeaturesBn: [
      'অনলাইন অনুদানের তাৎক্ষণিক বিবরণী ও ডোনার তালিকা',
      'হিফজুল কুরআন সম্পন্নকারী হাফেজদের তালিকা প্রদর্শন',
      'বার্ষিক ইসলামিক সম্মেলন ও পরীক্ষার সময়সূচি প্রকাশ'
    ],
    adminFeaturesEn: [
      'Real-time donation ledger & donor recognition list',
      'Huffaz graduate register & certificate log',
      'Islamic conference schedule & exam circular publisher'
    ],
    performanceMetrics: {
      speedScore: 99,
      mobileIndex: 100,
      loadTime: '0.7s',
      uptime: '99.98%'
    },
    resultsBn: [
      'যুক্তরাজ্য, মধ্যপ্রাচ্য ও যুক্তরাষ্ট্র থেকে প্রতি মাসে স্বয়ংক্রিয় দান সংগ্রহ',
      'হিফজ বিভাগে নতুন ভর্তি আবেদন দ্বিগুণ হয়েছে',
      'স্থানীয় অভিভাবকদের মধ্যে মাদ্রাসার গ্রহণযোগ্যতা ও সম্মান বৃদ্ধি'
    ],
    resultsEn: [
      'Automated monthly donations from UK, Middle East & US',
      'Doubled prospective Hifz wing enrollments',
      'Enhanced institutional prestige among community elders'
    ],
    testimonial: {
      quoteBn: 'CampusDev-এর মার্জিত ডিজাইন ও সততাপূর্ণ সেবায় আমরা অত্যন্ত সন্তুষ্ট। প্রবাসী ভাইয়েরা এখন সরাসরি সাইট থেকেই আমাদের সাথে যুক্ত হন।',
      quoteEn: 'CampusDev delivered with utmost sincerity and craftsmanship. Expatriate sponsors now connect with us directly.',
      authorBn: 'মাওলানা হাফেজ আব্দুর রহমান',
      authorEn: 'Mawlana Hafez Abdur Rahman',
      roleBn: 'মুহতামিম',
      roleEn: 'Principal & Muhtamim'
    }
  },
  {
    id: 'pioneer-cadet-academy',
    titleBn: 'পায়োনিয়ার মডেল ক্যাডেট একাডেমি ও রেসিডেন্সিয়াল স্কুল',
    titleEn: 'Pioneer Model Cadet Academy',
    institutionBn: 'পায়োনিয়ার ক্যাডেট একাডেমি',
    institutionEn: 'Pioneer Cadet Academy',
    type: 'custom',
    categoryLabelBn: 'ক্যাডেট স্কুল',
    categoryLabelEn: 'Cadet Academy',
    locationBn: 'গাজীপুর',
    locationEn: 'Gazipur',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    summaryBn: 'ক্যাডেট ভর্তি পরীক্ষা প্রস্তুতি ও রেসিডেন্সিয়াল ক্যাম্পাসের স্পেশালাইজড রেজিস্ট্রেশন সিস্টেম।',
    summaryEn: 'Specialized cadet mock exam registration, residential hostel guidelines, and dynamic digital notice board.',
    challengeBn: 'ক্যাডেট ভর্তি পরীক্ষার জন্য দেশজুড়ে আবেদনকারীদের শারীরিক ফরম পূরণ ও প্রবেশপত্র সংগ্রহ অত্যন্ত জটিল হয়ে উঠেছিল।',
    challengeEn: 'Managing physical cadet admission applications and paper admit cards across multiple districts was a logistical bottleneck.',
    goalsBn: [
      'অনলাইন আবেদন ফরম ও স্বয়ংক্রিয় প্রবেশপত্র (Admit Card) প্রিন্ট',
      'ক্যাডেট কলেজ সাফল্য ও প্রাক্তন ক্যাডেটদের পরিচিতি তুলে ধরা',
      'মোবাইল-বান্ধব দ্রুতগতির ইউজার ইন্টারফেস'
    ],
    goalsEn: [
      'Automated online registration & instant admit card generator',
      'Cadet college selection hall of fame & alumni directory',
      'Ultra-fast mobile UI for rural guardians'
    ],
    solutionBn: 'স্বয়ংক্রিয় রোল নাম্বার ও বারকোডযুক্ত প্রবেশপত্র প্রিন্টিং পোর্টাল তৈরি করা হয়েছে। অভিভাবকরা বিকাশ/নগদ পেমেন্ট সম্পন্ন করে নিমেষেই প্রবেশপত্র ডাউনলোড করতে পারেন।',
    solutionEn: 'Engineered an automated applicant ledger that delivers a printable PDF admit card with barcode upon payment verification.',
    techStack: ['React', 'Tailwind', 'PDF Engine', 'SMS Notification API'],
    adminFeaturesBn: [
      'পরীক্ষার্থীদের সিট প্ল্যান ও রুম নম্বর স্বয়ংক্রিয় বন্টন',
      'এসএমএসের মাধ্যমে রোল নম্বর ও পরীক্ষার তারিখ পাঠানো',
      'মক টেস্টের রেজাল্ট শিট প্রস্তুতকরণ'
    ],
    adminFeaturesEn: [
      'Automated examination hall seating allocator',
      'Bulk SMS sender for admit roll & exam schedules',
      'Instant cadet mock test ranking generator'
    ],
    performanceMetrics: {
      speedScore: 100,
      mobileIndex: 100,
      loadTime: '0.6s',
      uptime: '100%'
    },
    resultsBn: [
      '৪,৫০০+ ক্যাডেট পরীক্ষার্থীর আবেদন অনলাইনে সম্পন্ন',
      'প্রবেশপত্র বিতরণ খরচ ৯০% সাশ্রয়',
      'অভিভাবকদের ভোগান্তি শূন্যে নেমে এসেছে'
    ],
    resultsEn: [
      '4,500+ cadet applicants registered completely online',
      '90% savings in paper admit card logistics',
      'Zero parent waiting time at the campus office'
    ],
    testimonial: {
      quoteBn: 'আমাদের প্রত্যাশার চেয়েও অনেক দ্রুত এবং নিরাপদ সিস্টেম উপহার দিয়েছে CampusDev। ক্যাডেট এডমিশন ব্যবস্থাপনায় এটি এক যুগান্তকারী পদক্ষেপ।',
      quoteEn: 'CampusDev delivered an experience far beyond our expectations. A revolutionary upgrade to our cadet intake.',
      authorBn: 'লেফটেন্যান্ট (অব:) এম এ বারী',
      authorEn: 'Lt. (Retd.) M A Bari',
      roleBn: 'পরিচালক',
      roleEn: 'Managing Director'
    }
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'starter',
    nameBn: 'স্টার্টার প্যাকেজ',
    nameEn: 'Starter Plan',
    subtitleBn: 'ছোট স্কুল, কিন্ডারগার্টেন ও স্থানীয় মাদ্রাসার প্রাথমিক ডিজিটাল রূপান্তরের জন্য আদর্শ',
    subtitleEn: 'Ideal for local kindergartens, primary schools & local madrasas',
    priceBn: '৳১৮,৫০০',
    priceEn: 'BDT 18,500',
    popular: false,
    deliveryTimeBn: '৫ কার্যদিবস',
    deliveryTimeEn: '5 Working Days',
    supportDurationBn: '১ বছর ফ্রি টেক সাপোর্ট',
    supportDurationEn: '1 Year Free Support',
    ctaTextBn: 'স্টার্টার প্ল্যান বুক করুন',
    ctaTextEn: 'Book Starter Plan',
    featuresBn: [
      '৫ থেকে ৭ পৃষ্ঠার কাস্টম মোবাইল-ফার্স্ট ডিজাইন',
      'ডায়নামিক নোটিশ বোর্ড ও সার্কুলার আর্কাইভ',
      'স্মার্ট ফটো গ্যালারি ও শিক্ষক প্রোফাইল',
      'সহজ বাংলা অ্যাডমিন প্যানেল (মোবাইল থেকে পরিচালনাযোগ্য)',
      'গুগল ম্যাপ ও ওয়ান-ক্লিক হোয়াটসঅ্যাপ ইন্টিগ্রেশন',
      'ফ্রি ১ বছর হাই-স্পিড NVMe হোস্টিং ও SSL সার্টিফিকেট',
      '১০০% নিরাপদ ও এসইও ফ্রেন্ডলি কাঠামো'
    ],
    featuresEn: [
      '5 to 7 Pages Custom Mobile-First Design',
      'Dynamic Notice Board & Circular Archive',
      'Smart Event Photo Gallery & Staff Directory',
      'Easy Bengali Admin Dashboard (Phone Manageable)',
      'Google Maps Location & 1-Click WhatsApp Support',
      'Free 1 Year NVMe SSD Hosting & SSL Certificate',
      '100% Secure & Basic On-Page SEO Architecture'
    ]
  },
  {
    id: 'professional',
    nameBn: 'প্রফেশনাল পোর্টাল',
    nameEn: 'Professional Portal',
    subtitleBn: 'সুপ্রতিষ্ঠিত হাই স্কুল, কলেজ ও মাদ্রাসার জন্য সর্বাধিক জনপ্রিয় পূর্ণাঙ্গ সল্যুশন',
    subtitleEn: 'Most popular full-fledged portal for established schools, colleges & madrasas',
    priceBn: '৳২৮,৫০০',
    priceEn: 'BDT 28,500',
    popular: true,
    deliveryTimeBn: '৭ কার্যদিবস',
    deliveryTimeEn: '7 Working Days',
    supportDurationBn: '১ বছর প্রায়োরিটি ভিআইপি সাপোর্ট',
    supportDurationEn: '1 Year Priority Support',
    ctaTextBn: 'প্রফেশনাল প্যাকেজ নিন',
    ctaTextEn: 'Get Professional Plan',
    featuresBn: [
      'আনলিমিটেড ডায়নামিক পেজ ও ক্যাটাগরি তৈরি',
      'অনলাইন ভর্তি আবেদন ও প্রিন্টযোগ্য আবেদনপত্র ফরম',
      'এক্সেল শিট দিয়ে স্বয়ংক্রিয় রেজাল্ট সার্চ পোর্টাল',
      'দ্বিভাষিক সুইচ (এক ক্লিকে বাংলা ও ইংরেজি)',
      'ক্লাস রুটিন, সিলেবাস ও একাডেমিক ফাইল ডাউনলোডার',
      'শিক্ষক, পরিচালনা কমিটি ও কৃতি শিক্ষার্থীদের আর্কাইভ',
      'হাই-স্পিড ডেডিকেটেড ক্লাউড ব্যাকআপ সিস্টেম',
      'অফিস স্টাফদের জন্য সরাসরি ভিডিও ট্রেনিং ও ম্যানুয়াল',
      '১ বছর পূর্ণাঙ্গ টেকনিক্যাল মেইনটেন্যান্স অন্তর্ভুক্ত'
    ],
    featuresEn: [
      'Unlimited Dynamic Pages & Content Categories',
      'Online Student Admission & Printable PDF Application',
      'Bulk Excel-to-Result Automated Search Engine',
      'Seamless Bilingual Switch (Bangla + English)',
      'Class Routine, Syllabus & Academic Downloads',
      'Teacher, Governing Body & Alumni Merit Index',
      'High-Speed Dedicated Cloud Automated Backup',
      'Hands-on Video Training & Admin Manual for Staff',
      'Full 1 Year Priority Maintenance Support'
    ]
  },
  {
    id: 'premium',
    nameBn: 'প্রিমিয়াম এন্টারপ্রাইজ',
    nameEn: 'Premium Enterprise',
    subtitleBn: 'বৃহৎ শিক্ষা প্রতিষ্ঠান, কলেজ নেটওয়ার্ক ও মাল্টি-ক্যাম্পাস গ্রুপের জন্য বিশেষায়িত',
    subtitleEn: 'Engineered for prestigious college networks & multi-campus academic trusts',
    priceBn: '৳৪৫,০০০',
    priceEn: 'BDT 45,000',
    popular: false,
    deliveryTimeBn: '১০ থেকে ১২ কার্যদিবস',
    deliveryTimeEn: '10 to 12 Working Days',
    supportDurationBn: '২ বছর ভিআইপি কনসিয়ার্জ সাপোর্ট',
    supportDurationEn: '2 Years Concierge Support',
    ctaTextBn: 'প্রিমিয়াম প্ল্যান শুরু করুন',
    ctaTextEn: 'Start Premium Plan',
    featuresBn: [
      'মাল্টিপল ক্যাম্পাস / ব্রাঞ্চ সেন্ট্রালাইজড ম্যানেজমেন্ট',
      'অনলাইন ফি ও টিউশন ফি কালেকশন গেটওয়ে (বিকাশ/নগদ/কার্ড)',
      'বাল্ক এসএমএস নোটিফিকেশন গেটওয়ে ইন্টিগ্রেশন',
      'ডিজিটাল লাইব্রেরি ও বুক ইস্যু ক্যাটালগ সিস্টেম',
      'কাস্টম এডমিট কার্ড ও আইডি কার্ড জেনারেটর মডিউল',
      'ডেডিকেটেড ক্লাউড সার্ভার ও সর্বোচ্চ এনক্রিপশন',
      'মাসিক সাইট হেলথ ও ট্রাফিক অ্যানালিটিক্স রিপোর্ট',
      '২৪/৭ ডেডিকেটেড সিনিয়র ইঞ্জিনিয়ারের সরাসরি সাপোর্ট'
    ],
    featuresEn: [
      'Centralized Multi-Campus / Multi-Branch Controls',
      'Online Tuition & Fee Gateway (bKash/Nagad/Card)',
      'Automated Bulk SMS Notification Integration',
      'Digital Library Book Catalog & Circulation Index',
      'Custom Student Admit Card & ID Badge Generator',
      'Dedicated Enterprise Cloud Server & Bank-Grade Cipher',
      'Monthly Site Health & Parent Visitor Analytics',
      '24/7 Dedicated Senior Engineer Direct Hotline'
    ]
  }
];

export const MAINTENANCE_DATA: MaintenanceTier[] = [
  {
    id: 'basic-care',
    nameBn: 'বেসিক কেয়ার',
    nameEn: 'Basic Care',
    priceBn: '৳১,২০০',
    priceEn: 'BDT 1,200',
    frequencyBn: '/প্রতি মাস (বার্ষিক বিলিং)',
    frequencyEn: '/per month (billed annually)',
    featuresBn: [
      'সাপ্তাহিক ক্লাউড ডাটাবেজ ব্যাকআপ',
      'মাসে ২টি জরুরি নোটিশ বা ছবি আপডেট সহায়তা',
      '৯৯.৯% হোস্টিং আপটাইম মনিটরিং',
      'ফ্রি এসএসএল সিকিউরিটি নবায়ন',
      'ইমেইল ও হোয়াটসঅ্যাপ সাপোর্ট'
    ],
    featuresEn: [
      'Weekly automated cloud snapshot',
      'Up to 2 urgent monthly circular/photo updates',
      '99.9% cloud server uptime monitoring',
      'Continuous SSL renewal and HTTPS verification',
      'Email & WhatsApp standard assistance'
    ]
  },
  {
    id: 'pro-care',
    nameBn: 'প্রফেশনাল কেয়ার',
    nameEn: 'Professional Care',
    priceBn: '৳২,৫০০',
    priceEn: 'BDT 2,500',
    frequencyBn: '/প্রতি মাস (বার্ষিক বিলিং)',
    frequencyEn: '/per month (billed annually)',
    featuresBn: [
      'দৈনিক ক্লাউড ডাটাবেজ অটো ব্যাকআপ',
      'মাসে আনলিমিটেড নোটিশ ও ফলাফল আপলোড সহায়তা',
      'সার্ভার স্পিড অপ্টিমাইজেশন ও ক্যাশ ক্লিয়ারিং',
      'নিয়মিত নিরাপত্তা স্ক্যান ও অ্যান্টি-ম্যালওয়্যার গার্ড',
      'অগ্রাধিকারমূলক ফোন ও হোয়াটসঅ্যাপ হটলাইন সাপোর্ট'
    ],
    featuresEn: [
      'Daily automated cloud database backup',
      'Unlimited routine notice & result updates',
      'Server speed tuning & cache optimization',
      'Proactive security vulnerability scans & malware guard',
      'Direct priority WhatsApp & telephone hotline'
    ]
  },
  {
    id: 'enterprise-care',
    nameBn: 'ভিআইপি এন্টারপ্রাইজ কেয়ার',
    nameEn: 'VIP Enterprise Care',
    priceBn: '৳৪,৫০০',
    priceEn: 'BDT 4,500',
    frequencyBn: '/প্রতি মাস (বার্ষিক বিলিং)',
    frequencyEn: '/per month (billed annually)',
    featuresBn: [
      'রিয়েল-টাইম ডাটা মিররিং ও ক্লাউড রিডানড্যান্সি',
      'নতুন পেজ তৈরি ও বার্ষিক ইভেন্ট ব্যানার ডিজাইন সহায়তা',
      'ভর্তি সেশনের সময় ডেডিকেটেড ইঞ্জিনিয়ার অন-কল মনিটরিং',
      'সার্চ ইঞ্জিন (SEO) র‍্যাঙ্কিং ট্র্যাকিং রিপোর্ট',
      '২৪/৭ ডেডিকেটেড টেক টিম ও ১ ঘণ্টার রেসপন্স গ্যারান্টি'
    ],
    featuresEn: [
      'Real-time data replication & multi-zone failover',
      'Seasonal promotional banner & landing page creation',
      'Dedicated standby engineer during admission rush',
      'Monthly Search Engine Optimization (SEO) audit report',
      '24/7 dedicated engineering response under 60 minutes'
    ]
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    titleBn: 'Discovery & Consultation',
    titleEn: 'Discovery & Consultation',
    descBn: 'প্রথম সাক্ষাতে আপনার প্রতিষ্ঠানের লক্ষ্য, শিক্ষার্থী সংখ্যা এবং বর্তমান প্রয়োজনীয়তা গভীরভাবে পর্যালোচনা করা হয়।',
    descEn: 'We understand your institution goals, student volume, current bottlenecks, and distinct branding needs.',
    icon: 'Search'
  },
  {
    step: '02',
    titleBn: 'Planning & Sitemap',
    titleEn: 'Planning & Architecture',
    descBn: 'সাইটম্যাপ নির্ধারণ, তথ্য বিন্যাস, ডাটাবেজ মডেল এবং কনটেন্ট সংগ্রহের পূর্ণাঙ্গ ফ্রেমওয়ার্ক প্রস্তুত করা হয়।',
    descEn: 'Structuring intuitive sitemaps, data structures, departmental flows, and content asset guidelines.',
    icon: 'Network'
  },
  {
    step: '03',
    titleBn: 'UI/UX Prototype Design',
    titleEn: 'UI/UX Design',
    descBn: 'প্রতিষ্ঠানের লোগো ও ব্র্যান্ড রঙের সাথে মিল রেখে আধুনিক, পরিচ্ছন্ন ও মোবাইল-ফার্স্ট ভিজ্যুয়াল প্রোটোটাইপ।',
    descEn: 'Crafting modern, authoritative layouts tailored to parents, board members, and students.',
    icon: 'Palette'
  },
  {
    step: '04',
    titleBn: 'Modern Development',
    titleEn: 'Development & CMS',
    descBn: 'সুপার-ফাস্ট কোডিং ফ্রেমওয়ার্ক এবং যে-কারও ব্যবহারযোগ্য সহজ বাংলা অ্যাডমিন ড্যাশবোর্ড তৈরি করা।',
    descEn: 'Engineering clean TypeScript code paired with an intuitive Bengali-English content engine.',
    icon: 'Code2'
  },
  {
    step: '05',
    titleBn: 'Quality & Speed Testing',
    titleEn: 'Rigorous Testing',
    descBn: 'বিভিন্ন স্মার্টফোন, ট্যাবলেট এবং কম্পিউটারে স্ক্রিনের রেসপনসিভনেস ও সাইট সিকিউরিটি টেস্ট করা হয়।',
    descEn: 'Stress-testing speed, security firewall, responsive viewports, and automated result search.',
    icon: 'CheckCircle2'
  },
  {
    step: '06',
    titleBn: 'Launch & Admin Training',
    titleEn: 'Launch & Training',
    descBn: 'নিজস্ব ডোমেনে ওয়েবসাইট লাইভ করা এবং প্রতিষ্ঠানের পরিচালনা টিমকে সহজে পরিচালনার ভিডিও ও লাইভ প্রশিক্ষণ দেওয়া।',
    descEn: 'Deploying live on your institutional domain with hands-on staff training and step-by-step videos.',
    icon: 'Rocket'
  }
];

export const WHY_US_ITEMS = [
  {
    id: 'built-for-edu',
    titleBn: 'Built Purely for Education',
    titleEn: 'Built Purely for Education',
    descBn: 'আমরা কোনো সাধারণ জেনেরিক এজেন্সি নই। বাংলাদেশের শিক্ষা বোর্ড নিয়মনীতি, পরীক্ষা গ্রেডিং এবং ভর্তি সেশনের সূক্ষ্ম চাহিদা আমাদের নখদর্পণে।',
    descEn: 'Unlike generic web agencies, we understand board regulations, grading GPA matrices, and seasonal admission rushes deeply.',
    icon: 'GraduationCap'
  },
  {
    id: 'mobile-first',
    titleBn: '১০০% মোবাইল-ফার্স্ট এক্সপেরিয়েন্স',
    titleEn: '100% Mobile-First Excellence',
    descBn: 'বাংলাদেশে ৮৫%+ অভিভাবক স্মার্টফোন থেকে স্কুল ওয়েবসাইট ভিজিট করেন। আমাদের কোড প্রথম থেকেই স্মার্টফোনে সর্বোচ্চ গতি নিশ্চিত করে।',
    descEn: '85%+ Bangladeshi parents visit from smartphones. We engineer every component for fluid mobile touch ergonomics.',
    icon: 'Smartphone'
  },
  {
    id: 'easy-to-manage',
    titleBn: 'সহজে পরিচালনাযোগ্য (যে কেউ পারবে)',
    titleEn: 'Easy to Manage (No Coding)',
    descBn: 'কোনো জটিল কোডিং বা টেকনিক্যাল জ্ঞানের প্রয়োজন নেই। ফেসবুক ব্যবহারের মতোই সহজে যেকোনো শিক্ষক নোটিশ ও ছবি আপলোড করতে পারবেন।',
    descEn: 'Zero programming knowledge required. Any office staff or teacher updates notices and gallery albums within 2 minutes.',
    icon: 'LayoutDashboard'
  },
  {
    id: 'custom-built',
    titleBn: 'কাস্টম কোডিং ও দীর্ঘস্থায়ী স্থায়িত্ব',
    titleEn: 'Custom Built & Highly Scalable',
    descBn: 'কোনো স্লো রেডিমেড ওয়ার্ডপ্রেস থিম নয়। আধুনিক কাস্টম কোডিংয়ে তৈরি, ফলে হাজার হাজার অভিভাবক একসাথে সাইটে ঢুকলেও কখনো ক্র্যাশ করে না।',
    descEn: 'No clunky generic themes. Built with modern web architecture that stands firm during high-traffic result publishing spikes.',
    icon: 'Cpu'
  },
  {
    id: 'fast-and-secure',
    titleBn: 'আল্ট্রা ফাস্ট ও ব্যাংক-গ্রেড নিরাপত্তা',
    titleEn: 'Ultra Fast & Bank-Grade Security',
    descBn: '১ সেকেন্ডের কম সময়ে পেজ লোড হয়। ছাত্র-ছাত্রী ও পরীক্ষার সকল গোপন তথ্য এনক্রিপ্টেড ক্লাউড ফায়ারওয়াল দ্বারা সুরক্ষিত থাকে।',
    descEn: 'Loads under 1 second. Student credentials and marks archives are guarded behind automated cloud backup & SSL encryption.',
    icon: 'Shield'
  },
  {
    id: 'long-term-support',
    titleBn: 'দীর্ঘমেয়াদী বিশ্বস্ত পার্টনারশিপ',
    titleEn: 'Long-Term Reliable Partnership',
    descBn: 'ওয়েবসাইট হ্যান্ডওভারের পরেও আমাদের দায়িত্ব শেষ হয় না। বাৎসরিক সাপোর্ট টিম সবসময় আপনার সাথে থাকে জরুরি প্রয়োজনে।',
    descEn: 'Our commitment does not end at launch. Dedicated local support engineers stand beside your academic staff year-round.',
    icon: 'Headphones'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    nameBn: 'মোহাম্মদ মোতাহার হোসেন',
    nameEn: 'Mohammad Motahar Hossain',
    roleBn: 'প্রধান শিক্ষক',
    roleEn: 'Headmaster',
    institutionBn: 'ধানমন্ডি মডেল একাডেমি, ঢাকা',
    institutionEn: 'Dhanmondi Model Academy, Dhaka',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    quoteBn: 'পূর্বে একটি সাধারণ ওয়েবসাইট ছিল যা পরিচালনায় আমাদের চরম বেগ পেতে হতো। CampusDev-এর তৈরি প্যানেলটি এতো সহজ যে আমাদের স্কুলের কম্পিউটার শিক্ষক মাত্র ২ মিনিটে নোটিশ ও পরীক্ষার রেজাল্ট আপলোড করে ফেলেন।',
    quoteEn: 'Our previous website was rigid and broken. CampusDev built a system so effortless that our computer teacher publishes exam results in under two minutes.',
    rating: 5
  },
  {
    id: 'test-2',
    nameBn: 'ড. নাসরিন জাহান',
    nameEn: 'Dr. Nasreen Jahan',
    roleBn: 'উপাধ্যক্ষ',
    roleEn: 'Vice Principal',
    institutionBn: 'গ্রীনল্যান্ড সিটি কলেজ, ঢাকা',
    institutionEn: 'Greenland City College, Dhaka',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    quoteBn: 'আমাদের কলেজের এইচএসসি ও ডিগ্রি অনলাইন ভর্তি পরিচালনা এবার রেকর্ড দ্রুততায় সম্পন্ন হয়েছে। অভিভাবকরা ঘরে বসেই ফরম ফিলাপ করতে পেরে অত্যন্ত আনন্দিত। তাদের কারিগরি সহায়তা প্রশংসার যোগ্য।',
    quoteEn: 'Digital college admissions this term was completed in record time. Parents could apply smoothly from their mobile phones.',
    rating: 5
  },
  {
    id: 'test-3',
    nameBn: 'মাওলানা হাফেজ আব্দুর রহমান',
    nameEn: 'Mawlana Hafez Abdur Rahman',
    roleBn: 'মুহতামিম',
    roleEn: 'Principal & Muhtamim',
    institutionBn: 'জামিয়া ইসলামিয়া দারুল উলুম মাদ্রাসা',
    institutionEn: 'Jamia Islamia Darul Uloom Madrasa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quoteBn: 'মাদ্রাসার জন্য হিফজ শাখার আলাদা ডাটাবেজ এবং আরবি-বাংলা ফন্টের সমন্বয়ে এতো নান্দনিক ওয়েবসাইট আমরা আগে কোথাও দেখিনি। সাইটটি দ্রুত লোড হয় এবং প্রবাসী অভিভাবকরাও নিয়মিত ভিজিট করেন।',
    quoteEn: 'We have never seen such an exquisite Arabic-Bangla typography balance paired with a dedicated Hifz database. Expatriates visit frequently.',
    rating: 5
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    questionBn: '১. একটি পূর্ণাঙ্গ ওয়েবসাইট ডেলিভারি দিতে কতদিন সময় লাগে?',
    questionEn: 'How many days does it take to deliver a completed website?',
    answerBn: 'প্রতিষ্ঠানের তথ্য, ছবি এবং লোগো পাওয়ার পর সাধারণত ৫ থেকে ৭ কার্যদিবসের মধ্যে স্টার্টার ও প্রফেশনাল ওয়েবসাইট সম্পূর্ণরূপে প্রস্তুত করে লাইভ করা হয়। কাস্টম বড় প্রজেক্টের ক্ষেত্রে আলোচনার ভিত্তিতে সময়সীমা নির্ধারিত হয়।',
    answerEn: 'Upon receiving your institutional content, logo, and photos, we typically deliver Starter and Professional packages in 5 to 7 working days. Larger enterprise scopes are scheduled by mutual agreement.'
  },
  {
    questionBn: '২. ডোমেন এবং হোস্টিং কি আপনাদের প্যাকেজের সাথে অন্তর্ভুক্ত?',
    questionEn: 'Are domain registration and cloud hosting included in the package?',
    answerBn: 'হ্যাঁ, আমাদের প্রতিটি প্যাকেজের সাথে প্রথম ১ বছরের জন্য সুপার-ফাস্ট NVMe ক্লাউড হোস্টিং, ফ্রি SSL সিকিউরিটি সার্টিফিকেট এবং ডোমেন কনফিগারেশন সাপোর্ট সম্পূর্ণ বিনামূল্যে প্রদান করা হয়।',
    answerEn: 'Yes, every package includes complimentary 1-year NVMe high-speed SSD cloud hosting, enterprise SSL security certificates, and complete DNS configuration.'
  },
  {
    questionBn: '৩. পরবর্তীতে আমরা কি নিজেরা তথ্য, নোটিশ ও ছবি আপডেট করতে পারব?',
    questionEn: 'Can our staff update circulars, results, and images independently?',
    answerBn: 'অবশ্যই! আমাদের মূল বিশেষত্বই হলো সহজ বাংলা ও ইংরেজি সাপোর্টেড অ্যাডমিন ড্যাশবোর্ড। কোনো টেকনিক্যাল জ্ঞান ছাড়াই যেকোনো শিক্ষক ফেসবুক বা সোশ্যাল মিডিয়া ব্যবহারের মতোই সহজে নোটিশ ও ছবি আপলোড করতে পারবেন। সাথে ভিডিও গাইডও দেওয়া হয়।',
    answerEn: 'Absolutely! Our signature feature is a streamlined bilingual administrative portal. Any teacher can draft circulars and upload photos in minutes without any coding experience.'
  },
  {
    questionBn: '৪. ওয়েবসাইট হস্তান্তরের পর মেইনটেন্যান্স বা সাপোর্ট কীভাবে দেওয়া হয়?',
    questionEn: 'How do you handle maintenance and technical support after launch?',
    answerBn: 'প্রথম ১ বছর সম্পূর্ণ ফ্রি টেকনিক্যাল সাপোর্ট দেওয়া হয়। যেকোনো টেকনিক্যাল সমস্যা, সার্ভার জটিলতা বা প্রশ্ন দেখা দিলে আমাদের ডেডিকেটেড হটলাইন ও হোয়াটসঅ্যাপ নাম্বারে যোগাযোগ করা মাত্রই সমাধান দেওয়া হয়।',
    answerEn: 'All plans include 1 year of free priority technical support. You can reach our dedicated WhatsApp and phone hotlines anytime for prompt resolution.'
  },
  {
    questionBn: '৫. পেমেন্ট পদ্ধতি কী এবং কিস্তিতে পরিশোধের সুযোগ আছে কি?',
    questionEn: 'What is the payment procedure? Can we pay in milestones?',
    answerBn: 'আমরা সাধারণত দুই ধাপে পেমেন্ট গ্রহণ করি: ৫০% প্রজেক্ট শুরুর এগ্রিমেন্ট সাইন করার সময় এবং অবশিষ্ট ৫০% কাজ সম্পূর্ণ শেষ হয়ে প্রতিষ্ঠানের পক্ষ থেকে অনুমোদন পাওয়ার পর। বিকাশ, নগদ, ব্যাংক ট্রান্সফার বা চেকে পেমেন্ট করা যায়।',
    answerEn: 'We work with a transparent two-milestone process: 50% upon project kickoff and agreement, and the remaining 50% upon full delivery and your official sign-off. We accept bKash, Nagad, Bank Transfer, and Cheques.'
  },
  {
    questionBn: '৬. মোবাইল ফোনে ওয়েবসাইটটি ব্যবহারে কোনো সমস্যা হবে কি?',
    questionEn: 'Will the website function smoothly on mobile smartphones?',
    answerBn: 'একদমই নয়! আমাদের সমস্ত ওয়েবসাইট "Mobile-First" দর্শনে নির্মিত। ফলে যেকোনো ব্র্যান্ড ও স্ক্রিন সাইজের স্মার্টফোনে ফন্ট, মেনু ও ছবি স্বয়ংক্রিয়ভাবে খাপ খেয়ে অত্যন্ত দ্রুত ও মসৃণ অভিজ্ঞতা দেয়।',
    answerEn: 'Not at all. Every solution is architected with a Mobile-First philosophy, delivering swift loading, readable Bangla typography, and seamless touch controls on every smartphone.'
  },
  {
    questionBn: '৭. আমাদের পূর্বের ওয়েবসাইটের পুরোনো নোটিশ ও ডাটা কি নতুন সাইটে আনা যাবে?',
    questionEn: 'Can our previous website records and archives be migrated?',
    answerBn: 'হ্যাঁ, আপনার পুরোনো ওয়েবসাইটের সকল আর্কাইভ নোটিশ, পরীক্ষার ফলাফল শিট, শিক্ষক ডিরেক্টরি এবং ঐতিহাসিক ছবি কোনো ক্ষতি ছাড়াই আমাদের ইঞ্জিনিয়াররা নতুন আধুনিক সাইটে মাইগ্রেশন করে দেবেন।',
    answerEn: 'Yes, our engineering team handles full data migration, transferring historic circulars, exam archives, teacher rosters, and media safely into your new modern database.'
  },
  {
    questionBn: '৮. ভবিষ্যতে কি অনলাইন পেমেন্ট বা নতুন কোনো ফিচার যোগ করা যাবে?',
    questionEn: 'Can we add online tuition payment or SMS alerts in the future?',
    answerBn: 'নিশ্চয়ই। আমাদের আর্কিটেকচার সম্পূর্ণ মডুলার। ফলে ভবিষ্যতে যেকোনো সময় প্রতিষ্ঠান চাইলে বিকাশ/নগদ টিউশন ফি কালেকশন, এসএমএস নোটিফিকেশন বা বায়োমেট্রিক উপস্থিতি সিস্টেম অনায়াসেই যুক্ত করতে পারবে।',
    answerEn: 'Certainly. Our codebase is completely modular, allowing seamless integration of bKash/Nagad tuition payment gateways, automated SMS alerts, or biometric attendance systems whenever you require.'
  }
];

export const BLOG_POSTS = [
  {
    id: 'why-madrasa-website-needed',
    titleBn: 'বর্তমান যুগে একটি আধুনিক মাদ্রাসা ওয়েবসাইটের কেন কোনো বিকল্প নেই',
    titleEn: 'Why Modern Madrasas Urgently Need a Professional Digital Portal',
    date: '২০ মে, ২০২৫',
    categoryBn: 'মাদ্রাসা গাইড',
    categoryEn: 'Madrasa Guide',
    readTime: '৪ মিনিট',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
    excerptBn: 'প্রবাসী দান সংগ্রহ, হিফজ শিক্ষার্থীদের অগ্রগতি পর্যবেক্ষণ এবং সাধারণ মানুষের কাছে মাদ্রাসার সহীহ দ্বীনি অবস্থান তুলে ধরতে ওয়েবসাইটের গুরুত্ব অপরিসীম।',
    excerptEn: 'From transparent international donor sponsorship to real-time Hifz progress tracking, discovering the vital impact of modern madrasa portals.'
  },
  {
    id: 'school-essential-features',
    titleBn: 'স্কুল ওয়েবসাইটের ৮টি অত্যন্ত প্রয়োজনীয় ফিচার যা অভিভাবকদের আকৃষ্ট করে',
    titleEn: '8 Essential School Website Features Parents Actually Look For',
    date: '১৫ মে, ২০২৫',
    categoryBn: 'স্কুল টেকনোলজি',
    categoryEn: 'School Tech',
    readTime: '৫ মিনিট',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    excerptBn: 'কেবল সুন্দর ছবি নয়; মোবাইল ফ্রেন্ডলিনেস, ইনস্ট্যান্ট রেজাল্ট ভিউ এবং স্পষ্ট নোটিশ বোর্ডই একটি স্কুলের ডিজিটাল সুনাম তৈরি করে।',
    excerptEn: 'Beyond aesthetics: how mobile-first responsiveness, rapid result search, and dynamic circular archives build parental confidence.'
  },
  {
    id: 'school-security-guide',
    titleBn: 'শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট নিরাপত্তা ও ডাটা ব্যাকআপের গুরুত্ব',
    titleEn: 'Institutional Cyber Security & Data Privacy for Bangladeshi Schools',
    date: '১০ মে, ২০২৫',
    categoryBn: 'সাইবার সিকিউরিটি',
    categoryEn: 'Cyber Security',
    readTime: '৬ মিনিট',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    excerptBn: 'শিক্ষার্থীদের ব্যক্তিগত তথ্য, মোবাইল নম্বর এবং রেজাল্ট কীভাবে হ্যাকিং ও স্প্যাম থেকে নিরাপদ রাখবেন।',
    excerptEn: 'Protecting student phone registers, exam archives, and administrative logins against malware and unauthorized tampering.'
  }
];

export const RESOURCES_CHECKLIST = [
  {
    id: 'check-1',
    titleBn: 'ওয়েবসাইট তৈরির জন্য প্রয়োজনীয় তথ্যের সম্পূর্ণ চেকলিস্ট',
    titleEn: 'Complete Checklist Before Launching an Institutional Website',
    descBn: 'লোগো, অধ্যক্ষের বাণী, শিক্ষকদের তালিকা, গভর্নিং বডি ও নোটিশ প্রস্তুত রাখার একটি প্র্যাকটিক্যাল গাইডলাইন।',
    descEn: 'A ready-to-use checklist covering logo formats, principal message, teacher records, and board compliance.',
    fileType: 'PDF Checklist',
    size: '1.2 MB'
  },
  {
    id: 'check-2',
    titleBn: 'আদর্শ স্কুল ডিজিটাল প্রসপেক্টাস টেমপ্লেট',
    titleEn: 'Standard School Prospectus Structure & Content Blueprint',
    descBn: 'অভিভাবকদের কাছে আপনার স্কুলের বৈশিষ্ট্য ও ভর্তি তথ্য স্পষ্টভাবে উপস্থাপনের রেডিমেড লেআউট।',
    descEn: 'A structured blueprint for presenting curriculum, tuition policy, and co-curricular strengths effectively.',
    fileType: 'DOCX / PDF',
    size: '2.4 MB'
  },
  {
    id: 'check-3',
    titleBn: 'শিক্ষা প্রতিষ্ঠান অন-পেজ এসইও (SEO) হ্যান্ডবুক',
    titleEn: 'School Local SEO Handbook: Ranking in Google Maps & Search',
    descBn: 'গুগল সার্চ ও গুগল ম্যাপসে আপনার এলাকার অভিভাবকদের কাছে সবার প্রথমে প্রদর্শিত হওয়ার নিয়মাবলী।',
    descEn: 'Actionable steps to verify your school location on Google Maps and index important circulars.',
    fileType: 'Guidebook',
    size: '3.1 MB'
  }
];
