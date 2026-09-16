'use client';

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary,#0a0312)] focus-visible:ring-[var(--accent,#c026d3)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 rounded-lg';
  
  const variantClasses = {
    primary: 'bg-[linear-gradient(110deg,#9333ea,#c026d3,#e879f9)] text-white shadow-[0_0_15px_rgba(192,38,211,0.3)] hover:shadow-[0_0_25px_rgba(192,38,211,0.5)] border-none',
    secondary: 'bg-[rgba(139,92,246,0.08)] text-[var(--text-primary,#f0eaf8)] border border-[var(--accent-violet,#8b5cf6)]/30 hover:bg-[rgba(139,92,246,0.15)] hover:border-[var(--accent-violet,#8b5cf6)]/50 backdrop-blur-sm',
    ghost: 'bg-transparent text-[var(--text-primary,#f0eaf8)] hover:bg-white/10 hover:text-white',
    outline: 'bg-transparent text-[var(--text-primary,#f0eaf8)] border border-[var(--accent,#c026d3)] hover:bg-[var(--accent,#c026d3)]/10',
    danger: 'bg-red-500/20 text-red-500 border border-red-500/50 hover:bg-red-500/30',
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
    xl: 'h-14 px-8 text-xl',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
