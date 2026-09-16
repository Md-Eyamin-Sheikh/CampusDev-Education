'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Language, NavSection, CaseStudy } from '../types';
import { Navbar } from '../components/Navbar';
import { MobileBottomNav } from '../components/MobileBottomNav';
import { TabletBottomNav } from '../components/TabletBottomNav';
import { Footer } from '../components/Footer';
import { PageTransition } from '../components/PageTransition';
import { PWAInstallBanner } from '../components/PWAInstallBanner';
import { PullToRefresh } from '../components/PullToRefresh';

// ── Heavy views: dynamically loaded for faster initial paint ──────────────────
import { HomeView } from '../views/HomeView';
const ServicesView   = dynamic(() => import('../views/ServicesView').then(m => ({ default: m.ServicesView })), { ssr: false });
const WorksView      = dynamic(() => import('../views/WorksView').then(m => ({ default: m.WorksView })), { ssr: false });
const DemosView      = dynamic(() => import('../views/DemosView').then(m => ({ default: m.DemosView })), { ssr: false });
const PricingView    = dynamic(() => import('../views/PricingView').then(m => ({ default: m.PricingView })), { ssr: false });
const ProcessView    = dynamic(() => import('../views/ProcessView').then(m => ({ default: m.ProcessView })), { ssr: false });
const AboutView      = dynamic(() => import('../views/AboutView').then(m => ({ default: m.AboutView })), { ssr: false });
const BlogResourcesView = dynamic(() => import('../views/BlogResourcesView').then(m => ({ default: m.BlogResourcesView })), { ssr: false });
const ContactView    = dynamic(() => import('../views/ContactView').then(m => ({ default: m.ContactView })), { ssr: false });

// Modals — lazily loaded
const WebsiteAuditModal     = dynamic(() => import('../components/WebsiteAuditModal').then(m => ({ default: m.WebsiteAuditModal })), { ssr: false });
const ProjectEstimatorModal = dynamic(() => import('../components/ProjectEstimatorModal').then(m => ({ default: m.ProjectEstimatorModal })), { ssr: false });
const ConsultationModal     = dynamic(() => import('../components/ConsultationModal').then(m => ({ default: m.ConsultationModal })), { ssr: false });
const CaseStudyModal        = dynamic(() => import('../components/CaseStudyModal').then(m => ({ default: m.CaseStudyModal })), { ssr: false });

// Ordered nav sections for swipe navigation
const NAV_ORDER: NavSection[] = [
  'home', 'services', 'works', 'demos', 'pricing', 'process', 'about', 'resources', 'contact',
];

// ── Service Worker registration ───────────────────────────────────────────────
function useServiceWorker() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {/* silent */});
    }
  }, []);
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [language, setLanguage] = useState<Language>('bn');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Modals
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Swipe gesture refs
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  useServiceWorker();

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    setIsNavVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'bn' ? 'en' : 'bn');
  };

  // Pull-to-refresh handler
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await new Promise(res => setTimeout(res, 800));
    setIsRefreshing(false);
  }, []);

  // Scroll to top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  // YouTube-like scroll behavior: hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (currentScrollY <= 40) {
            setIsNavVisible(true);
          } else {
            const delta = currentScrollY - lastScrollY;
            if (Math.abs(delta) > 6) {
              setIsNavVisible(delta < 0);
            }
          }
          lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Horizontal swipe to navigate between sections ─────────────────────────
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - touchStartY.current);
    const SWIPE_MIN = 80;

    // Only horizontal swipe (not vertical scroll)
    if (Math.abs(dx) < SWIPE_MIN || dy > 60) return;

    const idx = NAV_ORDER.indexOf(currentSection);
    if (dx < 0 && idx < NAV_ORDER.length - 1) {
      // Swipe left → next section
      handleNavigate(NAV_ORDER[idx + 1]);
    } else if (dx > 0 && idx > 0) {
      // Swipe right → previous section
      handleNavigate(NAV_ORDER[idx - 1]);
    }
  }, [currentSection]);

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div
        className="min-h-screen bg-[#0a0312] text-white flex flex-col font-sans selection:bg-fuchsia-500/35 selection:text-white"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Navigation */}
        <Navbar
          currentSection={currentSection}
          onNavigate={handleNavigate}
          language={language}
          onToggleLanguage={toggleLanguage}
          onOpenAudit={() => setIsAuditOpen(true)}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          isVisible={isNavVisible}
        />

        {/* Main View Router — with page transition animation */}
        <main className="flex-1 pb-16 md:pb-16 lg:pb-0">
          <PageTransition section={currentSection}>
            {currentSection === 'home' && (
              <HomeView
                language={language}
                onNavigate={handleNavigate}
                onOpenConsultation={() => setIsConsultationOpen(true)}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
                onOpenAudit={() => setIsAuditOpen(true)}
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
              />
            )}
            {currentSection === 'services' && (
              <ServicesView
                language={language}
                onOpenConsultation={() => setIsConsultationOpen(true)}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
              />
            )}
            {currentSection === 'works' && (
              <WorksView
                language={language}
                onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}
            {currentSection === 'demos' && (
              <DemosView
                language={language}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}
            {currentSection === 'pricing' && (
              <PricingView
                language={language}
                onOpenConsultation={() => setIsConsultationOpen(true)}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
              />
            )}
            {currentSection === 'process' && (
              <ProcessView
                language={language}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}
            {currentSection === 'about' && (
              <AboutView
                language={language}
                onOpenConsultation={() => setIsConsultationOpen(true)}
              />
            )}
            {currentSection === 'resources' && (
              <BlogResourcesView
                language={language}
                onOpenAudit={() => setIsAuditOpen(true)}
                onOpenEstimator={() => setIsEstimatorOpen(true)}
              />
            )}
            {currentSection === 'contact' && (
              <ContactView language={language} />
            )}
          </PageTransition>
        </main>

        {/* Full Institutional Footer */}
        <Footer
          onNavigate={handleNavigate}
          language={language}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenAudit={() => setIsAuditOpen(true)}
        />

        {/* Mobile Bottom Bar */}
        <MobileBottomNav
          currentSection={currentSection}
          onNavigate={handleNavigate}
          language={language}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          isVisible={isNavVisible}
        />

        {/* Tablet Bottom Navigation Bar */}
        <TabletBottomNav
          currentSection={currentSection}
          onNavigate={handleNavigate}
          language={language}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          isVisible={isNavVisible}
        />

        {/* PWA Install Banner (mobile/tablet only) */}
        <PWAInstallBanner language={language} />

        {/* Interactive Modals */}
        <WebsiteAuditModal
          isOpen={isAuditOpen}
          onClose={() => setIsAuditOpen(false)}
          language={language}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
        <ProjectEstimatorModal
          isOpen={isEstimatorOpen}
          onClose={() => setIsEstimatorOpen(false)}
          language={language}
        />
        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          language={language}
        />
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          language={language}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      </div>
    </PullToRefresh>
  );
}
