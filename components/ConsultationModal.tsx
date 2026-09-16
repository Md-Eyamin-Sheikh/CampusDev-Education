'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  Sparkles, 
  Check, 
  User, 
  Phone, 
  School,
  MessageSquare
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [selectedDate, setSelectedDate] = useState('২০ মে, ২০২৫ (সোমবার)');
  const [selectedTime, setSelectedTime] = useState('১১:০০ AM - ১১:৩০ AM');
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('school-website');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const dates = [
    '২০ মে, ২০২৫ (সোমবার)',
    '২১ মে, ২০২৫ (মঙ্গলবার)',
    '২২ মে, ২০২৫ (বুধবার)',
    '২৩ মে, ২০২৫ (বৃহস্পতিবার)',
    '২৪ মে, ২০২৫ (শনিবার)'
  ];

  const times = [
    '১০:০০ AM - ১০:৩০ AM',
    '১১:০০ AM - ১১:৩০ AM',
    '০৩:০০ PM - ০৩:৩০ PM',
    '০৪:০০ PM - ০৪:৩০ PM',
    '০৮:০০ PM - ০৮:৩০ PM (সন্ধ্যা)'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0e0520] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-heading">
                {language === 'bn' ? 'ফ্রি প্ল্যানিং কনসালটেশন বুকিং' : 'Free Planning Consultation Booking'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'bn' ? 'আমাদের সিনিয়র এডু-টেক কনসালটেন্টের সাথে ৩০ মিনিটের আলোচনা' : '30-minute tailored strategy session with our senior tech specialist'}
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

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {!confirmed ? (
            <form onSubmit={handleBooking} className="flex flex-col gap-5">
              {/* Step 1: Choose Date */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                  <CalendarIcon className="w-4 h-4 text-fuchsia-400" />
                  <span>{language === 'bn' ? 'পছন্দের তারিখ নির্বাচন করুন:' : 'Select Preferred Date:'}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {dates.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selectedDate === d
                          ? 'bg-[#0e0520] text-white border-[#0e0520] shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose Time */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-2">
                  <Clock className="w-4 h-4 text-fuchsia-400" />
                  <span>{language === 'bn' ? 'সুবিধাজনক সময় নির্বাচন করুন:' : 'Select Convenient Time Slot:'}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selectedTime === t
                          ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Contact & Institution Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
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
                    প্রতিষ্ঠানের নাম *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="উদা: আইডিয়াল স্কুল অ্যান্ড কলেজ"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    মোবাইল নম্বর (হোয়াটসঅ্যাপ থাকলে অগ্রাধিকার) *
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

              <div className="p-3 rounded-xl bg-violet-50 border border-fuchsia-500/10 text-xs text-slate-700 flex items-center justify-between">
                <span>কনসালটেশন মোড: <b>গুগল মিট / সরাসরি ফোন কল</b></span>
                <span className="text-fuchsia-400 font-bold">সম্পূর্ণ ফ্রি</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-violet-300" />
                <span>কনসালটেশন বুকিং নিশ্চিত করুন</span>
              </button>
            </form>
          ) : (
            <div className="py-6 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <h4 className="text-base font-bold text-[#0B1C30]">
                  বুকিং সফল হয়েছে!
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mt-1">
                  ধন্যবাদ, {name}। আপনার সুবিধাজনক সময় <b>{selectedDate}</b> এর <b>{selectedTime}</b>-এ কনসালটেশন শিডিউল করা হয়েছে।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left w-full max-w-sm">
                <p className="font-semibold text-slate-800">• প্রতিষ্ঠান: {institution}</p>
                <p className="text-slate-600">• মোবাইল: {phone}</p>
                <p className="text-slate-600">• সময়: {selectedDate} | {selectedTime}</p>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-[#0e0520] text-white text-xs font-bold cursor-pointer"
              >
                সম্পন্ন
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
