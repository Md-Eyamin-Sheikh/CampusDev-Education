# 🎓 CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন

<div align="center">

![CampusDev Banner](https://img.shields.io/badge/CampusDev-Education%20Web%20Solutions-8b5cf6?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.3.5-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**বাংলাদেশের স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক, প্রিমিয়াম ও PWA-ready ওয়েব অ্যাপ্লিকেশন।**

[Live Demo](#) · [Documentation](#প্রজেক্ট-স্ট্রাকচার) · [Report Bug](#) · [Request Feature](#)

</div>

---

## 📋 বিষয়সূচি

- [প্রজেক্ট সম্পর্কে](#-প্রজেক্ট-সম্পর্কে)
- [ফিচারসমূহ](#-ফিচারসমূহ)
- [টেকনোলজি স্ট্যাক](#-টেকনোলজি-স্ট্যাক)
- [প্রজেক্ট স্ট্রাকচার](#-প্রজেক্ট-স্ট্রাকচার)
- [কিভাবে চালাবেন](#-কিভাবে-চালাবেন)
- [পরিবেশ কনফিগারেশন](#-পরিবেশ-কনফিগারেশন)
- [ডিপ্লয়মেন্ট](#-ডিপ্লয়মেন্ট)
- [কম্পোনেন্ট আর্কিটেকচার](#-কম্পোনেন্ট-আর্কিটেকচার)

---

## 🌟 প্রজেক্ট সম্পর্কে

**CampusDev** হলো বাংলাদেশের শিক্ষা প্রতিষ্ঠানগুলোর জন্য একটি সম্পূর্ণ ডিজিটাল ওয়েব সল্যুশন। এই প্রজেক্টে রয়েছে:

- 🏫 **স্কুল, কলেজ, মাদ্রাসা** — সকল ধরনের শিক্ষাপ্রতিষ্ঠানের জন্য কাস্টম ওয়েবসাইট
- 📊 **অ্যাডমিন ড্যাশবোর্ড** — সম্পূর্ণ শিক্ষা ব্যবস্থাপনা প্যানেল
- 📱 **মোবাইল-ফার্স্ট** — iOS/Android-এর মতো Native App অভিজ্ঞতা
- 🌐 **দ্বি-ভাষিক** — বাংলা এবং ইংরেজি সম্পূর্ণ সমর্থন
- 🔒 **PWA সমর্থন** — মোবাইলে ইনস্টলযোগ্য অ্যাপ

---

## ✨ ফিচারসমূহ

### UI/UX
- ⚡ Dark Glassmorphism থিম — গভীর বেগুনি/ম্যাজেন্টা প্যালেট
- 🎨 Gradient Text, Neon Glow, Cyber Grid ডেকোরেটিভ ইলিমেন্ট
- 📱 Native Mobile App Feel — Safe Area Inset, Momentum Scroll
- 🖱️ Micro-animations — Hover, Press, Fade-in ইফেক্ট
- 🌈 Smooth Page Transitions

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
Frontend Framework  →  Next.js 16.3.5 (App Router)
Language           →  TypeScript 5.x
Styling            →  Tailwind CSS v4 + Custom CSS Variables
Icons              →  Lucide React
Animations         →  CSS Animations + Motion
Fonts              →  Space Grotesk + Hind Siliguri + Inter (Google Fonts)
Build Tool         →  Webpack (Next.js)
Package Manager    →  npm
```

---

## 📁 প্রজেক্ট স্ট্রাকচার

```
next-app/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — fonts, metadata, PWA
│   ├── page.tsx                # Main app — routing, state management
│   ├── globals.css             # Global design system & utility classes
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
│   ├── Navbar.tsx              # Top navigation with language switcher
│   ├── Footer.tsx              # Full institutional footer
│   ├── MobileBottomNav.tsx     # Mobile bottom tab bar
│   ├── Logo.tsx                # CampusDev logo component
│   ├── AdminDemoInteractive.tsx # Live admin panel demo
│   ├── WebsiteAuditModal.tsx   # Website audit tool
│   ├── ProjectEstimatorModal.tsx # Cost estimator
│   ├── ConsultationModal.tsx   # Consultation booking
│   └── CaseStudyModal.tsx      # Portfolio case study viewer
│
├── views/                      # Page-level view components
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
│   └── content.ts              # All multi-language content data
│
├── types.ts                    # TypeScript type definitions
├── public/
│   └── manifest.json           # PWA manifest
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
# প্রজেক্ট ক্লোন করুন
git clone <repository-url>
cd next-app

# ডিপেন্ডেন্সি ইনস্টল করুন
npm install

# ডেভেলপমেন্ট সার্ভার চালু করুন
npm run dev
```

ব্রাউজারে খুলুন: **http://localhost:3000**

### অন্যান্য কমান্ড

```bash
# প্রোডাকশন বিল্ড
npm run build

# প্রোডাকশন সার্ভার চালু
npm run start

# লিন্ট চেক
npm run lint

# TypeScript চেক
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

## 🧩 কম্পোনেন্ট আর্কিটেকচার

### Reusable UI Components ব্যবহার

```tsx
import { Button, Card, SectionHeader, Badge, GlassPanel } from '@/components/ui';

// Button ব্যবহার
<Button variant="primary" size="lg" leftIcon={<Sparkles />}>
  বিনামূল্যে পরামর্শ নিন
</Button>

// Card ব্যবহার
<Card variant="glow" hover>
  <p>কার্ড কনটেন্ট</p>
</Card>

// SectionHeader ব্যবহার
<SectionHeader
  badge="আমাদের সার্ভিস"
  title="শিক্ষা প্রতিষ্ঠানের জন্য"
  titleHighlight="সম্পূর্ণ ডিজিটাল সল্যুশন"
  subtitle="স্কুল থেকে বিশ্ববিদ্যালয় পর্যন্ত সকল প্রতিষ্ঠানের জন্য"
  align="center"
/>

// Badge ব্যবহার
<Badge variant="success" icon={<Check size={12} />}>সক্রিয়</Badge>

// GlassPanel ব্যবহার
<GlassPanel intensity="heavy" glowing rounded="2xl">
  <p>গ্লাস প্যানেল কনটেন্ট</p>
</GlassPanel>
```

### CSS Utility Classes

```css
/* গ্র্যাডিয়েন্ট টেক্সট */
<span class="gradient-text">হাইলাইটেড টেক্সট</span>

/* গ্লাস মর্ফিজম */
<div class="glass-md rounded-2xl p-6">...</div>

/* নেটিভ প্রেস ইফেক্ট */
<button class="native-press">...</button>

/* ফেড-ইন অ্যানিমেশন */
<div class="fade-in">...</div>

/* স্কেলেটন লোডিং */
<div class="skeleton w-full h-12">...</div>
```

### ডিজাইন টোকেন (CSS Variables)

```css
:root {
  --bg-primary: #0a0312;       /* গাঢ় পটভূমি */
  --bg-secondary: #120822;     /* সেকেন্ডারি পটভূমি */
  --text-primary: #f0eaf8;     /* প্রধান টেক্সট */
  --text-secondary: #b8a9d4;   /* সাবটেক্সট */
  --accent: #c026d3;           /* ম্যাজেন্টা অ্যাকসেন্ট */
  --accent-violet: #8b5cf6;    /* ভায়োলেট অ্যাকসেন্ট */
  --border: rgba(168,85,247,0.12); /* সূক্ষ্ম বর্ডার */
}
```

---

## 📱 PWA ও মোবাইল সমর্থন

এই অ্যাপটি PWA (Progressive Web App) হিসেবে মোবাইলে ইনস্টল করা যায়:

- ✅ Web App Manifest সহ
- ✅ Safe Area Inset সমর্থন (notch/dynamic island)
- ✅ 44px+ touch targets (Apple HIG অনুযায়ী)
- ✅ Momentum Scrolling
- ✅ Overscroll নিয়ন্ত্রণ
- ✅ Status Bar integration
- ✅ Offline-ready structure

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
