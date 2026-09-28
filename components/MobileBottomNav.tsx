'use client';
import React from 'react';
import { NavSection, Language } from '../types';
import { 
  Home, 
  Layers, 
  Briefcase, 
  LayoutDashboard, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface MobileBottomNavProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  language: Language;
  onOpenConsultation: () => void;
  isVisible?: boolean;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentSection,
  onNavigate,
  language,
  onOpenConsultation,
  isVisible = true
}) => {
  const items: { id: NavSection; icon: React.ReactNode; labelBn: string; labelEn: string }[] = [
    { id: 'home', icon: <Home />, labelBn: 'হোম', labelEn: 'Home' },
    { id: 'services', icon: <Layers />, labelBn: 'সার্ভিস', labelEn: 'Services' },
    { id: 'works', icon: <Briefcase />, labelBn: 'কাজ', labelEn: 'Works' },
    { id: 'admin-demo', icon: <LayoutDashboard />, labelBn: 'অ্যাডমিন', labelEn: 'Admin' },
    { id: 'contact', icon: <MessageSquare />, labelBn: 'যোগাযোগ', labelEn: 'Contact' },
  ];

  return (
    <div 
      id="mobile-bottom-navbar"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out will-change-transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Premium glass backdrop */}
      <div className="absolute inset-0 bg-white/[0.97] backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-2px_20px_rgba(15,23,42,0.06)]" />

      {/* Content layer */}
      <div 
        className="relative flex items-end justify-around px-2 pt-1.5"
        style={{ paddingBottom: 'max(10px, env(safe-area-inset-bottom))' }}
      >
        {items.map((item) => {
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              id={`mobile-bottom-nav-${item.id}`}
              onClick={() => {
                onNavigate(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-xl transition-all duration-200 active:scale-90 cursor-pointer ${
                isActive 
                  ? 'text-[#003B73]' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {/* Active top pill indicator */}
              {isActive && (
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-full bg-[#003B73] shadow-[0_0_6px_rgba(0,59,115,0.4)]" />
              )}

              {/* Icon container */}
              <div className={`flex items-center justify-center transition-all duration-200 ${
                isActive 
                  ? 'text-[#003B73]' 
                  : 'text-slate-400'
              }`}>
                <div className={isActive ? 'w-[22px] h-[22px]' : 'w-5 h-5'}>
                  {React.cloneElement(item.icon as React.ReactElement<{ className?: string; strokeWidth?: number }>, {
                    className: 'w-full h-full',
                    strokeWidth: isActive ? 2.5 : 1.8
                  })}
                </div>
              </div>

              {/* Label */}
              <span className={`text-[11px] leading-tight mt-1 ${
                isActive 
                  ? 'font-bold text-[#003B73]' 
                  : 'font-medium text-slate-400'
              }`}>
                {language === 'bn' ? item.labelBn : item.labelEn}
              </span>
            </button>
          );
        })}

        {/* Quick Consultation FAB */}
        <button
          id="mobile-bottom-nav-consult-btn"
          onClick={onOpenConsultation}
          className="relative flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 transition-all active:scale-90 cursor-pointer group"
        >
          {/* Elevated icon */}
          <div className="flex items-center justify-center w-10 h-10 -mt-3 rounded-2xl bg-gradient-to-br from-[#003B73] to-[#00529B] text-white shadow-[0_4px_14px_rgba(0,59,115,0.35)] group-hover:shadow-[0_6px_20px_rgba(0,59,115,0.45)] group-hover:scale-105 transition-all duration-200 border border-white/20">
            <Sparkles className="w-[18px] h-[18px] text-sky-200" />
          </div>
          <span className="text-[11px] leading-tight font-bold text-[#003B73] mt-1">
            {language === 'bn' ? 'পরামর্শ' : 'Consult'}
          </span>
        </button>
      </div>
    </div>
  );
};
