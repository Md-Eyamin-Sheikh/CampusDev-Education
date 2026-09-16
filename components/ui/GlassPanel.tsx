'use client';

import React from 'react';

export interface GlassPanelProps {
  intensity?: 'light' | 'medium' | 'heavy';
  bordered?: boolean;
  glowing?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  intensity = 'medium',
  bordered = true,
  glowing = false,
  rounded = '2xl',
  className = '',
  children,
  onClick,
}) => {
  const intensityClasses = {
    light: 'bg-white/5 backdrop-blur-sm',
    medium: 'bg-white/10 backdrop-blur-md',
    heavy: 'bg-[var(--card-bg,rgba(26,13,46,0.65))] backdrop-blur-xl',
  };

  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  };

  const borderClasses = bordered ? 'border border-[var(--border,rgba(168,85,247,0.12))]' : '';
  const glowClasses = glowing ? 'shadow-[0_0_30px_rgba(139,92,246,0.15)]' : '';
  const interactiveClasses = onClick ? 'cursor-pointer hover:bg-white/15 transition-colors' : '';

  return (
    <div
      className={`${intensityClasses[intensity]} ${roundedClasses[rounded]} ${borderClasses} ${glowClasses} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
