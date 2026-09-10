import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const GallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeImage = selectedIndex !== null ? invitationData.gallery[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % invitationData.gallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + invitationData.gallery.length) % invitationData.gallery.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 md:py-36 px-6 bg-[var(--paper)] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            MOMENTS &amp; MEMORIES • ALBUM
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] mt-2 mb-4 font-normal">
            Photo Gallery
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        {/* Vintage Editorial Album Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {invitationData.gallery.map((item, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-xs border border-[var(--olive)]/20 bg-[var(--paper-deep)] cursor-pointer shadow-xs ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover object-center filter saturate-[0.88] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--ink)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 text-[var(--paper)]">
                  <p className="font-serif italic text-lg">{item.caption}</p>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[var(--cream)] mt-1 font-medium">
                    Expand Photo
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--ink)]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 text-[var(--paper)] hover:text-[var(--sage)] p-3 focus:outline-none transition-colors z-50 cursor-pointer"
            >
              <X className="w-8 h-8 stroke-[1.5]" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-8 text-[var(--paper)] hover:text-[var(--sage)] p-3 focus:outline-none transition-colors z-50 cursor-pointer bg-stone-900/40 hover:bg-stone-900/70 rounded-full"
            >
              <ChevronLeft className="w-8 h-8 stroke-[1.5]" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next photo"
              className="absolute right-4 sm:right-8 text-[var(--paper)] hover:text-[var(--sage)] p-3 focus:outline-none transition-colors z-50 cursor-pointer bg-stone-900/40 hover:bg-stone-900/70 rounded-full"
            >
              <ChevronRight className="w-8 h-8 stroke-[1.5]" />
            </button>

            {/* Image Container */}
            <div 
              className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={activeImage.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                src={activeImage.url}
                alt={activeImage.caption}
                className="max-w-full max-h-[75vh] object-contain rounded-xs shadow-2xl border border-stone-800"
              />
              <p className="font-serif italic text-lg sm:text-xl text-[var(--paper)] mt-4 text-center">
                {activeImage.caption}
              </p>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[var(--sage)] mt-1 font-medium">
                {selectedIndex + 1} of {invitationData.gallery.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
