import React from 'react';

// Authentic Kyrgyz Shyrdak (felt rug) ornamental geometric pattern divider
export const ShyrdakDivider: React.FC<{ className?: string; color?: string }> = ({
  className = "w-24 h-4 mx-auto my-6 text-[#A58B61]",
}) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-[1px] w-8 bg-current opacity-30"></span>
      <svg
        viewBox="0 0 48 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-4 opacity-75"
        aria-hidden="true"
      >
        {/* Kyrgyz "Kochkor Muyuz" (Ram's Horn) stylized ancient nomadic motif */}
        <path d="M12 18C12 12 6 8 4 12C2 16 6 20 10 20C18 20 20 6 24 6C28 6 30 20 38 20C42 20 46 16 44 12C42 8 36 12 36 18" />
        <circle cx="24" cy="14" r="1.5" fill="currentColor" />
      </svg>
      <span className="h-[1px] w-8 bg-current opacity-30"></span>
    </div>
  );
};

// Cinematic Hero Art - Tian Shan mountain ridges, golden atmospheric backlight, eagle, and riders
export const KyrgyzMountainHeroArtwork: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#1A2621] ${className}`}>
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tian Shan mountains of Kyrgyzstan with horseback riders on high ridge"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#121D18" />
            <stop offset="35%" stopColor="#1E3027" />
            <stop offset="70%" stopColor="#3A4D41" />
            <stop offset="90%" stopColor="#8A7B5F" />
            <stop offset="100%" stopColor="#C4B494" />
          </linearGradient>

          <linearGradient id="peakDistant" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EAE5D9" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#B5AFA2" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#2E3D35" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="ridgeFar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A5D52" />
            <stop offset="100%" stopColor="#22322A" />
          </linearGradient>

          <linearGradient id="ridgeMid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#32453B" />
            <stop offset="100%" stopColor="#1A2621" />
          </linearGradient>

          <linearGradient id="ridgeFore" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#24342B" />
            <stop offset="100%" stopColor="#141E19" />
          </linearGradient>

          <radialGradient id="sunGlow" cx="62%" cy="42%" r="45%">
            <stop offset="0%" stopColor="#FFF4D9" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#C8A873" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1E3027" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky */}
        <rect width="1600" height="900" fill="url(#skyGrad)" />
        <rect width="1600" height="900" fill="url(#sunGlow)" />

        {/* Soaring Golden Eagle */}
        <g transform="translate(680, 240) scale(0.65)" opacity="0.8">
          <path
            d="M0 8 C15 -4, 45 -8, 70 2 C55 10, 40 18, 30 24 C20 18, 10 12, 0 8 Z M70 2 C95 -8, 125 -4, 140 8 C130 12, 120 18, 110 24 C100 18, 85 10, 70 2 Z"
            fill="#18231D"
          />
          <ellipse cx="70" cy="14" rx="7" ry="12" fill="#18231D" />
          <path d="M66 22 L70 34 L74 22 Z" fill="#18231D" />
        </g>

        {/* Distant Snowcapped Tian Shan Peaks (4,500m+) */}
        <polygon
          points="80,520 280,310 390,390 540,260 690,410 820,290 1010,430 1180,240 1340,380 1520,270 1600,340 1600,750 0,750 0,550"
          fill="url(#peakDistant)"
        />

        {/* Mid-range Ridge */}
        <path
          d="M0 580 Q 240 460, 480 520 T 960 480 T 1400 460 Q 1520 480, 1600 520 L 1600 900 L 0 900 Z"
          fill="url(#ridgeFar)"
          opacity="0.85"
        />

        {/* Closer mountain ridge with subalpine textures */}
        <path
          d="M0 640 C 220 540, 420 620, 680 570 C 920 520, 1150 630, 1380 580 C 1490 550, 1550 570, 1600 600 L 1600 900 L 0 900 Z"
          fill="url(#ridgeMid)"
        />

        {/* Foreground Ridge & Trail where riders travel */}
        <path
          d="M-40 760 C 260 670, 520 740, 790 690 C 1080 640, 1340 720, 1640 670 L 1640 920 L -40 920 Z"
          fill="url(#ridgeFore)"
        />

        {/* Horseback Expedition Riders Silhouette traversing the ridge */}
        <g transform="translate(480, 622) scale(0.68)">
          {/* Lead Rider on Kyrgyz Mountain Horse */}
          <g>
            {/* Horse body & legs */}
            <path
              d="M70 75 C60 60, 45 60, 30 70 C15 72, 5 80, -10 75 C-18 72, -25 80, -30 90 C-35 105, -30 120, -18 126 C-10 130, 10 132, 35 130 C55 128, 75 125, 95 118 C105 110, 108 95, 98 84 C92 78, 80 76, 70 75 Z"
              fill="#0F1813"
            />
            {/* Neck and Head */}
            <path
              d="M80 82 C90 70, 96 45, 92 30 C90 20, 84 10, 88 5 C91 2, 98 0, 102 5 C108 12, 108 24, 115 32 C120 38, 128 42, 126 50 C122 58, 110 65, 98 75 C90 82, 85 86, 80 82 Z"
              fill="#0F1813"
            />
            {/* Ears */}
            <polygon points="98,4 102,-4 105,4" fill="#0F1813" />
            <polygon points="104,6 108,0 110,8" fill="#0F1813" />
            {/* Forelegs */}
            <path d="M82 120 L86 175 L92 178 L90 120 Z" fill="#0F1813" />
            <path d="M68 122 L72 165 L66 170 L62 122 Z" fill="#0F1813" />
            {/* Hindlegs */}
            <path d="M-15 124 L-22 172 L-16 176 L-8 125 Z" fill="#0F1813" />
            <path d="M-2 126 L2 168 L8 171 L6 126 Z" fill="#0F1813" />
            {/* Mane & Tail */}
            <path d="M-28 92 C-45 110, -50 145, -42 165 C-36 150, -32 130, -25 105 Z" fill="#0F1813" />
            <path d="M90 25 C88 38, 86 52, 82 65" stroke="#0F1813" strokeWidth="3" />
            {/* Rider */}
            <ellipse cx="44" cy="52" rx="14" ry="18" fill="#0F1813" />
            <circle cx="48" cy="24" r="9" fill="#0F1813" />
            {/* Traditional Kalpak / Hat */}
            <path d="M40 18 L48 8 L56 18 Z" fill="#0F1813" />
            {/* Rider's Legs with stirrup */}
            <path d="M36 68 L42 108 L52 112" stroke="#0F1813" strokeWidth="8" strokeLinecap="round" />
            {/* Reins */}
            <path d="M52 50 Q 80 65, 115 50" stroke="#0F1813" strokeWidth="2" fill="none" />
          </g>

          {/* Second Rider behind */}
          <g transform="translate(-110, -8) scale(0.88)">
            <path
              d="M70 75 C60 60, 45 60, 30 70 C15 72, 5 80, -10 75 C-18 72, -25 80, -30 90 C-35 105, -30 120, -18 126 C-10 130, 10 132, 35 130 C55 128, 75 125, 95 118 C105 110, 108 95, 98 84 C92 78, 80 76, 70 75 Z"
              fill="#0F1813"
            />
            <path
              d="M80 82 C90 70, 96 45, 92 30 C90 20, 84 10, 88 5 C91 2, 98 0, 102 5 C108 12, 108 24, 115 32 C120 38, 128 42, 126 50 C122 58, 110 65, 98 75 C90 82, 85 86, 80 82 Z"
              fill="#0F1813"
            />
            <polygon points="98,4 102,-4 105,4" fill="#0F1813" />
            <path d="M82 120 L86 172 L92 175 L90 120 Z" fill="#0F1813" />
            <path d="M-15 124 L-22 170 L-16 174 L-8 125 Z" fill="#0F1813" />
            <path d="M-28 92 C-45 110, -50 145, -42 165 Z" fill="#0F1813" />
            <ellipse cx="44" cy="52" rx="13" ry="17" fill="#0F1813" />
            <circle cx="48" cy="25" r="8.5" fill="#0F1813" />
            <path d="M40 19 L48 9 L56 19 Z" fill="#0F1813" />
            <path d="M36 68 L42 108 L52 112" stroke="#0F1813" strokeWidth="7" strokeLinecap="round" />
            <path d="M52 50 Q 80 65, 115 50" stroke="#0F1813" strokeWidth="2" fill="none" />
          </g>

          {/* Third Pack Horse behind */}
          <g transform="translate(-210, -14) scale(0.8)">
            <path
              d="M70 75 C60 60, 45 60, 30 70 C15 72, 5 80, -10 75 C-18 72, -25 80, -30 90 C-35 105, -30 120, -18 126 C-10 130, 10 132, 35 130 C55 128, 75 125, 95 118 C105 110, 108 95, 98 84 C92 78, 80 76, 70 75 Z"
              fill="#0F1813"
            />
            <path
              d="M80 82 C90 70, 96 45, 92 30 C90 20, 84 10, 88 5 C91 2, 98 0, 102 5 C108 12, 108 24, 115 32 C120 38, 128 42, 126 50 C122 58, 110 65, 98 75 C90 82, 85 86, 80 82 Z"
              fill="#0F1813"
            />
            <polygon points="98,4 102,-4 105,4" fill="#0F1813" />
            <path d="M82 120 L86 170 L92 173 L90 120 Z" fill="#0F1813" />
            <path d="M-15 124 L-22 168 L-16 172 L-8 125 Z" fill="#0F1813" />
            <path d="M-28 92 C-45 110, -50 145, -42 165 Z" fill="#0F1813" />
            {/* Pack Saddle Duffels */}
            <rect x="25" y="55" width="40" height="30" rx="6" fill="#0F1813" />
            <rect x="15" y="65" width="20" height="24" rx="4" fill="#0F1813" />
            {/* Lead line to horse ahead */}
            <path d="M120 50 Q 150 40, 180 70" stroke="#0F1813" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          </g>
        </g>

        {/* Subtle Atmospheric Mist overlay in the valley */}
        <ellipse cx="800" cy="620" rx="600" ry="40" fill="#EAE5D9" opacity="0.12" filter="blur(20px)" />
      </svg>
    </div>
  );
};

// Song-Kul Lake & Traditional Yurt Artwork
export const SongKulYurtArtwork: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#243A30] ${className}`}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Lake Song-Kul with traditional white felt yurt and Kyrgyz horses on emerald pasture"
      >
        <defs>
          <linearGradient id="songKulSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2A4338" />
            <stop offset="50%" stopColor="#4A6A5B" />
            <stop offset="85%" stopColor="#C4B79A" />
            <stop offset="100%" stopColor="#E8DFCE" />
          </linearGradient>

          <linearGradient id="lakeWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#325E59" />
            <stop offset="50%" stopColor="#254B46" />
            <stop offset="100%" stopColor="#1E3F3B" />
          </linearGradient>

          <linearGradient id="jailooGrass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#476249" />
            <stop offset="100%" stopColor="#263A2B" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="800" height="340" fill="url(#songKulSky)" />

        {/* Soft mountain ranges on opposite lake shore */}
        <polygon points="0,260 140,190 280,230 420,170 560,220 710,180 800,210 800,340 0,340" fill="#3D5347" opacity="0.75" />
        <polygon points="0,280 180,240 340,270 510,230 680,265 800,240 800,340 0,340" fill="#2D4036" />

        {/* Song-Kul Lake Waters (3,016m) */}
        <rect y="310" width="800" height="90" fill="url(#lakeWater)" />
        {/* Subtle water ripple reflections */}
        <ellipse cx="400" cy="340" rx="350" ry="12" fill="#EAE5D9" opacity="0.15" />
        <ellipse cx="450" cy="360" rx="280" ry="8" fill="#EAE5D9" opacity="0.1" />

        {/* Summer Jailoo Shore Pasture */}
        <path
          d="M0 380 Q 220 360, 440 375 T 800 365 L 800 600 L 0 600 Z"
          fill="url(#jailooGrass)"
        />

        {/* Traditional Kyrgyz Felt Yurt (Boz-Ui) */}
        <g transform="translate(460, 360) scale(1.15)">
          {/* Base Wall (Kerege felt covering) */}
          <path d="M20 70 L20 120 L160 120 L160 70 Z" fill="#EAE4D5" stroke="#243A30" strokeWidth="1.5" />
          {/* Domed Roof (Uuk felt covering) */}
          <path d="M12 72 Q 90 12, 168 72 Z" fill="#F4EFE3" stroke="#243A30" strokeWidth="1.5" />
          {/* Sacred Tunduk (Roof Ring) */}
          <ellipse cx="90" cy="22" rx="22" ry="7" fill="#8C734B" stroke="#20221F" strokeWidth="1.5" />
          <line x1="90" y1="15" x2="90" y2="29" stroke="#EAE4D5" strokeWidth="1.2" />
          <line x1="72" y1="22" x2="108" y2="22" stroke="#EAE4D5" strokeWidth="1.2" />
          {/* Traditional red/brown felt belt (Kur) with geometric embroidery */}
          <path d="M16 70 L164 70 L164 78 L16 78 Z" fill="#8C3A27" />
          {/* Woven braided ropes securing the felt against mountain winds */}
          <path d="M90 22 L24 70" stroke="#7A664B" strokeWidth="1.2" />
          <path d="M90 22 L60 70" stroke="#7A664B" strokeWidth="1.2" />
          <path d="M90 22 L120 70" stroke="#7A664B" strokeWidth="1.2" />
          <path d="M90 22 L156 70" stroke="#7A664B" strokeWidth="1.2" />
          {/* Wooden Doorway */}
          <rect x="76" y="78" width="28" height="42" fill="#5A3E28" rx="1" />
          <line x1="90" y1="78" x2="90" y2="120" stroke="#2E1F14" strokeWidth="1.5" />
          {/* Chimney Pipe with delicate warmth curl */}
          <line x1="68" y1="14" x2="68" y2="-12" stroke="#333" strokeWidth="3" />
          <path d="M68 -12 Q 62 -25, 74 -35 Q 82 -42, 78 -50" stroke="#FFF" strokeWidth="1.5" fill="none" opacity="0.35" />
        </g>

        {/* Kyrgyz Mountain Horse Grazing quietly on the jailoo turf */}
        <g transform="translate(180, 410) scale(0.9)">
          <path
            d="M60 55 C50 42, 35 42, 20 52 C5 54, -5 62, -20 57 C-28 54, -35 62, -40 72 C-45 87, -40 102, -28 108 C-20 112, 0 114, 25 112 C45 110, 65 107, 85 100 C95 92, 98 77, 88 66 C82 60, 70 58, 60 55 Z"
            fill="#1A2820"
          />
          {/* Head grazing downward */}
          <path
            d="M70 62 C80 68, 88 85, 96 102 C100 110, 106 118, 114 122 C118 124, 122 120, 120 115 C116 102, 108 90, 98 76 C90 64, 82 58, 70 62 Z"
            fill="#1A2820"
          />
          {/* Legs */}
          <path d="M72 102 L75 145 L80 148 L78 102 Z" fill="#1A2820" />
          <path d="M58 104 L62 142 L67 145 L64 104 Z" fill="#1A2820" />
          <path d="M-18 106 L-24 144 L-19 147 L-12 106 Z" fill="#1A2820" />
          <path d="M-4 107 L0 142 L5 145 L2 107 Z" fill="#1A2820" />
          {/* Tail */}
          <path d="M-38 72 C-52 90, -56 125, -48 142 Z" fill="#1A2820" />
        </g>

        {/* Wild mountain flowers scattered in foreground */}
        <circle cx="120" cy="520" r="2.5" fill="#E8D572" opacity="0.8" />
        <circle cx="160" cy="540" r="2" fill="#E8D572" opacity="0.7" />
        <circle cx="280" cy="510" r="3" fill="#D98282" opacity="0.75" />
        <circle cx="340" cy="550" r="2.5" fill="#99BBE8" opacity="0.85" />
        <circle cx="410" cy="530" r="2" fill="#E8D572" opacity="0.7" />
        <circle cx="680" cy="520" r="3" fill="#FFF" opacity="0.8" />
      </svg>
    </div>
  );
};

// Tian Shan High Altitude Glacial Pass Artwork
export const TianShanPassArtwork: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#1D2924] ${className}`}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tian Shan glacial pass in Kyrgyzstan with expedition riders on rocky trail"
      >
        <defs>
          <linearGradient id="tsSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B2E27" />
            <stop offset="60%" stopColor="#3B5A4E" />
            <stop offset="100%" stopColor="#D2C8B5" />
          </linearGradient>

          <linearGradient id="glacialSnow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5F8FA" />
            <stop offset="60%" stopColor="#C4D7E0" />
            <stop offset="100%" stopColor="#5B767E" />
          </linearGradient>
        </defs>

        {/* Sky */}
        <rect width="800" height="600" fill="url(#tsSky)" />

        {/* Towering 5,000m Glacial Crag */}
        <polygon points="120,420 320,80 460,220 580,120 740,380 800,420 800,600 0,600 0,440" fill="#24332C" />
        {/* Hanging Glacier Snow Tongue */}
        <polygon points="320,80 290,160 330,220 370,180 320,80" fill="url(#glacialSnow)" />
        <polygon points="580,120 550,200 610,240 640,190 580,120" fill="url(#glacialSnow)" />

        {/* Midground Rocky Ravine */}
        <polygon points="0,320 220,440 450,380 680,480 800,410 800,600 0,600" fill="#1C2722" />

        {/* Craggy Trail in Foreground */}
        <path d="M-20 480 Q 240 460, 520 530 T 820 490 L 820 620 L -20 620 Z" fill="#141E1A" />

        {/* Mountain Stream (Glacial Melt) */}
        <path d="M120 460 Q 220 520, 280 600" stroke="#7FB5A8" strokeWidth="5" fill="none" opacity="0.6" />

        {/* Expedition Rider & Pack Horse ascending stone trail */}
        <g transform="translate(420, 440) scale(0.65)">
          {/* Mountain Horse */}
          <path
            d="M70 75 C60 60, 45 60, 30 70 C15 72, 5 80, -10 75 C-18 72, -25 80, -30 90 C-35 105, -30 120, -18 126 C-10 130, 10 132, 35 130 C55 128, 75 125, 95 118 C105 110, 108 95, 98 84 C92 78, 80 76, 70 75 Z"
            fill="#0A100D"
          />
          <path
            d="M80 82 C90 70, 96 45, 92 30 C90 20, 84 10, 88 5 C91 2, 98 0, 102 5 C108 12, 108 24, 115 32 C120 38, 128 42, 126 50 C122 58, 110 65, 98 75 Z"
            fill="#0A100D"
          />
          <path d="M82 120 L86 175 L90 120 Z" fill="#0A100D" />
          <path d="M-15 124 L-22 172 L-8 125 Z" fill="#0A100D" />
          {/* Rider */}
          <ellipse cx="44" cy="52" rx="14" ry="18" fill="#0A100D" />
          <circle cx="48" cy="24" r="9" fill="#0A100D" />
          <path d="M36 68 L42 108 L52 112" stroke="#0A100D" strokeWidth="8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

// Nomadic Culture & Hospitality Artwork
export const NomadicHospitalityArtwork: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#2C2117] ${className}`}>
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Traditional Kyrgyz nomadic hospitality inside a felt yurt with samovar and shyrdak carpet"
      >
        <defs>
          <radialGradient id="hearthGlow" cx="50%" cy="55%" r="45%">
            <stop offset="0%" stopColor="#FFDE99" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#C97B38" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1C140E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient warm yurt interior */}
        <rect width="800" height="600" fill="#241B13" />
        <rect width="800" height="600" fill="url(#hearthGlow)" />

        {/* Curved Willow Wall Slats (Kerege) */}
        <g stroke="#3D2B1E" strokeWidth="2.5" opacity="0.35">
          <line x1="0" y1="50" x2="800" y2="450" />
          <line x1="0" y1="150" x2="800" y2="550" />
          <line x1="0" y1="250" x2="800" y2="650" />
          <line x1="800" y1="50" x2="0" y2="450" />
          <line x1="800" y1="150" x2="0" y2="550" />
          <line x1="800" y1="250" x2="0" y2="650" />
        </g>

        {/* Roof Ring (Tunduk) at top letting in morning blue mountain light */}
        <ellipse cx="400" cy="40" rx="200" ry="40" fill="#435E54" opacity="0.8" />
        <line x1="400" y1="0" x2="400" y2="80" stroke="#8A6B48" strokeWidth="4" />
        <line x1="200" y1="40" x2="600" y2="40" stroke="#8A6B48" strokeWidth="4" />

        {/* Shyrdak Carpet (Traditional geometric felt rug on floor) */}
        <polygon points="60,420 740,420 800,600 0,600" fill="#6B291B" />
        <polygon points="120,440 680,440 730,580 70,580" fill="#9C442C" />
        {/* Shyrdak Ram-Horn Patterns */}
        <path
          d="M200 480 Q 230 450, 260 480 T 320 480 M480 480 Q 510 450, 540 480 T 600 480"
          stroke="#E5CE9F"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* Low Wooden Dastarkhan (Dining Table) */}
        <ellipse cx="400" cy="460" rx="190" ry="45" fill="#422919" stroke="#5A3A25" strokeWidth="3" />
        <ellipse cx="400" cy="455" rx="180" ry="40" fill="#523420" />

        {/* Traditional Polished Brass/Copper Samovar */}
        <g transform="translate(370, 310) scale(1.1)">
          {/* Base & Feet */}
          <rect x="18" y="100" width="24" height="6" fill="#755225" rx="2" />
          <rect x="26" y="90" width="8" height="10" fill="#996D31" />
          {/* Main Urn Body */}
          <path d="M12 40 Q 5 70, 18 90 L 42 90 Q 55 70, 48 40 Z" fill="#C99849" />
          {/* Lid & Crown */}
          <ellipse cx="30" cy="38" rx="18" ry="6" fill="#A87932" />
          <rect x="25" y="24" width="10" height="14" fill="#C99849" />
          <ellipse cx="30" cy="24" rx="7" ry="3" fill="#D9A95B" />
          {/* Spigot / Tap */}
          <path d="M12 75 L-4 75 L-4 82" stroke="#755225" strokeWidth="2.5" fill="none" />
          {/* Side Handles */}
          <path d="M12 50 Q 0 58, 12 66" stroke="#755225" strokeWidth="2.5" fill="none" />
          <path d="M48 50 Q 60 58, 48 66" stroke="#755225" strokeWidth="2.5" fill="none" />
          {/* Gentle Steam Rising */}
          <path d="M30 20 Q 24 5, 34 -10 Q 42 -22, 36 -35" stroke="#FFF" strokeWidth="1.5" fill="none" opacity="0.35" />
        </g>

        {/* Kyrgyz Bread (Nan / Lepyoshka) with stamped circular center pattern */}
        <g transform="translate(270, 440) scale(0.85)">
          <ellipse cx="40" cy="25" rx="28" ry="14" fill="#D99B52" stroke="#B87B34" strokeWidth="2" />
          <ellipse cx="40" cy="25" rx="14" ry="7" fill="#C7873D" />
          <circle cx="40" cy="25" r="3" fill="#7A4C1A" />
        </g>

        {/* Ceramic Tea Bowl (Piala) */}
        <g transform="translate(480, 445) scale(0.9)">
          <path d="M10 15 Q 12 32, 28 32 Q 44 32, 46 15 Z" fill="#EAE5D9" stroke="#243A30" strokeWidth="1.5" />
          {/* Green tea surface inside */}
          <ellipse cx="28" cy="16" rx="17" ry="5" fill="#6B8563" />
        </g>
      </svg>
    </div>
  );
};

// Dramatic Sunset Mountain Crest Expedition Artwork
export const SunsetRidersArtwork: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#241712] ${className}`}>
      <svg
        viewBox="0 0 1600 700"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Silhouettes of horseback riders on mountain crest at golden sunset"
      >
        <defs>
          <linearGradient id="sunsetSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E1318" />
            <stop offset="35%" stopColor="#4A1E1D" />
            <stop offset="65%" stopColor="#964326" />
            <stop offset="85%" stopColor="#DE8638" />
            <stop offset="100%" stopColor="#FAD889" />
          </linearGradient>

          <radialGradient id="sunDisc" cx="50%" cy="80%" r="50%">
            <stop offset="0%" stopColor="#FFF3C4" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#E59B43" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1E1318" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky */}
        <rect width="1600" height="700" fill="url(#sunsetSky)" />
        <rect width="1600" height="700" fill="url(#sunDisc)" />

        {/* Deep Mountain Valley Layers */}
        <polygon points="0,520 280,440 600,480 940,420 1320,490 1600,440 1600,700 0,700" fill="#3D1C19" opacity="0.6" />
        <polygon points="0,580 340,510 720,560 1140,500 1600,560 1600,700 0,700" fill="#241113" opacity="0.8" />

        {/* High Mountain Ridge Line */}
        <path
          d="M0 590 Q 420 540, 840 560 T 1600 530 L 1600 700 L 0 700 Z"
          fill="#110809"
        />

        {/* Rider Silhouettes against glowing sunset */}
        <g transform="translate(740, 480) scale(0.72)">
          {/* Horse 1 */}
          <g>
            <path
              d="M70 75 C60 60, 45 60, 30 70 C15 72, 5 80, -10 75 C-18 72, -25 80, -30 90 C-35 105, -30 120, -18 126 C-10 130, 10 132, 35 130 C55 128, 75 125, 95 118 C105 110, 108 95, 98 84 C92 78, 80 76, 70 75 Z"
              fill="#080304"
            />
            <path
              d="M80 82 C90 70, 96 45, 92 30 C90 20, 84 10, 88 5 C91 2, 98 0, 102 5 C108 12, 108 24, 115 32 C120 38, 128 42, 126 50 C122 58, 110 65, 98 75 Z"
              fill="#080304"
            />
            <path d="M82 120 L86 175 L90 120 Z" fill="#080304" />
            <path d="M-15 124 L-22 172 L-8 125 Z" fill="#080304" />
            {/* Rider pointing into the vast valley */}
            <ellipse cx="44" cy="52" rx="14" ry="18" fill="#080304" />
            <circle cx="48" cy="24" r="9" fill="#080304" />
            <path d="M40 18 L48 8 L56 18 Z" fill="#080304" />
            <path d="M36 68 L42 108 L52 112" stroke="#080304" strokeWidth="8" strokeLinecap="round" />
            {/* Arm raised towards the sunset */}
            <path d="M52 46 L82 32" stroke="#080304" strokeWidth="5" strokeLinecap="round" />
          </g>

          {/* Horse 2 */}
          <g transform="translate(140, 12) scale(0.92)">
            <path
              d="M70 75 C60 60, 45 60, 30 70 C15 72, 5 80, -10 75 C-18 72, -25 80, -30 90 C-35 105, -30 120, -18 126 C-10 130, 10 132, 35 130 C55 128, 75 125, 95 118 C105 110, 108 95, 98 84 C92 78, 80 76, 70 75 Z"
              fill="#080304"
            />
            <path
              d="M80 82 C90 70, 96 45, 92 30 C90 20, 84 10, 88 5 C91 2, 98 0, 102 5 C108 12, 108 24, 115 32 C120 38, 128 42, 126 50 C122 58, 110 65, 98 75 Z"
              fill="#080304"
            />
            <path d="M82 120 L86 175 L90 120 Z" fill="#080304" />
            <path d="M-15 124 L-22 172 L-8 125 Z" fill="#080304" />
            <ellipse cx="44" cy="52" rx="14" ry="18" fill="#080304" />
            <circle cx="48" cy="24" r="9" fill="#080304" />
            <path d="M36 68 L42 108 L52 112" stroke="#080304" strokeWidth="8" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};
