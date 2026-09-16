# 🎓 CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন

<div align="center">

![CampusDev Banner](https://img.shields.io/badge/CampusDev-Education%20Web%20Solutions-8b5cf6?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-10B981?style=for-the-badge&logo=pwa&logoColor=white)

**বাংলাদেশের স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক, প্রিমিয়াম ও PWA-ready নেটিভ অ্যাপ ফিল সহ ওয়েব অ্যাপ্লিকেশন।**

[Live Demo](#) · [Documentation](#প্রজেক্ট-স্ট্রাকচার) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 বিষয়সূচি

- [প্রজেক্ট সম্পর্কে](#-প্রজেক্ট-সম্পর্কে)
- [নেটিভ অ্যাপ ফিল ও ফিচারসমূহ](#-নেটিভ-অ্যাপ-ফিল-ও-ফিচারসমূহ)
- [টেকনোলজি স্ট্যাক](#-টেকনোলজি-স্ট্যাক)
- [প্রজেক্ট স্ট্রাকচার](#-প্রজেক্ট-স্ট্রাকচার)
- [কিভাবে চালাবেন](#-কিভাবে-চালাবেন)
- [পরিবেশ কনফিগারেশন](#-পরিবেশ-কনফিগারেশন)
- [ডিপ্লয়মেন্ট](#-ডিপ্লয়মেন্ট)
- [কম্পোনেন্ট আর্কিটেকচার](#-কম্পোনেন্ট-আর্কিটেকচার)
- [PWA ও সার্ভিস ওয়ার্কার](#-pwa-ও-সার্ভিস-ওয়ার্কার)

---

## 🌟 প্রজেক্ট সম্পর্কে

**CampusDev** হলো বাংলাদেশের শিক্ষা প্রতিষ্ঠানগুলোর জন্য একটি সম্পূর্ণ ডিজিটাল ওয়েব সল্যুশন। এই প্রজেক্টে রয়েছে:

- 🏫 **স্কুল, কলেজ, মাদ্রাসা** — সকল ধরনের শিক্ষাপ্রতিষ্ঠানের জন্য কাস্টম ওয়েবসাইট
- 📊 **অ্যাডমিন ড্যাশবোর্ড** — সম্পূর্ণ শিক্ষা ব্যবস্থাপনা প্যানেল
- 📱 **মোবাইল ও ট্যাবলেট নেটিভ অ্যাপ ফিল** — Instagram/Facebook অ্যাপের মতো অভিজ্ঞাত তৈরি
- 🌐 **দ্বি-ভাষিক** — বাংলা এবং ইংরেজি সম্পূর্ণ সমর্থন
- 🔒 **PWA ও অফলাইন সুবিধা** — সার্ভিস ওয়ার্কার সহ মোবাইলে ইনস্টলযোগ্য অ্যাপ

---

## ✨ নেটিভ অ্যাপ ফিল ও ফিচারসমূহ

### 📱 App Shell ও নেভিগেশন স্ট্রাকচার
- 📱 **Mobile Bottom Tab Bar (`MobileBottomNav.tsx`)** — মোবাইলে স্ক্রিনের নিচে ফিক্সড নেভিগেশন বার (Home, Services, Demos, Pricing, Contact)।
- 📟 **Tablet Bottom Navigation (`TabletBottomNav.tsx`)** — ট্যাবলেট ডিভাইসে স্পেশাল ৬-ট্যাব নেভিগেশন বার সহ ভিজ্যুয়াল অ্যাক্টিভ ইনডিকেটর।
- 🔝 **Scroll Shrinking Top Bar (`Navbar.tsx`)** — স্ক্রোল করলে উপরে অটোমেটিক shrink/hide হওয়া প্রিমিয়াম গ্লাস বার।
- 🔄 **Pull-to-Refresh (`PullToRefresh.tsx`)** — স্পর্শে টেনে নিচে নামালে রাবার-ব্যান্ড ইফেক্ট সহ পেজ রিফ্রেশ ফিচার।
- 👈👉 **Horizontal Swipe Gestures** — ডানে বা বামে সোয়াইপ করে এক পেজ থেকে অন্য পেজে যাওয়া।

### ⚡ Animation & Page Transition
- 🌈 **Zero Reload Page Transitions (`PageTransition.tsx`)** — Next.js App Router-এ পেজ পরিবর্তনের সময় মসৃণ স্কেল + ফেড ট্রানজিশন।
- ⚡ **Dark Glassmorphism থিম** — গভীর বেগুনি/ম্যাজেন্টা প্যালেট, Cyber Grid ব্যাকগ্রাউন্ড ও Neon Glow।
- 🖱️ **Micro-animations** — Hover, Press, Active Scale (`active:scale-95`), Safe Area Insets (`pt-safe`, `pb-safe`).

### 🚀 পারফরম্যান্স ও লোডিং Optimizations
- 📦 **Dynamic Code-Splitting** — `next/dynamic` দিয়ে ভারী View components ও Modals অলসভাবে (lazy) লোড হয়।
- 💀 **Skeleton Screen Loading** — কনটেন্ট লোড হওয়ার আগে গ্লাস স্কেলেটন লোডিং প্রিভিউ।

### পেজ ও সেকশনসমূহ
| পেজ | বিবরণ |
|-----|--------|
| 🏠 Home | হিরো সেকশন, সার্ভিস প্রিভিউ, টেস্টিমোনিয়াল, FAQ |
| 🛠️ Services | সকল সার্ভিস বিস্তারিত — স্কুল, কলেজ, মাদ্রাসা |
| 💼 Works | কেস স্টাডি ও পোর্টফোলিও |
| 🖥️ Demos | লাইভ ইন্টারঅ্যাক্টিভ অ্যাডমিন ডেমো |
| 💰 Pricing | মূল্য তালিকা ও প্যাকেজ |
| 🔄 Process | কাজের ধাপ ও ওয়ার্কফ্লো |
| ℹ️ About | টিম, মিশন, ভিশন |
| 📰 Resources | ব্লগ ও রিসোর্স |
| 📞 Contact | যোগাযোগ ফর্ম ও তথ্য |

### মোডালসমূহ
- 🔍 **Website Audit Modal** — ওয়েবসাইট বিশ্লেষণ
- 💬 **Consultation Modal** — বিনামূল্যে পরামর্শ
- 📐 **Project Estimator Modal** — প্রজেক্ট বাজেট নির্ধারণ
- 📁 **Case Study Modal** — বিস্তারিত কেস স্টাডি

---

## 🛠️ টেকনোলজি স্ট্যাক

```
Frontend Framework  →  Next.js 16.3.5 (App Router - Turbopack)
Language           →  TypeScript 5.x
Styling            →  Tailwind CSS v4 + Custom CSS Variables
Icons              →  Lucide React
Service Worker     →  Custom PWA Service Worker (sw.js)
Fonts              →  Space Grotesk + Hind Siliguri + Inter (Google Fonts)
Build Tool         →  Next.js Turbopack / Webpack
Package Manager    →  npm
```

---

## 📁 প্রজেক্ট স্ট্রাকচার

```
next-app/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — Apple splash screen, meta tags, PWA
│   ├── page.tsx                # Main app — dynamic routing, swipe, PTR, state management
│   ├── globals.css             # Global design system, keyframes & utility classes
│   └── favicon.ico             # App icon
│
├── components/                 # React Components
│   ├── ui/                     # ♻️ Reusable UI Components
│   │   ├── Button.tsx          # Primary, Secondary, Ghost, Outline variants
│   │   ├── Card.tsx            # Glass card with hover effects
│   │   ├── SectionHeader.tsx   # Section titles with gradient highlight
│   │   ├── Badge.tsx           # Status badges and labels
│   │   ├── GlassPanel.tsx      # Glassmorphism panel container
│   │   └── index.ts            # Barrel export
│   │
│   ├── Navbar.tsx              # Scroll-shrinking top navigation
│   ├── MobileBottomNav.tsx     # Mobile bottom tab bar
│   ├── TabletBottomNav.tsx     # Tablet optimized bottom nav
│   ├── PageTransition.tsx      # Page transition animation wrapper
│   ├── PullToRefresh.tsx       # Touch pull-to-refresh component
│   ├── PWAInstallBanner.tsx    # Native-like PWA install prompt banner
│   ├── Footer.tsx              # Full institutional footer
│   ├── Logo.tsx                # CampusDev logo component
│   ├── AdminDemoInteractive.tsx # Live admin panel demo
│   ├── WebsiteAuditModal.tsx   # Website audit tool
│   ├── ProjectEstimatorModal.tsx # Cost estimator
│   ├── ConsultationModal.tsx   # Consultation booking
│   └── CaseStudyModal.tsx      # Portfolio case study viewer
│
├── views/                      # Page-level view components (Dynamic Imports)
│   ├── HomeView.tsx            # Homepage (hero, services, testimonials)
│   ├── ServicesView.tsx        # Services listing
│   ├── WorksView.tsx           # Portfolio & case studies
│   ├── DemosView.tsx           # Admin demo showcase
│   ├── PricingView.tsx         # Pricing plans
│   ├── ProcessView.tsx         # Work process
│   ├── AboutView.tsx           # About us
│   ├── BlogResourcesView.tsx   # Blog & resources
│   └── ContactView.tsx         # Contact page
│
├── data/
│   └── content.ts              # Multi-language content dictionary (BN/EN)
│
├── public/
│   ├── manifest.json           # PWA web app manifest
│   └── sw.js                   # Service Worker script
├── types.ts                    # TypeScript interfaces & types
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 কিভাবে চালাবেন

### পূর্বশর্ত
- Node.js 18+ বা 20+
- npm বা yarn

### ইনস্টলেশন

```bash
# প্রজেক্ট ফোল্ডারে যান
cd next-app

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev
```

ব্রাউজারে খুলুন: **http://localhost:3000**

### অন্যান্য কমান্ড

```bash
# প্রোডাকশন বিল্ড (Turbopack)
npm run build

# প্রোডাকশন সার্ভার চালু
npm run start

# লিন্ট চেক
npm run lint

# TypeScript টাইপ চেক
npx tsc --noEmit
```

---

## ⚙️ পরিবেশ কনফিগারেশন

`.env.local` ফাইল তৈরি করুন:

```env
# সাইটের URL
NEXT_PUBLIC_SITE_URL=https://campusdev.com.bd

# WhatsApp নম্বর (যোগাযোগ বাটনের জন্য)
NEXT_PUBLIC_WHATSAPP_NUMBER=+8801XXXXXXXXX

# Email (ফর্ম সাবমিশনের জন্য)
NEXT_PUBLIC_CONTACT_EMAIL=info@campusdev.com.bd
```

---

## 🌐 ডিপ্লয়মেন্ট

### Vercel (প্রস্তাবিত)

```bash
# Vercel CLI ইনস্টল
npm i -g vercel

# ডিপ্লয় করুন
vercel --prod
```

### VPS / Self-hosted

```bash
# বিল্ড করুন
npm run build

# PM2 দিয়ে চালু করুন
npm install -g pm2
pm2 start npm --name "campusdev" -- start
pm2 save
pm2 startup
```

---

## 📱 PWA ও সার্ভিস ওয়ার্কার

এই অ্যাপটি PWA (Progressive Web App) হিসেবে মোবাইল ও ট্যাবলেটে ইনস্টল করা যায়:

- 📲 **PWA Install Banner (`PWAInstallBanner.tsx`)** — কাস্টম প্রিমিয়াম অ্যানিমেটেড ইনস্টল ব্যানার।
- ⚡ **Service Worker (`public/sw.js`)** — স্ট্যাটিক অ্যাসেট Cache-first এবং পেজ নেভিগেশনের জন্য Network-first স্ট্র্যাটেজি।
- 📱 **iOS Splash Screens & Touch Icons** — Apple Safari full-screen standalone সমর্থন।
- 📐 **Safe Area Inset (Notch / Dynamic Island)** — `env(safe-area-inset-bottom)` সমর্থন।
- 🎯 **Touch Target Size** — ন্যূনতম 44px x 44px স্পর্শ সুবিধা।

---

## 📄 লাইসেন্স

```
Apache-2.0 License
© 2026 CampusDev — All rights reserved
```

---

<div align="center">

**Made with ❤️ by CampusDev Team**

*বাংলাদেশের শিক্ষা প্রতিষ্ঠানের ডিজিটাল রূপান্তরে আমরা প্রতিশ্রুতিবদ্ধ*

</div>
