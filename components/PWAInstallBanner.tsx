'use client';

import React, { useEffect, useState } from 'react';
import { Download, X, Smartphone } from 'lucide-react';
import { Language } from '../types';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
  prompt(): Promise<void>;
}

interface PWAInstallBannerProps {
  language: Language;
}

export function PWAInstallBanner({ language }: PWAInstallBannerProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Don't show if already installed or previously dismissed
    const wasDismissed = sessionStorage.getItem('pwa-banner-dismissed');
    if (wasDismissed) return;

    // Check if already in standalone mode (already installed)
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show banner after 8 seconds
      setTimeout(() => setShow(true), 8000);
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
    sessionStorage.setItem('pwa-banner-dismissed', '1');
  };

  if (!show || dismissed) return null;

  const bn = {
    title: 'অ্যাপ ইনস্টল করুন',
    desc: 'হোম স্ক্রিনে যোগ করুন — অফলাইনেও চলবে!',
    install: 'ইনস্টল করুন',
    installing: 'ইনস্টল হচ্ছে...',
  };
  const en = {
    title: 'Install App',
    desc: 'Add to home screen — works offline too!',
    install: 'Install',
    installing: 'Installing...',
  };
  const t = language === 'bn' ? bn : en;

  return (
    <div className="fixed bottom-[72px] md:bottom-[72px] lg:bottom-6 left-4 right-4 z-50 max-w-sm mx-auto animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      {/* Glass banner */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Glow border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-violet-500/30 blur-sm" />
        
        {/* Main surface */}
        <div className="relative flex items-center gap-3 px-4 py-3.5 bg-[rgba(18,8,34,0.92)] backdrop-blur-2xl border border-[rgba(139,92,246,0.35)] rounded-2xl shadow-[0_8px_40px_rgba(5,1,13,0.7)]">
          {/* App icon */}
          <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center shadow-[0_0_14px_rgba(192,38,211,0.5)]">
            <Smartphone className="w-6 h-6 text-white" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white leading-tight">{t.title}</p>
            <p className="text-xs text-[var(--text-muted)] leading-tight mt-0.5 truncate">{t.desc}</p>
          </div>

          {/* Install button */}
          <button
            onClick={handleInstall}
            disabled={installing}
            className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-xs font-bold shadow-[0_0_12px_rgba(192,38,211,0.4)] hover:shadow-[0_0_20px_rgba(192,38,211,0.6)] active:scale-95 transition-all duration-150 disabled:opacity-70"
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

          {/* Dismiss */}
          <button
            onClick={handleDismiss}
            className="shrink-0 p-1 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-colors active:scale-90"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
