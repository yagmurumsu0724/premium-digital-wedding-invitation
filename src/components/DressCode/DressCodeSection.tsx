import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const DressCodeSection: React.FC = () => {
  return (
    <section id="dress-code" className="py-24 md:py-36 px-6 bg-[var(--cream-light)] relative border-t border-[var(--olive)]/15">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            ATTIRE &amp; STYLE GUIDELINES
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] mt-2 mb-4 font-normal">
            {invitationData.dressCode.title}
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        {/* Fashion Editorial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="stationery-card-double p-8 sm:p-14 max-w-3xl mx-auto rounded-xs text-center relative"
        >
          <p className="font-serif italic text-2xl text-[var(--olive)] mb-4">
            {invitationData.dressCode.subtitle}
          </p>

          <p className="font-sans text-base text-[var(--ink)]/85 leading-[1.8] max-w-xl mx-auto font-light mb-8">
            {invitationData.dressCode.description}
          </p>

          {/* Color Palette Fabric Swatches */}
          <div className="my-8 pt-6 border-t border-[var(--olive)]/15">
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--sage)] mb-4 font-medium">
              SUGGESTED COLOR PALETTE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              {invitationData.dressCode.swatches.map((swatch) => (
                <div key={swatch.hex} className="flex flex-col items-center space-y-2">
                  <div
                    className="w-10 h-10 rounded-xs border border-[var(--olive)]/30 shadow-2xs transform hover:scale-105 transition-transform"
                    style={{ backgroundColor: swatch.hex }}
                    title={swatch.label}
                  />
                  <span className="font-sans text-[10px] text-[var(--charcoal)] tracking-wide font-medium">
                    {swatch.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Note */}
          <div className="text-xs text-[var(--taupe)] italic bg-[var(--cream)]/60 p-4 rounded-xs border border-[var(--olive)]/15 mt-6 max-w-lg mx-auto text-center">
            {invitationData.dressCode.notes}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
