'use client'

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { GlassButton } from './GlassButton';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient opacity-15 sm:opacity-20" />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-5 sm:opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-[var(--text-primary)] uppercase tracking-tight leading-[0.9] sm:leading-[0.85]"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(2.5rem, 12vw, 6rem)'
            }}
          >
            <motion.span
              className="gradient-text block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Founders
            </motion.span>
            <motion.span
              className="gradient-text block"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Summit 2025
            </motion.span>
          </motion.h1>

          {/* Subcopy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] space-y-4 sm:space-y-6"
          >
            <p className="font-medium mobile-text-scale">
              Gainesville • Oct 24, 9:30am–5pm • Free
            </p>
            
            {/* Location Pill */}
            <motion.a
              href="https://maps.google.com/?q=Gerson+Hall+126,+1368+Union+Rd,+Gainesville,+FL"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 sm:gap-3 glass-card px-3 sm:px-4 py-2 sm:py-3 rounded-full text-sm sm:text-base mobile-touch-target cursor-pointer hover:glass-card-hover transition-all duration-300"
            >
              <MapPin size={16} className="text-[var(--neon-aqua)] flex-shrink-0" />
              <span className="text-[var(--text-primary)]">Gerson Hall 126, 1368 Union Rd</span>
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8"
          >
            <GlassButton 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => window.open('https://www.eventbrite.com/e/founders-summit-fall-2025-tickets-1739668006839', '_blank')}
            >
              Get Tickets
            </GlassButton>
            <GlassButton 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => {
                const event = {
                  title: 'Founders Summit 2025',
                  start: new Date('2025-10-24T09:30:00'),
                  end: new Date('2025-10-24T17:00:00'),
                  location: 'Gerson Hall 126, 1368 Union Rd, Gainesville, FL',
                  description: 'A full day of learning, networking, and inspiration designed for founders at every stage'
                };
                
                // Create Google Calendar URL
                const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${event.end.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;
                
                window.open(googleCalUrl, '_blank');
              }}
            >
              <Calendar size={18} className="mr-2 flex-shrink-0" />
              <span>Add to Calendar</span>
            </GlassButton>
          </motion.div>
        </motion.div>

        {/* Floating Elements - Reduced on mobile */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-16 sm:top-20 left-4 sm:left-10 w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-[var(--neon-lime)] opacity-15 sm:opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-16 sm:bottom-20 right-4 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-[var(--neon-magenta)] opacity-15 sm:opacity-20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/2 right-8 sm:right-20 w-10 sm:w-16 h-10 sm:h-16 rounded-full bg-[var(--neon-aqua)] opacity-15 sm:opacity-20 blur-xl"
        />
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center cursor-pointer hover:border-[var(--neon-lime)] transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 h-2 sm:h-3 bg-[var(--text-muted)] rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
