import React from 'react';
import { motion } from 'framer-motion';
import { WaxSealStamp, EngravedDivider } from '../Botanical/BotanicalFrame';
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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#EDE5D6] px-4 sm:px-6 text-center overflow-hidden"
    >
      {/* Subtle paper noise texture & vignette */}
      <div className="absolute inset-0 bg-paper-texture pointer-events-none opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F7F3EA]/60 via-transparent to-[#283024]/10 pointer-events-none" />

      {/* Main Physical Envelope Card Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-md sm:max-w-lg w-full bg-[#F5F0E6] border border-[#697052]/30 p-6 sm:p-12 shadow-2xl shadow-[#283024]/10 rounded-xs flex flex-col items-center justify-center my-auto"
      >
        {/* Envelope Top Flap Triangle Lines */}
        <div className="absolute top-0 left-0 right-0 h-16 border-b border-[#697052]/15 bg-[#F7F3EA]/50 pointer-events-none rounded-t-xs" />
        
        {/* Double Hairline Vintage Border */}
        <div className="absolute inset-3 border border-[#697052]/20 pointer-events-none rounded-xs" />

        {/* 1. Top Small Caps Eyebrow */}
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#7D876D] mb-4 sm:mb-6 font-medium relative z-10"
        >
          HAND-DELIVERED • {invitationData.couple.tagline}
        </motion.p>

        {/* 2. Tactile Antique Gold Wax Seal Stamp */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="relative my-2 sm:my-4 z-10 cursor-pointer"
          onClick={onOpen}
        >
          <WaxSealStamp initials={invitationData.couple.initials} className="w-28 h-28 sm:w-36 sm:h-36" />
        </motion.div>

        {/* 3. Couple Names */}
        <motion.h1 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-3xl sm:text-5xl font-normal text-[#283024] tracking-tight mt-3 mb-1 sm:mb-2 relative z-10"
        >
          {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson}
        </motion.h1>

        <EngravedDivider className="w-36 sm:w-56 h-6 my-2 sm:my-3 text-[#7D876D] relative z-10" />

        {/* 4. Date */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-sans text-xs uppercase tracking-[0.22em] text-[#697052] mb-6 sm:mb-8 font-medium relative z-10"
        >
          {invitationData.date.display}
        </motion.p>

        {/* 5. Unseal CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={onOpen}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium text-[#283024] bg-transparent border border-[#697052]/60 hover:border-[#697052] hover:bg-[#697052] hover:text-[#F5F0E6] transition-all duration-500 rounded-none cursor-pointer focus:outline-none z-10"
        >
          <span className="relative z-10 transition-colors duration-500">
            Unseal &amp; Open Invitation
          </span>
          <span className="absolute bottom-1 left-5 right-5 h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
        </motion.button>

        <p className="font-sans text-[10px] text-[#A79B89] tracking-widest uppercase mt-4 sm:mt-6 opacity-80 relative z-10">
          STATIONERY ENVELOPE SELECTION
        </p>
      </motion.div>
    </motion.div>
  );
};
