import React from 'react';
import { Info } from 'lucide-react';
import { TranslationStrings } from '../data/translations';

interface GuestStoriesProps {
  strings: TranslationStrings;
}

export const GuestStories: React.FC<GuestStoriesProps> = ({ strings }) => {
  const stories = strings.stories.list;

  return (
    <section className="py-28 sm:py-36 bg-[#EFEAE0] text-[#20221F] border-b border-[#C9C2B5]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-medium text-[#A58B61] block mb-3">
            {strings.stories.kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#20221F] tracking-tight leading-[1.08] mb-6 text-balance">
            {strings.stories.headline}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl text-balance">
            {strings.stories.note}
          </p>

          {/* Prominent Editorial Verification Note */}
          <div className="mt-8 flex items-start gap-3.5 p-4 bg-white/70 border border-[#C9C2B5] rounded-xs text-xs text-stone-600">
            <Info className="w-4 h-4 text-[#A58B61] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#20221F] font-medium mr-1.5">{strings.stories.editorialNoticeLabel}</strong>
              {strings.stories.editorialNoticeText}
            </p>
          </div>
        </div>

        {/* Stories Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <article
              key={idx}
              className="p-8 bg-[#F5F1E8] border border-[#C9C2B5]/60 rounded-xs flex flex-col justify-between shadow-xs hover:border-[#A58B61] transition-colors"
            >
              <div>
                {/* Unboxed Metadata (Zero-Pill discipline) */}
                <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono mb-6 pb-3 border-b border-[#C9C2B5]/40">
                  <span>DISPATCH 0{idx + 1}</span>
                  <span>{story.itinerary}</span>
                </div>

                <blockquote className="font-serif italic text-base sm:text-lg text-[#243A30] leading-relaxed mb-6 font-normal">
                  “{story.passage}”
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#C9C2B5]/50">
                <p className="text-xs font-semibold text-[#20221F] tracking-wide font-sans">
                  {story.riderProfile}
                </p>
                <span className="text-[10px] font-mono text-[#A58B61] block mt-1 tracking-wider uppercase">
                  {story.verificationLabel}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
