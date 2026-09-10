import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { invitationData } from '../../data/invitationData';

export const MusicToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current || hasError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback issue:", err);
          setHasError(true);
          setIsPlaying(false);
        });
    }
  };

  if (!invitationData.music.enabled || hasError) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
      <audio
        ref={audioRef}
        src={invitationData.music.src}
        loop
        preload="none"
        onError={() => setHasError(true)}
      />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
        className="group relative flex items-center space-x-2 px-4 py-2 bg-[var(--paper)]/90 backdrop-blur-md border border-[var(--olive)]/30 rounded-xs shadow-2xs text-[var(--ink)] hover:border-[var(--olive)] transition-all cursor-pointer focus:outline-none"
      >
        <div className={`p-1 rounded-xs ${isPlaying ? 'bg-[var(--olive)] text-[var(--paper)]' : 'bg-[var(--cream)] text-[var(--olive)]'}`}>
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 stroke-[1.5] animate-pulse" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 stroke-[1.5]" />
          )}
        </div>

        <span className="font-sans text-[11px] uppercase tracking-[0.18em] font-medium hidden sm:inline text-[var(--charcoal)]">
          {isPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}
        </span>

        {isPlaying && (
          <div className="flex items-end space-x-0.5 h-3 ml-1">
            <span className="w-0.5 bg-[var(--olive)] h-full animate-[bounce_1s_infinite_100ms]" />
            <span className="w-0.5 bg-[var(--olive)] h-2/3 animate-[bounce_1s_infinite_300ms]" />
            <span className="w-0.5 bg-[var(--olive)] h-4/5 animate-[bounce_1s_infinite_200ms]" />
          </div>
        )}
      </button>
    </div>
  );
};
