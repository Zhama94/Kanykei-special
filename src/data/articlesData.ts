import { SupportedLanguage } from './translations';

export interface JournalArticle {
  id: string;
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  category: string;
  pullQuote: string;
  content: {
    sectionTitle?: string;
    paragraphs: string[];
  }[];
  fieldNotes: {
    label: string;
    value: string;
  }[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "first-journey-nomadic-world",
    number: "01",
    slug: "a-first-journey-into-kyrgyzstans-nomadic-world",
    title: "A First Journey into Kyrgyzstan’s Nomadic World",
    subtitle: "What happens when you trade fences and clocks for a sure-footed horse and the open jailoo.",
    date: "Spring 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    authorRole: "Expedition Equestrian & Travel Writer",
    category: "Nomadic Heritage",
    excerpt: "Nothing in modern Europe or North America prepares you for the sheer absence of property lines. In the Kyrgyz highlands, the landscape rolls on without a single wire fence for sixty kilometers.",
    pullQuote: "In the West, horses are an expensive hobby or an athletic pursuit. In Kyrgyzstan, a horse is an extension of the soul—a partner without whom the high passes remain silent and untouchable.",
    content: [
      {
        sectionTitle: "The Disappearance of the Horizon's Boundaries",
        paragraphs: [
          "Nothing in modern equestrian culture prepares you for the moment you ride across the Kyzart pass and look down onto the high pasture of Song-Kul. There are no fences. No private property warning signs. No asphalt roads carving the soil into neat parcels. There is only an oceanic sea of emerald grass undulating at 3,000 meters above sea level, ringed by craggy limestone peaks whose shadows move like living creatures across the plains.",
          "To ride here is to remember an older relationship between humans, horses, and the earth. In Kyrgyz, the word 'jailoo' refers to the high summer mountain pasture where families bring their herds of horses, sheep, and yaks once the snow melts in June. For three short, radiant summer months, life returns to the circular felt yurt (boz-ui), the rhythm of dawn milking, and the quiet dignity of nomadic hospitality."
        ]
      },
      {
        sectionTitle: "The Kyrgyz Horse: Partner of the High Peaks",
        paragraphs: [
          "Our mounts are not the delicate, skittish thoroughbreds of European riding academies. They are Kyrgyz mountain horses—compact, deep-chested, with muscular hindquarters and hooves as tough as river stone. Watch them navigate a 40-degree scree slope: their heads lower slightly, their ears twitch forward, and every hoof lands with deliberate, faultless precision.",
          "When you drop your reins and trust your horse on a narrow mountain ridge, fear transforms into profound reverence. These horses have grazed these slopes for two thousand years. They understand the shifting shale far better than any GPS unit ever could."
        ]
      },
      {
        sectionTitle: "The Evening Samovar and the Song of the Komuz",
        paragraphs: [
          "As dusk falls, temperatures drop rapidly. The blue water of Song-Kul turns ink-black, reflecting millions of stars untainted by light pollution. We gather inside the warm sanctuary of our host's yurt. A wood-and-dung stove crackles in the center, heating the circular space within minutes.",
          "On the low dastarkhan table sits steaming lamb broth, warm crusty flatbread just pulled from the oven, and bowls of rich clotted cream (kaimak). Our guide, Bakyt, picks up a three-stringed apricot-wood lute called the komuz. With nimble fingers, he plays an ancient tune mimicking the rhythm of galloping horses across the steppe. At this moment, the modern world feels very far away, and completely unnecessary."
        ]
      }
    ],
    fieldNotes: [
      { label: "Location", value: "Song-Kul Basin, 3,016m" },
      { label: "Seasonality", value: "Mid-June through September" },
      { label: "Equine Breed", value: "Autochthonous Kyrgyz Mountain Horse" },
      { label: "Pacing", value: "Relaxed walk on mountain passes, spirited canters on lake turf" }
    ]
  },
  {
    id: "what-to-expect-horseback-expedition",
    number: "02",
    slug: "what-to-expect-on-a-multi-day-horseback-expedition",
    title: "What to Expect on a Multi-Day Horseback Expedition",
    subtitle: "Practical wisdom, fitness essentials, and the mental shift required for remote mountain trekking.",
    date: "Early Summer 2026",
    readTime: "8 min read",
    author: "Marcus Thorne",
    authorRole: "Senior Equestrian Expedition Leader",
    category: "Trail Preparation",
    excerpt: "A mountain horseback expedition is neither an endurance race nor a passive tourist carriage ride. It is an active collaboration with an animal in high-altitude wilderness.",
    pullQuote: "You do not conquer the Tian Shan; you request passage through it. The mountain horse is your passport, and humility is your best gear.",
    content: [
      {
        sectionTitle: "The Physical Rhythm of the Trail",
        paragraphs: [
          "Many prospective riders ask us: 'How hard is it really?' The answer depends on your mental flexibility and core endurance. On a typical TAI TRAVEL expedition, you will spend between 4 and 6.5 hours in the saddle daily, divided into morning and afternoon stages with a leisurely picnic lunch by a glacier river.",
          "Because mountain terrain includes steep ascents and descents, your riding posture must be dynamic. On climbs, you lean forward out of the saddle to ease your horse's back; on steep descents, you sit deep and centered, allowing the horse to balance itself. On occasional loose rock sections, riders dismount to lead their horses on foot for fifteen to twenty minutes—a welcome stretch for both human and equine legs."
        ]
      },
      {
        sectionTitle: "Packing with Purpose: The Art of Layering",
        paragraphs: [
          "Mountain weather in Central Asia is famously mercurial. Within four hours, you may experience crisp morning frost (4°C), intense high-altitude sunshine (24°C), a sudden mountain shower, and a return to crystal-clear skies.",
          "Leave heavy cotton jeans at home. Invest in high-performance seamless riding tights or breathable breeches, merino wool base layers, a packable windproof/waterproof jacket with pit zips, and sturdy paddock boots with half chaps that you can comfortably hike in over mountain scree."
        ]
      },
      {
        sectionTitle: "The Shift in Awareness",
        paragraphs: [
          "By Day 3 of a multi-day ride, something subtle and profound occurs in almost every rider. The constant chatter of emails and deadlines fades, replaced by immediate sensory realities: the squeak of leather, the scent of wild mountain thyme crushed beneath hooves, the rhythm of your horse's breathing, and the shifting temperature of the wind.",
          "You begin to notice subtle changes in your horse's ears before you even see the herd of horses grazing on the opposite ridge. This heightened sensory immersion is the ultimate reward of equestrian travel."
        ]
      }
    ],
    fieldNotes: [
      { label: "Daily Saddle Time", value: "4 to 6.5 hours" },
      { label: "Optimal Fitness", value: "Regular riding + good core and leg endurance" },
      { label: "Essential Gear", value: "Fitted helmet, merino wool layers, riding boots with hiking tread" },
      { label: "Communication", value: "Off-grid sanctuary with satellite emergency support" }
    ]
  },
  {
    id: "life-in-the-jailoo-summer-pastures",
    number: "03",
    slug: "life-in-the-jailoo-summer-pastures-of-kyrgyzstan",
    title: "Life in the Jailoo: Summer Pastures of Kyrgyzstan",
    subtitle: "Understanding the ancient transhumance, felt architecture, and unbroken hospitality of nomadic pastoralists.",
    date: "Midsummer 2026",
    readTime: "5 min read",
    author: "Aida Kasymalieva",
    authorRole: "Cultural Anthropologist & Nomad Historian",
    category: "Culture & Living Heritage",
    excerpt: "Every June, thousands of Kyrgyz shepherd families leave their winter villages in the valleys to ascend into the high alpine pastures. To step into their yurt is to be embraced by an ancient code of hospitality.",
    pullQuote: "A guest arrives like a blessing from heaven, say the Kyrgyz elders. Even the most remote shepherd will slaughter his best sheep and brew his finest tea for a stranger arriving on horseback.",
    content: [
      {
        sectionTitle: "The Sacred Architecture of the Boz-Ui",
        paragraphs: [
          "The Kyrgyz yurt (boz-ui) is far more than a tent; it is a cosmological model of the universe and a masterpiece of portable engineering. Constructed from flexible willow laths (kerege), curved roof poles (uuk), and crowned by the sacred circular wooden ring (tunduk), the entire structure can be assembled or disassembled in under two hours without a single nail.",
          "The tunduk is so central to Kyrgyz identity that it forms the centerpiece of the national flag, representing the sun, family lineage, and the connection between the ancestors and the heavens above. Thick sheep felt covers provide natural insulation, keeping the interior cool under intense midday sun and remarkably warm when mountain frost coats the grass at dawn."
        ]
      },
      {
        sectionTitle: "The Dastarkhan: Where Strangers Become Kin",
        paragraphs: [
          "When you dismount at a yurt in the jailoo, etiquette is unhurried. You tie your horse to the hitching rail and are immediately invited inside with a warm greeting: 'Kosh kelinizder' (Welcome). You take off your boots, step onto the colorful felt shyrdak carpets, and take your seat around the dastarkhan.",
          "Food is offered before questions are asked. Fresh warm lepyoshka bread is broken by hand, golden butter and sweet mountain honey are passed around, and bowls of green tea or lightly effervescent kymyz (fermented mare's milk) are poured. In this space, language barriers melt away through smiles, gestures, and the universal language of shared bread."
        ]
      }
    ],
    fieldNotes: [
      { label: "Tradition", value: "Centuries-old seasonal transhumance (Jailoo)" },
      { label: "Architecture", value: "Willow wood & pressed sheep's wool felt boz-ui" },
      { label: "Symbolism", value: "The Tunduk (central roof ring) representing home & eternity" },
      { label: "Gastronomy", value: "Kymyz, fresh kaimak, wild mountain honey, oven-baked nan" }
    ]
  }
];

export const ARTICLE_TRANSLATIONS: Record<SupportedLanguage, Record<string, Partial<JournalArticle>>> = {
  en: {},
  ru: {
    'first-journey-nomadic-world': {
      title: 'Первое путешествие в кочевой мир Кыргызстана',
      subtitle: 'Что происходит, когда вы меняете офисные часы и заборы на надежного горного коня и просторы джайлоо.',
      category: 'Кочевое наследие',
      excerpt: 'Ничто в привычной европейской жизни не готовит вас к полному отсутствию заборов. В кыргызских высокогорьях просторы тянутся на десятки километров без единого ограждения.',
      pullQuote: 'На Западе лошадь — дорогое увлечение или спорт. В Кыргызстане конь — продолжение души человека, верный спутник на горных тропах.'
    },
    'what-to-expect-horseback-expedition': {
      title: 'Чего ожидать от многодневного конного похода',
      subtitle: 'Практические советы, правила физподготовки и особенности высотных горных переходов.',
      category: 'Подготовка к тропе',
      excerpt: 'Конная экспедиция в горах — это не спортивная гонка и не расслабленная прогулка в экипаже. Это живое партнерство со своим конем в дикой природе.',
      pullQuote: 'Тянь-Шань нельзя покорить; горы можно лишь просить пропустить вас. Конь — ваш проводник, а скромность — лучшая экипировка.'
    },
    'life-in-the-jailoo-summer-pastures': {
      title: 'Жизнь на джайлоо: летние пастбища Кыргызстана',
      subtitle: 'Древние традиции кочевий, архитектура юрты и неподдельное гостеприимство чабанов.',
      category: 'Культура и традиции',
      excerpt: 'Каждый июнь тысячи чабанских семей поднимаются на высокогорные пастбища. Переступить порог их юрты — значит соприкоснуться с древним законом священного гостеприимства.',
      pullQuote: 'Мейман — гость от Бога, говорят кыргызские аксакалы. Даже в самом отдаленном урочище чабан накроет лучший дастархан для всадника.'
    }
  },
  de: {
    'first-journey-nomadic-world': {
      title: 'Die erste Reise in die Welt der Nomaden Kirgisistans',
      subtitle: 'Was geschieht, wenn man Zäune und Termine gegen ein trittsicheres Bergpferd und weite Sommerweiden eintauscht.',
      category: 'Nomadisches Erbe',
      excerpt: 'Nichts im modernen Alltag bereitet einen auf die vollkommene Abwesenheit von Zäunen vor. In den Hochebenen Kirgisistans rollt die Landschaft endlos dahin.',
      pullQuote: 'Im Westen ist Reiten oft ein kostspieliges Hobby. In Kirgisistan ist das Pferd ein Teil der Seele.'
    },
    'what-to-expect-horseback-expedition': {
      title: 'Was Sie auf einer Mehrtages-Reitexpedition erwartet',
      subtitle: 'Praktische Ratschläge, Konditionsanforderungen und die mentale Vorbereitung auf Hochgebirgsritte.',
      category: 'Routenvorbereitung',
      excerpt: 'Ein Gebirgsritt ist weder ein Rennturnier noch eine Kutschfahrt. Es ist eine intensive Partnerschaft mit einem Pferd in wilder Natur.',
      pullQuote: 'Man bezwingt den Tian Shan nicht; man bittet um Durchlass. Das Pferd ist Ihr Wegweiser.'
    },
    'life-in-the-jailoo-summer-pastures': {
      title: 'Leben im Dschailoo: Die Sommerweiden Kirgisistans',
      subtitle: 'Überlieferte Almwirtschaft, die Architektur der Jurte und die Gastfreundschaft der Nomaden.',
      category: 'Kultur & Lebensart',
      excerpt: 'Jeden Juni ziehen die Hirtenfamilien hinauf in die alpinen Weiden. Eine Jurte zu betreten bedeutet, Teil uralter Gastfreundschaft zu werden.',
      pullQuote: 'Ein Gast ist wie ein Segen des Himmels, sagen die Ältesten.'
    }
  },
  ja: {
    'first-journey-nomadic-world': {
      title: 'キルギス遊牧世界への最初の旅立ち',
      subtitle: '時計と柵を手放し、頼もしい山岳馬とともに果てしない高山草原へ。',
      category: '遊牧の遺産',
      excerpt: '現代社会のどこを探しても、柵がひとつもない広大な大地の広がりには敵いません。キルギスの高地では、地平線まで遮るものがありません。',
      pullQuote: 'キルギスにおいて、馬は魂の延長であり、高山峠を越えるための唯一無二の相棒です。'
    },
    'what-to-expect-horseback-expedition': {
      title: '数日間にわたる山岳外乗遠征の心得',
      subtitle: '実践的なアドバイス、必要な体力、高山トレッキングへの心構え。',
      category: 'トレイル準備',
      excerpt: '山岳乗馬遠征は耐久レースでも、観光馬車でもありません。高山の大自然の中で馬と呼吸を合わせる共同作業です。',
      pullQuote: '天山山脈を「征服」することはできません。敬意を持って通り抜けさせてもらうのです。'
    },
    'life-in-the-jailoo-summer-pastures': {
      title: 'ジャイローでの暮らし：キルギスの夏の放牧地',
      subtitle: '古来の垂直遊牧、フェルトの建築美、そして途切れることのない温かい歓待。',
      category: '文化と生きた遺産',
      excerpt: '毎年6月、何千もの羊飼い一家が高山草原へと登ります。ユルタに足を踏み入れることは、古からの歓待の掟に包まれることです。',
      pullQuote: '客人は天からの授かりもの。遠くから訪れた馬上の旅人に、最も温かいもてなしを差し出します。'
    }
  },
  ky: {
    'first-journey-nomadic-world': {
      title: 'Кыргызстандын көчмөн дүйнөсүнө алгачкы сапар',
      subtitle: 'Шаар турмушун жана тосмолорду таштап, чыдамкай тоо аты менен кең жайлоого чыкканда.',
      category: 'Көчмөн мурасы',
      excerpt: 'Кыргызстандын бийик тоолорунда ондогон чакырымдар бою эч бир тосмо жок, чексиз эркиндик өкүм сүрөт.',
      pullQuote: 'Батышта ат минүү — кымбат эрмек же спорт. Ал эми кыргызда ат — адамдын канаты жана тоо сырын чечкен ишенимдүү дос.'
    },
    'what-to-expect-horseback-expedition': {
      title: 'Бир нече күндүк ат сапарында эмнелерди билүү керек',
      subtitle: 'Тоо жүрүшүндөгү керектүү кеңештер, ден соолук жана бийиктикке даярдык.',
      category: 'Сапарга даярдык',
      excerpt: 'Тоодогу ат экспедициясы — шашылыш жарыш эмес. Бул табият кучагында ат менен бир бүтүнгө айлануу сапары.',
      pullQuote: 'Теңир-Тоону багындыруу мүмкүн эмес; андан өтүүгө уруксат гана суроо керек.'
    },
    'life-in-the-jailoo-summer-pastures': {
      title: 'Жайлоодогу жашоо: Кыргызстандын жайкы конуштары',
      subtitle: 'Көчмөн малчылардын байыркы салты, боз үй архитектурасы жана ак пейил меймандостугу.',
      category: 'Маданият жана мурас',
      excerpt: 'Жайкысын миңдеген чабан үй-бүлөлөрү бийик жайлоолорго чыгышат. Боз үйгө баш баккан ар бир адам байыркы меймандостукту сезет.',
      pullQuote: 'Конок — Кудайдын белеги, дешет аксакалдар. Алыстан атчан келген мейманга ар дайым дасторкон жайылат.'
    }
  }
};

export function getArticles(lang: SupportedLanguage = 'en'): JournalArticle[] {
  const trans = ARTICLE_TRANSLATIONS[lang] || {};
  return JOURNAL_ARTICLES.map((baseArticle) => {
    const t = trans[baseArticle.id];
    if (!t) return baseArticle;
    return {
      ...baseArticle,
      title: t.title || baseArticle.title,
      subtitle: t.subtitle || baseArticle.subtitle,
      excerpt: t.excerpt || baseArticle.excerpt,
      category: t.category || baseArticle.category,
      pullQuote: t.pullQuote || baseArticle.pullQuote,
    };
  });
}

export function getArticleById(id: string, lang: SupportedLanguage = 'en'): JournalArticle | undefined {
  const articles = getArticles(lang);
  return articles.find((a) => a.id === id);
}

