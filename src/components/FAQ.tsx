'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { GlassCard } from './GlassCard';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get my tickets and is registration really free?',
      answer: 'Yes, the event is completely free! Simply click the "Get Tickets" button to register. You\'ll receive a confirmation email with your digital ticket and event details. We keep it free to make entrepreneurship education accessible to everyone.'
    },
    {
      question: 'What\'s the full schedule and what sessions shouldn\'t I miss?',
      answer: 'The event runs from 9:30 AM to 5:00 PM. Key highlights include the opening keynote at 10 AM, the scaling panel at 11 AM, and the startup pitch competition at 1:30 PM. All sessions are valuable, but the networking lunch and final networking session are perfect for making connections.'
    },
    {
      question: 'Where can I park and how do I get to the venue?',
      answer: 'Free parking is available in the Union parking garage. The venue (Gerson Hall 126) is located at 1368 Union Rd. We recommend arriving 15-30 minutes early for check-in and parking. The building is wheelchair accessible with multiple entrances.'
    },
    {
      question: 'Who should attend this event?',
      answer: 'This event is perfect for aspiring entrepreneurs, early-stage founders, students interested in startups, investors, and anyone curious about the entrepreneurship ecosystem. Whether you\'re just starting or scaling your venture, you\'ll find valuable insights and connections.'
    },
    {
      question: 'What\'s the dress code and what should I bring?',
      answer: 'Business casual is recommended, but come as you are! Bring business cards for networking, a notebook for key insights, and your phone/laptop for connecting with new contacts. We\'ll provide all materials, lunch, and refreshments throughout the day.'
    },
    {
      question: 'Can I volunteer or get involved with future events?',
      answer: 'Absolutely! We\'re always looking for passionate volunteers to help with events and community building. Email us at volunteers@starterspace.org or find us after the event. We also host monthly meetups and workshops throughout the year.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 mobile-heading-scale">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mobile-text-scale">
            Got questions? We've got answers. Here's everything you need to know about the event.
          </p>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <GlassCard 
                className="cursor-pointer transition-all duration-300 hover:border-[var(--neon-lime)]/40 focus-ring mobile-touch-target"
                onClick={() => toggleFAQ(index)}
                hover={false}
                interactive={true}
                tabIndex={0}
                role="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] flex-1 text-left">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown 
                      size={20} 
                      className={`transition-colors duration-300 ${
                        openIndex === index ? 'text-[var(--neon-lime)]' : 'text-[var(--text-muted)]'
                      }`} 
                    />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.4, 0, 0.2, 1],
                        opacity: { delay: openIndex === index ? 0.1 : 0 }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="pt-4 border-t border-[var(--glass-border)] mt-4"
                      >
                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
