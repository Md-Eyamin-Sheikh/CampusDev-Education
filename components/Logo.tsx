'use client';
import React from 'react';
import Image from 'next/image';

export interface LogoProps {
  variant?: 'full' | 'compact' | 'icon';
  theme?: 'light' | 'dark' | 'glow';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'responsive';
  showSubtitle?: boolean;
  subtitleText?: string;
  interactive?: boolean;
}

export interface EduWebIconProps {
  className?: string;
  size?: number | string;
  interactive?: boolean;
}

/**
 * EduWeb Logo Image — uses /EduWebLogo.png from public folder
 */
export const EduWebIcon: React.FC<EduWebIconProps> = ({
  className = '',
  size = 38,
  interactive = true,
}) => {
  const sizeStyle = typeof size === 'number' ? { width: size, height: size } : {};
  const sizeClasses = typeof size === 'string' ? size : '';

  return (
    <div
      suppressHydrationWarning
      className={`relative inline-flex items-center justify-center flex-shrink-0 rounded-xl bg-white/90 p-1 border border-[var(--brand-tint2)] shadow-[0_2px_8px_rgba(20,52,43,0.08)] ${
        interactive ? 'hover:scale-[1.05] hover:shadow-[0_4px_12px_rgba(30,122,80,0.18)] transition-all duration-300 ease-out' : ''
      } ${sizeClasses} ${className}`}
      style={sizeStyle}
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/EduWebLogo.png"
          alt="EduWeb Logo"
          fill
          sizes="56px"
          className="object-contain p-0.5 drop-shadow-xs"
          priority
        />
      </div>
    </div>
  );
};

// Backward-compat alias so PWAInstallBanner & other imports still work
export const CampusDevIcon = EduWebIcon;

/**
 * EduWeb Wordmark Component
 */
export const EduWebWordmark: React.FC<{
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
  className = '',
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

  const eduColor = {
    light: 'text-[var(--ink)]',
    dark: 'text-white',
    glow: 'text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]',
  }[theme];

  const webGradient = {
    light: 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] bg-clip-text text-transparent',
    dark: 'bg-gradient-to-r from-[var(--gold)] via-[#fcd34d] to-[var(--gold-600)] bg-clip-text text-transparent',
    glow: 'bg-gradient-to-r from-[var(--gold)] via-amber-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(242,169,59,0.5)]',
  }[theme];

  const subtitleColor = {
    light: 'text-[var(--muted)] font-semibold',
    dark: 'text-slate-300 font-semibold',
    glow: 'text-[var(--brand-tint)] font-semibold',
  }[theme];

  return (
    <div className={`flex flex-col justify-center min-w-0 leading-none select-none ${className}`}>
      <div className={`${titleSizes[size]} truncate tracking-tight flex items-baseline gap-0.5`}>
        <span className={`${eduColor} font-heading`}>Edu</span>
        <span className={`${webGradient} font-heading drop-shadow-2xs`}>
          Web
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

// Backward-compat alias
export const CampusDevWordmark = EduWebWordmark;

/**
 * Universal EduWeb Reusable Logo Component
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
  showSubtitle = true,
  subtitleText = 'EDUCATION WEB SOLUTIONS',
  interactive = true,
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
          <EduWebIcon className="w-8 h-8 sm:w-10 sm:h-10" interactive={interactive} />
        ) : (
          <EduWebIcon size={iconPixelSizes[size]} interactive={interactive} />
        )}
      </div>
    );
  }

  return (
    <div suppressHydrationWarning className={`inline-flex items-center gap-2 sm:gap-2.5 select-none min-w-0 ${className}`}>
      {size === 'responsive' ? (
        <EduWebIcon className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" interactive={interactive} />
      ) : (
        <EduWebIcon size={iconPixelSizes[size]} interactive={interactive} />
      )}

      <EduWebWordmark
        theme={theme}
        size={size}
        showSubtitle={variant === 'full' && showSubtitle}
        subtitleText={subtitleText}
      />
    </div>
  );
};
