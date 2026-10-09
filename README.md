<div align="center">

# 🎓 EduWeb — শিক্ষাপ্রতিষ্ঠান ডিজিটাল সল্যুশন প্ল্যাটফর্ম

![EduWeb Banner](https://img.shields.io/badge/EduWeb-শিক্ষা%20%26%20প্রযুক্তি-0F2D25?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-1B7A4F?style=for-the-badge&logo=pwa&logoColor=white)

**বাংলাদেশের স্কুল, কলেজ, মাদ্রাসা ও একাডেমিগুলোর জন্য আধুনিক, প্রিমিয়াম, PWA-ready ডিজিটাল সল্যুশন।**

> 📚 **Education (শিক্ষা)** ✕ 🌐 **Web Technology (প্রযুক্তি)** = **EduWeb**

</div>

---

## 📋 বিষয়সূচি

- [প্রজেক্ট সম্পর্কে](#-প্রজেক্ট-সম্পর্কে)
- [ব্র্যান্ড পরিচয় ও ডিজাইন সিস্টেম](#-ব্র্যান্ড-পরিচয়-ও-ডিজাইন-সিস্টেম)
- [প্রজেক্ট আর্কিটেকচার ও ডিরেক্টরি](#-প্রজেক্ট-আর্কিটেকচার-ও-ডিরেক্টরি)
- [ডেটা আর্কিটেকচার (Google Sheets Backend)](#-ডেটা-আর্কিটেকচার-google-sheets-backend)
- [API এন্ডপয়েন্ট ও সিকিউরিটি](#-api-এন্ডপয়েন্ট-ও-সিকিউরিটি)
- [পরিবেশ কনফিগারেশন (.env.local)](#-পরিবেশ-কনফিগারেশন-envlocal)
- [লোকাল ডেভেলপমেন্ট ও ডিপ্লয়মেন্ট](#-লোকাল-ডেভেলপমেন্ট-ও-ডিপ্লয়মেন্ট)

---

## 🌟 প্রজেক্ট সম্পর্কে

**EduWeb** হলো বাংলাদেশের শিক্ষাপ্রতিষ্ঠানগুলোর (উচ্চ বিদ্যালয়, সরকারি/বেসরকারি কলেজ, কওমি ও আলিয়া মাদ্রাসা, কারিগরি ইনস্টিটিউট ও কোচিং সেন্টার) জন্য একটি **মোবাইল-ফার্স্ট এজেন্সী ওয়েব অ্যাপ্লিকেশন (PWA)**। 

Next.js 16 App Router এবং React 19 প্রযুক্তি দ্বারা তৈরি এই প্ল্যাটফর্মটির ওয়েবসাইট কনটেন্ট (CMS) এবং গ্রাহকের লিড ও যোগাযোগ সংক্রান্ত তথ্য (CRM) ব্যাকএন্ড হিসেবে **Google Sheets API** ব্যবহার করে পরিচালিত হয়।

### মূল ফিচারসমূহ:
- 🏫 **প্রতিষ্ঠান-নির্দিষ্ট কাস্টম সল্যুশন:** স্কুল, কলেজ, মাদ্রাসা, কোচিং ও কারিগরি প্রতিষ্ঠানের জন্য পৃথক ফিচার সেগমেন্ট।
- 📱 **PWA & Mobile-First Nav:** মোবাইলে অ্যাপের মতো ফিক্সড বটম নেভিগেশন, অফলাইন ফলব্যাক পেজ ও ইনস্টলেশন প্রম্পট।
- 📊 **গুগল শিট CMS/CRM:** ডাটাবেজের খরচ ছাড়াই গুগল শিটের মাধ্যমে ওয়েবসাইট ডাইনামিক কনটেন্ট পরিচালনা ও লিড সংরক্ষণ।
- 💬 **ইন্টারেক্টিভ ক্যালকুলেটর ও ফর্ম:** প্রজেক্ট এস্টিমেটর, ফ্রি অডিট রিকোয়েস্ট ও ইনস্ট্যান্ট টেলিগ্রাম অ্যালার্ট।
- ⚡ **Next.js 16 caching & PPR:** `use cache`, `cacheTag('cms')` ও On-demand Revalidation আর্কিটেকচার।

---

## 🎨 ব্র্যান্ড পরিচয় ও ডিজাইন সিস্টেম

### 🌿 কালার প্যালেট (Brand System v1.0)

| টোকেন | হেক্স কোড | রঙ | ব্যবহার |
|-------|----------|----|--------|
| `--pine-900` / Ink | `#0F2D25` | ![#0F2D25](https://img.shields.io/badge/-%230F2D25-0F2D25?style=flat-square) | Deep Chalkboard Pine — হেডিং, ডার্ক সারফেস, ফুটার |
| `--emerald-600` / Brand | `#1B7A4F` | ![#1B7A4F](https://img.shields.io/badge/-%231B7A4F-1B7A4F?style=flat-square) | Scholar Emerald — প্রিকমারারি বাটন, প্রাইমারি লিংক, ব্যাজ |
| `--gold-500` / Accent | `#C9A24B` | ![#C9A24B](https://img.shields.io/badge/-%23C9A24B-C9A24B?style=flat-square) | Antique Gold — প্রাইসিং হাইলাইট, স্টার রেটিং, ইম্পরটেন্ট ট্যাগ |
| `--mint-300` / Soft | `#7FD1A6` | ![#7FD1A6](https://img.shields.io/badge/-%237FD1A6-7FD1A6?style=flat-square) | Mint Wash — ডার্ক সারফেসে টেক্সট ও সফট ব্যাকগ্রাউন্ড |
| `--paper-50` / Body | `#F6F7F3` | ![#F6F7F3](https://img.shields.io/badge/-%23F6F7F3-F6F7F3?style=flat-square) | Cream Paper — মেইন অ্যাপ বডি ব্যাকগ্রাউন্ড |

---

## 🏗️ প্রজেক্ট আর্কিটেকচার ও ডিরেক্টরি

```
next-app/
├── app/                        # Next.js 16 App Router
│   ├── about/                  # /about - আমাদের সম্পর্কে
│   ├── api/                    # API Route Handlers
│   │   ├── audit/route.ts      # POST /api/audit (Audit request)
│   │   ├── estimates/route.ts  # POST /api/estimates (Project estimator)
│   │   ├── health/route.ts     # GET /api/health (System status check)
│   │   ├── leads/route.ts      # POST /api/leads (Consultation / lead form)
│   │   └── revalidate/route.ts # POST /api/revalidate (On-demand CMS cache purge)
│   ├── audit/                  # /audit - ফ্রি ওয়েব অডিট রিকোয়েস্ট পেজ
│   ├── contact/                # /contact - ফ্রি পরামর্শ ও যোগাযোগ ফর্ম
│   ├── demos/                  # /demos & /demos/[slug] - পোর্টফোলিও ও কেস স্টাডি
│   ├── estimator/              # /estimator - বাজেট ক্যালকুলেটর পেজ
│   ├── offline/                # /offline - PWA অফলাইন ফলব্যাক পেজ
│   ├── pricing/                # /pricing - প্যাকেজ ও প্রাইসিং
│   ├── privacy/                # /privacy - প্রাইভেসি পলিসি
│   ├── process/                # /process - কাজের ধাপ ও ওয়ার্কফ্লো
│   ├── services/               # /services & /services/[type] - সেবা সমূহ
│   ├── terms/                  # /terms - ব্যবহারের শর্তাবলী
│   ├── thank-you/              # /thank-you - সফল সাবমিশন ধন্যবাদ পেজ
│   ├── favicon.ico
│   ├── globals.css             # Tailwind v4 & Global CSS rules
│   ├── layout.tsx              # Root Layout + Font & Navigation
│   ├── page.tsx                # Home Page (Landing Page)
│   ├── robots.ts               # Robots.txt generator
│   ├── sitemap.ts              # Dynamic Sitemap generator
│   └── tokens.css              # EduWeb v1.0 Design Tokens
├── components/                 # UI Components & Navigation Bar
│   ├── MobileBottomNav.tsx     # Mobile bottom navigation bar
│   ├── Navbar.tsx              # Dynamic YouTube-style glass top nav
│   ├── Footer.tsx              # App footer with links & credits
│   └── ui/                     # UI Primitives (Button, Card, Badge, GlassPanel)
├── lib/                        # Server & Data Access Layer
│   ├── alerts.ts               # Telegram Bot Alert sender
│   ├── ids.ts                  # Standardized Lead ID generator (e.g. LD-261009-7K3F)
│   ├── server-only.ts          # Guard against client execution
│   ├── sheets.ts               # Google Sheets API client with retry & exponential backoff
│   ├── validate.ts             # Zod input validation schemas (Phone, Honeypot, Turnstile)
│   └── repos/                  # Repositories for CMS & CRM data
│       ├── estimates.repo.ts   # CRM Estimates logger
│       ├── faqs.repo.ts        # CMS FAQs provider
│       ├── leads.repo.ts        # CRM Leads & Audit_Log logger
│       ├── packages.repo.ts    # CMS Pricing Packages provider
│       ├── portfolio.repo.ts   # CMS Portfolio provider
│       ├── services.repo.ts    # CMS Service details provider
│       ├── settings.repo.ts    # CMS Global settings provider
│       └── testimonials.repo.ts# CMS Testimonials provider
├── types.ts                    # Global TypeScript interfaces
├── next.config.ts              # Next.js 16 security headers & optimization config
└── README.md
```

---

## 📊 ডেটা আর্কিটেকচার (Google Sheets Backend)

EduWeb দুটি পৃথক **Google Sheets Workbook** ব্যাকএন্ড হিসেবে ব্যবহার করে:

### ১. CMS Workbook (`SHEET_ID_CMS`)
| ট্যাব (Tab Name) | ভূমিকা | প্রধান কলামসমূহ |
|-----------------|-------|----------------|
| `Settings` | সাইটের মূল গ্লোবাল ভেরিয়েবল | `key`, `value_bn`, `value_en`, `type`, `notes` |
| `Services` | সেবা সংক্রান্ত বিবরণী | `id`, `slug`, `status`, `sort`, `institution_type`, `title_bn`, `summary_bn` |
| `Packages` | সার্ভিস প্যাকেজ ও প্রাইসিং | `id`, `status`, `sort`, `tier`, `name_bn`, `price_from_bdt`, `highlight` |
| `Portfolio` | আগের কাজের তালিকা | `id`, `slug`, `status`, `institution_name_bn`, `live_url`, `permission_to_publish` |
| `Testimonials` | গ্রাহক মতামত | `id`, `status`, `quote_bn`, `author_name`, `institution_name`, `consent_given` |
| `FAQs` | সাধারণ জিজ্ঞাসাসমূহ | `id`, `status`, `category`, `question_bn`, `answer_bn` |

### ২. CRM Workbook (`SHEET_ID_CRM`)
| ট্যাব (Tab Name) | ভূমিকা | প্রধান কলামসমূহ |
|-----------------|-------|----------------|
| `Leads` | সমস্ত যোগাযোগ ও পরামর্শ ফর্ম | `lead_id`, `created_at`, `full_name`, `phone`, `role`, `institution_name`, `district`, `source` |
| `Estimates` | বাজেট ক্যালকুলেটর সাবমিশন | `estimate_id`, `created_at`, `lead_id`, `institution_type`, `size_band`, `estimate_min`, `estimate_max` |
| `Audit_Log` | পরিবর্তন ও সাবমিশন ট্র্যাকিং | `timestamp`, `actor`, `action`, `target_tab`, `target_id`, `details` |

---

## 🔒 API এন্ডপয়েন্ট ও সিকিউরিটি

- **`POST /api/leads`**: লিড ও কনসালটেশন সাবমিশন ফর্ম। Honeypot, Zod Schema, Cloudflare Turnstile Verification, বাংলাদেশি ফোন নম্বর নরম্যালাইজেশন, ইনস্ট্যান্ট টেলিগ্রাম অ্যালার্ট এবং CRM শিটে ডেটা রাইট নিশ্চিত করে।
- **`POST /api/estimates`**: প্রজেক্ট এস্টিমেটর বাজেট ক্যালকুলেটর অ্যান্ড সাবমিশন।
- **`POST /api/audit`**: ফ্রি ওয়েবসাইট অডিট সাবমিশন।
- **`POST /api/revalidate`**: গুগল শিটে নতুন তথ্য আপডেটের পর ওয়েবসাইট ক্যাশ Purge করার সিকিউর এন্ডপয়েন্ট (`x-revalidate-secret` হেডার চেকসহ)।
- **`GET /api/health`**: সিস্টেম স্ট্যাটাস ও গুগল শিট সংযোগ কানেক্টিভিটি চেক।

---

## 🔑 পরিবেশ কনফিগারেশন (.env.local)

প্রজেক্টটি সঠিকভাবে চালানোর জন্য `.env.local` ফাইলে নিচের ভেরিয়েবলগুলো যুক্ত করুন:

```env
# Google Sheets Backend Credentials
GOOGLE_SA_KEY_B64=eyJ0eXBlIjoic2VydmljZV9hY2NvdW50Ii...   # Base64 encoded Google Service Account JSON
SHEET_ID_CMS=1A2B3C4D5E6F7G8H9I0J...                      # Google Sheets CMS Document ID
SHEET_ID_CRM=9I8H7G6F5E4D3C2B1A...                      # Google Sheets CRM Document ID

# Cache Purge Secret
REVALIDATE_SECRET=your_super_secret_revalidate_key_here

# Telegram Bot Alerts
TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRstuVWXyz   # Telegram Bot Token
TELEGRAM_CHAT_ID=-1001234567890                           # Admin Group or Channel Chat ID

# Cloudflare Turnstile Bot Protection
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAA...
TURNSTILE_SECRET=0x4AAAAAA...

# Public URLs & Meta
NEXT_PUBLIC_SITE_URL=https://eduweb.com.bd
NEXT_PUBLIC_WHATSAPP_NUMBER=+8801700000000
```

---

## 🚀 লোকাল ডেভেলপমেন্ট ও ডিপ্লয়মেন্ট

### ১. ডিপেন্ডেন্সি ইনস্টলেশন
```bash
npm install
```

### ২. ডেভেলপমেন্ট সার্ভার রান করা
```bash
npm run dev
```
সার্ভারটি `http://localhost:3000` এ রান করবে।

### ৩. টাইপচেক ও প্রোডাকশন বিল্ড
```bash
npm run build
```

### ৪. প্রোডাকশন টেস্ট
```bash
npm run start
```

---

## 📜 লাইসেন্স

© 2026 EduWeb (CampusDev Education). All rights reserved.
