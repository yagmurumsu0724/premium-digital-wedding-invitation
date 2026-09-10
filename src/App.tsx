import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { OpeningCover } from './components/OpeningCover/OpeningCover';
import { Navbar } from './components/Navigation/Navbar';
import { HeroInvitation } from './components/HeroInvitation/HeroInvitation';
import { StorySection } from './components/CoupleIntro/StorySection';
import { EventDetailsSection } from './components/EventDetails/EventDetailsSection';
import { CountdownSection } from './components/Countdown/CountdownSection';
import { VenueSection } from './components/Venue/VenueSection';
import { ScheduleSection } from './components/Schedule/ScheduleSection';
import { GallerySection } from './components/Gallery/GallerySection';
import { DressCodeSection } from './components/DressCode/DressCodeSection';
import { RSVPSection } from './components/RSVP/RSVPSection';
import { GiftRegistry } from './components/Registry/GiftRegistry';
import { FooterSection } from './components/Footer/FooterSection';
import { MusicToggle } from './components/MusicToggle/MusicToggle';
import { CustomCursor } from './components/CustomCursor/CustomCursor';

export const App: React.FC = () => {
  const [isCoverOpen, setIsCoverOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#1C2417] font-sans selection:bg-[#8A9A7B]/25 overflow-x-hidden">
      {/* Fine Paper Noise Overlay Filter */}
      <div className="noise-overlay" />

      {/* Desktop Decorative Custom Cursor */}
      <CustomCursor />

      {/* Opening Cover Experience Modal */}
      <AnimatePresence>
        {isCoverOpen && (
          <OpeningCover onOpen={() => setIsCoverOpen(false)} />
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Website Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isCoverOpen ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10"
      >
        <Navbar />
        
        <main>
          <HeroInvitation />
          <StorySection />
          <EventDetailsSection />
          <CountdownSection />
          <VenueSection />
          <ScheduleSection />
          <GallerySection />
          <DressCodeSection />
          <RSVPSection />
          <GiftRegistry />
        </main>

        <FooterSection />
        
        <MusicToggle />
      </motion.div>
    </div>
  );
};

export default App;
