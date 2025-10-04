'use client'

import { motion } from 'framer-motion';
import { Check, Gift } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';

export function Tickets() {
  const benefits = [
    'Full day access to all sessions',
    'Complimentary lunch and refreshments',
    'Networking opportunities with 200+ attendees',
    'Access to startup pitch competition',
    'Digital resources and presentation slides',
    'Certificate of participation',
    'Exclusive founder community access'
  ];

  return (
    <section id="tickets" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your <span className="gradient-text">Tickets</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Secure your spot at Gainesville's premier entrepreneurship event
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <GlassCard className="text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--neon-lime)] via-[var(--neon-aqua)] to-[var(--neon-magenta)]" />
            
            <div className="p-8">
              {/* Price Header */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Gift size={32} className="text-[var(--neon-lime)]" />
                  <span className="text-2xl font-bold gradient-text">FREE</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Free Admission</h3>
                <p className="text-white/60">Limited to 200 attendees</p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 mb-8 text-left">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--neon-lime)]/20 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-[var(--neon-lime)]" />
                    </div>
                    <span className="text-white/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://www.eventbrite.com/e/founders-summit-fall-2025-tickets-1739668006839', '_blank')}
                >
                  Reserve Your Spot
                </GlassButton>
              </motion.div>

              <p className="text-sm text-white/50 mt-4">
                Registration closes October 20th or when capacity is reached
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 max-w-md mx-auto">
            Can't make it? We'll be recording key sessions and sharing resources 
            with all registered attendees.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
