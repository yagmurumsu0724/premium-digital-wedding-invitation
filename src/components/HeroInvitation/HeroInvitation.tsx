import React from 'react';
import { motion } from 'framer-motion';
import { EngravedBranchLeft, EngravedBranchRight, EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const HeroInvitation: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden bg-[#F5F0E6]"
    >
      {/* Asymmetric Corner Engraved Botanical Illustration Accents */}
      <div className="absolute top-8 left-2 sm:left-6 opacity-60 pointer-events-none hidden sm:block">
        <EngravedBranchLeft className="w-28 h-40 sm:w-44 sm:h-60 text-[#697052]" />
      </div>
      <div className="absolute top-8 right-2 sm:right-6 opacity-60 pointer-events-none hidden sm:block">
        <EngravedBranchRight className="w-28 h-40 sm:w-44 sm:h-60 text-[#697052]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center z-10 w-full"
      >
        {/* Small Caps Eyebrow */}
        <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#7D876D] mb-4 sm:mb-6 font-medium">
          {invitationData.hero.eyebrow}
        </p>

        {/* Main Couple Names - Primary Visual Focus */}
        <h1 className="font-serif text-4xl sm:text-7xl lg:text-9xl font-normal text-[#283024] leading-[0.95] tracking-tight uppercase mb-4 sm:mb-6 w-full">
          <span className="block">{invitationData.couple.firstPerson}</span>
          <span className="font-serif italic lowercase text-2xl sm:text-5xl lg:text-7xl text-[#A79B89] my-1 sm:my-2 block font-light">&amp;</span>
          <span className="block">{invitationData.couple.secondPerson}</span>
        </h1>

        {/* Engraved Botanical Divider */}
        <EngravedDivider className="w-40 sm:w-64 h-8 my-3 sm:my-4 text-[#7D876D]" />

        {/* Subtitle / Invitation Text */}
        <p className="font-serif italic text-base sm:text-2xl text-[#4F563D] max-w-xl mx-auto my-3 sm:my-4 font-light leading-relaxed px-4">
          {invitationData.hero.subtitle}
        </p>

        {/* Printed Double-Hairline Date Frame */}
        <div className="mt-6 sm:mt-8 relative bg-[#F7F3EA] border border-[#697052]/25 p-4 sm:px-12 sm:py-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-[#283024] rounded-xs shadow-2xs max-w-lg sm:max-w-none">
          <div className="absolute inset-1 border border-[#697052]/15 pointer-events-none rounded-xs" />
          
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-[#697052]">
            {invitationData.date.day} {invitationData.date.month} {invitationData.date.year}
          </span>
          <span className="hidden sm:inline text-[#A79B89]">•</span>
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.18em] text-[#38352F]">
            {invitationData.venue.name}, {invitationData.venue.city}
          </span>
        </div>

        {/* Understated Scroll CTA Indicator */}
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="mt-12 sm:mt-18 flex flex-col items-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#A79B89] mb-2">
            {invitationData.hero.scrollCTA}
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#7D876D] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
