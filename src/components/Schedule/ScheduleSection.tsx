import React from 'react';
import { motion } from 'framer-motion';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-20 sm:py-32 px-4 sm:px-6 bg-[#F7F3EA] relative border-t border-[#697052]/20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#7D876D] font-medium">
            ORDER OF EVENTS • THE WEDDING DAY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#283024] mt-2 mb-4 font-normal">
            Day Schedule
          </h2>
          <EngravedDivider className="w-40 sm:w-64 h-8 text-[#7D876D]" />
        </div>

        {/* Vertical Minimal Printed Timeline */}
        <div className="relative pl-6 md:pl-0">
          {/* Vertical Central Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-[#697052]/25 -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-16 relative">
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
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border border-[#697052] bg-[#F5F0E6] z-10 my-1 md:my-0 shadow-xs" />

                  {/* Content Box */}
                  <div className={`pl-6 sm:pl-8 md:pl-0 md:w-1/2 ${
                    isEven ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'
                  } w-full`}>
                    <div className="stationery-card p-5 sm:p-8 rounded-xs">
                      <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#697052] inline-block mb-1">
                        {event.time}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#283024] mb-1.5 font-normal">
                        {event.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#283024]/80 font-light leading-relaxed">
                        {event.description}
                      </p>
                      {event.location && (
                        <p className="font-sans text-[11px] text-[#A79B89] italic mt-1.5">
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
