'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface PullToRefreshProps {
  onRefresh: () => Promise<void> | void;
  children: React.ReactNode;
  threshold?: number; // px to pull before triggering
}

type PTRState = 'idle' | 'pulling' | 'ready' | 'refreshing';

export function PullToRefresh({ onRefresh, children, threshold = 72 }: PullToRefreshProps) {
  const [state, setState] = useState<PTRState>('idle');
  const [pullY, setPullY] = useState(0);
  const startY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    // Only trigger PTR when at top of page
    if (window.scrollY > 4) return;
    startY.current = e.touches[0].clientY;
    setState('pulling');
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (state !== 'pulling' && state !== 'ready') return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta <= 0) {
        setPullY(0);
        setState('idle');
        return;
      }
      // Rubber-band resistance
      const resistance = 0.45;
      const pull = Math.min(delta * resistance, threshold + 20);
      setPullY(pull);
      setState(pull >= threshold * resistance ? 'ready' : 'pulling');
    },
    [state, threshold]
  );

  const handleTouchEnd = useCallback(async () => {
    if (state === 'ready') {
      setState('refreshing');
      setPullY(0);
      try {
        await onRefresh();
      } finally {
        setTimeout(() => setState('idle'), 600);
      }
    } else {
      setState('idle');
      setPullY(0);
    }
  }, [state, onRefresh]);

  useEffect(() => {
    const el = document.documentElement;
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  const progress = Math.min(pullY / (threshold * 0.45), 1);
  const isActive = state === 'pulling' || state === 'ready' || state === 'refreshing';

  return (
    <div ref={containerRef} className="relative">
      {/* Pull indicator */}
      {isActive && (
        <div
          className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-safe transition-all duration-150 ease-out"
          style={{
            transform: `translateY(${pullY > 0 ? pullY - 10 : 0}px)`,
            paddingTop: `max(env(safe-area-inset-top, 0px), 8px)`
          }}
        >
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold shadow-[0_4px_20px_rgba(192,38,211,0.3)] transition-colors duration-200 ${
              state === 'ready' || state === 'refreshing'
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white'
                : 'bg-[rgba(26,13,46,0.9)] border border-[var(--border)] text-[var(--text-secondary)]'
            }`}
          >
            <div
              className={state === 'refreshing' ? 'animate-spin' : ''}
              style={
                state !== 'refreshing'
                  ? { transform: `rotate(${progress * 360}deg)` }
                  : undefined
              }
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </div>
            <span>
              {state === 'refreshing'
                ? 'রিফ্রেশ হচ্ছে…'
                : state === 'ready'
                ? 'ছেড়ে দিন রিফ্রেশ করতে'
                : 'টেনে নামান'}
            </span>
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
