export type Language = 'bn' | 'en';

export type NavSection = 
  | 'home' 
  | 'services' 
  | 'works' 
  | 'demos' 
  | 'admin-demo' 
  | 'pricing' 
  | 'process' 
  | 'about' 
  | 'testimonials' 
  | 'blog' 
  | 'resources' 
  | 'audit' 
  | 'maintenance' 
  | 'contact';

export interface ServiceItem {
  id: string;
  category: 'school' | 'college' | 'madrasa' | 'custom' | 'maintenance';
  titleBn: string;
  titleEn: string;
  taglineBn: string;
  taglineEn: string;
  descriptionBn: string;
  descriptionEn: string;
  icon: string;
  featuresBn: string[];
  featuresEn: string[];
  recommendedForBn: string;
  recommendedForEn: string;
}

export interface CaseStudy {
  id: string;
  titleBn: string;
  titleEn: string;
  institutionBn: string;
  institutionEn: string;
  type: 'school' | 'college' | 'madrasa' | 'custom';
  categoryLabelBn: string;
  categoryLabelEn: string;
  locationBn: string;
  locationEn: string;
  image: string;
  summaryBn: string;
  summaryEn: string;
  challengeBn: string;
  challengeEn: string;
  goalsBn: string[];
  goalsEn: string[];
  solutionBn: string;
  solutionEn: string;
  techStack: string[];
  adminFeaturesBn: string[];
  adminFeaturesEn: string[];
  performanceMetrics: {
    speedScore: number;
    mobileIndex: number;
    loadTime: string;
    uptime: string;
  };
  resultsBn: string[];
  resultsEn: string[];
  testimonial?: {
    quoteBn: string;
    quoteEn: string;
    authorBn: string;
    authorEn: string;
    roleBn: string;
    roleEn: string;
  };
}

export interface PricingPlan {
  id: string;
  nameBn: string;
  nameEn: string;
  subtitleBn: string;
  subtitleEn: string;
  priceBn: string;
  priceEn: string;
  popular?: boolean;
  featuresBn: string[];
  featuresEn: string[];
  deliveryTimeBn: string;
  deliveryTimeEn: string;
  supportDurationBn: string;
  supportDurationEn: string;
  ctaTextBn: string;
  ctaTextEn: string;
}

export interface MaintenanceTier {
  id: string;
  nameBn: string;
  nameEn: string;
  descBn?: string;
  descEn?: string;
  priceBn: string;
  priceEn: string;
  frequencyBn: string;
  frequencyEn: string;
  popular?: boolean;
  featuresBn: string[];
  featuresEn: string[];
}

export interface Testimonial {
  id: string;
  nameBn: string;
  nameEn: string;
  roleBn: string;
  roleEn: string;
  institutionBn: string;
  institutionEn: string;
  avatar: string;
  quoteBn: string;
  quoteEn: string;
  rating: number;
}

export interface FaqItem {
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

export interface AuditReport {
  url: string;
  timestamp: string;
  scores: {
    performance: number;
    mobileUx: number;
    seo: number;
    accessibility: number;
    security: number;
  };
  keyFindings: {
    passed: string[];
    improvements: string[];
  };
}
