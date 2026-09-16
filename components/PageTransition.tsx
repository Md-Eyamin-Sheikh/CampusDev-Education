'use client';

import React from 'react';
import { NavSection } from '../types';

interface PageTransitionProps {
  section: NavSection;
  children: React.ReactNode;
}

export function PageTransition({ section, children }: PageTransitionProps) {
  return (
    <div
      key={section}
      className="w-full animate-[fadeIn_0.25s_ease-out_forwards]"
    >
      {children}
    </div>
  );
}
