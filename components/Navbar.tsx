'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Language, NavSection } from '../types';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Sparkles, 
  Globe, 
  ChevronRight,
  ChevronDown,
  ShieldCheck, 
  Zap, 
  Phone, 
  ArrowRight, 
  Layers, 
  GraduationCap, 
  FileCheck,
  Building2,
  Clock,
  Home,
  Briefcase,
  Laptop,
  Coins,
  Cpu,
  Mail
} from 'lucide-react';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  language: Language;
  onToggleLanguage: () => void;
  onOpenConsultation: () => void;
  onOpenAudit: () => void;
  isVisible?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  language,
  onToggleLanguage,
  onOpenConsultation,
  onOpenAudit,
  isVisible = true
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Primary navigation tabs shown prominently on desktop
  const primaryNavLinks: { 
    id: NavSection; 
    labelBn: string; 
    labelEn: string; 
    badge?: string;
    badgeColor?: string;
    icon?: React.ReactNode;
  }[] = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'services', labelBn: 'সার্ভিসেস', labelEn: 'Services', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'works', labelBn: 'কাজের নমুনা', labelEn: 'Works', icon: <Layers className="w-4 h-4" /> },
    { id: 'demos', labelBn: 'লাইভ ডেমো', labelEn: 'Demos', icon: <Laptop className="w-4 h-4" /> },
    { id: 'pricing', labelBn: 'প্যাকেজ', labelEn: 'Pricing', icon: <Coins className="w-4 h-4" /> },
  ];

  // Secondary items cleanly organized in "More / আরো" dropdown on desktop
  const secondaryNavLinks: {
    id: NavSection;
    labelBn: string;
    labelEn: string;
    descBn: string;
    descEn: string;
    badge?: string;
    badgeColor?: string;
    icon: React.ReactNode;
  }[] = [
    { 
      id: 'admin-demo', 
      labelBn: 'অ্যাডমিন ডেমো', 
      labelEn: 'Admin Panel Demo',
      descBn: 'নোটিশ, রেজাল্ট ও ভর্তি ফরমের রিয়েল-টাইম বাংলা কন্ট্রোল প্যানেল',
      descEn: 'Test live notices, admissions, and student results simulation',
      badge: 'Live', 
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      icon: <Laptop className="w-4 h-4 text-sky-400" />
    },
    { 
      id: 'process', 
      labelBn: 'কাজের ধাপ', 
      labelEn: 'Development Process',
      descBn: 'রিকোয়ারমেন্ট থেকে লাইভ লঞ্চ পর্যন্ত ৬টি স্বচ্ছ ধাপ',
      descEn: 'From requirements to live campus rollout in 6 clear steps',
      icon: <Layers className="w-4 h-4 text-sky-400" />
    },
    { 
      id: 'about', 
      labelBn: 'আমাদের সম্পর্কে', 
      labelEn: 'About CampusDev',
      descBn: 'আমাদের শিক্ষা প্রযুক্তি মিশন, ভিশন ও অভিজ্ঞ টিম',
      descEn: 'Our specialized education technology mission and track record',
      icon: <GraduationCap className="w-4 h-4 text-sky-400" />
    },
    { 
      id: 'resources', 
      labelBn: 'রিসোর্স ও গাইড', 
      labelEn: 'Resources & Guides',
      descBn: 'স্কুল ওয়েবসাইট লঞ্চ চেকলিস্ট ও স্পিড অপ্টিমাইজেশন গাইড',
      descEn: 'Free academic website launch checklists and tech guides',
      badge: 'Free',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      icon: <FileCheck className="w-4 h-4 text-amber-400" />
    },
    { 
      id: 'contact', 
      labelBn: 'যোগাযোগ ও কোটেশন', 
      labelEn: 'Contact & Quote',
      descBn: 'সরাসরি প্রজেক্ট আলোচনা, অফিস ভিজিট বা হোয়াটসঅ্যাপ কল',
      descEn: 'Calculate estimates, visit our office, or chat on WhatsApp',
      icon: <Phone className="w-4 h-4 text-emerald-400" />
    },
  ];

  // Complete list for mobile drawer
  const allNavLinks = [
    ...primaryNavLinks,
    { id: 'admin-demo' as NavSection, labelBn: 'অ্যাডমিন ডেমো', labelEn: 'Admin Demo', badge: 'Live', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40', icon: <Cpu className="w-4 h-4" /> },
    { id: 'process' as NavSection, labelBn: 'কাজের ধাপ', labelEn: 'Process', icon: <Clock className="w-4 h-4" /> },
    { id: 'about' as NavSection, labelBn: 'আমাদের সম্পর্কে', labelEn: 'About', icon: <Building2 className="w-4 h-4" /> },
    { id: 'resources' as NavSection, labelBn: 'রিসোর্স ও গাইড', labelEn: 'Resources', icon: <FileCheck className="w-4 h-4" /> },
    { id: 'contact' as NavSection, labelBn: 'যোগাযোগ', labelEn: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSecondaryActive = secondaryNavLinks.some(item => item.id === currentSection);

  return (
    <>
      <header 
        id="top-main-navbar"
        className={`sticky top-0 z-40 w-full max-w-full transition-transform duration-300 ease-in-out will-change-transform ${
          isVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
        } ${
          isScrolled 
            ? 'bg-[#14342b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_36px_rgba(20,52,43,0.35)]' 
            : 'bg-[#14342b]/90 backdrop-blur-lg border-b border-white/10 shadow-lg'
        }`}
      >
        {/* Top Institutional Micro-Bar (Collapsible on scroll) */}
        


        {/* Main Navbar Bar */}
        <div 
          id="navbar-main-container"
          className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-[60px] sm:h-[68px] flex items-center justify-between gap-2 sm:gap-4 transition-all duration-200"
        >
          
          {/* Brand Logo (Dark Theme styling) */}
          <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
            <button 
              id="navbar-brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left focus:outline-none group cursor-pointer"
              aria-label="CampusDev Home"
            >
              <Logo size="responsive" theme="dark" />
            </button>
          </div>

          {/* Desktop & Laptop Navigation Links */}
          <nav 
            id="desktop-main-navigation"
            aria-label="Main Navigation" 
            className="hidden lg:flex items-center gap-1 bg-[#132337]/90 border border-sky-500/25 p-1.5 rounded-2xl shadow-inner backdrop-blur-md"
          >
            {/* Primary Nav Links */}
            {primaryNavLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#003B73] text-white font-extrabold shadow-[0_0_15px_rgba(0,59,115,0.6)] border border-sky-400/50'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{language === 'bn' ? link.labelBn : link.labelEn}</span>
                  {link.badge && (
                    <span className={`px-1.5 py-0.5 text-[9px] font-extrabold rounded-full uppercase tracking-wider ${link.badgeColor || 'bg-sky-500/20 text-sky-300 border border-sky-400/30'}`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* "More / আরো" Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="navbar-more-dropdown-btn"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  isSecondaryActive || moreDropdownOpen
                    ? 'bg-[#003B73] text-white font-extrabold shadow-[0_0_15px_rgba(0,59,115,0.6)] border border-sky-400/50'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>{language === 'bn' ? 'আরো মেনু' : 'More'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-sky-300' : 'text-slate-400'}`} />
                {isSecondaryActive && (
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                )}
              </button>

              {/* Desktop Dropdown Popover (High Contrast Ultra-Legible Dark Theme) */}
              {moreDropdownOpen && (
                <div 
                  id="navbar-more-dropdown-popover"
                  className="absolute top-full right-0 mt-3 w-84 bg-[#0F2238] border border-sky-500/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150 backdrop-blur-2xl"
                >
                  <div className="px-3 py-2 border-b border-sky-500/20 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-300 block">
                      {language === 'bn' ? 'অতিরিক্ত সেকশন ও টুলস' : 'Additional Sections & Tools'}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {secondaryNavLinks.map((item) => {
                      const isActive = currentSection === item.id;
                      return (
                        <button
                          key={item.id}
                          id={`dropdown-nav-link-${item.id}`}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full p-3 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer group ${
                            isActive 
                              ? 'bg-[#003B73] text-white font-extrabold border border-sky-400/60 shadow-[0_0_15px_rgba(0,59,115,0.5)]' 
                              : 'bg-[#152B44]/70 hover:bg-[#1C3859] border border-sky-500/20 hover:border-sky-400/40'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-105 ${
                            isActive ? 'bg-sky-500/30 text-white' : 'bg-sky-500/15 border border-sky-400/30 text-sky-300'
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-sm font-bold text-white group-hover:text-sky-200">
                                {language === 'bn' ? item.labelBn : item.labelEn}
                              </span>
                              {item.badge && (
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${item.badgeColor || 'bg-sky-500/20 text-sky-300 border-sky-400/30'}`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-200 font-medium line-clamp-1 mt-0.5">
                              {language === 'bn' ? item.descBn : item.descEn}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 flex-shrink-0">
            
            {/* Language Switcher Pill */}
            <button
              id="navbar-language-toggle-btn"
              onClick={onToggleLanguage}
              className="group relative flex items-center gap-1.5 p-1 rounded-full bg-[#132337] hover:bg-[#1A3452] border border-sky-500/30 transition-all duration-300 shadow-inner active:scale-95 cursor-pointer flex-shrink-0 select-none"
              aria-label="Toggle language between Bengali and English"
              title={language === 'bn' ? 'Switch to English' : 'বাংলা ভাষায় পরিবর্তন করুন'}
            >
              <div className="relative flex items-center justify-center pl-2">
                <Globe className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
              </div>

              <div className="relative flex items-center gap-0.5 bg-[#0C1929] p-0.5 rounded-full border border-sky-500/20 text-[11px] font-bold">
                <span
                  className={`relative px-2.5 py-0.5 rounded-full transition-all duration-300 flex items-center gap-1 ${
                    language === 'bn'
                      ? 'bg-[#003B73] text-white font-extrabold shadow-sm border border-sky-400/40'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {language === 'bn' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  <span>বাং</span>
                </span>

                <span
                  className={`relative px-2.5 py-0.5 rounded-full transition-all duration-300 flex items-center gap-1 ${
                    language === 'en'
                      ? 'bg-[#003B73] text-white font-extrabold shadow-sm border border-sky-400/40'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {language === 'en' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  <span>EN</span>
                </span>
              </div>
            </button>

            {/* Mobile / Tablet Menu Toggle Button */}
            <button
              id="navbar-mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white bg-[#132337] hover:bg-[#1A3452] border border-sky-500/30 active:scale-95 transition-all cursor-pointer flex items-center justify-center w-9 h-9 flex-shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Drawer Menu (High Contrast Dark Theme) */}
      {mobileMenuOpen && (
        <div 
          id="navbar-mobile-drawer-overlay"
          className="lg:hidden fixed inset-0 top-14 sm:top-16 z-50 bg-black/60 backdrop-blur-md flex flex-col justify-start animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div className="w-full bg-[#0C1929]/98 border-b border-sky-500/30 shadow-2xl rounded-b-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200 text-white">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-sky-500/20 gap-2">
              <Logo variant="compact" size="sm" theme="dark" />
              <button
                id="mobile-drawer-language-toggle-btn"
                onClick={onToggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#003B73] hover:bg-[#00529B] text-white text-xs font-extrabold shadow-sm border border-sky-400/40 cursor-pointer active:scale-95 flex-shrink-0"
                aria-label="Toggle language between Bengali and English"
              >
                <Globe className="w-3.5 h-3.5 text-sky-300" />
                <span className="text-xs text-white font-black">
                  {language === 'bn' ? 'বাং → EN' : 'EN → বাং'}
                </span>
              </button>
            </div>

            {/* Navigation Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {allNavLinks.map((link) => {
                const isActive = currentSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-[15px] font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#003B73] text-white font-black border border-sky-400/50 shadow-md scale-[1.01]'
                        : 'text-slate-200 hover:text-white bg-[#132337]/80 hover:bg-[#1A3452] border border-sky-500/20'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {link.icon && (
                        <span className={isActive ? 'text-sky-300' : 'text-sky-400'}>
                          {link.icon}
                        </span>
                      )}
                      <span className="text-white font-bold">
                        {language === 'bn' ? link.labelBn : link.labelEn}
                      </span>
                      {link.badge && (
                        <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md ${
                          isActive 
                            ? 'bg-sky-400/30 text-white border border-sky-300/40' 
                            : 'bg-sky-500/20 text-sky-300 border border-sky-400/30'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Action Center Inside Drawer */}
            <div className="pt-3.5 border-t border-sky-500/20 flex flex-col gap-3">
              <button
                id="mobile-drawer-audit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#152B44] hover:bg-[#1C3859] border border-sky-500/30 text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9.5 h-9.5 rounded-xl bg-[#003B73] text-white flex items-center justify-center flex-shrink-0 shadow-2xs border border-sky-400/30">
                    <Zap className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <span className="block text-white font-black text-xs sm:text-sm">
                      {language === 'bn' ? 'ফ্রি ওয়েবসাইট স্পিড ও এসইও অডিট' : 'Free Speed & SEO Audit Tool'}
                    </span>
                    <span className="text-[11px] font-semibold text-sky-300 block mt-0.5">
                      {language === 'bn' ? 'আপনার বর্তমান সাইটের স্কোর ১ মিনিটে পরীক্ষা করুন' : 'Test your institutional portal performance'}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-sky-300 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id="mobile-drawer-whatsapp-link"
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-400/30 text-xs font-black transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>{language === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</span>
                </a>

                <a
                  id="mobile-drawer-phone-link"
                  href="tel:+8801700000000"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#003B73] hover:bg-[#00529B] text-white border border-sky-400/30 text-xs font-black transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-sky-300" />
                  <span>{language === 'bn' ? 'কল করুন' : 'Direct Call'}</span>
                </a>
              </div>

              <button
                id="mobile-drawer-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-[#003B73] to-[#00529B] hover:from-[#004B8C] hover:to-[#0066C2] text-white text-sm font-black shadow-lg cursor-pointer transition-all active:scale-[0.99] border border-sky-400/40"
              >
                <Sparkles className="w-4 h-4 text-sky-200" />
                <span>{language === 'bn' ? 'ফ্রি প্ল্যানিং ও কনসালটেশন বুক করুন' : 'Book Free Strategy Consultation'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
