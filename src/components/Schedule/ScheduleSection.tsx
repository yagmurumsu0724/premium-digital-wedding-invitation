import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-24 md:py-36 px-6 bg-[var(--cream-light)] relative border-t border-[var(--olive)]/15">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            ORDER OF EVENTS • THE WEDDING DAY
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] mt-2 mb-4 font-normal">
            Day Schedule
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        {/* Vertical Minimal Printed Timeline */}
        <div className="relative pl-6 md:pl-0">
          {/* Vertical Central Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-[var(--olive)]/25 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16 relative">
            {invitationData.timeline.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border border-[var(--olive)] bg-[var(--paper)] z-10 my-1 md:my-0 shadow-xs" />

                  {/* Content Box */}
                  <div className={`pl-8 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'
                  } w-full`}>
                    <div className="stationery-card p-6 sm:p-8 rounded-xs">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--olive)] inline-block mb-1">
                        {event.time}
                      </span>
                      <h3 className="font-serif text-2xl text-[var(--ink)] mb-2 font-normal">
                        {event.title}
                      </h3>
                      <p className="font-sans text-sm text-[var(--ink)]/80 font-light leading-relaxed">
                        {event.description}
                      </p>
                      {event.location && (
                        <p className="font-sans text-xs text-[var(--taupe)] italic mt-2">
                          {event.location}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
