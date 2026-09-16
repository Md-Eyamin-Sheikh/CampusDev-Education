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
    { id: 'home', icon: <Home className="w-5 h-5" />, labelBn: 'হোম', labelEn: 'Home' },
    { id: 'services', icon: <Layers className="w-5 h-5" />, labelBn: 'সার্ভিস', labelEn: 'Services' },
    { id: 'works', icon: <Briefcase className="w-5 h-5" />, labelBn: 'কাজ', labelEn: 'Works' },
    { id: 'admin-demo', icon: <LayoutDashboard className="w-5 h-5" />, labelBn: 'অ্যাডমিন', labelEn: 'Admin' },
    { id: 'contact', icon: <MessageSquare className="w-5 h-5" />, labelBn: 'যোগাযোগ', labelEn: 'Contact' },
  ];

  return (
    <div 
      id="mobile-bottom-navbar"
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_25px_rgba(15,23,42,0.08)] pb-[max(0.4rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-in-out will-change-transform ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-around px-1.5 py-1">
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
              className={`flex flex-col items-center justify-center min-w-[50px] py-1 px-1 rounded-xl transition-all active:scale-90 cursor-pointer ${
                isActive 
                  ? 'text-fuchsia-400' 
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className={`p-1 rounded-lg transition-transform ${isActive ? 'scale-105' : ''}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] tracking-tight ${isActive ? 'font-black text-[#0B1C30]' : 'font-medium text-slate-500'}`}>
                {language === 'bn' ? item.labelBn : item.labelEn}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-fuchsia-400 mt-0.5" />
              )}
            </button>
          );
        })}

        {/* Quick Consultation Pill Trigger */}
        <button
          id="mobile-bottom-nav-consult-btn"
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center min-w-[50px] py-1 px-1 text-violet-400 transition-all active:scale-90 cursor-pointer group"
        >
          <div className="p-1.5 rounded-full bg-gradient-to-tr from-[#0e0520] to-fuchsia-400 text-violet-300 shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-[10px] tracking-tight font-black text-[#0B1C30] mt-0.5">
            {language === 'bn' ? 'পরামর্শ' : 'Consult'}
          </span>
        </button>
      </div>
    </div>
  );
};
