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
      {/* Glass blur backdrop */}
      <div className="absolute inset-0 bg-[rgba(10,3,18,0.88)] backdrop-blur-2xl border-t border-[rgba(139,92,246,0.18)] shadow-[0_-8px_40px_rgba(5,1,13,0.5)]" />

      {/* Content */}
      <div
        className="relative w-full flex items-center justify-between px-2 py-1"
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
                    ? 'text-fuchsia-400'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
                }`}
              >
                {/* Active background glow */}
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-[rgba(192,38,211,0.12)] border border-[rgba(192,38,211,0.25)]" />
                )}

                {/* Icon */}
                <span className={`relative z-10 transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                  {item.icon}
                </span>

                {/* Label */}
                <span
                  className={`relative z-10 text-[10px] mt-0.5 tracking-tight leading-none ${
                    isActive ? 'font-bold text-fuchsia-300' : 'font-medium'
                  }`}
                >
                  {language === 'bn' ? item.labelBn : item.labelEn}
                </span>

                {/* Active dot indicator */}
                {isActive && (
                  <span className="relative z-10 w-1 h-1 rounded-full bg-fuchsia-400 mt-0.5 shadow-[0_0_4px_rgba(232,121,249,0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-10 w-px bg-[rgba(139,92,246,0.2)] shrink-0 mx-1" />

        {/* Consultation CTA — always visible */}
        <button
          id="tablet-bottom-nav-consult-btn"
          onClick={onOpenConsultation}
          className="relative flex flex-col items-center justify-center min-w-[64px] py-1.5 px-2 rounded-xl cursor-pointer group shrink-0 active:scale-90 transition-all duration-200"
        >
          {/* Glow background */}
          <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-violet-900/60 to-fuchsia-700/30 border border-fuchsia-500/30 shine-effect" />

          {/* Icon with gradient ring */}
          <span className="relative z-10 p-1.5 rounded-full bg-gradient-to-tr from-violet-700 to-fuchsia-500 shadow-[0_0_12px_rgba(192,38,211,0.5)] group-hover:shadow-[0_0_20px_rgba(192,38,211,0.7)] transition-shadow duration-200">
            <Sparkles className="w-4 h-4 text-white" />
          </span>

          <span className="relative z-10 text-[10px] mt-0.5 font-bold text-fuchsia-300 leading-none">
            {language === 'bn' ? 'পরামর্শ' : 'Consult'}
          </span>
        </button>
      </div>
    </div>
  );
};
