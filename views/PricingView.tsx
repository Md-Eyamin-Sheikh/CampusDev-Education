'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { PRICING_DATA, MAINTENANCE_DATA } from '../data/content';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Calculator, 
  HelpCircle,
  Clock,
  Zap,
  PhoneCall
} from 'lucide-react';

interface PricingViewProps {
  language: Language;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  language,
  onOpenConsultation,
  onOpenEstimator
}) => {
  const [activeBillingTab, setActiveBillingTab] = useState<'build' | 'care'>('build');

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'স্বচ্ছ ও সাশ্রয়ী ইনভেস্টমেন্ট' : 'Transparent Investment'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'শিক্ষা প্রতিষ্ঠানের বাজেট অনুযায়ী সুস্পষ্ট প্যাকেজ' 
              : 'Predictable Pricing Tailored to Institutional Budgets'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {language === 'bn'
              ? 'কোনো গোপন বা অপ্রত্যাশিত চার্জ নেই। ওয়েবসাইট তৈরি থেকে শুরু করে দীর্ঘমেয়াদী কেয়ার প্ল্যান।'
              : 'Zero hidden surprises. Turnkey deployment packages and reliable ongoing maintenance plans.'}
          </p>

          {/* Toggle between Website Build vs Monthly Care Plans */}
          <div className="inline-flex p-1.5 bg-white border border-slate-200 rounded-2xl shadow-xs mt-8">
            <button
              onClick={() => setActiveBillingTab('build')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeBillingTab === 'build'
                  ? 'bg-[#0e0520] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'bn' ? 'ওয়েবসাইট নির্মাণ প্যাকেজ (এককালীন)' : 'Website Build Packages (One-Time)'}
            </button>
            <button
              onClick={() => setActiveBillingTab('care')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeBillingTab === 'care'
                  ? 'bg-[#0e0520] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'bn' ? 'বার্ষিক রক্ষণাবেক্ষণ ও কেয়ার প্ল্যান' : 'Maintenance & Care Plans'}
            </button>
          </div>
        </div>

        {/* 1. WEBSITE BUILD PACKAGES */}
        {activeBillingTab === 'build' ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
              {PRICING_DATA.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all ${
                    plan.popular
                      ? 'bg-[#0e0520] text-white shadow-2xl relative border-2 border-fuchsia-400 -translate-y-2'
                      : 'bg-white text-slate-800 border border-slate-200 shadow-sm'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-fuchsia-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {language === 'bn' ? 'সর্বাধিক জনপ্রিয়' : 'Most Popular'}
                    </span>
                  )}

                  <div>
                    <h3 className={`text-xl font-bold font-heading ${plan.popular ? 'text-white' : 'text-[#0B1C30]'}`}>
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
                        {language === 'bn' ? '/এককালীন বিনিয়োগ' : '/one-time'}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl mb-6 bg-slate-500/10 border border-slate-200/20 text-xs">
                      <p className={`font-semibold ${plan.popular ? 'text-slate-300' : 'text-slate-700'}`}>
                        ⏱️ ডেলিভারি সময়: <b>{language === 'bn' ? plan.deliveryTimeBn : plan.deliveryTimeEn}</b>
                      </p>
                      <p className={`text-[11px] mt-0.5 ${plan.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                        সাপোর্ট: {language === 'bn' ? plan.supportDurationBn : plan.supportDurationEn}
                      </p>
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
                    <button
                      onClick={onOpenConsultation}
                      className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        plan.popular
                          ? 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-md'
                          : 'bg-[#0e0520] hover:bg-[#14213d] text-white'
                      }`}
                    >
                      {language === 'bn' ? plan.ctaTextBn : plan.ctaTextEn}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Plan Callout */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="px-2.5 py-1 rounded-md bg-fuchsia-950/20 text-fuchsia-400 text-xs font-bold uppercase">
                  কাস্টম ও মাল্টি-ক্যাম্পাস
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#0B1C30] mt-2">
                  {language === 'bn' ? 'এন্টারপ্রাইজ বা বিশেষ শিক্ষা ট্রাস্টের ওয়েবসাইট?' : 'Custom Architecture & Trust Portals'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  {language === 'bn'
                    ? 'একাধিক ক্যাম্পাস, অনলাইন ফি কালেকশন, এসএমএস ব্রডকাস্ট বা বিশেষ ডাটাবেজ ইন্টিগ্রেশনের জন্য আমরা কাস্টম সমাধান প্রদান করি।'
                    : 'Tailored for multi-branch cadet chains, universities, and customized institutional workflows.'}
                </p>
              </div>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-300" />
                <span>{language === 'bn' ? 'কাস্টম এস্টিমেটর খুলুন' : 'Open Custom Estimator'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* 2. MAINTENANCE & CARE PLANS */
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-xs text-slate-600">
                {language === 'bn'
                  ? 'ওয়েবসাইট তৈরির পর নিশ্চিন্ত থাকতে আমাদের সার্বক্ষণিক টেকনিক্যাল সাপোর্ট, সিকিউরিটি ও কন্টেন্ট আপডেট কেয়ার প্ল্যান।'
                  : 'Ensure zero downtime, automated security patches, and instant content updates with our dedicated engineers.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
              {MAINTENANCE_DATA.map((care) => (
                <div
                  key={care.id}
                  className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between ${
                    care.popular ? 'border-2 border-fuchsia-400 shadow-xl' : ''
                  }`}
                >
                  <div>
                    {care.popular && (
                      <span className="inline-block px-3 py-1 rounded-full bg-fuchsia-950/20 text-fuchsia-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                        সবচেয়ে জনপ্রিয় কেয়ার
                      </span>
                    )}
                    <h3 className="text-xl font-bold font-heading text-[#0B1C30]">
                      {language === 'bn' ? care.nameBn : care.nameEn}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {language === 'bn' ? care.descBn : care.descEn}
                    </p>

                    <div className="my-6">
                      <span className="text-3xl font-extrabold font-heading text-fuchsia-400">
                        {language === 'bn' ? care.priceBn : care.priceEn}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5 text-xs text-slate-700 mb-8">
                      {(language === 'bn' ? care.featuresBn : care.featuresEn).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-3 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    {language === 'bn' ? 'কেয়ার প্ল্যান নির্বাচন করুন' : 'Select Care Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
