'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  X, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  School, 
  Building2, 
  BookOpen, 
  Layers, 
  Sparkles,
  Phone,
  MessageCircle,
  Calculator
} from 'lucide-react';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [step, setStep] = useState(1);
  const [institutionType, setInstitutionType] = useState<'school' | 'college' | 'madrasa' | 'coaching'>('school');
  const [websiteType, setWebsiteType] = useState<'basic' | 'professional' | 'full'>('professional');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'notice', 'admission', 'result', 'gallery', 'teachers', 'admin'
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  // Dynamic price calculation
  const basePrices = {
    basic: 18500,
    professional: 28500,
    full: 45000
  };

  const daysEstimate = {
    basic: '৫ কার্যদিবস',
    professional: '৭ কার্যদিবস',
    full: '১০ কার্যদিবস'
  };

  const calculatedPrice = basePrices[websiteType];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const summary = `*New Project Inquiry from CampusDev Estimator*%0A` +
      `*Institution:* ${institutionName || 'Not specified'} (${institutionType})%0A` +
      `*Website Type:* ${websiteType}%0A` +
      `*Estimated Cost:* ৳${calculatedPrice.toLocaleString()}%0A` +
      `*Features:* ${selectedFeatures.join(', ')}%0A` +
      `*Contact Person:* ${name}%0A` +
      `*Phone/WhatsApp:* ${phone || whatsapp}`;
    
    window.open(`https://wa.me/8801700000000?text=${summary}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0e0520] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                {language === 'bn' ? 'স্টার্ট ইউর প্রজেক্ট — বাজেট ও প্ল্যান এস্টিমেটর' : 'Start Your Project — Instant Estimator'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'bn' ? '৪টি সহজ ধাপে আপনার কাঙ্ক্ষিত ওয়েবসাইটের খরচ ও সময় দেখুন' : 'Custom project scope & cost calculator'}
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

        {/* Step Progress Indicators */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${
                  step === s 
                    ? 'bg-[#0e0520] text-white' 
                    : step > s 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-slate-200 text-slate-500'
                }`}>
                  {step > s ? '✓' : s}
                </span>
                <span className={`hidden sm:inline font-semibold ${step === s ? 'text-[#0B1C30]' : 'text-slate-400'}`}>
                  {s === 1 ? 'প্রতিষ্ঠান' : s === 2 ? 'ধরন' : s === 3 ? 'ফিচারস' : 'যোগাযোগ'}
                </span>
                {s < 4 && <span className="text-slate-300 mx-1">→</span>}
              </div>
            ))}
          </div>

          <div className="text-right font-bold text-fuchsia-400 font-mono">
            ৳{calculatedPrice.toLocaleString()}
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <div>
              {/* STEP 1: INSTITUTION TYPE */}
              {step === 1 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1C30]">
                      ধাপ ১: আপনার প্রতিষ্ঠানের ধরন নির্বাচন করুন
                    </h4>
                    <p className="text-xs text-slate-500">
                      কোন ধরনের শিক্ষা প্রতিষ্ঠানের জন্য ওয়েবসাইট তৈরি করতে চাচ্ছেন?
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { id: 'school', title: 'স্কুল / হাই স্কুল', desc: 'মডেল স্কুল, কিন্ডারগার্টেন ও মাধ্যমিক', icon: <School className="w-5 h-5 text-fuchsia-400" /> },
                      { id: 'college', title: 'কলেজ / মহাবিদ্যালয়', desc: 'উচ্চ মাধ্যমিক, ডিগ্রি ও অনার্স কলেজ', icon: <Building2 className="w-5 h-5 text-fuchsia-400" /> },
                      { id: 'madrasa', title: 'মাদ্রাসা ও ইসলামিক কমপ্লেক্স', desc: 'কওমি, আলিয়া, হিফজ ও কামিল মাদ্রাসা', icon: <BookOpen className="w-5 h-5 text-fuchsia-400" /> },
                      { id: 'coaching', title: 'কোচিং / অন্যান্য একাডেমি', desc: 'এডমিশন কোচিং, একাডেমি ও ট্রেনিং ইনস্টিটিউট', icon: <Layers className="w-5 h-5 text-fuchsia-400" /> },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setInstitutionType(item.id as any)}
                        className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-2 ${
                          institutionType === item.id
                            ? 'border-fuchsia-600 bg-fuchsia-950/20 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0B1C30]">{item.title}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      প্রতিষ্ঠানের নাম (যদি চূড়ান্ত থাকে):
                    </label>
                    <input
                      type="text"
                      placeholder="উদা: আইডিয়াল মডেল হাই স্কুল..."
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0e0520] text-white text-xs font-bold hover:bg-[#14213d] cursor-pointer"
                    >
                      <span>পরবর্তী ধাপ</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: WEBSITE TYPE */}
              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1C30]">
                      ধাপ ২: ওয়েবসাইটের পরিধি ও প্যাকেজ নির্বাচন করুন
                    </h4>
                    <p className="text-xs text-slate-500">
                      আপনার প্রতিষ্ঠানের চাহিদা অনুযায়ী সঠিক স্কেল বেছে নিন।
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {[
                      { id: 'basic', title: 'স্টার্টার প্যাকেজ', price: '৳১৮,৫০০', time: '৫ কার্যদিবস', desc: 'ছোট স্কুল, কিন্ডারগার্টেন ও প্রাথমিক ওয়েবসাইটের জন্য।' },
                      { id: 'professional', title: 'প্রফেশনাল পোর্টাল', price: '৳২৮,৫০০', time: '৭ কার্যদিবস', desc: 'অনলাইন ভর্তি ও এক্সেল রেজাল্ট সিস্টেমসহ সর্বাধিক জনপ্রিয়।' },
                      { id: 'full', title: 'প্রিমিয়াম এন্টারপ্রাইজ', price: '৳৪৫,০০০', time: '১০-১২ কার্যদিবস', desc: 'মাল্টি-ক্যাম্পাস, অনলাইন ফি ও বাল্ক এসএমএস গেটওয়েসহ।' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setWebsiteType(p.id as any)}
                        className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                          websiteType === p.id
                            ? 'border-fuchsia-600 bg-fuchsia-950/20 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-[#0B1C30]">{p.title}</p>
                          <p className="text-sm font-bold text-fuchsia-400 font-mono mt-1">{p.price}</p>
                          <p className="text-[11px] text-slate-500 mt-2">{p.desc}</p>
                        </div>
                        <div className="pt-3 border-t border-slate-200/60 mt-3">
                          <span className="text-[10px] text-slate-400 font-medium">ডেলিভারি: {p.time}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>পূর্ববর্তী</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0e0520] text-white text-xs font-bold hover:bg-[#14213d] cursor-pointer"
                    >
                      <span>পরবর্তী ধাপ</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: FEATURES SELECTION */}
              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1C30]">
                      ধাপ ৩: প্রয়োজনীয় ফিচারসমূহ নির্বাচন করুন
                    </h4>
                    <p className="text-xs text-slate-500">
                      আপনার ওয়েবসাইটে যে যে মডিউলগুলো রাখতে চান সেগুলোতে টিক দিন।
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                    {[
                      { id: 'notice', label: 'ডায়নামিক নোটিশ বোর্ড' },
                      { id: 'admission', label: 'অনলাইন ভর্তি ফরম' },
                      { id: 'result', label: 'টার্মিনাল রেজাল্ট পোর্টাল' },
                      { id: 'gallery', label: 'স্মার্ট ফটো গ্যালারি' },
                      { id: 'teachers', label: 'শিক্ষক ও স্টাফ প্রোফাইল' },
                      { id: 'admin', label: 'সহজ বাংলা অ্যাডমিন প্যানেল' },
                      { id: 'routine', label: 'ক্লাস রুটিন ও সিলেবাস' },
                      { id: 'bilingual', label: 'দ্বিভাষিক (বাংলা + ইংরেজি)' },
                      { id: 'sms', label: 'এসএমএস অ্যালার্ট গেটওয়ে' },
                    ].map((feat) => {
                      const isChecked = selectedFeatures.includes(feat.id);
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => toggleFeature(feat.id)}
                          className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                            isChecked
                              ? 'border-fuchsia-600 bg-fuchsia-950/20 text-[#0B1C30]'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <span>{feat.label}</span>
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                            isChecked ? 'bg-fuchsia-600 text-white' : 'border border-slate-300'
                          }`}>
                            {isChecked && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>পূর্ববর্তী</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0e0520] text-white text-xs font-bold hover:bg-[#14213d] cursor-pointer"
                    >
                      <span>পরবর্তী ধাপ</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT & ESTIMATE */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1C30]">
                      ধাপ ৪: যোগাযোগের বিবরণ প্রদান করুন
                    </h4>
                    <p className="text-xs text-slate-500">
                      আপনার প্রজেক্টের সামারি সংরক্ষণ করতে নিচের তথ্যগুলো দিন।
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400">আনুমানিক প্রজেক্ট বাজেট:</p>
                      <p className="text-xl font-bold font-heading text-fuchsia-400">
                        ৳{calculatedPrice.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-slate-400">ডেলিভারি সময়কাল:</p>
                      <p className="text-xs font-bold text-slate-800">
                        {daysEstimate[websiteType]}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">
                        আপনার নাম ও পদবী *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="উদা: ড. মো: রফিকুল ইসলাম (অধ্যক্ষ)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-slate-700 block mb-1">
                        মোবাইল নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="017XXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">
                      হোয়াটসঅ্যাপ নম্বর (যদি আলাদা হয়):
                    </label>
                    <input
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>পূর্ববর্তী</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-fuchsia-600 text-white text-xs font-bold hover:bg-fuchsia-500 shadow-sm cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>এস্টিমেট সাবমিট করুন</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* SUBMISSION CONFIRMATION */
            <div className="py-6 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0B1C30]">
                  ধন্যবাদ, {name || 'শ্রদ্ধেয় গ্রাহক'}!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mt-1">
                  আপনার প্রতিষ্ঠানের আনুমানিক কোটেশন <b>৳{calculatedPrice.toLocaleString()}</b> প্রস্তুত করা হয়েছে। আমাদের সিনিয়র এডুকেশন কনসালটেন্ট দ্রুততম সময়ে আপনার সাথে যোগাযোগ করবেন।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left w-full max-w-sm">
                <p className="font-semibold text-slate-700 mb-1">প্রজেক্ট সামারি:</p>
                <p className="text-slate-600">• প্রতিষ্ঠান: {institutionName || institutionType}</p>
                <p className="text-slate-600">• প্যাকেজ: {websiteType} (৳{calculatedPrice.toLocaleString()})</p>
                <p className="text-slate-600">• সম্ভাব্য সময়: {daysEstimate[websiteType]}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-sm pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>হোয়াটসঅ্যাপে সরাসরি পাঠান</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
