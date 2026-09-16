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
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msapplication-TileColor" content="#0a0312" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-[#0a0312] text-white antialiased font-sans selection:bg-fuchsia-500/35 selection:text-white">
        {children}
      </body>
    </html>
  );
}
