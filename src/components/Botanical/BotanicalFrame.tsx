import React from 'react';

interface BotanicalProps {
  className?: string;
  color?: string;
}

export const WaxSealStamp: React.FC<{ className?: string; initials?: string; variant?: 'crimson' | 'brass' }> = ({ 
  className = "w-28 h-28 sm:w-36 sm:h-36", 
  initials = "O & J",
  variant = 'crimson'
}) => {
  const isCrimson = variant === 'crimson';
  const mainFill = isCrimson ? "#6B2D35" : "#9E8354";
  const darkFill = isCrimson ? "#542228" : "#786138";
  const borderFill = isCrimson ? "#40181D" : "#5C4A2A";
  const textFill = isCrimson ? "#F4EFE6" : "#F4EFE6";

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Wax Seal Outer Organic Rim */}
        <path 
          d="M60 6 C 75 4, 88 12, 98 22 C 108 32, 116 45, 114 60 C 112 75, 106 88, 96 98 C 86 108, 72 116, 58 114 C 43 112, 30 106, 20 96 C 10 86, 4 72, 6 57 C 8 42, 16 28, 26 18 C 36 8, 48 8, 60 6 Z" 
          fill={mainFill}
          stroke={borderFill} 
          strokeWidth="1.5" 
        />
        <path 
          d="M60 10 C 73 8, 84 15, 93 24 C 102 33, 109 44, 107 57 C 105 70, 100 82, 91 91 C 82 100, 69 107, 56 105 C 43 103, 31 97, 23 88 C 15 79, 10 67, 12 54 C 14 41, 21 28, 30 19 C 39 10, 50 10, 60 10 Z" 
          fill={darkFill} 
        />

        {/* Inner Pressed Ring */}
        <circle cx="60" cy="60" r="42" stroke={borderFill} strokeWidth="1.2" fill="none" opacity="0.6" />
        <circle cx="60" cy="60" r="39" stroke="#EAE0D0" strokeWidth="0.8" strokeDasharray="3 2" fill="none" opacity="0.7" />

        {/* Fine Botanical Engraving Wreath inside Seal */}
        <circle cx="60" cy="60" r="34" stroke="#EAE0D0" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M60 28 C 54 22, 46 25, 55 27 Z" fill="#EAE0D0" opacity="0.6" />
        <path d="M60 28 C 66 22, 74 25, 65 27 Z" fill="#EAE0D0" opacity="0.6" />
        <path d="M60 92 C 54 98, 46 95, 55 93 Z" fill="#EAE0D0" opacity="0.6" />
        <path d="M60 92 C 66 98, 74 95, 65 93 Z" fill="#EAE0D0" opacity="0.6" />
      </svg>

      {/* Pressed Monogram Initials */}
      <span className="absolute font-serif text-xl sm:text-2xl font-normal text-[#F4EFE6] drop-shadow-xs tracking-widest">
        {initials}
      </span>
    </div>
  );
};

export const EngravedBranchLeft: React.FC<BotanicalProps> = ({ 
  className = "w-36 h-52 sm:w-56 sm:h-72", 
  color = "#1E231B" 
}) => (
  <svg 
    viewBox="0 0 180 240" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Fine copperplate stem lines */}
    <path 
      d="M30 230 C 55 170, 85 120, 155 15" 
      stroke={color} 
      strokeWidth="1.1" 
      strokeLinecap="round" 
      opacity="0.8" 
    />
    <path 
      d="M32 228 C 56 169, 84 121, 154 16" 
      stroke={color} 
      strokeWidth="0.5" 
      opacity="0.4" 
    />

    {/* Copperplate leaf hatching */}
    <path d="M42 200 C 15 185, 10 160, 38 170 C 55 178, 48 195, 42 200 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.1" />
    <path d="M28 182 C 34 187, 40 190, 42 200" stroke={color} strokeWidth="0.4" opacity="0.6" />

    <path d="M60 168 C 88 152, 98 132, 70 145 C 54 153, 57 162, 60 168 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.12" />
    <path d="M70 155 C 64 161, 61 165, 60 168" stroke={color} strokeWidth="0.4" opacity="0.6" />

    <path d="M72 135 C 40 122, 32 100, 62 112 C 76 118, 72 130, 72 135 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.1" />
    <path d="M50 122 C 58 126, 65 130, 72 135" stroke={color} strokeWidth="0.4" opacity="0.6" />

    <path d="M96 100 C 125 86, 135 66, 106 80 C 88 87, 92 96, 96 100 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.1" />
    <path d="M112 68 C 86 54, 78 35, 104 44 C 118 51, 114 63, 112 68 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.1" />
    <path d="M136 36 C 160 22, 168 8, 144 16 C 130 22, 133 31, 136 36 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />

    <circle cx="50" cy="175" r="3.8" stroke={color} strokeWidth="0.8" fill="var(--archival-parchment)" />
    <circle cx="84" cy="112" r="3.8" stroke={color} strokeWidth="0.8" fill="var(--archival-parchment)" />
    <circle cx="120" cy="50" r="3.2" stroke={color} strokeWidth="0.8" fill="var(--archival-parchment)" />
  </svg>
);

export const EngravedBranchRight: React.FC<BotanicalProps> = ({ 
  className = "w-36 h-52 sm:w-56 sm:h-72", 
  color = "#1E231B" 
}) => (
  <div className="transform -scale-x-100">
    <EngravedBranchLeft className={className} color={color} />
  </div>
);

export const EngravedWreath: React.FC<BotanicalProps> = ({ 
  className = "w-36 h-36 md:w-48 md:h-48", 
  color = "#1E231B" 
}) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <circle cx="100" cy="100" r="82" stroke={color} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
    <circle cx="100" cy="100" r="78" stroke={color} strokeWidth="0.5" opacity="0.3" />

    <path d="M100 18 C 90 6, 78 12, 93 16 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
    <path d="M100 18 C 110 6, 122 12, 107 16 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
    <path d="M152 42 C 165 32, 172 42, 158 48 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
    <path d="M178 110 C 190 102, 188 116, 179 112 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
    <path d="M100 182 C 90 194, 78 188, 93 184 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
    <path d="M100 182 C 110 194, 122 188, 107 184 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
    <path d="M22 110 C 10 102, 12 116, 21 112 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
    <path d="M48 42 C 35 32, 28 42, 42 48 Z" stroke={color} strokeWidth="0.8" fill={color} fillOpacity="0.15" />
  </svg>
);

export const EngravedDivider: React.FC<BotanicalProps> = ({ 
  className = "w-44 h-8 sm:w-64 sm:h-10", 
  color = "#9E8354" 
}) => (
  <svg 
    viewBox="0 0 240 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none mx-auto ${className}`}
  >
    <line x1="10" y1="15" x2="95" y2="15" stroke={color} strokeWidth="0.75" opacity="0.65" />
    <line x1="30" y1="12" x2="85" y2="12" stroke={color} strokeWidth="0.4" opacity="0.3" />
    <path d="M70 14 C 62 7, 52 9, 64 14 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.2" />

    <polygon points="120,9 126,15 120,21 114,15" stroke={color} strokeWidth="0.8" fill="var(--archival-parchment)" />
    <circle cx="120" cy="15" r="1.5" fill={color} />

    <line x1="145" y1="15" x2="230" y2="15" stroke={color} strokeWidth="0.75" opacity="0.65" />
    <line x1="155" y1="12" x2="210" y2="12" stroke={color} strokeWidth="0.4" opacity="0.3" />
    <path d="M170 14 C 178 7, 188 9, 176 14 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.2" />
  </svg>
);

export const EngravedVerticalStem: React.FC<BotanicalProps> = ({ 
  className = "w-10 h-56", 
  color = "#7A856E" 
}) => (
  <svg 
    viewBox="0 0 40 240" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <line x1="20" y1="10" x2="20" y2="230" stroke={color} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
    <path d="M20 40 C 10 32, 8 45, 18 42 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.2" />
    <path d="M20 100 C 30 92, 32 105, 22 102 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.2" />
    <path d="M20 160 C 10 152, 8 165, 18 162 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.2" />
    <circle cx="20" cy="220" r="3.2" stroke={color} strokeWidth="0.8" fill="var(--archival-parchment)" />
  </svg>
);

export const EngravedCornerAccents: React.FC<BotanicalProps> = ({ 
  className = "w-20 h-20", 
  color = "#9E8354" 
}) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path d="M10 90 L10 10 L90 10" stroke={color} strokeWidth="0.8" opacity="0.45" />
    <path d="M15 85 L15 15 L85 15" stroke={color} strokeWidth="0.4" opacity="0.25" />
    <path d="M15 15 C 25 25, 35 20, 22 32 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.18" />
  </svg>
);

export const EngravedEmblem: React.FC<BotanicalProps> = ({ 
  className = "w-10 h-10", 
  color = "#9E8354" 
}) => (
  <svg 
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none mx-auto ${className}`}
  >
    <circle cx="30" cy="30" r="26" stroke={color} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.55" />
    <path d="M30 14 C 22 8, 16 16, 26 22 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.18" />
    <path d="M30 14 C 38 8, 44 16, 34 22 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.18" />
    <path d="M30 46 C 22 52, 16 44, 26 38 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.18" />
    <path d="M30 46 C 38 52, 44 44, 34 38 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.18" />
    <circle cx="30" cy="30" r="3.2" fill={color} fillOpacity="0.65" />
  </svg>
);
