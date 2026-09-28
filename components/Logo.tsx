'use client';
import React, { useId } from 'react';

export interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  theme?: 'light' | 'dark' | 'glow';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  showSubtitle?: boolean;
  subtitleText?: string;
  interactive?: boolean;
}

export interface CampusDevIconProps {
  className?: string;
  size?: number | string;
  glow?: boolean;
  interactive?: boolean;
}

/**
 * Premium CampusDev Standalone Icon Mark
 * Features:
 * - 3D squircle app container with specular glass finish & inset keyline
 * - Stylized 3D Academic Graduation Crest / Shield
 * - Flanking glowing digital code brackets (< >)
 * - Interlocking 'C' & 'D' monogram with multi-stop neon gradients
 * - Unique SVG element IDs generated per instance to avoid DOM collisions
 */
export const CampusDevIcon: React.FC<CampusDevIconProps> = ({ 
  className = '', 
  size = 38,
  glow = true,
  interactive = true
}) => {
  const uid = useId().replace(/:/g, '');
  const gradPrimary = `cd-grad-p-${uid}`;
  const gradCap = `cd-grad-cap-${uid}`;
  const gradAccent = `cd-grad-acc-${uid}`;
  const filterGlow = `cd-glow-${uid}`;

  // Dimension handling
  const sizeStyle = typeof size === 'number' ? { width: size, height: size } : {};
  const sizeClasses = typeof size === 'string' ? size : '';

  return (
    <div 
      suppressHydrationWarning
      className={`relative inline-flex items-center justify-center flex-shrink-0 group overflow-hidden rounded-[26%] bg-[#0B0518] shadow-[0_6px_24px_rgba(124,58,237,0.32),inset_0_1px_1px_rgba(255,255,255,0.22)] ring-1 ring-white/15 ${
        interactive ? 'hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(217,70,239,0.45)] hover:ring-fuchsia-400/40 transition-all duration-300 ease-out' : ''
      } ${sizeClasses} ${className}`}
      style={sizeStyle}
      aria-hidden="true"
    >
      {/* Background Radial Glow */}
      {glow && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,171,252,0.25),transparent_65%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.3),transparent_65%)] pointer-events-none" />
      )}

      {/* Glossy Diagonal Reflection */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-45 pointer-events-none group-hover:translate-x-3 transition-transform duration-500" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full p-[8%]"
      >
        <defs>
          {/* Primary Monogram & Crest Gradient — Institutional Blue */}
          <linearGradient id={gradPrimary} x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EBF5FB" />
            <stop offset="35%" stopColor="#5DADE2" />
            <stop offset="70%" stopColor="#2E86C1" />
            <stop offset="100%" stopColor="#003B73" />
          </linearGradient>

          {/* Graduation Cap Top Facet Gradient */}
          <linearGradient id={gradCap} x1="20" y1="18" x2="80" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F4F6F7" />
            <stop offset="40%" stopColor="#AED6F1" />
            <stop offset="100%" stopColor="#2E86C1" />
          </linearGradient>

          {/* Institutional Accent Gradient */}
          <linearGradient id={gradAccent} x1="15" y1="80" x2="85" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E86C1" />
            <stop offset="50%" stopColor="#00529B" />
            <stop offset="100%" stopColor="#003B73" />
          </linearGradient>

          {/* High Intensity Glow Filter */}
          <filter id={filterGlow} x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Fine Inner Bevel Keyline */}
        <rect x="4" y="4" width="92" height="92" rx="23" stroke={`url(#${gradCap})`} strokeWidth="1.2" strokeOpacity="0.25" />

        {/* Ambient Swoosh Arch Base */}
        <path 
          d="M16 80C30 94 68 94 84 76" 
          stroke={`url(#${gradAccent})`} 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeOpacity="0.3" 
        />

        {/* --- Top Component: Academic Crest / Graduation Cap --- */}
        {/* Diamond Top Roof */}
        <path 
          d="M20 34L50 17L80 34L50 51L20 34Z" 
          fill={`url(#${gradCap})`} 
        />
        {/* Diamond Under-shadow Facet */}
        <path 
          d="M27 38.5V50C37 59 63 59 73 50V38.5L50 50L27 38.5Z" 
          fill="#0C1929" 
          fillOpacity="0.9"
        />
        {/* Cap Rim Light Edge */}
        <path 
          d="M50 34L80 34L50 51Z" 
          fill="white" 
          fillOpacity="0.18"
        />
        {/* Graduation Tassel Cord & Golden Node */}
        <path 
          d="M50 34C60 35.5 70 39.5 76 46.5" 
          stroke="#AED6F1" 
          strokeWidth="2.8" 
          strokeLinecap="round" 
        />
        <circle cx="77.5" cy="49" r="3.2" fill="#5DADE2" filter={`url(#${filterGlow})`} />

        {/* --- Flanking Code Brackets (< >) --- */}
        <path 
          d="M39 29.5L33 34L39 38.5" 
          stroke="#0F172A" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M61 29.5L67 34L61 38.5" 
          stroke="#0F172A" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* --- Central Interlocking Monogram ('C' and 'D') --- */}
        {/* 'C' Arc (Campus) */}
        <path 
          d="M44 61.5C40.5 58.2 33.8 58.5 31 63.2C28 68.5 31.8 75 37.8 75C40.2 75 42.4 74 44.2 72.2" 
          stroke={`url(#${gradPrimary})`} 
          strokeWidth="6" 
          strokeLinecap="round" 
          filter={`url(#${filterGlow})`} 
        />
        {/* 'C' Sparkle Tip */}
        <circle cx="44.2" cy="72.2" r="2" fill="#FFFFFF" />

        {/* 'D' Stem & Loop (Dev) */}
        <path 
          d="M51 59V75.5H57C62.5 75.5 66.5 72.2 66.5 67.25C66.5 62.3 62.5 59 57 59H51Z" 
          stroke="#FFFFFF" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M55.5 63H57C59.5 63 61.5 64.8 61.5 67.25C61.5 69.7 59.5 71.5 57 71.5H55.5V63Z" 
          fill={`url(#${gradAccent})`} 
          fillOpacity="0.4"
        />
      </svg>
    </div>
  );
};

/**
 * Standalone CampusDev Wordmark Component
 */
export const CampusDevWordmark: React.FC<{
  theme?: 'light' | 'dark' | 'glow';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  showSubtitle?: boolean;
  subtitleText?: string;
  className?: string;
}> = ({
  theme = 'light',
  size = 'md',
  showSubtitle = true,
  subtitleText = 'EDUCATION WEB SOLUTIONS',
  className = ''
}) => {
  const titleSizes = {
    sm: 'text-base font-black',
    md: 'text-xl font-black',
    lg: 'text-2xl font-black',
    xl: 'text-3xl font-black',
    responsive: 'text-[17px] xs:text-lg sm:text-xl md:text-2xl font-black',
  };

  const subtitleSizes = {
    sm: 'text-[8.5px] tracking-[0.18em]',
    md: 'text-[9.5px] tracking-[0.22em]',
    lg: 'text-[11px] tracking-[0.25em]',
    xl: 'text-xs tracking-[0.28em]',
    responsive: 'text-[8px] sm:text-[9.5px] tracking-[0.16em] sm:tracking-[0.22em]',
  };

  const campusColor = {
    light: 'text-slate-900',
    dark: 'text-white',
    glow: 'text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]',
  }[theme];

  const devGradient = {
    light: 'bg-gradient-to-r from-[#003B73] via-[#00529B] to-[#002850] bg-clip-text text-transparent',
    dark: 'bg-gradient-to-r from-sky-400 via-blue-300 to-sky-200 bg-clip-text text-transparent',
    glow: 'bg-gradient-to-r from-sky-300 via-sky-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]',
  }[theme];

  const subtitleColor = {
    light: 'text-slate-600 font-semibold',
    dark: 'text-slate-200 font-semibold',
    glow: 'text-sky-200/90 font-semibold',
  }[theme];

  return (
    <div className={`flex flex-col justify-center min-w-0 leading-none select-none ${className}`}>
      <div className={`${titleSizes[size]} truncate tracking-tight flex items-baseline gap-0.5`}>
        <span className={`${campusColor} font-heading`}>Campus</span>
        <span className={`${devGradient} font-heading drop-shadow-2xs`}>
          Dev
        </span>
      </div>
      {showSubtitle && (
        <span 
          className={`font-bold uppercase ${subtitleSizes[size]} ${subtitleColor} mt-1 truncate hidden sm:block`}
        >
          {subtitleText}
        </span>
      )}
    </div>
  );
};

/**
 * Universal CampusDev Reusable Logo Component
 */
export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  theme = 'light',
  className = '',
  size = 'md',
  showSubtitle = true,
  subtitleText = 'EDUCATION WEB SOLUTIONS',
  interactive = true
}) => {
  const iconPixelSizes = {
    sm: 30,
    md: 38,
    lg: 46,
    xl: 56,
    responsive: 38,
  };

  if (variant === 'icon') {
    return (
      <div suppressHydrationWarning className={`inline-flex items-center ${className}`}>
        {size === 'responsive' ? (
          <CampusDevIcon className="w-8 h-8 sm:w-10 sm:h-10" interactive={interactive} />
        ) : (
          <CampusDevIcon size={iconPixelSizes[size]} interactive={interactive} />
        )}
      </div>
    );
  }

  return (
    <div suppressHydrationWarning className={`inline-flex items-center gap-2 sm:gap-2.5 select-none min-w-0 ${className}`}>
      {size === 'responsive' ? (
        <CampusDevIcon className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" interactive={interactive} />
      ) : (
        <CampusDevIcon size={iconPixelSizes[size]} interactive={interactive} />
      )}
      
      <CampusDevWordmark
        theme={theme}
        size={size}
        showSubtitle={variant === 'full' && showSubtitle}
        subtitleText={subtitleText}
      />
    </div>
  );
};
