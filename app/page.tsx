'use client';

import React, { useState, useEffect } from 'react';
import { Language, NavSection, CaseStudy } from '../types';
import { Navbar } from '../components/Navbar';
import { MobileBottomNav } from '../components/MobileBottomNav';
import { TabletBottomNav } from '../components/TabletBottomNav';
import { Footer } from '../components/Footer';
import { WebsiteAuditModal } from '../components/WebsiteAuditModal';
import { ProjectEstimatorModal } from '../components/ProjectEstimatorModal';
import { ConsultationModal } from '../components/ConsultationModal';
import { CaseStudyModal } from '../components/CaseStudyModal';

import { HomeView } from '../views/HomeView';
import { ServicesView } from '../views/ServicesView';
import { WorksView } from '../views/WorksView';
import { DemosView } from '../views/DemosView';
import { PricingView } from '../views/PricingView';
import { ProcessView } from '../views/ProcessView';
import { AboutView } from '../views/AboutView';
import { BlogResourcesView } from '../views/BlogResourcesView';
import { ContactView } from '../views/ContactView';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<NavSection>('home');
  const [language, setLanguage] = useState<Language>('bn');
  const [isNavVisible, setIsNavVisible] = useState(true);
  
  // Modals state
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    setIsNavVisible(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'bn' ? 'en' : 'bn');
  };

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

          // Always show when close to top of page
          if (currentScrollY <= 40) {
            setIsNavVisible(true);
          } else {
            const delta = currentScrollY - lastScrollY;
            // 6px threshold prevents jitters on subtle touches
            if (Math.abs(delta) > 6) {
              // Scrolling down (delta > 0) -> hide
              // Scrolling up (delta < 0) -> show
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

  return (
    <div className="min-h-screen bg-[#0a0312] text-white flex flex-col font-sans selection:bg-fuchsia-500/35 selection:text-white">
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

      {/* Main View Router */}
      <main className="flex-1 pb-16 md:pb-16 lg:pb-0">
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
          <ContactView
            language={language}
          />
        )}
      </main>

      {/* Full Institutional Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Mobile Ergonomic Bottom Bar */}
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
  );
}
