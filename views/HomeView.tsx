'use client';
import React, { useEffect, useState } from 'react';
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
  Lock,
  Award
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
  const [heroDeviceMode, setHeroDeviceMode] = useState<'mobile' | 'desktop'>('mobile');

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const syncDeviceMode = () => setHeroDeviceMode(desktopQuery.matches ? 'desktop' : 'mobile');

    syncDeviceMode();
    desktopQuery.addEventListener('change', syncDeviceMode);
    return () => desktopQuery.removeEventListener('change', syncDeviceMode);
  }, []);

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
      notice: '২০২৫ শিক্ষাবর্ষে ষষ্ঠ থেকে নবম শ্রেণিতে সরাসরি ভর্তি আবেদন ও ডিজিটাল রেজিস্ট্রেশন শুরু হয়েছে।',
      url: 'https://apexschool.edu.bd',
      principal: 'প্রফেসর মো: শহিদুল ইসলাম',
      principalRole: 'অধ্যক্ষ (ভারপ্রাপ্ত)',
      principalMsg: 'আধুনিক বিশ্বের উপযোগী দক্ষ ও নীতিবান নাগরিক হিসেবে শিক্ষার্থীদের গড়ে তোলাই আমাদের অঙ্গীকার।',
      badgeColor: 'bg-blue-50 text-[#003B73] border-blue-200'
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
      notice: 'একাদশ শ্রেণির বিজ্ঞান ও ব্যবসায় শিক্ষা বিভাগের ল্যাব টেস্ট ও সাময়িক পরীক্ষার সূচি প্রকাশিত।',
      url: 'https://greenfieldcollege.edu.bd',
      principal: 'ড. মো: রফিকুল আলম',
      principalRole: 'অধ্যক্ষ',
      principalMsg: 'উচ্চশিক্ষায় সাফল্য ও মানবিক মূল্যবোধে বলীয়ান আগামী প্রজন্ম তৈরিতে আমরা প্রতিশ্রুতিবদ্ধ।',
      badgeColor: 'bg-blue-50 text-[#003B73] border-blue-200'
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
      notice: 'হিফজুল কুরআন বিভাগ ও নূরানী শাখায় নতুন ছাত্রদের সরাসরি ভর্তি ও স্কলারশিপ ঘোষণা।',
      url: 'https://alhikmahmk.edu.bd',
      principal: 'মাওলানা আব্দুল কাইয়ুম',
      principalRole: 'মুহতামিম / অধ্যক্ষ',
      principalMsg: 'দ্বীনি ও আধুনিক শিক্ষার অপূর্ব সমন্বয়ে চরিত্রবান আদর্শ মানুষ গড়ায় আমরা নিবেদিতপ্রাণ।',
      badgeColor: 'bg-blue-50 text-[#003B73] border-blue-200'
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
      notice: 'আজকের উপস্থিতি ৯৮.২% | আজ নতুন ভর্তি আবেদন: ১৪টি | এসএমএস ডেলিভারি: সক্রিয়।',
      url: 'https://admin.campusdev.edu.bd',
      principal: 'সিস্টেম অ্যাডমিনিস্ট্রেটর',
      principalRole: 'সুপার এডমিন',
      principalMsg: 'রেজাল্ট শিট প্রস্তুত, নোটিশ প্রকাশ ও স্টুডেন্ট আইডি কার্ড জেনারেশন এখন মুহূর্তের ব্যাপার।',
      badgeColor: 'bg-blue-50 text-[#003B73] border-blue-200'
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
      {/* 1. HERO SECTION — Premium Split-Layout with Device Showcase */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-[#F0F7FF] to-white pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-14 sm:pb-16 lg:pb-24 border-b border-slate-200/80">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#003b730a_1px,transparent_1px),linear-gradient(to_bottom,#003b730a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Soft institutional blue radial glow accents */}
        <div className="absolute -top-40 left-1/4 w-[600px] h-[350px] rounded-full bg-sky-200/25 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-blue-100/30 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">

            {/* ── LEFT COLUMN: Text Content ────────────────────────────── */}
            <div className="flex flex-col items-start text-left order-2 lg:order-1">

              {/* Headline — Bold & Impactful */}
              <h1 className="text-[30px] xs:text-[34px] sm:text-4xl md:text-[44px] lg:text-[48px] xl:text-[54px] font-black font-heading text-[#0F172A] tracking-tight leading-[1.18] sm:leading-[1.12] lg:leading-[1.08] mb-5 sm:mb-6 text-balance">
                {language === 'bn' ? (
                  <>
                    আপনার প্রতিষ্ঠানকে{' '}
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00529B] via-[#003B73] to-[#002850]">
                      আত্মবিশ্বাসের সাথে
                    </span>{' '}
                    ডিজিটাল করুন
                  </>
                ) : (
                  <>
                    Digitize Your{' '}
                    <br className="hidden sm:block" />
                    Institution with{' '}
                    <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00529B] via-[#003B73] to-[#002850]">
                      Confidence
                    </span>
                  </>
                )}
              </h1>

              {/* Supporting Text */}
              <p className="text-[15px] sm:text-base md:text-lg text-slate-600 font-medium max-w-xl mb-8 sm:mb-10 leading-relaxed">
                {language === 'bn'
                  ? 'বাংলাদেশের স্কুল, কলেজ ও মাদ্রাসার জন্য সুসমন্বিত ডিজিটাল সমাধান — প্রশাসন, শিক্ষা ও প্রবৃদ্ধির জন্য সর্বাধুনিক প্ল্যাটফর্ম।'
                  : 'Empowering Bangladeshi schools with seamless, integrated digital solutions for administration, learning, and growth.'}
              </p>

              {/* Primary CTA Button */}
              <button
                id="hero-consultation-cta-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 sm:py-[18px] rounded-xl bg-[#003B73] hover:bg-[#00529B] active:scale-[0.98] transition-all cursor-pointer group text-white text-base sm:text-lg font-extrabold shadow-xl hover:shadow-2xl border border-blue-900/30 mb-10 sm:mb-12"
              >
                <span>{language === 'bn' ? 'ফ্রি তে শুরু করুন' : 'Get Started for Free'}</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Avatars + Social Proof */}
              <div className="flex items-center gap-4">
                {/* Stacked Avatars */}
                <div className="flex -space-x-3">
                  {[
                    { initials: 'মো', bg: 'bg-gradient-to-br from-[#003B73] to-[#00529B]' },
                    { initials: 'রা', bg: 'bg-gradient-to-br from-[#1A5276] to-[#003B73]' },
                    { initials: 'ফা', bg: 'bg-gradient-to-br from-[#00529B] to-[#002850]' },
                    { initials: 'শা', bg: 'bg-gradient-to-br from-[#003B73] to-[#1A5276]' },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${avatar.bg} text-white flex items-center justify-center font-bold text-xs sm:text-sm ring-[3px] ring-white shadow-md`}
                    >
                      {avatar.initials}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-snug">
                    {language === 'bn'
                      ? 'বাংলাদেশের ২৫০+ শিক্ষা প্রতিষ্ঠান'
                      : 'Trusted by 250+ Educational Leaders'}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {language === 'bn'
                      ? 'প্রধানদের বিশ্বাসের প্রতীক'
                      : 'across Bangladesh'}
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Device Showcase Image ──────────────────── */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              {/* Floating metric card — top left of image */}
              <div className="hidden md:flex items-center gap-2.5 absolute -top-2 left-0 xl:-left-4 z-20 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/90 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-9 h-9 rounded-xl bg-sky-100/80 text-[#003B73] flex items-center justify-center border border-sky-200/60">
                  <Zap className="w-4 h-4 text-[#003B73]" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-bold">Core Web Vitals</p>
                  <p className="text-xs font-extrabold text-slate-900">99.8% Optimized</p>
                </div>
              </div>

              {/* Floating metric card — bottom right of image */}
              <div className="hidden md:flex items-center gap-2.5 absolute -bottom-2 right-0 xl:-right-2 z-20 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-200/90 animate-[float_6s_ease-in-out_infinite_1s]">
                <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center border border-emerald-200/60">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-bold">Security</p>
                  <p className="text-xs font-extrabold text-slate-900">SSL + Auto Backup</p>
                </div>
              </div>

              {/* The Device Mockup Image */}
              <div className="relative w-full max-w-[600px] lg:max-w-none">
                <img
                  src="/hero-devices.png"
                  alt="CampusDev Admin Panel displayed across desktop monitor, laptop, tablet and smartphone devices"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
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
              <Smartphone className="w-4 h-4 text-[#003B73]" />
              <span>✓ Mobile First</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#003B73]" />
              <span>✓ Fast Loading (99+ Score)</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#003B73]" />
              <span>✓ Easy Admin Panel</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#003B73]" />
              <span>✓ 100% Secure & Backup</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#003B73]" />
              <span>✓ Bangla + English Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BY & IMPACT METRICS */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#003B73] mb-2">
              {language === 'bn' ? 'প্রাতিষ্ঠানিক আস্থা' : 'Institutional Trust'}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0F172A]">
              {language === 'bn'
                ? 'দেশের শীর্ষস্থানীয় শিক্ষা প্রতিষ্ঠানের ডিজিটাল পার্টনার'
                : 'Trusted Partner for Educational Institutions in Bangladesh'}
            </h2>
          </div>

          {/* 5 Institution Partner Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-6 sm:mb-10">
            {[
              { name: 'রেসিডেনসিয়াল মডেল হাই স্কুল', loc: 'ধানমন্ডি, ঢাকা', icon: <School className="w-6 h-6 text-[#003B73]" /> },
              { name: 'গ্রীনফিল্ড আইডিয়াল কলেজ', loc: 'উত্তরা, ঢাকা', icon: <Building2 className="w-6 h-6 text-[#003B73]" /> },
              { name: 'আল-হিকমাহ ইসলামিক একাডেমি', loc: 'মিরপুর, ঢাকা', icon: <BookOpen className="w-6 h-6 text-[#003B73]" /> },
              { name: 'পায়োনিয়ার ক্যাডেট একাডেমি', loc: 'গাজীপুর', icon: <GraduationCap className="w-6 h-6 text-[#003B73]" /> },
              { name: 'শাহীন মডেল একাডেমি', loc: 'বনশ্রী, ঢাকা', icon: <School className="w-6 h-6 text-[#003B73]" /> },
            ].map((inst, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col items-center justify-center text-center gap-1.5 hover:shadow-sm hover:border-blue-300 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-1">
                  {inst.icon}
                </div>
                <span className="text-xs font-bold text-[#0F172A] leading-snug">{inst.name}</span>
                <span className="text-[10px] text-slate-500">{inst.loc}</span>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section className="py-8 sm:py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
                {language === 'bn' ? 'আমাদের সল্যুশনসমূহ' : 'Our Solutions'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
                {language === 'bn' 
                  ? 'প্রতিটি প্রতিষ্ঠানের জন্য স্বতন্ত্র ও বিশেষায়িত সেবা' 
                  : 'Specialized Web Solutions for Every Academic Need'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#003B73] hover:underline cursor-pointer"
            >
              <span>{language === 'bn' ? 'সকল সার্ভিস বিস্তারিত দেখুন' : 'View All Services'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#003B73] flex items-center justify-center mb-4 group-hover:bg-[#003B73] group-hover:text-white transition-colors">
                    {srv.category === 'school' && <School className="w-6 h-6" />}
                    {srv.category === 'college' && <Building2 className="w-6 h-6" />}
                    {srv.category === 'madrasa' && <BookOpen className="w-6 h-6" />}
                    {srv.category === 'custom' && <Layers className="w-6 h-6" />}
                    {srv.category === 'maintenance' && <ShieldCheck className="w-6 h-6" />}
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2">
                    {language === 'bn' ? srv.titleBn : srv.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
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
                  className="flex items-center gap-1.5 text-xs font-bold text-[#003B73] group-hover:gap-2 transition-all cursor-pointer"
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
              {language === 'bn' ? 'ফুল প্যাকেজ ফিচারস' : 'What You Get'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
              {language === 'bn'
                ? 'আমাদের তৈরি প্রতিটি ওয়েবসাইটে যা যা অন্তর্ভুক্ত থাকে'
                : 'Everything Included in Every CampusDev Website'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
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
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#003B73] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
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
      <section className="relative py-10 sm:py-14 md:py-20 border-b border-sky-900/40 overflow-hidden" id="admin-demo-preview">
        {/* Layered ambient gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C1929] via-[#0F2338] to-[#0C1929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,82,155,0.2),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003B73]/50 border border-sky-400/30 text-xs font-bold text-sky-200 mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'bn' ? 'সিগনেচার ফিচার' : 'Signature Feature'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white mt-2 leading-tight">
              {language === 'bn'
                ? <>Website শুধু দেখতেই সুন্দর নয়—নিজেরাও{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-100 to-sky-300">সহজে পরিচালনা</span>{' '}করতে পারবেন।</>
                : <>Websites are not just beautiful — they are{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-100 to-sky-300">effortless to manage.</span></>}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl mx-auto">
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
                {language === 'bn' ? 'বাস্তব প্রজেক্ট' : 'Featured Works'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
                {language === 'bn'
                  ? 'আমাদের তৈরি সফল প্রাতিষ্ঠানিক প্ল্যাটফর্মসমূহ'
                  : 'Recent Successful Educational Platforms'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('works')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#003B73] hover:underline cursor-pointer"
            >
              <span>{language === 'bn' ? 'সকল কেস স্টাডি দেখুন' : 'Explore All Works'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.slice(0, 3).map((study) => (
              <div
                key={study.id}
                className="group rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xl hover:border-blue-300 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#003B73] to-[#0F2338]">
                    <div className="w-full h-full p-6 text-white flex flex-col justify-between">
                      <span className="self-start px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white text-[10px] font-bold">
                        {language === 'bn' ? study.categoryLabelBn : study.categoryLabelEn}
                      </span>
                      <h4 className="text-lg font-bold text-white leading-snug line-clamp-2">
                        {language === 'bn' ? study.titleBn : study.titleEn}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[#0F172A]">
                      {language === 'bn' ? study.titleBn : study.titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {language === 'bn' ? study.summaryBn : study.summaryEn}
                    </p>

                    <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-[11px] font-bold text-[#003B73] mt-2">
                      ✓ {language === 'bn' ? study.resultsBn[0] : study.resultsEn[0]}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 mt-3 pt-3">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#003B73] hover:underline cursor-pointer"
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
              {language === 'bn' ? 'আমাদের স্বাতন্ত্র্য' : 'Why CampusDev?'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
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
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#003B73] flex items-center justify-center">
                  {item.id === 'built-for-edu' && <GraduationCap className="w-5 h-5" />}
                  {item.id === 'mobile-first' && <Smartphone className="w-5 h-5" />}
                  {item.id === 'easy-to-manage' && <Layers className="w-5 h-5" />}
                  {item.id === 'custom-built' && <Zap className="w-5 h-5" />}
                  {item.id === 'fast-and-secure' && <ShieldCheck className="w-5 h-5" />}
                  {item.id === 'long-term-support' && <Headphones className="w-5 h-5" />}
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {language === 'bn' ? item.titleBn : item.titleEn}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
              {language === 'bn' ? 'সহজ কর্মপ্রক্রিয়া' : 'Our Process'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
              {language === 'bn'
                ? 'আমাদের কাজের ৬টি সুনির্দিষ্ট ও নির্ভরযোগ্য ধাপ'
                : 'Structured 6-Step Implementation Flow'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {language === 'bn'
                ? 'চুক্তির দিন থেকে লাইভ হওয়া পর্যন্ত প্রতিটি পদক্ষেপ স্বচ্ছ ও সময়োপযোগী।'
                : 'Transparent, reliable milestones from discovery to launch day.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW_STEPS.map((wf) => (
              <div key={wf.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold font-heading text-[#003B73]">
                    {wf.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-600 border border-slate-200">
                    Step {wf.step}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#0F172A] mt-1">
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
              {language === 'bn' ? 'স্বচ্ছ প্যাকেজ রেট' : 'Transparent Pricing'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
              {language === 'bn'
                ? 'আপনার প্রতিষ্ঠানের প্রয়োজন অনুযায়ী সেরা প্যাকেজ বেছে নিন'
                : 'Select the Right Package for Your Institution'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
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
                    ? 'bg-[#0C1929] text-white shadow-2xl relative border-2 border-sky-400 -translate-y-2'
                    : 'bg-white text-slate-800 border border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#003B73] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm border border-sky-400/40">
                    {language === 'bn' ? 'সবচেয়ে জনপ্রিয়' : 'Most Popular'}
                  </span>
                )}

                <div>
                  <h3 className={`text-lg font-bold font-heading ${plan.popular ? 'text-white' : 'text-[#0F172A]'}`}>
                    {language === 'bn' ? plan.nameBn : plan.nameEn}
                  </h3>
                  <p className={`text-xs mt-1 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                    {language === 'bn' ? plan.subtitleBn : plan.subtitleEn}
                  </p>

                  <div className="my-6">
                    <span className={`text-3xl sm:text-4xl font-extrabold font-heading ${plan.popular ? 'text-sky-300' : 'text-[#003B73]'}`}>
                      {language === 'bn' ? plan.priceBn : plan.priceEn}
                    </span>
                    <span className={`text-xs ml-1 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      {language === 'bn' ? '/এককালীন' : '/one-time'}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 text-xs mb-8">
                    {(language === 'bn' ? plan.featuresBn : plan.featuresEn).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-sky-300' : 'text-[#003B73]'}`} />
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
                        ? 'bg-[#003B73] hover:bg-[#00529B] text-white shadow-md'
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
              <h4 className="text-sm sm:text-base font-bold text-[#0F172A]">
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
              className="px-6 py-2.5 rounded-xl bg-[#003B73] hover:bg-[#00529B] text-white text-xs font-bold whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-sky-300" />
              <span>{language === 'bn' ? 'কাস্টম এস্টিমেট হিসাব করুন' : 'Custom Estimate Calculator'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
              {language === 'bn' ? 'ক্লায়েন্ট মতামত' : 'Testimonials'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
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
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed mb-6">
                    "{language === 'bn' ? t.quoteBn : t.quoteEn}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-full bg-[#003B73] text-white flex items-center justify-center font-bold text-xs">
                    {t.nameEn.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A]">
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#003B73]">
              {language === 'bn' ? 'প্রশ্নোত্তর' : 'Frequently Asked Questions'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F172A] mt-1">
              {language === 'bn' ? 'সাধারণ জিজ্ঞাসা ও উত্তর' : 'Common Questions & Clear Answers'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
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
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-[#0F172A] hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{language === 'bn' ? faq.questionBn : faq.questionEn}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#003B73]' : ''}`} />
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
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#0C1929] text-white p-5 sm:p-8 lg:p-14 shadow-2xl overflow-hidden border border-blue-900/50">
            {/* Ambient Lighting Rings */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#003B73]/60 text-sky-200 text-[11px] font-bold uppercase tracking-wider mb-4 border border-sky-400/30">
                  🚀 {language === 'bn' ? 'আজই শুরু করুন' : 'Start Today'}
                </span>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-4 leading-snug">
                  {language === 'bn'
                    ? 'আপনার প্রতিষ্ঠানের জন্য একটি আধুনিক ও শক্তিশালী ওয়েবসাইট তৈরি করতে প্রস্তুত?'
                    : 'Ready to Transform Your Educational Institution with a Modern Digital Presence?'}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl leading-relaxed">
                  {language === 'bn'
                    ? 'আজই একটি ফ্রি প্ল্যানিং কল বা প্রজেক্ট এস্টিমেট বুক করুন। আমাদের এডু-টেক স্পেশালিস্ট টিম আপনাকে সঠিক গাইডলাইন দেবে।'
                    : 'Book a free discovery session with our senior education web engineers. We provide end-to-end guidance tailored to your academic syllabus.'}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#003B73] hover:bg-[#00529B] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer border border-sky-400/20"
                  >
                    <span>{language === 'bn' ? 'Start Your Project (প্রজেক্ট শুরু করুন)' : 'Start Your Project'}</span>
                    <ArrowRight className="w-4 h-4 text-sky-300" />
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
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    {language === 'bn' ? 'দ্রুত বাজেট ও সময় হিসাব' : 'Quick Budget & Delivery Estimator'}
                  </h4>
                  <Calculator className="w-4 h-4 text-[#003B73]" />
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
                      className="w-full h-10 px-3 rounded-lg border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#003B73] bg-slate-50"
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
                      <p className="text-lg font-extrabold font-heading text-[#003B73]">
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
                    className="w-full py-2.5 rounded-xl bg-[#003B73] hover:bg-[#00529B] text-white text-xs font-bold text-center transition-colors cursor-pointer"
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
