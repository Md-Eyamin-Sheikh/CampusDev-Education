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
  // No backdrop-blur on cards — only navbar/bottom-nav get blur (mobile perf)
  const baseClasses = 'rounded-[var(--radius-card,16px)] overflow-hidden transition-all duration-300';

  const variantClasses = {
    default: 'bg-[var(--color-surface)] border border-[var(--color-line)] shadow-[var(--shadow-card)]',
    elevated: 'bg-[var(--color-surface)] border border-[var(--color-line)] shadow-[0_16px_40px_-12px_rgb(15_23_42/.12),0_4px_12px_rgb(15_23_42/.06)]',
    bordered: 'bg-transparent border-2 border-[var(--color-brand)] border-opacity-30',
    glow: 'bg-[var(--color-surface)] border border-[var(--color-line)] shadow-[var(--shadow-glow)]',
  };

  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hover
    ? 'hover:-translate-y-1 hover:border-[var(--color-brand)]/20 hover:shadow-[0_16px_40px_-8px_rgba(0,59,115,.12)] cursor-pointer'
    : '';
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
