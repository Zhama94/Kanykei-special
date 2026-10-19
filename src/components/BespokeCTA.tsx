import React from 'react';
import { SunsetRidersArtwork } from './KyrgyzArtAssets';
import { TranslationStrings } from '../data/translations';

interface BespokeCTAProps {
  strings: TranslationStrings;
  onCreatePrivateExpedition: () => void;
}

export const BespokeCTA: React.FC<BespokeCTAProps> = ({ strings, onCreatePrivateExpedition }) => {
  return (
    <section className="relative py-32 sm:py-44 bg-[#140E0C] text-[#F5F1E8] overflow-hidden">
      {/* Background Sunset Artwork with slow ambient depth */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <SunsetRidersArtwork className="w-full h-full object-cover scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140E0C] via-[#140E0C]/55 to-black/60" />
        <div className="absolute inset-0 film-grain opacity-35" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-[11px] uppercase tracking-[0.28em] font-mono font-medium text-[#C5AD86]">
          <span className="w-4 h-[1px] bg-[#A58B61]"></span>
          <span>{strings.bespoke.kicker}</span>
          <span className="w-4 h-[1px] bg-[#A58B61]"></span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F5F1E8] tracking-tight leading-[1.08] mb-8 text-balance">
          {strings.bespoke.headline}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#C9C2B5] font-light leading-relaxed max-w-2xl mx-auto mb-12 text-balance">
          {strings.bespoke.supporting}
        </p>

        <button
          onClick={onCreatePrivateExpedition}
          className="px-9 py-4 text-xs uppercase tracking-[0.2em] font-medium text-[#1A120E] bg-[#F5F1E8] hover:bg-[#C5AD86] active:bg-[#A58B61] transition-all duration-200 rounded-xs shadow-2xl whitespace-nowrap cursor-pointer"
        >
          {strings.bespoke.cta}
        </button>
      </div>
    </section>
  );
};
