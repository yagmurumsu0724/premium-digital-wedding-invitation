import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const EventDetailsSection: React.FC = () => {
  return (
    <section id="details" className="py-20 sm:py-32 px-4 sm:px-6 bg-[#E8DFCE] relative border-t border-[#697052]/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#7D876D] font-medium">
            WEDDING DETAILS • SAVE THE DATE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#283024] mt-2 mb-4 font-normal">
            The Celebration
          </h2>
          <EngravedDivider className="w-40 sm:w-64 h-8 text-[#7D876D]" />
        </div>

        {/* Pure Typography-First Event Layout */}
        <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16 text-center">
          {/* Ceremony Event */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-2.5 sm:space-y-3"
          >
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#697052] font-semibold">
              THE CEREMONY
            </span>
            
            <p className="font-serif italic text-2xl sm:text-4xl text-[#283024]">
              {invitationData.date.ceremonyTime}
            </p>

            <p className="font-serif text-xl sm:text-2xl text-[#38352F] font-light">
              {invitationData.venue.name}
            </p>

            <p className="font-sans text-[11px] sm:text-xs text-[#A79B89] tracking-widest uppercase">
              {invitationData.venue.address}, {invitationData.venue.city}
            </p>

            <p className="font-sans text-xs text-[#7D876D] italic pt-1 sm:pt-2">
              Please arrive 30 minutes prior to the commencement of the service.
            </p>
          </motion.div>

          {/* Hairline Divider Rule */}
          <div className="w-24 sm:w-32 h-[1px] bg-[#697052]/30 mx-auto" />

          {/* Reception Event */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center space-y-2.5 sm:space-y-3"
          >
            <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#697052] font-semibold">
              THE RECEPTION
            </span>

            <p className="font-serif italic text-2xl sm:text-4xl text-[#283024]">
              {invitationData.date.receptionTime} Onwards
            </p>

            <p className="font-serif text-xl sm:text-2xl text-[#38352F] font-light">
              The Grand Pavilion &amp; Terraces
            </p>

            <p className="font-sans text-[11px] sm:text-xs text-[#A79B89] tracking-widest uppercase">
              Dinner, Toasts &amp; Starlight Dancing
            </p>

            <p className="font-sans text-xs text-[#7D876D] italic pt-1 sm:pt-2">
              Followed by candlelit dinner and evening celebrations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
