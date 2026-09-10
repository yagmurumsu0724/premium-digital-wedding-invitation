import React from 'react';
import { motion } from 'framer-motion';
import { EngravedBranchLeft, EngravedBranchRight, EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const HeroInvitation: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[94vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-32 pb-20 overflow-hidden bg-[var(--paper)]"
    >
      {/* Asymmetric Corner Engraved Botanical Illustration Accents */}
      <div className="absolute top-10 left-2 sm:left-8 opacity-70 pointer-events-none hidden sm:block">
        <EngravedBranchLeft className="w-32 h-44 md:w-48 md:h-64 text-[var(--olive)]" />
      </div>
      <div className="absolute top-10 right-2 sm:right-8 opacity-70 pointer-events-none hidden sm:block">
        <EngravedBranchRight className="w-32 h-44 md:w-48 md:h-64 text-[var(--olive)]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center z-10"
      >
        {/* Small Caps Eyebrow */}
        <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[var(--sage)] mb-6 font-medium">
          {invitationData.hero.eyebrow}
        </p>

        {/* Main Couple Names in Printed High-Contrast Serif */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-normal text-[var(--ink)] leading-[0.95] tracking-tight uppercase mb-4 sm:mb-6">
          <span className="block">{invitationData.couple.firstPerson}</span>
          <span className="font-serif italic lowercase text-3xl sm:text-5xl lg:text-7xl text-[var(--taupe)] my-2 block font-light">&amp;</span>
          <span className="block">{invitationData.couple.secondPerson}</span>
        </h1>

        {/* Engraved Botanical Divider */}
        <EngravedDivider className="w-48 sm:w-64 h-8 my-4 text-[var(--sage)]" />

        {/* Subtitle / Invitation Text */}
        <p className="font-serif italic text-lg sm:text-2xl text-[var(--olive-deep)] max-w-xl mx-auto my-4 font-light leading-relaxed px-4">
          {invitationData.hero.subtitle}
        </p>

        {/* Printed Double-Hairline Date Frame */}
        <div className="mt-8 relative bg-[var(--cream-light)] border border-[var(--olive)]/25 p-5 sm:px-12 sm:py-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-[var(--ink)] rounded-xs">
          <div className="absolute inset-1 border border-[var(--olive)]/15 pointer-events-none rounded-xs" />
          
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-[var(--olive)]">
            {invitationData.date.day} {invitationData.date.month} {invitationData.date.year}
          </span>
          <span className="hidden sm:inline text-[var(--taupe)]">•</span>
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.18em] text-[var(--charcoal)]">
            {invitationData.venue.name}, {invitationData.venue.city}
          </span>
        </div>

        {/* Scroll CTA Indicator */}
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="mt-16 sm:mt-20 flex flex-col items-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--taupe)] mb-2">
            {invitationData.hero.scrollCTA}
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[var(--sage)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
