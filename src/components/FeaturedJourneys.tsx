import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { Tour, getTours } from '../data/toursData';
import { SupportedLanguage, TranslationStrings } from '../data/translations';
import {
  SongKulYurtArtwork,
  TianShanPassArtwork,
  KyrgyzMountainHeroArtwork,
  SunsetRidersArtwork,
} from './KyrgyzArtAssets';

interface FeaturedJourneysProps {
  currentLang: SupportedLanguage;
  strings: TranslationStrings;
  onSelectTour: (tour: Tour) => void;
  onOpenInquiry: (tourId?: string) => void;
}

export const FeaturedJourneys: React.FC<FeaturedJourneysProps> = ({
  currentLang,
  strings,
  onSelectTour,
  onOpenInquiry,
}) => {
  const localizedTours = getTours(currentLang);
  const standardTours = localizedTours.filter((t) => !t.isCustomQuote);
  const bespokeTour = localizedTours.find((t) => t.isCustomQuote) || localizedTours[3];

  const getTourArtwork = (id: string) => {
    switch (id) {
      case 'nomad-trail-song-kul':
        return <SongKulYurtArtwork className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />;
      case 'into-the-tian-shan':
        return <TianShanPassArtwork className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />;
      case 'great-kyrgyz-expedition':
        return <KyrgyzMountainHeroArtwork className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />;
      case 'private-bespoke-expedition':
      default:
        return <SunsetRidersArtwork className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />;
    }
  };

  return (
    <section id="journeys" className="py-28 sm:py-36 bg-[#20221F] text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Refined Editorial Hierarchy */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3 text-[11px] uppercase tracking-[0.25em] font-mono font-medium text-[#C5AD86]">
            <span className="w-4 h-[1px] bg-[#A58B61]"></span>
            <span>{strings.journeys.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F5F1E8] tracking-tight leading-[1.08] mb-6 text-balance">
            {strings.journeys.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#C9C2B5] font-light leading-relaxed max-w-2xl text-balance">
            {strings.journeys.subtitle}
          </p>

          {/* Editorial Draft Disclaimer Banner */}
          <div className="mt-8 flex items-start gap-3.5 p-4 bg-[#27352D]/80 border border-[#A58B61]/35 rounded-xs text-xs text-[#C9C2B5]">
            <Info className="w-4 h-4 text-[#A58B61] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#F5F1E8] font-medium mr-1.5">{strings.journeys.disclaimerLabel}</strong>
              {strings.journeys.disclaimer}
            </p>
          </div>
        </div>

        {/* Section Label: Scheduled Small-Group Expeditions */}
        <div className="mb-6 flex items-center justify-between border-b border-[#3A4E44] pb-3 text-xs font-mono text-[#C5AD86] uppercase tracking-[0.16em]">
          <span>{strings.journeys.sectionLabel}</span>
          <span className="text-stone-400">{strings.journeys.sectionSublabel}</span>
        </div>

        {/* 3 Guided Itinerary Cards in Asymmetric 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 mb-16">
          {standardTours.map((tour) => (
            <article
              key={tour.id}
              className="group flex flex-col bg-[#243A30]/55 hover:bg-[#243A30]/85 border border-[#3A4E44] hover:border-[#A58B61]/70 rounded-xs overflow-hidden transition-all duration-300 shadow-sm"
            >
              {/* Card Image Area with Artwork & Subtle Scrim */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#18231D]">
                {getTourArtwork(tour.id)}

                <div className="absolute inset-0 bg-gradient-to-t from-[#20221F] via-transparent to-black/25 pointer-events-none" />

                {/* Tour Number Marker */}
                <div className="absolute top-3.5 left-3.5 z-10 px-2.5 py-1 bg-[#20221F]/90 backdrop-blur-xs border border-white/10 rounded-xs">
                  <span className="font-mono text-[11px] text-[#C5AD86] tracking-widest">
                    TOUR {tour.number}
                  </span>
                </div>

                {/* Max Altitude Marker */}
                <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 bg-[#20221F]/90 backdrop-blur-xs border border-white/10 rounded-xs text-[10px] font-mono text-[#C9C2B5]">
                  <span>{tour.elevationMax.split(' ')[0]} {tour.elevationMax.split(' ')[1]}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-[#C5AD86] mb-3 font-mono">
                    <span>{tour.durationLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{tour.difficulty}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-[#F5F1E8] group-hover:text-[#C5AD86] transition-colors mb-2 leading-snug">
                    {tour.title}
                  </h3>

                  <p className="text-xs font-serif italic text-[#C9C2B5] mb-3 line-clamp-1">
                    {tour.subtitle}
                  </p>

                  <p className="text-xs text-[#C9C2B5]/90 line-clamp-3 leading-relaxed mb-6 font-sans">
                    {tour.overview}
                  </p>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-5 border-t border-[#3A4E44] flex items-end justify-between gap-3">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#A58B61] font-mono">
                      {strings.journeys.rateLabel}
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-xl font-serif font-semibold text-[#F5F1E8]">
                        {tour.priceDisplay}
                      </span>
                      <span className="text-[11px] text-[#C9C2B5]/75 font-sans">
                        {strings.journeys.perPerson}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectTour(tour)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.14em] font-medium text-[#20221F] bg-[#F5F1E8] hover:bg-[#C5AD86] active:bg-[#A58B61] transition-all rounded-xs whitespace-nowrap cursor-pointer"
                  >
                    <span>{strings.journeys.discoverBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Marquee Feature: Tour 04 Private Bespoke Expedition */}
        <div className="border border-[#A58B61]/50 bg-[#1D2B24] rounded-xs overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left 7 cols: Image Spread */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#18110D]">
              <SunsetRidersArtwork className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#1A120E]/90 border border-[#A58B61]/40 rounded-xs">
                <span className="font-mono text-xs text-[#FAD889] tracking-widest uppercase">
                  {strings.journeys.bespokeBadge}
                </span>
              </div>
            </div>

            {/* Right 5 cols: Bespoke Narrative & Inclusions */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-[#1D2B24]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#C5AD86] font-mono mb-2">
                  <span>{bespokeTour.durationLabel}</span>
                  <span>·</span>
                  <span>{bespokeTour.difficulty}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#F5F1E8] mb-3">
                  {bespokeTour.title}
                </h3>

                <p className="text-xs font-serif italic text-[#C9C2B5] mb-4">
                  {bespokeTour.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#C9C2B5] font-sans leading-relaxed mb-6">
                  {strings.journeys.bespokeDesc}
                </p>

                {/* Bespoke Distinctive Inclusions */}
                <div className="space-y-2.5 mb-8 pt-4 border-t border-[#3A4E44] text-xs text-[#E5DFC8]">
                  {strings.journeys.bespokeHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A58B61] shrink-0 mt-1.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-6 border-t border-[#3A4E44] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-[#A58B61]">
                    {strings.journeys.rateLabel}
                  </span>
                  <span className="text-lg font-serif font-semibold text-[#F5F1E8]">
                    {strings.journeys.customQuotation}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectTour(bespokeTour)}
                    className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#C9C2B5] hover:text-[#F5F1E8] border border-[#3A4E44] hover:border-white/30 rounded-xs transition-colors cursor-pointer"
                  >
                    {strings.tourModal.tabs.itinerary.split(' ')[0]}
                  </button>
                  <button
                    onClick={() => onOpenInquiry('private-bespoke-expedition')}
                    className="px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium text-[#1A2621] bg-[#C5AD86] hover:bg-[#F5F1E8] rounded-xs transition-colors whitespace-nowrap cursor-pointer shadow-md"
                  >
                    {strings.journeys.bespokeCta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
