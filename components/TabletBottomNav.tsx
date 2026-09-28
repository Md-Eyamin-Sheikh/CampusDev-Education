'use client';
import React from 'react';
import { NavSection, Language } from '../types';
import {
  Home,
  Layers,
  Briefcase,
  LayoutDashboard,
  MessageSquare,
  Sparkles,
  DollarSign,
  Info,
  BookOpen,
  Cpu,
  Phone,
} from 'lucide-react';

interface TabletBottomNavProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  language: Language;
  onOpenConsultation: () => void;
  isVisible?: boolean;
}

const navItems: { id: NavSection; icon: React.ReactNode; labelBn: string; labelEn: string }[] = [
  { id: 'home', icon: <Home className="w-5 h-5" />, labelBn: 'হোম', labelEn: 'Home' },
  { id: 'services', icon: <Layers className="w-5 h-5" />, labelBn: 'সার্ভিস', labelEn: 'Services' },
  { id: 'works', icon: <Briefcase className="w-5 h-5" />, labelBn: 'কাজ', labelEn: 'Works' },
  { id: 'pricing', icon: <DollarSign className="w-5 h-5" />, labelBn: 'প্যাকেজ', labelEn: 'Pricing' },
  { id: 'process', icon: <Cpu className="w-5 h-5" />, labelBn: 'প্রক্রিয়া', labelEn: 'Process' },
  { id: 'demos', icon: <LayoutDashboard className="w-5 h-5" />, labelBn: 'ডেমো', labelEn: 'Demos' },
  { id: 'about', icon: <Info className="w-5 h-5" />, labelBn: 'আমরা', labelEn: 'About' },
  { id: 'resources', icon: <BookOpen className="w-5 h-5" />, labelBn: 'রিসোর্স', labelEn: 'Resources' },
  { id: 'contact', icon: <MessageSquare className="w-5 h-5" />, labelBn: 'যোগাযোগ', labelEn: 'Contact' },
];

export const TabletBottomNav: React.FC<TabletBottomNavProps> = ({
  currentSection,
  onNavigate,
  language,
  onOpenConsultation,
  isVisible = true,
}) => {
  return (
    <div
      id="tablet-bottom-navbar"
      className={`hidden md:flex lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out will-change-transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Glass blur backdrop (Light Theme) */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(15,23,42,0.08)]" />

      {/* Content */}
      <div
        className="relative w-full flex items-center justify-between px-2 py-1.5"
        style={{ paddingBottom: 'calc(6px + env(safe-area-inset-bottom))' }}
      >
        {/* Nav items — scrollable row */}
        <div className="flex items-center gap-0.5 overflow-x-auto scroll-momentum no-scrollbar flex-1 mr-2">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                id={`tablet-bottom-nav-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative flex flex-col items-center justify-center min-w-[60px] py-1.5 px-2 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer group shrink-0 ${
                  isActive
                    ? 'text-[#003B73]'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {/* Active background highlight */}
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-sky-100/90 border border-sky-200/80 shadow-2xs" />
                )}

                {/* Active Top Bar Indicator */}
                {isActive && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-[#003B73]" />
                )}

                {/* Icon */}
                <span className={`relative z-10 transition-transform duration-200 ${isActive ? 'scale-105 text-[#003B73]' : 'group-hover:scale-105 text-slate-500'}`}>
                  {item.icon}
                </span>

                {/* Label */}
                <span
                  className={`relative z-10 text-[11px] mt-0.5 tracking-tight leading-none ${
                    isActive ? 'font-black text-[#003B73]' : 'font-semibold text-slate-500'
                  }`}
                >
                  {language === 'bn' ? item.labelBn : item.labelEn}
                </span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-slate-200 shrink-0 mx-1" />

        {/* Consultation CTA — always visible */}
        <button
          id="tablet-bottom-nav-consult-btn"
          onClick={onOpenConsultation}
          className="relative flex flex-col items-center justify-center min-w-[64px] py-1.5 px-2 rounded-xl cursor-pointer group shrink-0 active:scale-90 transition-all duration-200"
        >
          {/* Background */}
          <span className="absolute inset-0 rounded-xl bg-sky-50 border border-sky-200" />

          {/* Icon with gradient ring */}
          <span className="relative z-10 p-1.5 rounded-full bg-[#003B73] text-white shadow-xs group-hover:bg-[#00529B] transition-colors duration-200">
            <Sparkles className="w-[18px] h-[18px] text-sky-200" />
          </span>

          <span className="relative z-10 text-[11px] mt-0.5 font-black text-[#003B73] leading-none">
            {language === 'bn' ? 'পরামর্শ' : 'Consult'}
          </span>
        </button>
      </div>
    </div>
  );
};
