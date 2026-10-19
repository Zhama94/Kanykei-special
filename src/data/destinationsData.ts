export interface DestinationHighlight {
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

export const DESTINATIONS: DestinationHighlight[] = [
  {
    id: "song-kul",
    tag: "Alpine Lake & Jailoo",
    title: "Song-Kul Lake & The High Summer Pastures",
    subtitle: "A mirror at 3,016 meters, where the nomadic summer returns unbroken.",
    elevation: "3,016 m above sea level",
    description: "Cradled in a vast mountain amphitheater in central Kyrgyzstan, Lake Song-Kul is inaccessible for nearly eight months of the year due to heavy winter snow. When the high passes open in June, Kyrgyz semi-nomads drive their herds of horses, sheep, and yaks up to these emerald shores. The perimeter of the lake offers dozens of kilometers of soft alpine turf where horses move with effortless grace.",
    editorialDeck: "No electric poles, no paved highways, and no sound except the clip-clop of horse hooves and the whistle of the mountain wind.",
    features: [
      "Vast perimeter of open, unfenced shoreline ideal for trotting and spirited cantering",
      "Traditional family yurt encampments active throughout July and August",
      "Spectacular reflections of snow-dusted ridges on crystalline alpine water",
      "Celestial dark sky reserve conditions with unmatched Milky Way clarity"
    ],
    riderNote: "Riding across the shoreline turf gives riders an extraordinary feeling of freedom: you can pick a distant peak on the horizon and ride directly toward it across open meadows."
  },
  {
    id: "tian-shan",
    tag: "Celestial Mountains",
    title: "The Tian Shan: Glacial Pinnacles & High Passes",
    subtitle: "The majestic spine of Central Asia, where peaks exceed 7,000 meters.",
    elevation: "Passes up to 3,880 m · Peaks to 7,439 m (Jengish Chokusu)",
    description: "Stretching along the borderlands of Central Asia and China, the Tian Shan ('Heavenly Mountains') is one of the world's grandest and least commercialized alpine systems. Here, deep spruce canyons give way to jagged moraines, crystalline turquoise glacial tarns, and high-altitude passes where only horses and pack animals can venture. The crisp, thin air carries the scent of wild juniper and mountain mint.",
    editorialDeck: "A dramatic wilderness of rock, ice, and sky that commands total respect from horse and rider alike.",
    features: [
      "Challenging mountain trails requiring sure-footed local equine partners",
      "Hidden thermal mineral springs tucked away in secluded riverside gorges",
      "Encounters with wild ibex, golden eagles, and nomadic shepherds",
      "Ancient petroglyphs and Silk Road watchpoints carved into granite boulders"
    ],
    riderNote: "The sure-footedness of the local Kyrgyz horses on narrow shale switchbacks is legendary; trusting your mount on high passes is an unforgettable lesson in equestrian partnership."
  },
  {
    id: "yurt-culture",
    tag: "Nomadic Architecture",
    title: "Boz-Ui & Living Nomadic Heritage",
    subtitle: "A philosophy of portable elegance perfected over three thousand years.",
    elevation: "Found throughout valleys & high summer jailoo",
    description: "To the Kyrgyz, the boz-ui (felt yurt) is not temporary shelter—it is sacred cosmology. Curved willow struts support the circular tunduk roof ring, creating an acoustic sanctuary that diffuses wind and holds the warmth of the central hearth. Inside, geometric shyrdak wool felt carpets, hand-embroidered wall hangings (tush-kiyiz), and soft sheepskins create an atmosphere of quiet luxury and organic warmth.",
    editorialDeck: "An architectural marvel erected in two hours without a single nail, offering natural wool insulation and timeless serenity.",
    features: [
      "Natural wool insulation that breathes during warm days and traps warmth at night",
      "Warm iron wood-and-dung stoves providing crackling comfort after sunset",
      "Traditional low dastarkhan table for leisurely communal mountain meals",
      "Open doorway framing undisturbed vistas of dawn peaks and grazing horses"
    ],
    riderNote: "There is no comfort quite like dismounting after six hours in the mountain saddle, pulling off riding boots, and stepping onto thick hand-felted rugs warmed by an evening stove."
  },
  {
    id: "valleys-canyons",
    tag: "Hidden Valleys",
    title: "Alpine Gorges & Walnut Forests",
    subtitle: "From red sandstone canyons to ancient primordial walnut groves.",
    elevation: "1,400 m to 2,600 m",
    description: "Kyrgyzstan's geography transitions with astonishing swiftness. In the morning, you can ride through arid red canyons sculpted by wind and ancient rivers; by afternoon, you find yourself beneath the towering canopy of centuries-old Tian Shan firs or traversing the ancient walnut forests of Arslanbob—the largest natural walnut forest on Earth, dating back to the time of Alexander the Great.",
    editorialDeck: "A land of extreme geographic contrast where every mountain turn reveals an entirely new ecological realm.",
    features: [
      "Soft forest trails with pine-needle cushioning and fresh mountain breezes",
      "Cool river fords where horses drink from crystal glacial runoff",
      "Lush meadows carpeted with wild alpine edelweiss, forget-me-nots, and thyme",
      "Dramatic red and golden sandstone formations in canyons like Juuku and Jeti-Oguz"
    ],
    riderNote: "Cantering through open walnut groves and subalpine glades offers relaxed, rhythmic riding between demanding mountain pass ascents."
  },
  {
    id: "hospitality-table",
    tag: "Nomadic Gastronomy",
    title: "Dastarkhan Hospitality & Mountain Provisions",
    subtitle: "Feasts of slow-simmered meats, mountain honey, and sacred shared bread.",
    elevation: "Served at every camp and shepherd hearth",
    description: "In nomadic culture, hospitality is sacred: a traveler on horseback is believed to bring fortune to the camp. The dastarkhan (tablecloth) is spread with an abundance of fresh bread (nan), sweet local mountain butter, thick clotted cream (kaimak), dried mountain apricots, and bowls of fragrant tea steeped from wild herbs and boiling samovars. Evening feasts feature slow-simmered lamb lagman, fragrant plov cooked in iron cauldrons (kazan), and restorative broths.",
    editorialDeck: "Food prepared with patience and deep pride, shared in circular fellowship beneath the felt roof.",
    features: [
      "Freshly baked bread broken by hand and shared among travelers",
      "Authentic kaimak (clotted cream) churned fresh daily on the summer jailoo",
      "Mountain herbal teas brewed over hot brass samovars with pine embers",
      "Hearty, protein-rich stews and vegetarian options tailored for equestrian endurance"
    ],
    riderNote: "Gathering around the evening dastarkhan with your Kyrgyz guides and fellow riders dissolves all fatigue, fostering bonds that last long after the expedition ends."
  }
];
