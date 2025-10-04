'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { GlassButton } from './GlassButton';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#speakers', label: 'Speakers' },
    { href: '#agenda', label: 'Agenda' },
    { href: '#why-attend', label: 'Why Attend' },
    { href: '#venue', label: 'Venue' },
    { href: '#faq', label: 'FAQ' }
  ];

  return (
    <>
      {/* Marquee Ticker */}
      <div className="bg-gradient-to-r from-[var(--neon-lime)] via-[var(--neon-aqua)] to-[var(--neon-magenta)] text-[var(--text-inverse)] py-2 sm:py-3 overflow-hidden">
        <motion.div
          animate={{ x: [-300, 300] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-xs sm:text-sm font-medium flex items-center gap-4 sm:gap-8"
        >
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex items-center gap-4 sm:gap-8">
              <span>startup</span>
              <span>•</span>
              <span>networking</span>
              <span>•</span>
              <span>demos</span>
              <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-2 sm:top-8 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'glass-card mx-2 sm:mx-4 rounded-xl shadow-lg' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-lg sm:text-xl font-bold text-[var(--text-primary)] cursor-pointer"
            >
              <span className="gradient-text">Founders Summit 2025</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, color: 'var(--neon-lime)' }}
                  className="text-[var(--text-secondary)] hover:text-[var(--neon-lime)] transition-all duration-300 font-medium focus-ring rounded-md px-2 py-1"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <GlassButton 
                variant="primary" 
                size="md"
                onClick={() => window.open('https://www.eventbrite.com/e/founders-summit-fall-2025-tickets-1739668006839', '_blank')}
              >
                Get Tickets
              </GlassButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[var(--text-primary)] p-2 focus-ring rounded-lg mobile-touch-target"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden glass-card mx-2 sm:mx-4 mt-2 rounded-xl overflow-hidden"
            >
              <div className="p-4 sm:p-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-[var(--text-secondary)] hover:text-[var(--neon-lime)] transition-colors duration-300 font-medium py-3 px-2 focus-ring rounded-lg mobile-touch-target"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="pt-4 border-t border-[var(--glass-border)]"
                >
                  <GlassButton 
                    variant="primary" 
                    className="w-full"
                    onClick={() => {
                      window.open('https://www.eventbrite.com/e/founders-summit-fall-2025-tickets-1739668006839', '_blank');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Get Tickets
                  </GlassButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
