'use client';

import React from 'react';

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col mb-12 ${alignClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[var(--color-brand,#003B73)]/10 border border-[var(--color-brand,#003B73)]/20 text-[var(--color-brand,#003B73)] text-xs font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand,#003B73)] shadow-[0_0_8px_var(--color-brand,#003B73)] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary,#0F172A)] mb-4 text-balance">
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B73] via-[#00529B] to-[#2E86C1]">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[var(--text-muted,#64748B)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
