'use client'

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { GlassButton } from './GlassButton';
import { GlassCard } from './GlassCard';

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="text-center relative overflow-hidden">
            {/* Decorative gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-lime)] via-[var(--neon-aqua)] to-[var(--neon-magenta)] p-[1px] rounded-xl">
              <div className="w-full h-full bg-[#0B0D0F] rounded-xl" />
            </div>
            
            <div className="relative z-10 p-12">
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              >
                Build the Future <span className="gradient-text">With Us</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
              >
                Join the next generation of entrepreneurs shaping tomorrow's innovations. 
                Don't miss this opportunity to connect, learn, and grow.
              </motion.p>

              {/* Email Signup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8"
              >
                <div className="flex-1 relative">
                  <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-[var(--neon-lime)] transition-colors duration-300"
                  />
                </div>
                <GlassButton variant="secondary" className="sm:w-auto">
                  <span>Subscribe</span>
                  <ArrowRight size={16} className="ml-2" />
                </GlassButton>
              </motion.div>

              {/* Main CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  className="text-lg px-12 py-4"
                  onClick={() => window.open('https://www.eventbrite.com/e/founders-summit-fall-2025-tickets-1739668006839', '_blank')}
                >
                  Get Your Free Ticket Now
                </GlassButton>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-sm text-white/50 mt-6"
              >
                Limited spots available • Free admission • October 24, 2025
              </motion.p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[var(--neon-lime)] opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[var(--neon-magenta)] opacity-20 blur-xl"
        />
      </div>
    </section>
  );
}
