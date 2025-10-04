'use client'

import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Accessibility } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { GlassButton } from './GlassButton';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Venue() {
  return (
    <section id="venue" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Venue & <span className="gradient-text">Logistics</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join us at the heart of innovation in Gainesville's premier event space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="overflow-hidden p-0">
              <div className="relative h-80 bg-gradient-to-br from-[var(--neon-lime)]/20 to-[var(--neon-magenta)]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559223669-d7bb31d71f26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHZlbnVlfGVufDF8fHx8MTc1OTYwMjE4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Gerson Hall venue"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Gerson Hall 126</h3>
                  <p className="text-white/80">Modern conference facility with state-of-the-art technology</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Venue Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[var(--neon-lime)]/20">
                  <MapPin size={24} className="text-[var(--neon-lime)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Address</h4>
                  <p className="text-white/70 mb-4">
                    Gerson Hall 126<br />
                    1368 Union Rd<br />
                    Gainesville, FL 32611
                  </p>
                  <GlassButton 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.open('https://maps.google.com/?q=Gerson+Hall+126,+1368+Union+Rd,+Gainesville,+FL+32611', '_blank')}
                  >
                    <Navigation size={16} className="mr-2" />
                    Get Directions
                  </GlassButton>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[var(--neon-aqua)]/20">
                  <Car size={24} className="text-[var(--neon-aqua)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Parking</h4>
                  <p className="text-white/70">
                    Free parking available in the Union parking garage. 
                    Additional street parking on Union Road and surrounding areas.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[var(--neon-magenta)]/20">
                  <Accessibility size={24} className="text-[var(--neon-magenta)]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Accessibility</h4>
                  <p className="text-white/70">
                    The venue is fully accessible with wheelchair access, 
                    accessible restrooms, and reserved seating areas available.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
