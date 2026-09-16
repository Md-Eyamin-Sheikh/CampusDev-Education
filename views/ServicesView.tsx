'use client';
import React from 'react';
import { Language, NavSection } from '../types';
import { SERVICES_DATA } from '../data/content';
import { 
  School, 
  Building2, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Sparkles,
  Zap,
  Lock,
  Headphones
} from 'lucide-react';

interface ServicesViewProps {
  language: Language;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  language,
  onOpenConsultation,
  onOpenEstimator
}) => {
  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'আমাদের বিশেষায়িত সেবা' : 'Tailored Services'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'শিক্ষা প্রতিষ্ঠানের প্রতিটি স্তরের জন্য পূর্ণাঙ্গ ডিজিটাল সল্যুশন' 
              : 'Complete Digital Web Solutions for Educational Institutions'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            {language === 'bn'
              ? 'স্কুল, কলেজ, মাদ্রাসা ও কোচিং ইনস্টিটিউটের স্বতন্ত্র চাহিদা অনুযায়ী বিশেষভাবে কোড করা প্রিমিয়াম ওয়েবসাইট।'
              : 'Purpose-built web platforms tailored specifically to institutional workflows, board guidelines, and parental engagement.'}
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="flex flex-col gap-12">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={srv.id}
              className={`p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-8 items-start ${
                idx % 2 === 1 ? 'bg-slate-50' : 'bg-white'
              }`}
            >
              {/* Left Column */}
              <div className="lg:w-5/12 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0e0520] text-violet-300 flex items-center justify-center shadow-md">
                  {srv.category === 'school' && <School className="w-7 h-7" />}
                  {srv.category === 'college' && <Building2 className="w-7 h-7" />}
                  {srv.category === 'madrasa' && <BookOpen className="w-7 h-7" />}
                  {srv.category === 'custom' && <Layers className="w-7 h-7" />}
                  {srv.category === 'maintenance' && <ShieldCheck className="w-7 h-7" />}
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                    {language === 'bn' ? srv.taglineBn : srv.taglineEn}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1C30] mt-1">
                    {language === 'bn' ? srv.titleBn : srv.titleEn}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'bn' ? srv.descriptionBn : srv.descriptionEn}
                </p>

                <div className="p-3.5 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/10 text-xs">
                  <span className="font-bold text-fuchsia-400">কাদের জন্য উপযুক্ত: </span>
                  <span className="text-slate-700">{language === 'bn' ? srv.recommendedForBn : srv.recommendedForEn}</span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold cursor-pointer transition-colors"
                  >
                    {language === 'bn' ? 'ফ্রি প্ল্যানিং মিটিং বুক করুন' : 'Book Planning Meeting'}
                  </button>
                  <button
                    onClick={onOpenEstimator}
                    className="px-4 py-2.5 rounded-xl bg-slate-200/70 hover:bg-slate-300 text-slate-800 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    {language === 'bn' ? 'খরচ হিসাব করুন' : 'Estimate Cost'}
                  </button>
                </div>
              </div>

              {/* Right Column: Features Grid */}
              <div className="lg:w-7/12 w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  {language === 'bn' ? 'প্রধান প্রধান মডিউল ও সুবিধাসমূহ' : 'Core Modules & Features Included'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(language === 'bn' ? srv.featuresBn : srv.featuresEn).map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-2.5 shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
