import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { invitationData } from '../../data/invitationData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, isScrolled } = useScrollProgress();

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'story', label: 'OUR STORY' },
    { id: 'details', label: 'THE DAY' },
    { id: 'venue', label: 'VENUE' },
    { id: 'schedule', label: 'SCHEDULE' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'dress-code', label: 'DRESS CODE' },
    { id: 'rsvp', label: 'RSVP' }
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Fixed Desktop & Mobile Header Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[var(--paper)]/90 backdrop-blur-md border-b border-[var(--olive)]/15 py-3.5 shadow-2xs' 
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Monogram Link */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-serif text-2xl text-[var(--ink)] tracking-widest hover:text-[var(--olive)] transition-colors focus:outline-none cursor-pointer font-normal"
          >
            {invitationData.couple.initials}
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-[11px] uppercase tracking-[0.18em] transition-all duration-300 relative py-1 focus:outline-none cursor-pointer ${
                  activeSection === link.id
                    ? 'text-[var(--olive)] font-semibold'
                    : 'text-[var(--ink)]/75 hover:text-[var(--ink)]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--olive)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[var(--ink)] hover:text-[var(--olive)] focus:outline-none transition-colors cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Paper Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-[var(--paper)] pt-24 px-8 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center my-auto">
              <span className="font-serif text-3xl text-[var(--olive)] mb-4 italic">
                {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson}
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-serif text-2xl uppercase tracking-[0.2em] transition-colors py-1 ${
                    activeSection === link.id
                      ? 'text-[var(--olive)] font-normal border-b border-[var(--olive)]'
                      : 'text-[var(--ink)]/80 hover:text-[var(--ink)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="text-center font-sans text-xs text-[var(--taupe)] tracking-widest uppercase mt-8">
              {invitationData.date.display}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
