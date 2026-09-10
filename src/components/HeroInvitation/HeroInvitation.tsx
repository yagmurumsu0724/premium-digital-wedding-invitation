import React from 'react';
import { motion } from 'framer-motion';
import { EngravedBranchLeft, EngravedBranchRight, EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const HeroInvitation: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden bg-[#F4EFE6]"
    >
      {/* Controlled Asymmetrical Copperplate Botanical Illustrations */}
      <div className="absolute top-6 right-2 sm:right-6 opacity-75 pointer-events-none hidden sm:block">
        <EngravedBranchRight className="w-36 h-52 sm:w-56 sm:h-72 text-[#1E231B]" />
      </div>

      <div className="absolute bottom-6 left-2 sm:left-6 opacity-75 pointer-events-none hidden sm:block">
        <EngravedBranchLeft className="w-36 h-52 sm:w-56 sm:h-72 text-[#1E231B]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center z-10 w-full"
      >
        {/* Small Caps Archival Eyebrow */}
        <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#7A856E] mb-4 sm:mb-6 font-medium">
          {invitationData.hero.eyebrow}
        </p>

        {/* Main Letterpress Couple Names */}
        <h1 className="font-serif text-4xl sm:text-7xl lg:text-9xl font-normal text-[#1E231B] leading-[0.95] tracking-tight uppercase mb-3 sm:mb-5 w-full letterpress-text">
          <span className="block">{invitationData.couple.firstPerson}</span>
          <span className="font-serif italic lowercase text-2xl sm:text-5xl lg:text-7xl text-[#9E8354] my-1 sm:my-2 block font-light">&amp;</span>
          <span className="block">{invitationData.couple.secondPerson}</span>
        </h1>

        {/* Engraved Botanical Divider */}
        <EngravedDivider className="w-40 sm:w-64 h-8 my-3 sm:my-4 text-[#9E8354]" />

        {/* Subtitle / Invitation Text */}
        <p className="font-serif italic text-base sm:text-2xl text-[#3D4433] max-w-xl mx-auto my-3 sm:my-4 font-light leading-relaxed px-4">
          {invitationData.hero.subtitle}
        </p>

        {/* Printed Hairline Date Frame on Aged Vellum */}
        <div className="mt-6 sm:mt-8 relative bg-[#EAE0D0] border border-[#9E8354]/30 p-4 sm:px-12 sm:py-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-[#1E231B] rounded-xs shadow-2xs max-w-lg sm:max-w-none deboss-frame">
          <div className="absolute inset-1 border border-[#9E8354]/18 pointer-events-none rounded-xs" />
          
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-[#3D4433]">
            {invitationData.date.day} {invitationData.date.month} {invitationData.date.year}
          </span>
          <span className="hidden sm:inline text-[#9E8354]">•</span>
          <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#1E231B]">
            {invitationData.venue.name}, {invitationData.venue.city}
          </span>
        </div>

        {/* Understated Scroll CTA Indicator */}
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="mt-12 sm:mt-18 flex flex-col items-center"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A79B89] mb-2">
            {invitationData.hero.scrollCTA}
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#7A856E] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
