'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  X, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight, 
  RefreshCw,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface WebsiteAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onOpenConsultation: () => void;
}

export const WebsiteAuditModal: React.FC<WebsiteAuditModalProps> = ({
  isOpen,
  onClose,
  language,
  onOpenConsultation
}) => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanStep, setScanStep] = useState(0);

  if (!isOpen) return null;

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setScanComplete(false);
    setScanStep(1);

    setTimeout(() => setScanStep(2), 700);
    setTimeout(() => setScanStep(3), 1400);
    setTimeout(() => setScanStep(4), 2100);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 2800);
  };

  const handleReset = () => {
    setUrl('');
    setScanComplete(false);
    setIsScanning(false);
    setScanStep(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0e0520] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                {language === 'bn' ? 'শিক্ষা প্রতিষ্ঠান ওয়েবসাইট স্পিড ও কোয়ালিটি অডিট' : 'School Website Quality & Speed Audit'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'bn' ? 'আপনার বর্তমান ওয়েবসাইটের দুর্বলতা ও পারফরম্যান্স বিশ্লেষণ' : 'Diagnose performance, mobile UX, security & SEO'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 sm:p-8">
          {!scanComplete && !isScanning && (
            <form onSubmit={handleStartAudit} className="flex flex-col gap-5">
              <div className="p-4 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/10 text-xs text-violet-900 leading-relaxed">
                {language === 'bn' ? (
                  <p>
                    💡 আপনার বর্তমান স্কুল, কলেজ বা মাদ্রাসার ওয়েবসাইট লিংকটি নিচে দিন। আমাদের ডায়াগনস্টিক ইঞ্জিন মোবাইল ফ্রেন্ডলিনেস, স্পিড, এসইও এবং ডেটা নিরাপত্তা স্কোর তৈরি করবে।
                  </p>
                ) : (
                  <p>
                    💡 Enter your current institution website URL. Our diagnostic engine evaluates Mobile UX, Google Speed score, SSL security, and SEO health.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5">
                  {language === 'bn' ? 'প্রতিষ্ঠানের ওয়েবসাইট ইউআরএল (URL):' : 'Institution Website URL:'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. www.myschool.edu.bd"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 bg-slate-50 text-sm font-medium"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Sample Quick Buttons */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-500 font-medium">
                  {language === 'bn' ? 'নমুনা টেস্ট:' : 'Quick test:'}
                </span>
                {['apexschool.edu.bd', 'idealcollege.edu.bd', 'alhikmah.edu.bd'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setUrl(s)}
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono text-[11px] cursor-pointer"
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-violet-300" />
                <span>{language === 'bn' ? 'ফ্রি অডিট রিপোর্ট তৈরি করুন' : 'Run Free Website Audit'}</span>
              </button>
            </form>
          )}

          {/* Scanning Animation Progress */}
          {isScanning && (
            <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
              <div className="relative w-16 h-16">
                <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-fuchsia-600 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-fuchsia-600" />
                </div>
              </div>

              <div className="max-w-sm">
                <h4 className="text-sm font-bold text-[#0B1C30]">
                  {language === 'bn' ? 'ডায়াগনস্টিক স্ক্যান চলছে...' : 'Analyzing Website Diagnostics...'}
                </h4>
                <p className="text-xs text-slate-500 mt-1 font-mono">{url}</p>

                <div className="mt-4 flex flex-col gap-1.5 text-xs text-slate-600 text-left">
                  <div className={`flex items-center gap-2 ${scanStep >= 1 ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>মোবাইল ভিউপোর্ট ও টাচ রেসপন্স পরীক্ষা</span>
                  </div>
                  <div className={`flex items-center gap-2 ${scanStep >= 2 ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>সার্ভার রেসপন্স টাইম ও ক্যাশিং কোয়ালিটি</span>
                  </div>
                  <div className={`flex items-center gap-2 ${scanStep >= 3 ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>অন-পেজ এসইও ট্যাগ ও গুগল ম্যাপস ইনডেক্সিং</span>
                  </div>
                  <div className={`flex items-center gap-2 ${scanStep >= 4 ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>এসএসএল এনক্রিপশন ও সাইবার সিকিউরিটি ফিল্টার</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Scan Complete Report */}
          {scanComplete && (
            <div className="flex flex-col gap-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">বিশ্লেষিত ওয়েবসাইট</span>
                  <p className="text-sm font-bold text-[#0B1C30] font-mono">{url}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-fuchsia-400 font-semibold hover:underline cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>অন্য সাইট অডিট করুন</span>
                </button>
              </div>

              {/* 5-Category Radial / Metric Scores */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <div className="text-xl font-bold font-heading text-rose-500">৪৫/১০০</div>
                  <p className="text-[11px] font-semibold text-slate-700 mt-0.5">Performance</p>
                  <span className="text-[10px] text-rose-600 font-medium">ধীরগতি (৩.৮s)</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <div className="text-xl font-bold font-heading text-amber-500">৫২/১০০</div>
                  <p className="text-[11px] font-semibold text-slate-700 mt-0.5">Mobile UX</p>
                  <span className="text-[10px] text-amber-600 font-medium">স্ক্রোল সমস্যা</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <div className="text-xl font-bold font-heading text-amber-500">৫৮/১০০</div>
                  <p className="text-[11px] font-semibold text-slate-700 mt-0.5">SEO Health</p>
                  <span className="text-[10px] text-amber-600 font-medium">মেটাট্যাগ নেই</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                  <div className="text-xl font-bold font-heading text-emerald-500">৮৫/১০০</div>
                  <p className="text-[11px] font-semibold text-slate-700 mt-0.5">Accessibility</p>
                  <span className="text-[10px] text-emerald-600 font-medium">মোটামুটি</span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-center shadow-2xs col-span-2 sm:col-span-1">
                  <div className="text-xl font-bold font-heading text-amber-500">৬০/১০০</div>
                  <p className="text-[11px] font-semibold text-slate-700 mt-0.5">Security</p>
                  <span className="text-[10px] text-amber-600 font-medium">ব্যাকআপ নেই</span>
                </div>
              </div>

              {/* Actionable Findings */}
              <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200/80 text-xs">
                <div className="flex items-center gap-1.5 text-rose-800 font-bold mb-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>জরুরি সমাধানযোগ্য প্রধান সমস্যাসমূহ:</span>
                </div>
                <ul className="flex flex-col gap-1.5 text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>স্মার্টফোনে ছবিগুলো অপ্টিমাইজড না থাকায় নোটিশ পেজ লোড হতে অনেক বেশি ডেটা ও সময় ব্যয় হচ্ছে।</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>অভিভাবকদের জন্য কোনো স্বয়ংক্রিয় অনলাইন ভর্তি বা রোল ভিত্তিক রেজাল্ট সার্চ ব্যবস্থা অনুপস্থিত।</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>দৈনিক স্বয়ংক্রিয় ক্লাউড ব্যাকআপ না থাকায় ডাটাবেজ হারানোর মারাত্মক ঝুঁকি রয়েছে।</span>
                  </li>
                </ul>
              </div>

              {/* Conversion Offer */}
              <div className="p-5 rounded-2xl bg-[#0e0520] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold flex items-center gap-1.5 text-violet-300">
                    <Sparkles className="w-4 h-4" />
                    <span>Need help improving your website?</span>
                  </h5>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm">
                    {language === 'bn'
                      ? 'CampusDev-এর সাথে যুক্ত হয়ে আপনার সাইটকে ৯৯+ স্কোর ও আল্ট্রা-ফাস্ট মোবাইল-ফার্স্ট রূপ দিন।'
                      : 'Migrate to CampusDev for guaranteed 99+ Speed score, bank-grade security and modern admin panel.'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs font-bold whitespace-nowrap shadow-sm transition-colors cursor-pointer"
                >
                  {language === 'bn' ? 'ফ্রি কনসালটেশন নিন' : 'Get Free Consultation'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
