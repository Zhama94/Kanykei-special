import React from 'react';
import { ShyrdakDivider, SongKulYurtArtwork } from './KyrgyzArtAssets';
import { TranslationStrings } from '../data/translations';

interface BrandIntroProps {
  strings: TranslationStrings;
  onExplorePhilosophy: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ strings, onExplorePhilosophy }) => {
  const pillars = [
    {
      num: "01",
      title: strings.intro.pillars.smallGroups.title,
      desc: strings.intro.pillars.smallGroups.desc,
    },
    {
      num: "02",
      title: strings.intro.pillars.localKnowledge.title,
      desc: strings.intro.pillars.localKnowledge.desc,
    },
    {
      num: "03",
      title: strings.intro.pillars.horses.title,
      desc: strings.intro.pillars.horses.desc,
    },
    {
      num: "04",
      title: strings.intro.pillars.remote.title,
      desc: strings.intro.pillars.remote.desc,
    },
    {
      num: "05",
      title: strings.intro.pillars.hospitality.title,
      desc: strings.intro.pillars.hospitality.desc,
    },
  ];

  return (
    <section id="philosophy" className="py-28 sm:py-36 bg-[#F5F1E8] text-[#20221F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Split Layout: Narrative on the Left, Artwork on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-medium text-[#A58B61] mb-4">
              {strings.intro.kicker}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#20221F] leading-[1.12] mb-8 text-balance">
              {strings.intro.headline}
            </h2>

            <div className="space-y-6 text-stone-700 font-sans text-base sm:text-lg leading-relaxed editorial-measure">
              <p className="font-serif text-xl sm:text-2xl text-[#243A30] italic leading-snug">
                “{strings.intro.leadParagraph}”
              </p>

              <p className="text-stone-600 font-light">
                {strings.intro.bodyParagraph}
              </p>
            </div>

            <div className="pt-6">
              <ShyrdakDivider className="w-20 my-4 text-[#A58B61]" />
            </div>
          </div>

          {/* Right Column: Visual Artwork Canvas & Curatorial Caption */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xs overflow-hidden shadow-xl border border-[#C9C2B5]/60 aspect-[4/3] bg-[#1A2621]">
              <SongKulYurtArtwork className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white">
                <span className="text-[11px] uppercase tracking-widest text-[#E5DFC8] font-mono">
                  {strings.intro.captionTag}
                </span>
                <p className="text-sm font-serif italic text-white/95 mt-1">
                  {strings.intro.captionText}
                </p>
              </div>
            </div>

            <p className="text-xs font-serif italic text-[#78716C] mt-3">
              {strings.intro.figNote}
            </p>
          </div>
        </div>

        {/* The 5 Key Hallmarks Grid */}
        <div className="mt-24 pt-16 border-t border-[#C9C2B5]/40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group p-7 bg-[#EFEAE0]/70 hover:bg-[#EFEAE0] border border-[#C9C2B5]/50 hover:border-[#A58B61]/80 rounded-xs transition-all duration-300"
              >
                <span className="block font-mono text-xs text-[#A58B61] tracking-widest mb-3">
                  {pillar.num}
                </span>
                <h3 className="text-xl font-serif font-medium text-[#243A30] mb-2 group-hover:text-[#1A2621] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}

            {/* Quiet 6th editorial note card */}
            <div className="p-7 bg-[#243A30] text-[#F5F1E8] rounded-xs flex flex-col justify-between border border-[#1A2B23]">
              <div>
                <span className="block font-mono text-xs text-[#C5AD86] tracking-widest mb-3">
                  SANCTUARY PRINCIPLE
                </span>
                <h3 className="text-xl font-serif font-medium text-[#F5F1E8] mb-2">
                  No Mass Tourism. Ever.
                </h3>
                <p className="text-xs sm:text-sm text-[#C9C2B5] leading-relaxed font-sans font-light">
                  We deliberately limit departures to preserve trail ecology, horse welfare, and intimate relations with local shepherd communities.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#C5AD86] font-mono">
                <span>Respect for Land & Horse</span>
                <span className="text-[10px]">TAI TRAVEL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
