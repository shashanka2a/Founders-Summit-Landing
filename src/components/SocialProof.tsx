'use client'

import { motion } from 'framer-motion';

export function SocialProof() {
  const partners = [
    { name: 'Starter Space', logo: 'SS' },
    { name: 'TechFlow', logo: 'TF' },
    { name: 'InnovateUF', logo: 'IU' },
    { name: 'GatorVentures', logo: 'GV' },
    { name: 'BuildSpace', logo: 'BS' }
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 sm:space-y-8"
        >
          <h3 className="text-[var(--text-muted)] text-sm sm:text-lg">Hosted by</h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-bold mb-2">Starter Space</h2>
            <p className="text-[var(--text-secondary)] mobile-text-scale">Supporting the next generation of founders</p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full flex items-center justify-center group-hover:border-[var(--neon-lime)] group-hover:bg-[var(--glass-hover)] transition-all duration-300 backdrop-blur-lg">
                  <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--neon-lime)] transition-colors">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-[var(--text-muted)] group-hover:text-[var(--text-secondary)] transition-colors text-center">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
