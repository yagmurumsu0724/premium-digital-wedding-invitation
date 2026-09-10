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

        {/* Minimal Printed Stationery Details Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Ceremony Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="stationery-card-double p-8 sm:p-12 flex flex-col justify-between items-center text-center rounded-xs"
          >
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[var(--olive)] font-semibold mb-3">
              THE CEREMONY
            </span>

            <h3 className="font-serif text-3xl text-[var(--ink)] mb-4 font-normal">
              Marriage Service
            </h3>

            <div className="w-16 h-[1px] bg-[var(--olive)]/30 my-3" />

            <div className="space-y-2 font-sans text-sm text-[var(--ink)]/85 my-4">
              <p className="font-medium text-[var(--olive)] tracking-wide uppercase text-xs">
                {invitationData.date.display}
              </p>
              <p className="font-serif italic text-lg text-[var(--charcoal)]">
                {invitationData.date.ceremonyTime}
              </p>
              <p className="text-[var(--taupe)] text-xs tracking-wider uppercase pt-2">
                The Botanical Glasshouse • Chipping Campden
              </p>
            </div>

            <p className="font-sans text-xs text-[var(--sage)] italic mt-6 pt-4 border-t border-[var(--olive)]/15 w-full">
              Please arrive 30 minutes prior to the commencement of the service.
            </p>
          </motion.div>

          {/* Reception Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="stationery-card-double p-8 sm:p-12 flex flex-col justify-between items-center text-center rounded-xs"
          >
            <span className="font-sans text-xs uppercase tracking-[0.22em] text-[var(--olive)] font-semibold mb-3">
              THE RECEPTION
            </span>

            <h3 className="font-serif text-3xl text-[var(--ink)] mb-4 font-normal">
              Dinner &amp; Dancing
            </h3>

            <div className="w-16 h-[1px] bg-[var(--olive)]/30 my-3" />

            <div className="space-y-2 font-sans text-sm text-[var(--ink)]/85 my-4">
              <p className="font-medium text-[var(--olive)] tracking-wide uppercase text-xs">
                {invitationData.date.display}
              </p>
              <p className="font-serif italic text-lg text-[var(--charcoal)]">
                {invitationData.date.receptionTime} Onwards
              </p>
              <p className="text-[var(--taupe)] text-xs tracking-wider uppercase pt-2">
                The Grand Pavilion &amp; Terraces
              </p>
            </div>

            <p className="font-sans text-xs text-[var(--sage)] italic mt-6 pt-4 border-t border-[var(--olive)]/15 w-full">
              Followed by candlelit dinner, toasts, and evening celebrations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
