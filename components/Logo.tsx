'use client';
import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'responsive';
}

export const CampusDevIcon: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 36 
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-xl bg-[#0e0520] shadow-md shadow-fuchsia-950/20 flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[72%] h-[72%]"
      >
        {/* Graduation cap top rhombus */}
        <polygon 
          points="50,15 88,32 50,49 12,32" 
          fill="url(#capGrad)" 
        />
        {/* Tassel cord & button */}
        <circle cx="50" cy="32" r="3" fill="#c4b5fd" />
        <path 
          d="M50,32 C68,34 76,42 78,54" 
          stroke="#c4b5fd" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
        <circle cx="78" cy="56" r="3.5" fill="#c4b5fd" />

        {/* Code symbol inside cap < > */}
        <path 
          d="M40,28 L32,32 L40,36" 
          stroke="#FFFFFF" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M60,28 L68,32 L60,36" 
          stroke="#FFFFFF" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Lower U-arc / smile arch representing student collar / foundation */}
        <path 
          d="M26,45 C26,72 74,72 74,45" 
          stroke="#e879f9" 
          strokeWidth="7" 
          strokeLinecap="round" 
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="capGrad" x1="12" y1="32" x2="88" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#c026d3" />
            <stop offset="50%" stopColor="#d946ef" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  theme = 'light',
  className = '',
  size = 'md' 
}) => {
  const isResponsive = size === 'responsive';

  const iconSizes = {
    sm: 30,
    md: 38,
    lg: 48,
    responsive: 38,
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    responsive: 'text-[17px] xs:text-lg sm:text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[9px] tracking-[0.16em]',
    md: 'text-[10px] tracking-[0.2em]',
    lg: 'text-xs tracking-[0.24em]',
    responsive: 'text-[8.5px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em]',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 sm:gap-2.5 select-none min-w-0 ${className}`}>
      {isResponsive ? (
        <>
          <div className="sm:hidden flex-shrink-0">
            <CampusDevIcon size={30} />
          </div>
          <div className="hidden sm:block flex-shrink-0">
            <CampusDevIcon size={38} />
          </div>
        </>
      ) : (
        <CampusDevIcon size={iconSizes[size]} />
      )}
      
      {variant === 'full' && (
        <div className="flex flex-col min-w-0 justify-center">
          <div className={`font-black font-heading leading-none ${textSizes[size]} truncate tracking-tight`}>
            <span className={theme === 'dark' ? 'text-white' : 'text-[#0B1C30]'}>Campus</span>
            <span className="text-fuchsia-400">Dev</span>
          </div>
          <span 
            className={`font-semibold uppercase ${subTextSizes[size]} ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            } mt-0.5 truncate hidden sm:block`}
          >
            Education Web Solutions
          </span>
        </div>
      )}
    </div>
  );
};
