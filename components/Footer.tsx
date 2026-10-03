'use client';
import React from 'react';
import { Logo } from './Logo';
import { Language, NavSection } from '../types';
import { 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  language: Language;
  onOpenConsultation: () => void;
  onOpenAudit: () => void;
  onOpenEstimator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  onOpenConsultation,
  onOpenAudit
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#14342b] text-slate-300 pt-6 sm:pt-10 md:pt-14 pb-24 md:pb-24 lg:pb-0 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Trust Value Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-[#1c4237]/80 border border-white/10 mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e7a50]/20 border border-[#1e7a50]/30 flex items-center justify-center text-[#cfe4d6]">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                {language === 'bn' ? '১০০% মোবাইল-ফার্স্ট' : '100% Mobile-First'}
              </p>
              <p className="text-[11px] text-[#cfe4d6]/80">
                {language === 'bn' ? 'প্রতিটি ডিভাইসে মসৃণ ভিউ' : 'Responsive on all phones'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2a93b]/20 border border-[#f2a93b]/30 flex items-center justify-center text-[#f2a93b]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                {language === 'bn' ? 'ব্যাংক-গ্রেড নিরাপত্তা' : 'Bank-Grade Security'}
              </p>
              <p className="text-[11px] text-[#cfe4d6]/80">
                {language === 'bn' ? 'অটো ব্যাকআপ ও এনক্রিপশন' : 'Auto cloud backup & SSL'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1e7a50]/20 border border-[#1e7a50]/30 flex items-center justify-center text-[#cfe4d6]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                {language === 'bn' ? 'আল্ট্রা ফাস্ট স্পিড' : 'Ultra Fast Loading'}
              </p>
              <p className="text-[11px] text-[#cfe4d6]/80">
                {language === 'bn' ? '১ সেকেন্ডের নিচে পেজ লোড' : 'Sub-second page speeds'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2a93b]/20 border border-[#f2a93b]/30 flex items-center justify-center text-[#f2a93b]">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white">
                {language === 'bn' ? '২৪/৭ সার্বক্ষণিক সাপোর্ট' : '24/7 Priority Support'}
              </p>
              <p className="text-[11px] text-[#cfe4d6]/80">
                {language === 'bn' ? 'জরুরি কল ও হোয়াটসঅ্যাপ' : 'Dedicated tech hotlines'}
              </p>
            </div>
          </div>
        </div>

        {/* 5-Column Sitemap Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Logo theme="light" size="md" />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {language === 'bn'
                ? 'বাংলাদেশের স্কুল, কলেজ, মাদ্রাসা ও কোচিং ইনস্টিটিউটের জন্য আধুনিক, নিরাপদ এবং হাই-কনভার্টিং এডুকেশনাল ওয়েব সল্যুশন প্ল্যাটফর্ম।'
                : 'Education-focused premium web solutions platform engineered for schools, colleges, madrasas, and academic institutions in Bangladesh.'}
            </p>

            <div className="flex flex-col gap-2 pt-2 text-sm text-[#cfe4d6]/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#f2a93b]" />
                <span>ধানমন্ডি ও উত্তরা, ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f2a93b]" />
                <span>contact@eduweb.com.bd</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f2a93b]" />
                <span>+৮৮০১৭১০-০০০০০০ (সরাসরি হটলাইন)</span>
              </div>
            </div>
          </div>

          {/* Column: Solutions */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2a93b]">
              {language === 'bn' ? 'সল্যুশনসমূহ' : 'Solutions'}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <button 
                onClick={() => onNavigate('services')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'স্কুল ওয়েবসাইট সল্যুশন' : 'School Website Solution'}
              </button>
              <button 
                onClick={() => onNavigate('services')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'কলেজ ওয়েবসাইট পোর্টাল' : 'College Website Portal'}
              </button>
              <button 
                onClick={() => onNavigate('services')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'মাদ্রাসা পোর্টাল সল্যুশন' : 'Madrasa Portal Solution'}
              </button>
              <button 
                onClick={() => onNavigate('services')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'কোচিং ও একাডেমি সাইট' : 'Coaching & Academy Sites'}
              </button>
              <button 
                onClick={() => onNavigate('maintenance')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'সার্ভার কেয়ার ও মেইনটেন্যান্স' : 'Server Care & Maintenance'}
              </button>
            </div>
          </div>

          {/* Column: Demos & Experience */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2a93b]">
              {language === 'bn' ? 'ইন্টারেক্টিভ ডেমো' : 'Live Demos'}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <button 
                onClick={() => onNavigate('demos')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'স্কুল লাইভ ডেমো' : 'Live School Demo'}
              </button>
              <button 
                onClick={() => onNavigate('demos')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'কলেজ পোর্টাল প্রিভিউ' : 'College Portal Preview'}
              </button>
              <button 
                onClick={() => onNavigate('demos')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'মাদ্রাসা পূর্ণাঙ্গ ডেমো' : 'Madrasa Full Demo'}
              </button>
              <button 
                onClick={() => onNavigate('admin-demo')} 
                className="text-left text-[#f2a93b] font-semibold hover:underline cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'অ্যাডমিন ড্যাশবোর্ড টেস্ট ড্রাইভ' : 'Admin Panel Test Drive'}
              </button>
              <button 
                onClick={onOpenAudit} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'ওয়েবসাইট স্পিড ও এসইও অডিট' : 'Free Website Audit Tool'}
              </button>
            </div>
          </div>

          {/* Column: Company & Resources */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f2a93b]">
              {language === 'bn' ? 'রিসোর্স ও কোম্পানি' : 'Company'}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <button 
                onClick={() => onNavigate('works')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'কেস স্টাডিজ ও ফলাফল' : 'Works & Case Studies'}
              </button>
              <button 
                onClick={() => onNavigate('pricing')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'প্যাকেজ ও স্বচ্ছ খরচ' : 'Pricing & Packages'}
              </button>
              <button 
                onClick={() => onNavigate('process')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'আমাদের কাজের ৬ ধাপ' : 'Our 6-Step Process'}
              </button>
              <button 
                onClick={() => onNavigate('about')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'আমাদের পরিচিতি ও টিম' : 'About Us & Team'}
              </button>
              <button 
                onClick={() => onNavigate('blog')} 
                className="text-left hover:text-white transition-colors cursor-pointer py-1.5"
              >
                {language === 'bn' ? 'ব্লগ ও শিক্ষামূলক আর্টিকেল' : 'Educational Blog & Guides'}
              </button>
            </div>
          </div>
        </div>

        {/* Client Website Passive Branding Showcase */}
        <div className="p-4 rounded-xl bg-[#1c4237]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f2a93b]" />
            <span>
              {language === 'bn' 
                ? 'ক্লায়েন্টদের প্রতিটি ওয়েবসাইটের ফুটারে সংযোজিত হয় সম্মানজনক স্ট্যাম্প:' 
                : 'Every partner institution features our signature verification stamp:'}
            </span>
            <span className="font-semibold text-white px-2.5 py-1 rounded bg-[#1e7a50] border border-white/20">
              Powered by EduWeb
            </span>
          </div>
          <button 
            onClick={onOpenConsultation}
            className="text-[#f2a93b] hover:underline font-semibold cursor-pointer py-1.5"
          >
            {language === 'bn' ? 'আপনার প্রতিষ্ঠানের জন্য ওয়েবসাইট তৈরি করুন →' : 'Launch for your school →'}
          </button>
        </div>

        {/* Bottom Bar: Copyright, Status, and Bangladesh tag */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300 text-center md:text-left">
          <div>
            © {currentYear} EduWeb. Built exclusively for Educational Institutions in Bangladesh.
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#f2a93b]">
              <span className="w-2 h-2 rounded-full bg-[#f2a93b] animate-pulse" />
              <span>{language === 'bn' ? 'সার্ভার স্ট্যাটাস: অপ্টিমাল (৯৯.৯৯%)' : 'Server Status: 99.99% Optimal'}</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-300">
              Made with precision for Education
            </span>
          </div>
        </div>
      </div>
    </footer>

  );
};
