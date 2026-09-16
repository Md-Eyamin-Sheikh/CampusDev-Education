'use client';
import React, { useState } from 'react';
import { Language } from '../types';
import { 
  FileText, 
  Users, 
  GraduationCap, 
  Image as ImageIcon, 
  Settings, 
  Plus, 
  Download, 
  Search, 
  CheckCircle2, 
  Clock, 
  Eye, 
  Sparkles, 
  ArrowRight,
  Upload,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';

interface AdminDemoInteractiveProps {
  language: Language;
  onOpenConsultation: () => void;
}

interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'exam' | 'holiday' | 'admission';
  downloads: number;
  published: boolean;
}

interface StudentResult {
  roll: string;
  name: string;
  class: string;
  gpa: string;
  grade: string;
  status: 'Passed' | 'Failed';
}

export const AdminDemoInteractive: React.FC<AdminDemoInteractiveProps> = ({
  language,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'notices' | 'admissions' | 'results' | 'teachers'>('notices');
  
  // Interactive Notices State
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: '1',
      title: 'অর্ধ-বার্ষিক পরীক্ষা ২০২৫ এর চূড়ান্ত সময়সূচি ও প্রবেশপত্র বিতরণ সংক্রান্ত বিজ্ঞপ্তি',
      date: '১৫ মে, ২০২৫',
      category: 'exam',
      downloads: 342,
      published: true
    },
    {
      id: '2',
      title: '২০২৫ শিক্ষাবর্ষে ৬ষ্ঠ ও ৯ম শ্রেণিতে অনলাইন ভর্তি আবেদন কার্যক্রম শুরু',
      date: '১২ মে, ২০২৫',
      category: 'admission',
      downloads: 820,
      published: true
    },
    {
      id: '3',
      title: 'গ্রীষ্মকালীন অবকাশ ও জাতীয় কবি কাজী নজরুল ইসলাম জয়ন্তী উপলক্ষে ক্লাস বন্ধের নোটিশ',
      date: '১০ মে, ২০২৫',
      category: 'holiday',
      downloads: 190,
      published: true
    }
  ]);

  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState<'academic' | 'exam' | 'holiday' | 'admission'>('academic');
  const [showNoticeForm, setShowNoticeForm] = useState(false);
  const [noticePublishSuccess, setNoticePublishSuccess] = useState(false);

  // Results State
  const [searchRoll, setSearchRoll] = useState('101');
  const [searchedResult, setSearchedResult] = useState<StudentResult | null>({
    roll: '101',
    name: 'তানভীর আহমেদ',
    class: 'দশম শ্রেণি (বিজ্ঞান)',
    gpa: '5.00',
    grade: 'A+',
    status: 'Passed'
  });

  const mockResultsDatabase: Record<string, StudentResult> = {
    '101': { roll: '101', name: 'তানভীর আহমেদ', class: 'দশম শ্রেণি (বিজ্ঞান)', gpa: '5.00', grade: 'A+', status: 'Passed' },
    '102': { roll: '102', name: 'সুমাইয়া আক্তার', class: 'দশম শ্রেণি (বিজ্ঞান)', gpa: '4.89', grade: 'A', status: 'Passed' },
    '103': { roll: '103', name: 'আব্দুল্লাহ আল নোমান', class: 'দশম শ্রেণি (মানবিক)', gpa: '4.75', grade: 'A', status: 'Passed' },
    '104': { roll: '104', name: 'সাদিয়া তাসনিম', class: 'দশম শ্রেণি (ব্যবসায় শিক্ষা)', gpa: '5.00', grade: 'A+', status: 'Passed' },
    '105': { roll: '105', name: 'রিয়াদুল ইসলাম', class: 'দশম শ্রেণি (বিজ্ঞান)', gpa: '4.50', grade: 'A', status: 'Passed' }
  };

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle.trim()) return;

    const newNotice: Notice = {
      id: Date.now().toString(),
      title: newNoticeTitle,
      date: 'আজই প্রকাশিত',
      category: newNoticeCategory,
      downloads: 1,
      published: true
    };

    setNotices([newNotice, ...notices]);
    setNewNoticeTitle('');
    setShowNoticeForm(false);
    setNoticePublishSuccess(true);
    setTimeout(() => setNoticePublishSuccess(false), 4000);
  };

  const handleSearchRoll = (e: React.FormEvent) => {
    e.preventDefault();
    const result = mockResultsDatabase[searchRoll.trim()];
    if (result) {
      setSearchedResult(result);
    } else {
      setSearchedResult({
        roll: searchRoll,
        name: 'শিক্ষার্থী রোল ' + searchRoll,
        class: 'দশম শ্রেণি',
        gpa: '৪.৮০',
        grade: 'A',
        status: 'Passed'
      });
    }
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-fuchsia-500/15 shadow-2xl shadow-fuchsia-950/30 overflow-hidden backdrop-blur-sm" style={{background: "linear-gradient(145deg, rgba(20, 10, 40, 0.92), rgba(10, 5, 22, 0.95))"}}>
      {/* Top OS Simulation Bar */}
      <div className="bg-gradient-to-r from-[#0e0520] via-[#140a28] to-[#0e0520] px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-white border-b border-fuchsia-500/10">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          </div>
          <span className="ml-3 text-xs font-mono text-violet-200/60 hidden sm:inline">
            https://admin.campusdev.edu.bd/dashboard
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {language === 'bn' ? 'সরাসরি লাইভ সিমুলেশন' : 'Live Interactive Mode'}
          </span>
          <span className="text-xs text-violet-300/50 hidden md:inline">
            CampusDev OS 3.4
          </span>
        </div>
      </div>

      {/* Admin Panel Header */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-fuchsia-950/20 via-violet-950/10 to-transparent border-b border-fuchsia-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#0e0520] text-violet-300 flex items-center justify-center font-bold font-heading text-lg shadow-sm">
            AM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white">
                এপেক্স রেসিডেনসিয়াল মডেল স্কুল ও কলেজ
              </h3>
              <span className="px-2 py-0.5 rounded bg-fuchsia-950/30 text-fuchsia-400 text-[10px] font-bold uppercase">
                Admin
              </span>
            </div>
            <p className="text-xs text-violet-300/50">
              EIIN: 130284 | ঢাকা শিক্ষা বোর্ড | ড্যাশবোর্ড ভার্সন ৩.৪
            </p>
          </div>
        </div>

        {/* Navigation Tabs inside Admin Demo */}
        <div className="flex items-center gap-1 bg-[#0a0312]/60 p-1 rounded-xl border border-fuchsia-500/10 shadow-xs overflow-x-auto backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('notices')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'notices'
                ? 'bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white shadow-sm shadow-fuchsia-500/20'
                : 'text-violet-200/60 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'নোটিশ বোর্ড' : 'Notices'}</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-violet-500/20 text-violet-300">
              {notices.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('admissions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'admissions'
                ? 'bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white shadow-sm shadow-fuchsia-500/20'
                : 'text-violet-200/60 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'অনলাইন ভর্তি' : 'Admissions'}</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-500/20 text-emerald-400">
              ৩২৪
            </span>
          </button>

          <button
            onClick={() => setActiveTab('results')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'results'
                ? 'bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white shadow-sm shadow-fuchsia-500/20'
                : 'text-violet-200/60 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'রেজাল্ট পোর্টাল' : 'Results'}</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gradient-to-b from-transparent to-[#0a0312]/30">
        {/* Left Side: Active Management Tool (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* TAB 1: NOTICES MANAGEMENT */}
          {activeTab === 'notices' && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {language === 'bn' ? 'সকল নোটিশ ও সার্কুলার তালিকা' : 'Active Notices & Circulars'}
                  </h4>
                  <p className="text-xs text-violet-300/50">
                    {language === 'bn' ? 'এখানে নোটিশ যোগ করলে তাৎক্ষণিক মূল ওয়েবসাইটে প্রদর্শিত হয়।' : 'Updates appear immediately on the student portal.'}
                  </p>
                </div>
                <button
                  onClick={() => setShowNoticeForm(!showNoticeForm)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-fuchsia-600 text-white text-xs font-semibold hover:bg-fuchsia-500 shadow-sm transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? '+ নতুন নোটিশ' : '+ New Notice'}</span>
                </button>
              </div>

              {/* Notice Publish Success Toast */}
              {noticePublishSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/8 border border-emerald-500/15 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    {language === 'bn' 
                      ? 'অভিনন্দন! আপনার নোটিশটি সফলভাবে মূল ওয়েবসাইটে লাইভ প্রকাশিত হয়েছে।' 
                      : 'Notice published live to the student portal successfully!'}
                  </span>
                </div>
              )}

              {/* Add Notice Form Modal / Drawer Inline */}
              {showNoticeForm && (
                <form onSubmit={handleAddNotice} className="p-4 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/15 flex flex-col gap-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-fuchsia-500/10">
                    <span className="text-xs font-bold text-white">
                      {language === 'bn' ? 'নতুন নোটিশ ড্রাফট করুন' : 'Draft New Notice'}
                    </span>
                    <button 
                      type="button" 
                      onClick={() => setShowNoticeForm(false)}
                      className="text-xs text-violet-300/50 hover:text-violet-200/60 cursor-pointer"
                    >
                      বাতিল
                    </button>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-violet-200 block mb-1">
                      নোটিশের শিরোনাম:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="উদা: আগামী সোমবারের বিশেষ ক্লাস টেস্ট সংক্রান্ত..."
                      value={newNoticeTitle}
                      onChange={(e) => setNewNoticeTitle(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-fuchsia-500/15 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-[#0a0312]/40 text-white placeholder:text-violet-300/30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-violet-200 block mb-1">
                        ক্যাটাগরি:
                      </label>
                      <select
                        value={newNoticeCategory}
                        onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-fuchsia-500/15 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-[#0a0312]/40 text-white placeholder:text-violet-300/30"
                      >
                        <option value="academic">একাডেমিক</option>
                        <option value="exam">পরীক্ষা</option>
                        <option value="admission">ভর্তি</option>
                        <option value="holiday">ছুটি</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-violet-200 block mb-1">
                        পিডিএফ ফাইল (ঐচ্ছিক):
                      </label>
                      <div className="px-3 py-2 text-xs rounded-lg border border-dashed border-fuchsia-500/15 bg-[#0a0312]/30 text-violet-300/50 flex items-center gap-1.5 cursor-pointer">
                        <Upload className="w-3.5 h-3.5 text-fuchsia-400" />
                        <span>circular_2025.pdf</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg premium-primary text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                  >
                    <Check className="w-3.5 h-3.5 text-violet-300" />
                    <span>{language === 'bn' ? 'এখনই ওয়েবসাইটে পাবলিশ করুন' : 'Publish to Live Site'}</span>
                  </button>
                </form>
              )}

              {/* Notice List */}
              <div className="flex flex-col gap-2.5">
                {notices.map((n) => (
                  <div
                    key={n.id}
                    className="p-3.5 rounded-xl bg-fuchsia-950/15 border border-fuchsia-500/10 hover:border-fuchsia-500/30 hover:bg-fuchsia-950/25 transition-all flex items-start justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-fuchsia-950/20 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-semibold text-violet-300/50">
                            {n.date}
                          </span>
                          <span className="px-2 py-0.2 rounded-full text-[10px] font-semibold bg-fuchsia-950/30 text-fuchsia-400">
                            {n.category === 'exam' ? 'পরীক্ষা' : n.category === 'admission' ? 'ভর্তি' : n.category === 'holiday' ? 'ছুটি' : 'একাডেমিক'}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            লাইভ
                          </span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                          {n.title}
                        </h5>
                      </div>
                    </div>

                    <div className="text-right flex flex-col items-end flex-shrink-0">
                      <span className="text-[11px] text-violet-300/50 font-mono">
                        {n.downloads} বার ডাউনলোড
                      </span>
                      <span className="text-[11px] text-fuchsia-400 font-semibold mt-1">
                        এডিট
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: ADMISSIONS MANAGEMENT */}
          {activeTab === 'admissions' && (
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/10 text-center">
                  <p className="text-xs text-violet-300 font-medium">মোট আবেদন</p>
                  <p className="text-xl font-bold font-heading text-fuchsia-400">৩২৪ জন</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/8 border border-emerald-500/10 text-center">
                  <p className="text-xs text-emerald-400 font-medium">যাচাইকৃত</p>
                  <p className="text-xl font-bold font-heading text-emerald-400">২৮০ জন</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/8 border border-amber-500/10 text-center">
                  <p className="text-xs text-amber-400 font-medium">পেন্ডিং</p>
                  <p className="text-xl font-bold font-heading text-amber-400">৪৪ জন</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-fuchsia-950/15 border border-fuchsia-500/10 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-white">
                    ভর্তি আবেদন ডাটাবেজ
                  </h5>
                  <p className="text-[11px] text-violet-300/50">
                    অভিভাবকদের মোবাইল নম্বর, জন্ম নিবন্ধন ও পূর্বের স্কুলের নম্বরপত্র সংরক্ষিত।
                  </p>
                </div>
                <button 
                  onClick={() => alert('সিএসভি/এক্সেল ফাইল স্বয়ংক্রিয়ভাবে ডাউনলোড সম্পন্ন হয়েছে!')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white text-xs font-semibold hover:from-fuchsia-500 hover:to-violet-500 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-violet-300" />
                  <span>Export CSV</span>
                </button>
              </div>

              {/* Sample Student Applications */}
              <div className="flex flex-col gap-2">
                {[
                  { name: 'আহমেদ সাদিকুর রহমান', class: '৬ষ্ঠ শ্রেণি', phone: '01712-XXXXXX', date: '১৫ মে', status: 'Approved' },
                  { name: 'ফাতিমা তুয যোহরা', class: '৯ম শ্রেণি (বিজ্ঞান)', phone: '01823-XXXXXX', date: '১৪ মে', status: 'Approved' },
                  { name: 'মাহমুদুল হাসান সিয়াম', class: '৬ষ্ঠ শ্রেণি', phone: '01911-XXXXXX', date: '১৪ মে', status: 'Pending' },
                ].map((st, i) => (
                  <div key={i} className="p-3 rounded-lg bg-fuchsia-950/10 border border-fuchsia-500/8 flex items-center justify-between text-xs hover:bg-fuchsia-950/20 transition-colors">
                    <div>
                      <p className="font-bold text-white">{st.name}</p>
                      <p className="text-[11px] text-violet-300/50">{st.class} | অভিভাবক: {st.phone}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${st.status === 'Approved' ? 'bg-emerald-100 text-emerald-400' : 'bg-amber-100 text-amber-400'}`}>
                        {st.status === 'Approved' ? 'অনুমোদিত' : 'যাচাইধীন'}
                      </span>
                      <button className="px-2 py-1 rounded bg-fuchsia-950/20 hover:bg-fuchsia-950/30 text-[11px] font-semibold text-violet-200 cursor-pointer">
                        ভিউ ফরম
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: RESULTS PORTAL MANAGEMENT */}
          {activeTab === 'results' && (
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-fuchsia-950/30 to-violet-950/20 border border-fuchsia-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-600 text-white flex items-center justify-center">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-white">
                      এক্সেল শিট দিয়ে ১ ক্লিকে রেজাল্ট আপলোড
                    </h5>
                    <p className="text-[11px] text-violet-200/60">
                      রোল, বিষয়ভিত্তিক নম্বর ও জিপিএ সম্বলিত .xlsx ফাইল আপলোড করুন
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => alert('এক্সেল শিট সফলভাবে ডাটাবেজে সিঙ্ক হয়েছে!')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0e0520] text-white text-xs font-semibold whitespace-nowrap cursor-pointer hover:bg-fuchsia-900/40"
                >
                  ফাইল সিলেক্ট করুন
                </button>
              </div>

              {/* Interactive Roll Search Simulator */}
              <div className="p-4 rounded-xl bg-fuchsia-950/10 border border-fuchsia-500/10">
                <h5 className="text-xs font-bold text-white mb-2">
                  অভিভাবক ও শিক্ষার্থী সার্চ প্রিভিউ (টেস্ট করে দেখুন):
                </h5>
                <form onSubmit={handleSearchRoll} className="flex gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="রোল নম্বর (১০১, ১০২, ১০৩, ১০৪, ১০৫)"
                    value={searchRoll}
                    onChange={(e) => setSearchRoll(e.target.value)}
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-fuchsia-600 text-white text-xs font-semibold hover:bg-fuchsia-500 cursor-pointer flex items-center gap-1"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>রেজাল্ট দেখুন</span>
                  </button>
                </form>

                {searchedResult && (
                  <div className="p-3.5 rounded-lg bg-[#0a0312]/40 border border-fuchsia-500/10 flex flex-col gap-2 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-fuchsia-500/10">
                      <div>
                        <span className="font-bold text-white text-sm">{searchedResult.name}</span>
                        <p className="text-[11px] text-violet-300/50">রোল: {searchedResult.roll} | {searchedResult.class}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-300 font-bold text-xs">
                          GPA: {searchedResult.gpa} ({searchedResult.grade})
                        </span>
                        <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">কৃতকার্য</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-[11px] pt-1">
                      <div className="p-1.5 rounded bg-fuchsia-950/20 border border-fuchsia-500/8">
                        <p className="text-violet-300/50">বাংলা</p>
                        <p className="font-bold text-violet-100">A+</p>
                      </div>
                      <div className="p-1.5 rounded bg-fuchsia-950/20 border border-fuchsia-500/8">
                        <p className="text-violet-300/50">ইংরেজি</p>
                        <p className="font-bold text-violet-100">A</p>
                      </div>
                      <div className="p-1.5 rounded bg-fuchsia-950/20 border border-fuchsia-500/8">
                        <p className="text-violet-300/50">গণিত</p>
                        <p className="font-bold text-violet-100">A+</p>
                      </div>
                      <div className="p-1.5 rounded bg-fuchsia-950/20 border border-fuchsia-500/8">
                        <p className="text-violet-300/50">বিজ্ঞান</p>
                        <p className="font-bold text-violet-100">A+</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Side: LIVE STUDENT & PARENT VIEW (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-300/50 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-fuchsia-400" />
              <span>লাইভ ওয়েবসাইট ভিউ (অভিভাবকের স্ক্রিন)</span>
            </span>
            <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              রিয়েল-টাইম সিঙ্ক
            </span>
          </div>

          {/* Smartphone Styled Mockup Container */}
          <div className="p-4 rounded-2xl bg-gradient-to-b from-fuchsia-950/20 to-violet-950/15 border border-fuchsia-500/15 shadow-inner shadow-fuchsia-950/20 flex flex-col gap-3 backdrop-blur-sm">
            {/* Live School Card */}
            <div className="p-3 rounded-xl bg-fuchsia-950/20 shadow-xs border border-fuchsia-500/10 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0e0520] text-white flex items-center justify-center text-xs font-bold">
                AM
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-white truncate">
                  এপেক্স রেসিডেনসিয়াল মডেল স্কুল
                </p>
                <p className="text-[10px] text-violet-300/50">অনলাইন পোর্টাল</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-fuchsia-950/30 text-fuchsia-400 text-[10px] font-bold">
                ভর্তি চলছে
              </span>
            </div>

            {/* Live Synchronized Notice Ticker */}
            <div className="p-3 rounded-xl bg-fuchsia-950/20 border border-fuchsia-500/20 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-fuchsia-400 flex items-center gap-1">
                  📢 সর্বশেষ নোটিশ:
                </span>
                <span className="text-[10px] text-violet-300/50">আজকের আপডেট</span>
              </div>
              <p className="text-xs font-semibold text-white leading-snug line-clamp-2">
                {notices[0]?.title || 'কোনো নোটিশ নেই'}
              </p>
              <div className="flex items-center justify-between text-[10px] text-violet-300/50 pt-1 border-t border-fuchsia-500/10">
                <span>{notices[0]?.date}</span>
                <span className="text-fuchsia-400 font-bold flex items-center gap-1">
                  পিডিএফ ডাউনলোড <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Quick Feature Grid for Parents */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-fuchsia-950/15 border border-fuchsia-500/8 flex flex-col gap-1">
                <span className="text-[10px] text-violet-300/50 font-medium">ভর্তি ফরম</span>
                <span className="font-bold text-violet-100 text-xs">ডিজিটাল রেজিস্ট্রেশন</span>
                <span className="text-[10px] text-emerald-400 font-semibold">আবেদন উন্মুক্ত</span>
              </div>
              <div className="p-2.5 rounded-lg bg-fuchsia-950/15 border border-fuchsia-500/8 flex flex-col gap-1">
                <span className="text-[10px] text-violet-300/50 font-medium">ফলাফল আর্কাইভ</span>
                <span className="font-bold text-violet-100 text-xs">টার্মিনাল রেজাল্ট</span>
                <span className="text-[10px] text-fuchsia-400 font-semibold">অনলাইনে রেডি</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-500/8 border border-emerald-500/15 text-center">
              <p className="text-[11px] text-emerald-300 font-semibold">
                ✓ আপনার স্কুলের প্যানেলও ঠিক একইভাবে পরিচালিত হবে
              </p>
            </div>
          </div>

          {/* Bottom CTA within demo */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-fuchsia-950/60 via-[#0e0520] to-violet-950/40 text-white flex flex-col gap-2.5 mt-2 shadow-lg shadow-fuchsia-950/30 border border-fuchsia-500/15">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-300" />
              <span className="text-xs font-bold">
                {language === 'bn' ? 'নিজ চোখে ড্যাশবোর্ড পরীক্ষা করুন' : 'Test Admin Controls Live'}
              </span>
            </div>
            <p className="text-[11px] text-violet-200/60">
              {language === 'bn'
                ? 'আপনার প্রতিষ্ঠানের চাহিদা অনুযায়ী সম্পূর্ণ কাস্টমাইজড অ্যাডমিন ডেমো এক্সেস পেতে আমাদের সাথে যোগাযোগ করুন।'
                : 'Get tailored admin credentials configured specifically with your institution curriculum.'}
            </p>
            <button
              onClick={onOpenConsultation}
              className="mt-1 py-2.5 rounded-lg premium-primary text-white text-xs font-bold transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            >
              {language === 'bn' ? 'অ্যাডমিন ডেমো এক্সেস চান? কথা বলুন' : 'Request Admin Demo Credentials'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
