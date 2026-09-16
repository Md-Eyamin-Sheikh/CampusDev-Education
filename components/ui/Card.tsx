'use client';

import React from 'react';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered' | 'glow';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hover = false,
  padding = 'md',
  className = '',
  children,
  onClick,
}) => {
  const baseClasses = 'rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-[var(--card-bg,rgba(26,13,46,0.65))] border border-[var(--border,rgba(168,85,247,0.12))]',
    elevated: 'bg-[rgba(26,13,46,0.8)] border border-[rgba(168,85,247,0.2)] shadow-xl shadow-black/50',
    bordered: 'bg-transparent border-2 border-[var(--border-strong,rgba(192,38,211,0.35))]',
    glow: 'bg-[var(--card-bg,rgba(26,13,46,0.65))] border border-[var(--border-strong,rgba(192,38,211,0.35))] shadow-[var(--shadow-glow,0_18px_60px_rgba(5,1,13,0.5),0_0_40px_rgba(192,38,211,0.15))]',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hover ? 'hover:-translate-y-1 hover:border-[var(--accent-violet,#8b5cf6)]/50 hover:shadow-2xl hover:shadow-[var(--accent-violet,#8b5cf6)]/20 cursor-pointer' : '';
  const interactiveClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${interactiveClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
