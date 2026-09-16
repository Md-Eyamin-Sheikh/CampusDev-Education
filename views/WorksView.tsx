'use client';
import React, { useState } from 'react';
import { Language, CaseStudy } from '../types';
import { FEATURED_PROJECTS } from '../data/content';
import { 
  Filter, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Zap, 
  ExternalLink,
  Search
} from 'lucide-react';

interface WorksViewProps {
  language: Language;
  onSelectCaseStudy: (study: CaseStudy) => void;
  onOpenConsultation: () => void;
}

export const WorksView: React.FC<WorksViewProps> = ({
  language,
  onSelectCaseStudy,
  onOpenConsultation
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'school' | 'college' | 'madrasa' | 'custom'>('all');

  const filteredProjects = activeFilter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.type === activeFilter);

  const filterButtons: { id: 'all' | 'school' | 'college' | 'madrasa' | 'custom'; labelBn: string; labelEn: string }[] = [
    { id: 'all', labelBn: 'সকল প্রজেক্ট', labelEn: 'All Projects' },
    { id: 'school', labelBn: 'স্কুল ওয়েবসাইট', labelEn: 'Schools' },
    { id: 'college', labelBn: 'কলেজ পোর্টাল', labelEn: 'Colleges' },
    { id: 'madrasa', labelBn: 'মাদ্রাসা তথ্যকোষ', labelEn: 'Madrasas' },
    { id: 'custom', labelBn: 'ক্যাডেট ও একাডেমি', labelEn: 'Cadet & Academies' },
  ];

  return (
    <div className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-950/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'বাস্তব সফল প্রজেক্টসমূহ' : 'Featured Case Studies'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1C30]">
            {language === 'bn' 
              ? 'আমাদের তৈরিকৃত শিক্ষা প্রতিষ্ঠানের পোর্টফোলিও' 
              : 'Our Education Solutions Portfolio & Results'}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            {language === 'bn'
              ? 'বাস্তব প্রতিষ্ঠানের চ্যালেঞ্জ, আমাদের প্রযুক্তিগত সমাধান এবং পরিমাপযোগ্য ফলাফল বিস্তারিতভাবে দেখুন।'
              : 'Discover how we transformed academic institutions across Bangladesh with modern, mobile-first architectures.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map((btn) => {
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0e0520] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {language === 'bn' ? btn.labelBn : btn.labelEn}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-fuchsia-500/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Frame */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0520]/85 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0e0520]/90 backdrop-blur-md text-violet-300 text-[11px] font-bold">
                      {language === 'bn' ? project.categoryLabelBn : project.categoryLabelEn}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-violet-300" />
                      <span>{language === 'bn' ? project.locationBn : project.locationEn}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading leading-tight">
                      {language === 'bn' ? project.titleBn : project.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {language === 'bn' ? project.summaryBn : project.summaryEn}
                  </p>

                  {/* Highlight Result Callout */}
                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs">
                    <p className="font-bold text-emerald-900">
                      ফলাফল: {language === 'bn' ? project.resultsBn[0] : project.resultsEn[0]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 pt-4">
                <button
                  onClick={() => onSelectCaseStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-fuchsia-400 hover:underline cursor-pointer"
                >
                  <span>{language === 'bn' ? 'সম্পূর্ণ কেস স্টাডি পড়ুন' : 'View Full Case Study'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectCaseStudy(project)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#0e0520] hover:text-white text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  {language === 'bn' ? 'প্রজেক্ট মেট্রিক্স' : 'View Metrics'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="p-8 rounded-3xl bg-[#0e0520] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold font-heading">
              {language === 'bn' ? 'আপনার প্রতিষ্ঠানের জন্য এমন একটি প্ল্যাটফর্ম তৈরি করতে চান?' : 'Ready to Elevate Your Academic Institution?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              {language === 'bn'
                ? 'আমাদের অভিজ্ঞ টিম আপনার প্রয়োজন অনুযায়ী কাস্টম ডেমো ও প্রজেক্ট রোডম্যাপ প্রস্তুত করে দেবে।'
                : 'Our engineers will assemble a tailored scope, prototype structure, and investment plan.'}
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-xs sm:text-sm font-bold whitespace-nowrap shadow-md cursor-pointer transition-colors"
          >
            {language === 'bn' ? 'ফ্রি প্ল্যানিং কল বুক করুন' : 'Schedule Free Strategy Call'}
          </button>
        </div>
      </div>
    </div>
  );
};
