'use client'

import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold gradient-text">Founders Summit 2025</h3>
            <div className="space-y-2 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>October 24, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Gerson Hall 126, Gainesville</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@founderssummit.co</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Speakers', 'Agenda', 'Venue', 'FAQ', 'Tickets'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-white/60 hover:text-[var(--neon-lime)] transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Hosted By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white">Hosted By</h4>
            <p className="text-white/60">
              <span className="text-[var(--neon-lime)] font-medium">Starter Space</span>
              <br />
              Supporting the next generation of founders in Gainesville and beyond.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 text-center text-white/50"
        >
          <p>&copy; 2025 Founders Summit. All rights reserved. Made with 💚 in Gainesville.</p>
        </motion.div>
      </div>
    </footer>
  );
}
