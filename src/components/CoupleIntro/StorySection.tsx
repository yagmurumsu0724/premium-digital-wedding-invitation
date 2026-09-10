import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider, EngravedBranchLeft } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-36 px-6 bg-[var(--cream-light)] relative overflow-hidden border-t border-[var(--olive)]/15">
      {/* Background Engraved Accent */}
      <div className="absolute -bottom-10 -left-10 opacity-30 pointer-events-none">
        <EngravedBranchLeft className="w-48 h-64 text-[var(--sage)]" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            OUR STORY • {invitationData.story.subtitle}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] mt-2 mb-4 font-normal">
            {invitationData.story.title}
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Thin Outer Hairline Frame */}
              <div className="absolute -inset-3 border border-[var(--olive)]/25 translate-x-2.5 translate-y-2.5 pointer-events-none rounded-xs" />
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xs bg-[var(--paper-deep)] border border-[var(--olive)]/20 shadow-xs">
                <img
                  src={invitationData.story.portraitImage}
                  alt={`${invitationData.couple.firstPerson} and ${invitationData.couple.secondPerson}`}
                  className="w-full h-full object-cover object-center filter saturate-[0.88] contrast-[1.02] hover:scale-105 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Proposal Annotation Badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-6 bg-[var(--paper)] border border-[var(--olive)]/25 p-4 shadow-sm rounded-xs max-w-[200px] text-center">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--olive)] font-semibold">
                  ENGAGED
                </p>
                <p className="font-serif italic text-sm text-[var(--ink)] mt-0.5">
                  {invitationData.story.proposalDate}
                </p>
                <p className="font-sans text-[10px] text-[var(--taupe)] tracking-wide mt-0.5">
                  {invitationData.story.proposalLocation}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story Content Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 pt-6 lg:pt-0"
          >
            {/* Quote Block */}
            <blockquote className="font-serif italic text-xl md:text-2xl text-[var(--olive-deep)] leading-relaxed border-l-2 border-[var(--olive)] pl-6 my-2">
              {invitationData.story.quote}
            </blockquote>

            {/* Narrative Paragraph */}
            <p className="font-sans text-base md:text-lg text-[var(--ink)]/85 leading-[1.8] font-light max-w-[55ch]">
              {invitationData.story.text}
            </p>

            {/* Monogram Sign-off */}
            <div className="pt-4">
              <span className="font-serif text-3xl text-[var(--olive)] font-light italic">
                {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
