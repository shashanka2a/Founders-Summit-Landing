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
      image: 'https://images.unsplash.com/photo-1661334171123-de55a112427c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NTk2MDIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Rukmini Poddar',
      role: 'Founder, InnovateAI',
      image: 'https://images.unsplash.com/photo-1600783486418-d366cce3ccbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk1NzU5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Denver Beck',
      role: 'CTO, BuildSpace Labs',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTUxOTg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Rose Higgins',
      role: 'Partner, GatorVentures',
      image: 'https://images.unsplash.com/photo-1524538198441-241ff79d153b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1OTYwMjE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
