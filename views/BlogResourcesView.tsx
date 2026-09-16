'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Sparkles, 
  BookOpen, 
  Download, 
  CheckSquare, 
  FileText, 
  ArrowRight, 
  ExternalLink,
  Zap,
  CheckCircle,
  Clock
} from 'lucide-react';

interface BlogResourcesViewProps {
  language: Language;
  onOpenAudit: () => void;
  onOpenEstimator: () => void;
}

export const BlogResourcesView: React.FC<BlogResourcesViewProps> = ({
  language,
  onOpenAudit,
  onOpenEstimator
}) => {
  const [activeTab, setActiveTab] = useState<'articles' | 'tools'>('articles');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const articles = [
    {
      id: 'why-schools-need-modern-websites',
      titleBn: 'কেন প্রতিটি স্কুলের এখন আধুনিক ও মোবাইল-ফার্স্ট ওয়েবসাইট প্রয়োজন?',
      titleEn: 'Why Every School Needs a Modern, Mobile-First Website in 2025',
      summaryBn: 'অভিভাবকদের ৯২% স্মার্টফোন ব্যবহারকারী। প্রাচীন টেবিল-ভিত্তিক সাইটগুলো কীভাবে প্রাতিষ্ঠানিক সুনাম নষ্ট করছে এবং আধুনিক ওয়েবসাইটের সুবিধা কী কী।',
      summaryEn: 'Over 92% of parents browse school updates via mobile smartphones. Why legacy desktop sites damage enrollments and trust.',
      readTime: '৫ মিনিট',
      date: 'মে ২০২৫',
      category: 'স্ট্র্যাটেজি'
    },
    {
      id: 'how-to-increase-admissions',
      titleBn: 'কীভাবে ডিজিটাল ওয়েবসাইটের মাধ্যমে প্রতিষ্ঠানে ভর্তি আবেদন দ্বিগুণ করবেন?',
      titleEn: 'How to Double Student Admission Inquiries Through Your School Portal',
      summaryBn: 'সহজ অনলাইন ভর্তি ফরম, এসএমএস কনফার্মেশন ও ডিজিটাল টোকেন ব্যবহারের মাধ্যমে অভিভাবকদের ভর্তি প্রক্রিয়াকে আকর্ষণীয় করার ৫টি উপায়।',
      summaryEn: 'Streamlining application submission, digital tokens, and mobile payments to drive higher enrollment numbers.',
      readTime: '৬ মিনিট',
      date: 'মে ২০২৫',
      category: 'ভর্তি ব্যবস্থাপনা'
    },
    {
      id: 'top-features-for-school-websites',
      titleBn: 'শিক্ষা প্রতিষ্ঠানের ওয়েবসাইটের জন্য আবশ্যক ১০টি সেরা ফিচার',
      titleEn: '10 Mandatory Features Every School & College Website Must Have',
      summaryBn: 'ডায়নামিক নোটিশ বোর্ড, রেজাল্ট পোর্টাল, শিক্ষক পরিচিতি ও বাংলা অ্যাডমিন প্যানেল কেন শিক্ষা প্রতিষ্ঠানের সফলতার চাবিকাঠি।',
      summaryEn: 'From PDF notice tickers to batch marksheets and Bengali admin panels: the essential anatomy of an educational website.',
      readTime: '৪ মিনিট',
      date: 'মে ২০২৫',
      category: 'ফিচার গাইড'
    },
    {
      id: 'website-cyber-security',
      titleBn: 'শিক্ষা প্রতিষ্ঠানের ওয়েবসাইটের সাইবার নিরাপত্তা ও অটো ব্যাকআপ কেন জরুরি?',
      titleEn: 'Why Cybersecurity and Cloud Backups are Vital for Academic Portals',
      summaryBn: 'পরীক্ষার প্রশ্ন, রেজাল্ট ডাটাবেজ ও শিক্ষার্থীদের ব্যক্তিগত তথ্যের সুরক্ষা নিশ্চিত করতে ব্যাংক-গ্রেড সিকিউরিটির গুরুত্ব।',
      summaryEn: 'Protecting confidential student data, examination archives, and admission documents against data loss and attacks.',
      readTime: '৭ মিনিট',
      date: 'মে ২০২৫',
      category: 'সিকিউরিটি'
    }
  ];

  const freeResources = [
    {
      id: 'checklist',
      titleBn: 'স্কুল ওয়েবসাইট লঞ্চ চেকলিস্ট (২৫টি জরুরি পয়েন্ট)',
      titleEn: 'Complete 25-Point School Website Launch Checklist',
      descBn: 'ওয়েবসাইট লাইভ করার আগে নোটিশ, রেজাল্ট, শিক্ষক তালিকা ও মোবাইল রেসপন্সিভনেস নিশ্চিত করার প্রিন্ট উপযোগী গাইড।',
      descEn: 'A ready-to-print evaluation sheet covering academic compliance, mobile tests, and SEO verification.',
      format: 'PDF গাইড',
      fileSize: '১.২ MB'
    },
    {
      id: 'planning-template',
      titleBn: 'শিক্ষা প্রতিষ্ঠান ওয়েবসাইট প্ল্যানিং টেমপ্লেট',
      titleEn: 'Academic Portal Scope & Content Planning Sheet',
      descBn: 'পরিচালনা কমিটির মিটিংয়ে উপস্থাপন করার জন্য প্রয়োজনীয় তথ্য সংগ্রহের সুবিন্যস্ত এক্সেল ও ওয়ার্ড টেমপ্লেট।',
      descEn: 'Organize teacher data, academic syllabus, notices, and governing board details before development begins.',
      format: 'Excel / Docx',
      fileSize: '৮৫০ KB'
    },
    {
      id: 'speed-guide',
      titleBn: 'ওয়েবসাইট স্পিড ও অপ্টিমাইজেশন অডিট গাইড',
      titleEn: 'School Website Speed Diagnostic Handbook',
      descBn: 'কীভাবে গুগল পেজস্পিড ইনসাইটসে ১০০ স্কোর অর্জন করা যায় এবং ধীরগতির সার্ভারের ক্ষতি এড়ানো যায়।',
      descEn: 'Best practices for compression, Cloudflare CDN integration, and caching for high-traffic exam result days.',
      format: 'PDF ই-বুক',
      fileSize: '২.১ MB'
    }
  ];

  const handleDownload = (id: string, name: string) => {
    setDownloadSuccess(name);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'রিসোর্স ও নলেজ হাব' : 'Resources & Insights'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'শিক্ষা প্রতিষ্ঠানের ডিজিটাল রূপান্তরের সেরা গাইডলাইন' 
              : 'Educational Technology Insights & Free Resources'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {language === 'bn'
              ? 'স্কুল, কলেজ ও মাদ্রাসার পরিচালনা পরিষদ এবং শিক্ষকদের জন্য সহায়ক তথ্য ও ফ্রি ডাউনলোড উপযোগী চেকলিস্ট।'
              : 'Actionable strategies, best practices, and downloadable blueprints for school directors and administrators.'}
          </p>

          {/* Tab Filter */}
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs mt-8">
            <button
              onClick={() => setActiveTab('articles')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'articles'
                  ? 'bg-[#0e0520] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'bn' ? 'তথ্যমূলক আর্টিকেল ও ব্লগ' : 'Articles & Guides'}
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'tools'
                  ? 'bg-[#0e0520] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'bn' ? 'ফ্রি টুলস ও চেকলিস্ট (ডাউনলোড)' : 'Free Tools & Downloads'}
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="max-w-md mx-auto mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-between shadow-xs">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>"{downloadSuccess}" ফাইলটি সফলভাবে ডাউনলোড শুরু হয়েছে!</span>
            </span>
          </div>
        )}

        {/* ARTICLES TAB */}
        {activeTab === 'articles' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {articles.map((art) => (
              <div
                key={art.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-fuchsia-950/20 text-fuchsia-400 font-bold">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime} পাঠ</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-[#0B1C30] mb-2 leading-snug">
                    {language === 'bn' ? art.titleBn : art.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {language === 'bn' ? art.summaryBn : art.summaryEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{art.date}</span>
                  <button
                    onClick={onOpenAudit}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 hover:underline cursor-pointer"
                  >
                    <span>{language === 'bn' ? 'ওয়েবসাইট অডিট করে দেখুন' : 'Audit Your School Site'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* FREE TOOLS & DOWNLOADS TAB */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {freeResources.map((res) => (
              <div
                key={res.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-950/20 text-fuchsia-400 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {res.format} • {res.fileSize}
                  </span>

                  <h3 className="text-base font-bold font-heading text-[#0B1C30] mt-1 mb-2">
                    {language === 'bn' ? res.titleBn : res.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {language === 'bn' ? res.descBn : res.descEn}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload(res.id, language === 'bn' ? res.titleBn : res.titleEn)}
                  className="w-full py-3 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-violet-300" />
                  <span>{language === 'bn' ? 'ফ্রি ডাউনলোড করুন' : 'Free Download'}</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Audit Callout Banner */}
        <div className="p-8 rounded-3xl bg-[#0e0520] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-violet-300">
              💡 ফ্রি সেলফ-ডায়াগনস্টিক টুল
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-heading mt-1">
              {language === 'bn' 
                ? 'আপনার বর্তমান শিক্ষা প্রতিষ্ঠানের ওয়েবসাইটটি কি যথেষ্ট দ্রুত ও মোবাইল ফ্রেন্ডলি?' 
                : 'Is Your Existing School Portal Mobile-Friendly & Fast?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              {language === 'bn'
                ? 'আমাদের ফ্রি ডায়াগনস্টিক ইঞ্জিন দিয়ে মাত্র ১ মিনিটে আপনার সাইটের স্পিড, এসইও ও সিকিউরিটি স্কোর পরীক্ষা করুন।'
                : 'Run an instantaneous benchmark to identify mobile bottlenecks, missing SEO tags, and security gaps.'}
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-6 py-3.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-md cursor-pointer transition-colors flex items-center gap-2"
          >
            <Zap className="w-4 h-4" />
            <span>{language === 'bn' ? 'ফ্রি ওয়েবসাইট অডিট টেস্ট করুন' : 'Run Free Speed Audit'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
