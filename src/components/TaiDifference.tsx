import React from 'react';
import { ShyrdakDivider } from './KyrgyzArtAssets';
import { TranslationStrings } from '../data/translations';

interface TaiDifferenceProps {
  strings: TranslationStrings;
}

export const TaiDifference: React.FC<TaiDifferenceProps> = ({ strings }) => {
  const pillars = strings.difference.pillars;

  return (
    <section id="philosophy" className="py-28 sm:py-36 bg-[#F5F1E8] text-[#20221F] border-b border-[#C9C2B5]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-medium text-[#A58B61] block mb-3">
            {strings.difference.kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#20221F] tracking-tight leading-[1.1] mb-6 text-balance">
            {strings.difference.headline}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto text-balance">
            {strings.difference.subtitle}
          </p>
          <ShyrdakDivider className="w-24 mx-auto my-6 text-[#A58B61]" />
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-8 sm:p-11 bg-[#EFEAE0]/75 border border-[#C9C2B5]/60 rounded-xs flex flex-col justify-between hover:border-[#A58B61] transition-colors duration-300 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[#A58B61] tracking-widest">
                    PILLAR {pillar.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">
                    TAI EXPEDITIONS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#243A30] mb-1.5">
                  {pillar.title}
                </h3>
                <h4 className="text-[11px] uppercase tracking-widest text-stone-500 font-mono mb-5">
                  {pillar.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed mb-8 font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Editorial Pull Quote */}
              <div className="pt-5 border-t border-[#C9C2B5]/50">
                <p className="font-serif italic text-sm sm:text-base text-[#243A30] leading-relaxed">
                  “{pillar.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
