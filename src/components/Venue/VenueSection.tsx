import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Navigation } from 'lucide-react';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="py-24 md:py-36 px-6 bg-[var(--paper)] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            LOCATION &amp; COUNTRYSIDE ESTATE
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] mt-2 mb-4 font-normal">
            The Venue
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Venue Info Column (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-[var(--olive)] bg-[var(--cream)] px-3.5 py-1 rounded-full text-[11px] uppercase tracking-widest font-medium border border-[var(--olive)]/20">
              <Compass className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>Cotswolds, UK</span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-[var(--ink)] font-normal">
              {invitationData.venue.name}
            </h3>

            <div className="text-[var(--charcoal)] text-sm space-y-1 font-sans">
              <p className="font-medium text-[var(--ink)]">{invitationData.venue.address}</p>
              <p>{invitationData.venue.city}, {invitationData.venue.postcode}</p>
              <p className="text-[var(--taupe)] text-xs">{invitationData.venue.country}</p>
            </div>

            <p className="font-sans text-sm text-[var(--ink)]/80 leading-relaxed font-light pt-2 max-w-[50ch]">
              {invitationData.venue.description}
            </p>

            <div className="pt-4">
              <a
                href={invitationData.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-7 py-3.5 border border-[var(--olive)] text-[var(--ink)] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[var(--olive)] hover:text-[var(--paper)] transition-all duration-500 rounded-none shadow-xs group"
              >
                <span>Get Directions</span>
                <Navigation className="w-3.5 h-3.5 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Map Frame Column (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[16/10] w-full border border-[var(--olive)]/25 rounded-xs overflow-hidden shadow-xs bg-[var(--paper-deep)] p-2">
              <div className="w-full h-full border border-[var(--olive)]/15 rounded-xs overflow-hidden">
                <iframe
                  title="Venue Map"
                  src={invitationData.venue.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'sepia(0.2) contrast(0.9) opacity(0.9)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
