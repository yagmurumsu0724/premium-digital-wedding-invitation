import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { invitationData } from '../../data/invitationData';

export const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(invitationData.date.iso);

  // Helper to convert number to Roman Numerals for mechanical watch / archival feel
  const toRoman = (num: number): string => {
    if (num <= 0) return '0';
    const lookup: Record<string, number> = {
      M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let roman = '';
    for (const i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  };

  const units = [
    { label: 'DAYS', value: days, roman: toRoman(days) },
    { label: 'HOURS', value: hours, roman: toRoman(hours) },
    { label: 'MINUTES', value: minutes, roman: toRoman(minutes) },
    { label: 'SECONDS', value: seconds, roman: toRoman(seconds) }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#EAE0D0] border-y border-[#9E8354]/30 text-center relative deboss-frame">
      <div className="max-w-4xl mx-auto">
        <p className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#3D4433] mb-8 font-medium">
          COUNTING DOWN TO THE CELEBRATION
        </p>

        {isExpired ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-serif text-3xl md:text-5xl text-[#3D4433]"
          >
            Today is Our Wedding Day!
          </motion.div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 max-w-3xl mx-auto">
            {units.map((unit, index) => (
              <React.Fragment key={unit.label}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center min-w-[65px] sm:min-w-[80px]"
                >
                  <span className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1E231B] font-normal tracking-tight letterpress-text">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#3D4433] mt-1.5 sm:mt-2 font-semibold">
                    {unit.label} ({unit.roman})
                  </span>
                </motion.div>
                {index < units.length - 1 && (
                  <div className="hidden sm:block h-10 sm:h-12 w-[1px] bg-[#9E8354]/30 my-auto" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
