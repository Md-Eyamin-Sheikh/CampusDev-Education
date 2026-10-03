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
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ' +
    'focus-visible:ring-offset-[var(--color-canvas)] focus-visible:ring-[var(--color-brand)] ' +
    'active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 rounded-xl';

  const variantClasses = {
    primary:
      'bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white ' +
      'shadow-[0_4px_14px_rgba(30,122,80,.24)] hover:shadow-[0_6px_20px_rgba(30,122,80,.30)] border-none',
    secondary:
      'bg-[var(--color-brand-soft)] text-[var(--color-brand)] border border-[var(--color-brand)]/20 ' +
      'hover:bg-[var(--color-brand)]/15 hover:border-[var(--color-brand)]/35',
    ghost:
      'bg-transparent text-[var(--color-fg)] hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]',
    outline:
      'bg-transparent text-[var(--color-brand)] border border-[var(--color-brand)] ' +
      'hover:bg-[var(--color-brand-soft)]',
    danger:
      'bg-[var(--color-danger)]/10 text-[var(--color-danger)] border border-[var(--color-danger)]/40 ' +
      'hover:bg-[var(--color-danger)]/20',
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
