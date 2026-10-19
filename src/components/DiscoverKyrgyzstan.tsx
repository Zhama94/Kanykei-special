import React, { useState } from 'react';
import { TranslationStrings } from '../data/translations';
import {
  SongKulYurtArtwork,
  TianShanPassArtwork,
  NomadicHospitalityArtwork,
  KyrgyzMountainHeroArtwork,
  SunsetRidersArtwork,
} from './KyrgyzArtAssets';

interface DiscoverKyrgyzstanProps {
  strings: TranslationStrings;
  onExploreTours: () => void;
}

export const DiscoverKyrgyzstan: React.FC<DiscoverKyrgyzstanProps> = ({ strings, onExploreTours }) => {
  const destinations = strings.discover.destinations;
  const [activeTabId, setActiveTabId] = useState<string>(destinations[0]?.id || 'song-kul');

  const activeDestination = destinations.find((d) => d.id === activeTabId) || destinations[0];

  const getDestinationArtwork = (id: string) => {
    switch (id) {
      case 'song-kul':
        return <SongKulYurtArtwork className="w-full h-full object-cover" />;
      case 'tian-shan':
        return <TianShanPassArtwork className="w-full h-full object-cover" />;
      case 'yurt-culture':
        return <NomadicHospitalityArtwork className="w-full h-full object-cover" />;
      case 'valleys-canyons':
        return <KyrgyzMountainHeroArtwork className="w-full h-full object-cover" />;
      case 'hospitality-table':
      default:
        return <SunsetRidersArtwork className="w-full h-full object-cover" />;
    }
  };

  return (
    <section id="discover" className="py-28 sm:py-36 bg-[#18231D] text-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-medium text-[#C5AD86] block mb-3">
            {strings.discover.kicker}
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F5F1E8] tracking-tight leading-[1.08] mb-6 text-balance">
            {strings.discover.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#C9C2B5] font-light leading-relaxed max-w-2xl text-balance">
            {strings.discover.subtitle}
          </p>
        </div>

        {/* Curated Editorial Segmented Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#32453B] scrollbar-none">
          {destinations.map((dest) => {
            const isActive = dest.id === activeTabId;
            return (
              <button
                key={dest.id}
                onClick={() => setActiveTabId(dest.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-mono transition-all duration-200 rounded-xs whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#F5F1E8] text-[#1A2621] font-semibold shadow-md'
                    : 'text-[#C9C2B5] hover:text-[#F5F1E8] hover:bg-white/5'
                }`}
              >
                {dest.tag}
              </button>
            );
          })}
        </div>

        {/* Magazine-Style Curated Feature Spread */}
        {activeDestination && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#202C25] border border-[#3A4E44] rounded-xs p-6 sm:p-10 lg:p-12 shadow-xl">
            {/* Visual Showcase (7 cols on lg) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-xs overflow-hidden border border-white/10 shadow-2xl bg-[#141E19]">
                {getDestinationArtwork(activeDestination.id)}

                {/* Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 text-[#F5F1E8]">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#C5AD86] uppercase tracking-wider mb-1">
                    <span>{activeDestination.elevation}</span>
                    <span>·</span>
                    <span>Central Asia</span>
                  </div>
                  <p className="text-sm font-serif italic text-white/95">
                    {activeDestination.editorialDeck}
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Text Narrative (5 cols on lg) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#A58B61] uppercase tracking-widest block mb-2">
                  {strings.discover.dispatchLabel} · {activeDestination.tag}
                </span>

                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-[#F5F1E8] mb-2 leading-snug">
                  {activeDestination.title}
                </h3>

                <p className="text-xs font-serif italic text-[#C5AD86] mb-5">
                  {activeDestination.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#C9C2B5] font-sans font-light leading-relaxed mb-6">
                  {activeDestination.description}
                </p>

                {/* Curatorial Features List */}
                <div className="space-y-2.5 mb-6">
                  {activeDestination.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E5DFC8] font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A58B61] shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rider's Perspective Box */}
              <div className="pt-4 border-t border-[#3A4E44]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#A58B61] block mb-1">
                  {strings.discover.riderNoteTitle}
                </span>
                <p className="text-xs font-serif italic text-[#C9C2B5] leading-relaxed">
                  “{activeDestination.riderNote}”
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA to explore tours matching these landscapes */}
        <div className="mt-14 text-center">
          <button
            onClick={onExploreTours}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-mono text-[#C5AD86] hover:text-[#F5F1E8] border-b border-[#A58B61] pb-1 transition-colors cursor-pointer"
          >
            <span>{strings.discover.cta}</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
