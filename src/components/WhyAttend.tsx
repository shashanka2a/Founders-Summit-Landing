'use client'

import { motion } from 'framer-motion';
import { Brain, Users, Target, Lightbulb, Zap } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function WhyAttend() {
  const highlights = [
    {
      icon: Brain,
      title: 'Learn from Leaders',
      description: 'Gain insights from successful entrepreneurs and industry experts who have built and scaled companies',
      color: 'var(--neon-lime)'
    },
    {
      icon: Users,
      title: 'Expand Your Network',
      description: 'Connect with like-minded founders, potential co-founders, investors, and mentors in your area',
      color: 'var(--neon-aqua)'
    },
    {
      icon: Target,
      title: 'Actionable Takeaways',
      description: 'Walk away with practical strategies, frameworks, and tools you can implement immediately',
      color: 'var(--neon-magenta)'
    },
    {
      icon: Lightbulb,
      title: 'Fresh Perspectives',
      description: 'Discover new approaches to common startup challenges and innovative solutions to growth problems',
      color: 'var(--neon-lime)'
    },
    {
      icon: Zap,
      title: 'Startup Energy',
      description: 'Immerse yourself in the entrepreneurial ecosystem and get energized by the community spirit',
      color: 'var(--neon-aqua)'
    }
  ];

  return (
    <section id="why-attend" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="gradient-text">Attend?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join us for a transformative experience that will accelerate your entrepreneurial journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${highlight.color}20`,
                      color: highlight.color 
                    }}
                  >
                    <IconComponent size={32} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[var(--neon-lime)] transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {highlight.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
