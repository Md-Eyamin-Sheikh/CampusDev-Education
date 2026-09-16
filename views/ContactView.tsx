'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  School,
  Building2,
  BookOpen,
  Layers,
  Calculator
} from 'lucide-react';

interface ContactViewProps {
  language: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ language }) => {
  const [step, setStep] = useState(1);
  const [institutionType, setInstitutionType] = useState('school');
  const [websiteType, setWebsiteType] = useState('professional');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'notice', 'admission', 'result', 'gallery', 'teachers', 'admin'
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const basePrices: Record<string, number> = {
    basic: 18500,
    professional: 28500,
    full: 45000
  };

  const calculatedPrice = basePrices[websiteType] || 28500;

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const summary = `*New Project Inquiry from CampusDev Contact Page*%0A` +
      `*Institution:* ${institutionName || 'Not specified'} (${institutionType})%0A` +
      `*Website Type:* ${websiteType}%0A` +
      `*Estimated Cost:* ৳${calculatedPrice.toLocaleString()}%0A` +
      `*Features:* ${selectedFeatures.join(', ')}%0A` +
      `*Contact Person:* ${name}%0A` +
      `*Phone/WhatsApp:* ${phone || whatsapp}`;
    
    window.open(`https://wa.me/8801700000000?text=${summary}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/30 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'প্রজেক্ট আলোচনা ও যোগাযোগ' : 'Start Your Project'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'আপনার প্রতিষ্ঠানের চাহিদা অনুযায়ী সঠিক এস্টিমেট নিন' 
              : 'Configure Your Scope & Connect With Our Team'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {language === 'bn'
              ? 'নিচের ইন্টারেক্টিভ ফর্মটি পূরণ করে তাৎক্ষণিক প্রজেক্ট সামারি নিন অথবা সরাসরি যোগাযোগ করুন।'
              : 'Calculate project investment in 4 steps or reach our education consultants directly.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Column: 4-Step Interactive Estimator */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            {/* Step Progress */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      step === s 
                        ? 'bg-[#0e0520] text-white' 
                        : step > s 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-slate-100 text-slate-400'
                    }`}>
                      {step > s ? '✓' : s}
                    </span>
                    <span className={`hidden sm:inline text-xs font-semibold ${step === s ? 'text-[#0B1C30]' : 'text-slate-400'}`}>
                      {s === 1 ? 'প্রতিষ্ঠান' : s === 2 ? 'প্যাকেজ' : s === 3 ? 'ফিচারস' : 'যোগাযোগ'}
                    </span>
                    {s < 4 && <span className="text-slate-300 mx-1">→</span>}
                  </div>
                ))}
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 block font-medium">আনুমানিক বাজেট:</span>
                <span className="text-base sm:text-lg font-extrabold font-heading text-fuchsia-400 font-mono">
                  ৳{calculatedPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {!submitted ? (
              <div>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-base font-bold text-[#0B1C30]">
                        ধাপ ১ — প্রতিষ্ঠানের ধরন নির্বাচন করুন
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        কোন ধরনের শিক্ষা প্রতিষ্ঠানের জন্য ওয়েবসাইট তৈরি করতে চাচ্ছেন?
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'school', title: 'স্কুল / হাই স্কুল', desc: 'মডেল স্কুল ও একাডেমি', icon: <School className="w-5 h-5 text-fuchsia-400" /> },
                        { id: 'college', title: 'কলেজ / মহাবিদ্যালয়', desc: 'ডিগ্রি ও অনার্স কলেজ', icon: <Building2 className="w-5 h-5 text-fuchsia-400" /> },
                        { id: 'madrasa', title: 'মাদ্রাসা ও ইসলামিক কমপ্লেক্স', desc: 'হিফজ ও কামিল মাদ্রাসা', icon: <BookOpen className="w-5 h-5 text-fuchsia-400" /> },
                        { id: 'coaching', title: 'কোচিং / অন্যান্য একাডেমি', desc: 'ভর্তি কোচিং ও ইনস্টিটিউট', icon: <Layers className="w-5 h-5 text-fuchsia-400" /> },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setInstitutionType(item.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col gap-2 ${
                            institutionType === item.id
                              ? 'border-fuchsia-400 bg-fuchsia-950/20 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#0B1C30]">{item.title}</p>
                            <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        প্রতিষ্ঠানের নাম (ঐচ্ছিক):
                      </label>
                      <input
                        type="text"
                        placeholder="উদা: আইডিয়াল স্কুল অ্যান্ড কলেজ..."
                        value={institutionName}
                        onChange={(e) => setInstitutionName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                      />
                    </div>

                    <div className="flex justify-end pt-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e0520] text-white text-xs font-bold hover:bg-[#14213d] cursor-pointer"
                      >
                        <span>পরবর্তী ধাপ</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-base font-bold text-[#0B1C30]">
                        ধাপ ২ — ওয়েবসাইট প্যাকেজের পরিসর বেছে নিন
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        আপনার প্রতিষ্ঠানের চাহিদা ও আকার অনুযায়ী প্যাকেজ নির্বাচন করুন।
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'basic', title: 'স্টার্টার প্যাকেজ', price: '৳১৮,৫০০', time: '৫ দিন', desc: 'ছোট স্কুল ও কিন্ডারগার্টেনের জন্য।' },
                        { id: 'professional', title: 'প্রফেশনাল পোর্টাল', price: '৳২৮,৫০০', time: '৭ দিন', desc: 'অনলাইন ভর্তি ও এক্সেল রেজাল্ট সিস্টেমসহ।' },
                        { id: 'full', title: 'প্রিমিয়াম এন্টারপ্রাইজ', price: '৳৪৫,০০০', time: '১০ দিন', desc: 'মাল্টি-ক্যাম্পাস, অনলাইন ফি ও এসএমএসসহ।' },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setWebsiteType(p.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                            websiteType === p.id
                              ? 'border-fuchsia-400 bg-fuchsia-950/20 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div>
                            <p className="text-xs font-bold text-[#0B1C30]">{p.title}</p>
                            <p className="text-base font-bold text-fuchsia-400 font-mono mt-1">{p.price}</p>
                            <p className="text-[11px] text-slate-500 mt-2">{p.desc}</p>
                          </div>
                          <div className="pt-3 border-t border-slate-100 mt-3 text-[10px] text-slate-400">
                            ডেলিভারি: {p.time}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3">
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
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e0520] text-white text-xs font-bold hover:bg-[#14213d] cursor-pointer"
                      >
                        <span>পরবর্তী ধাপ</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-base font-bold text-[#0B1C30]">
                        ধাপ ৩ — প্রয়োজনীয় ফিচারসমূহে টিক দিন
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        ওয়েবসাইটে যে যে মডিউল অন্তর্ভুক্ত করতে চান সেগুলো সিলেক্ট করুন।
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'notice', label: 'ডায়নামিক নোটিশ বোর্ড' },
                        { id: 'admission', label: 'অনলাইন ভর্তি ফরম' },
                        { id: 'result', label: 'টার্মিনাল রেজাল্ট পোর্টাল' },
                        { id: 'gallery', label: 'স্মার্ট ফটো গ্যালারি' },
                        { id: 'teachers', label: 'শিক্ষক ও স্টাফ প্রোফাইল' },
                        { id: 'admin', label: 'সহজ বাংলা অ্যাডমিন প্যানেল' },
                        { id: 'routine', label: 'ক্লাস রুটিন ও সিলেবাস' },
                        { id: 'bilingual', label: 'দ্বিভাষিক (বাংলা + ইংরেজি)' },
                        { id: 'sms', label: 'এসএমএস অ্যালার্ট সিস্টেম' },
                      ].map((feat) => {
                        const isChecked = selectedFeatures.includes(feat.id);
                        return (
                          <button
                            key={feat.id}
                            type="button"
                            onClick={() => toggleFeature(feat.id)}
                            className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                              isChecked
                                ? 'border-fuchsia-400 bg-fuchsia-950/20 text-[#0B1C30]'
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

                    <div className="flex items-center justify-between pt-3">
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
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e0520] text-white text-xs font-bold hover:bg-[#14213d] cursor-pointer"
                      >
                        <span>পরবর্তী ধাপ</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <h3 className="text-base font-bold text-[#0B1C30]">
                        ধাপ ৪ — যোগাযোগের তথ্য ও চূড়ান্ত এস্টিমেট
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        প্রজেক্ট সামারি ও কোটেশন সংরক্ষণ করতে নিচের বিবরণ দিন।
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          আপনার নাম ও পদবী *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="উদা: ড. মো: রফিকুল ইসলাম (অধ্যক্ষ)"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          মোবাইল নম্বর *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="017XXXXXXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          হোয়াটসঅ্যাপ নম্বর (যদি আলাদা হয়):
                        </label>
                        <input
                          type="tel"
                          placeholder="01XXXXXXXXX"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                        />
                      </div>
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
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-fuchsia-600 text-white text-xs font-bold hover:bg-fuchsia-500 shadow-sm cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Get My Estimate</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* Success confirmation */
              <div className="py-8 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1C30]">
                  ধন্যবাদ, {name}!
                </h3>
                <p className="text-xs text-slate-600 max-w-md">
                  আপনার প্রতিষ্ঠানের আনুমানিক কোটেশন <b>৳{calculatedPrice.toLocaleString()}</b> প্রস্তুত করা হয়েছে। আমাদের সিনিয়র এডু-টেক কনসালটেন্ট দ্রুততম সময়ে আপনার দেওয়া নম্বরে যোগাযোগ করবেন।
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left w-full max-w-sm">
                  <p className="font-semibold text-slate-700">• প্রতিষ্ঠান: {institutionName || institutionType}</p>
                  <p className="text-slate-600">• প্যাকেজ: {websiteType} (৳{calculatedPrice.toLocaleString()})</p>
                  <p className="text-slate-600">• ফিচার সংখ্যা: {selectedFeatures.length} টি</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm pt-2">
                  <button
                    onClick={handleSendToWhatsApp}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>হোয়াটসঅ্যাপে সরাসরি পাঠান</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Channels & Office */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-6 rounded-3xl bg-[#0e0520] text-white flex flex-col gap-5 shadow-sm">
              <h3 className="text-base font-bold font-heading">
                সরাসরি যোগাযোগ করুন
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                জরুরি আলোচনা বা সরাসরি মিটিংয়ের জন্য নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন।
              </p>

              <div className="flex flex-col gap-4 text-xs">
                <a
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">হোয়াটসঅ্যাপ চ্যাট</span>
                    <span className="font-mono font-bold">+880 1700-000000</span>
                  </div>
                </a>

                <a
                  href="tel:+8801700000000"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-fuchsia-500/20 text-violet-300 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">সরাসরি ফোন কল</span>
                    <span className="font-mono font-bold">+880 1700-000000</span>
                  </div>
                </a>

                <a
                  href="mailto:contact@campusdev.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">অফিশিয়াল ইমেইল</span>
                    <span className="font-mono font-bold">contact@campusdev.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/80 text-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">অফিস ঠিকানা</span>
                    <span className="text-xs">লেভেল ৪, রূপায়ণ সেন্টার, মহাখালী সি/এ, ঢাকা-১২১২</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs text-xs">
              <span className="font-bold text-slate-800 block mb-2">⏱️ সাপোর্ট ও অফিস সময়:</span>
              <p className="text-slate-600 leading-relaxed">
                শনিবার থেকে বৃহস্পতিবার: সকাল ৯:০০ — রাত ৮:০০<br />
                জরুরি ক্লায়েন্ট হেল্পলাইন: ২৪/৭ সক্রিয়
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
