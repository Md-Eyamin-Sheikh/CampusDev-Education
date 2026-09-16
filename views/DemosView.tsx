'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  ExternalLink, 
  Check, 
  Sparkles, 
  School, 
  Building2, 
  BookOpen, 
  GraduationCap,
  Play,
  ArrowRight,
  ShieldCheck,
  Search,
  FileText
} from 'lucide-react';
import { AdminDemoInteractive } from '../components/AdminDemoInteractive';

interface DemosViewProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const DemosView: React.FC<DemosViewProps> = ({
  language,
  onOpenConsultation
}) => {
  const [activeDemo, setActiveDemo] = useState<'school' | 'college' | 'madrasa' | 'coaching'>('school');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [showAdminTab, setShowAdminTab] = useState(false);

  const demoConfig = {
    school: {
      titleBn: 'মডেল হাই স্কুল ডেমো প্ল্যাটফর্ম',
      titleEn: 'Model High School Live Demo',
      categoryBn: 'স্কুল সংস্করণ',
      categoryEn: 'School Edition',
      url: 'https://apex-school-demo.campusdev.com',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
      noticeTicker: '📢 ২০২৫ শিক্ষাবর্ষের অর্ধবার্ষিক পরীক্ষার সময়সূচি ও প্রবেশপত্র বিতরণ সংক্রান্ত জরুরি বিজ্ঞপ্তি।',
      principalName: 'ড. মো: রফিকুল ইসলাম',
      features: [
        'ক্লাস ১-১০ অনলাইন ভর্তি ফরম ও ডিজিটাল টোকেন',
        'রোল ও সেকশন দিয়ে তাৎক্ষণিক রেজাল্ট ফাইন্ডার',
        'পিডিএফ নোটিশ বোর্ড ও সার্কুলার আর্কাইভ',
        'শিক্ষক ও কর্মচারী ডিরেক্টরি পরিচিতি',
        'একাডেমিক ক্যালেন্ডার ও ইভেন্ট শিডিউল',
        'বাংলা ও ইংরেজি দ্বিভাষিক ইন্টারফেস'
      ],
      techStack: ['React 18', 'Tailwind CSS', 'Vite', 'Cloudflare CDN', 'PWA']
    },
    college: {
      titleBn: 'গ্রীনফিল্ড আইডিয়াল কলেজ ডেমো পোর্টাল',
      titleEn: 'Greenfield College Live Demo Portal',
      categoryBn: 'কলেজ সংস্করণ',
      categoryEn: 'College Edition',
      url: 'https://greenfield-college-demo.campusdev.com',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
      noticeTicker: '📢 উচ্চ মাধ্যমিক (একাদশ শ্রেণি) বার্ষিক পরীক্ষা ও রেজিস্ট্রেশন ফরম পূরণ সংক্রান্ত নির্দেশিকা।',
      principalName: 'প্রফেসর ড. নাসরিন আক্তার',
      features: [
        'বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগ পোর্টাল',
        'অনলাইন বিষয় নির্বাচন ও সেমিস্টার ফি ট্র্যাকিং',
        'টার্মিনাল রেজাল্ট ও গ্রেডিং পয়েন্ট শিট',
        'ডিজিটাল লাইব্রেরি বুক ক্যাটালগ ও সার্চ',
        'কলেজ গভর্নিং বডি ও শিক্ষক প্রোফাইল',
        'উচ্চ মাধ্যমিক বোর্ড নোটিশ সরাসরি সিনক্রোনাইজেশন'
      ],
      techStack: ['React 18', 'Fastify', 'PostgreSQL', 'Tailwind CSS', 'Redis']
    },
    madrasa: {
      titleBn: 'আল-হিকমাহ ইসলামিক একাডেমি ও মাদ্রাসা ডেমো',
      titleEn: 'Al-Hikmah Madrasa Complex Live Demo',
      categoryBn: 'মাদ্রাসা সংস্করণ',
      categoryEn: 'Madrasa Edition',
      url: 'https://alhikmah-madrasa-demo.campusdev.com',
      image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1000&q=80',
      noticeTicker: '📢 হিফজুল কুরআন বিভাগ ও কিতাব বিভাগের ত্রৈমাসিক পরীক্ষার ফলাফল ও সনদ বিতরণ।',
      principalName: 'মুফতি মাওলানা এনামুল হক',
      features: [
        'হিফজ, কিতাব ও আলিয়া বিভাগের স্বতন্ত্র কারিকুলাম',
        'সদকা, যাকাত ও লিল্লাহ ফান্ড ডোনেশন গেটওয়ে',
        'নামাজের ওয়াক্ত ও ইসলামিক হিজরি ক্যালেন্ডার',
        'হাফেজদের বার্ষিক তালিকা ও তিলাওয়াত অডিও আর্কাইভ',
        'মাদ্রাসা এতিমখানা ও হোস্টেল ম্যানেজমেন্ট লিঙ্ক',
        'বাংলা ও আরবি ফন্ট এবং বিশুদ্ধ ইসলামিক ডিজাইন থিম'
      ],
      techStack: ['React 18', 'Tailwind CSS', 'SSL Commerz', 'Firebase Storage']
    },
    coaching: {
      titleBn: 'পায়োনিয়ার একাডেমি ও ক্যাডেট কোচিং ডেমো',
      titleEn: 'Pioneer Academy & Coaching Live Demo',
      categoryBn: 'কোচিং ও একাডেমি',
      categoryEn: 'Coaching & Academy',
      url: 'https://pioneer-academy-demo.campusdev.com',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
      noticeTicker: '📢 ক্যাডেট কলেজ ভর্তি পরীক্ষা স্পেশাল মডেল টেস্ট ব্যাচের ওরিয়েন্টেশন শুক্রবার সকাল ৯টায়।',
      principalName: 'ইঞ্জি: মাহবুবুর রহমান (ডিরেক্টর)',
      features: [
        'মডেল টেস্ট শিডিউল ও ব্যাচ ওয়াইজ রুটিন',
        'অনলাইন ফ্রি ডেমো ক্লাস রেজিস্ট্রেশন ফরম',
        'স্টুডেন্ট লিডারবোর্ড ও মেরিট র‍্যাঙ্ক তালিকা',
        'সফল সাবেক ক্যাডেটদের সাফল্যের গল্প ও ভিডিও',
        'হোয়াটসঅ্যাপ ওয়ান-ক্লিক হেল্পলাইন ও কাউন্সেলিং',
        'এসএমএস এটেন্ডেন্স নোটিফিকেশন গেটওয়ে'
      ],
      techStack: ['React 18', 'Tailwind CSS', 'Vite', 'Bulk SMS API']
    }
  };

  const current = demoConfig[activeDemo];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Laptop className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'সরাসরি ডেমো এক্সপ্লোর করুন' : 'Interactive Demos'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'আপনার প্রতিষ্ঠানের জন্য লাইভ ডেমো ওয়েবসাইট' 
              : 'Test Drive Our Purpose-Built Educational Platforms'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {language === 'bn'
              ? 'নিচে আপনার প্রতিষ্ঠানের ধরন বেছে নিয়ে লাইভ ওয়েবসাইট ও অ্যাডমিন প্যানেল নিজে চালিয়ে দেখুন।'
              : 'Switch between institution types to interact with real layouts, mobile simulations, and the admin system.'}
          </p>
        </div>

        {/* Demo Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {[
            { id: 'school', labelBn: '🏫 স্কুল ডেমো', labelEn: '🏫 School Demo' },
            { id: 'college', labelBn: '🏛️ কলেজ পোর্টাল ডেমো', labelEn: '🏛️ College Demo' },
            { id: 'madrasa', labelBn: '🕌 মাদ্রাসা ডেমো', labelEn: '🕌 Madrasa Demo' },
            { id: 'coaching', labelBn: '🎓 কোচিং / একাডেমি ডেমো', labelEn: '🎓 Academy Demo' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveDemo(tab.id as any);
                setShowAdminTab(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeDemo === tab.id
                  ? 'bg-[#0e0520] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {language === 'bn' ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Mode Switch Bar: Live Preview vs Admin Panel Simulator */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAdminTab(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                !showAdminTab ? 'bg-fuchsia-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>{language === 'bn' ? 'ওয়েবসাইট ইন্টারফেস প্রিভিউ' : 'Public Website Preview'}</span>
            </button>
            <button
              onClick={() => setShowAdminTab(true)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                showAdminTab ? 'bg-fuchsia-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{language === 'bn' ? 'অ্যাডমিন প্যানেল সিমুলেটর' : 'Admin Panel Simulator'}</span>
            </button>
          </div>

          {!showAdminTab && (
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
                  deviceMode === 'desktop' ? 'bg-white text-[#0B1C30] shadow-2xs' : 'text-slate-500'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer ${
                  deviceMode === 'mobile' ? 'bg-white text-[#0B1C30] shadow-2xs' : 'text-slate-500'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile (স্মার্টফোন)</span>
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Display Area */}
        {!showAdminTab ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Browser Device Mockup */}
            <div className={`transition-all duration-300 ${deviceMode === 'mobile' ? 'lg:col-span-6 lg:col-start-4' : 'lg:col-span-8'}`}>
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-300 shadow-2xl overflow-hidden">
                {/* Browser URL Bar */}
                <div className="h-10 bg-[#0e0520] px-4 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="ml-3 text-slate-300 font-mono text-[11px] truncate">
                      {current.url}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-fuchsia-500/20 text-violet-300 text-[10px] font-bold">
                    DEMO
                  </span>
                </div>

                {/* Simulated Portal Content */}
                <div className="p-4 sm:p-6 bg-slate-50 flex flex-col gap-4">
                  {/* Institutional Header Banner */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0e0520] text-white flex items-center justify-center font-bold text-sm">
                        CD
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#0B1C30]">
                          {language === 'bn' ? current.titleBn : current.titleEn}
                        </h4>
                        <p className="text-[10px] text-slate-500">
                          {language === 'bn' ? 'গণপ্রজাতন্ত্রী বাংলাদেশ সরকার অনুমোদিত' : 'Recognized Education Entity'}
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                      অনলাইন সার্ভিস সক্রিয়
                    </span>
                  </div>

                  {/* Breaking News Ticker */}
                  <div className="p-2.5 rounded-lg bg-fuchsia-950/20 border border-fuchsia-500/20 text-xs flex items-center gap-2 text-slate-800 font-medium">
                    <span className="px-2 py-0.5 rounded bg-[#0e0520] text-white text-[10px] font-bold">বিজ্ঞপ্তি</span>
                    <span className="truncate">{current.noticeTicker}</span>
                  </div>

                  {/* Hero Showcase inside Demo */}
                  <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-xs border border-slate-200">
                    <img
                      src={current.image}
                      alt="Demo Showcase"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0520]/90 via-[#0e0520]/30 to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-violet-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                        আধুনিক শিক্ষাঙ্গন
                      </span>
                      <h3 className="text-base sm:text-xl font-bold font-heading">
                        {language === 'bn' ? current.titleBn : current.titleEn}
                      </h3>
                    </div>
                  </div>

                  {/* 4 Interactive Service Action Tiles */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { icon: <FileText className="w-4 h-4 text-fuchsia-400" />, title: 'ভর্তি ফরম', subtitle: 'অনলাইনে আবেদন' },
                      { icon: <Search className="w-4 h-4 text-fuchsia-400" />, title: 'রেজাল্ট আর্কাইভ', subtitle: 'রোল সার্চ' },
                      { icon: <BookOpen className="w-4 h-4 text-fuchsia-400" />, title: 'সিলেবাস ও রুটিন', subtitle: 'পিডিএফ ডাউনলোড' },
                      { icon: <ShieldCheck className="w-4 h-4 text-fuchsia-400" />, title: 'অনলাইন ফি', subtitle: 'বিকাশ ও নগদ' },
                    ].map((tile, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs text-center flex flex-col items-center">
                        <div className="w-8 h-8 rounded-lg bg-fuchsia-950/20 flex items-center justify-center mb-1.5">
                          {tile.icon}
                        </div>
                        <p className="text-xs font-bold text-[#0B1C30]">{tile.title}</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">{tile.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Specifications Column */}
            <div className={`lg:col-span-4 flex flex-col gap-6 ${deviceMode === 'mobile' ? 'hidden lg:flex' : ''}`}>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                  {language === 'bn' ? current.categoryBn : current.categoryEn}
                </span>

                <h3 className="text-lg font-bold font-heading text-[#0B1C30]">
                  {language === 'bn' ? current.titleBn : current.titleEn}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'bn'
                    ? 'এই ডেমোটি বিশেষায়িত আর্কিটেকচারে তৈরি। এতে নোটিশ বোর্ড, ভর্তি ফরম, রেজাল্ট অনুসন্ধান ও বাংলা অ্যাডমিন অন্তর্ভুক্ত রয়েছে।'
                    : 'This configuration includes end-to-end institutional modules pre-configured for live deployment.'}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 mb-2">
                    {language === 'bn' ? 'অন্তর্ভুক্ত প্রধান ফিচারসমূহ:' : 'Key Included Features:'}
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-slate-700">
                    {current.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800 mb-2">
                    {language === 'bn' ? 'প্রযুক্তি কাঠামো (Tech Stack):' : 'Engineered With:'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {current.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col gap-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    {language === 'bn' ? 'এই ডেমোর মতো ওয়েবসাইট তৈরি করুন' : 'Deploy a Similar Platform'}
                  </button>
                  <button
                    onClick={() => setShowAdminTab(true)}
                    className="w-full py-2.5 rounded-xl bg-fuchsia-950/20 text-fuchsia-400 hover:bg-fuchsia-900/20 text-xs font-bold transition-colors cursor-pointer"
                  >
                    {language === 'bn' ? 'অ্যাডমিন প্যানেল টেস্ট করুন' : 'Test Drive Admin System'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Admin Demo Simulation */
          <div>
            <div className="mb-6 p-4 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/20 flex items-center justify-between">
              <p className="text-xs text-slate-700">
                💡 <b>লাইভ অ্যাডমিন সিমুলেশন:</b> নিচের ফর্মে নতুন নোটিশ যোগ করে দেখুন অথবা রেজাল্ট ও ভর্তি ফরমের আবেদনগুলো ফিল্টার করুন।
              </p>
              <button
                onClick={() => setShowAdminTab(false)}
                className="text-xs font-bold text-fuchsia-400 hover:underline cursor-pointer"
              >
                ← ওয়েবসাইট ভিউতে ফিরুন
              </button>
            </div>
            <AdminDemoInteractive 
              language={language}
              onOpenConsultation={onOpenConsultation}
            />
          </div>
        )}
      </div>
    </div>
  );
};
