import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { EngravedDivider, EngravedCornerAccents } from '../Botanical/BotanicalFrame';
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
    <section id="gallery" className="py-20 sm:py-32 px-4 sm:px-6 bg-[#EDE5D6] relative border-t border-[#697052]/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#7D876D] font-medium">
            MOMENTS &amp; MEMORIES • ALBUM
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#283024] mt-2 mb-4 font-normal">
            Photo Gallery
          </h2>
          <EngravedDivider className="w-40 sm:w-64 h-8 text-[#7D876D]" />
        </div>

        {/* Vintage Editorial Album Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
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
                className={`group relative overflow-hidden rounded-xs border border-[#697052]/20 bg-[#F5F0E6] cursor-pointer shadow-2xs ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
                }`}
              >
                <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <EngravedCornerAccents className="w-10 h-10 text-[#F5F0E6]" />
                </div>

                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover object-center filter saturate-[0.88] contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#283024]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4 sm:p-6 text-[#F5F0E6]">
                  <p className="font-serif italic text-base sm:text-lg">{item.caption}</p>
                  <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-widest text-[#F7F3EA] mt-1 font-medium">
                    Expand Photo
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal in Deep Warm Forest Ink (#283024) */}
      <AnimatePresence>
        {selectedIndex !== null && activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#283024]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 text-[#F5F0E6] hover:text-[#7D876D] p-3 focus:outline-none transition-colors z-50 cursor-pointer"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5]" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-8 text-[#F5F0E6] hover:text-[#7D876D] p-2.5 sm:p-3 focus:outline-none transition-colors z-50 cursor-pointer bg-black/40 hover:bg-black/70 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-8 text-[#F5F0E6] hover:text-[#7D876D] p-2.5 sm:p-3 focus:outline-none transition-colors z-50 cursor-pointer bg-black/40 hover:bg-black/70 rounded-full"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
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
                className="max-w-full max-h-[72vh] sm:max-h-[75vh] object-contain rounded-xs shadow-2xl border border-stone-800"
              />
              <p className="font-serif italic text-base sm:text-xl text-[#F5F0E6] mt-3 sm:mt-4 text-center px-4">
                {activeImage.caption}
              </p>
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-widest text-[#7D876D] mt-1 font-medium">
                {selectedIndex + 1} of {invitationData.gallery.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
