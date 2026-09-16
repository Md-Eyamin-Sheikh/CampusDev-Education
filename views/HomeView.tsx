'use client';
import React, { useState } from 'react';
import { Language, NavSection, CaseStudy } from '../types';
import { 
  SERVICES_DATA, 
  FEATURED_PROJECTS, 
  PRICING_DATA, 
  WORKFLOW_STEPS, 
  WHY_US_ITEMS, 
  TESTIMONIALS_DATA, 
  FAQS_DATA 
} from '../data/content';
import { AdminDemoInteractive } from '../components/AdminDemoInteractive';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  Check, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Headphones, 
  Globe, 
  FileText, 
  Users, 
  GraduationCap, 
  Building2, 
  BookOpen, 
  Layers, 
  ChevronDown, 
  MessageCircle, 
  Calculator, 
  Search, 
  CheckCircle2, 
  ExternalLink,
  School,
  Bell,
  Calendar,
  CreditCard,
  Download,
  Monitor,
  Wifi,
  ChevronRight,
  Lock
} from 'lucide-react';

interface HomeViewProps {
  language: Language;
  onNavigate: (section: NavSection) => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
  onOpenAudit: () => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  language,
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
  onOpenAudit,
  onSelectCaseStudy
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [quickEstimatorType, setQuickEstimatorType] = useState('school');
  const [heroActiveTab, setHeroActiveTab] = useState<'school' | 'college' | 'madrasa' | 'admin'>('school');
  const [heroDeviceMode, setHeroDeviceMode] = useState<'mobile' | 'desktop'>(() => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      return 'desktop';
    }
    return 'mobile';
  });

  const heroInstitutions = {
    school: {
      name: 'এপেক্স রেসিডেনসিয়াল মডেল স্কুল ও কলেজ',
      shortName: 'ARMS',
      eiin: 'EIIN: 130284 | স্থাপিত: ১৯৯৮ | ঢাকা শিক্ষা বোর্ড',
      board: 'ঢাকা শিক্ষা বোর্ড',
      heroTitle: 'জ্ঞান, শৃঙ্খলা ও নেতৃত্বের উন্মুক্ত আধুনিক পাঠশালা',
      tagline: 'ডিজিটাল ক্যাম্পাস ভিশন',
      passRate: '৯৯.৪%',
      students: '২৪০০+',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
      notice: '২০২৫ শিক্ষাবর্ষে ষষ্ঠ থেকে নবম শ্রেণিতে সরাসরি ভর্তি আবেদন ও ডিজিটাল রেজিস্ট্রেশন শুরু হয়েছে।',
      url: 'https://apexschool.edu.bd',
      principal: 'প্রফেসর মো: শহিদুল ইসলাম',
      principalRole: 'অধ্যক্ষ (ভারপ্রাপ্ত)',
      principalMsg: 'আধুনিক বিশ্বের উপযোগী দক্ষ ও নীতিবান নাগরিক হিসেবে শিক্ষার্থীদের গড়ে তোলাই আমাদের অঙ্গীকার।',
      badgeColor: 'bg-fuchsia-950/30 text-fuchsia-400 border-fuchsia-500/20'
    },
    college: {
      name: 'গ্রীনফিল্ড আইডিয়াল কলেজ',
      shortName: 'GIC',
      eiin: 'EIIN: 134562 | কোড: ২৫৪০ | উচ্চ মাধ্যমিক বোর্ড',
      board: 'উচ্চ মাধ্যমিক শিক্ষা বোর্ড',
      heroTitle: 'ভবিষ্যতের উচ্চশিক্ষা ও মেধা বিকাশের শ্রেষ্ঠ প্রাঙ্গণ',
      tagline: 'মডেল কলেজ প্রাঙ্গণ',
      passRate: '১০০%',
      students: '১৮৫০+',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
      notice: 'একাদশ শ্রেণির বিজ্ঞান ও ব্যবসায় শিক্ষা বিভাগের ল্যাব টেস্ট ও সাময়িক পরীক্ষার সূচি প্রকাশিত।',
      url: 'https://greenfieldcollege.edu.bd',
      principal: 'ড. মো: রফিকুল আলম',
      principalRole: 'অধ্যক্ষ',
      principalMsg: 'উচ্চশিক্ষায় সাফল্য ও মানবিক মূল্যবোধে বলীয়ান আগামী প্রজন্ম তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ।',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    madrasa: {
      name: 'আল-হিকমাহ ইসলামিক মডেল একাডেমি',
      shortName: 'AIMA',
      eiin: 'মাদ্রাসা বোর্ড কোড: ৪১৫২ | স্থাপিত: ২০০৮',
      board: 'বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড',
      heroTitle: 'কুরআন-সুন্নাহর আলোকে দ্বীনি ও আধুনিক যুগোপযোগী শিক্ষা',
      tagline: 'দ্বীনি ও আধুনিক সমন্বয়',
      passRate: '৯৮.৮%',
      students: '১২০০+',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80',
      notice: 'হিফজুল কুরআন বিভাগ ও নূরানী শাখায় নতুন ছাত্রদের সরাসরি ভর্তি ও স্কলারশিপ ঘোষণা।',
      url: 'https://alhikmahmk.edu.bd',
      principal: 'মাওলানা আব্দুল কাইয়ুম',
      principalRole: 'মুহতামিম / অধ্যক্ষ',
      principalMsg: 'দ্বীনি ও আধুনিক শিক্ষার অপূর্ব সমন্বয়ে চরিত্রবান আদর্শ মানুষ গড়ায় আমরা নিবেদিতপ্রাণ।',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    admin: {
      name: 'CampusDev ক্লাউড এডুকেশন প্যানেল',
      shortName: 'ERP',
      eiin: 'স্মার্ট ইনস্টিটিউশন ম্যানেজমেন্ট ড্যাশবোর্ড',
      board: 'এডমিন কন্ট্রোল প্যানেল',
      heroTitle: 'স্মার্টফোন ও পিসি থেকে সম্পূর্ণ প্রতিষ্ঠান পরিচালনার ড্যাশবোর্ড',
      tagline: '১ ক্লিকে ম্যানেজমেন্ট',
      passRate: '১০০% অটো',
      students: 'এসএমএস রেডি',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      notice: 'আজকের উপস্থিতি ৯৮.২% | আজ নতুন ভর্তি আবেদন: ১৪টি | এসএমএস ডেলিভারি: সক্রিয়।',
      url: 'https://admin.campusdev.edu.bd',
      principal: 'সিস্টেম অ্যাডমিনিস্ট্রেটর',
      principalRole: 'সুপার এডমিন',
      principalMsg: 'রেজাল্ট শিট প্রস্তুত, নোটিশ প্রকাশ ও স্টুডেন্ট আইডি কার্ড জেনারেশন এখন মুহূর্তের ব্যাপার।',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    }
  };

  const currentInst = heroInstitutions[heroActiveTab];

  const estimatorPrices: Record<string, { price: string; time: string }> = {
    school: { price: '৳২৮,৫০০', time: '৭ কার্যদিবস' },
    college: { price: '৳৩৪,৫০০', time: '১০ কার্যদিবস' },
    madrasa: { price: '৳২৬,৫০০', time: '৭ কার্যদিবস' },
    kindergarten: { price: '৳১৮,৫০০', time: '৫ কার্যদিবস' },
    network: { price: '৳৪৫,০০০+', time: '১২ কার্যদিবস' }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION - Ultra-Responsive Native App & Desktop Studio */}
      <section className="premium-hero relative overflow-hidden pt-6 sm:pt-10 md:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-24 border-b border-slate-200/70">
        {/* Subtle educational tech grid pattern for desktop */}
        <div className="hero-grid absolute inset-0 bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Star particles */}
        <div className="cyber-star-particles" />

        {/* Soft radial glow accents */}
        <div className="hero-ambient hero-ambient-top absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[110px] pointer-events-none" />
        <div className="hero-ambient hero-ambient-right absolute top-1/3 -right-28 w-[380px] h-[380px] rounded-full blur-[100px] pointer-events-none" />
        <div className="hero-ambient hero-ambient-left absolute top-1/2 -left-28 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none" />

        {/* Circuit grid at bottom */}
        <div className="cyber-circuit-grid" />
        {/* Abstract CSS skyline */}
        <div className="cyber-skyline" />

        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl lg:max-w-5xl mx-auto">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-1.5 rounded-full bg-fuchsia-950/40 border border-fuchsia-500/25 shadow-2xs mb-4 sm:mb-6 max-w-[96vw] backdrop-blur-sm">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-fuchsia-300 tracking-tight truncate">
                {language === 'bn' 
                  ? 'এডুকেশন ওয়েব সল্যুশন প্ল্যাটফর্ম • ৫০+ ক্যাম্পাস' 
                  : 'Specialized Education Web Platform • 50+ Campuses'}
              </span>
            </div>

            {/* Headline with High-Impact Desktop Typography */}
            <h1 className="premium-hero-title text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-black font-heading text-[#0B1C30] tracking-tight mb-4 sm:mb-6 leading-[1.25] sm:leading-[1.18] lg:leading-[1.12] text-balance">
              {language === 'bn' ? (
                <>
                  আপনার শিক্ষা প্রতিষ্ঠানকে ডিজিটালে আরও{' '}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-400 to-purple-500 drop-shadow-2xs">
                    আধুনিক ও পেশাদারভাবে
                  </span>{' '}
                  উপস্থাপন করুন।
                </>
              ) : (
                <>
                  Present Your Educational Institution{' '}
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-400 to-purple-500">
                    Modern & Professional
                  </span>{' '}
                  in Digital Era.
                </>
              )}
            </h1>

            {/* Supporting Text */}
            <p className="text-[14px] sm:text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mb-7 sm:mb-9 leading-relaxed font-normal text-balance px-1 sm:px-0">
              {language === 'bn'
                ? 'স্কুল, কলেজ ও মাদ্রাসার জন্য দ্রুত, মোবাইল-ফার্স্ট এবং সহজে পরিচালনাযোগ্য ওয়েবসাইট। ১০০% নিরাপদ ও আধুনিক অ্যাডমিন প্যানেলসহ।'
                : 'Fast, mobile-first, and effortlessly manageable websites for Schools, Colleges & Madrasas with a 100% secure modern admin dashboard.'}
            </p>

            {/* Action Buttons - Desktop & Touch Optimized */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center mb-6 sm:mb-8 px-2 sm:px-0">
              <button
                id="hero-consultation-cta-btn"
                onClick={onOpenConsultation}
                className="premium-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 lg:px-9 py-3.5 sm:py-4 rounded-2xl hover:shadow-xl hover:shadow-fuchsia-950/20 active:scale-[0.98] transition-all cursor-pointer border group text-white text-sm sm:text-base font-bold shadow-lg"
              >
                <Sparkles className="w-4 h-4 text-violet-300 group-hover:rotate-12 transition-transform" />
                <span>{language === 'bn' ? 'ফ্রি কনসালটেশন নিন' : 'Get Free Consultation'}</span>
                <ArrowRight className="w-4 h-4 text-violet-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-view-works-btn"
                onClick={() => onNavigate('works')}
                className="premium-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-bold border active:scale-[0.98] transition-all cursor-pointer shadow-2xs hover:shadow-md hover:border-slate-400"
              >
                <Play className="w-4 h-4 text-fuchsia-400 fill-fuchsia-500/20" />
                <span>{language === 'bn' ? 'আমাদের কাজ দেখুন' : 'View Our Work'}</span>
              </button>
            </div>

            {/* Desktop Trust Strip */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-4 lg:gap-8 text-xs sm:text-sm font-semibold text-slate-600 mb-8 sm:mb-10">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{language === 'bn' ? '৫০+ সফল শিক্ষা প্রতিষ্ঠান' : '50+ Campuses'}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{language === 'bn' ? '০.৮ সেকেন্ড ফাস্ট লোডিং' : '0.8s Fast Loading'}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{language === 'bn' ? 'শিক্ষা বোর্ড স্ট্যান্ডার্ড কমপ্লায়েন্ট' : 'Board Standard Compliant'}</span>
              </div>
            </div>

            {/* Interactive Tabs (School / College / Madrasa / Admin) */}
            <div className="w-full max-w-xl lg:max-w-2xl mx-auto mb-4 sm:mb-6 px-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2 px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-fuchsia-600" />
                  {language === 'bn' ? 'লাইভ ক্যাম্পাস ডেমো সিলেক্ট করুন:' : 'Select Live Campus Demo:'}
                </span>
                <span className="text-fuchsia-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {language === 'bn' ? 'ইন্টারেক্টিভ প্রিভিউ' : 'Interactive Preview'}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/90 shadow-2xs">
                {[
                  { id: 'school', icon: <School className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, labelBn: 'স্কুল', labelEn: 'School' },
                  { id: 'college', icon: <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, labelBn: 'কলেজ', labelEn: 'College' },
                  { id: 'madrasa', icon: <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, labelBn: 'মাদ্রাসা', labelEn: 'Madrasa' },
                  { id: 'admin', icon: <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />, labelBn: 'অ্যাডমিন', labelEn: 'Admin' },
                ].map((tab) => {
                  const isActive = heroActiveTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      id={`hero-tab-${tab.id}`}
                      onClick={() => setHeroActiveTab(tab.id as any)}
                      className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2 sm:py-2.5 px-1 sm:px-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-white text-fuchsia-400 shadow-xs border border-slate-200/80 scale-[1.01]'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                      }`}
                    >
                      <span className={isActive ? 'text-fuchsia-400' : 'text-slate-400'}>{tab.icon}</span>
                      <span className="truncate">{language === 'bn' ? tab.labelBn : tab.labelEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Device Switcher Controls (Computer View vs Mobile View) */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <button
                id="hero-toggle-desktop-mode"
                onClick={() => setHeroDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                  heroDeviceMode === 'desktop'
                    ? 'bg-[#0e0520] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Monitor className="w-3.5 h-3.5 text-violet-300" />
                <span>{language === 'bn' ? '💻 কম্পিউটার ভিউ' : '💻 Desktop View'}</span>
              </button>

              <button
                id="hero-toggle-mobile-mode"
                onClick={() => setHeroDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer active:scale-95 ${
                  heroDeviceMode === 'mobile'
                    ? 'bg-[#0e0520] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-violet-300" />
                <span>{language === 'bn' ? '📱 মোবাইল অ্যাপ ভিউ' : '📱 Mobile App View'}</span>
              </button>
            </div>

          </div>

          {/* Hero Visual: Responsive Interactive Device Showcase */}
          <div className="relative mx-auto max-w-5xl lg:max-w-6xl xl:max-w-7xl">
            
            {/* Metric Floating Pill Left (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-3 absolute -top-5 -left-4 xl:-left-6 z-20 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-slate-400 font-medium">Core Web Vitals</p>
                <p className="text-sm font-bold text-slate-800">৯৯.৮% অপ্টিমাইজড</p>
              </div>
            </div>

            {/* Metric Floating Pill Right (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-3 absolute -top-5 -right-4 xl:-right-6 z-20 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-950/30 text-fuchsia-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-slate-400 font-medium">নিরাপত্তা ও ব্যাকআপ</p>
                <p className="text-sm font-bold text-slate-800">স্বয়ংক্রিয় ক্লাউড সিঙ্ক</p>
              </div>
            </div>

            {/* VIEW MODE 1: NATIVE SMARTPHONE MOBILE APP VIEW */}
            {heroDeviceMode === 'mobile' ? (
              <div className="max-w-[340px] xs:max-w-[370px] mx-auto transition-all duration-300">
                {/* Modern Smartphone Frame */}
                <div className="relative rounded-[40px] border-[7px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden p-2.5">
                  
                  {/* Speaker & Camera Notch Bar */}
                  <div className="h-6 bg-slate-900 flex items-center justify-between px-5 text-slate-400 text-[10px] font-semibold mb-1">
                    <span>9:41</span>
                    {/* Dynamic Island / Camera Cutout */}
                    <div className="w-20 h-3.5 bg-black rounded-full flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3 h-3" />
                      <span className="text-[9px] font-bold">5G</span>
                    </div>
                  </div>

                  {/* Inside Mobile Phone App Screen */}
                  <div className="bg-slate-50 rounded-[30px] overflow-hidden text-left border border-slate-200 shadow-inner flex flex-col">
                    
                    {/* Mobile App Header */}
                    <div className="bg-white p-3 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-[#0e0520] text-violet-300 flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-xs">
                          {currentInst.shortName}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-extrabold text-[#0B1C30] truncate">
                            {currentInst.name}
                          </h4>
                          <p className="text-[9.5px] text-slate-500 truncate">
                            {currentInst.eiin}
                          </p>
                        </div>
                      </div>
                      <div className="relative p-1.5 rounded-lg bg-slate-100 text-slate-600 flex-shrink-0">
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500" />
                      </div>
                    </div>

                    {/* Notice Marquee Ticker */}
                    <div className="bg-fuchsia-950/30/90 border-b border-fuchsia-500/10 px-3 py-1.5 flex items-center gap-2 text-[11px]">
                      <span className="px-1.5 py-0.2 rounded bg-[#0e0520] text-white font-bold text-[9px] flex-shrink-0">
                        নোটিশ
                      </span>
                      <p className="text-slate-700 font-medium truncate text-[10.5px]">
                        {currentInst.notice}
                      </p>
                    </div>

                    {/* 4 Native App Quick-Action Tiles */}
                    <div className="p-3 bg-white border-b border-slate-100">
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="flex flex-col items-center gap-1 p-1.5 rounded-xl bg-fuchsia-950/30 hover:bg-fuchsia-900/20 transition-colors cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-fuchsia-600 text-white flex items-center justify-center shadow-xs">
                            <FileText className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-800 leading-tight">ভর্তি ফরম</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 p-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-800 leading-tight">রেজাল্ট</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 p-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-800 leading-tight">ক্লাস রুটিন</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 p-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                          <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
                            <CreditCard className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-800 leading-tight">ফি পেমেন্ট</span>
                        </div>
                      </div>
                    </div>

                    {/* Campus Vision Showcase Card */}
                    <div className="p-3 flex flex-col gap-2.5">
                      <div className="relative h-36 rounded-2xl overflow-hidden shadow-xs border border-slate-200">
                        <img
                          src={currentInst.image}
                          alt="Campus visual"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0520]/90 via-[#0e0520]/40 to-transparent flex flex-col justify-end p-3 text-white">
                          <span className="text-violet-300 text-[9px] font-bold uppercase tracking-wider mb-0.5">
                            {currentInst.tagline}
                          </span>
                          <h5 className="text-xs font-bold leading-snug line-clamp-2">
                            {currentInst.heroTitle}
                          </h5>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className="px-2 py-0.5 rounded-md bg-emerald-500/90 text-white font-bold text-[9px]">
                              পাসের হার {currentInst.passRate}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-white text-[9px]">
                              {currentInst.students}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Principal Snippet Card */}
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs flex items-center gap-2.5">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                          alt="Principal"
                          className="w-9 h-9 rounded-full object-cover border border-slate-200 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center justify-between">
                            <h6 className="text-[11px] font-bold text-[#0B1C30] truncate">{currentInst.principal}</h6>
                            <span className="text-[9px] text-fuchsia-400 font-semibold flex-shrink-0">বার্তা</span>
                          </div>
                          <p className="text-[10px] text-slate-500 line-clamp-1">
                            {currentInst.principalMsg}
                          </p>
                        </div>
                      </div>

                      {/* Academic Download Bar */}
                      <div className="p-2 bg-white rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 truncate">
                          <Download className="w-3.5 h-3.5 text-fuchsia-400 flex-shrink-0" />
                          <span className="truncate">একাডেমিক ক্যালেন্ডার ও বুক লিস্ট.pdf</span>
                        </div>
                        <span className="text-[10px] font-bold text-fuchsia-400 px-2 py-0.5 rounded bg-fuchsia-950/30 flex-shrink-0">
                          ডাউনলোড
                        </span>
                      </div>
                    </div>

                    {/* Native App Bottom Tab Bar */}
                    <div className="bg-white border-t border-slate-200 px-4 py-2 flex items-center justify-around text-slate-500 text-[9px] font-bold">
                      <div className="flex flex-col items-center gap-0.5 text-fuchsia-400">
                        <School className="w-4 h-4" />
                        <span>হোম</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-slate-900 cursor-pointer">
                        <Bell className="w-4 h-4" />
                        <span>নোটিশ</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-slate-900 cursor-pointer">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>রেজাল্ট</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 hover:text-slate-900 cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        <span>যোগাযোগ</span>
                      </div>
                    </div>

                  </div>

                  {/* Native Home Screen Touch Indicator Bar */}
                  <div className="w-24 h-1 bg-slate-600 rounded-full mx-auto mt-2" />
                </div>
              </div>
            ) : (
              /* VIEW MODE 2: BROWSER DESKTOP PORTAL VIEW */
              <div className="rounded-2xl lg:rounded-3xl bg-white border border-slate-300/85 shadow-2xl shadow-slate-900/10 overflow-hidden text-left transition-all duration-300">
                {/* Browser OS Chrome Bar */}
                <div className="h-11 bg-[#0e0520] px-4 sm:px-6 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-2xs" />
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block shadow-2xs" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-2xs" />
                    </div>
                    
                    {/* Browser URL Omnibar */}
                    <div className="ml-2 hidden sm:flex items-center gap-2 px-3.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-slate-300 min-w-[260px] lg:min-w-[340px]">
                      <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-400">https://</span>
                      <span className="text-white font-medium truncate">{currentInst.url.replace('https://', '')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SSL SECURED • LIVE
                    </span>
                  </div>
                </div>

                {/* Inside Mockup Content */}
                <div className="bg-slate-50 p-4 sm:p-6 lg:p-7 grid grid-cols-12 gap-4 lg:gap-5">
                  {/* School Header */}
                  <div className="col-span-12 bg-white rounded-2xl p-4 lg:p-5 flex flex-wrap items-center justify-between gap-4 border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0e0520] to-[#2a1545] text-violet-300 flex items-center justify-center font-black text-base shadow-sm border border-slate-700/40">
                        {currentInst.shortName}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-base sm:text-lg font-black text-[#0B1C30]">
                            {currentInst.name}
                          </h4>
                          <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-fuchsia-950/30 text-fuchsia-400 border border-fuchsia-500/20">
                            {currentInst.board}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {currentInst.eiin}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1.5 rounded-xl bg-fuchsia-950/30 text-fuchsia-400 text-xs font-bold border border-fuchsia-500/20 shadow-2xs">
                        অনলাইন ভর্তি চলছে
                      </span>
                      <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 cursor-pointer border border-slate-200">
                        স্টুডেন্ট লগইন
                      </span>
                    </div>
                  </div>

                  {/* News Ticker Bar */}
                  <div className="col-span-12 bg-fuchsia-950/30/90 border border-fuchsia-500/20/80 rounded-xl px-4 py-2.5 flex items-center gap-2.5 text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-[#0e0520] text-white font-bold text-[10px] flex-shrink-0 flex items-center gap-1 shadow-2xs">
                      <Bell className="w-3 h-3 text-violet-300" />
                      নোটিশ:
                    </span>
                    <p className="text-slate-800 font-medium truncate flex-1">
                      {currentInst.notice}
                    </p>
                    <span className="text-[11px] font-bold text-fuchsia-400 hidden md:inline-flex items-center gap-0.5 cursor-pointer hover:underline">
                      সকল নোটিশ <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Main Left Feature Column (8 cols) */}
                  <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
                    {/* Hero Visual Campus Banner */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xs border border-slate-200">
                      <img
                        src={currentInst.image}
                        alt="Campus visual"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0520]/95 via-[#0e0520]/40 to-transparent flex flex-col justify-end p-5 sm:p-6 text-white">
                        <span className="text-violet-300 text-[11px] font-extrabold uppercase tracking-wider mb-1">
                          {currentInst.tagline}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold font-heading leading-snug">
                          {currentInst.heroTitle}
                        </h3>
                      </div>
                    </div>

                    {/* 4 Interactive Feature Tiles */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-2xs hover:border-fuchsia-500/30 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg bg-fuchsia-950/30 text-fuchsia-400 flex items-center justify-center mx-auto mb-1.5 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">অনলাইন ভর্তি</span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-2xs hover:border-emerald-300 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">রেজাল্ট শিট</span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-2xs hover:border-amber-300 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-1.5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">ক্লাস রুটিন</span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-2xs hover:border-purple-300 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-1.5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold text-slate-800">ফি পেমেন্ট</span>
                      </div>
                    </div>

                    {/* 3 Quick Stat Cards */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
                        <span className="text-lg sm:text-xl font-bold font-heading text-fuchsia-400">{currentInst.passRate}</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">পাসের হার</p>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
                        <span className="text-lg sm:text-xl font-bold font-heading text-slate-800">{currentInst.students}</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">শিক্ষার্থী / সুবিধা</p>
                      </div>
                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
                        <span className="text-lg sm:text-xl font-bold font-heading text-emerald-600">১০০%</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">ডিজিটাল ও মোবাইল রেডি</p>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar Right Column (4 cols) */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-3.5">
                    {/* Principal Statement Card */}
                    <div className="bg-white p-4 lg:p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col gap-2.5">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                          alt="Principal"
                          className="w-11 h-11 rounded-full object-cover border-2 border-fuchsia-500/10 shadow-2xs"
                        />
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-[#0B1C30]">{currentInst.principalRole}</h5>
                          <p className="text-[11px] text-slate-500 font-medium">{currentInst.principal}</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {currentInst.principalMsg}
                      </p>
                    </div>

                    {/* Academic File Downloads */}
                    <div className="bg-white p-4 lg:p-5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col gap-2.5">
                      <span className="text-xs font-bold text-[#0B1C30] flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5 text-fuchsia-400" />
                        একাডেমিক ফাইল ডাউনলোড
                      </span>
                      <div className="flex flex-col gap-2">
                        <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between text-xs border border-slate-200/80">
                          <span className="text-slate-700 truncate font-medium">ক্লাস রুটিন ২০২৫.pdf</span>
                          <span className="text-[11px] font-bold text-fuchsia-400 bg-fuchsia-950/30 px-2 py-0.5 rounded cursor-pointer hover:bg-fuchsia-900/20">ডাউনলোড</span>
                        </div>
                        <div className="p-2.5 bg-slate-50 rounded-xl flex items-center justify-between text-xs border border-slate-200/80">
                          <span className="text-slate-700 truncate font-medium">সিলেবাস ও বুক লিস্ট.pdf</span>
                          <span className="text-[11px] font-bold text-fuchsia-400 bg-fuchsia-950/30 px-2 py-0.5 rounded cursor-pointer hover:bg-fuchsia-900/20">ডাউনলোড</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Helpline Box */}
                    <div className="bg-gradient-to-br from-[#0e0520] to-[#1a0d35] text-white p-4 rounded-2xl border border-slate-700/50 shadow-xs flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-violet-300">ক্যাম্পাস অনলাইন সাপোর্ট</p>
                        <p className="text-xs font-bold mt-0.5">+880 1700-000000</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white font-bold text-[10px]">
                        সক্রিয়
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Native App Touch Cards (Under Mockup) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left">
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-fuchsia-950/30 text-fuchsia-400 flex items-center justify-center flex-shrink-0 font-bold">
                  ⚡
                </div>
                <div>
                  <h6 className="text-xs font-bold text-[#0B1C30]">০.৮ সেকেন্ড ফাস্ট লোডিং</h6>
                  <p className="text-[11px] text-slate-500">দুর্বল ২G/৩G ইন্টারনেটেও নিমেষে ওপেন হয়</p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 font-bold">
                  📱
                </div>
                <div>
                  <h6 className="text-xs font-bold text-[#0B1C30]">১০০% মোবাইল অ্যাপ ফিল</h6>
                  <p className="text-[11px] text-slate-500">অভিভাবক ও শিক্ষকদের জন্য সেরা ইন্টারফেস</p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 font-bold">
                  🛡️
                </div>
                <div>
                  <h6 className="text-xs font-bold text-[#0B1C30]">বোর্ড ও সরকারি স্ট্যান্ডার্ড</h6>
                  <p className="text-[11px] text-slate-500">নিরাপদ হোস্টিং ও সম্পূর্ণ অটোমেটিক ব্যাকআপ</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="w-full bg-slate-50 border-b border-slate-200 py-3.5 sm:py-4 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-fuchsia-400" />
              <span>✓ Mobile First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-fuchsia-400" />
              <span>✓ Fast Loading (99+ Score)</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-fuchsia-400" />
              <span>✓ Easy Admin Panel</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
              <span>✓ 100% Secure & Backup</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-fuchsia-400" />
              <span>✓ Bangla + English Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BY & IMPACT METRICS */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 mb-2">
              {language === 'bn' ? 'প্রাতিষ্ঠানিক আস্থা' : 'Institutional Trust'}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1C30]">
              {language === 'bn'
                ? 'দেশের শীর্ষস্থানীয় শিক্ষা প্রতিষ্ঠানের ডিজিটাল পার্টনার'
                : 'Trusted Partner for Educational Institutions in Bangladesh'}
            </h2>
          </div>

          {/* 5 Institution Partner Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-10">
            {[
              { name: 'রেসিডেনসিয়াল মডেল হাই স্কুল', loc: 'ধানমন্ডি, ঢাকা', icon: <School className="w-6 h-6 text-fuchsia-400" /> },
              { name: 'গ্রীনফিল্ড আইডিয়াল কলেজ', loc: 'উত্তরা, ঢাকা', icon: <Building2 className="w-6 h-6 text-fuchsia-400" /> },
              { name: 'আল-হিকমাহ ইসলামিক একাডেমি', loc: 'মিরপুর, ঢাকা', icon: <BookOpen className="w-6 h-6 text-fuchsia-400" /> },
              { name: 'পায়োনিয়ার ক্যাডেট একাডেমি', loc: 'গাজীপুর', icon: <GraduationCap className="w-6 h-6 text-fuchsia-400" /> },
              { name: 'শাহীন মডেল একাডেমি', loc: 'বনশ্রী, ঢাকা', icon: <School className="w-6 h-6 text-fuchsia-400" /> },
            ].map((inst, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center justify-center text-center gap-1.5 hover:shadow-sm hover:border-fuchsia-500/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-1">
                  {inst.icon}
                </div>
                <span className="text-xs font-bold text-[#0B1C30] leading-snug">{inst.name}</span>
                <span className="text-[10px] text-slate-500">{inst.loc}</span>
              </div>
            ))}
          </div>

          {/* Impact Stats Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0520] text-white shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold font-heading text-violet-300">৫০+</span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {language === 'bn' ? 'শিক্ষা প্রতিষ্ঠান পরিচালিত' : 'Institutions Onboarded'}
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold font-heading text-white">১,২০,০০০+</span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {language === 'bn' ? 'শিক্ষার্থী ট্র্যাকিং ও রেজাল্ট' : 'Students & Marks Tracked'}
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold font-heading text-violet-300">৯৯.৯%</span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {language === 'bn' ? 'নিশ্চিত ক্লাউড আপটাইম' : 'Cloud Uptime Guarantee'}
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-4xl font-extrabold font-heading text-white">২.৫x</span>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {language === 'bn' ? 'দ্রুত পেজ লোডিং স্পিড' : 'Faster Page Speed'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-8 sm:py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                {language === 'bn' ? 'আমাদের সল্যুশনসমূহ' : 'Our Solutions'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
                {language === 'bn' 
                  ? 'প্রতিটি প্রতিষ্ঠানের জন্য স্বতন্ত্র ও বিশেষায়িত সেবা' 
                  : 'Specialized Web Solutions for Every Academic Need'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-fuchsia-400 hover:underline cursor-pointer"
            >
              <span>{language === 'bn' ? 'সকল সার্ভিস বিস্তারিত দেখুন' : 'View All Services'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xl hover:border-fuchsia-500/30 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-fuchsia-950/30 text-fuchsia-400 flex items-center justify-center mb-4 group-hover:bg-[#0e0520] group-hover:text-violet-300 transition-colors">
                    {srv.category === 'school' && <School className="w-6 h-6" />}
                    {srv.category === 'college' && <Building2 className="w-6 h-6" />}
                    {srv.category === 'madrasa' && <BookOpen className="w-6 h-6" />}
                    {srv.category === 'custom' && <Layers className="w-6 h-6" />}
                    {srv.category === 'maintenance' && <ShieldCheck className="w-6 h-6" />}
                  </div>

                  <h3 className="text-base font-bold text-[#0B1C30] mb-2">
                    {language === 'bn' ? srv.titleBn : srv.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {language === 'bn' ? srv.descriptionBn : srv.descriptionEn}
                  </p>

                  <div className="pt-2 border-t border-slate-100 mb-4">
                    <p className="text-[11px] text-slate-500 font-medium">
                      {language === 'bn' ? `উপযোগী: ${srv.recommendedForBn}` : `Recommended: ${srv.recommendedForEn}`}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('services')}
                  className="flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 group-hover:gap-2 transition-all cursor-pointer"
                >
                  <span>{language === 'bn' ? 'ফিচার বিস্তারিত দেখুন' : 'Explore Features'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU GET (Client Deliverables Checklist) */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              {language === 'bn' ? 'ফুল প্যাকেজ ফিচারস' : 'What You Get'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
              {language === 'bn'
                ? 'আমাদের তৈরি প্রতিটি ওয়েবসাইটে যা যা অন্তর্ভুক্ত থাকে'
                : 'Everything Included in Every CampusDev Website'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {language === 'bn'
                ? 'কোনো অতিরিক্ত লুকানো খরচ ছাড়া একটি পূর্ণাঙ্গ আধুনিক শিক্ষা প্রতিষ্ঠান ওয়েবসাইট।'
                : 'No hidden extras — complete turn-key digital operations suite for your school.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {[
              { titleBn: 'কাস্টম মোবাইল ডিজাইন', titleEn: 'Custom Mobile Design', descBn: 'পিসি ও মোবাইলে সমান স্বাচ্ছন্দ্য' },
              { titleBn: 'সহজ অ্যাডমিন ড্যাশবোর্ড', titleEn: 'Easy Admin Dashboard', descBn: 'ফেসবুকের মতোই সহজে আপডেট' },
              { titleBn: 'ডায়নামিক নোটিশ বোর্ড', titleEn: 'Dynamic Notice Board', descBn: 'সার্কুলার ও পিডিএফ নোটিফিকেশন' },
              { titleBn: 'অনলাইন ভর্তি ফরম', titleEn: 'Online Admission Form', descBn: 'ঘরে বসেই শিক্ষার্থীর তথ্য সংগ্রহ' },
              { titleBn: 'টার্মিনাল রেজাল্ট পোর্টাল', titleEn: 'Student Result Portal', descBn: 'রোল দিয়ে তাৎক্ষণিক ফলাফল' },
              { titleBn: 'শিক্ষক ও স্টাফ ডিরেক্টরি', titleEn: 'Teacher & Staff Directory', descBn: 'ছবি ও পরিচিতিসহ তালিকা' },
              { titleBn: 'স্মার্ট ফটো গ্যালারি', titleEn: 'Smart Event Gallery', descBn: 'অ্যালবাম ভিত্তিক ফটো আর্কাইভ' },
              { titleBn: 'হোয়াটসঅ্যাপ ইন্টিগ্রেশন', titleEn: 'WhatsApp Integration', descBn: '১ ক্লিকে সরাসরি যোগাযোগ' },
              { titleBn: 'বেসিক অন-পেজ এসইও', titleEn: 'Basic On-Page SEO', descBn: 'গুগল ম্যাপস ও সার্চ ইঞ্জিনে র‍্যাঙ্ক' },
              { titleBn: 'দৈনিক অটো ব্যাকআপ', titleEn: 'Daily Automated Backup', descBn: '১০০% ডাটা হারানোর ঝুঁকিহীন' },
              { titleBn: 'হাতে-কলমে ভিডিও ট্রেনিং', titleEn: 'Hands-on Video Training', descBn: 'স্টাফদের পরিচালনার সহজ গাইড' },
              { titleBn: '১ বছর ফ্রি সাপোর্ট', titleEn: '1-Year Free Support', descBn: 'টেকনিক্যাল জটিলতায় সার্বক্ষণিক পাশে' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1C30]">
                    {language === 'bn' ? item.titleBn : item.titleEn}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {item.descBn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE FEATURE: INTERACTIVE ADMIN PANEL DEMO */}
      <section className="relative py-10 sm:py-14 md:py-20 border-b border-fuchsia-500/10 overflow-hidden" id="admin-demo-preview">
        {/* Layered ambient gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0312] via-[#0f0624] to-[#0a0312]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(192,38,211,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_80%_60%,rgba(139,92,246,0.08),transparent_65%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            {/* Neon accent line */}
            <div className="cyber-neon-line w-20 mx-auto mb-5 rounded-full" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-fuchsia-950/40 border border-fuchsia-500/20 text-xs font-bold text-fuchsia-300 mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'bn' ? 'সিগনেচার ফিচার' : 'Signature Feature'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white mt-2 leading-tight">
              {language === 'bn'
                ? <>Website শুধু দেখতেই সুন্দর নয়—নিজেরাও{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400">সহজে পরিচালনা</span>{' '}করতে পারবেন।</>
                : <>Websites are not just beautiful — they are{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400">effortless to manage.</span></>}
            </h2>
            <p className="text-sm sm:text-base text-violet-200/70 mt-3 max-w-2xl mx-auto">
              {language === 'bn'
                ? 'নিচে আমাদের ইন্টারেক্টিভ অ্যাডমিন প্যানেলটি নিজে টেস্ট করে দেখুন:'
                : 'Test our live interactive admin panel simulation below:'}
            </p>
          </div>

          <AdminDemoInteractive 
            language={language} 
            onOpenConsultation={onOpenConsultation} 
          />
        </div>
      </section>

      {/* 7. FEATURED WORKS & CASE STUDIES */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                {language === 'bn' ? 'বাস্তব প্রজেক্ট' : 'Featured Works'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
                {language === 'bn'
                  ? 'আমাদের তৈরি সফল প্রাতিষ্ঠানিক প্ল্যাটফর্মসমূহ'
                  : 'Recent Successful Educational Platforms'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('works')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-fuchsia-400 hover:underline cursor-pointer"
            >
              <span>{language === 'bn' ? 'সকল কেস স্টাডি দেখুন' : 'Explore All Works'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.slice(0, 3).map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xl hover:border-fuchsia-500/30 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.titleEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0e0520]/85 backdrop-blur-xs text-violet-300 text-[10px] font-bold">
                      {language === 'bn' ? study.categoryLabelBn : study.categoryLabelEn}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[#0B1C30]">
                      {language === 'bn' ? study.titleBn : study.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {language === 'bn' ? study.summaryBn : study.summaryEn}
                    </p>

                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-100 text-[11px] font-bold text-emerald-800 mt-2">
                      ✓ {language === 'bn' ? study.resultsBn[0] : study.resultsEn[0]}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-3 pt-3">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-fuchsia-400 hover:underline cursor-pointer"
                  >
                    <span>{language === 'bn' ? 'কেস স্টাডি পড়ুন' : 'Read Case Study'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('demos')}
                    className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium cursor-pointer"
                  >
                    {language === 'bn' ? 'ডেমো দেখুন' : 'View Demo'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CAMPUSDEV? (6 Core Reasons) */}
      <section className="py-8 sm:py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              {language === 'bn' ? 'আমাদের স্বাতন্ত্র্য' : 'Why CampusDev?'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
              {language === 'bn'
                ? 'কেন সাধারণ কোম্পানির বদলে CampusDev বেছে নেবেন?'
                : '6 Reasons We Are the Right Partner for Your Institution'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0e0520] text-violet-300 flex items-center justify-center">
                  {item.id === 'built-for-edu' && <GraduationCap className="w-5 h-5" />}
                  {item.id === 'mobile-first' && <Smartphone className="w-5 h-5" />}
                  {item.id === 'easy-to-manage' && <Layers className="w-5 h-5" />}
                  {item.id === 'custom-built' && <Zap className="w-5 h-5" />}
                  {item.id === 'fast-and-secure' && <ShieldCheck className="w-5 h-5" />}
                  {item.id === 'long-term-support' && <Headphones className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-[#0B1C30]">
                  {language === 'bn' ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'bn' ? item.descBn : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HOW WE WORK (6-Step Timeline) */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              {language === 'bn' ? 'সহজ কর্মপ্রক্রিয়া' : 'Our Process'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
              {language === 'bn'
                ? 'আমাদের কাজের ৬টি সুনির্দিষ্ট ও নির্ভরযোগ্য ধাপ'
                : 'Structured 6-Step Implementation Flow'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {language === 'bn'
                ? 'চুক্তির দিন থেকে লাইভ হওয়া পর্যন্ত প্রতিটি পদক্ষেপ স্বচ্ছ ও সময়োপযোগী।'
                : 'Transparent, reliable milestones from discovery to launch day.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW_STEPS.map((wf) => (
              <div key={wf.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-heading text-fuchsia-400">
                    {wf.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-600 border border-slate-200">
                    Step {wf.step}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B1C30] mt-1">
                  {language === 'bn' ? wf.titleBn : wf.titleEn}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'bn' ? wf.descBn : wf.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TRANSPARENT PRICING PREVIEW */}
      <section className="py-8 sm:py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              {language === 'bn' ? 'স্বচ্ছ প্যাকেজ রেট' : 'Transparent Pricing'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
              {language === 'bn'
                ? 'আপনার প্রতিষ্ঠানের প্রয়োজন অনুযায়ী সেরা প্যাকেজ বেছে নিন'
                : 'Select the Right Package for Your Institution'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {language === 'bn'
                ? '১০০% স্বচ্ছ খরচ। কোনো গোপন ফি নেই।'
                : '100% transparent investment. Zero hidden surcharges.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-6 sm:mb-10">
            {PRICING_DATA.map((plan) => (
              <div
                key={plan.id}
                className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'bg-[#0e0520] text-white shadow-2xl relative border-2 border-fuchsia-500 -translate-y-2'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-fuchsia-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                  </span>
                )}

                <div>
                  <h3 className={`text-lg font-bold font-heading ${plan.popular ? 'text-white' : 'text-[#0B1C30]'}`}>
                    {language === 'bn' ? plan.nameBn : plan.nameEn}
                  </h3>
                  <p className={`text-xs mt-1 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {language === 'bn' ? plan.subtitleBn : plan.subtitleEn}
                  </p>

                  <div className="my-6">
                    <span className={`text-3xl sm:text-4xl font-extrabold font-heading ${plan.popular ? 'text-violet-300' : 'text-[#0B1C30]'}`}>
                      {language === 'bn' ? plan.priceBn : plan.priceEn}
                    </span>
                    <span className={`text-xs ml-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'bn' ? '/এককালীন' : '/one-time'}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 text-xs mb-8">
                    {(language === 'bn' ? plan.featuresBn : plan.featuresEn).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-violet-300' : 'text-fuchsia-400'}`} />
                        <span className={plan.popular ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className={`text-[11px] mb-3 text-center ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    ডেলিভারি: {language === 'bn' ? plan.deliveryTimeBn : plan.deliveryTimeEn} | {language === 'bn' ? plan.supportDurationBn : plan.supportDurationEn}
                  </p>
                  <button
                    onClick={onOpenConsultation}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      plan.popular
                        ? 'bg-fuchsia-600 hover:bg-fuchsia-950/300 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    {language === 'bn' ? plan.ctaTextBn : plan.ctaTextEn}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Quote Strip */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#0B1C30]">
                {language === 'bn' ? 'বিশেষ বা কাস্টম চাহিদা রয়েছে?' : 'Have Custom Enterprise Requirements?'}
              </h4>
              <p className="text-xs text-slate-500">
                {language === 'bn' 
                  ? 'মাল্টি-ক্যাম্পাস নেটওয়ার্ক, ইউনিভার্সিটি বা বিশেষ শিক্ষা ট্রাস্টের জন্য আমরা স্পেশালাইজড আর্কিটেকচার তৈরি করি।' 
                  : 'We engineer tailored multi-branch architectures for university colleges and educational trusts.'}
              </p>
            </div>
            <button
              onClick={onOpenEstimator}
              className="px-6 py-2.5 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-violet-300" />
              <span>{language === 'bn' ? 'কাস্টম এস্টিমেট হিসাব করুন' : 'Custom Estimate Calculator'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              {language === 'bn' ? 'ক্লায়েন্ট মতামত' : 'Testimonials'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
              {language === 'bn'
                ? 'প্রধান শিক্ষক ও পরিচালনা কমিটির আস্থা'
                : 'What School Principals & Board Directors Say'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{language === 'bn' ? t.quoteBn : t.quoteEn}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <img
                    src={t.avatar}
                    alt={t.nameEn}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1C30]">
                      {language === 'bn' ? t.nameBn : t.nameEn}
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      {language === 'bn' ? t.roleBn : t.roleEn}, {language === 'bn' ? t.institutionBn : t.institutionEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-8 sm:py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              {language === 'bn' ? 'প্রশ্নোত্তর' : 'Frequently Asked Questions'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
              {language === 'bn' ? 'সাধারণ জিজ্ঞাসা ও উত্তর' : 'Common Questions & Clear Answers'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {language === 'bn'
                ? 'প্রজেক্ট শুরুর পূর্বে সিদ্ধান্ত নিতে এই তথ্যগুলো আপনাকে সাহায্য করবে।'
                : 'Everything you need to know before initiating your digital platform.'}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-[#0B1C30] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{language === 'bn' ? faq.questionBn : faq.questionEn}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-fuchsia-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {language === 'bn' ? faq.answerBn : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. FINAL HIGH-CONVERTING CTA & PROJECT ESTIMATOR TEASER */}
      <section className="py-6 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#0e0520] text-white p-5 sm:p-8 lg:p-14 shadow-2xl overflow-hidden">
            {/* Ambient Lighting Rings */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-fuchsia-950/300/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/300/20 text-violet-300 text-[11px] font-bold uppercase tracking-wider mb-4">
                  🚀 {language === 'bn' ? 'আজই শুরু করুন' : 'Start Today'}
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-4 leading-snug">
                  {language === 'bn'
                    ? 'আপনার প্রতিষ্ঠানের জন্য একটি আধুনিক ও শক্তিশালী ওয়েবসাইট তৈরি করতে প্রস্তুত?'
                    : 'Ready to Transform Your Educational Institution with a Modern Digital Presence?'}
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-xl leading-relaxed">
                  {language === 'bn'
                    ? 'আজই একটি ফ্রি প্ল্যানিং কল বা প্রজেক্ট এস্টিমেট বুক করুন। আমাদের এডু-টেক স্পেশালিস্ট টিম আপনাকে সঠিক গাইডলাইন দেবে।'
                    : 'Book a free discovery session with our senior education web engineers. We provide end-to-end guidance tailored to your academic syllabus.'}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-950/300 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
                  >
                    <span>{language === 'bn' ? 'Start Your Project (প্রজেক্ট শুরু করুন)' : 'Start Your Project'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/8801700000000?text=Hello%20CampusDev,%20I%20want%20to%20discuss%20our%20institution%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>{language === 'bn' ? 'WhatsApp-এ কথা বলুন' : 'Talk on WhatsApp'}</span>
                  </a>
                </div>
              </div>

              {/* Quick Budget Estimator Teaser Widget */}
              <div className="lg:col-span-5 bg-white text-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-[#0B1C30]">
                    {language === 'bn' ? 'দ্রুত বাজেট ও সময় হিসাব' : 'Quick Budget & Delivery Estimator'}
                  </h4>
                  <Calculator className="w-4 h-4 text-fuchsia-400" />
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  {language === 'bn' ? 'প্রতিষ্ঠানের ধরন বেছে নিন ও তাৎক্ষণিক আনুমানিক খরচ দেখুন:' : 'Select institution category to see instantaneous estimates:'}
                </p>

                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1 block">
                      {language === 'bn' ? 'প্রতিষ্ঠানের ধরন:' : 'Institution Type:'}
                    </label>
                    <select
                      value={quickEstimatorType}
                      onChange={(e) => setQuickEstimatorType(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-slate-50"
                    >
                      <option value="school">হাই স্কুল / মডেল একাডেমি</option>
                      <option value="college">মহাবিদ্যালয় / কলেজ পোর্টাল</option>
                      <option value="madrasa">মাদ্রাসা ও এতিমখানা কমপ্লেক্স</option>
                      <option value="kindergarten">কিন্ডারগার্টেন ও প্রাথমিক বিদ্যালয়</option>
                      <option value="network">মাল্টি-ক্যাম্পাস / ট্রাস্ট একাডেমি</option>
                    </select>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-medium">আনুমানিক খরচ:</span>
                      <p className="text-lg font-extrabold font-heading text-fuchsia-400">
                        {estimatorPrices[quickEstimatorType].price}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-medium">ডেলিভারি সময়:</span>
                      <p className="text-xs font-bold text-slate-800">
                        {estimatorPrices[quickEstimatorType].time}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onOpenEstimator}
                    className="w-full py-2.5 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold text-center transition-colors cursor-pointer"
                  >
                    {language === 'bn' ? 'এই খরচে প্রজেক্ট শুরু করুন' : 'Lock in this Estimate'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
