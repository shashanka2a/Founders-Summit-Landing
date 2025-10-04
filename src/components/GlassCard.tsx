'use client'

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  interactive?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ hover = true, interactive = false, className = '', children, ...props }, ref) => {
    const baseClasses = "glass-card rounded-xl p-4 sm:p-6 transition-all duration-300 ease-out";
    const hoverClasses = hover ? "hover:glass-card-hover" : "";
    const interactiveClasses = interactive ? "cursor-pointer focus-ring micro-bounce" : "";

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        whileHover={hover ? { scale: 1.02 } : {}}
        whileTap={interactive ? { scale: 0.98 } : {}}
        className={`${baseClasses} ${hoverClasses} ${interactiveClasses} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
