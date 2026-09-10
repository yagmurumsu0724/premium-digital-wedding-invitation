import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider, EngravedVerticalStem } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-20 sm:py-32 px-4 sm:px-6 bg-[#EDE5D6] relative overflow-hidden border-t border-[#697052]/20">
      {/* Dikey Kenar Botanik Gravür Plakası */}
      <div className="absolute top-12 left-2 opacity-35 pointer-events-none hidden lg:block">
        <EngravedVerticalStem className="w-12 h-80 text-[#7D876D]" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#7D876D] font-medium">
            OUR STORY • {invitationData.story.subtitle}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#283024] mt-2 mb-4 font-normal">
            {invitationData.story.title}
          </h2>
          <EngravedDivider className="w-40 sm:w-64 h-8 text-[#7D876D]" />
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait Image Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-xs sm:max-w-sm lg:max-w-none">
              {/* Thin Outer Hairline Frame */}
              <div className="absolute -inset-2.5 sm:-inset-3 border border-[#697052]/30 translate-x-2 translate-y-2 pointer-events-none rounded-xs" />
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-[#F5F0E6] border border-[#697052]/25 shadow-xs">
                <img
                  src={invitationData.story.portraitImage}
                  alt={`${invitationData.couple.firstPerson} and ${invitationData.couple.secondPerson}`}
                  className="w-full h-full object-cover object-center filter saturate-[0.88] contrast-[1.02] hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Proposal Annotation Badge */}
              <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-[#F5F0E6] border border-[#697052]/30 p-3 sm:p-4 shadow-sm rounded-xs max-w-[180px] sm:max-w-[200px] text-center">
                <p className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#697052] font-semibold">
                  ENGAGED
                </p>
                <p className="font-serif italic text-xs sm:text-sm text-[#283024] mt-0.5">
                  {invitationData.story.proposalDate}
                </p>
                <p className="font-sans text-[9px] sm:text-[10px] text-[#A79B89] tracking-wide mt-0.5">
                  {invitationData.story.proposalLocation}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story Content Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6 pt-6 lg:pt-0"
          >
            {/* Quote Block */}
            <blockquote className="font-serif italic text-lg sm:text-2xl text-[#4F563D] leading-relaxed border-l-2 border-[#697052] pl-4 sm:pl-6 my-2">
              {invitationData.story.quote}
            </blockquote>

            {/* Narrative Paragraph */}
            <p className="font-sans text-sm sm:text-base text-[#283024]/85 leading-[1.8] font-light max-w-[55ch]">
              {invitationData.story.text}
            </p>

            {/* Monogram Sign-off */}
            <div className="pt-2 sm:pt-4">
              <span className="font-serif text-2xl sm:text-3xl text-[#697052] font-light italic">
                {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
