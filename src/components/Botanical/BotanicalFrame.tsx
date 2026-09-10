import React from 'react';

interface BotanicalProps {
  className?: string;
  color?: string;
}

export const EngravedBranchLeft: React.FC<BotanicalProps> = ({ 
  className = "w-32 h-44 md:w-48 md:h-64", 
  color = "var(--olive)" 
}) => (
  <svg 
    viewBox="0 0 160 220" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    {/* Fine organic main stem with varying line weights */}
    <path 
      d="M30 210 C 50 160, 75 110, 135 15" 
      stroke={color} 
      strokeWidth="1.1" 
      strokeLinecap="round" 
      opacity="0.8" 
    />
    <path 
      d="M32 208 C 51 159, 74 111, 134 16" 
      stroke={color} 
      strokeWidth="0.5" 
      opacity="0.4" 
    />

    {/* Fine leaf engravings with inner hatching lines */}
    <path d="M42 180 C 15 165, 10 142, 38 152 C 55 160, 48 175, 42 180 Z" stroke={color} strokeWidth="0.85" fill={color} fillOpacity="0.08" />
    <path d="M28 162 C 34 167, 40 170, 42 180" stroke={color} strokeWidth="0.4" opacity="0.6" />

    <path d="M58 150 C 85 135, 95 118, 70 130 C 52 138, 55 145, 58 150 Z" stroke={color} strokeWidth="0.85" fill={color} fillOpacity="0.12" />
    <path d="M68 138 C 62 144, 59 148, 58 150" stroke={color} strokeWidth="0.4" opacity="0.6" />

    <path d="M68 120 C 38 108, 30 88, 58 98 C 72 104, 68 115, 68 120 Z" stroke={color} strokeWidth="0.85" fill={color} fillOpacity="0.08" />
    <path d="M48 108 C 55 112, 62 116, 68 120" stroke={color} strokeWidth="0.4" opacity="0.6" />

    <path d="M88 90 C 115 78, 125 60, 98 72 C 82 78, 85 86, 88 90 Z" stroke={color} strokeWidth="0.85" fill={color} fillOpacity="0.1" />
    <path d="M102 60 C 78 48, 70 30, 95 38 C 108 44, 104 55, 102 60 Z" stroke={color} strokeWidth="0.85" fill={color} fillOpacity="0.08" />
    <path d="M120 32 C 142 20, 150 8, 128 15 C 115 20, 118 28, 120 32 Z" stroke={color} strokeWidth="0.85" fill={color} fillOpacity="0.15" />

    {/* Olive berries */}
    <circle cx="48" cy="158" r="3.5" stroke={color} strokeWidth="0.8" fill="var(--paper)" />
    <circle cx="78" cy="100" r="3.5" stroke={color} strokeWidth="0.8" fill="var(--paper)" />
    <circle cx="110" cy="45" r="3" stroke={color} strokeWidth="0.8" fill="var(--paper)" />
  </svg>
);

export const EngravedBranchRight: React.FC<BotanicalProps> = ({ 
  className = "w-32 h-44 md:w-48 md:h-64", 
  color = "var(--olive)" 
}) => (
  <div className="transform -scale-x-100">
    <EngravedBranchLeft className={className} color={color} />
  </div>
);

export const EngravedWreath: React.FC<BotanicalProps> = ({ 
  className = "w-36 h-36 md:w-48 md:h-48", 
  color = "var(--olive)" 
}) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <circle cx="100" cy="100" r="82" stroke={color} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.45" />
    <circle cx="100" cy="100" r="78" stroke={color} strokeWidth="0.6" opacity="0.3" />

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
  className = "w-48 h-8 md:w-64 md:h-10", 
  color = "var(--sage)" 
}) => (
  <svg 
    viewBox="0 0 240 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none mx-auto ${className}`}
  >
    <line x1="10" y1="15" x2="95" y2="15" stroke={color} strokeWidth="0.75" opacity="0.6" />
    <line x1="30" y1="12" x2="85" y2="12" stroke={color} strokeWidth="0.4" opacity="0.3" />
    <path d="M70 14 C 62 7, 52 9, 64 14 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.2" />

    <polygon points="120,9 126,15 120,21 114,15" stroke={color} strokeWidth="0.8" fill="var(--paper)" />
    <circle cx="120" cy="15" r="1.5" fill={color} />

    <line x1="145" y1="15" x2="230" y2="15" stroke={color} strokeWidth="0.75" opacity="0.6" />
    <line x1="155" y1="12" x2="210" y2="12" stroke={color} strokeWidth="0.4" opacity="0.3" />
    <path d="M170 14 C 178 7, 188 9, 176 14 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.2" />
  </svg>
);

export const EngravedVerticalStem: React.FC<BotanicalProps> = ({ 
  className = "w-12 h-64", 
  color = "var(--sage)" 
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
    <circle cx="20" cy="220" r="3" stroke={color} strokeWidth="0.8" fill="var(--paper)" />
  </svg>
);

export const EngravedCornerAccents: React.FC<BotanicalProps> = ({ 
  className = "w-24 h-24", 
  color = "var(--olive)" 
}) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
  >
    <path d="M10 90 L10 10 L90 10" stroke={color} strokeWidth="0.75" opacity="0.4" />
    <path d="M15 85 L15 15 L85 15" stroke={color} strokeWidth="0.4" opacity="0.2" />
    <path d="M15 15 C 25 25, 35 20, 22 32 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.15" />
  </svg>
);

export const EngravedEmblem: React.FC<BotanicalProps> = ({ 
  className = "w-12 h-12", 
  color = "var(--olive)" 
}) => (
  <svg 
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none mx-auto ${className}`}
  >
    <circle cx="30" cy="30" r="26" stroke={color} strokeWidth="0.75" strokeDasharray="3 2" opacity="0.5" />
    <path d="M30 14 C 22 8, 16 16, 26 22 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.15" />
    <path d="M30 14 C 38 8, 44 16, 34 22 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.15" />
    <path d="M30 46 C 22 52, 16 44, 26 38 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.15" />
    <path d="M30 46 C 38 52, 44 44, 34 38 Z" stroke={color} strokeWidth="0.7" fill={color} fillOpacity="0.15" />
    <circle cx="30" cy="30" r="3" fill={color} fillOpacity="0.6" />
  </svg>
);
