import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const DressCodeSection: React.FC = () => {
  return (
    <section id="dress-code" className="py-20 sm:py-32 px-4 sm:px-6 bg-[#EFE5DF] relative border-t border-[#697052]/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#7D876D] font-medium">
            ATTIRE &amp; STYLE GUIDELINES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#283024] mt-2 mb-4 font-normal">
            {invitationData.dressCode.title}
          </h2>
          <EngravedDivider className="w-40 sm:w-64 h-8 text-[#7D876D]" />
        </div>

        {/* Fashion Editorial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="stationery-card-double p-6 sm:p-14 max-w-3xl mx-auto rounded-xs text-center relative bg-[#F5F0E6]"
        >
          <p className="font-serif italic text-xl sm:text-2xl text-[#697052] mb-3 sm:mb-4">
            {invitationData.dressCode.subtitle}
          </p>

          <p className="font-sans text-sm sm:text-base text-[#283024]/85 leading-[1.8] max-w-xl mx-auto font-light mb-6 sm:mb-8">
            {invitationData.dressCode.description}
          </p>

          {/* Color Palette Fabric Swatches */}
          <div className="my-6 sm:my-8 pt-6 border-t border-[#697052]/15">
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#7D876D] mb-4 font-medium">
              SUGGESTED COLOR PALETTE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {invitationData.dressCode.swatches.map((swatch) => (
                <div key={swatch.hex} className="flex flex-col items-center space-y-1.5 sm:space-y-2">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs border border-[#697052]/30 shadow-2xs transform hover:scale-105 transition-transform"
                    style={{ backgroundColor: swatch.hex }}
                    title={swatch.label}
                  />
                  <span className="font-sans text-[10px] text-[#38352F] tracking-wide font-medium">
                    {swatch.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Note */}
          <div className="text-xs text-[#A79B89] italic bg-[#F7F3EA]/70 p-3.5 sm:p-4 rounded-xs border border-[#697052]/15 mt-6 max-w-lg mx-auto text-center">
            {invitationData.dressCode.notes}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
