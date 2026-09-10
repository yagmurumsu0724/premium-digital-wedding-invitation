import React from 'react';
import { motion } from 'framer-motion';
import { EngravedWreath, EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

interface OpeningCoverProps {
  onOpen: () => void;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -30,
        transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--paper)] px-6 text-center overflow-hidden"
    >
      {/* Background paper texture & warm illumination */}
      <div className="absolute inset-0 bg-paper-texture pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--cream-light)]/40 via-transparent to-[var(--ink)]/5 pointer-events-none" />

      {/* Main Physical Card Envelope Container */}
      <motion.div 
        initial={{ scale: 0.96, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-lg w-full bg-[var(--paper)] border border-[var(--olive)]/25 p-8 sm:p-14 shadow-xl shadow-[var(--ink)]/5 rounded-xs flex flex-col items-center justify-center my-auto"
      >
        {/* Double Hairline Vintage Border */}
        <div className="absolute inset-3 border border-[var(--olive)]/15 pointer-events-none rounded-xs" />

        {/* 1. Tagline Eyebrow */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-[11px] uppercase tracking-[0.28em] text-[var(--sage)] mb-6 font-medium"
        >
          {invitationData.couple.tagline}
        </motion.p>

        {/* 2. Engraved Wreath & Monogram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="relative my-3 flex items-center justify-center"
        >
          <EngravedWreath className="w-36 h-36 sm:w-44 sm:h-44 text-[var(--olive)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-3xl sm:text-4xl text-[var(--ink)] tracking-widest font-normal">
              {invitationData.couple.initials}
            </span>
          </div>
        </motion.div>

        {/* 3. Couple Names */}
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-3xl sm:text-5xl font-normal text-[var(--ink)] tracking-tight mt-2 mb-2"
        >
          {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson}
        </motion.h1>

        <EngravedDivider className="w-40 sm:w-56 h-6 my-3 text-[var(--sage)]" />

        {/* 4. Date */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-sans text-xs uppercase tracking-[0.25em] text-[var(--olive)] mb-8 font-medium"
        >
          {invitationData.date.display}
        </motion.p>

        {/* 5. Minimal Vintage CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={onOpen}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center px-8 py-3 text-xs uppercase tracking-[0.25em] font-medium text-[var(--ink)] bg-transparent border border-[var(--olive)]/60 hover:border-[var(--olive)] hover:bg-[var(--olive)] hover:text-[var(--paper)] transition-all duration-500 rounded-none cursor-pointer focus:outline-none"
        >
          <span className="relative z-10 transition-colors duration-500">
            Open Invitation
          </span>
          <span className="absolute bottom-1 left-6 right-6 h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </motion.button>

        <p className="font-sans text-[10px] text-[var(--taupe)] tracking-widest uppercase mt-6 opacity-80">
          Printed &amp; Sealed with Care
        </p>
      </motion.div>
    </motion.div>
  );
};
