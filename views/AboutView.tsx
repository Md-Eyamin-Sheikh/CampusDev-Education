'use client';
import React from 'react';
import { Language } from '../types';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Users, 
  HeartHandshake, 
  GraduationCap, 
  Award,
  ArrowRight
} from 'lucide-react';

interface AboutViewProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  language,
  onOpenConsultation
}) => {
  const values = [
    {
      titleBn: 'বিশ্বাস ও নির্ভরযোগ্যতা (Trust)',
      titleEn: 'Trust & Integrity',
      descBn: 'আমরা শিক্ষা প্রতিষ্ঠানের গোপনীয় ডেটা ও প্রাতিষ্ঠানিক মর্যাদাকে সর্বোচ্চ অগ্রাধিকার দিয়ে থাকি।',
      descEn: 'Bank-grade student data confidentiality and institutional reputational defense.',
      icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" />
    },
    {
      titleBn: 'দ্রুততা ও অপ্টিমাইজেশন (Speed)',
      titleEn: 'Extreme Performance',
      descBn: 'ধীরগতির ওয়েবসাইটের দিন শেষ। আমাদের কোডিংয়ে গড়ে ৯৯+ গুগল স্পিড স্কোর অর্জিত হয়।',
      descEn: 'Sub-second mobile rendering across 4G and unstable campus Wi-Fi networks.',
      icon: <Zap className="w-6 h-6 text-fuchsia-400" />
    },
    {
      titleBn: 'ব্যবহারের সহজতা (Simplicity)',
      titleEn: 'Radical Simplicity',
      descBn: 'কোনো জটিল কোডিং জ্ঞান ছাড়াই সাধারণ শিক্ষক বা অফিস সহকারী সহজে সাইট চালাতে পারেন।',
      descEn: 'Intuitive Bengali admin interfaces built for non-technical administrative staff.',
      icon: <Layers className="w-6 h-6 text-fuchsia-400" />
    },
    {
      titleBn: 'দীর্ঘমেয়াদী অংশীদারিত্ব (Partnership)',
      titleEn: 'Long-term Partnership',
      descBn: 'সাইট ডেলিভারির পরও নিয়মিত ব্যাকআপ, আপডেট ও প্রযুক্তিগত পরামর্শ নিয়ে আমরা সবসময় পাশে থাকি।',
      descEn: 'Continuous security patching, reliable backups, and on-call technical stewardship.',
      icon: <HeartHandshake className="w-6 h-6 text-fuchsia-400" />
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'আমাদের গল্প ও দর্শন' : 'Our Story & Purpose'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'CampusDev — শিক্ষা প্রতিষ্ঠানের ডিজিটাল রূপান্তরের বিশ্বস্ত সারথি' 
              : 'Empowering Educational Institutions Across Bangladesh'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            {language === 'bn'
              ? 'CampusDev শুধু একটি সাধারণ ওয়েব এজেন্সি নয়। আমরা বাংলাদেশের শিক্ষা ব্যবস্থার উপযোগী আধুনিক, নিরাপদ ও দ্রুতগতির ডিজিটাল সল্যুশন নির্মাণকারী স্পেশালাইজড প্ল্যাটফর্ম।'
              : 'CampusDev is not a generic agency. We are an education-focused technology lab crafting high-performance, accessible digital platforms for institutions.'}
          </p>
        </div>

        {/* Story & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 block mb-2">
                কেন শুধুমাত্র শিক্ষা খাত? (Why Education Focus?)
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {language === 'bn'
                  ? 'বাংলাদেশের অধিকাংশ শিক্ষা প্রতিষ্ঠানের ওয়েবসাইটগুলো প্রাচীন প্রযুক্তিতে তৈরি, মোবাইলে ঠিকমতো খোলে ঘন এবং নোটিশ বা রেজাল্ট দিতে গেলে অন্য কোম্পানির ওপর নির্ভর করতে হয়। এই ভোগান্তি দূর করতেই আমরা CampusDev প্রতিষ্ঠা করেছি—যাতে প্রতিটি স্কুল, কলেজ ও মাদ্রাসা নিজস্ব আধুনিক পরিচিতি ও সহজ বাংলা কন্ট্রোল পায়।'
                  : 'Most academic websites in Bangladesh suffer from outdated codebases, poor mobile readability, and cumbersome admin layers. CampusDev was engineered specifically to give every school, college, and madrasa effortless digital independence and pride.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <h4 className="text-sm font-bold text-[#0B1C30] mb-2">🎯 আমাদের মিশন</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  দেশের প্রতিটি শিক্ষা প্রতিষ্ঠানকে একটি আন্তর্জাতিক মানের, মোবাইল-ফ্রেন্ডলি ও নিরাপদ ওয়েবসাইট প্রদানের মাধ্যমে তাদের প্রশাসনিক গতি বৃদ্ধি করা।
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <h4 className="text-sm font-bold text-[#0B1C30] mb-2">🔭 আমাদের ভিশন</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ২০৩০ সালের মধ্যে বাংলাদেশের ৫০০+ শীর্ষস্থানীয় শিক্ষা প্রতিষ্ঠানের জন্য নির্ভরযোগ্য এবং স্বয়ংক্রিয় ক্লাউড প্ল্যাটফর্ম তৈরি করা।
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="Education Technology Focus"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0520]/90 via-[#0e0520]/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-violet-300 text-xs font-bold uppercase tracking-wider mb-1">
                  প্রযুক্তি ও শিক্ষার মেলবন্ধন
                </span>
                <p className="text-lg font-bold font-heading">
                  সহজ বাংলা অ্যাডমিন প্যানেল ও রিয়েল-টাইম ভর্তি ব্যবস্থাপনায় আধুনিক ডিজিটাল ক্যাম্পাস
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
              আমাদের মূলনীতি
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0B1C30] mt-1">
              যে ৪টি স্তম্ভে CampusDev পরিচালিত হয়
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-[#0B1C30]">
                  {language === 'bn' ? v.titleBn : v.titleEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === 'bn' ? v.descBn : v.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Call to Action */}
        <div className="p-8 rounded-3xl bg-[#0e0520] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading">
              আমাদের সাথে আপনার প্রতিষ্ঠানের ডিজিটাল পরিকল্পনা শুরু করুন
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              আমাদের সিনিয়র এডু-টেক কনসালটেন্ট সরাসরি আপনার প্রতিষ্ঠানে বা গুগল মিটে বিস্তারিত আলোচনা করবেন।
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-md cursor-pointer transition-colors"
          >
            ফ্রি কনসালটেশন বুক করুন
          </button>
        </div>
      </div>
    </div>
  );
};
