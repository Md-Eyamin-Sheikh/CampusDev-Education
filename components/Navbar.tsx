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
  HelpCircle,
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
  }[] = [
    { id: 'home', labelBn: 'হোম', labelEn: 'Home' },
    { id: 'services', labelBn: 'সার্ভিসেস', labelEn: 'Services' },
    { id: 'works', labelBn: 'কাজের নমুনা', labelEn: 'Works' },
    { id: 'demos', labelBn: 'লাইভ ডেমো', labelEn: 'Demos' },
    { id: 'pricing', labelBn: 'প্যাকেজ', labelEn: 'Pricing' },
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
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: <Laptop className="w-4 h-4 text-fuchsia-400" />
    },
    { 
      id: 'process', 
      labelBn: 'কাজের ধাপ', 
      labelEn: 'Development Process',
      descBn: 'রিকোয়ারমেন্ট থেকে লাইভ লঞ্চ পর্যন্ত ৬টি স্বচ্ছ ধাপ',
      descEn: 'From requirements to live campus rollout in 6 clear steps',
      icon: <Layers className="w-4 h-4 text-fuchsia-500" />
    },
    { 
      id: 'about', 
      labelBn: 'আমাদের সম্পর্কে', 
      labelEn: 'About CampusDev',
      descBn: 'আমাদের শিক্ষা প্রযুক্তি মিশন, ভিশন ও অভিজ্ঞ টিম',
      descEn: 'Our specialized education technology mission and track record',
      icon: <GraduationCap className="w-4 h-4 text-indigo-600" />
    },
    { 
      id: 'resources', 
      labelBn: 'রিসোর্স ও গাইড', 
      labelEn: 'Resources & Guides',
      descBn: 'স্কুল ওয়েবসাইট লঞ্চ চেকলিস্ট ও স্পিড অপ্টিমাইজেশন গাইড',
      descEn: 'Free academic website launch checklists and tech guides',
      badge: 'Free',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: <FileCheck className="w-4 h-4 text-amber-600" />
    },
    { 
      id: 'contact', 
      labelBn: 'যোগাযোগ ও কোটেশন', 
      labelEn: 'Contact & Quote',
      descBn: 'সরাসরি প্রজেক্ট আলোচনা, অফিস ভিজিট বা হোয়াটসঅ্যাপ কল',
      descEn: 'Calculate estimates, visit our office, or chat on WhatsApp',
      icon: <Phone className="w-4 h-4 text-emerald-600" />
    },
  ];

  // Complete list for mobile drawer
  const allNavLinks = [
    ...primaryNavLinks,
    { id: 'admin-demo' as NavSection, labelBn: 'অ্যাডমিন ডেমো', labelEn: 'Admin Demo', badge: 'Live', badgeColor: 'bg-emerald-100 text-emerald-800' },
    { id: 'process' as NavSection, labelBn: 'কাজের ধাপ', labelEn: 'Process' },
    { id: 'about' as NavSection, labelBn: 'আমাদের সম্পর্কে', labelEn: 'About' },
    { id: 'resources' as NavSection, labelBn: 'রিসোর্স ও গাইড', labelEn: 'Resources' },
    { id: 'contact' as NavSection, labelBn: 'যোগাযোগ', labelEn: 'Contact' },
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
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_8px_30px_-6px_rgba(11,28,48,0.08)]' 
            : 'bg-white/90 backdrop-blur-lg border-b border-slate-200/75 shadow-xs'
        }`}
      >
        {/* Top Institutional Micro-Bar (Collapsible on scroll) */}
        <div 
          className={`w-full bg-[#0e0520] text-slate-300 text-[10px] sm:text-[11px] font-medium transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 py-0 border-b-0 opacity-0' : 'max-h-12 py-1 sm:py-1.5 border-b border-slate-800 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
            {/* Left Trust Statement */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 truncate min-w-0">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold truncate">
                <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                <span className="truncate">{language === 'bn' ? 'শিক্ষা বোর্ড ও সরকারি স্ট্যান্ডার্ড অনুসারী' : 'Education Board Web Standards Compliant'}</span>
              </span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden md:inline text-slate-300 truncate">
                {language === 'bn' ? '৫০+ শিক্ষা প্রতিষ্ঠানে সফলভাবে বাস্তবায়িত' : 'Trusted by 50+ Educational Institutions in Bangladesh'}
              </span>
            </div>

            {/* Right Quick Contacts */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 text-slate-300">
              <a 
                href="tel:+8801700000000" 
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-violet-300" />
                <span className="font-mono font-semibold">+880 1700-000000</span>
              </a>
              <span className="hidden sm:inline text-slate-600">|</span>
              <div className="flex items-center gap-1 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">{language === 'bn' ? 'সাপোর্ট ২৪/৭' : '24/7 Support'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top subtle institutional status hair-line */}
        <div className="w-full h-[2px] sm:h-[2.5px] bg-gradient-to-r from-fuchsia-500 via-violet-300 to-emerald-500" />

        {/* Main Navbar Bar (Target selector: div#root > div > header#top-main-navbar > div:nth-of-type(3)) */}
        <div 
          id="navbar-main-container"
          className="max-w-7xl mx-auto px-2.5 sm:px-5 lg:px-8 h-14 sm:h-18 lg:h-[74px] flex items-center justify-between gap-1 sm:gap-4 transition-all duration-200"
        >
          
          {/* Brand Logo & Educational Status Tag */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink min-w-0">
            <button 
              id="navbar-brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-1.5 text-left focus:outline-none group cursor-pointer min-w-0"
              aria-label="CampusDev Home"
            >
              <Logo size="responsive" />
            </button>

            {/* <span className="hidden 2xl:inline-flex items-center gap-1.5 text-[10px] font-bold text-fuchsia-400 bg-fuchsia-950/20 border border-fuchsia-500/20 px-2.5 py-1 rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>EduTech Lab</span>
            </span> */}
          </div>

          {/* Desktop & Laptop Navigation Links (Responsive from lg 1024px+) */}
          <nav 
            id="desktop-main-navigation"
            aria-label="Main Navigation" 
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/80 hover:bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 shadow-2xs transition-all flex-shrink"
          >
            {/* Primary Nav Links */}
            {primaryNavLinks.map((link) => {
              const isActive = currentSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 xl:px-3.5 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'premium-nav-active text-fuchsia-400 font-bold shadow-xs border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span>{language === 'bn' ? link.labelBn : link.labelEn}</span>
                  {link.badge && (
                    <span className={`px-1.5 py-0.2 text-[9px] font-extrabold rounded-full uppercase tracking-wider ${link.badgeColor || 'bg-fuchsia-950/30 text-fuchsia-400'}`}>
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
                className={`px-2.5 xl:px-3 py-1.5 rounded-xl text-xs xl:text-[13px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1 whitespace-nowrap ${
                  isSecondaryActive || moreDropdownOpen
                    ? 'premium-nav-active text-fuchsia-400 font-bold shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>{language === 'bn' ? 'আরো মেনু' : 'More'}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-fuchsia-400' : ''}`} />
                {isSecondaryActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                )}
              </button>

              {/* Desktop Dropdown Popover */}
              {moreDropdownOpen && (
                <div 
                  id="navbar-more-dropdown-popover"
                  className="absolute top-full right-0 mt-2.5 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {language === 'bn' ? 'অতিরিক্ত সেকশন ও টুলস' : 'Additional Sections & Tools'}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    {secondaryNavLinks.map((item) => {
                      const isActive = currentSection === item.id;
                      return (
                        <button
                          key={item.id}
                          id={`dropdown-nav-link-${item.id}`}
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-3 cursor-pointer group ${
                            isActive 
                              ? 'bg-fuchsia-950/20 text-fuchsia-400 font-semibold border border-fuchsia-900/20' 
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isActive ? 'bg-white shadow-xs' : 'bg-slate-100 group-hover:bg-white group-hover:shadow-2xs'
                          }`}>
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-slate-900 group-hover:text-fuchsia-400">
                                {language === 'bn' ? item.labelBn : item.labelEn}
                              </span>
                              {item.badge && (
                                <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-full border ${item.badgeColor || 'bg-fuchsia-950/20 text-fuchsia-400 border-fuchsia-500/20'}`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
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

          {/* Right Action Items - Fully Adaptive for Mobile, Tablet, Laptop & Desktop */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 flex-shrink-0">
            
            {/* Free Audit Button - Desktop & Tablet */}
            {/* <button
              id="navbar-free-audit-btn"
              onClick={onOpenAudit}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100/90 hover:bg-fuchsia-950/20 hover:text-fuchsia-400 hover:border-fuchsia-500/20 border border-slate-200/90 transition-all cursor-pointer shadow-2xs active:scale-95 whitespace-nowrap"
              title={language === 'bn' ? 'বর্তমান স্কুল ওয়েবসাইট স্পিড ও এসইও অডিট করুন' : 'Test your current school website speed and mobile readiness'}
            >
              <div className="relative">
                <Zap className="w-3.5 h-3.5 text-fuchsia-400" />
                <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-fuchsia-400 rounded-full animate-ping" />
              </div>
              <span>{language === 'bn' ? 'ফ্রি স্পিড অডিট' : 'Free Speed Audit'}</span>
            </button> */}

            {/* Ultra-Premium Glass Language Switcher Pill */}
            <button
              id="navbar-language-toggle-btn"
              onClick={onToggleLanguage}
              className="group relative flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-slate-900/90 hover:bg-slate-950 backdrop-blur-md border border-fuchsia-500/30 hover:border-fuchsia-400/60 transition-all duration-300 shadow-[0_2px_12px_rgba(14,5,32,0.15)] hover:shadow-[0_0_18px_rgba(217,70,239,0.25)] active:scale-95 cursor-pointer flex-shrink-0 select-none overflow-hidden"
              aria-label="Toggle language between Bengali and English"
              title={language === 'bn' ? 'Switch to English (ইংরেজি)' : 'বাংলা ভাষায় পরিবর্তন করুন'}
            >
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/10 via-violet-600/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Glowing Animated Globe Icon */}
              <div className="relative flex items-center justify-center pl-1 sm:pl-1.5">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-fuchsia-400 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0 drop-shadow-[0_0_6px_rgba(217,70,239,0.6)]" />
              </div>

              {/* Segmented Switcher Pill Track */}
              <div className="relative flex items-center gap-0.5 bg-slate-950/80 p-0.5 rounded-full border border-slate-800/80 text-[10px] sm:text-[11px] font-bold">
                {/* Bangla Pill Option */}
                <span
                  className={`relative px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full transition-all duration-300 flex items-center gap-1 ${
                    language === 'bn'
                      ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-violet-600 text-white font-extrabold shadow-[0_0_10px_rgba(217,70,239,0.5)] border border-fuchsia-400/40 scale-100'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {language === 'bn' && (
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  <span>বাং</span>
                </span>

                {/* English Pill Option */}
                <span
                  className={`relative px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full transition-all duration-300 flex items-center gap-1 ${
                    language === 'en'
                      ? 'bg-gradient-to-r from-fuchsia-600 via-fuchsia-500 to-violet-600 text-white font-extrabold shadow-[0_0_10px_rgba(217,70,239,0.5)] border border-fuchsia-400/40 scale-100'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {language === 'en' && (
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  <span>EN</span>
                </span>
              </div>
            </button>

            {/* WhatsApp Direct Help Link */}
            {/* <a
              id="navbar-whatsapp-direct-link"
              href="https://wa.me/8801700000000?text=Hello%20CampusDev,%20I%20am%20interested%20in%20a%20website%20for%20our%20educational%20institution."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50/90 hover:bg-emerald-100 border border-emerald-200/90 transition-all shadow-2xs hover:shadow-xs active:scale-95 whitespace-nowrap"
              title="Chat directly on WhatsApp with our education consultants"
            >
              <div className="relative">
                <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-600" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <span className="hidden 2xl:inline">{language === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</span>
              <span className="2xl:hidden">{language === 'bn' ? 'চ্যাট' : 'Chat'}</span>
            </a> */}

            {/* Free Consultation CTA (Primary) - Scaled for mobile */}
            {/* <button
              id="navbar-consultation-cta-btn"
              onClick={onOpenConsultation}
              className="premium-primary inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-4 lg:px-4.5 xl:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] xs:text-xs sm:text-sm font-bold text-white hover:shadow-lg hover:shadow-fuchsia-900/25 active:scale-95 shadow-xs sm:shadow-md transition-all cursor-pointer whitespace-nowrap border group flex-shrink-0"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-violet-300 group-hover:rotate-12 transition-transform flex-shrink-0" />
              <span className="hidden sm:inline">{language === 'bn' ? 'ফ্রি কনসালটেশন' : 'Free Consultation'}</span>
              <span className="sm:hidden">{language === 'bn' ? 'পরামর্শ' : 'Consult'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-violet-300 hidden xl:inline group-hover:translate-x-0.5 transition-transform" />
            </button> */}

            {/* Mobile / Tablet Menu Button (Visible < lg 1024px) */}
            <button
              id="navbar-mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 active:scale-95 transition-all cursor-pointer flex items-center justify-center w-8 h-8 xs:w-8.5 xs:h-8.5 sm:w-9 sm:h-9 flex-shrink-0"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="navbar-mobile-drawer-overlay"
          className="lg:hidden fixed inset-0 top-14 sm:top-18 z-50 bg-slate-900/60 backdrop-blur-md flex flex-col justify-start animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div className="w-full bg-white border-b border-slate-200 shadow-2xl rounded-b-3xl max-h-[85vh] overflow-y-auto p-4 sm:p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            
            {/* Institution Badge & Language Switcher in Drawer Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <ShieldCheck className="w-4 h-4 text-fuchsia-500 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800 truncate">
                  {language === 'bn' ? 'স্পেশালাইজড শিক্ষা প্ল্যাটফর্ম' : 'Specialized Education Platform'}
                </span>
              </div>
              <button
                id="mobile-drawer-language-toggle-btn"
                onClick={onToggleLanguage}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold border border-fuchsia-500/30 shadow-xs cursor-pointer active:scale-95 flex-shrink-0"
                aria-label="Toggle language between Bengali and English"
              >
                <Globe className="w-3.5 h-3.5 text-fuchsia-400" />
                <span className="text-[11px] text-fuchsia-300 font-black">
                  {language === 'bn' ? 'বাং → EN' : 'EN → বাং'}
                </span>
              </button>
            </div>

            {/* Navigation Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {allNavLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    currentSection === link.id
                      ? 'bg-fuchsia-950/20 text-fuchsia-400 font-bold border border-fuchsia-500/20 shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{language === 'bn' ? link.labelBn : link.labelEn}</span>
                    {link.badge && (
                      <span className={`px-1.5 py-0.5 text-[9px] font-extrabold rounded-md ${link.badgeColor || 'bg-fuchsia-950/30 text-fuchsia-400'}`}>
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            {/* Quick Action Center Inside Drawer */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              
              {/* Audit Tool Card */}
              <button
                id="mobile-drawer-audit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit();
                }}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-fuchsia-950/20 to-slate-50 border border-fuchsia-900/20 text-slate-800 text-xs sm:text-sm font-bold shadow-2xs hover:border-fuchsia-500/30 transition-all cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-fuchsia-950/30 text-fuchsia-400 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-slate-900 font-bold">
                      {language === 'bn' ? 'ফ্রি ওয়েবসাইট স্পিড ও এসইও অডিট' : 'Free Speed & SEO Audit Tool'}
                    </span>
                    <span className="text-[11px] font-normal text-slate-500 block">
                      {language === 'bn' ? 'আপনার বর্তমান সাইটের স্কোর ১ মিনিটে পরীক্ষা করুন' : 'Test your institutional portal performance'}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-fuchsia-400 flex-shrink-0" />
              </button>

              {/* WhatsApp and Direct Phone Contact Row */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  id="mobile-drawer-whatsapp-link"
                  href="https://wa.me/8801700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}</span>
                </a>

                <a
                  id="mobile-drawer-phone-link"
                  href="tel:+8801700000000"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-fuchsia-400" />
                  <span>{language === 'bn' ? 'কল করুন' : 'Direct Call'}</span>
                </a>
              </div>

              {/* Free Consultation Main Button */}
              <button
                id="mobile-drawer-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="premium-primary w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white text-xs sm:text-sm font-bold shadow-md cursor-pointer transition-all active:scale-[0.99]"
              >
                <Sparkles className="w-4 h-4 text-violet-300" />
                <span>{language === 'bn' ? 'ফ্রি প্ল্যানিং ও কনসালটেশন বুক করুন' : 'Book Free Strategy Consultation'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

