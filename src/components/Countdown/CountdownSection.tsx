import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { invitationData } from '../../data/invitationData';

export const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(invitationData.date.iso);

  const units = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds }
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-[var(--paper)] border-y border-[var(--olive)]/20 text-center relative">
      <div className="max-w-4xl mx-auto">
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[var(--sage)] mb-10 font-medium">
          COUNTING DOWN TO THE MOMENT
        </p>

        {isExpired ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-3xl md:text-5xl text-[var(--olive)]"
          >
            Today is Our Wedding Day!
          </motion.div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 max-w-3xl mx-auto">
            {units.map((unit, index) => (
              <React.Fragment key={unit.label}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center min-w-[70px]"
                >
                  <span className="font-serif text-4xl sm:text-6xl text-[var(--ink)] font-normal tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[var(--olive)] mt-2 font-medium">
                    {unit.label}
                  </span>
                </motion.div>
                {index < units.length - 1 && (
                  <div className="hidden sm:block h-12 w-[1px] bg-[var(--olive)]/25 my-auto" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
