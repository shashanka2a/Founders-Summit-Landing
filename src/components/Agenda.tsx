'use client'

import { motion } from 'framer-motion';
import { Clock, Users, Coffee, Presentation, Utensils, Rocket, Network } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function Agenda() {
  const scheduleItems = [
    {
      time: '9:30 AM',
      title: 'Registration & Coffee',
      subtitle: 'Brewing Thoughts',
      description: 'Check-in, networking, and energizing coffee',
      icon: Coffee,
      color: 'var(--neon-lime)'
    },
    {
      time: '10:00 AM',
      title: 'Opening Keynote',
      subtitle: 'The Future of Entrepreneurship',
      description: 'Setting the stage for innovation',
      icon: Presentation,
      color: 'var(--neon-aqua)'
    },
    {
      time: '11:00 AM',
      title: 'Panel Discussion',
      subtitle: 'Scaling Your Startup',
      description: 'Insights from successful founders',
      icon: Users,
      color: 'var(--neon-magenta)'
    },
    {
      time: '12:30 PM',
      title: 'Lunch Break',
      subtitle: 'Networking & Meal',
      description: 'Catered lunch included for all attendees',
      icon: Utensils,
      color: 'var(--neon-lime)'
    },
    {
      time: '1:30 PM',
      title: 'Startup Demos',
      subtitle: 'Pitch Competition',
      description: 'Watch emerging startups present their solutions',
      icon: Rocket,
      color: 'var(--neon-aqua)'
    },
    {
      time: '3:00 PM',
      title: 'Networking Session',
      subtitle: 'Connect & Collaborate',
      description: 'Build meaningful connections with fellow founders',
      icon: Network,
      color: 'var(--neon-magenta)'
    }
  ];

  return (
    <section id="agenda" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 mobile-heading-scale">
            Event <span className="gradient-text">Agenda</span>
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[var(--text-muted)] mb-4">
            <Clock size={18} className="flex-shrink-0" />
            <span className="text-base sm:text-lg mobile-text-scale">7h 30m • In person</span>
          </div>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mobile-text-scale">
            A full day of learning, networking, and inspiration designed for founders at every stage
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--neon-lime)] via-[var(--neon-aqua)] to-[var(--neon-magenta)] opacity-40" />

          <div className="space-y-6 sm:space-y-8">
            {scheduleItems.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven && window.innerWidth >= 768 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex items-start ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className="absolute left-4 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full z-10 shadow-lg"
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: `0 0 16px ${item.color}60`
                    }}
                  />

                  {/* Content */}
                  <div className={`flex-1 ${
                    isEven 
                      ? 'md:pr-6 lg:pr-8 pl-12 sm:pl-16' 
                      : 'md:pl-6 lg:pl-8 pl-12 sm:pl-16'
                  }`}>
                    <GlassCard className="relative">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div 
                          className="p-2 sm:p-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: `${item.color}20`, color: item.color }}
                        >
                          <IconComponent size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2">
                            <span 
                              className="text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap"
                              style={{ backgroundColor: `${item.color}20`, color: item.color }}
                            >
                              {item.time}
                            </span>
                          </div>
                          
                          <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-1">{item.title}</h3>
                          <h4 className="text-base sm:text-lg gradient-text font-medium mb-2">{item.subtitle}</h4>
                          <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
