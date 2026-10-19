import React from 'react';
import { ShyrdakDivider } from './KyrgyzArtAssets';
import { TranslationStrings } from '../data/translations';

interface JourneyTimelineProps {
  strings: TranslationStrings;
  onStartPlanning: () => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ strings, onStartPlanning }) => {
  const steps = strings.steps.list;

  return (
    <section className="py-28 sm:py-36 bg-[#F5F1E8] text-[#20221F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-medium text-[#A58B61] block mb-3">
            {strings.steps.kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#20221F] tracking-tight leading-[1.08] mb-6 text-balance">
            {strings.steps.headline}
          </h2>
          <ShyrdakDivider className="w-24 mx-auto my-6 text-[#A58B61]" />
        </div>

        {/* 4-Step Timeline Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting guideline on desktop */}
          <div className="hidden lg:block absolute top-6 left-12 right-12 h-[1px] bg-[#C9C2B5]/50 z-0" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 flex flex-col bg-[#EFEAE0]/85 p-8 rounded-xs border border-[#C9C2B5]/60 hover:border-[#A58B61] transition-all duration-300 shadow-xs"
            >
              {/* Step Num Minimalist Badge */}
              <div className="w-10 h-10 rounded-xs bg-[#243A30] text-[#F5F1E8] flex items-center justify-center font-mono text-xs font-semibold mb-6 shadow-xs border border-[#1A2B23]">
                {step.num}
              </div>

              <span className="text-[10px] font-mono text-[#A58B61] uppercase tracking-widest block mb-1">
                {step.subtitle}
              </span>

              <h3 className="text-xl font-serif font-medium text-[#20221F] mb-3">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Primary Step Action CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartPlanning}
            className="px-9 py-4 text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1E8] bg-[#243A30] hover:bg-[#1A2621] active:bg-[#121D18] transition-all duration-200 rounded-xs shadow-md whitespace-nowrap cursor-pointer"
          >
            {strings.steps.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
