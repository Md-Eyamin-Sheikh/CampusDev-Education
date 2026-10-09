// ── Navigation sections — now map to real URL paths ────────────────
export type Language = 'bn' | 'en';

export type NavSection =
  | 'home'
  | 'services'
  | 'demos'
  | 'pricing'
  | 'estimator'
  | 'process'
  | 'about'
  | 'resources'
  | 'contact'
  | 'audit'
  | 'works'
  | 'maintenance'
  | 'admin-demo'
  | 'blog';

export interface CaseStudy {
  id: string;
  title?: string;
  titleBn?: string;
  titleEn?: string;
  category?: string;
  categoryLabelBn?: string;
  categoryLabelEn?: string;
  description?: string;
  summaryBn?: string;
  summaryEn?: string;
  image?: string;
  stats?: { label: string; value: string }[];
  tags?: string[];
  metrics?: { label: string; value: string }[];
  client?: string;
  location?: string;
  locationBn?: string;
  locationEn?: string;
  type?: string;
  highlights?: string[];
  goalsBn?: string[];
  goalsEn?: string[];
  techStack?: string[];
  adminFeaturesBn?: string[];
  adminFeaturesEn?: string[];
  resultsBn?: string[];
  resultsEn?: string[];
  performanceMetrics?: { speedScore: number; mobileIndex: number; loadTime: string; uptime: string };
  challengeBn?: string;
  challengeEn?: string;
  solutionBn?: string;
  solutionEn?: string;
  institutionBn?: string;
  institutionEn?: string;
  testimonial?: {
    quote?: string;
    quoteBn?: string;
    quoteEn?: string;
    author?: string;
    authorBn?: string;
    authorEn?: string;
    role?: string;
    roleBn?: string;
    roleEn?: string;
  };
}

export type InstitutionType =
  | 'school'
  | 'college'
  | 'madrasa'
  | 'coaching'
  | 'kindergarten'
  | 'technical'
  | 'other';

// ── CMS entity types (mirrors Sheets schema §6.4) ──────────────────

export interface SiteSettings {
  key: string;
  valueBn: string;
  valueEn: string;
  type: string;
  notes: string;
}

export interface Service {
  id: string;
  slug: string;
  status: 'published' | 'draft';
  sort: number;
  institutionType: InstitutionType | 'all';
  titleBn: string;
  titleEn: string;
  summaryBn: string;
  summaryEn: string;
  icon: string;
  featuresBn: string[];
  featuresEn: string[];
  updatedAt: string;
}

export interface Package {
  id: string;
  status: 'published' | 'draft';
  sort: number;
  tier: string;
  nameBn: string;
  nameEn: string;
  priceFromBdt: number;
  billing: 'one_time' | 'monthly';
  deliveryDays: number;
  featuresBn: string[];
  featuresEn: string[];
  highlight: boolean;
  ctaLabelBn: string;
  ctaLabelEn: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  status: 'published' | 'draft';
  sort: number;
  institutionNameBn: string;
  institutionNameEn: string;
  institutionType: InstitutionType;
  district: string;
  projectType: string;
  summaryBn: string;
  summaryEn: string;
  liveUrl: string;
  thumbnailUrl: string;
  tags: string[];
  verified: boolean;
  permissionToPublish: boolean;
  completedOn: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  status?: 'published' | 'draft';
  sort?: number;
  quoteBn?: string;
  quoteEn?: string;
  authorName?: string;
  authorRole?: string;
  institutionName?: string;
  consentGiven?: boolean;
  consentDate?: string;
  rating?: number;
  nameBn?: string;
  nameEn?: string;
  roleBn?: string;
  roleEn?: string;
  institutionBn?: string;
  institutionEn?: string;
  avatar?: string;
}

export interface FAQ {
  id: string;
  status: 'published' | 'draft';
  sort: number;
  category: 'pricing' | 'timeline' | 'ownership' | 'support' | 'hosting';
  questionBn: string;
  questionEn: string;
  answerBn: string;
  answerEn: string;
}

// Backward-compatibility aliases for content.ts
export type ServiceItem = any;
export type PricingPlan = any;
export type MaintenanceTier = any;
export type FaqItem = any;

// ── CRM entity types (mirrors Sheets schema §6.5) ──────────────────

export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Demo_Sent'
  | 'Proposal'
  | 'Negotiation'
  | 'Won'
  | 'Lost'
  | 'Nurture';

export type LeadSource =
  | 'website_form'
  | 'estimator'
  | 'audit'
  | 'whatsapp'
  | 'facebook'
  | 'outbound'
  | 'referral';

export interface Lead {
  leadId: string;
  createdAt: string;
  source: LeadSource;
  status: LeadStatus;
  fullName: string;
  role: string;
  institutionName: string;
  institutionType: InstitutionType;
  district: string;
  upazila?: string;
  phoneE164: string;
  whatsappSame: boolean;
  email?: string;
  message?: string;
  preferredTime?: string;
  language: Language;
  landingPage?: string;
  utmSource?: string;
  utmCampaign?: string;
  consentGiven: boolean;
  consentAt: string;
}

// ── Form input types (subset of Lead used for form submission) ──────

export interface LeadFormInput {
  fullName: string;
  role: string;
  institutionName: string;
  institutionType: InstitutionType;
  district: string;
  phone: string;
  whatsappSame: boolean;
  email?: string;
  message?: string;
  preferredTime?: string;
  language: Language;
  consentGiven: true;
  honeypot?: string;
  turnstileToken: string;
}

export interface EstimateFormInput {
  institutionType: InstitutionType;
  sizeBand: 'small' | 'medium' | 'large';
  modules: string[];
  languages: Language[];
  deadlinePref?: string;
  phone: string;
  consentGiven: true;
  honeypot?: string;
  turnstileToken: string;
}

export interface AuditFormInput {
  websiteUrl: string;
  institutionName: string;
  phone: string;
  consentGiven: true;
  honeypot?: string;
  turnstileToken: string;
}

// ── API Response types ─────────────────────────────────────────────

export interface ApiSuccess<T = Record<string, unknown>> {
  ok: true;
  id?: string;
  data?: T;
}

export interface ApiError {
  ok: false;
  code: 'VALIDATION' | 'RATE_LIMIT' | 'TEMPORARY' | 'BOT' | 'UNAUTHORIZED';
  message: string;
  errors?: unknown;
}

export type ApiResponse<T = Record<string, unknown>> = ApiSuccess<T> | ApiError;
