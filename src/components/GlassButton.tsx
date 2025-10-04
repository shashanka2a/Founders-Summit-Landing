'use client'

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  loading?: boolean;
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, loading = false, disabled, ...props }, ref) => {
    const baseClasses = "relative overflow-hidden font-medium rounded-full border backdrop-filter backdrop-blur-lg focus-ring mobile-touch-target micro-bounce transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantClasses = {
      primary: "bg-[var(--neon-lime)] text-[var(--text-inverse)] border-[var(--neon-lime)] hover:bg-[#E6FF61] hover:border-[#E6FF61] hover:shadow-[0_0_24px_rgba(212,255,74,0.4)] active:bg-[#BFFF2E]",
      secondary: "glass-card text-[var(--text-primary)] border-[var(--glass-border)] hover:glass-card-hover hover:text-[var(--text-primary)]",
      ghost: "text-[var(--text-secondary)] border-transparent hover:glass-card hover:border-[var(--glass-border)] hover:text-[var(--text-primary)]"
    };
    
    const sizeClasses = {
      sm: "px-4 py-2.5 text-sm min-h-[40px]",
      md: "px-6 py-3 text-base min-h-[44px]",
      lg: "px-8 py-4 text-lg min-h-[52px]"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.15 }}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        disabled={disabled || loading}
        {...(props as any)}
      >
        <span className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          {children}
        </span>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </motion.button>
    );
  }
);

GlassButton.displayName = 'GlassButton';
