export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'tall';
}

export interface InvitationData {
  couple: {
    firstPerson: string;
    secondPerson: string;
    initials: string;
    tagline: string;
    announcement: string;
  };
  date: {
    display: string;
    iso: string; // ISO string for countdown calculation
    day: string;
    month: string;
    year: string;
    ceremonyTime: string;
    receptionTime: string;
  };
  venue: {
    name: string;
    address: string;
    city: string;
    postcode: string;
    country: string;
    description: string;
    mapsUrl: string;
    embedMapUrl: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    scrollCTA: string;
  };
  story: {
    title: string;
    subtitle: string;
    proposalDate: string;
    proposalLocation: string;
    text: string;
    quote: string;
    portraitImage: string;
    secondaryImage: string;
  };
  timeline: TimelineEvent[];
  gallery: GalleryItem[];
  dressCode: {
    title: string;
    subtitle: string;
    description: string;
    swatches: { hex: string; label: string }[];
    notes: string;
  };
  rsvp: {
    deadline: string;
    dietaryOptions: string[];
    maxGuests: number;
    emailRecipient: string;
  };
  music: {
    enabled: boolean;
    title: string;
    artist: string;
    src: string;
  };
  registry: {
    title: string;
    description: string;
    honeymoonFundNote: string;
    bankDetails: {
      accountHolder: string;
      bankName: string;
      iban: string;
      swift: string;
    };
  };
}

export const invitationData: InvitationData = {
  couple: {
    firstPerson: "Olivia",
    secondPerson: "James",
    initials: "O & J",
    tagline: "Together with their families",
    announcement: "Request the pleasure of your company at the celebration of their marriage"
  },
  date: {
    display: "Saturday, 20 September 2026",
    iso: "2026-09-20T16:30:00",
    day: "20",
    month: "September",
    year: "2026",
    ceremonyTime: "4:30 PM",
    receptionTime: "6:30 PM"
  },
  venue: {
    name: "The Garden House",
    address: "Chipping Campden Estate",
    city: "Cotswolds, Gloucestershire",
    postcode: "GL55 6AT",
    country: "United Kingdom",
    description: "An enchanting glasshouse conservatory nestled in the heart of the Cotswolds, surrounded by ancient olive groves, organic botanical gardens, and historic stone arches.",
    mapsUrl: "https://maps.google.com/?q=Chipping+Campden+Cotswolds",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39445.69871587399!2d-1.792556531393652!3d52.05141154564811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870c4974261bd71%3A0x6334f59c8fa7270!2sChipping%20Campden!5e0!3m2!1sen!2suk!4v1700000000000"
  },
  hero: {
    eyebrow: "TOGETHER WITH THEIR FAMILIES",
    title: "Olivia & James",
    subtitle: "Invite you to share in their joy as they join their lives in marriage",
    scrollCTA: "Scroll to Discover"
  },
  story: {
    title: "Our Story",
    subtitle: "Seven years in the making",
    proposalDate: "14 June 2025",
    proposalLocation: "Amalfi Coast, Italy",
    text: "We first crossed paths on a crisp autumn afternoon in London. Seven years filled with warm coffee mornings, spontaneous weekend escapes, and countless shared dreams later, James proposed beneath the lemon trees overlooking the Tyrrhenian Sea. We cannot wait to begin this next chapter of our lives surrounded by those we treasure most.",
    quote: "“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.”",
    portraitImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
    secondaryImage: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
  },
  timeline: [
    {
      time: "3:30 PM",
      title: "Guest Arrival",
      description: "Welcome botanical drinks and acoustic music in the walled garden.",
      location: "The Glasshouse Lawn"
    },
    {
      time: "4:30 PM",
      title: "The Ceremony",
      description: "Exchanging of vows under the historic olive arch.",
      location: "The Botanical Conservatory"
    },
    {
      time: "5:30 PM",
      title: "Cocktail Hour & Canapés",
      description: "Artisanal appetizers, chilled champagne, and garden strolls.",
      location: "Olive Tree Terrace"
    },
    {
      time: "7:00 PM",
      title: "Candlelit Dinner & Toasts",
      description: "A three-course seasonal farm-to-table banquet and speeches.",
      location: "The Grand Pavilion"
    },
    {
      time: "9:00 PM",
      title: "Cake Cutting & Dancing",
      description: "Live acoustic orchestra, cocktail bar, and dancing under the stars.",
      location: "The Garden Ballroom"
    },
    {
      time: "11:30 PM",
      title: "Sparkler Farewell",
      description: "A magical sparkler exit to conclude our celebration.",
      location: "Main Courtyard"
    }
  ],
  gallery: [
    {
      id: "gal-1",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
      caption: "Our engagement afternoon in the countryside",
      aspectRatio: "portrait"
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
      caption: "The serene botanical glasshouse setting",
      aspectRatio: "landscape"
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
      caption: "Handcrafted wedding stationery and dried florals",
      aspectRatio: "square"
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
      caption: "A quiet moment together in Italy",
      aspectRatio: "tall"
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
      caption: "Botanical arrangements and olive leaves",
      aspectRatio: "square"
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
      caption: "Sunset over the Cotswold hills",
      aspectRatio: "landscape"
    }
  ],
  dressCode: {
    title: "Garden Formal",
    subtitle: "Earthy tones & elegant attire",
    description: "We kindly invite our guests to dress in formal garden attire. Subtle botanical shades, soft olive greens, sage, warm cream, warm beige, and classic dark suits or tuxedos are warmly encouraged.",
    swatches: [
      { hex: "#697052", label: "Olive Green" },
      { hex: "#7D876D", label: "Muted Sage" },
      { hex: "#A79B89", label: "Warm Linen" },
      { hex: "#E8DFCF", label: "Soft Cream" },
      { hex: "#283024", label: "Forest Dark" }
    ],
    notes: "Please note that parts of the reception will be held on garden lawns. Ladies may wish to consider block heels or wedge footwear for comfort."
  },
  rsvp: {
    deadline: "1 August 2026",
    dietaryOptions: ["None", "Vegetarian", "Vegan", "Gluten-Free", "Nut Allergy", "Dairy-Free"],
    maxGuests: 4,
    emailRecipient: "rsvp@oliviaandjames2026.com"
  },
  music: {
    enabled: true,
    title: "Acoustic Romantic Piano",
    artist: "Botanical Strings",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-wedding-115161.mp3"
  },
  registry: {
    title: "Gift Registry & Wishes",
    description: "Your presence on our wedding day is the greatest gift we could ever ask for. However, should you wish to honor us with a gift, a contribution toward our honeymoon adventure would be deeply appreciated.",
    honeymoonFundNote: "A card box will also be available at the reception venue.",
    bankDetails: {
      accountHolder: "Olivia Sterling & James Montgomery",
      bankName: "Private Wedding Account",
      iban: "GB00 DEMO 0000 0000 0000 00",
      swift: "DEMOGB2L"
    }
  }
};
