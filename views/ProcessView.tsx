'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { WORKFLOW_STEPS } from '../data/content';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  Laptop, 
  Layers,
  GraduationCap
} from 'lucide-react';

interface ProcessViewProps {
  language: Language;
  onOpenConsultation: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({
  language,
  onOpenConsultation
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepDetails = [
    {
      step: '০১',
      titleBn: 'চাহিদা বিশ্লেষণ ও পরিকল্পনা (Discovery & Requirement)',
      titleEn: 'Discovery & Requirement Analysis',
      duration: '১-২ দিন',
      institutionRole: 'প্রতিষ্ঠানের বর্তমান নোটিশ, লোগো ও মূল তথ্য শেয়ার করা।',
      campusdevDeliverable: 'ডিটেইলড ফিচার ফ্রেমওয়ার্ক ও প্রজেক্ট রোডম্যাপ ডকুমেন্টেশন।',
      desc: 'আপনার স্কুল, কলেজ বা মাদ্রাসার বর্তমান অবস্থা, শিক্ষার্থী সংখ্যা, লক্ষ্য ও প্রয়োজনীয় মডিউলগুলো পুঙ্খানুপুঙ্খভাবে আলোচনা করে চূড়ান্ত পরিকল্পনা তৈরি করা হয়।'
    },
    {
      step: '০২',
      titleBn: 'প্রস্তাবনা ও কৌশল নির্ধারণ (Proposal & Strategy)',
      titleEn: 'Proposal & Strategic Architecture',
      duration: '১ দিন',
      institutionRole: 'প্রস্তাবিত প্যাকেজ ও স্পেসিফিকেশন অনুমোদন করা।',
      campusdevDeliverable: 'স্বচ্ছ বাজেট কোটেশন, ডেলিভারি ডেটলাইন ও সার্ভিস লেভেল এগ্রিমেন্ট (SLA)।',
      desc: 'কোনো লুকানো খরচ ছাড়া সুস্পষ্ট কার্যপরিধি, সময়সীমা এবং বাজেট চূড়ান্ত করে অফিশিয়াল সমঝোতা স্বাক্ষর করা হয়।'
    },
    {
      step: '০৩',
      titleBn: 'ইউআই ও ব্র্যান্ডিং প্রিভিউ (UI/UX Design Preview)',
      titleEn: 'UI/UX Design & Branding Prototype',
      duration: '২-৩ দিন',
      institutionRole: 'ডিজাইন প্রিভিউ দেখে প্রয়োজনীয় কালার বা বিন্যাস সংক্রান্ত ফিডব্যাক দেওয়া।',
      campusdevDeliverable: 'মোবাইল ও পিসির জন্য লাইভ প্রিভিউ লিংক (মকআপ)।',
      desc: 'প্রতিষ্ঠানের মনোগ্রাম ও রঙের সাথে সামঞ্জস্য রেখে আধুনিক ও মোবাইল-ফার্স্ট হোমপেজ ও ড্যাশবোর্ডের নকশা তৈরি করে অনুমোদন নেওয়া হয়।'
    },
    {
      step: '০৪',
      titleBn: 'সফটওয়্যার ডেভেলপমেন্ট ও ডাটাবেজ (Core Development)',
      titleEn: 'Clean Full-Stack Development',
      duration: '৩-৫ দিন',
      institutionRole: 'কোনো কাজ নেই — নিশ্চিন্তে থাকুন।',
      campusdevDeliverable: 'সম্পূর্ণ রেসপন্সিভ ওয়েবসাইট, ডায়নামিক নোটিশ বোর্ড, রেজাল্ট পোর্টাল ও বাংলা অ্যাডমিন।',
      desc: 'ক্লিন আধুনিক কোড, লাইটনিং-ফাস্ট ক্যাশিং ও ব্যাংক-গ্রেড সিকিউরিটি সহকারে প্রতিটি ফিচার ও ব্যাকএন্ড প্রস্তুত করা হয়।'
    },
    {
      step: '০৫',
      titleBn: 'যৌথ পর্যালোচনা ও টেস্টিং (Review & Quality Testing)',
      titleEn: 'Quality Assurance & Staging Review',
      duration: '১-২ দিন',
      institutionRole: 'প্রতিষ্ঠানের টিম স্ট্যাজিং সাইটে টেস্ট নোটিশ পোস্ট ও ভেরিফাই করবেন।',
      campusdevDeliverable: 'স্পিড অপ্টিমাইজেশন টেস্ট রিপোর্ট (৯৯+ স্কোর) ও সিকিউরিটি অডিট।',
      desc: 'সকল স্মার্টফোন ও কম্পিউটারে সাইটটি পরীক্ষা করা হয়। নোটিশ প্রকাশ ও রেজাল্ট আপলোড প্রক্রিয়া নির্ভুল হওয়া নিশ্চিত করা হয়।'
    },
    {
      step: '০৬',
      titleBn: 'শুভ উদ্বোধন ও স্টাফ ট্রেনিং (Launch & Training)',
      titleEn: 'Official Launch & Staff Video Training',
      duration: '১ দিন',
      institutionRole: 'ওয়েবসাইট সকলের জন্য উন্মুক্ত ঘোষণা ও ব্যবহার শুরু।',
      campusdevDeliverable: 'লাইভ ডোমেইন সংযোগ, বাংলা ভিডিও টিউটোরিয়াল ও ২৪/৭ ডেডিকেটেড সাপোর্ট লাইন।',
      desc: 'প্রতিষ্ঠানের নিজস্ব ডোমেইনে ওয়েবসাইটটি আনুষ্ঠানিকভাবে লাইভ করা হয় এবং শিক্ষকদের সহজে পরিচালনার জন্য ভিডিও ট্রেনিং দেওয়া হয়।'
    }
  ];

  const current = stepDetails[activeStepIndex];

  return (
    <div className="premium-process py-12 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'স্বচ্ছ ও সুশৃঙ্খল প্রক্রিয়া' : 'Structured Workflow'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'চুক্তির দিন থেকে উদ্বোধন পর্যন্ত আমাদের কাজের ৬টি ধাপ' 
              : 'Our 6-Step Precision Implementation Methodology'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            {language === 'bn'
              ? 'কোনো অস্পষ্টতা বা কাজের বিলম্ব ছাড়া প্রতিটি পর্যায়ে আপনার প্রতিষ্ঠানের সম্পূর্ণ নিয়ন্ত্রণ ও সন্তুষ্টি।'
              : 'Zero guesswork. A disciplined, milestone-driven development process engineered for education administrators.'}
          </p>
        </div>

        {/* Interactive Steps Horizontal Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-12">
          {stepDetails.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'premium-process-step-active text-white border-fuchsia-400 shadow-lg -translate-y-1'
                    : 'premium-surface hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-extrabold font-heading ${isActive ? 'text-violet-300' : 'text-fuchsia-400'}`}>
                    {item.step}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-slate-800 text-slate-300' : 'bg-white text-slate-600'
                  }`}>
                    Step {idx + 1}
                  </span>
                </div>
                <p className="text-xs font-bold leading-snug line-clamp-2">
                  {language === 'bn' ? WORKFLOW_STEPS[idx].titleBn : WORKFLOW_STEPS[idx].titleEn}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Card */}
        <div className="premium-surface p-6 sm:p-10 rounded-3xl border shadow-sm mb-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-7/12 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-heading text-fuchsia-400">
                  ধাপ {current.step}
                </span>
                <span className="px-3 py-1 rounded-full bg-fuchsia-950/30 text-fuchsia-400 text-xs font-bold">
                  সময়কাল: {current.duration}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1C30]">
                {language === 'bn' ? current.titleBn : current.titleEn}
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed">
                {current.desc}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="premium-primary px-6 py-3 rounded-xl text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {language === 'bn' ? 'আজই এই ধাপ দিয়ে শুরু করুন' : 'Start Discovery Phase Today'}
                </button>
                {activeStepIndex < 5 && (
                  <button
                    onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 hover:underline cursor-pointer"
                  >
                    <span>পরবর্তী ধাপ দেখুন ({stepDetails[activeStepIndex + 1].step})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Step Handover Roles Card */}
            <div className="lg:w-5/12 w-full flex flex-col gap-4">
              <div className="premium-surface p-5 rounded-2xl border shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 block mb-1">
                  🎓 প্রতিষ্ঠানের ভূমিকা:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {current.institutionRole}
                </p>
              </div>

              <div className="premium-surface p-5 rounded-2xl border shadow-2xs">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  ⚡ CampusDev ডেলিভারেবল:
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {current.campusdevDeliverable}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Guarantee Box */}
        <div className="premium-process-cta p-8 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading">
              {language === 'bn' ? 'সময়মতো ডেলিভারির শতভাগ নিশ্চয়তা' : 'On-Time Launch Guarantee'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              {language === 'bn'
                ? 'চুক্তিবদ্ধ নির্ধারিত কার্যদিবসের মধ্যে আপনার ওয়েবসাইট লাইভ করা হবে। বিলম্ব হলে বিশেষ ক্ষতিপূরণ সুবিধা প্রদান করা হয়।'
                : 'Rigorous project governance ensures every milestone is delivered on schedule without compromises.'}
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="premium-primary px-6 py-3 rounded-xl text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-md cursor-pointer transition-colors"
          >
            {language === 'bn' ? 'ফ্রি প্ল্যানিং কনসালটেশন নিন' : 'Book Free Strategy Call'}
          </button>
        </div>
      </div>
    </div>
  );
};
