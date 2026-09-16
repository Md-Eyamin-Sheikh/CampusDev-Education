import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন",
    template: "%s | CampusDev",
  },
  description: "বাংলাদেশের শিক্ষা প্রতিষ্ঠানগুলোর জন্য প্রিমিয়াম ডাইনামিক ওয়েবসাইট ও ডিজিটাল ম্যানেজমেন্ট সল্যুশন। স্কুল, কলেজ, মাদ্রাসার জন্য আধুনিক ডিজিটাল অবকাঠামো।",
  keywords: [
    "education website bangladesh",
    "school website bangladesh",
    "madrasa website",
    "college portal bd",
    "campusdev",
    "শিক্ষা প্রতিষ্ঠান ওয়েবসাইট",
    "স্কুল ওয়েবসাইট",
    "মাদ্রাসা ওয়েবসাইট",
  ],
  authors: [{ name: "CampusDev", url: "https://campusdev.com.bd" }],
  creator: "CampusDev",
  publisher: "CampusDev",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://campusdev.com.bd",
    siteName: "CampusDev",
    title: "CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন",
    description: "স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক ওয়েবসাইট ও ম্যানেজমেন্ট সিস্টেম",
  },
  twitter: {
    card: "summary_large_image",
    title: "CampusDev — শিক্ষা প্রতিষ্ঠানের প্রিমিয়াম ওয়েব সল্যুশন",
    description: "স্কুল, কলেজ ও মাদ্রাসার জন্য আধুনিক ওয়েবসাইট ও ম্যানেজমেন্ট সিস্টেম",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CampusDev",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0312" },
    { media: "(prefers-color-scheme: light)", color: "#0a0312" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${spaceGrotesk.variable} ${hindSiliguri.variable} ${inter.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* ── PWA / Web App ─────────────────────── */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="CampusDev" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="manifest" href="/manifest.json" />

        {/* ── Apple Touch Icons ─────────────────── */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="167x167" href="/favicon.ico" />

        {/* ── Apple Splash Screens (portrait) ─── */}
        {/* iPhone SE */}
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/favicon.ico" />
        {/* iPhone X/XS/11 Pro */}
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.ico" />
        {/* iPhone XR/11 */}
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" href="/favicon.ico" />
        {/* iPhone 12/13/14 Pro Max */}
        <link rel="apple-touch-startup-image" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)" href="/favicon.ico" />
        {/* iPad */}
        <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" href="/favicon.ico" />
        {/* iPad Pro 11" */}
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" href="/favicon.ico" />

        {/* ── Microsoft Tiles ───────────────────── */}
        <meta name="msapplication-TileColor" content="#0a0312" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* ── Theme color per OS ────────────────── */}
        <meta name="theme-color" content="#0a0312" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#0a0312" media="(prefers-color-scheme: light)" />
      </head>
      <body className="min-h-screen bg-[#0a0312] text-white antialiased font-sans selection:bg-fuchsia-500/35 selection:text-white">
        {children}
      </body>
    </html>
  );
}
