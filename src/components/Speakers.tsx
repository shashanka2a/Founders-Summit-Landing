'use client'

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Speakers() {
  const speakers = [
    {
      name: 'Govinda Romero',
      role: 'CEO, TechFlow Ventures',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1134353883%2F127239494063%2F1%2Foriginal.20250924-185032?auto=format%2Ccompress&q=75&sharp=10&rect=451%2C0%2C1899%2C1899&s=d8253423c8ad4c3c8e9d366860747378'
    },
    {
      name: 'Rukmini Poddar',
      role: 'Founder, InnovateAI',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1140406543%2F127239494063%2F1%2Foriginal.20250930-184730?auto=format%2Ccompress&q=75&sharp=10&s=56e0cf5a67e39155f2528d52684114ad'
    },
    {
      name: 'Denver Beck',
      role: 'CTO, BuildSpace Labs',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1140417713%2F127239494063%2F1%2Foriginal.20250930-185614?auto=format%2Ccompress&q=75&sharp=10&rect=320%2C19%2C977%2C977&s=baf50cac3b9f8330b05fd41b129ae8bb'
    },
    {
      name: 'Rose Higgins',
      role: 'Partner, GatorVentures',
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F1140417713%2F127239494063%2F1%2Foriginal.20250930-185614?auto=format%2Ccompress&q=75&sharp=10&rect=320%2C19%2C977%2C977&s=baf50cac3b9f8330b05fd41b129ae8bb'
    }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 mobile-heading-scale">
            Meet Our <span className="gradient-text">Speakers</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mobile-text-scale">
            Learn from industry leaders who are shaping the future of technology and entrepreneurship
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group cursor-pointer focus-ring mobile-touch-target" interactive={true}>
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white/10 ring-2 ring-transparent group-hover:ring-[var(--neon-lime)]/50 transition-all duration-300">
                      <ImageWithFallback
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--neon-lime)]/20 to-[var(--neon-magenta)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1 truncate group-hover:text-[var(--neon-lime)] transition-colors duration-300">{speaker.name}</h3>
                    <p className="text-[var(--text-muted)] mb-3 text-sm sm:text-base line-clamp-2">{speaker.role}</p>
                    
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-[var(--neon-lime)] group-hover:text-[var(--neon-aqua)] transition-colors duration-300 font-medium text-sm sm:text-base"
                    >
                      <span>View bio</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
