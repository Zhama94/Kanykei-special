export type SupportedLanguage = 'en' | 'de' | 'ja' | 'ru' | 'ky';

export interface LocalizedTourDay {
  day: number;
  title: string;
  distance: string;
  ridingHours: string;
  altitude: string;
  description: string;
  campType: string;
}

export interface LocalizedTourFaq {
  question: string;
  answer: string;
}

export interface LocalizedTour {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  durationLabel: string;
  difficulty: string;
  difficultyNote: string;
  priceDisplay: string;
  priceNote: string;
  elevationMax: string;
  groupSize: string;
  bestSeason: string;
  overview: string;
  highlights: string[];
  ridingRequirements: {
    pace: string;
    gaits: string;
    hoursPerDay: string;
    terrain: string;
    experienceNeeded: string;
  };
  accommodation: {
    description: string;
    features: string[];
  };
  meals: {
    description: string;
    highlights: string[];
  };
  included: string[];
  excluded: string[];
  itinerary: LocalizedTourDay[];
  faqs: LocalizedTourFaq[];
}

export interface LocalizedDestination {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  elevation: string;
  description: string;
  editorialDeck: string;
  features: string[];
  riderNote: string;
}

export interface LocalizedPillar {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
}

export interface LocalizedStep {
  num: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface LocalizedStory {
  riderProfile: string;
  itinerary: string;
  passage: string;
  verificationLabel: string;
}

export interface LocalizedArticle {
  id: string;
  number: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  title: string;
  subtitle: string;
  excerpt: string;
  pullQuote: string;
  content: {
    sectionTitle?: string;
    paragraphs: string[];
  }[];
  fieldNotes: { label: string; value: string }[];
}

export interface TranslationStrings {
  nav: {
    journeys: string;
    philosophy: string;
    discover: string;
    journal: string;
    contact: string;
    planJourney: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineAccent: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    scrollIndicator: string;
    coordinates: string;
  };
  intro: {
    kicker: string;
    headline: string;
    leadParagraph: string;
    bodyParagraph: string;
    captionTag: string;
    captionText: string;
    figNote: string;
    pillars: {
      smallGroups: { title: string; desc: string };
      localKnowledge: { title: string; desc: string };
      horses: { title: string; desc: string };
      remote: { title: string; desc: string };
      hospitality: { title: string; desc: string };
    };
  };
  journeys: {
    kicker: string;
    headline: string;
    subtitle: string;
    disclaimerLabel: string;
    disclaimer: string;
    sectionLabel: string;
    sectionSublabel: string;
    discoverBtn: string;
    rateLabel: string;
    perPerson: string;
    customQuotation: string;
    duration: string;
    difficulty: string;
    bespokeBadge: string;
    bespokeDesc: string;
    bespokeHighlights: string[];
    bespokeCta: string;
  };
  difference: {
    kicker: string;
    headline: string;
    subtitle: string;
    pillars: LocalizedPillar[];
  };
  discover: {
    kicker: string;
    headline: string;
    subtitle: string;
    destinations: LocalizedDestination[];
    dispatchLabel: string;
    highlightsTitle: string;
    riderNoteTitle: string;
    cta: string;
  };
  steps: {
    kicker: string;
    headline: string;
    cta: string;
    list: LocalizedStep[];
  };
  stories: {
    kicker: string;
    headline: string;
    note: string;
    editorialNoticeLabel: string;
    editorialNoticeText: string;
    list: LocalizedStory[];
  };
  journal: {
    kicker: string;
    headline: string;
    subtitle: string;
    readArticle: string;
    byAuthor: string;
  };
  bespoke: {
    kicker: string;
    headline: string;
    supporting: string;
    cta: string;
  };
  footer: {
    tagline: string;
    mountainBaseTitle: string;
    baseCamp: string;
    emailLabel: string;
    email: string;
    whatsappLabel: string;
    whatsappNumber: string;
    whatsappUrl: string;
    explore: string;
    company: string;
    newsletterTitle: string;
    newsletterDesc: string;
    subscribeBtn: string;
    subscribePlaceholder: string;
    subscribeSuccess: string;
    subscribeError: string;
    officialChannels: string;
    instagramHandle: string;
    instagramUrl: string;
    facebookName: string;
    facebookUrl: string;
    rights: string;
    privacy: string;
    terms: string;
    languageLabel: string;
  };
  inquiry: {
    title: string;
    subtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    journeyLabel: string;
    datesLabel: string;
    datesPlaceholder: string;
    travelersLabel: string;
    travelersOptions: string[];
    experienceLabel: string;
    experienceOptions: { value: string; label: string; desc: string }[];
    guideLangLabel: string;
    guideLangOptions: string[];
    notesLabel: string;
    notesPlaceholder: string;
    privacyConsent: string;
    privacyLink: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successSubtitle: string;
    successSteps: string[];
    successClose: string;
    errors: {
      fullName: string;
      email: string;
      country: string;
      privacy: string;
    };
  };
  tourModal: {
    closeLabel: string;
    expeditionPrefix: string;
    tabs: {
      itinerary: string;
      riding: string;
      stay: string;
      included: string;
    };
    durationLabel: string;
    difficultyLabel: string;
    maxAltLabel: string;
    seasonLabel: string;
    highlightsTitle: string;
    dayPrefix: string;
    ridingHoursLabel: string;
    campLabel: string;
    horsemanshipTitle: string;
    horsemanshipPace: string;
    horsemanshipGaits: string;
    horsemanshipHours: string;
    horsemanshipTerrain: string;
    horsemanshipExperience: string;
    stayTitle: string;
    mealsTitle: string;
    includedTitle: string;
    excludedTitle: string;
    faqTitle: string;
    inquireBtn: string;
    startingFrom: string;
  };
  privacyModal: {
    title: string;
    closeBtn: string;
    sections: {
      title: string;
      body: string;
    }[];
    lastUpdated: string;
  };
}

export const translations: Record<SupportedLanguage, TranslationStrings> = {
  en: {
    nav: {
      journeys: "Journeys",
      philosophy: "Our Philosophy",
      discover: "Discover Kyrgyzstan",
      journal: "Journal",
      contact: "Contact",
      planJourney: "Plan Your Journey",
    },
    hero: {
      eyebrow: "A WORLD BEYOND THE ORDINARY · KYRGYZSTAN",
      headlineLine1: "Beyond the Trails.",
      headlineLine2: "Into the ",
      headlineAccent: "Wild Heart",
      subheadline: "Extraordinary horseback journeys through ancient nomadic lands, remote mountain valleys, and landscapes that remain wonderfully untouched.",
      primaryCta: "Explore Our Journeys",
      secondaryCta: "Create Your Expedition",
      scrollIndicator: "Scroll to explore",
      coordinates: "41°31′ N, 75°08′ E · CENTRAL TIAN SHAN",
    },
    intro: {
      kicker: "The TAI Philosophy",
      headline: "Not Just a Journey. A Different Way to Discover the World.",
      leadParagraph: "In a world mapped down to the meter, Kyrgyzstan remains one of the few places where vast mountain ridges open without fences, where riding is not a hobby but an ancient heritage.",
      bodyParagraph: "At TAI TRAVEL, we design intimate equestrian expeditions that honor this landscape and its nomadic traditions. Travelling on sure-footed mountain horses, we venture far into alpine pastures, sleep beneath handcrafted felt yurts, and share meals prepared over mountain fires.",
      captionTag: "Song-Kul Summer Jailoo · 3,016 Meters",
      captionText: "Nomadic felt yurts (boz-ui) and Kyrgyz mountain horses grazing beneath the celestial sky.",
      figNote: "Fig. 01 — Summer transhumance pasture where our riders lodge with local semi-nomadic shepherd families.",
      pillars: {
        smallGroups: {
          title: "Intimate Groups (4–8 Riders)",
          desc: "Never crowded trails. Every journey is limited to a small circle of riders to preserve personal care, agility, and minimal footprint."
        },
        localKnowledge: {
          title: "Nomadic Heritage & Local Guides",
          desc: "Led by seasoned Kyrgyz horsemen who grew up in the saddle and know every hidden ravine, pass, and weather sign."
        },
        horses: {
          title: "Exceptional Mountain Horses",
          desc: "Hardy, calm, and sure-footed Kyrgyz mountain horses matched individually to your riding style, posture, and pace."
        },
        remote: {
          title: "Untouched High Passages",
          desc: "Access remote valleys inaccessible to vehicles, crossing passes up to 3,800m where only horse hooves and golden eagles travel."
        },
        hospitality: {
          title: "Authentic Mountain Hospitality",
          desc: "Genuine warmth of nomadic families in summer jailoo camps, freshly baked bread, samovar tea, and handcrafted wool comfort."
        }
      }
    },
    journeys: {
      kicker: "Curated Expeditions",
      headline: "Find Your Own Wild.",
      subtitle: "Each itinerary is handcrafted around the seasons, mountain passes, and nomadic migration patterns.",
      disclaimerLabel: "Illustrative Sample Itineraries:",
      disclaimer: "Durations, difficulty ratings, and starting rates are displayed for planning and custom quotation.",
      sectionLabel: "Scheduled Small-Group Departures (4–8 Riders)",
      sectionSublabel: "Tian Shan & Song-Kul",
      discoverBtn: "Discover This Journey",
      rateLabel: "Indicative Starting Rate",
      perPerson: "/ pers.",
      customQuotation: "Custom Quotation",
      duration: "Duration",
      difficulty: "Difficulty",
      bespokeBadge: "TOUR 04 · PRIVATE BESPOKE",
      bespokeDesc: "Designed entirely around your riding pace, preferred dates, and equestrian aspirations. Whether crossing unmapped ridges or establishing a private family camp beside alpine waters, our senior expedition leaders formulate a peerless route.",
      bespokeHighlights: [
        "Private horse masters and dedicated mountain camp chef",
        "Flexible daily riding tempo (fast canters or leisurely exploration)",
        "Exclusive single or family yurt setup in secluded pastures",
        "Complimentary satellite safety comms & bespoke transfers"
      ],
      bespokeCta: "Request Private Consultation",
    },
    difference: {
      kicker: "Our Ethos",
      headline: "Luxury, Measured in Experiences.",
      subtitle: "For us, luxury is not gold leaf or hotel lobbies. It is silence across thirty kilometers of alpine meadow, the rhythm of cantering under open skies, and genuine human warmth in a high mountain yurt.",
      pillars: [
        {
          num: "01",
          title: "Local Knowledge",
          subtitle: "Grounded in Living Nomadic Lineage",
          description: "Discover Kyrgyzstan through people who understand its landscapes, weather signs, and mountain secrets. Our lead horsemen grew up riding these exact ridges from early childhood. They do not follow tourist tracks; they follow ancient shepherd routes carved by generations of nomads.",
          quote: "When a Kyrgyz horseman reads the mountain clouds, he is listening to an alphabet learned over a lifetime in the saddle."
        },
        {
          num: "02",
          title: "Exceptional Horses",
          subtitle: "Sure-Footed Autochthonous Kyrgyz Mounts",
          description: "Thoughtful horse selection, responsible riding practices, and suitable horses matched to individual rider experience. Our horses are calm, sure-footed on steep shale, and hardy in high-altitude terrain. We use high-grade trail saddles with sheepskin seat savers to ensure comfort across long mountain days.",
          quote: "A true mountain horse does not rush; he measures each stone with his hooves and breathes steadily through the thin air."
        },
        {
          num: "03",
          title: "Meaningful Encounters",
          subtitle: "Unscripted Hospitality in the Summer Jailoo",
          description: "Experience nomadic hospitality, local food, traditional yurts, and authentic cultural connections without staging or performance. Sit on hand-felted shyrdak rugs, share freshly baked lepyoshka and warm samovar tea with shepherd families, and listen to the resonance of the komuz beneath the stars.",
          quote: "A guest in the yurt is never an observer; around the dastarkhan table, you are part of the family circle."
        },
        {
          num: "04",
          title: "Thoughtfully Designed Expeditions",
          subtitle: "Meticulous Mountain Logistics & Safety",
          description: "Carefully planned routes, personalized attention, and logistics designed around the journey. From pack horses carrying duffels to chef-prepared meals cooked over campfire embers, every detail is orchestrated to feel effortless so you can focus entirely on the rhythm of the trail.",
          quote: "True luxury is the quiet confidence that every mountain pass, camp location, and horse transition is managed with mastery."
        }
      ]
    },
    discover: {
      kicker: "The Land of Celestial Mountains",
      headline: "A Land That Still Feels Untamed.",
      subtitle: "Where 93% of the terrain rises as mountains, and the nomadic pulse of Central Asia beats unbroken.",
      destinations: [
        {
          id: "song-kul",
          tag: "Song-Kul Lake",
          title: "Song-Kul Lake & High Jailoo",
          subtitle: "The Sacred Mirror of the Nomads",
          elevation: "3,016 m Altitude",
          description: "Set in a high-altitude basin surrounded by smooth mountain domes, Song-Kul is a sapphire lake with no permanent settlements, electricity, or paved roads. For centuries, Kyrgyz semi-nomads have migrated here each June to graze their livestock on the lush alpine grass.",
          editorialDeck: "Endless emerald pastures, silent crystalline waters, and traditional felt yurts beneath an ocean of stars.",
          features: [
            "Untamed wide shores ideal for spirited long canters",
            "Authentic yurt camps operated by hospitable shepherd families",
            "Clear high-altitude night skies with zero light pollution",
            "Fresh mountain kaimak (clotted cream) and samovar tea"
          ],
          riderNote: "Riding here feels like stepping outside of time. The horizon stretches for miles with no fences, allowing freedom of movement impossible in conventional equestrian destinations."
        },
        {
          id: "tian-shan",
          tag: "Tian Shan Ranges",
          title: "Tian Shan Mountain Ranges",
          subtitle: "The Celestial Peaks of Central Asia",
          elevation: "Up to 7,439 m (Jengish Chokusu)",
          description: "The Tian Shan—meaning 'Celestial Mountains' in ancient Turkic and Chinese—is one of the world's most formidable alpine mountain ranges. Our routes traverse high passes between 3,200m and 3,900m, navigating pristine glacier-fed river valleys, alpine moraines, and wild scree slopes.",
          editorialDeck: "Jagged granite peaks crowned with ancient ice, deep pine gorges, and wind-sculpted stone passes.",
          features: [
            "Exhilarating passes with breathtaking panoramic views",
            "Glacial river crossings on calm, confident mountain horses",
            "Golden eagles, bearded vultures, and high-altitude flora",
            "Wild alpine camping beside crystal mountain streams"
          ],
          riderNote: "Ascending over Ton Pass or Tosor Pass requires calm horsemanship and trust in your horse. Kyrgyz horses carefully test each rock, stepping with mathematical precision."
        },
        {
          id: "yurt-culture",
          tag: "Nomadic Yurt Heritage",
          title: "Nomadic Yurt Culture & Living Crafts",
          subtitle: "Boz-Ui: Architecture of Wool, Wood, and Wind",
          elevation: "Portable Living Across All Altitudes",
          description: "The Kyrgyz yurt (boz-ui) is not simply a shelter; it is a sacred cosmology and an architectural marvel perfected over three millennia of nomadic movement. Made entirely of bent willow poles (kerege) and compressed sheep's wool felt, it keeps riders warm during sub-zero mountain nights.",
          editorialDeck: "Hand-felted shyrdak carpets, crackling iron stoves, and warm wool insulation that breathes with the weather.",
          features: [
            "Handmade shyrdak mosaic felt rugs with ancient symbolic motifs",
            "Central tündük roof ring open to the sun and night stars",
            "Invigorating warmth from dried-wood and coal camp stoves",
            "Intimate evening gatherings with folk stories and tea"
          ],
          riderNote: "Falling asleep inside a warm felt yurt after six hours in the saddle, with the scent of wild mountain thyme drifting in, is one of the journey's deepest luxuries."
        },
        {
          id: "valleys-canyons",
          tag: "River Valleys & Canyons",
          title: "Wild River Valleys & Red Canyons",
          subtitle: "From Crimson Sandstone to Conifer Wilderness",
          elevation: "1,600 m to 2,600 m",
          description: "Before ascending into the high snow peaks, our routes pass through striking geological transitions: the red clay spires of Kyzart, wind-sculpted sandstone gorges, and deep valleys lined with fragrant Tien Shan spruces and wild rosehip bushes.",
          editorialDeck: "Dramatic Martian red cliffs giving way to crystalline braided mountain rivers and juniper forests.",
          features: [
            "Striking contrasts between red rock geology and green meadows",
            "Sheltered valleys ideal for lively trots along riverbeds",
            "Centuries-old stone petroglyphs carved by ancient hunters",
            "Hidden waterfalls and natural hot thermal springs"
          ],
          riderNote: "The variety of terrain keeps every riding hour engaging. You might start the morning trotting through red canyons and end the afternoon cantering across alpine pastures."
        },
        {
          id: "hospitality-table",
          tag: "Dastarkhan Hospitality",
          title: "Dastarkhan & Living Hospitality",
          subtitle: "The Sacred Ritual of the Kyrgyz Table",
          elevation: "Celebrated in Every Mountain Camp",
          description: "In Kyrgyz nomadic tradition, a guest arriving on horseback is considered a blessing from the divine. The dastarkhan—a low table covered with handcrafted cloth—is immediately filled with warm flatbread (lepyoshka), fresh butter, mountain honey, dried apricots, and steaming tea.",
          editorialDeck: "Freshly made mountain meals, hot samovar tea, and genuine human connection with local shepherd families.",
          features: [
            "Freshly baked bread with rich kaimak made that very morning",
            "Traditional slow-cooked lamb and vegetable dishes prepared with wild herbs",
            "Fermented horse milk (kymyz) during peak summer season",
            "The ancient nomadic art of toasts, blessings, and stories"
          ],
          riderNote: "There is no artificial performance here. You sit on felt carpets alongside family members, exchanging laughter and stories through your guide, experiencing hospitality in its purest form."
        }
      ],
      dispatchLabel: "EXPEDITION DISPATCH",
      highlightsTitle: "Equestrian Highlights",
      riderNoteTitle: "The Rider's Perspective",
      cta: "Explore Our Journeys in This Region",
    },
    steps: {
      kicker: "The Process",
      headline: "The Journey, From First Conversation to the Saddle.",
      cta: "Start Planning Your Journey",
      list: [
        {
          num: "01",
          title: "Tell Us Your Vision",
          subtitle: "First Consultation",
          description: "Share your preferred dates, riding experience, fitness level, and travel interests. Whether you seek high-pass ascents or tranquil lakeside yurt stays, we listen attentively."
        },
        {
          num: "02",
          title: "Design Your Journey",
          subtitle: "Route Calibration",
          description: "We match you with an existing small-group departure or craft a private bespoke expedition calibrated around your rhythm, group composition, and riding goals."
        },
        {
          num: "03",
          title: "Prepare for Departure",
          subtitle: "Expedition Dossier",
          description: "Receive practical guidance on riding equipment, layering for mountain weather, physical conditioning, and visa-free Central Asian travel arrangements."
        },
        {
          num: "04",
          title: "Discover Kyrgyzstan",
          subtitle: "In the Saddle",
          description: "Arrive in Bishkek ready for a meaningful horseback journey. Meet your Kyrgyz horse masters, adjust your stirrups, and ride into one of Earth's last untamed wildernesses."
        }
      ]
    },
    stories: {
      kicker: "Guest Experiences",
      headline: "Stories from the Trail.",
      note: "Editorial dispatches and rider reflections from recent traverses across the Tian Shan and Song-Kul.",
      editorialNoticeLabel: "Editorial Notice:",
      editorialNoticeText: "These reflections represent synthesized equestrian field dispatches and trail logs. Verified direct client reviews with post-expedition consent will be updated following the upcoming summer season.",
      list: [
        {
          riderProfile: "Dressage & Trail Rider · Zurich, Switzerland",
          itinerary: "The Nomad Trail (Song-Kul)",
          passage: "I have ridden in Iceland, Patagonia, and Andalusia, but nothing compares to the scale of Kyrgyzstan. Song-Kul has no roads or electricity; just endless alpine grass at 3,000 meters. The Kyrgyz horse I was paired with was calm yet energetic, navigating rocky trails with absolute self-assurance. Sleeping in a warm felt yurt after a six-hour day in the saddle is an experience I will never forget.",
          verificationLabel: "Illustrative Field Dispatch · Season 2025"
        },
        {
          riderProfile: "Wilderness Trekker & Equestrian · Edinburgh, Scotland",
          itinerary: "Into the Tian Shan (5 Days)",
          passage: "The ascent over Ton Pass at nearly 3,800 meters was exhilarating. You realize how completely dependent you are on your horse's judgment and footing. Our Kyrgyz horse masters knew every contour of the shale paths. The campfire meals—fresh flatbread, warm lamb stew, and hot tea from the samovar—tasted better than any Michelin-starred dinner.",
          verificationLabel: "Illustrative Field Dispatch · Season 2025"
        },
        {
          riderProfile: "Equestrian Photographer · Kyoto, Japan",
          itinerary: "The Great Kyrgyz Expedition (10 Days)",
          passage: "As a photographer, the morning light hitting the bozoi yurts with horse herds grazing in the mist is pure poetry. TAI TRAVEL's guides were deeply respectful of the nomadic families we visited. We were welcomed as genuine guests, not tourists. The freedom to canter across kilometers of unfenced pasture is something that barely exists anywhere else on Earth.",
          verificationLabel: "Illustrative Field Dispatch · Season 2025"
        }
      ]
    },
    journal: {
      kicker: "Travel Editorial",
      headline: "Notes from the Mountains.",
      subtitle: "Essays on nomadic horse culture, high-altitude trail preparation, and the living heritage of the Central Asian jailoo.",
      readArticle: "Read Dispatch",
      byAuthor: "By",
    },
    bespoke: {
      kicker: "TAI TRAVEL BESPOKE",
      headline: "Some Journeys Cannot Be Found. They Must Be Created.",
      supporting: "Tell us what you dream of discovering. Together, we will shape a horseback expedition around your pace, your interests, and your idea of adventure.",
      cta: "Create Your Private Expedition",
    },
    footer: {
      tagline: "Boutique horseback riding expeditions across the untouched landscapes and nomadic heritage of Kyrgyzstan.",
      mountainBaseTitle: "Mountain Base",
      baseCamp: "Base Camp: Kyzart Gorge, Kochkor District",
      emailLabel: "Direct Email:",
      email: "sonkulhorsebackadventure@gmail.com",
      whatsappLabel: "WhatsApp:",
      whatsappNumber: "+996 220 073 174",
      whatsappUrl: "https://wa.me/996220073174",
      explore: "Expeditions",
      company: "Company & Land",
      newsletterTitle: "The Nomadic Letter",
      newsletterDesc: "Occasional dispatches on trail conditions, expedition dates, and seasonal mountain journeys. No marketing noise.",
      subscribeBtn: "Subscribe",
      subscribePlaceholder: "Enter your email address",
      subscribeSuccess: "Thank you. You have been added to our seasonal dispatch list.",
      subscribeError: "Please provide a valid email address.",
      officialChannels: "Official Channels:",
      instagramHandle: "Instagram (@friendssongkul)",
      instagramUrl: "https://instagram.com/friendssongkul",
      facebookName: "Facebook: Айжамал Абибулла кызы",
      facebookUrl: "https://www.facebook.com/search/top?q=%D0%90%D0%B9%D0%B6%D0%B0%D0%BC%D0%B0%D0%BB%20%D0%90%D0%B1%D0%B8%D0%B1%D1%83%D0%BB%D0%BB%D0%B0%20%D0%BA%D1%8B%D0%B7%D1%8B",
      rights: "All rights reserved. TAI TRAVEL Equestrian Expeditions.",
      privacy: "Privacy Policy",
      terms: "Terms of Travel",
      languageLabel: "Language:",
    },
    inquiry: {
      title: "Plan Your Equestrian Journey",
      subtitle: "Tell us about your riding background, dream dates, and interests. Our expedition directors respond personally within 24 hours.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "e.g., Alexandra Wright",
      emailLabel: "Email Address",
      emailPlaceholder: "e.g., alexandra@example.com",
      countryLabel: "Country of Residence",
      countryPlaceholder: "e.g., United Kingdom, Switzerland, USA",
      journeyLabel: "Preferred Expedition",
      datesLabel: "Target Travel Window",
      datesPlaceholder: "e.g., Mid July 2026, or flexible summer",
      travelersLabel: "Number of Travelers",
      travelersOptions: ["1 solo rider", "2 riders", "3-4 riders (small group)", "5+ riders (private group)"],
      experienceLabel: "Riding Experience Level",
      experienceOptions: [
        { value: "Novice", label: "Confident Beginner", desc: "Basic arena riding, walk and some trot; eager for mountain riding." },
        { value: "Intermediate", label: "Intermediate Trail Rider", desc: "Comfortable in walk, trot, and canter; experienced with trail riding." },
        { value: "Advanced", label: "Advanced / Confident", desc: "Independent seat, capable on steep terrain and fast open gallops." },
        { value: "Expert", label: "Expedition / Endurance", desc: "Years in the saddle, cross-country, endurance, or competition background." }
      ],
      guideLangLabel: "Preferred Expedition Guide Language",
      guideLangOptions: ["English", "Russian", "German", "Japanese", "Kyrgyz"],
      notesLabel: "Special Aspirations or Notes",
      notesPlaceholder: "Share anything helpful: previous riding trips, preferred pace, dietary preferences, or custom route dreams...",
      privacyConsent: "I agree to the privacy policy and consent to TAI TRAVEL contacting me regarding this expedition proposal.",
      privacyLink: "View Privacy Policy",
      submitBtn: "Submit Expedition Inquiry",
      submittingBtn: "Submitting...",
      successTitle: "Inquiry Received with Appreciation",
      successSubtitle: "Thank you for sharing your vision with TAI TRAVEL.",
      successSteps: [
        "One of our senior expedition directors will personally review your horsemanship background and dates.",
        "We will email you a tailored itinerary dossier with route maps, horse matching advice, and exact seasonal rates within 24 hours.",
        "No payment is required at this stage. We believe in meticulous consultation before any saddle is saddled."
      ],
      successClose: "Return to Website",
      errors: {
        fullName: "Please enter your full name.",
        email: "Please provide a valid email address.",
        country: "Please enter your country of residence.",
        privacy: "Please confirm consent to our privacy policy so we can process your inquiry."
      }
    },
    tourModal: {
      closeLabel: "Close tour details",
      expeditionPrefix: "EXPEDITION",
      tabs: {
        itinerary: "Day-by-Day Itinerary",
        riding: "Horsemanship & Pace",
        stay: "Yurts & Camp Life",
        included: "Inclusions & FAQs",
      },
      durationLabel: "Duration",
      difficultyLabel: "Difficulty",
      maxAltLabel: "Max Altitude",
      seasonLabel: "Best Season",
      highlightsTitle: "Expedition Highlights",
      dayPrefix: "Day",
      ridingHoursLabel: "Saddle Time",
      campLabel: "Overnight Camp",
      horsemanshipTitle: "Riding Criteria & Physical Demands",
      horsemanshipPace: "Daily Pace & Gaits",
      horsemanshipGaits: "Required Gaits",
      horsemanshipHours: "Hours in Saddle",
      horsemanshipTerrain: "Mountain Terrain",
      horsemanshipExperience: "Horsemanship Criteria",
      stayTitle: "Authentic Yurt Living",
      mealsTitle: "Camp Meals & Field Cuisine",
      includedTitle: "What is Included with TAI TRAVEL",
      excludedTitle: "Excluded / Personal Preparation",
      faqTitle: "Frequently Asked Questions",
      inquireBtn: "Inquire About This Tour",
      startingFrom: "Starting Rate",
    },
    privacyModal: {
      title: "Privacy Policy & Guest Data Confidentiality",
      closeBtn: "Understood",
      sections: [
        {
          title: "1. Our Commitment to Discretion",
          body: "TAI TRAVEL operates boutique equestrian expeditions for private travelers worldwide. We treat guest inquiries, dietary requirements, travel dates, and personal riding records with strict confidentiality. We never sell, lease, or monetize guest information to commercial data brokers or marketing third parties."
        },
        {
          title: "2. Information Collected During Inquiry",
          body: "When you submit an expedition inquiry, we collect your name, email address, country of residence, equestrian riding background, and travel preferences. This data is utilized exclusively by our expedition directors to evaluate route suitability, match horse temperaments, and formulate tailored proposals."
        },
        {
          title: "3. Operational Medical & Safety Data",
          body: "Prior to mountain departure, confirmed riders complete a confidential health and emergency questionnaire (including dietary allergies, emergency contacts, and high-altitude health history). This information is accessed solely by our expedition lead guides and registered satellite emergency medical responders."
        },
        {
          title: "4. Media & Photography on the Trail",
          body: "We celebrate the quiet privacy of our guests. No guest images, names, or testimonials are ever published without explicit written prior consent."
        }
      ],
      lastUpdated: "Last updated: Season 2026 · TAI TRAVEL Equestrian Expeditions · Base Camp: Kyzart Gorge, Kyrgyzstan."
    }
  },

  ru: {
    nav: {
      journeys: "Маршруты",
      philosophy: "Философия",
      discover: "О Кыргызстане",
      journal: "Журнал",
      contact: "Контакты",
      planJourney: "Спланировать тур",
    },
    hero: {
      eyebrow: "МИР ЗА ПРЕДЕЛАМИ ПРИВЫЧНОГО · КЫРГЫЗСТАН",
      headlineLine1: "За пределами троп.",
      headlineLine2: "В самое ",
      headlineAccent: "сердце",
      subheadline: "Исключительные конные путешествия по древним землям кочевников, высокогорным перевалам и нетронутым просторам Тянь-Шаня.",
      primaryCta: "Исследовать маршруты",
      secondaryCta: "Создать экспедицию",
      scrollIndicator: "Листайте вниз",
      coordinates: "41°31′ N, 75°08′ E · ЦЕНТРАЛЬНЫЙ ТЯНЬ-ШАНЬ",
    },
    intro: {
      kicker: "Философия TAI",
      headline: "Не просто путешествие. Иной взгляд на мир.",
      leadParagraph: "В мире, размеченном до метра, Кыргызстан остается одним из немногих мест, где горные хребты тянутся без заборов, а верховая езда — живое наследие предков.",
      bodyParagraph: "В TAI TRAVEL мы создаем камерные конные экспедиции в гармонии с природой и традициями кочевников. На надежных горных конях мы поднимаемся на джайлоо, ночуем в войлочных юртах и делим трапезу у горного огня.",
      captionTag: "Джайлоо Сон-Куль · 3 016 метров",
      captionText: "Традиционные юрты (боз уй) и кыргызские кони на фоне бескрайних небесных просторов.",
      figNote: "Илл. 01 — Летние пастбища, где наши всадники гостят у семей потомственных чабанов.",
      pillars: {
        smallGroups: {
          title: "Камерные группы (4–8 всадников)",
          desc: "Никаких многолюдных групп. Только близкий круг всадников для бережного отношения к природе и личного комфорта."
        },
        localKnowledge: {
          title: "Опыт кочевых проводников",
          desc: "Экспедиции ведут кыргызские конники, выросшие в седле и знающие каждую тропу и примету погоды."
        },
        horses: {
          title: "Выносливые горные кони",
          desc: "Спокойные, сильные и надежные лошади местной породы, подобранные индивидуально под ваш уровень."
        },
        remote: {
          title: "Труднодоступные перевалы",
          desc: "Пути, недоступные транспорту, высоты до 3800 метров, где звучит лишь стук копыт и крик беркута."
        },
        hospitality: {
          title: "Искреннее гостеприимство",
          desc: "Тепло чабанских семей на летних пастбищах, горячие лепёшки из тандыра и чай из самовара."
        }
      }
    },
    journeys: {
      kicker: "Избранные экспедиции",
      headline: "Найдите свою дикую природу.",
      subtitle: "Каждый маршрут выстроен с учетом сезонов, перевалов и традиций кочевий.",
      disclaimerLabel: "Примерные программы:",
      disclaimer: "Длительность, сложность и стоимость служат ориентиром для индивидуального расчета.",
      sectionLabel: "Регулярные выезды малых групп (4–8 всадников)",
      sectionSublabel: "Тянь-Шань и Сон-Куль",
      discoverBtn: "Подробнее о маршруте",
      rateLabel: "Ориентировочная стоимость",
      perPerson: "/ чел.",
      customQuotation: "По запросу",
      duration: "Длительность",
      difficulty: "Сложность",
      bespokeBadge: "ТУР 04 · ИНДИВИДУАЛЬНАЯ ЭКСПЕДИЦИЯ",
      bespokeDesc: "Создается исключительно под ваш темп езды, даты и конные цели. От переходов по нехоженым хребтам до частного семейного лагеря у кристального озера — мы воплотим маршрут безупречно.",
      bespokeHighlights: [
        "Личный старший проводник и шеф-повар походного лагеря",
        "Свободный темп езды (бодрый галоп или размеренное созерцание)",
        "Эксклюзивная отдельная юрта в укромном горном урочище",
        "Спутниковая безопасность и премиальный персональный трансфер"
      ],
      bespokeCta: "Запросить консультацию",
    },
    difference: {
      kicker: "Наш подход",
      headline: "Роскошь, измеряемая впечатлениями.",
      subtitle: "Для нас роскошь — это не позолота отелей, а тридцать километров тишины альпийских лугов и галоп под бездонным небом.",
      pillars: [
        {
          num: "01",
          title: "Знание земли предков",
          subtitle: "Живая кочевая преемственность",
          description: "Открывайте Кыргызстан вместе с теми, кто знает горы как свои пять пальцев. Наши проводники с раннего детства в седле. Они ведут не по туристическим шаблонам, а по древним тропам пастухов.",
          quote: "Когда кыргызский конник смотрит на горные облака, он читает книгу, которую учил всю жизнь в седле."
        },
        {
          num: "02",
          title: "Исключительные лошади",
          subtitle: "Прирожденные кони горных кряжей",
          description: "Индивидуальный подбор лошадей под темперамент и уровень всадника. Спокойные, выносливые и поразительно чуткие на крутых осыпях. Удобные экспедиционные седла с чехлами из натуральной овчины.",
          quote: "Горный конь не суетится: он взвешивает каждый камень копытом и ровно дышит в разреженном воздухе."
        },
        {
          num: "03",
          title: "Искренние встречи",
          subtitle: "Непостановочное гостеприимство джайлоо",
          description: "Погружение в культуру кочевников без фольклорной бутафории. Чай из самовара с пастухами, мягкий войлок шырдаков, свежий тандырный хлеб и неспешные беседы под звездным куполом.",
          quote: "Гость в юрте — никогда не зритель. За дастарханом каждый становится частью семейного круга."
        },
        {
          num: "04",
          title: "Безупречная организация",
          subtitle: "Выверенная логистика и безопасность в горах",
          description: "Вьючный караван везет вещи, походный лагерь ставится вовремя, горячий ужин ждет на закате. Вы полностью отдаетесь радости движения и тишине природы.",
          quote: "Истинный комфорт — это спокойная уверенность в каждом перевале и надежности вашей команды."
        }
      ]
    },
    discover: {
      kicker: "Земля Небесных гор",
      headline: "Земля, сохранившая первозданную силу.",
      subtitle: "Где 93% территории занимают горы, а вековой ритм кочевой жизни Центральной Азии не утихает.",
      destinations: [
        {
          id: "song-kul",
          tag: "Озеро Сон-Куль",
          title: "Озеро Сон-Куль и высокогорное джайлоо",
          subtitle: "Священное зеркало кочевников",
          elevation: "3 016 м над уровнем моря",
          description: "Сон-Куль лежит в чаше между мягких хребтов Тянь-Шаня. Здесь нет асфальта, электрических столбов и суеты. Каждое лето пастухи приводят сюда табуны на сочные альпийские травы.",
          editorialDeck: "Изумрудные луга без заборов, кристальная озерная гладь и юрты под звездным куполом.",
          features: [
            "Бескрайние ровные берега для стремительного галопа",
            "Аутентичные юртовые стоянки радушных семей чабанов",
            "Горное небо невероятной чистоты без светового шума городов",
            "Свежий густой каймак и чай из дровяного самовара"
          ],
          riderNote: "Здесь верховая езда ощущается как абсолютная свобода. Отсутствие изгородей позволяет двигаться в любом направлении."
        },
        {
          id: "tian-shan",
          tag: "Хребты Тянь-Шаня",
          title: "Горные цепи Тянь-Шаня",
          subtitle: "Небесные пики Центральной Азии",
          elevation: "Высоты до 7 439 м (Пик Победы)",
          description: "Тянь-Шань — одна из самых величественных горных систем планеты. Наши конные тропы пересекают перевалы на высоте 3200–3900 метров среди ледников, скал и диких ущелий.",
          editorialDeck: "Остроконечные гранитные пики во льдах, вековые еловые леса и перевалы, обдуваемые горным ветром.",
          features: [
            "Захватывающие дух панорамы на высоте орлиного полета",
            "Переправы через прозрачные ледниковые реки на надежных конях",
            "Встречи с беркутами, бородачами и редкими горными козерогами",
            "Ночевки в палатках или юртах у бурных горных ручьев"
          ],
          riderNote: "Подъем на перевалы Тон или Тосор требует доверия к коню. Кыргызские лошади выверяют каждый шаг с математической точностью."
        },
        {
          id: "yurt-culture",
          tag: "Традиция юрты",
          title: "Культура юрты и кочевое мастерство",
          subtitle: "Боз уй: гармония шерсти, дерева и ветра",
          elevation: "Универсальное жилье на любой высоте",
          description: "Кыргызская юрта (боз уй) — не просто палатка, а священная модель мироздания, отточенная тремя тысячелетиями кочевий. Согнутый ивняк и плотный войлок сохраняют тепло в морозные ночи.",
          editorialDeck: "Ручные войлочные ковры шырдак, потрескивающая печка и уютное тепло под покровом ночи.",
          features: [
            "Орнаментальные ковры шырдак ручной выделки",
            "Тюндюк — круглое купольное окно к солнцу и звездам",
            "Уютное тепло чугунной печки после целого дня в седле",
            "Теплые вечерние беседы за пиалой чая"
          ],
          riderNote: "Засыпать в теплой юрте после 6 часов в седле, вдыхая аромат горного чабреца — это ни с чем не сравнимое удовольствие."
        },
        {
          id: "valleys-canyons",
          tag: "Каньоны и долины",
          title: "Дикие речные долины и красные каньоны",
          subtitle: "От терракотовых скал до реликтовых ельников",
          elevation: "1 600 – 2 600 м над уровнем моря",
          description: "Прежде чем подняться к снежным вершинам, маршруты проходят сквозь удивительные пейзажи: багровые глиняные замки Кызарта, каньоны и долины с зарослями тянь-шаньской ели.",
          editorialDeck: "Марсианские красные обрывы, сменяющиеся хрустальными реками и можжевеловыми рощами.",
          features: [
            "Контраст терракотовых скал и сочной речной зелени",
            "Удобные участки речных пойм для резвой рыси",
            "Древние наскальные рисунки-петроглифы кочевников",
            "Целебные минеральные термальные источники"
          ],
          riderNote: "Разнообразие рельефа не дает заскучать ни на минуту: утро начинается в каньоне, а вечер встречает на изумрудном плато."
        },
        {
          id: "hospitality-table",
          tag: "Дастархан",
          title: "Дастархан и традиция гостеприимства",
          subtitle: "Священный ритуал кыргызского стола",
          elevation: "В каждом лагере на маршруте",
          description: "В кочевой культуре всадник у порога считается благословением свыше. Низкий стол дастархан мгновенно наполняется горячими лепешками, свежим маслом, горным медом и чаем.",
          editorialDeck: "Домашняя горная кухня, горячий чай из самовара и теплое человеческое общение.",
          features: [
            "Горячие лепешки со свежайшим утренним каймаком",
            "Сытные блюда из баранины и овощей с дикими горными травами",
            "Настоящий кумыс в разгар летнего сезона",
            "Древнее искусство благопожеланий (бата) и историй"
          ],
          riderNote: "Здесь нет показного туризма. Вы сидите за одним столом с семьей чабана, деля трапезу и искренние улыбки."
        }
      ],
      dispatchLabel: "ДНЕВНИК ЭКСПЕДИЦИИ",
      highlightsTitle: "Конные акценты",
      riderNoteTitle: "Взгляд из седла",
      cta: "Смотреть маршруты в этом регионе",
    },
    steps: {
      kicker: "Как мы работаем",
      headline: "Путь от первого разговора до седла.",
      cta: "Начать планирование",
      list: [
        {
          num: "01",
          title: "Расскажите о ваших планах",
          subtitle: "Первая консультация",
          description: "Поделитесь желаемыми датами, опытом верховой езды и предпочтениями. Хотите ли вы крутые перевалы или неспешный озерный отдых — мы внимательно выслушаем."
        },
        {
          num: "02",
          title: "Проектирование маршрута",
          subtitle: "Калибровка программы",
          description: "Мы подберем подходящую группу или разработаем приватную экспедицию с учетом вашего темпа, состава группы и уровня физической подготовки."
        },
        {
          num: "03",
          title: "Подготовка к выезду",
          subtitle: "Экспедиционное досье",
          description: "Вы получите подробные рекомендации по экипировке, слоям одежды для гор, правилам акклиматизации и безвизовому въезду в Кыргызстан."
        },
        {
          num: "04",
          title: "В седле по Кыргызстану",
          subtitle: "В добрый путь",
          description: "Прибытие в Бишкек, знакомство с конными гидами, подгонка стремян и старт в одно из последних нетронутых мест на планете."
        }
      ]
    },
    stories: {
      kicker: "Впечатления всадников",
      headline: "Истории с тропы.",
      note: "Честные путевые заметки участников переходов через Сон-Куль и Тянь-Шань.",
      editorialNoticeLabel: "Примечание редакции:",
      editorialNoticeText: "Данные отзывы составлены на основе полевых дневников и путевых заметок экспедиций. Проверенные отзывы с фото будут обновлены по итогам предстоящего сезона.",
      list: [
        {
          riderProfile: "Выездка и конный туризм · Цюрих, Швейцария",
          itinerary: "Тропа Кочевника (Сон-Куль)",
          passage: "Я ездила верхом в Исландии, Патагонии и Андалусии, но ничто не сравнится с масштабом Кыргызстана. На Сон-Куле нет дорог и электричества — только бескрайняя трава на высоте 3000 метров. Мой конь был спокоен и полон сил. Сон в теплой юрте после шести часов в седле — это воспоминание на всю жизнь.",
          verificationLabel: "Полевой очерк · Сезон 2025"
        },
        {
          riderProfile: "Горный треккер и всадник · Эдинбург, Шотландия",
          itinerary: "В сердце Тянь-Шаня (5 дней)",
          passage: "Подъем на перевал Тон на высоте почти 3800 метров был потрясающим. Понимаешь, насколько зависишь от надежности лошади. Проводники знали каждую складку тропы. Еда у костра — свежий хлеб, тушеное мясо и чай из самовара — вкуснее любого ресторана.",
          verificationLabel: "Полевой очерк · Сезон 2025"
        },
        {
          riderProfile: "Конный фотограф · Киото, Япония",
          itinerary: "Большая Кыргызская Экспедиция (10 дней)",
          passage: "Как фотограф, я был поражен утренним светом над юртами и табунами лошадей в тумане. Гиды TAI TRAVEL искренне уважают кочевые семьи. Нас принимали как дорогих гостей. Свобода скакать галопом километры подряд без единого забора почти нигде на Земле больше не существует.",
          verificationLabel: "Полевой очерк · Сезон 2025"
        }
      ]
    },
    journal: {
      kicker: "Заметки о путешествиях",
      headline: "Вести с гор.",
      subtitle: "Очерки о кочевой культуре, подготовке к высокогорным переходам и наследии Центральной Азии.",
      readArticle: "Читать статью",
      byAuthor: "Автор:",
    },
    bespoke: {
      kicker: "TAI TRAVEL BESPOKE",
      headline: "Некоторые путешествия нельзя найти готовыми. Их создают.",
      supporting: "Расскажите нам о своей мечте. Вместе мы разработаем конную экспедицию в вашем темпе и с учетом ваших интересов.",
      cta: "Запросить частную экспедицию",
    },
    footer: {
      tagline: "Бутиковые конные экспедиции по нетронутым просторам и кочевому наследию Кыргызстана.",
      mountainBaseTitle: "Горная база",
      baseCamp: "Базовый лагерь: урочище Кызарт",
      emailLabel: "Электронная почта:",
      email: "sonkulhorsebackadventure@gmail.com",
      whatsappLabel: "WhatsApp:",
      whatsappNumber: "+996 220 073 174",
      whatsappUrl: "https://wa.me/996220073174",
      explore: "Экспедиции",
      company: "О нас и крае",
      newsletterTitle: "Письмо кочевника",
      newsletterDesc: "Редкие весточки о перевалах, датах и новых горных направлениях без рекламного спама.",
      subscribeBtn: "Подписаться",
      subscribePlaceholder: "Введите ваш email адрес",
      subscribeSuccess: "Спасибо! Вы добавлены в список сезонной рассылки.",
      subscribeError: "Пожалуйста, введите корректный email адрес.",
      officialChannels: "Официальные каналы:",
      instagramHandle: "Instagram (@friendssongkul)",
      instagramUrl: "https://instagram.com/friendssongkul",
      facebookName: "Facebook: Айжамал Абибулла кызы",
      facebookUrl: "https://www.facebook.com/search/top?q=%D0%90%D0%B9%D0%B6%D0%B0%D0%BC%D0%B0%D0%BB%20%D0%90%D0%B1%D0%B8%D0%B1%D1%83%D0%BB%D0%BB%D0%B0%20%D0%BA%D1%8B%D0%B7%D1%8B",
      rights: "Все права защищены. TAI TRAVEL Equestrian Expeditions.",
      privacy: "Конфиденциальность",
      terms: "Условия поездок",
      languageLabel: "Язык:",
    },
    inquiry: {
      title: "Спланируйте конную экспедицию",
      subtitle: "Расскажите о вашем опыте верховой езды, датах и пожеланиях. Директор экспедиций лично свяжется с вами в течение 24 часов.",
      fullNameLabel: "Полное имя",
      fullNamePlaceholder: "например, Алексей Смирнов",
      emailLabel: "Электронная почта",
      emailPlaceholder: "например, alexey@example.com",
      countryLabel: "Страна проживания",
      countryPlaceholder: "например, Казахстан, Германия, ОАЭ",
      journeyLabel: "Выбранный маршрут",
      datesLabel: "Желаемые даты поездки",
      datesPlaceholder: "например, середина июля 2026 или гибкие даты",
      travelersLabel: "Количество участников",
      travelersOptions: ["1 соло-всадник", "2 всадника", "3-4 всадника (малая группа)", "5+ всадников (приватный выезд)"],
      experienceLabel: "Уровень верховой езды",
      experienceOptions: [
        { value: "Novice", label: "Уверенный новичок", desc: "Шаг и немного рыси в манеже; готов к горным переходам в спокойном темпе." },
        { value: "Intermediate", label: "Опытный всадник", desc: "Уверенный шаг, рысь и галоп; опыт полевой езды." },
        { value: "Advanced", label: "Продвинутый уровень", desc: "Независимая посадка, уверенность на крутых горных склонах и резвом галопе." },
        { value: "Expert", label: "Экспедиционный / Профи", desc: "Многолетний опыт, дистанционные пробеги, спорт или конные походы любой сложности." }
      ],
      guideLangLabel: "Предпочтительный язык гида",
      guideLangOptions: ["Русский", "English", "Deutsch", "日本語", "Кыргызча"],
      notesLabel: "Пожелания и комментарии",
      notesPlaceholder: "Любые детали: предыдущие конные туры, предпочтения по темпу, диета или особые пожелания...",
      privacyConsent: "Я согласен с политикой конфиденциальности и даю согласие TAI TRAVEL на обработку заявки.",
      privacyLink: "Политика конфиденциальности",
      submitBtn: "Отправить запрос на экспедицию",
      submittingBtn: "Отправка...",
      successTitle: "Запрос успешно принят",
      successSubtitle: "Благодарим за интерес к путешествиям с TAI TRAVEL.",
      successSteps: [
        "Руководитель экспедиционного направления лично ознакомится с вашим опытом и датами.",
        "В течение 24 часов мы пришлем подробное досье с картами высот, рекомендациями по коням и точным расчетом.",
        "На этом этапе предоплата не требуется — мы верим в индивидуальный диалог до начала пути."
      ],
      successClose: "Вернуться на сайт",
      errors: {
        fullName: "Пожалуйста, введите ваше полное имя.",
        email: "Пожалуйста, укажите корректный адрес электронной почты.",
        country: "Пожалуйста, укажите страну проживания.",
        privacy: "Пожалуйста, подтвердите согласие с политикой конфиденциальности."
      }
    },
    tourModal: {
      closeLabel: "Закрыть детали тура",
      expeditionPrefix: "ЭКСПЕДИЦИЯ",
      tabs: {
        itinerary: "Программа по дням",
        riding: "Требования к всаднику",
        stay: "Юрты и лагерь",
        included: "Что включено и FAQ",
      },
      durationLabel: "Длительность",
      difficultyLabel: "Сложность",
      maxAltLabel: "Макс. высота",
      seasonLabel: "Сезон",
      highlightsTitle: "Главные впечатления маршрута",
      dayPrefix: "День",
      ridingHoursLabel: "Время в седле",
      campLabel: "Ночевка",
      horsemanshipTitle: "Требования к всадникам и физическая форма",
      horsemanshipPace: "Темп и аллюры",
      horsemanshipGaits: "Необходимые аллюры",
      horsemanshipHours: "Часов в седле в день",
      horsemanshipTerrain: "Характер рельефа",
      horsemanshipExperience: "Критерии опыта",
      stayTitle: "Жизнь в войлочной юрте",
      mealsTitle: "Питание в походе",
      includedTitle: "Что включено в стоимость TAI TRAVEL",
      excludedTitle: "Не включено / Личные расходы",
      faqTitle: "Часто задаваемые вопросы",
      inquireBtn: "Запросить участие в этом туре",
      startingFrom: "Стоимость от",
    },
    privacyModal: {
      title: "Политика конфиденциальности и защита данных гостей",
      closeBtn: "Понятно",
      sections: [
        {
          title: "1. Наше обязательство конфиденциальности",
          body: "TAI TRAVEL проводит камерные конные экспедиции для гостей со всего мира. Мы храним личные данные, даты поездок и информацию о верховом опыте в строгой тайне и никогда не передаем их третьим лицам или брокерам данных."
        },
        {
          title: "2. Информация, собираемая при запросе",
          body: "При отправке заявки мы фиксируем имя, email, страну, конный опыт и пожелания. Эти данные используются только нашими директорами экспедиций для подбора маршрута и подходящих лошадей."
        },
        {
          title: "3. Медицинские данные и безопасность",
          body: "Перед выездом в горы подтвержденные участники заполняют форму здоровья (аллергии, контакты для экстренной связи). Доступ к этим данным есть исключительно у старших гидов и службы спутниковой медицинской помощи."
        },
        {
          title: "4. Фото- и видеосъемка на маршруте",
          body: "Мы уважаем приватность наших гостей. Никакие фотографии, имена или отзывы не публикуются без предварительного письменного согласия."
        }
      ],
      lastUpdated: "Обновлено: Сезон 2026 · TAI TRAVEL Конные Экспедиции · Базовый лагерь: урочище Кызарт, Кыргызстан."
    }
  },

  de: {
    nav: {
      journeys: "Reisen",
      philosophy: "Philosophie",
      discover: "Kirgisistan",
      journal: "Magazin",
      contact: "Kontakt",
      planJourney: "Reise Planen",
    },
    hero: {
      eyebrow: "EINE WELT JENSEITS DES GEWÖHNLICHEN · KIRGISISTAN",
      headlineLine1: "Jenseits der Pfade.",
      headlineLine2: "Im ",
      headlineAccent: "wilden Herzen",
      subheadline: "Außergewöhnliche Reitreisen durch uraltes Nomadenland, abgelegene Bergtäler und unberührte Natur des Tian Shan.",
      primaryCta: "Unsere Reisen Entdecken",
      secondaryCta: "Maßgeschneiderte Expedition",
      scrollIndicator: "Nach unten scrollen",
      coordinates: "41°31′ N, 75°08′ O · ZENTRALER TIAN SHAN",
    },
    intro: {
      kicker: "Die TAI Philosophie",
      headline: "Nicht nur eine Reise. Eine andere Art, die Welt zu sehen.",
      leadParagraph: "In einer bis zum Meter vermessenen Welt bleibt Kirgisistan einer der wenigen Orte ohne Zäune, an denen das Reiten gelebtes Nomaden-Erbe ist.",
      bodyParagraph: "Bei TAI TRAVEL gestalten wir intime Reitreisen, die dieses Land und seine nomadischen Traditionen respektieren. Auf trittsicheren Gebirgspferden reiten wir in hochgelegene Sommerweiden und schlafen unter Filzjurten.",
      captionTag: "Song-Kul Sommerweide (Dschailoo) · 3.016 Meter",
      captionText: "Traditionelle Filzjurten (Boz-Üj) und kirgisische Gebirgspferde unter weitem Himmel.",
      figNote: "Abb. 01 — Hochweiden, auf denen unsere Reiter bei einheimischen Hirtenfamilien einkehren.",
      pillars: {
        smallGroups: {
          title: "Kleine Gruppen (4–8 Reiter)",
          desc: "Keine überlaufenen Routen. Jede Expedition ist auf einen kleinen Kreis begrenzt für persönliche Betreuung."
        },
        localKnowledge: {
          title: "Nomadische Reitführer",
          desc: "Geführt von erfahrenen kirgisischen Pferdemenschen, die jeden Pass und Wetterumschwung genau kennen."
        },
        horses: {
          title: "Erstklassige Bergpferde",
          desc: "Ausdauernde, ausgeglichene und trittsichere kirgisische Gebirgspferde, individuell auf Sie abgestimmt."
        },
        remote: {
          title: "Abgelegene Hochpässe",
          desc: "Täler, die kein Fahrzeug erreicht, und Pässe bis zu 3.800 m Höhe, wo nur Hufe und Adler wandern."
        },
        hospitality: {
          title: "Authentische Gastfreundschaft",
          desc: "Echte Wärme kirgisischer Hirtenfamilien in Sommerlagern mit frischem Fladenbrot und Samowartee."
        }
      }
    },
    journeys: {
      kicker: "Kuratierte Expeditionen",
      headline: "Finden Sie Ihre Wildnis.",
      subtitle: "Jede Route richtet sich nach Jahreszeiten, Bergpässen und nomadischen Wandermustern.",
      disclaimerLabel: "Musterrouten zur Orientierung:",
      disclaimer: "Dauer, Anspruch und Preise können maßgeschneidert angepasst werden.",
      sectionLabel: "Feste Kleingruppentermine (4–8 Reiter)",
      sectionSublabel: "Tian Shan & Song-Kul",
      discoverBtn: "Diese Reise Entdecken",
      rateLabel: "Richtpreis ab",
      perPerson: "/ Pers.",
      customQuotation: "Auf Anfrage",
      duration: "Dauer",
      difficulty: "Anspruch",
      bespokeBadge: "TOUR 04 · PRIVATE EXPEDITION",
      bespokeDesc: "Vollständig abgestimmt auf Ihr Reittempo, Wunschtermine und reiterliche Träume. Ob unkartierte Pässe oder privates Familienlager am Bergsee — wir gestalten die perfekte Reise.",
      bespokeHighlights: [
        "Eigener Chefreitführer und dedizierter Zeltlager-Koch",
        "Flexibles Reittempo (zügige Galoppaden oder entspannte Erkundung)",
        "Exklusive Einzel- oder Familienjurten in abgelegenen Tälern",
        "Satellitensicherheit & privater Allrad-Chauffeurtransfer"
      ],
      bespokeCta: "Beratung Anfragen",
    },
    difference: {
      kicker: "Unser Verständnis",
      headline: "Luxus, gemessen in Erlebnissen.",
      subtitle: "Für uns bedeutet Luxus nicht Gold oder Hotelhallen, sondern Stille über 30 Kilometer Alpenwiesen und ein Ritt unter weitem Himmel.",
      pillars: [
        {
          num: "01",
          title: "Gewachsenes Wissen",
          subtitle: "Verwurzelt in nomadischer Tradition",
          description: "Entdecken Sie Kirgisistan mit Menschen, die die Berge im Blut haben. Unsere Reitmeister sind im Sattel groß geworden und folgen den uralten Pfaden ihrer Vorfahren.",
          quote: "Wenn ein kirgisischer Reiter die Wolken liest, folgt er einer Sprache, die man nur ein Leben lang im Sattel lernt."
        },
        {
          num: "02",
          title: "Hervorragende Pferde",
          subtitle: "Trittsichere kirgisische Gebirgspferde",
          description: "Ausdauernd, gelassen im steinigen Geröll und perfekt an die Höhenluft angepasst. Hochwertige Trailsättel mit dicken Lammfellbezügen sorgen für Komfort.",
          quote: "Ein echtes Bergpferd eilt nicht; es prüft jeden Stein mit dem Huf und atmet ruhig durch die dünne Luft."
        },
        {
          num: "03",
          title: "Echte Begegnungen",
          subtitle: "Unverfälschte Gastfreundschaft im Dschailoo",
          description: "Erleben Sie das Nomadenleben ohne Touristenkitsch. Frisches Fladenbrot, warmer Samowartee und das Spiel der Komuz unter funkelnden Sternen.",
          quote: "Am Dastarchan-Tisch ist ein Gast niemals nur Zuschauer; man wird Teil der Familie."
        },
        {
          num: "04",
          title: "Sorgfältige Planung",
          subtitle: "Präzise Berlogistik & Sicherheit",
          description: "Packpferde transportieren das Gepäck, Mahlzeiten werden frisch zubereitet, und die Routen sind minutiös abgesichert.",
          quote: "Wahrer Luxus ist das gute Gefühl, dass jeder Pass und jeder Zeltplatz meisterhaft organisiert ist."
        }
      ]
    },
    discover: {
      kicker: "Land der Himmelsberge",
      headline: "Ein Land, das noch immer ungezähmt ist.",
      subtitle: "Wo 93% des Landes Gebirge sind und der Herzschlag Zentralasiens unverfälscht schlägt.",
      destinations: [
        {
          id: "song-kul",
          tag: "Song-Kul See",
          title: "Song-Kul See & Hochweiden",
          subtitle: "Der heilige Spiegel der Nomaden",
          elevation: "3.016 m Höhe",
          description: "In einem Hochbecken ohne asphaltierte Straßen oder Strommasten liegt der Song-Kul. Seit Jahrhunderten ziehen kirgisische Hirten im Sommer hierher.",
          editorialDeck: "Endlose grüne Weiten, kristallklares Wasser und traditionelle Jurten.",
          features: [
            "Weite Uferwiesen ideal für ausgedehnte Galoppaden",
            "Gastfreundliche Jurtenlager einheimischer Hirten",
            "Reiner Sternenhimmel ohne Lichtverschmutzung",
            "Frischer Bergrahm (Kaimak) und Samowartee"
          ],
          riderNote: "Hier reiten bedeutet grenzenlose Freiheit. Es gibt keine Zäune, nur den weiten Horizont."
        },
        {
          id: "tian-shan",
          tag: "Tian Shan Gebirge",
          title: "Tian Shan Gebirgsketten",
          subtitle: "Die Himmelsberge Zentralasiens",
          elevation: "Bis zu 7.439 m",
          description: "Eine der spektakulärsten Gebirgsketten der Erde. Unsere Routen überqueren Pässe auf 3.200 bis 3.900 Metern zwischen Gletschern und Wildbächen.",
          editorialDeck: "Eisgekrönte Granitgipfel, tiefe Nadelholztäler und windumwehte Pässe.",
          features: [
            "Atemberaubende Aussichten auf Gletschermassive",
            "Sichere Flussdurchquerungen auf trittsicheren Pferden",
            "Beobachtung von Steinadlern und Bartgeiern",
            "Abenteuerliche Zeltnächte an klaren Gebirgsbächen"
          ],
          riderNote: "Das Überqueren der Pässe verlangt Vertrauen. Kirgisische Pferde setzen ihre Hufe mit verblüffender Präzision."
        },
        {
          id: "yurt-culture",
          tag: "Jurtenkultur",
          title: "Nomadische Jurtenkultur & Handwerk",
          subtitle: "Boz-Üj: Meisterwerk aus Wolle und Holz",
          elevation: "Schutz auf allen Höhenstufen",
          description: "Die kirgisische Jurte ist eine über Jahrtausende perfektionierte Behausung aus Weidenholz und Schafwollfilz, die selbst in frostigen Nächten wärmt.",
          editorialDeck: "Handgefilzte Schyrdak-Teppiche, knisternde Öfen und wohlige Wärme.",
          features: [
            "Echte handgefertigte Filzteppiche mit traditionellen Motiven",
            "Tündük — das runde Dachfenster zu den Sternen",
            "Wohlige Wärme des gusseisernen Holzofens",
            "Gemütliche Teeabende im Kreis der Hirten"
          ],
          riderNote: "Nach sechs Stunden im Sattel in eine warme Jurte einzukehren, ist wahrer Luxus."
        },
        {
          id: "valleys-canyons",
          tag: "Täler & Schluchten",
          title: "Flusstäler und rote Canyons",
          subtitle: "Von rotem Sandstein zu tiefen Nadelwäldern",
          elevation: "1.600 bis 2.600 m",
          description: "Rote Felsformationen bei Kyzart und tiefe Täler mit Tien-Shan-Fichten bieten einen faszinierenden landschaftlichen Kontrast.",
          editorialDeck: "Rot leuchtende Klippen, rauschende Bergflüsse und duftende Wacholderhaine.",
          features: [
            "Kontrast zwischen rotem Fels und sattem Wiesengrün",
            "Breite Schotterbetten für zügigen Trab",
            "Jahrhundertealte Petroglyphen der Nomaden",
            "Natürliche heiße Thermalquellen zur Entspannung"
          ],
          riderNote: "Die landschaftliche Abwechslung macht jeden Ritttag zu einem neuen Erlebnis."
        },
        {
          id: "hospitality-table",
          tag: "Dastarchan",
          title: "Dastarchan & Gastfreundschaft",
          subtitle: "Das Ritual des kirgisischen Tisches",
          elevation: "In jedem Lager zelebriert",
          description: "Ein Gast auf dem Pferd gilt als Segen. Der Tisch wird sofort mit warmem Fladenbrot, Bergbutter, Honig und dampfendem Tee gedeckt.",
          editorialDeck: "Frisch zubereitete Bergküche, Samowartee und herzliche Begegnungen.",
          features: [
            "Ofenwarmes Fladenbrot mit morgendlichem Rahm",
            "Kräftige Eintöpfe mit Wildkräutern über offenem Feuer",
            "Traditionelle Stutenmilch (Kymys) im Sommer",
            "Geschichten und Segenswünsche der Ältesten"
          ],
          riderNote: "Keine Folklore-Show: Sie sitzen mitten unter der Familie und teilen echte Momente."
        }
      ],
      dispatchLabel: "EXPEDITIONSBERICHT",
      highlightsTitle: "Reiterliche Höhepunkte",
      riderNoteTitle: "Aus dem Sattel",
      cta: "Reisen in dieser Region ansehen",
    },
    steps: {
      kicker: "Der Ablauf",
      headline: "Vom ersten Gespräch in den Sattel.",
      cta: "Planung Beginnen",
      list: [
        {
          num: "01",
          title: "Ihre Wünsche mitteilen",
          subtitle: "Erstberatung",
          description: "Nennen Sie uns Termine, Reitniveau und Erwartungen. Ob anspruchsvolle Hochgebirgspässe oder ruhiges Reiten am See — wir hören aufmerksam zu."
        },
        {
          num: "02",
          title: "Reise gestalten",
          subtitle: "Routenabstimmung",
          description: "Wir schlagen Ihnen passende Kleingruppentermine vor oder erstellen eine ganz private Route nach Ihrem Rhythmus."
        },
        {
          num: "03",
          title: "Vorbereitung",
          subtitle: "Reiseunterlagen",
          description: "Sie erhalten detaillierte Packlisten für das Gebirgswetter, Fitnesstipps und alle Reisehinweise für die visumfreie Einreise."
        },
        {
          num: "04",
          title: "Im Sattel Kirgisistans",
          subtitle: "Die Expedition beginnt",
          description: "Ankunft in Bischkek, Treffen mit den kirgisischen Reitführern, Steigbügel einstellen und Ritt in eine der letzten Wildnisse der Erde."
        }
      ]
    },
    stories: {
      kicker: "Erfahrungsberichte",
      headline: "Geschichten vom Trail.",
      note: "Redaktionelle Notizen von Reitern über den Tian Shan und den Song-Kul.",
      editorialNoticeLabel: "Hinweis der Redaktion:",
      editorialNoticeText: "Diese Berichte stammen aus Feldtagebüchern vergangener Expeditionen. Nach der kommenden Sommersaison werden verifizierte Kundenstimmen ergänzt.",
      list: [
        {
          riderProfile: "Dressur- & Geländereiterin · Zürich, Schweiz",
          itinerary: "Der Nomadenpfad (Song-Kul)",
          passage: "Ich bin in Island, Patagonien und Andalusien geritten, aber nichts reicht an die Weite Kirgisistans heran. Keine Straßen, kein Strom, nur sattes Gras auf 3.000 Metern. Mein Pferd war ruhig und voller Tatkraft. Das Schlafen in der Filzjurte ist unvergesslich.",
          verificationLabel: "Feldnotiz · Saison 2025"
        },
        {
          riderProfile: "Wildnis-Trekker & Reiter · Edinburgh, Schottland",
          itinerary: "In den Tian Shan (5 Tage)",
          passage: "Der Aufstieg zum Ton-Pass auf fast 3.800 Metern war atemberaubend. Man spürt, wie sehr man dem Pferd vertraut. Das Essen am Lagerfeuer schmeckte besser als in jedem Sterne-Restaurant.",
          verificationLabel: "Feldnotiz · Saison 2025"
        },
        {
          riderProfile: "Pferdefotograf · Kyoto, Japan",
          itinerary: "Die Große Kirgistan-Expedition (10 Tage)",
          passage: "Das Morgenlicht über den Jurten mit Pferden im Frühnebel ist pure Poesie. Wir wurden als echte Gäste empfangen, nicht als Touristen. Kilometerweit über weite Wiesen galoppieren — das gibt es fast nirgendwo mehr.",
          verificationLabel: "Feldnotiz · Saison 2025"
        }
      ]
    },
    journal: {
      kicker: "Reise-Journal",
      headline: "Notizen aus den Bergen.",
      subtitle: "Essays über nomadische Pferdekultur, Trail-Vorbereitung und das Erbe Zentralasiens.",
      readArticle: "Artikel Lesen",
      byAuthor: "Von",
    },
    bespoke: {
      kicker: "TAI TRAVEL BESPOKE",
      headline: "Manche Reisen kann man nicht finden. Man muss sie erschaffen.",
      supporting: "Teilen Sie uns Ihren Traum mit. Gemeinsam gestalten wir eine Reitexpedition nach Ihrem Rhythmus.",
      cta: "Private Expedition Erstellen",
    },
    footer: {
      tagline: "Boutique-Reitexpeditionen durch die unberührten Landschaften und das Nomadenerbe Kirgisistans.",
      mountainBaseTitle: "Bergstation",
      baseCamp: "Basislager: Kyzart-Schlucht, Region Kotschkor",
      emailLabel: "Direkte E-Mail:",
      email: "sonkulhorsebackadventure@gmail.com",
      whatsappLabel: "WhatsApp:",
      whatsappNumber: "+996 220 073 174",
      whatsappUrl: "https://wa.me/996220073174",
      explore: "Expeditionen",
      company: "Unternehmen & Land",
      newsletterTitle: "Der Nomaden-Brief",
      newsletterDesc: "Gelegentliche Berichte über Bergrouten, Termine und Naturbeobachtungen.",
      subscribeBtn: "Abonnieren",
      subscribePlaceholder: "Ihre E-Mail-Adresse",
      subscribeSuccess: "Vielen Dank. Sie wurden zur saisonalen Verteilerliste hinzugefügt.",
      subscribeError: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      officialChannels: "Offizielle Kanäle:",
      instagramHandle: "Instagram (@friendssongkul)",
      instagramUrl: "https://instagram.com/friendssongkul",
      facebookName: "Facebook: Айжамал Абибулла кызы",
      facebookUrl: "https://www.facebook.com/search/top?q=%D0%90%D0%B9%D0%B6%D0%B0%D0%BC%D0%B0%D0%BB%20%D0%90%D0%B1%D0%B8%D0%B1%D1%83%D0%BB%D0%BB%D0%B0%20%D0%BA%D1%8B%D0%B7%D1%8B",
      rights: "Alle Rechte vorbehalten. TAI TRAVEL Equestrian Expeditions.",
      privacy: "Datenschutz",
      terms: "Reisebedingungen",
      languageLabel: "Sprache:",
    },
    inquiry: {
      title: "Reitexpedition Planen",
      subtitle: "Erzählen Sie uns von Ihrer Reiterfahrung, Wunschdaten und Träumen. Unsere Expeditionsleiter antworten persönlich binnen 24 Stunden.",
      fullNameLabel: "Vollständiger Name",
      fullNamePlaceholder: "z.B. Katharina Weber",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "z.B. katharina@example.de",
      countryLabel: "Wohnsitzland",
      countryPlaceholder: "z.B. Deutschland, Österreich, Schweiz",
      journeyLabel: "Gewünschte Expedition",
      datesLabel: "Reisezeitraum",
      datesPlaceholder: "z.B. Juli 2026 oder flexibler Sommer",
      travelersLabel: "Anzahl Personen",
      travelersOptions: ["1 Einzelreiter", "2 Reiter", "3-4 Reiter (Gruppe)", "5+ Reiter (Privatgruppe)"],
      experienceLabel: "Reiterfahrung",
      experienceOptions: [
        { value: "Novice", label: "Sicherer Anfänger", desc: "Grundkenntnisse Bahn, Schritt und etwas Trab; bereit für Gebirgspfade." },
        { value: "Intermediate", label: "Erfahrener Geländereiter", desc: "Sicher in Schritt, Trab und Galopp; Geländeerfahrung vorhanden." },
        { value: "Advanced", label: "Fortgeschritten / Sattelfest", desc: "Unabhängiger Sitz, sicher am Hang und bei zügigen Galoppaden." },
        { value: "Expert", label: "Expedition / Wanderreitprofi", desc: "Langjährige Routine, Distanzreiten oder anspruchsvolle Mehrtagestouren." }
      ],
      guideLangLabel: "Bevorzugte Sprache des Reitführers",
      guideLangOptions: ["Deutsch", "English", "Russian", "日本語", "Кыргызча"],
      notesLabel: "Wünsche und Besonderheiten",
      notesPlaceholder: "Vorherige Ritte, gewünschtes Tempo, Verpflegungswünsche oder Routenideen...",
      privacyConsent: "Ich stimme der Datenschutzerklärung zu und willige ein, dass TAI TRAVEL mich bezüglich dieses Reisevorschlags kontaktiert.",
      privacyLink: "Datenschutzerklärung",
      submitBtn: "Reiseanfrage Absenden",
      submittingBtn: "Wird gesendet...",
      successTitle: "Anfrage Erfolgreich Erhalten",
      successSubtitle: "Vielen Dank für Ihr Vertrauen in TAI TRAVEL.",
      successSteps: [
        "Einer unserer leitenden Expeditionsdirektoren prüft Ihre Reiterfahrung und Reisetermine.",
        "Sie erhalten innerhalb von 24 Stunden ein detailliertes Routendossier mit Karten, Höhenprofil und Festpreis.",
        "Zu diesem Zeitpunkt ist keinerlei Anzahlung fällig — wir legen Wert auf persönliche Beratung vor der Buchung."
      ],
      successClose: "Zurück zur Website",
      errors: {
        fullName: "Bitte geben Sie Ihren Namen ein.",
        email: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
        country: "Bitte geben Sie Ihr Wohnsitzland an.",
        privacy: "Bitte bestätigen Sie die Datenschutzerklärung."
      }
    },
    tourModal: {
      closeLabel: "Details schließen",
      expeditionPrefix: "EXPEDITION",
      tabs: {
        itinerary: "Tagesablauf",
        riding: "Reiteranspruch",
        stay: "Jurten & Camp",
        included: "Inklusivleistungen & FAQ",
      },
      durationLabel: "Dauer",
      difficultyLabel: "Anspruch",
      maxAltLabel: "Max. Höhe",
      seasonLabel: "Beste Reisezeit",
      highlightsTitle: "Höhepunkte der Expedition",
      dayPrefix: "Tag",
      ridingHoursLabel: "Reitstunden",
      campLabel: "Übernachtung",
      horsemanshipTitle: "Reiterliche Anforderungen & Kondition",
      horsemanshipPace: "Tempo & Gangarten",
      horsemanshipGaits: "Erforderliche Gangarten",
      horsemanshipHours: "Tägliche Zeit im Sattel",
      horsemanshipTerrain: "Terrain",
      horsemanshipExperience: "Reitniveau",
      stayTitle: "Leben in der Jurte",
      mealsTitle: "Verpflegung unterwegs",
      includedTitle: "Inklusive bei TAI TRAVEL",
      excludedTitle: "Nicht enthalten / Eigene Ausrüstung",
      faqTitle: "Häufige Fragen",
      inquireBtn: "Für diese Tour anfragen",
      startingFrom: "Richtpreis ab",
    },
    privacyModal: {
      title: "Datenschutz & Vertraulichkeit von Gastdaten",
      closeBtn: "Verstanden",
      sections: [
        {
          title: "1. Unser Anspruch an Diskretion",
          body: "TAI TRAVEL führt exklusive Reitexpeditionen für internationale Gäste durch. Alle Daten, Reitkenntnisse und Termine werden strikt vertraulich behandelt und keinesfalls weitergegeben oder verkauft."
        },
        {
          title: "2. Datenerhebung bei Reiseanfragen",
          body: "Wir erfassen Name, E-Mail-Adresse, Wohnland und Reiterfahrung ausschließlich zur Prüfung passender Pferde und Reitstrecken."
        },
        {
          title: "3. Medizinische Daten & Bergsicherheit",
          body: "Vor Antritt füllen bestätigte Teilnehmer einen Notfall- und Gesundheitsbogen aus, der nur den leitenden Bergführern und dem satellitengestützten Bergrettungsdienst zugänglich ist."
        },
        {
          title: "4. Foto- und Filmaufnahmen",
          body: "Wir wahren die Privatsphäre unserer Gäste. Fotos oder Berichte werden nur mit ausdrücklicher schriftlicher Zustimmung veröffentlicht."
        }
      ],
      lastUpdated: "Stand: Saison 2026 · TAI TRAVEL Equestrian Expeditions · Basislager: Kyzart-Schlucht, Kirgisistan."
    }
  },

  ja: {
    nav: {
      journeys: "遠征プラン",
      philosophy: "理念",
      discover: "キルギス探訪",
      journal: "紀行記",
      contact: "お問い合わせ",
      planJourney: "旅のご相談",
    },
    hero: {
      eyebrow: "日常を越えた世界 · 天山山脈キルギス",
      headlineLine1: "道の先へ。",
      headlineLine2: "キルギスの",
      headlineAccent: "原初の自然",
      subheadline: "遥かなる遊牧の民の大地、人跡未踏の山谷、今なお純粋な姿を留める中央アジアの秘境を馬の背から巡る旅。",
      primaryCta: "旅程を見る",
      secondaryCta: "特別プランを仕立てる",
      scrollIndicator: "スクロールして探索",
      coordinates: "北緯41°31′ 東経75°08′ · 中央天山山脈",
    },
    intro: {
      kicker: "TAI TRAVEL の哲学",
      headline: "単なる旅ではない。世界と出会い直す道。",
      leadParagraph: "すべてが測定され尽くした現代において、キルギスは柵のない広大な峰々がどこまでも広がる数少ない聖域です。",
      bodyParagraph: "TAI TRAVEL では、この雄大な自然と古来の遊牧文化に敬意を捧げる少人数制の乗馬遠征をご提案します。屈強な山岳馬とともに標高3,000mを超える高山草原へ分け入り、夜は伝統のフェルトユルタで暖炉を囲みます。",
      captionTag: "ソンコル湖の高山草原（ジャイロー） · 標高3,016m",
      captionText: "満天の星の下、草を食むキルギス山岳馬と伝統のボズ・ウイ（ユルタ）。",
      figNote: "図01 — 夏の放牧地。遊牧民の一家が営むユルタに滞在します。",
      pillars: {
        smallGroups: {
          title: "少人数限定（4〜8名）",
          desc: "混雑とは無縁の旅。きめ細やかな配慮と大自然への敬意を保つため、定員を厳密に限定しています。"
        },
        localKnowledge: {
          title: "遊牧民の道標と熟練ガイド",
          desc: "鞍の上で育ち、峠の風や天候を熟知したキルギス人ホースマンがご案内します。"
        },
        horses: {
          title: "逞しく穏やかな山岳馬",
          desc: "急峻な岩場でも足取り確かなキルギス原産馬を、乗り手の技術や好みに合わせて厳選。"
        },
        remote: {
          title: "車では辿り着けない秘境",
          desc: "標高3,800mの峠越えなど、馬と鷲だけが渡る未踏の渓谷へ分け入ります。"
        },
        hospitality: {
          title: "温もりあふれる遊牧民の歓待",
          desc: "焼きたての伝統パン、湧き水で沸かすサモワールのお茶、手仕事のフェルト絨毯の温かさ。"
        }
      }
    },
    journeys: {
      kicker: "厳選された遠征",
      headline: "自らの野生を取り戻す旅。",
      subtitle: "季節の移ろい、高山峠の気候、遊牧民の移動に合わせた至高のルート。",
      disclaimerLabel: "モデルプランのご案内:",
      disclaimer: "記載の日程・難易度・参考価格はモデルプランであり、ご希望に合わせて調整可能です。",
      sectionLabel: "少人数定期出発プラン（4〜8名）",
      sectionSublabel: "天山山脈 & ソンコル湖",
      discoverBtn: "旅の詳細を見る",
      rateLabel: "参考料金",
      perPerson: " / 名",
      customQuotation: "個別見積り",
      duration: "日数",
      difficulty: "難易度",
      bespokeBadge: "TOUR 04 · プライベート特別遠征",
      bespokeDesc: "お客様の騎乗ペース、希望日程、乗馬への憧れに合わせてゼロから仕立てる完全プライベートプラン。未踏の山稜越えから湖畔の貸切ユルタまで、極上の旅程を設計します。",
      bespokeHighlights: [
        "専任のベテラン乗馬マスターおよびキャンプ専門シェフ同行",
        "自由な騎乗ペース（爽快な駈歩からゆったりとした散策まで）",
        "人里離れた高山草原での専用ユルタ滞在",
        "衛星安全通信機器および専用4WD送迎完備"
      ],
      bespokeCta: "専任コンサルタントに相談する",
    },
    difference: {
      kicker: "贅沢の定義",
      headline: "真の贅沢とは、体験の深さにある。",
      subtitle: "華美な装飾ではなく、30km先まで遮るもののない静寂と、大空の下を駆ける風の感触こそが最高の贅沢です。",
      pillars: [
        {
          num: "01",
          title: "生きた遊牧の知恵",
          subtitle: "大自然を読み解く案内人",
          description: "幼少期から山稜を馬で駆け巡り、雲の動きや天候の機微を知り尽くしたキルギス人ホースマンが同行します。観光化された道ではなく、代々受け継がれた羊飼いの道を辿ります。",
          quote: "キルギスのホースマンが山の雲を見つめるとき、彼は生涯を鞍上で過ごして学んだ言葉を聴いているのです。"
        },
        {
          num: "02",
          title: "選りすぐりの山岳馬",
          subtitle: "足取り確かなキルギス原産馬",
          description: "急峻なガレ場でも決して慌てず、高地でも息乱れぬ丈夫な固有種。長時間の騎乗でも疲れにくいよう、羊毛シープスキンの特製サドルカバーをご用意しています。",
          quote: "本物の山岳馬は急ぎません。蹄で一歩ずつ石を確かめ、薄い空気を静かに吸い込みながら進みます。"
        },
        {
          num: "03",
          title: "飾らない心の交流",
          subtitle: "夏の草原で出会う本物の歓待",
          description: "作られたショーではありません。手作りのフェルト絨毯の上に座り、焼きたてのナンとサモワールのお茶を分かち合い、星空の下でコムズの音色に耳を傾けます。",
          quote: "ユルタを訪れた客人は、決して傍観者ではありません。ダスタルハンの食卓を囲めば、誰もが一つの家族になります。"
        },
        {
          num: "04",
          title: "精緻を極めた遠征計画",
          subtitle: "山岳ロジスティクスと安全管理",
          description: "荷物運搬馬、専任料理人による温かな食事、衛星通信機の手配まで、万全の態勢を整えています。お客様は心ゆくまでトレイルのリズムに没頭していただけます。",
          quote: "真の贅沢とは、すべての峠越えやキャンプの設営が熟練の手によって静かに完璧に運ばれている安心感です。"
        }
      ]
    },
    discover: {
      kicker: "天山山脈の国",
      headline: "今なお手つかずの息吹を残す大地。",
      subtitle: "国土の93%が山岳地帯。遊牧民の鼓動が今も力強く脈打つ中央アジアの真髄。",
      destinations: [
        {
          id: "song-kul",
          tag: "ソンコル湖",
          title: "ソンコル湖と高山草原",
          subtitle: "遊牧の民の聖なる鏡",
          elevation: "標高3,016m",
          description: "なだらかな山並みに抱かれた高山湖ソンコル。舗装道路も電柱もありません。毎年6月になると、遊牧民たちが家畜を連れてこの豊かな夏の放牧地へと登ってきます。",
          editorialDeck: "どこまでも広がる緑の草原、静寂な湖面、満天の星の下に佇むフェルトユルタ。",
          features: [
            "果てしない湖畔で楽しむ爽快なロングキャンター",
            "羊飼いの一家が温かく迎える伝統のユルタ泊",
            "人工の光が一切ない澄み切った高山の夜空",
            "搾りたての乳から作る濃厚なカイマクと温かいお茶"
          ],
          riderNote: "柵のない大地をどこまでも走る感覚は、他では味わえない絶対的な解放感を与えてくれます。"
        },
        {
          id: "tian-shan",
          tag: "天山山脈",
          title: "天山山脈の連峰",
          subtitle: "中央アジアの天上の峰々",
          elevation: "最高峰7,439m（ポベダ峰）",
          description: "古代より「天上の山」と称えられた世界屈指の大山脈。標高3,200m〜3,900mの高山峠を越え、氷河の谷や荒々しい岩稜を馬とともに渡ります。",
          editorialDeck: "氷河を戴く険しい花崗岩の峰、深い針葉樹林、風吹き渡る峠道。",
          features: [
            "鷲の視点で眺める息を呑む大パノラマ",
            "信頼できる山岳馬と渡る清冽な氷河の川",
            "イヌワシやヒゲワシ、高山植物との出会い",
            "清らかな渓流のほとりでの野営体験"
          ],
          riderNote: "峠を越えるには馬との信頼関係が不可欠です。キルギス馬は驚くべき正確さで足元を選んで進みます。"
        },
        {
          id: "yurt-culture",
          tag: "ユルタの伝統",
          title: "ユルタ文化と遊牧の手仕事",
          subtitle: "ボズ・ウイ：羊毛と木と風の建築",
          elevation: "高地の過酷な気候をしのぐ移動式住居",
          description: "キルギスのユルタ（ボズ・ウイ）は単なるテントではなく、三千年にわたり磨き抜かれた生きた知恵です。しなやかな柳の骨組みと羊毛フェルトが、氷点下の夜でも旅人を温かく包み込みます。",
          editorialDeck: "手織りのシルダック絨毯、パチパチと燃える薪ストーブ、心地よい羊毛の温もり。",
          features: [
            "伝統の幾何学模様が美しい手作りフェルト絨毯シルダック",
            "星空と太陽を受け止める天窓トゥンドゥク",
            "一日の騎乗の疲れを癒やす薪ストーブの暖かさ",
            "お茶を囲んで語り合う心温まる夜のひととき"
          ],
          riderNote: "鞍上で過ごした一日の後、野草の香りが漂う温かいユルタで眠りに就くのは無上の安らぎです。"
        },
        {
          id: "valleys-canyons",
          tag: "峡谷と渓谷",
          title: "赤い渓谷と清流の谷",
          subtitle: "赤土の奇岩から針葉樹の森へ",
          elevation: "標高1,600m〜2,600m",
          description: "高山の雪嶺へ登る前に広がるドラマチックな地層。風雨に削られたクザルトの赤い砂岩崖、清流のせせらぎ、トウヒの深い森が続きます。",
          editorialDeck: "火星を思わせる赤い奇岩と、澄んだ川沿いに広がる緑のオアシス。",
          features: [
            "赤土の岩壁と瑞々しい緑のコントラスト",
            "川床沿いの爽快な速歩（トロット）",
            "岩肌に残された古代遊牧民の岩絵（ペトログリフ）",
            "旅の途中で立ち寄れる天然の温泉"
          ],
          riderNote: "地形の変化に富んでいるため、何時間騎乗していても決して飽きることはありません。"
        },
        {
          id: "hospitality-table",
          tag: "ダスタルハン",
          title: "ダスタルハンと遊牧の歓待",
          subtitle: "キルギスの食卓に宿る神聖な儀礼",
          elevation: "すべてのキャンプで体験",
          description: "馬に乗って訪れる客人は、天からの授かりものとして手厚くもてなされます。ダスタルハンと呼ばれる低い食卓には、焼きたてのパン、フレッシュバター、蜂蜜、お茶が所狭しと並びます。",
          editorialDeck: "出来立ての郷土料理、湯気を立てるサモワールのお茶、心を通わせる会話。",
          features: [
            "その日の朝に作られた濃厚なクリーム（カイマク）とパン",
            "山の野草とともに煮込んだ滋味深い羊肉料理",
            "夏の名物である伝統の馬乳酒（クミス）",
            "長老による伝統の祝福の言葉（バタ）"
          ],
          riderNote: "観光客向けの演出ではありません。家族の輪に自然と溶け込み、温かな笑顔を交わす時間です。"
        }
      ],
      dispatchLabel: "遠征記録",
      highlightsTitle: "乗馬のポイント",
      riderNoteTitle: "鞍上からの視点",
      cta: "この地域の遠征プランを見る",
    },
    steps: {
      kicker: "ご出発までの流れ",
      headline: "最初のご相談から、鞍の上まで。",
      cta: "旅の計画を始める",
      list: [
        {
          num: "01",
          title: "ご希望をお聞かせください",
          subtitle: "最初のご相談",
          description: "ご希望の日程、騎乗経験、体力レベルをお知らせください。険しい峠越えから湖畔ののんびりとした乗馬まで、丁寧にお伺いします。"
        },
        {
          num: "02",
          title: "プランの設計",
          subtitle: "ルートの調整",
          description: "既存の少人数グループプランへのご案内、またはご自身のペースに合わせたオーダーメイドの旅程をご提案します。"
        },
        {
          num: "03",
          title: "ご出発の準備",
          subtitle: "遠征ハンドブック",
          description: "山の気候に適した服装、乗馬用具、体力づくりのアドバイス、ビザなし渡航に関する実践的な情報をお届けします。"
        },
        {
          num: "04",
          title: "キルギスの大地へ",
          subtitle: "鞍上の旅立ち",
          description: "首都ビシケクに到着後、現地ホースマスターと対面し鐙を調整。地球上に残された最後の秘境へ馬を進めます。"
        }
      ]
    },
    stories: {
      kicker: "騎乗者の声",
      headline: "山道からの便り。",
      note: "天山山脈やソンコル湖を走破した旅人たちによる実直な記録。",
      editorialNoticeLabel: "編集部より:",
      editorialNoticeText: "これらの記録は過去の遠征ログに基づくものです。来たる夏期シーズンの終了後、最新の参加者レビューを更新いたします。",
      list: [
        {
          riderProfile: "馬場馬術・トレイルライダー · スイス・チューリッヒ",
          itinerary: "遊牧民の道（ソンコル湖 3日間）",
          passage: "アイスランドやパタゴニアでも乗馬を経験しましたが、キルギスのスケール感は別格でした。道も電気もない標高3,000mの草原を、頼もしい馬とともに駆ける時間は宝物です。ユルタの暖炉の前で過ごす夜は生涯忘れられません。",
          verificationLabel: "遠征手記 · 2025年シーズン"
        },
        {
          riderProfile: "山岳トレッカー・乗馬愛好家 · スコットランド・エディンバラ",
          itinerary: "天山山脈の深淵へ（5日間）",
          passage: "標高3,800mのトン峠を越えたときの爽快感は言葉になりません。険しいガレ場を慎重に歩むキルギス馬の賢さには驚かされました。焚き火を囲んで食べた焼きたてのパンとシチューの味は格別でした。",
          verificationLabel: "遠征手記 · 2025年シーズン"
        },
        {
          riderProfile: "乗馬写真家 · 日本・京都",
          itinerary: "天山山稜縦走グランドエクスペディション（10日間）",
          passage: "朝霧の中に佇むユルタと馬の群れに朝陽が射す光景は、息を呑む美しさでした。TAI TRAVELのガイドは遊牧民を深く敬っており、私たちも温かいもてなしを受けました。柵のない大地を何キロも駈歩できる場所は、世界中を探しても他にありません。",
          verificationLabel: "遠征手記 · 2025年シーズン"
        }
      ]
    },
    journal: {
      kicker: "トラベルジャーナル",
      headline: "山稜からの手記。",
      subtitle: "遊牧文化、高山トレイルの心得、中央アジアの生きた遺産についての紀行エッセイ。",
      readArticle: "記事を読む",
      byAuthor: "文：",
    },
    bespoke: {
      kicker: "TAI TRAVEL BESPOKE",
      headline: "見つからない旅は、創り出すしかない。",
      supporting: "あなたが思い描く冒険をお聞かせください。ペース、興味、日程に合わせた唯一無二の旅を共につくり上げます。",
      cta: "プライベート遠征を相談する",
    },
    footer: {
      tagline: "キルギスの大自然と遊牧文化を巡る、ブティック乗馬エクスペディション。",
      officeTitle: "本社および山岳ベース",
      address: "キルギス共和国ビシケク市 ラザコフ通り19",
      trailhead: "トレイルヘッド基地：コチコル地区クザルト",
      inquiries: "お問い合わせ: expeditions@tai-travel.com",
      explore: "遠征プラン",
      company: "会社案内 & 大地について",
      newsletterTitle: "遊牧からの手紙",
      newsletterDesc: "トレイルの状況や特別遠征のご案内をお届けします。広告宣伝メールは一切送りません。",
      subscribeBtn: "登録する",
      subscribePlaceholder: "メールアドレスを入力",
      subscribeSuccess: "ご登録ありがとうございます。季節のお便りをお届けします。",
      subscribeError: "有効なメールアドレスを入力してください。",
      officialChannels: "公式チャンネル:",
      rights: "All rights reserved. TAI TRAVEL Equestrian Expeditions.",
      privacy: "プライバシーポリシー",
      terms: "旅行条件",
      languageLabel: "言語:",
    },
    inquiry: {
      title: "乗馬遠征のご相談",
      subtitle: "乗馬経験、希望日程、ご要望をお知らせください。担当ディレクターが24時間以内にご案内いたします。",
      fullNameLabel: "お名前",
      fullNamePlaceholder: "例：山田 太郎",
      emailLabel: "メールアドレス",
      emailPlaceholder: "例：yamada@example.com",
      countryLabel: "お住まいの国・地域",
      countryPlaceholder: "例：日本、アメリカ、シンガポール",
      journeyLabel: "ご希望の遠征プラン",
      datesLabel: "ご出発時期の目安",
      datesPlaceholder: "例：2026年7月中旬、または夏の間で調整可能",
      travelersLabel: "ご参加人数",
      travelersOptions: ["1名（単独参加）", "2名", "3〜4名（小グループ）", "5名以上（貸切グループ）"],
      experienceLabel: "騎乗レベルの目安",
      experienceOptions: [
        { value: "Novice", label: "初級者（常歩・軽速歩）", desc: "基本的な乗馬経験あり。山岳トレイルに挑戦したい方。" },
        { value: "Intermediate", label: "中級者（外乗経験あり）", desc: "常歩・速歩・駈歩を自然なシートでコントロールできる方。" },
        { value: "Advanced", label: "上級者（傾斜地・速い駈歩）", desc: "急峻な山岳地形や広い草原でのロングキャンターに慣れている方。" },
        { value: "Expert", label: "エンデュランス・競技経験者", desc: "長時間の騎乗、長距離耐久トレイルの経験豊富な方。" }
      ],
      guideLangLabel: "ガイドの希望言語",
      guideLangOptions: ["日本語", "English", "Russian", "Deutsch", "Кыргызча"],
      notesLabel: "ご要望・特記事項",
      notesPlaceholder: "過去の乗馬経験、希望する騎乗ペース、食事への配慮などご自由にご記入ください...",
      privacyConsent: "プライバシーポリシーに同意し、本遠征の提案に関する連絡を受け取ることに同意します。",
      privacyLink: "プライバシーポリシーを確認",
      submitBtn: "遠征プランの相談を送信する",
      submittingBtn: "送信中...",
      successTitle: "お問い合わせを受け付けました",
      successSubtitle: "TAI TRAVEL に旅の想いをお寄せいただき、誠にありがとうございます。",
      successSteps: [
        "シニア遠征ディレクターがお客様の騎乗経験と日程を確認いたします。",
        "24時間以内に、高低図付きの旅程詳細、推奨する馬の選定、正確な料金プランをお送りします。",
        "この段階でのお支払いは一切発生いたしません。綿密な対話を経てから正式なお申し込みとなります。"
      ],
      successClose: "トップページへ戻る",
      errors: {
        fullName: "お名前を入力してください。",
        email: "正しいメールアドレスを入力してください。",
        country: "お住まいの国を入力してください。",
        privacy: "プライバシーポリシーへの同意をお願いいたします。"
      }
    },
    tourModal: {
      closeLabel: "ツアー詳細を閉じる",
      expeditionPrefix: "遠征プラン",
      tabs: {
        itinerary: "日別日程",
        riding: "騎乗レベルと条件",
        stay: "ユルタとキャンプ",
        included: "含まれるもの & FAQ",
      },
      durationLabel: "日数",
      difficultyLabel: "難易度",
      maxAltLabel: "最高標高",
      seasonLabel: "ベストシーズン",
      highlightsTitle: "この旅のハイライト",
      dayPrefix: "日目",
      ridingHoursLabel: "騎乗時間",
      campLabel: "宿泊先",
      horsemanshipTitle: "騎乗レベルと身体条件",
      horsemanshipPace: "ペースと歩度",
      horsemanshipGaits: "必要な歩度",
      horsemanshipHours: "1日の鞍上時間",
      horsemanshipTerrain: "地形の特徴",
      horsemanshipExperience: "求められる技術",
      stayTitle: "伝統のユルタ生活",
      mealsTitle: "野外料理とお食事",
      includedTitle: "料金に含まれるもの",
      excludedTitle: "料金に含まれないもの",
      faqTitle: "よくあるご質問",
      inquireBtn: "このプランを相談する",
      startingFrom: "参考料金",
    },
    privacyModal: {
      title: "プライバシーポリシーと顧客情報管理",
      closeBtn: "承諾する",
      sections: [
        {
          title: "1. 守秘義務へのコミットメント",
          body: "TAI TRAVEL は世界各国からの旅行者のプライベートな乗馬遠征を運営しております。お客様の個人情報、騎乗記録、日程を厳格に管理し、外部業者への販売や譲渡は一切行いません。"
        },
        {
          title: "2. お問い合わせ時に取得する情報",
          body: "遠征の提案にあたり、氏名、メールアドレス、居住国、乗馬経験を収集します。これらの情報は最適なルート選定と馬の適合性評価のためにのみ使用されます。"
        },
        {
          title: "3. 安全管理および医療情報",
          body: "山岳地帯への出発前に、緊急連絡先や健康状態に関する質問票をご提出いただきます。この情報は現地ガイドおよび衛星救急チームのみがアクセスします。"
        },
        {
          title: "4. メディアおよび写真撮影",
          body: "お客様のプライバシーを最優先いたします。事前の明確な書面による同意なく、写真やお名前を公表することは一切ありません。"
        }
      ],
      lastUpdated: "改定日: 2026年シーズン · TAI TRAVEL Equestrian Expeditions, Bishkek, Kyrgyz Republic."
    }
  },

  ky: {
    nav: {
      journeys: "Жүрүштөр",
      philosophy: "Биздин максат",
      discover: "Кыргызстанды таануу",
      journal: "Күндөлүк",
      contact: "Байланыш",
      planJourney: "Сапарды пландоо",
    },
    hero: {
      eyebrow: "КАДИМКИ ААЛАМДАН АРЫ · КЫРГЫЗСТАН",
      headlineLine1: "Жолдордон ары.",
      headlineLine2: "Кыргызстандын ",
      headlineAccent: "ээн жүрөгүнө",
      subheadline: "Байыркы көчмөн жерлери, тунук тоо өрөөндөрү жана кол тийбеген табият аркылуу улуу ат сапарлары.",
      primaryCta: "Жүрүштөрдү көрүү",
      secondaryCta: "Жеке сапар түзүү",
      scrollIndicator: "Төмөн жылдырыңыз",
      coordinates: "41°31′ Т, 75°08′ Ч · ТЕҢИР-ТОО",
    },
    intro: {
      kicker: "TAI TRAVEL философиясы",
      headline: "Жөн гана саякат эмес. Дүйнөнү таануунун башка жолу.",
      leadParagraph: "Кыргызстандын бийик тоо кыркалары тосмосуз созулуп, ат минген көчмөн мурасы кылымдар бою сакталып келет.",
      bodyParagraph: "TAI TRAVEL менен биз табиятыбызды жана көчмөн салтыбызды урматтаган өзгөчө атчан жүрүштөрдү уюштурабыз. Чыдамкай кыргыз аттары менен жайлоолорго чыгып, боз үйлөрдө түнөйбүз.",
      captionTag: "Соң-Көл жайлоосу · 3 016 метр бийиктик",
      captionText: "Боз үйлөр жана көк мелжиген асман алдында оттогон кыргыз жылкылары.",
      figNote: "1-сүрөт — Чабандардын жайкы конушу, биздин меймандар боз үйдө конок болушат.",
      pillars: {
        smallGroups: {
          title: "Чакан топтор (4–8 чабандес)",
          desc: "Ар бир мейманга жекече кам көрүү жана табиятты аяр сактоо үчүн топтор чектелген."
        },
        localKnowledge: {
          title: "Жергиликтүү саяпкерлер",
          desc: "Ат үстүндө чоңойгон, ар бир ашууну жана аба ырайын билген тажрыйбалуу кыргыз жигиттери."
        },
        horses: {
          title: "Чыдамкай тоо аттары",
          desc: "Тоо шартына көнгөн, баскан жери бышык, ишенимдүү кыргыз жылкылары."
        },
        remote: {
          title: "Кол тийбеген бийик ашуулар",
          desc: "Унаа бара албаган 3800 метрлик бийиктиктерге чейин ат үстүндө чыгуу."
        },
        hospitality: {
          title: "Чыныгы кыргыз меймандостугу",
          desc: "Жайлоодогу чабандардын ак пейили, ысык тандыр наны, каймак жана самоор чай."
        }
      }
    },
    journeys: {
      kicker: "Тандалган жүрүштөр",
      headline: "Өз эркиндигиңизди табыңыз.",
      subtitle: "Ар бир маршрут тоо ашууларынын жана көчмөн жашоонун ыргагы менен айкалышкан.",
      disclaimerLabel: "Үлгү маршруттар:",
      disclaimer: "Маршруттардын убактысы жана баалары алдын ала үлгү катары берилди, жеке каалоого жараша өзгөртүлөт.",
      sectionLabel: "Чакан топтор менен пландуу жүрүштөр (4–8 чабандес)",
      sectionSublabel: "Теңир-Тоо жана Соң-Көл",
      discoverBtn: "Жүрүштү көрүү",
      rateLabel: "Баштапкы баасы",
      perPerson: " / адамга",
      customQuotation: "Жекече баалоо",
      duration: "Мөөнөтү",
      difficulty: "Деңгээли",
      bespokeBadge: "ТУР 04 · ЖЕКЕ ЭКСПЕДИЦИЯ",
      bespokeDesc: "Сиздин ат минүү тажрыйбаңызга, ыңгайлуу күндөрүңүзгө ылайыкташтырылган жекече сапар. Картада жок бийик кырларды ашуудан тартып көл жээгиндеги жеке өргөөгө чейин баары уюштурулат.",
      bespokeHighlights: [
        "Жеке тажрыйбалуу саяпкер жана поход ашпозчусу",
        "Каалаган ат жүрүшү (шамал сымал чабыш же жай басык)",
        "Тынч жайлоодо өзүнчө ак өргөө боз үй",
        "Спутниктик коопсуздук байланышы жана ыңгайлуу жеке трансфер"
      ],
      bespokeCta: "Жеке кеңеш алуу",
    },
    difference: {
      kicker: "Биздин өзгөчөлүк",
      headline: "Баалуулук — таасирлерде.",
      subtitle: "Биз үчүн чыныгы люкс — мейманкана эмес, кенен жайлоонун тынчтыгы жана көк мелжиген тоолордо ат чабуу.",
      pillars: [
        {
          num: "01",
          title: "Ата-баба салты жана билим",
          subtitle: "Көчмөн тукумунун тажрыйбасы",
          description: "Кыргызстанды бала чагынан бери ат үстүндө чоңоюп, тоо сырларын билген жигиттер менен тааныңыз. Алар туристтик жолдор менен эмес, байыркы көчмөн издери менен алып жүрүшөт.",
          quote: "Кыргыз саяпкери булуттун жылышын караганда, ал өмүр бою ээр үстүндө үйрөнгөн тамгаларын окуп жатат."
        },
        {
          num: "02",
          title: "Мыкты тоо жылкылары",
          subtitle: "Баскан жери бышык кыргыз аттары",
          description: "Ар бир чабандестин деңгээлине жараша тандалган жоош, бирок кайраттуу аттар. Ашуулардын тик таштарында мүдүрүлбөйт. Ыңгайлуу ээрлер жана кой терисинен жасалган жумшак төшөлмөлөр.",
          quote: "Чыныгы тоо аты шашпайт: ал ар бир ташты туягы менен сезип, бийик абаны токтоо жутат."
        },
        {
          num: "03",
          title: "Жайлоодогу ак пейил",
          subtitle: "Элдик меймандостук",
          description: "Көчмөн маданиятына жасалмасыз сүңгүү. Шырдак үстүндө отуруп, ысык тандыр нан менен самоор чайын ичүү, жылдыздуу түн ичинде комуз күүсүн угуу.",
          quote: "Боз үйдөгү мейман эч качан жөн гана байкоочу болбойт; дасторкон четинде ал үй-бүлөнүн мүчөсү болот."
        },
        {
          num: "04",
          title: "Кылдат даярдалган сапарлар",
          subtitle: "Тоодогу тактык жана коопсуздук",
          description: "Жүк ташуучу аттар, даяр турган лагерь, от үстүндө бышкан даамдуу тамак. Сиз тоо табиятынан жана ат жүрүшүнөн толук ырахат аласыз.",
          quote: "Чыныгы эркиндик — ар бир ашуу менен конуштун ишенимдүү уюштурулганына бекем ишенүү."
        }
      ]
    },
    discover: {
      kicker: "Ала-Тоо жергеси",
      headline: "Ээн жана улуу бойдон калган жер.",
      subtitle: "Аймагынын 93% тоолор түзгөн, көчмөн руху сакталган Борбор Азиянын бермети.",
      destinations: [
        {
          id: "song-kul",
          tag: "Соң-Көл",
          title: "Соң-Көл жана бийик жайлоо",
          subtitle: "Көчмөндөрдүн ыйык күзгүсү",
          elevation: "3 016 м бийиктикте",
          description: "Теңир-Тоо кыркаларынын арасында жайгашкан бермет Соң-Көл. Мында асфальт жол да, электр мамылары да жок. Кылымдар бою малчылар жайкысын малын ушул берекелүү жайлоого айдап келишет.",
          editorialDeck: "Чексиз жашыл шибер, тунук көл толкундары жана жылдыздар астындагы боз үйлөр.",
          features: [
            "Ат чабууга өтө ыңгайлуу узак жээк шиберлери",
            "Меймандос чабан үй-бүлөлөрүнүн анык боз үй конуштары",
            "Жасалма жарык жок, ажайып тунук түнкү асман",
            "Жаңы тартылган каймак, ысык нан жана самоор чай"
          ],
          riderNote: "Мында ат минүү чексиз эркиндикти тартуулайт. Эч кандай тосмолор жок, каалаган тарапка чапсаңыз болот."
        },
        {
          id: "tian-shan",
          tag: "Теңир-Тоо",
          title: "Теңир-Тоо тоо кыркалары",
          subtitle: "Асман мелжиген бийик чокулар",
          elevation: "7 439 метрге чейин (Жеңиш чокусу)",
          description: "Дүйнөдөгү эң улуу тоо системаларынын бири. Биздин атчан маршруттар 3200–3900 метр бийиктиктеги ашууларды ашып, мөңгүлүү өзөндөрдү аралайт.",
          editorialDeck: "Мөңгү баскан гранит чокулар, карагайлуу капчыгайлар жана шамал соккон ашуулар.",
          features: [
            "Бүркүттүн бийиктигинен ачылган укмуштуудай панорама",
            "Тунук мөңгү сууларын ишенимдүү аттар менен кечүү",
            "Бүркүт, ылаачын жана тоо текелерин кездештирүү",
            "Тоо суусунун жээгинде табият кучагында түнөө"
          ],
          riderNote: "Тоң же Тосор сыяктуу ашууларды ашууда атка толук ишенүү керек. Кыргыз аттары таштарды санап басат."
        },
        {
          id: "yurt-culture",
          tag: "Боз үй маданияты",
          title: "Боз үй маданияты жана көчмөн кол өнөрү",
          subtitle: "Боз үй: кийиздин, жыгачтын жана шамалдын шайкештиги",
          elevation: "Бардык бийиктиктерде колдонулган көчмөн үйү",
          description: "Кыргыздын боз үйү — миңдеген жылдар бою такталган улуу архитектура. Ийилген тал ууктар менен керегелер жана коюу кийиз ызгаардуу тоо түндөрүндө жылуулукту сактайт.",
          editorialDeck: "Колдон согулган шырдактар, темир мештин оту жана жумшак кийиз жылуулугу.",
          features: [
            "Байыркы оюм-чийимдер түшүрүлгөн кол өнөр шырдактар",
            "Түндүк — күнгө жана түнкү жылдыздарга ачылган терезе",
            "Ээр үстүндө өткөн күндөн кийинки мештин жылуулугу",
            "Пиала чай үстүндөгү жагымдуу санжыра маектери"
          ],
          riderNote: "Күнү бою ат чаап чарчагандан кийин жылуу боз үйгө кирип эс алуу — эң сонун ырахат."
        },
        {
          id: "valleys-canyons",
          tag: "Өрөөндөр жана каньондор",
          title: "Тоо өрөөндөрү жана кызыл каньондор",
          subtitle: "Кызыл чоподон чытырман карагай токоюна чейин",
          elevation: "1 600 – 2 600 м бийиктикте",
          description: "Бийик мөңгүлөргө чыга электе өтүлүүчү табияты өзгөчө жерлер: Кызарттын кызыл жарлары, шамал чеккен каньондор жана жыпар жыттуу карагайлуу капчыгайлар.",
          editorialDeck: "Кызыл аскалардын жашыл өрөөндөр менен укмуштуудай айкалышы.",
          features: [
            "Кызыл топурак менен жапжашыл шибердин кооз карама-каршылыгы",
            "Дарыя жээгиндеги ыңгайлуу желдирме басыктар",
            "Аска бетиндеги байыркы көчмөндөрдүн петроглифтери",
            "Чарчоону жаза турган дарылык касиети бар ысык булактар"
          ],
          riderNote: "Жердин тез-тез өзгөрүп турушу ат үстүндөгү ар бир саатты кызыктуу кылат."
        },
        {
          id: "hospitality-table",
          tag: "Дасторкон",
          title: "Дасторкон жана меймандостук салты",
          subtitle: "Кыргыз дасторконунун ыйык салты",
          elevation: "Маршруттагы ар бир лагерде",
          description: "Көчмөн салтында атчан келген мейман — Кудайдын коногу. Жайылган дасторконго ошол замат ысык нан, сары май, тоо балы жана кайнаган самоор чай келет.",
          editorialDeck: "Жаңы даярдалган тоо тамактары, ысык чай жана чыныгы адамдык жылуулук.",
          features: [
            "Ошол күнү эртең менен тартылган коюу каймак жана ысык нан",
            "Тоо чөптөрү кошулуп казанда кайнаган ширелүү эт",
            "Жайкы сезондун эң баалуу суусундугу — таза кымыз",
            "Улуулардын батасы жана кызыктуу уламыштар"
          ],
          riderNote: "Бул жерде эч кандай жасалма сахна жок. Сиз чабандын үй-бүлөсү менен бирге дасторкон четинде отурасыз."
        }
      ],
      dispatchLabel: "САПАР КҮНДӨЛҮГҮ",
      highlightsTitle: "Ат жүрүшүнүн өзгөчөлүктөрү",
      riderNoteTitle: "Чабандестин көз карашы",
      cta: "Бул аймактагы жүрүштөрдү көрүү",
    },
    steps: {
      kicker: "Сапардын тартиби",
      headline: "Биринчи сүйлөшүүдөн ээрге чейин.",
      cta: "Сапарды баштоо",
      list: [
        {
          num: "01",
          title: "Каалооңузду билдириңиз",
          subtitle: "Алгачкы баарлашуу",
          description: "Ыңгайлуу күндөрдү, ат минүү деңгээлиңизди айтыңыз. Бийик ашууларды ашуубу же көл жээгинде жай басуубу — баарын эске алабыз."
        },
        {
          num: "02",
          title: "Маршрутту даярдоо",
          subtitle: "Багытты тандоо",
          description: "Биз сизге чакан топтордун графигин сунуштайбыз же жеке сапардын картасын түзүп беребиз."
        },
        {
          num: "03",
          title: "Сапарга даярдык",
          subtitle: "Маалыматтык колдонмо",
          description: "Тоо шартына керектүү кийим-кече, керектүү жабдуулар жана визасыз келүү эрежелери боюнча толук маалымат аласыз."
        },
        {
          num: "04",
          title: "Кыргызстан боюнча атчан сапар",
          subtitle: "Ээрге отуруу",
          description: "Бишкекке келүү, саяпкерлер менен таанышуу, үзөнгүнү тууралоо жана Жер жүзүндөгү эң улуу табият кучагына аттануу."
        }
      ]
    },
    stories: {
      kicker: "Чабандестердин пикири",
      headline: "Тоо жолундагы баяндар.",
      note: "Соң-Көл жана Теңир-Тоону ат менен басып өткөн меймандардын эскерүүлөрү.",
      editorialNoticeLabel: "Редакциядан эскертүү:",
      editorialNoticeText: "Бул пикирлер мурунку экспедициялардын күндөлүктөрүнөн алынды. Жайкы сезон аяктаганда жаңы меймандардын күбөлүктөрү кошулат.",
      list: [
        {
          riderProfile: "Ат спорту жана саякатчы · Цюрих, Швейцария",
          itinerary: "Көчмөн жолу (Соң-Көл)",
          passage: "Мен Исландияда, Патагонияда жана Андалусияда ат минген элем, бирок Кыргызстандын масштабына эч нерсе тең келбейт. 3000 метр бийиктиктеги чексиз шиберде ат чабуу — керемет сезим. Боз үйдө уктоо эч качан унутулбайт.",
          verificationLabel: "Талаа очерки · 2025-жыл"
        },
        {
          riderProfile: "Тоо саякатчысы · Эдинбург, Шотландия",
          itinerary: "Теңир-Тоо койнунда (5 күн)",
          passage: "3800 метрлик Тоң ашуусун ашкандагы сезимди сөз менен айтып жеткирүү кыйын. Кыргыз аттары таштарды ушунчалык так басат экен. От үстүндө бышкан тамак эң сонун ресторандардан да даамдуу болду.",
          verificationLabel: "Талаа очерки · 2025-жыл"
        },
        {
          riderProfile: "Ат фотографы · Киото, Япония",
          itinerary: "Улуу Кыргызстан экспедициясы (10 күн)",
          passage: "Эртең менен туманда жайылып жаткан жылкылар менен боз үйлөр — нагыз поэзия. Бизди турист эмес, чыныгы конок катары сыйлашты. Километрлер бою тосмосуз кенен талаада чабуу башка эч бир өлкөдө жок.",
          verificationLabel: "Талаа очерки · 2025-жыл"
        }
      ]
    },
    journal: {
      kicker: "Саякат барактары",
      headline: "Тоолордон жазылган каттар.",
      subtitle: "Көчмөн маданияты, тоодогу ат жүрүштөрүнө даярдык жана Борбор Азиянын мурасы.",
      readArticle: "Окуу",
      byAuthor: "Автору:",
    },
    bespoke: {
      kicker: "TAI TRAVEL BESPOKE",
      headline: "Кээ бир сапарлар даяр табылбайт. Алар жаратылат.",
      supporting: "Кандай сапарды кыялданарыңызды айтыңыз. Биз сиздин каалооңузга ылайык жекече атчан экспедиция даярдайбыз.",
      cta: "Жеке экспедиция түзүү",
    },
    footer: {
      tagline: "Кыргызстандын кол тийбеген тоолоруна жана көчмөн мурасына арналган бутиктик ат жүрүштөрү.",
      officeTitle: "Башкы кеңсе жана тоо базасы",
      address: "Раззаков көчөсү 19, Бишкек шаары, Кыргыз Республикасы",
      trailhead: "Баштапкы конуш: Кызарт өрөөнү, Кочкор району",
      inquiries: "Байланыш: expeditions@tai-travel.com",
      explore: "Жүрүштөр",
      company: "Биз жөнүндө",
      newsletterTitle: "Көчмөн каты",
      newsletterDesc: "Жаңы сезондор жана тоо каттамдары жөнүндө маалымат алып туруңуз.",
      subscribeBtn: "Жазылуу",
      subscribePlaceholder: "Электрондук почтаңызды жазыңыз",
      subscribeSuccess: "Ыраазычылык билдиребиз. Сиз маалымат тизмесине кошулдуңуз.",
      subscribeError: "Туура электрондук почта дарегин жазыңыз.",
      officialChannels: "Биздин баракчалар:",
      rights: "Бардык укуктар корголгон. TAI TRAVEL.",
      privacy: "Купуялуулук саясаты",
      terms: "Сапар эрежелери",
      languageLabel: "Тил:",
    },
    inquiry: {
      title: "Атчан сапарыңызды пландаңыз",
      subtitle: "Ат минүү тажрыйбаңызды, ыңгайлуу күндөрдү жазыңыз. Экспедиция жетекчиси 24 сааттын ичинде сизге жооп берет.",
      fullNameLabel: "Толук аты-жөнүңүз",
      fullNamePlaceholder: "мисалы, Азамат Бакиров",
      emailLabel: "Электрондук почта",
      emailPlaceholder: "мисалы, azamat@example.com",
      countryLabel: "Жашаган өлкөңүз",
      countryPlaceholder: "мисалы, Кыргызстан, Казакстан, Россия",
      journeyLabel: "Тандалган жүрүш",
      datesLabel: "Болжолдуу убактысы",
      datesPlaceholder: "мисалы, 2026-жылдын июль айынын ортосу",
      travelersLabel: "Катышуучулардын саны",
      travelersOptions: ["1 чабандес", "2 чабандес", "3-4 чабандес (чакан топ)", "5+ чабандес (жеке топ)"],
      experienceLabel: "Ат минүү деңгээлиңиз",
      experienceOptions: [
        { value: "Novice", label: "Ишенимдүү үйрөнчүк", desc: "Аттын басыгын билет, тоодо жай жүрүүгө даяр." },
        { value: "Intermediate", label: "Тажрыйбалуу чабандес", desc: "Жорго, желдирме жана чабышты жакшы билет." },
        { value: "Advanced", label: "Мыкты чабандес", desc: "Тик тоолордо жана катуу чабыштарда ээрде бекем отурат." },
        { value: "Expert", label: "Кесипкөй саяпкер", desc: "Көп жылдык тажрыйба, ат чабыш жана узак походдорго көнгөн." }
      ],
      guideLangLabel: "Жол башчынын тили",
      guideLangOptions: ["Кыргызча", "Русский", "English", "Deutsch", "日本語"],
      notesLabel: "Кошумча каалоо-тилектер",
      notesPlaceholder: "Мурунку сапарларыңыз, тамактануу өзгөчөлүктөрүңүз же атайын каалоолоруңуз...",
      privacyConsent: "Мен купуялуулук саясаты менен макулмун жана TAI TRAVEL сунуш жөнөтүүсүнө уруксат берем.",
      privacyLink: "Купуялуулук саясаты",
      submitBtn: "Сапар өтүнмөсүн жөнөтүү",
      submittingBtn: "Жөнөтүлүүдө...",
      successTitle: "Өтүнмө кабыл алынды",
      successSubtitle: "TAI TRAVEL тандаганыңыз үчүн терең ыраазычылык билдиребиз.",
      successSteps: [
        "Экспедиция жетекчиси сиздин тажрыйбаңызды жана графикти жекече карап чыгат.",
        "24 сааттын ичинде тоо картасы, ат тандоо боюнча кеңештер жана толук эсептелген баасы сизге жиберилет.",
        "Бул этапта эч кандай алдын ала төлөм талап кылынбайт — биз биринчи кезекте жеке баарлашууга маани беребиз."
      ],
      successClose: "Башкы бетке кайтуу",
      errors: {
        fullName: "Сураныч, толук аты-жөнүңүздү жазыңыз.",
        email: "Сураныч, туура электрондук почта дарегин жазыңыз.",
        country: "Сураныч, жашаган өлкөңүздү жазыңыз.",
        privacy: "Купуялуулук саясатына макулдугуңузду билдириңиз."
      }
    },
    tourModal: {
      closeLabel: "Тур маалыматын жабуу",
      expeditionPrefix: "ЖҮРҮШ",
      tabs: {
        itinerary: "Күндөрдүн тартиби",
        riding: "Ат минүү талаптары",
        stay: "Боз үйлөр жана лагерь",
        included: "Эмнелер кирет жана суроолор",
      },
      durationLabel: "Мөөнөтү",
      difficultyLabel: "Деңгээли",
      maxAltLabel: "Максималдуу бийиктик",
      seasonLabel: "Эң ыңгайлуу мезгил",
      highlightsTitle: "Жүрүштүн негизги өзгөчөлүктөрү",
      dayPrefix: "Күн",
      ridingHoursLabel: "Ат үстүндөгү убакыт",
      campLabel: "Түнөөчү жай",
      horsemanshipTitle: "Чабандеске коюлуучу талаптар",
      horsemanshipPace: "Аттын жүрүшү жана темпи",
      horsemanshipGaits: "Талап кылынган жүрүштөр",
      horsemanshipHours: "Күнүнө ат үстүндөгү саат",
      horsemanshipTerrain: "Жердин шарты",
      horsemanshipExperience: "Тажрыйба деңгээли",
      stayTitle: "Боз үйдөгү турмуш",
      mealsTitle: "Тоодогу тамак-аш",
      includedTitle: "TAI TRAVEL тарабынан камсыздалгандар",
      excludedTitle: "Баасына кирбегендер / Жеке чыгымдар",
      faqTitle: "Көп берилүүчү суроолор",
      inquireBtn: "Бул тур боюнча кеңеш алуу",
      startingFrom: "Баштапкы баасы",
    },
    privacyModal: {
      title: "Купуялуулук саясаты жана меймандардын маалыматын сактоо",
      closeBtn: "Түшүнүктүү",
      sections: [
        {
          title: "1. Маалыматтын сырдуулугу",
          body: "TAI TRAVEL дүйнө жүзүндөгү меймандар үчүн жекече конный сапарларды уюштурат. Биз меймандардын жеке маалыматтарын, сапар күндөрүн жана ат минүү тажрыйбасын бекем сактайбыз жана эч качан үчүнчү жактарга бербейбиз."
        },
        {
          title: "2. Чогултулган маалыматтар",
          body: "Өтүнмө берүү учурунда атыңыз, электрондук почтаңыз, өлкөңүз жана ат минүү тажрыйбаңыз катталат. Бул маалымат ылайыктуу аттарды жана маршрутту тандоо үчүн гана колдонулат."
        },
        {
          title: "3. Коопсуздук жана ден соолук маалыматтары",
          body: "Тоого чыгар алдында катышуучулар ден соолук анкетасын толтурушат. Бул маалыматка жетектөөчү гиддер жана спутниктик куткаруу кызматы гана ээ болот."
        },
        {
          title: "4. Сүрөт жана видео тартуу",
          body: "Биз меймандарыбыздын жеке жашоосун урматтайбыз. Сиздин жазуу түрүндөгү макулдугуңузсуз эч бир сүрөт же пикир жарыяланбайт."
        }
      ],
      lastUpdated: "Жаңыртылган: 2026-жылкы сезон · TAI TRAVEL Ат Экспедициялары, Бишкек шаары, Кыргыз Республикасы."
    }
  }
};
