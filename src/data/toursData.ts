import { SupportedLanguage } from './translations';

export interface TourItineraryDay {
  day: number;
  title: string;
  distance: string;
  ridingHours: string;
  altitude: string;
  description: string;
  campType: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface Tour {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  location: string;
  durationDays: number | string;
  durationLabel: string;
  difficulty: 'Intermediate' | 'Intermediate to Advanced' | 'Advanced' | 'Personalized';
  difficultyNote: string;
  priceAmount?: number;
  priceDisplay: string;
  priceNote: string;
  isCustomQuote?: boolean;
  themeColor: string;
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
  itinerary: TourItineraryDay[];
  faqs: TourFaq[];
}

export const TOURS: Tour[] = [
  {
    id: "nomad-trail-song-kul",
    number: "01",
    title: "The Nomad Trail",
    subtitle: "High Jailoo Pastures & The Mirror of Song-Kul",
    location: "Song-Kul Lake & Kyzart Ridge, Naryn Region",
    durationDays: 3,
    durationLabel: "3 Days / 2 Nights",
    difficulty: "Intermediate",
    difficultyNote: "Comfortable in walk and trot over mountain ascents; brief canters across the wide shores.",
    priceAmount: 560,
    priceDisplay: "From $560",
    priceNote: "per person based on double occupancy yurt stay",
    themeColor: "from-emerald-950 via-teal-950 to-stone-900",
    elevationMax: "3,346 m (Kyzart Pass)",
    groupSize: "4 to 8 riders (strictly private pacing available)",
    bestSeason: "Mid-June through Mid-September (when the high jailoo camps are active)",
    overview: "Ascend from the red sandstone foothills of Kyzart over panoramic mountain ridges directly into the high alpine pasture of Song-Kul Lake at 3,016 meters. For three days, ride alongside semi-nomadic Kyrgyz herders whose ancestral life remains centered around the horse, sleeping under handcrafted wool felt yurts (boz-ui) warmed by dried dung stoves, beneath celestial night skies untouched by artificial light.",
    highlights: [
      "Ascend over the dramatic Kyzart and Kilemche ridges with 360-degree alpine panoramas",
      "Ride along the serene, unfenced shoreline of Song-Kul Lake at over 3,000 meters elevation",
      "Stay in authentic family-run felt yurts with traditional sheepskin blankets and crackling iron stoves",
      "Sip warm tea from a brass samovar and taste freshly churned kaimak (clotted cream) with tandoor bread",
      "Observe nomadic horsemanship and horse herds roaming freely across the open jailoo"
    ],
    ridingRequirements: {
      pace: "Moderate mountain pace with walk on steep rocky slopes and exhilarating trotting/cantering across flat meadows.",
      gaits: "Walk, steady working trot, controlled short canter on level turf.",
      hoursPerDay: "4 to 5.5 hours in the saddle per day.",
      terrain: "Grassy alpine slopes, packed mountain paths, gentle gravel creek crossings, open lakeside turf.",
      experienceNeeded: "Riders should be comfortable in the saddle for multiple hours with independent seat and hands."
    },
    accommodation: {
      description: "Traditional Kyrgyz felt yurts (boz-ui) set up on summer pastures. Yurts are lined with thick felt, authentic embroidered shyrdak carpets, and equipped with comfortable mattress bedding and down quilts. Wood or dry-dung iron stoves provide cozy warmth after mountain dusk.",
      features: [
        "Spacious shared or private couple felt yurts",
        "Traditional low wooden dastarkhan dining yurt",
        "Clean eco-camp composting toilet facilities and heated basin wash stands",
        "Stargazing platform directly outside yurt doorway"
      ]
    },
    meals: {
      description: "Nourishing, traditional Central Asian meals prepared by local camp cooks using fresh mountain ingredients.",
      highlights: [
        "Morning: Freshly baked bread (nan), local mountain honey, wild berry jams, eggs, and rich kaimak",
        "Midday: Trailside picnic of cured meats, aged cheeses, dried apricots, nuts, and hot herb tea",
        "Evening: Slow-simmered lamb and vegetable lagman, fragrant plov, or bespoke vegetarian stews"
      ]
    },
    included: [
      "Well-conditioned, sure-footed Kyrgyz mountain horse and high-quality cavalry-style leather trail saddle with sheepskin cover",
      "Professional Kyrgyz lead guide and english-speaking equestrian expedition host",
      "2 nights in authentic nomad felt yurt camps with all bedding provided",
      "All meals from lunch on Day 1 to lunch on Day 3, plus trail snacks and mountain tea",
      "Pack horse support to transport main expedition duffels between camps",
      "National park and environmental reserve conservation fees"
    ],
    excluded: [
      "International flights to Manas International Airport (Bishkek)",
      "Transfers between Bishkek and Kyzart trailhead (available upon request)",
      "Personal riding gear (helmet, riding boots, gloves, windproof waterproof layers)",
      "Comprehensive medical and equestrian evacuation travel insurance (mandatory)",
      "Gratuities for local horsemen, guides, and camp hosts"
    ],
    itinerary: [
      {
        day: 1,
        title: "From Kyzart Village over Chaar-Archa Pass to Kilemche Valley",
        distance: "18 km",
        ridingHours: "4.5 hours",
        altitude: "Ascent from 2,100 m to 2,664 m",
        description: "Meet your lead horseman and equestrian host at the Kyzart outpost. After personal saddle fitting and horse matching, mount up and begin ascending past green willow glades and terraced pastures toward Chaar-Archa Pass. As the valley deepens, stop for an open-air picnic lunch beside a rushing alpine stream. Cross into the tranquil Kilemche valley, renowned for its carpet-like wildflowers. Arrive at our first yurt camp for tea, hot flatbread, and a quiet evening watching horses graze on the ridge.",
        campType: "Authentic felt yurt camp in Kilemche valley"
      },
      {
        day: 2,
        title: "Crossing Jalgyz-Karagai Pass to the Turquoise Shores of Song-Kul",
        distance: "22 km",
        ridingHours: "5.5 hours",
        altitude: "Pass summit 3,346 m; descend to lake shore 3,016 m",
        description: "After a hearty breakfast, begin the zig-zag switchback ascent up Jalgyz-Karagai ('The Lone Fir') Pass. The rocky summit offers an unforgettable, breathless first view of Lake Song-Kul—an enormous turquoise mirror surrounded by rolling green hills. Descend along easy alpine turf to the lake shore. The vast expanses here offer wonderful stretches for steady trotting and exhilarating canters on the resilient turf. Reach our lakeside yurt camp by mid-afternoon with time to walk along the water or watch the evening milking of mares.",
        campType: "Lakeside nomad yurt camp at Song-Kul"
      },
      {
        day: 3,
        title: "Lakeside Riding, Nomadic Traditions, and Mountain Descent",
        distance: "16 km",
        ridingHours: "4 hours",
        altitude: "Descend from 3,016 m to 2,100 m",
        description: "Wake to the sound of horse bells and gentle waves lapping the shore. Embark on a morning loop ride across the high pasture to visit a neighbor's yurt, tasting traditional fermented mare's milk (kymyz) and learning about traditional felt craftsmanship. After an early lunch, ride across the western ridge and begin our steady, picturesque descent back into the valley, bidding farewell to our trusted four-legged companions and horsemen.",
        campType: "Trailhead departure / onward transfer"
      }
    ],
    faqs: [
      {
        question: "What kind of horses will we ride on this trail?",
        answer: "We ride genuine Kyrgyz mountain horses. Averaging 14 to 15 hands, they are legendary for their stamina, quiet temperament, sure-footedness on rocky mountain terrain, and kind disposition toward riders of all backgrounds."
      },
      {
        question: "Is there electricity or mobile phone reception at Song-Kul?",
        answer: "Song-Kul is a true digital detox sanctuary. There is no commercial cellular reception across the inner lake basin. Our yurt camps have solar-charged power banks for charging camera batteries and phones, and our lead guides carry satellite emergency communication devices at all times."
      },
      {
        question: "What temperature should I pack for?",
        answer: "Even in July and August, Song-Kul sits above 3,000 meters. Daytime temperatures are typically pleasant (18°C to 24°C), but nights can drop near freezing (2°C to 6°C). Layering with quality merino wool, a fleece, and a wind/waterproof shell is essential."
      }
    ]
  },
  {
    id: "into-the-tian-shan",
    number: "02",
    title: "Into the Tian Shan",
    subtitle: "Glacial Valleys, Craggy Passes & Ancient Silk Road Outposts",
    location: "Central Tian Shan & Naryn Gorge, Issyk-Kul Hinterlands",
    durationDays: 5,
    durationLabel: "5 Days / 4 Nights",
    difficulty: "Intermediate to Advanced",
    difficultyNote: "Requires solid mountain riding fitness, comfort on narrow high ridges, and stamina for consecutive saddle days.",
    priceAmount: 1490,
    priceDisplay: "From $1,490",
    priceNote: "per person for small group departure (max 8)",
    themeColor: "from-slate-900 via-stone-900 to-emerald-950",
    elevationMax: "3,780 m (Ton Pass / Teskei Alatoo)",
    groupSize: "4 to 8 riders",
    bestSeason: "Late June to early September",
    overview: "Traverse deep into the heart of the Tian Shan ('Celestial Mountains') where craggy snow-crested peaks rise like fortress walls. Follow centuries-old shepherd trails past roaring glacial torrents, ancient petroglyphs, and hidden pine gorges. This 5-day journey combines technical mountain ascents with exhilarating open valley rides, spending nights in remote yurt outposts and our private mobile expedition camp surrounded by towering 4,000-meter peaks.",
    highlights: [
      "Cross the rugged crest of the Teskei Alatoo range with views of glaciers and hanging ice falls",
      "Ride through the pristine alpine valleys of Juuku and Kichi-Jargylchak",
      "Encounter golden eagle hunters and learn the ancient art of Salburun nomadic falconry",
      "Camp in private wilderness settings with chef-prepared meals beneath the Milky Way",
      "Bathe in wild thermal mineral springs sheltered inside a rocky gorge"
    ],
    ridingRequirements: {
      pace: "Dynamic mountain riding: careful single-file footing on steep scree trails and sustained trotting and cantering in expansive river valleys.",
      gaits: "Confident walk, trot, and canter in open, unfenced terrain.",
      hoursPerDay: "5 to 6.5 hours in the saddle per day.",
      terrain: "High rocky passes, loose shale switchbacks, river fords, boulder-strewn meadows, pine forest tracks.",
      experienceNeeded: "Riders should have several years of riding experience, good cardiovascular fitness, and no fear of mountain heights."
    },
    accommodation: {
      description: "A combination of remote high-altitude yurt camps and comfortable safari-style mobile expedition camps with spacious double tents, cots, thermal mattresses, and a heated communal mess yurt.",
      features: [
        "2 nights in authentic nomad felt yurts + 2 nights in high-mountain safari bell tents",
        "Camp hot shower tent and heated wash basins",
        "Comfortable canvas dining tent with camp library and expedition maps",
        "Nightly campfires with local storytelling and komuz (traditional Kyrgyz lute) music"
      ]
    },
    meals: {
      description: "Gourmet mountain camp cuisine crafted by our dedicated expedition chef using organic farm provisions, mountain trout, and high-altitude wild herbs.",
      highlights: [
        "Breakfast: Made-to-order eggs, oat porridge with dried apricots, fresh goat cheese, and dark roast coffee",
        "Trail Lunch: Savory meat pies (samsa), cured meats, crisp mountain apples, walnuts, and steaming tea",
        "Dinner: Fire-roasted shashlik, aromatic dimlama (slow-cooked vegetable and lamb casserole), and warm dessert compotes"
      ]
    },
    included: [
      "Specially conditioned Tian Shan mountain horse and saddle with endurance stirrups and saddlebags",
      "Lead Kyrgyz mountain guide, english-speaking equestrian trip leader, and dedicated expedition camp chef",
      "4 nights expedition accommodation (yurts and high-grade canvas tents)",
      "All meals, filtered spring water, tea, coffee, and daily trail provisions",
      "Support pack horses and 4x4 luggage support vehicle where trails permit",
      "Satellite SOS communication and comprehensive wilderness first-aid equipment"
    ],
    excluded: [
      "International flights to Kyrgyzstan",
      "Pre- and post-expedition hotel nights in Bishkek or Karakol (available on request)",
      "Personal riding apparel and riding helmet (mandatory)",
      "Travel insurance with equestrian activities and high-altitude rescue coverage",
      "Alcoholic beverages and personal discretionary spending"
    ],
    itinerary: [
      {
        day: 1,
        title: "Issyk-Kul Southern Shore into Juuku Canyon",
        distance: "24 km",
        ridingHours: "5 hours",
        altitude: "Ascent from 1,600 m to 2,400 m",
        description: "Begin riding from the southern foothills of Lake Issyk-Kul. Enter the dramatic red and ochre canyon of Juuku, where wild barberry bushes and Tian Shan fir trees cling to steep canyon walls. Follow the meandering river upstream, crossing wooden bridges and shallow gravel fords. Arrive at our first secluded yurt camp situated in an amphitheater of pine-scented peaks.",
        campType: "Pine forest yurt camp at Juuku Gorge"
      },
      {
        day: 2,
        title: "Ascent toward the Glacial Moraines of Kashka-Suu",
        distance: "26 km",
        ridingHours: "6 hours",
        altitude: "Ascent from 2,400 m to 3,100 m",
        description: "Leave the forest belt behind as the landscape opens into breathtaking high-alpine tundra. The air turns crisp and crystalline. We ride beside sparkling meltwater streams, spotting marmots sunning on granite boulders and circling bearded vultures overhead. Set up our high mountain camp beside a glacial lake with views of towering hanging ice tongues.",
        campType: "High alpine safari expedition camp"
      },
      {
        day: 3,
        title: "Conquering the High Pass: Cresting 3,780 Meters",
        distance: "20 km",
        ridingHours: "6.5 hours",
        altitude: "Ascent to 3,780 m; descend to 2,900 m",
        description: "Today is the crown jewel of our Tian Shan traverse. A steady morning climb takes us across high scree fields and patches of summer snow to the pass summit. At nearly 3,800 meters, the view extends in every direction across jagged peaks stretching toward the Chinese border. Dismount to lead horses down the steepest rocky section before remounting for a lovely afternoon ride into the lush Kichi-Jargylchak valley.",
        campType: "Remote nomadic yurt settlement"
      },
      {
        day: 4,
        title: "Cantering the Wide Jailoo of Kichi-Jargylchak",
        distance: "28 km",
        ridingHours: "5.5 hours",
        altitude: "Gradual descent from 2,900 m to 2,100 m",
        description: "Wide valleys and level turf invite steady trots and joyful canters. We visit solitary summer nomad camps where herds of semi-wild horses graze together. In the afternoon, soak tired muscles in natural hot sulphur springs nestled quietly inside a rocky riverside canyon. Celebrate our penultimate evening around a grand camp feast.",
        campType: "Riverside safari camp near thermal springs"
      },
      {
        day: 5,
        title: "The Silk Road Descent to the Azure Waters of Issyk-Kul",
        distance: "18 km",
        ridingHours: "4 hours",
        altitude: "Descent from 2,100 m to 1,608 m",
        description: "A final gentle morning ride down the historic nomadic trade trails, passing ancient burial mounds (kurgans) and ancient carved stone balbals (standing figures). In the early afternoon, the vast blue expanse of Lake Issyk-Kul opens before us. Conclude our ride, say our grateful farewells to the horses, and enjoy a celebratory farewell toast.",
        campType: "Expedition conclusion / lakeside lodge transfer"
      }
    ],
    faqs: [
      {
        question: "How fit do I need to be for this expedition?",
        answer: "A solid level of physical fitness is required. You should be riding regularly at home and capable of spending 5 to 6.5 hours in the saddle for consecutive days. There are short sections on steep passes where riders must dismount and lead their horse on foot over loose ground."
      },
      {
        question: "How do you handle altitude acclimation?",
        answer: "Our route is thoughtfully graded to allow gradual altitude gain, spending the first night around 2,400 meters before crossing the highest pass on Day 3. Our guides carry pulse oximeters and medical-grade bottled oxygen as standard precautionary safety equipment."
      },
      {
        question: "Can I bring my own saddle or equipment?",
        answer: "You are welcome to bring your own stirrups, sheepskin seat saver, and small saddlebags. Our saddles are carefully chosen endurance and trail designs fitted specifically to the wider Kyrgyz horse conformation."
      }
    ]
  },
  {
    id: "great-kyrgyz-expedition",
    number: "03",
    title: "The Great Kyrgyz Expedition",
    subtitle: "A Ten-Day Epic Across Three Mountain Ranges & Nomadic Kingdoms",
    location: "Chuy, Naryn, Song-Kul & Central Tian Shan",
    durationDays: 10,
    durationLabel: "10 Days / 9 Nights",
    difficulty: "Advanced",
    difficultyNote: "Designed for accomplished riders seeking an authentic, remote, multi-region equestrian expedition.",
    priceAmount: 2690,
    priceDisplay: "From $2,690",
    priceNote: "per person including comprehensive expedition logistics",
    themeColor: "from-stone-950 via-teal-950 to-emerald-950",
    elevationMax: "3,880 m (Tuz-Ashuu & Tosor Passages)",
    groupSize: "4 to 7 riders",
    bestSeason: "July 1 to August 28 (optimal weather window)",
    overview: "The definitive Central Asian equestrian odyssey. For ten unforgettable days, trace ancient Silk Road routes, cross two major continental divides, navigate high glacial passes, and ride across the legendary high pasture of Song-Kul. This deep-immersion expedition is crafted for riders who crave wilderness seclusion, profound cultural connections, and the rare sensation of traversing an entire country by horse.",
    highlights: [
      "Traverse over 220 kilometers of wilderness trails across three distinct mountain ecosystems",
      "Cross both northern and southern Tian Shan mountain divides above 3,700 meters",
      "Witness Kok-Boru (the legendary nomadic equestrian game) performed in its homeland",
      "Experience private visits with third-generation falconers and Kyrgyz horse breeders",
      "Stay in boutique mountain lodges, secluded wilderness tent camps, and authentic shepherd bozoi yurts"
    ],
    ridingRequirements: {
      pace: "Fast-moving, diverse equestrian expedition with extensive walking on steep mountain sections, athletic trotting, and open canters across high plains.",
      gaits: "Flawless mastery of walk, rising and seated trot, and controlled gallop in open outdoor conditions.",
      hoursPerDay: "5.5 to 7 hours in the saddle per day.",
      terrain: "Extreme diversity: from forest loam to jagged limestone passes, boulder crossings, peat bogs, and broad alpine grasslands.",
      experienceNeeded: "Accomplished, confident equestrians who ride regularly and have prior multi-day trail riding experience."
    },
    accommodation: {
      description: "Carefully curated mix of premier boutique eco-lodges (start and finish), private nomad yurt camps, and high-altitude expedition camps with heated shower tents and cozy stove-warmed shared sleeping quarters.",
      features: [
        "2 nights in boutique Kyrgyz eco-lodges (Bishkek / lakeside)",
        "5 nights in hand-selected family felt yurt camps",
        "2 nights in remote wilderness expedition bell tent camps",
        "Hot shower systems and satellite Wi-Fi access at designated camp locations"
      ]
    },
    meals: {
      description: "Full board luxury camp dining, featuring wild game, fresh trout, local dairy, organic fruits from the Fergana basin, and bespoke vegetarian options.",
      highlights: [
        "Traditional nomadic feast (Beshbarmak) with handmade noodles and savory broth",
        "Campfire roasted meats, seasonal vegetables, and wild mountain herb tisanes",
        "Expedition barista bar with pour-over coffee each morning at sunrise"
      ]
    },
    included: [
      "Two assigned horses per rider to ensure optimal mount freshness throughout the 10-day expedition",
      "Full equestrian guide corps: senior Kyrgyz horse master, english-fluent equestrian historian, and camp chef team",
      "All 9 nights accommodation as specified in the luxury expedition itinerary",
      "All meals, beverages, curated trail wine, and expedition snacks",
      "Luggage transport via specialized 4x4 expedition vehicles and pack animals",
      "Emergency evacuation insurance coverage and satellite medical support"
    ],
    excluded: [
      "International airfare",
      "Personal riding boots, half-chaps, and certified riding helmet",
      "Visas if required (Kyrgyzstan is visa-free for over 60 nationalities)",
      "Optional helicopter charter transfers (available upon bespoke quotation)"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bishkek to Chon-Kemin Valley: Orientation & First Ride",
        distance: "14 km",
        ridingHours: "3 hours",
        altitude: "1,500 m to 1,900 m",
        description: "Arrive in the lush pine-clad valley of Chon-Kemin. Enjoy a welcoming lunch at an eco-lodge, meet your horses, adjust equipment, and take a gentle afternoon shake-out ride through apple orchards and subalpine forests to test your stirrup length and horse connection.",
        campType: "Boutique timber mountain lodge"
      },
      {
        day: 2,
        title: "Climbing into the Chong-Sary-Oi Ridge",
        distance: "26 km",
        ridingHours: "6 hours",
        altitude: "Ascent to 2,850 m",
        description: "Ride out of the valley into dramatic alpine pastures dotted with fir forests and grazing cattle. Camp in an isolated high clearing overlooking the Chong-Kemin river gorge.",
        campType: "High meadow yurt camp"
      },
      {
        day: 3,
        title: "Crossing the Divide toward Kochkor Foothills",
        distance: "30 km",
        ridingHours: "6.5 hours",
        altitude: "Pass at 3,200 m; descend to 2,100 m",
        description: "Ascend over a panoramic divide that marks the boundary between the northern forests and the semi-arid Central Tian Shan. Trots and brisk canters across dry steppe terrain.",
        campType: "Traditional felt yurt camp"
      },
      {
        day: 4,
        title: "Ascent to the Sacred Lake Song-Kul",
        distance: "24 km",
        ridingHours: "5.5 hours",
        altitude: "Ascend to 3,016 m",
        description: "Climb through the golden sandstone ravines and over the high pass into the Song-Kul lake basin. The immense sky and turquoise water create an almost spiritual feeling of vastness.",
        campType: "Private lakeside yurt camp"
      },
      {
        day: 5,
        title: "Across the Open Jailoo: Fast Riding & Kok-Boru",
        distance: "32 km",
        ridingHours: "6 hours",
        altitude: "3,016 m",
        description: "An extraordinary day of open riding across boundless lakeside turf. Watch local horsemen display incredible balance in pick-up games of Kok-Boru, the ancient nomadic game.",
        campType: "Southern shore nomad encampment"
      },
      {
        day: 6,
        title: "Southward Descent through the Moldo-Ashuu Canyon",
        distance: "28 km",
        ridingHours: "6 hours",
        altitude: "Descend to 1,800 m",
        description: "Ride along the dizzying serpentine curves of Moldo-Ashuu pass, descending into warm southern valleys with dramatically sculpted sandstone cliffs.",
        campType: "Riverside safari tent camp"
      },
      {
        day: 7,
        title: "The Wild Gorges of At-Bashi",
        distance: "34 km",
        ridingHours: "7 hours",
        altitude: "Ascent to 2,600 m",
        description: "Ride into the remote At-Bashi range near the Silk Road fortress of Tash Rabat. Sparse, raw, and magnificent landscapes rarely visited by foreign travelers.",
        campType: "Historic stone caravanserei yurt camp"
      },
      {
        day: 8,
        title: "Glacial Valleys of the Southern Tian Shan",
        distance: "26 km",
        ridingHours: "6 hours",
        altitude: "Ride up to 3,400 m",
        description: "Approach hanging glaciers where ice melt feeds crystal-clear mountain streams. Spot argali sheep (Marco Polo sheep) and ibex on distant rocky cliffs.",
        campType: "High alpine expedition camp"
      },
      {
        day: 9,
        title: "The Grand Crest Traverse",
        distance: "24 km",
        ridingHours: "5.5 hours",
        altitude: "Pass at 3,880 m; descent to valley",
        description: "Our final high-mountain challenge, crossing a lofty mountain pass with vistas stretching to the horizon. Celebrate the completion of our mountain traverse with a banquet under the stars.",
        campType: "Celebratory mountain yurt camp"
      },
      {
        day: 10,
        title: "Return to Civilisation & Farewell Banquet",
        distance: "12 km",
        ridingHours: "2.5 hours",
        altitude: "Descent to trailhead",
        description: "A gentle morning ride to the trailhead, ceremonial presentation of Kyrgyz horseman whips (kamcha) to guests, and comfortable transfer to Bishkek for a luxury farewell dinner.",
        campType: "Boutique hotel in Bishkek / departure"
      }
    ],
    faqs: [
      {
        question: "Can I do this trip if I have never ridden in mountains before?",
        answer: "This expedition is specifically intended for riders with prior trail riding experience and solid outdoor fitness. If you are an intermediate rider looking to build your mountain experience, we recommend starting with our 3-Day Nomad Trail or 5-Day Tian Shan itinerary."
      },
      {
        question: "How do the reserve horses work?",
        answer: "On our 10-day expedition, we bring spare trained horses in our herd. This allows horses to alternate days of demanding climbs, ensuring the animals remain healthy, vibrant, and eager to move forward throughout the entire journey."
      }
    ]
  },
  {
    id: "private-bespoke-expedition",
    number: "04",
    title: "Private Bespoke Expedition",
    subtitle: "Tailor-Made Itineraries for Discerning Equestrians & Private Groups",
    location: "Customizable throughout Kyrgyzstan & Central Asia",
    durationDays: "Custom",
    durationLabel: "Tailor-Made (4 to 14+ Days)",
    difficulty: "Personalized",
    difficultyNote: "Calibrated to your exact riding experience, pace, family needs, or private expedition ambitions.",
    priceAmount: undefined,
    priceDisplay: "Custom quotation",
    priceNote: "crafted around group size, dates, and bespoke requirements",
    isCustomQuote: true,
    themeColor: "from-stone-900 via-amber-950 to-stone-950",
    elevationMax: "Customizable (up to 4,000+ m)",
    groupSize: "Private party (1 to 10 guests)",
    bestSeason: "May through October (route dependent)",
    overview: "Some journeys cannot be found in a catalogue; they must be shaped around you. For private groups, families, photography expeditions, or riders with specific ambitions (such as fast-paced riding or remote wildlife tracking), our expedition directors create private, entirely custom journeys. From private helicopter transfers into remote mountain valleys to dedicated yurt glamping setups with private camp chefs, your journey is designed without compromise.",
    highlights: [
      "Completely customized route, pacing, and daily saddle duration",
      "Hand-selected horses matched precisely to each rider's height, weight, and riding style",
      "Option for private luxury mobile camps with private hot showers and heated yurts",
      "Helicopter insertion or scenic flight options across the Tian Shan",
      "Specialized access: private falconry demonstrations, archeological permits, botanist or photography guides"
    ],
    ridingRequirements: {
      pace: "Tailored to your preferences — from leisurely walk-and-trot nature discovery to fast endurance-style riding.",
      gaits: "Adapted to your group's collective ability.",
      hoursPerDay: "3 to 8 hours daily, according to your wishes.",
      terrain: "Customized: soft meadow valleys, dramatic rocky passes, or lake circuits.",
      experienceNeeded: "All levels accommodated through personalized horse pairing and guide allocation."
    },
    accommodation: {
      description: "Any combination of 5-star city hotels, luxury boutique lakeside lodges, private yurt camps, or custom mobile safari encampments.",
      features: [
        "Exclusive camp buyout for complete privacy",
        "Private bathroom / shower tents with heated water",
        "Dedicated logistics manager and camp service team"
      ]
    },
    meals: {
      description: "Private expedition chef preparing bespoke menus tailored to dietary preferences, fine wines, and artisanal regional delicacies.",
      highlights: [
        "Custom dining plans (vegan, gluten-free, halal, or gourmet carnivore)",
        "Curated Central Asian and European wine selection",
        "Picnic banquets arranged at breathtaking viewpoints"
      ]
    },
    included: [
      "Dedicated expedition director and full private support staff",
      "Private horses and custom-adjusted tack",
      "All private ground transportation in luxury 4x4 vehicles",
      "All bespoke accommodation, dining, and activities",
      "Exclusive national park permits and customs clearances where required"
    ],
    excluded: [
      "International flights (private aviation coordination available)",
      "Personal riding apparel"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Private Transfer into the Mountains",
        distance: "Custom",
        ridingHours: "2–3 hours orientation",
        altitude: "Adapted to profile",
        description: "Welcome at Bishkek airport with private VIP lounge clearance and luxury 4x4 transfer to your private base camp. First saddle fit and sunset ride.",
        campType: "Private mountain lodge or luxury yurt camp"
      },
      {
        day: 2,
        title: "Bespoke Mountain Route Begins",
        distance: "According to plan",
        ridingHours: "4–6 hours",
        altitude: "Customized",
        description: "Designed in direct consultation with your private expedition leader to showcase your preferred terrain, pace, and cultural highlights.",
        campType: "Exclusive expedition camp"
      },
      {
        day: 3,
        title: "Subsequent Days Custom Designed",
        distance: "Flexible",
        ridingHours: "Flexible",
        altitude: "Flexible",
        description: "Every day unfolds with effortless precision, guided by our senior Kyrgyz horse masters.",
        campType: "Handcrafted accommodations"
      }
    ],
    faqs: [
      {
        question: "How far in advance should we plan a bespoke expedition?",
        answer: "We recommend initiating planning 3 to 6 months prior to your intended travel dates, particularly for high-summer months (July–August) when our finest mountain horses and private camp locations are in highest demand."
      },
      {
        question: "Can non-riders join a private bespoke group?",
        answer: "Yes. For mixed parties of riders and non-riders, we design parallel itineraries where non-riding guests travel comfortably by luxury 4x4 or e-bike, joining the riders for lunch banquets and overnight yurt camps."
      }
    ]
  }
];

export interface TourLocalization {
  title: string;
  subtitle: string;
  location: string;
  durationLabel: string;
  difficulty: 'Intermediate' | 'Intermediate to Advanced' | 'Advanced' | 'Personalized';
  difficultyNote: string;
  priceDisplay: string;
  priceNote: string;
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
  itinerary: TourItineraryDay[];
  faqs: TourFaq[];
}

export const TOUR_TRANSLATIONS: Record<SupportedLanguage, Record<string, Partial<TourLocalization>>> = {
  en: {},
  ru: {
    'nomad-trail-song-kul': {
      title: 'Тропа Кочевника',
      subtitle: 'Высокогорное джайлоо и зеркало озера Сон-Куль',
      location: 'Озеро Сон-Куль и хребет Кызарт, Нарынская область',
      durationLabel: '3 дня / 2 ночи',
      difficulty: 'Intermediate',
      difficultyNote: 'Уверенный шаг и рысь на горных подъемах; бодрый галоп по ровным берегам озера.',
      priceDisplay: 'От $560',
      priceNote: 'на человека при двухместном размещении в юрте',
      overview: 'Поднимитесь от красных предгорий Кызарта через панорамные перевалы прямо на высокогорное плато озера Сон-Куль (3016 м). Три дня в седле бок о бок с потомственными чабанами, ночевки в традиционных теплых юртах с печками под бездонным звездным небом.',
      highlights: [
        'Подъем через перевалы Кызарт и Килемче с панорамой 360°',
        'Езда вдоль диких берегов озера Сон-Куль на высоте более 3000 м',
        'Ночевки в настоящих чабанских юртах с теплыми печками и шырдаками',
        'Чай из самовара, свежие тандырные лепешки и утренний каймак',
        'Табуны лошадей, свободно пасущиеся на бескрайнем джайлоо'
      ],
      ridingRequirements: {
        pace: 'Умеренный горный темп: шаг на крутых участках, рысь и галоп на равнинных плато.',
        gaits: 'Шаг, уверенная рабочая рысь, контролируемый галоп.',
        hoursPerDay: '4–5.5 часов в седле в день.',
        terrain: 'Альпийские луга, горные тропы, броды через неглубокие ручьи.',
        experienceNeeded: 'Всадники должны уверенно держаться в седле несколько часов подряд.'
      },
      accommodation: {
        description: 'Традиционные войлочные юрты на летних пастбищах. Внутри — толстый войлок, шырдаки, удобные матрасы, пуховые одеяла и чугунные печки.',
        features: [
          'Просторные общие или двухместные войлочные юрты',
          'Традиционная юрта-столовая с низким деревянным дастарханом',
          'Экологичные удобства и умывальники с подогретой водой',
          'Вид на звездное небо прямо от порога юрты'
        ]
      },
      meals: {
        description: 'Сытная традиционная центральноазиатская кухня из свежих горных продуктов.',
        highlights: [
          'Утро: свежий хлеб, горный мед, варенье, яйца и густой каймак',
          'День: походный обед у горного ручья с сыром, мясом, сухофруктами и горячим чаем',
          'Вечер: наваристый лагман, ароматный плов или овощное рагу'
        ]
      },
      included: [
        'Выносливый кыргызский горный конь и удобное экспедиционное седло с овчиной',
        'Профессиональный кыргызский гид-проводник и англо/русскоязычный координатор',
        '2 ночи в аутентичных юртовых лагерях (все постельные принадлежности включены)',
        'Трехразовое горячее питание и походные перекусы на маршруте',
        'Вьючные лошади для перевозки багажа между лагерями',
        'Экологические сборы и пропуска'
      ],
      excluded: [
        'Авиаперелет в Бишкек',
        'Индивидуальный трансфер Бишкек — Кызарт (предоставляется по запросу)',
        'Личная экипировка для верховой езды (шлем, обувь, перчатки, мембрана)',
        'Страховка для конного туризма',
        'Чаевые команде проводников и лагерю'
      ],
      itinerary: [
        {
          day: 1,
          title: 'Из Кызарта через перевал Чаар-Арча в долину Килемче',
          distance: '18 км',
          ridingHours: '4.5 часа',
          altitude: 'Подъем с 2 100 м до 2 664 м',
          description: 'Встреча в Кызарте, подгонка снаряжения и знакомство с конями. Подъем вдоль живописных ущелий к перевалу Чаар-Арча. Пикник у реки, спуск в долину Килемче, ужин и ночлег в юртах.',
          campType: 'Юртовый лагерь в долине Килемче'
        },
        {
          day: 2,
          title: 'Перевал Жалгыз-Карагай и выход к зеркалу Сон-Куля',
          distance: '22 км',
          ridingHours: '5.5 часов',
          altitude: 'Перевал 3 346 м; спуск к озеру 3 016 м',
          description: 'Серпантинный подъем на перевал Жалгыз-Карагай. Незабываемый вид на бирюзовую гладь Сон-Куля. Спуск к озеру, скоростные участки по прибрежной полосе, прибытие в лагерь.',
          campType: 'Юртовый лагерь на берегу Сон-Куля'
        },
        {
          day: 3,
          title: 'Прибрежные переходы, кочевой быт и спуск в долину',
          distance: '16 км',
          ridingHours: '4 часа',
          altitude: 'Спуск с 3 016 м до 2 100 м',
          description: 'Утренний выезд по пастбищам, дегустация кымыза у соседей, знакомство с валянием войлока. Обед и живописный спуск обратно в Кызарт.',
          campType: 'Окончание конной части / трансфер'
        }
      ]
    },
    'into-the-tian-shan': {
      title: 'В сердце Тянь-Шаня',
      subtitle: 'Высокогорные перевалы и ледниковые долины',
      location: 'Хребты Тескей Ала-Тоо, Иссык-Кульская область',
      durationLabel: '5 дней / 4 ночи',
      difficulty: 'Intermediate to Advanced',
      difficultyNote: 'Опыт горных переходов; крутые каменистые спуски и подъемы на высоты свыше 3600 м.',
      priceDisplay: 'От $980',
      priceNote: 'на человека',
      overview: 'Экспедиция через дикие хребты Тескей Ала-Тоо. Вы пройдете по древним тропам через перевалы почти в 3800 метров, увидите бирюзовые ледниковые озера, каньоны и реликтовые тянь-шаньские ельники.',
      highlights: [
        'Штурм перевала Тон (3 780 м) с панорамой ледников',
        'Ночевки в палатках и юртах под куполом Млечного Пути',
        'Переправы через бурные хрустальные реки верхом',
        'Горячие термальные источники в ущелье'
      ]
    },
    'great-kyrgyz-expedition': {
      title: 'Большая Кыргызская Экспедиция',
      subtitle: 'Полный траверс небесных хребтов Тянь-Шаня',
      location: 'От Сон-Куля через Тянь-Шань к озеру Иссык-Куль',
      durationLabel: '10 дней / 9 ночей',
      difficulty: 'Advanced',
      difficultyNote: 'Для уверенных всадников с хорошей физической выносливостью.',
      priceDisplay: 'От $2 150',
      priceNote: 'на человека',
      overview: 'Флагманский маршрут TAI TRAVEL. 10 дней полного погружения в нетронутую природу Центральной Азии. Пересечение нескольких климатических зон, сотни километров без заборов и высшая степень кочевой свободы.',
      highlights: [
        'Полное пересечение двух грандиозных горных систем',
        'Ежедневные переходы по 5–7 часов в различных аллюрах',
        'Аутентичные кочевые лагеря и удаленные стоянки',
        'Финальный триумфальный галоп по дикому южному берегу Иссык-Куля'
      ]
    },
    'private-bespoke-expedition': {
      title: 'Индивидуальная частная экспедиция',
      subtitle: 'Маршрут и расписание под ваши пожелания',
      location: 'Любой регион Кыргызстана',
      durationLabel: 'Индивидуально (от 3 до 14 дней)',
      difficulty: 'Personalized',
      difficultyNote: 'Темп, сложность и протяженность определяются индивидуально.',
      priceDisplay: 'По запросу',
      priceNote: 'персональный расчет',
      overview: 'Маршрут, разработанный эксклюзивно для вас или вашей семьи. Персональный старший проводник, шеф-повар походного лагеря, лучшие лошади и абсолютная гибкость каждого дня.',
      highlights: [
        'Полная свобода в выборе дат, темпа и уровня комфорта',
        'Личная команда сопровождения и VIP трансферы',
        'Уникальные стоянки в закрытых заповедных уголках'
      ]
    }
  },
  de: {
    'nomad-trail-song-kul': {
      title: 'Der Nomadenpfad',
      subtitle: 'Hochweiden (Dschailoo) & der Spiegel des Song-Kul',
      location: 'Song-Kul See & Kyzart-Kamm, Region Naryn',
      durationLabel: '3 Tage / 2 Nächte',
      difficulty: 'Intermediate',
      difficultyNote: 'Sicher in Schritt und Trab im Gebirge; zügige Galoppaden am weiten Ufer.',
      priceDisplay: 'Ab $560',
      priceNote: 'pro Person bei Doppelbelegung in der Jurte',
      overview: 'Reiten Sie von den roten Ausläufern bei Kyzart über Bergkämme direkt zum Song-Kul See auf 3.016 Metern. Drei Tage Reiten mit einheimischen Nomadenhirten und gemütliche Nächte unter Filzjurten.',
      highlights: [
        'Ritt über den Kyzart-Kamm mit 360-Grad-Alpenpanorama',
        'Reiten entlang des unberührten Seeufers auf über 3.000 m',
        'Übernachtung in traditionellen Familienjurten mit warmem Holzofen',
        'Samowartee, ofenfrisches Fladenbrot und frischer Bergrahm'
      ]
    },
    'into-the-tian-shan': {
      title: 'In den Tian Shan',
      subtitle: 'Hochgebirgspässe & Gletschertäler',
      location: 'Teskey Ala-Too Gebirge, Region Yssykköl',
      durationLabel: '5 Tage / 4 Nächte',
      difficulty: 'Intermediate to Advanced',
      difficultyNote: 'Erfahrung im Gelände erforderlich; steile Pässe über 3.600 m.',
      priceDisplay: 'Ab $980',
      priceNote: 'pro Person',
      overview: 'Mehrtägige Reitexpedition durch unberührte Schluchten und Hochgebirgspässe bis 3.800 m Höhe.',
      highlights: [
        'Überquerung des Ton-Passes (3.780 m) mit Gletscherblick',
        'Zelt- und Jurtennächte unter spektakulärem Sternenhimmel',
        'Flussdurchquerungen auf trittsicheren Gebirgspferden'
      ]
    },
    'great-kyrgyz-expedition': {
      title: 'Große Kirgistan-Expedition',
      subtitle: 'Komplette Himmelsberg-Traverse',
      location: 'Vom Song-Kul über den Tian Shan zum Yssykköl-See',
      durationLabel: '10 Tage / 9 Nächte',
      difficulty: 'Advanced',
      difficultyNote: 'Für erfahrene Reiter mit guter Kondition.',
      priceDisplay: 'Ab $2.150',
      priceNote: 'pro Person',
      overview: 'Das ultimative Reitabenteuer durch Zentralasien. 10 Tage durch unberührte Bergwelten.',
      highlights: [
        'Vollständige Durchquerung zweier großer Gebirgsketten',
        'Täglich 5–7 Stunden im Sattel in allen Gangarten',
        'Abschlussgalopp am wilden Südufer des Yssykköl-Sees'
      ]
    },
    'private-bespoke-expedition': {
      title: 'Private Maßgeschneiderte Expedition',
      subtitle: 'Vollständig individualisierte Route',
      location: 'Ganz Kirgisistan nach Wunsch',
      durationLabel: 'Flexibel (3 bis 14 Tage)',
      difficulty: 'Personalized',
      difficultyNote: 'Individuell auf Ihr Können abgestimmt.',
      priceDisplay: 'Auf Anfrage',
      priceNote: 'individuelles Angebot',
      overview: 'Exklusiv für Sie und Ihre Begleitung konzipiert. Eigener Reitführer, privater Koch und absolute Flexibilität.',
      highlights: [
        'Freie Wahl von Reittempo, Terminen und Komfort',
        'Persönliche Begleitmannschaft und VIP-Transfer'
      ]
    }
  },
  ja: {
    'nomad-trail-song-kul': {
      title: '遊牧民の道（ノマド・トレイル）',
      subtitle: '高山草原ジャイローと聖なる鏡ソンコル湖',
      location: 'ソンコル湖およびクザルト山稜（ナルン州）',
      durationLabel: '3日間 / 2泊',
      difficulty: 'Intermediate',
      difficultyNote: '山岳路での常歩・速歩、湖畔での爽快な駈歩。',
      priceDisplay: 'お一人様 $560〜',
      priceNote: '2名1室（ユルタ滞在）基準',
      overview: '赤土の丘陵から標高3,016mの高山湖ソンコルへ。遊牧民とともに馬を駆り、夜は温かいフェルトユルタで暖炉を囲む3日間の旅。',
      highlights: [
        '360度の大パノラマが広がる峠越え',
        '標高3,000mを超える湖畔での爽快なロングキャンター',
        '伝統的なフェルトユルタでの宿泊と薪ストーブの温もり',
        '搾りたての乳で作る濃厚なカイマクと伝統パン'
      ]
    },
    'into-the-tian-shan': {
      title: '天山山脈の深淵へ',
      subtitle: '高山峠越えと氷河の谷',
      location: 'テスケイ・アラ・トー山脈（イシク・クル州）',
      durationLabel: '5日間 / 4泊',
      difficulty: 'Intermediate to Advanced',
      difficultyNote: '標高3,600m以上の急峻な峠を越える外乗経験者向け。',
      priceDisplay: 'お一人様 $980〜',
      priceNote: 'お一人様あたり',
      overview: '天山山脈の険しい山稜を馬で走破する本格遠征。標高3,800m近い峠を越え、氷河の渓谷を巡ります。',
      highlights: [
        '標高3,780mのトン峠越えと大氷河の眺望',
        '満天の星空の下でのテント・ユルタ泊',
        '頼もしい山岳馬との氷河渡渉'
      ]
    },
    'great-kyrgyz-expedition': {
      title: '大キルギス乗馬遠征グランドトラバース',
      subtitle: '天山連峰を完全踏破する至高の10日間',
      location: 'ソンコル湖から天山山脈を経てイシク・クル湖へ',
      durationLabel: '10日間 / 9泊',
      difficulty: 'Advanced',
      difficultyNote: '長時間の外乗に慣れた上級者・体力に自信のある方向け。',
      priceDisplay: 'お一人様 $2,150〜',
      priceNote: 'お一人様あたり',
      overview: 'TAI TRAVELが誇る最高峰のグランドツアー。柵のない中央アジアの大地を10日間にわたり走破します。',
      highlights: [
        '二大山岳地帯を貫く壮大な縦走ルート',
        '1日5〜7時間の充実した騎乗時間',
        'イシク・クル湖畔での感動的なフィナーレ駈歩'
      ]
    },
    'private-bespoke-expedition': {
      title: 'プライベート特別仕立て遠征',
      subtitle: 'お客様のためだけに創り上げるオーダーメイドの旅',
      location: 'キルギス全土（ご希望の地域）',
      durationLabel: 'ご希望日数（3〜14日間）',
      difficulty: 'Personalized',
      difficultyNote: 'ご自身の技術や好みに合わせて設定。',
      priceDisplay: '個別お見積り',
      priceNote: 'ご要望に応じた設計',
      overview: '日程、騎乗ペース、宿泊環境まで完全オーダーメイド。専任のホースマスターと料理人が同行します。',
      highlights: [
        '完全なプライベート空間と自由な騎乗ペース',
        '専用サポートスタッフと快適な専用車送迎'
      ]
    }
  },
  ky: {
    'nomad-trail-song-kul': {
      title: 'Көчмөн жолу',
      subtitle: 'Бийик жайлоо жана Соң-Көлдүн тунук күзгүсү',
      location: 'Соң-Көл көлү жана Кызарт ашуусу, Нарын облусу',
      durationLabel: '3 күн / 2 түн',
      difficulty: 'Intermediate',
      difficultyNote: 'Тоо жолунда ишенимдүү басык, көл жээгинде чабыш.',
      priceDisplay: 'Баштапкы баасы $560',
      priceNote: 'боз үйдө 2 адам жайгашуу шартында',
      overview: 'Кызарттын кызыл адырларынан Соң-Көл жайлоосуна (3016 м) чейинки улуу сапар. Чабандардын жашоосуна күбө болуп, ак өргөө боз үйлөрдө түнөө.',
      highlights: [
        'Кызарт жана Килемче ашууларынан 360 градустук панорама',
        '3000 метр бийиктиктеги көл жээгинде эркин ат чабуу',
        'Жылуу меши бар боз үйлөрдө түнөө, шырдак үстүндө эс алуу',
        'Самоор чай, ысык тандыр нан жана таза каймак'
      ]
    },
    'into-the-tian-shan': {
      title: 'Теңир-Тоо койнунда',
      subtitle: 'Бийик ашуулар жана мөңгүлүү өрөөндөр',
      location: 'Тескей Ала-Тоо кыркалары, Ысык-Көл облусу',
      durationLabel: '5 күн / 4 түн',
      difficulty: 'Intermediate to Advanced',
      difficultyNote: 'Тоо шартындагы тажрыйбалуу чабандестер үчүн.',
      priceDisplay: 'Баштапкы баасы $980',
      priceNote: 'бир адамга',
      overview: 'Тескей Ала-Тоонун кооз капчыгайлары аркылуу 3800 метрлик ашууларды ашкан экспедиция.',
      highlights: [
        'Тоң ашуусун (3780 м) ашуу жана мөңгүлөрдү көрүү',
        'Жылдыздуу асман астында боз үйдө түнөө',
        'Тунук тоо сууларын ат менен кечүү'
      ]
    },
    'great-kyrgyz-expedition': {
      title: 'Улуу Кыргызстан экспедициясы',
      subtitle: 'Теңир-Тоо кыркаларын бойлогон улуу сапар',
      location: 'Соң-Көлдөн Теңир-Тоо аркылуу Ысык-Көлгө чейин',
      durationLabel: '10 күн / 9 түн',
      difficulty: 'Advanced',
      difficultyNote: 'Чыдамкай жана тажрыйбалуу чабандестер үчүн.',
      priceDisplay: 'Баштапкы баасы $2 150',
      priceNote: 'бир адамга',
      overview: 'TAI TRAVEL флагмандык туру. Борбор Азиянын кол тийбеген табиятында 10 күндүк атчан жүрүш.',
      highlights: [
        'Эки чоң тоо системасын ат үстүндө кесип өтүү',
        'Күн сайын 5–7 сааттык узак ат жүрүштөрү',
        'Ысык-Көлдүн түштүк жээгиндеги финалдык ат чабыш'
      ]
    },
    'private-bespoke-expedition': {
      title: 'Жекече чакан экспедиция',
      subtitle: 'Сиздин каалооңузга жараша түзүлгөн сапар',
      location: 'Кыргызстандын каалаган аймагы',
      durationLabel: 'Ыңгайлуу мөөнөт (3 күндөн 14 күнгө чейин)',
      difficulty: 'Personalized',
      difficultyNote: 'Сиздин даярдыгыңызга жараша.',
      priceDisplay: 'Жекече баалоо',
      priceNote: 'суроо-талап боюнча',
      overview: 'Сиз же үй-бүлөңүз үчүн атайын даярдалган сапар. Жеке саяпкер, ашпозчу жана толук эркиндик.',
      highlights: [
        'Күндөрдү жана жүрүш темпин өзүңүз тандоо',
        'Жеке тейлөө командасы жана VIP трансфер'
      ]
    }
  }
};

export function getTours(lang: SupportedLanguage = 'en'): Tour[] {
  const trans = TOUR_TRANSLATIONS[lang] || {};
  return TOURS.map((baseTour) => {
    const t = trans[baseTour.id];
    if (!t) return baseTour;
    return {
      ...baseTour,
      title: t.title || baseTour.title,
      subtitle: t.subtitle || baseTour.subtitle,
      location: t.location || baseTour.location,
      durationLabel: t.durationLabel || baseTour.durationLabel,
      difficulty: t.difficulty || baseTour.difficulty,
      difficultyNote: t.difficultyNote || baseTour.difficultyNote,
      priceDisplay: t.priceDisplay || baseTour.priceDisplay,
      priceNote: t.priceNote || baseTour.priceNote,
      overview: t.overview || baseTour.overview,
      highlights: t.highlights || baseTour.highlights,
      ridingRequirements: t.ridingRequirements ? { ...baseTour.ridingRequirements, ...t.ridingRequirements } : baseTour.ridingRequirements,
      accommodation: t.accommodation ? { ...baseTour.accommodation, ...t.accommodation } : baseTour.accommodation,
      meals: t.meals ? { ...baseTour.meals, ...t.meals } : baseTour.meals,
      included: t.included || baseTour.included,
      excluded: t.excluded || baseTour.excluded,
      itinerary: t.itinerary || baseTour.itinerary,
      faqs: t.faqs || baseTour.faqs,
    };
  });
}

export function getTourById(id: string, lang: SupportedLanguage = 'en'): Tour | undefined {
  const tours = getTours(lang);
  return tours.find((t) => t.id === id);
}

