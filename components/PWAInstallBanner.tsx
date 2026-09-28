'use client';

import React, { useEffect, useState } from 'react';
import { Download, Share2, X } from 'lucide-react';
import { CampusDevIcon } from './Logo';
import { Language } from '../types';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

interface PWAInstallBannerProps {
  language: Language;
}

// Detect iOS (no beforeinstallprompt — show manual instructions instead)
function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent) && !(window as Window & { MSStream?: unknown }).MSStream;
}

export function PWAInstallBanner({ language }: PWAInstallBannerProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [iosMode, setIosMode] = useState(false);

  useEffect(() => {
    // ── Respect permanent dismiss (localStorage, not sessionStorage) ──
    const wasDismissed = localStorage.getItem('pwa-banner-dismissed');
    if (wasDismissed) return;

    // Already installed in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    // ── Visit count logic: show on 2nd+ visit ──
    const visitCount = parseInt(localStorage.getItem('pwa-visit-count') ?? '0', 10) + 1;
    localStorage.setItem('pwa-visit-count', String(visitCount));

    const ios = isIOS();
    setIosMode(ios);

    if (ios) {
      // iOS: no beforeinstallprompt — show "Share → Add to Home Screen" tip after 2nd visit
      if (visitCount >= 2) {
        setTimeout(() => setShow(true), 15000); // after 15s on 2nd+ visit
      }
      return;
    }

    // ── Android/Chrome: wait for beforeinstallprompt ──
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show on 2nd+ visit; on first visit wait longer (30s)
      const delay = visitCount >= 2 ? 10000 : 30000;
      setTimeout(() => setShow(true), delay);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    setInstalling(true);
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      setShow(false);
    }
    setInstalling(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setDismissed(true);
    setShow(false);
    // Permanently remember dismiss
    localStorage.setItem('pwa-banner-dismissed', '1');
  };

  if (!show || dismissed) return null;

  const bn = {
    title: 'অ্যাপ ইনস্টল করুন',
    desc: 'হোম স্ক্রিনে যোগ করুন — দ্রুততর ও অফলাইনেও চলবে!',
    install: 'ইনস্টল করুন',
    installing: 'ইনস্টল হচ্ছে...',
    iosDesc: 'নিচের Share বাটন চেপে "Add to Home Screen" বেছে নিন',
  };
  const en = {
    title: 'Install App',
    desc: 'Add to home screen — faster & works offline!',
    install: 'Install',
    installing: 'Installing...',
    iosDesc: 'Tap the Share button below and choose "Add to Home Screen"',
  };
  const t = language === 'bn' ? bn : en;

  return (
    <div className="fixed bottom-[72px] md:bottom-[72px] lg:bottom-6 left-4 right-4 z-50 max-w-sm mx-auto animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      {/* Solid card — no backdrop-blur for perf */}
      <div className="relative flex items-center gap-3 px-4 py-3.5 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-2xl shadow-[0_8px_32px_-8px_rgb(61_90_254/.18),0_2px_8px_rgb(15_23_42/.08)]">

        {/* App icon */}
        <CampusDevIcon size={42} />

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[var(--color-fg)] leading-tight">{t.title}</p>
          <p className="text-xs text-[var(--color-muted)] leading-tight mt-0.5 truncate">
            {iosMode ? t.iosDesc : t.desc}
          </p>
        </div>

        {/* Action button */}
        {iosMode ? (
          <div className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--color-brand-soft)] text-[var(--color-brand)] text-xs font-bold">
            <Share2 className="w-3.5 h-3.5" />
            Share
          </div>
        ) : (
          <button
            onClick={handleInstall}
            disabled={installing}
            className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white text-xs font-bold shadow-[0_4px_12px_rgb(61_90_254/.25)] active:scale-95 transition-all duration-150 disabled:opacity-70 min-h-0"
          >
            {installing ? (
              <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <Download className="w-3.5 h-3.5" />
            )}
            {installing ? t.installing : t.install}
          </button>
        )}

        {/* Dismiss */}
        <button
          onClick={handleDismiss}
          className="shrink-0 p-1 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-fg)] hover:bg-[var(--color-line)] transition-colors active:scale-90 min-h-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
