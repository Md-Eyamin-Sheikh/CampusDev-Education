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
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[var(--accent-violet,#8b5cf6)]/10 border border-[var(--accent-violet,#8b5cf6)]/20 text-[var(--accent-violet,#8b5cf6)] text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-violet,#8b5cf6)] shadow-[0_0_8px_var(--accent-violet,#8b5cf6)] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary,#f0eaf8)] mb-4">
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--text-muted,#7e6d9a)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
