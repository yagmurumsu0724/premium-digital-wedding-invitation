import React from 'react';
import { ArrowUp } from 'lucide-react';
import { EngravedWreath, EngravedDivider, EngravedEmblem } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 md:py-32 px-6 bg-[var(--paper-deep)] border-t border-[var(--olive)]/20 relative text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Monogram Emblem */}
        <div className="relative mb-6">
          <EngravedWreath className="w-28 h-28 text-[var(--olive)]" />
          <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl text-[var(--ink)] font-normal">
            {invitationData.couple.initials}
          </div>
        </div>

        <EngravedEmblem className="w-10 h-10 mb-4 text-[var(--sage)]" />

        {/* Couple Names */}
        <h3 className="font-serif text-3xl md:text-5xl text-[var(--ink)] font-normal mb-2">
          {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson}
        </h3>

        <EngravedDivider className="w-48 h-8 my-2 text-[var(--sage)]" />

        <p className="font-serif italic text-lg text-[var(--olive-deep)] max-w-md my-4 font-light">
          “WITH LOVE • WE LOOK FORWARD TO CELEBRATING WITH YOU.”
        </p>

        {/* Date Display */}
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-[var(--olive)] font-semibold my-4">
          {invitationData.date.display} • {invitationData.venue.name}
        </p>

        {/* Back to top CTA */}
        <div className="mt-8">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.22em] text-[var(--taupe)] hover:text-[var(--olive)] transition-colors focus:outline-none cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[1.5]" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[var(--olive)]/15 w-full font-sans text-[10px] text-[var(--taupe)] tracking-widest uppercase">
          <p>© {new Date().getFullYear()} {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson} Wedding Stationery.</p>
        </div>
      </div>
    </footer>
  );
};
