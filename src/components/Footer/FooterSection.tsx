import React from 'react';
import { ArrowUp } from 'lucide-react';
import { EngravedWreath, EngravedDivider, EngravedEmblem } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 sm:py-28 px-4 sm:px-6 bg-[#283024] text-[#F5F0E6] relative text-center border-t border-[#697052]/30">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Monogram Emblem */}
        <div className="relative mb-6">
          <EngravedWreath className="w-28 h-28 text-[#AA9669]" />
          <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl text-[#F5F0E6] font-normal">
            {invitationData.couple.initials}
          </div>
        </div>

        <EngravedEmblem className="w-10 h-10 mb-4 text-[#7D876D]" />

        {/* Couple Names */}
        <h3 className="font-serif text-3xl sm:text-5xl text-[#F5F0E6] font-normal mb-2">
          {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson}
        </h3>

        <EngravedDivider className="w-40 sm:w-48 h-8 my-2 text-[#7D876D]" />

        <p className="font-serif italic text-base sm:text-lg text-[#EDE5D6]/90 max-w-md my-4 font-light">
          “WITH LOVE • WE LOOK FORWARD TO CELEBRATING WITH YOU.”
        </p>

        {/* Date Display */}
        <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#AA9669] font-semibold my-4">
          {invitationData.date.display} • {invitationData.venue.name}
        </p>

        {/* Back to top CTA */}
        <div className="mt-8">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#7D876D] hover:text-[#AA9669] transition-colors focus:outline-none cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[1.5]" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#697052]/25 w-full font-sans text-[10px] text-[#A79B89] tracking-widest uppercase">
          <p>© {new Date().getFullYear()} {invitationData.couple.firstPerson} &amp; {invitationData.couple.secondPerson} Wedding Stationery.</p>
        </div>
      </div>
    </footer>
  );
};
