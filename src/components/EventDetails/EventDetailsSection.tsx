import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const EventDetailsSection: React.FC = () => {
  return (
    <section id="details" className="py-24 md:py-36 px-6 bg-[var(--paper-deep)] relative border-t border-[var(--olive)]/15">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            WEDDING DETAILS • SAVE THE DATE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] mt-2 mb-4 font-normal">
            The Celebration
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        {/* Pure Typography-First Event Layout */}
        <div className="max-w-2xl mx-auto space-y-16 text-center">
          {/* Ceremony Event */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--olive)] font-semibold">
              THE CEREMONY
            </span>
            
            <p className="font-serif italic text-3xl sm:text-4xl text-[var(--ink)]">
              {invitationData.date.ceremonyTime}
            </p>

            <p className="font-serif text-xl sm:text-2xl text-[var(--charcoal)] font-light">
              {invitationData.venue.name}
            </p>

            <p className="font-sans text-xs text-[var(--taupe)] tracking-widest uppercase">
              {invitationData.venue.address}, {invitationData.venue.city}
            </p>

            <p className="font-sans text-xs text-[var(--sage)] italic pt-2">
              Please arrive 30 minutes prior to the commencement of the service.
            </p>
          </motion.div>

          {/* Hairline Divider Rule */}
          <div className="w-32 h-[1px] bg-[var(--olive)]/30 mx-auto" />

          {/* Reception Event */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--olive)] font-semibold">
              THE RECEPTION
            </span>

            <p className="font-serif italic text-3xl sm:text-4xl text-[var(--ink)]">
              {invitationData.date.receptionTime} Onwards
            </p>

            <p className="font-serif text-xl sm:text-2xl text-[var(--charcoal)] font-light">
              The Grand Pavilion &amp; Terraces
            </p>

            <p className="font-sans text-xs text-[var(--taupe)] tracking-widest uppercase">
              Dinner, Toasts &amp; Starlight Dancing
            </p>

            <p className="font-sans text-xs text-[var(--sage)] italic pt-2">
              Followed by candlelit dinner and evening celebrations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
