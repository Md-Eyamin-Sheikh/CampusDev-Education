'use client';
import React from 'react';
import { CaseStudy, Language } from '../types';
import { 
  X, 
  MapPin, 
  Award, 
  CheckCircle, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  Quote,
  Layers,
  ArrowRight
} from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  language: Language;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  language,
  onOpenConsultation
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Sticky Header with Close Button */}
        <div className="p-4 sm:p-6 bg-[#0e0520] text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 text-[11px] font-bold uppercase tracking-wider">
              {language === 'bn' ? caseStudy.categoryLabelBn : caseStudy.categoryLabelEn}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-violet-300" />
              <span>{language === 'bn' ? caseStudy.locationBn : caseStudy.locationEn}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Project Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-md h-64 sm:h-80">
            <img
              src={caseStudy.image}
              alt={caseStudy.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0520] via-[#0e0520]/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-balance">
                {language === 'bn' ? caseStudy.titleBn : caseStudy.titleEn}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-2xl leading-relaxed">
                {language === 'bn' ? caseStudy.summaryBn : caseStudy.summaryEn}
              </p>
            </div>
          </div>

          {/* Quantified Metrics Highlight Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-center">
              <p className="text-xs text-slate-500 font-medium">PageSpeed Score</p>
              <p className="text-2xl font-extrabold font-heading text-emerald-600">
                {caseStudy.performanceMetrics.speedScore}/100
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 font-medium">Mobile Usability</p>
              <p className="text-2xl font-extrabold font-heading text-fuchsia-400">
                {caseStudy.performanceMetrics.mobileIndex}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 font-medium">Page Load Speed</p>
              <p className="text-2xl font-extrabold font-heading text-[#0B1C30]">
                {caseStudy.performanceMetrics.loadTime}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-500 font-medium">Cloud Uptime</p>
              <p className="text-2xl font-extrabold font-heading text-indigo-600">
                {caseStudy.performanceMetrics.uptime}
              </p>
            </div>
          </div>

          {/* Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-100 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                <span>The Challenge (পূর্বের সমস্যা)</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {language === 'bn' ? caseStudy.challengeBn : caseStudy.challengeEn}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <span>The Solution (আমাদের সমাধান)</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {language === 'bn' ? caseStudy.solutionBn : caseStudy.solutionEn}
              </p>
            </div>
          </div>

          {/* Key Strategic Goals */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#0B1C30] mb-3">
              {language === 'bn' ? 'প্রজেক্টের প্রধান লক্ষ্যসমূহ:' : 'Key Project Objectives:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(language === 'bn' ? caseStudy.goalsBn : caseStudy.goalsEn).map((g, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800">{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Admin System & Tech Architecture */}
          <div className="p-6 rounded-2xl bg-[#0e0520] text-white space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-violet-300" />
                <span>{language === 'bn' ? 'অ্যাডমিন সিস্টেম ও প্রযুক্তি কাঠামো' : 'Admin System & Architecture'}</span>
              </h4>
              <div className="flex items-center gap-1.5">
                {caseStudy.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {(language === 'bn' ? caseStudy.adminFeaturesBn : caseStudy.adminFeaturesEn).map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
                  • {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Quantified Business Results */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#0B1C30] mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>{language === 'bn' ? 'বাস্তব ফলাফল ও অর্জন (Quantified Results):' : 'Quantified Results:'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(language === 'bn' ? caseStudy.resultsBn : caseStudy.resultsEn).map((res, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900">
                  ✓ {res}
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {caseStudy.testimonial && (
            <div className="p-6 rounded-2xl bg-fuchsia-950/20 border border-fuchsia-500/20 relative">
              <Quote className="w-8 h-8 text-violet-200 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                "{language === 'bn' ? caseStudy.testimonial.quoteBn : caseStudy.testimonial.quoteEn}"
              </p>
              <div>
                <p className="text-xs font-bold text-[#0B1C30]">
                  {language === 'bn' ? caseStudy.testimonial.authorBn : caseStudy.testimonial.authorEn}
                </p>
                <p className="text-[11px] text-slate-500">
                  {language === 'bn' ? caseStudy.testimonial.roleBn : caseStudy.testimonial.roleEn}, {language === 'bn' ? caseStudy.institutionBn : caseStudy.institutionEn}
                </p>
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              {language === 'bn' 
                ? 'আপনার শিক্ষা প্রতিষ্ঠানের জন্যও অনুরূপ আধুনিক ওয়েবসাইট তৈরি করতে প্রস্তুত?' 
                : 'Ready to build a similar high-performance platform for your school?'}
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-6 py-3 rounded-xl bg-[#0e0520] hover:bg-[#14213d] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{language === 'bn' ? 'ফ্রি কনসালটেশন বুক করুন' : 'Book Free Consultation'}</span>
              <ArrowRight className="w-4 h-4 text-violet-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
