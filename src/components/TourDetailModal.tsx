import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Gauge, Shield, ChevronDown, Check, AlertCircle } from 'lucide-react';
import { Tour, getTourById } from '../data/toursData';
import { SupportedLanguage, TranslationStrings } from '../data/translations';
import {
  SongKulYurtArtwork,
  TianShanPassArtwork,
  KyrgyzMountainHeroArtwork,
  SunsetRidersArtwork,
} from './KyrgyzArtAssets';

interface TourDetailModalProps {
  tour: Tour | null;
  currentLang: SupportedLanguage;
  strings: TranslationStrings;
  onClose: () => void;
  onOpenInquiry: (tourId: string) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  currentLang,
  strings,
  onClose,
  onOpenInquiry,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'riding' | 'stay' | 'included'>('itinerary');

  // Close on Escape key
  useEffect(() => {
    if (!tour) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tour, onClose]);

  if (!tour) return null;

  // Retrieve fully localized tour version for active language
  const localizedTour = getTourById(tour.id, currentLang) || tour;

  const getHeroVisual = () => {
    switch (localizedTour.id) {
      case 'nomad-trail-song-kul':
        return <SongKulYurtArtwork className="w-full h-full object-cover" />;
      case 'into-the-tian-shan':
        return <TianShanPassArtwork className="w-full h-full object-cover" />;
      case 'great-kyrgyz-expedition':
        return <KyrgyzMountainHeroArtwork className="w-full h-full object-cover" />;
      case 'private-bespoke-expedition':
      default:
        return <SunsetRidersArtwork className="w-full h-full object-cover" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#F5F1E8] text-[#20221F] shadow-2xl rounded-none sm:rounded-xs overflow-hidden my-auto min-h-screen sm:min-h-0 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-modal-title"
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#20221F]/80 text-[#F5F1E8] hover:bg-[#20221F] hover:text-[#C5AD86] transition-colors focus:outline-none cursor-pointer"
          aria-label={strings.tourModal.closeLabel}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Banner with Cinematic Artwork & Title Lockup */}
        <div className="relative aspect-[16/8] sm:aspect-[21/9] bg-[#141E19] overflow-hidden">
          {getHeroVisual()}
          <div className="absolute inset-0 bg-gradient-to-t from-[#20221F] via-[#20221F]/50 to-transparent" />

          {/* Banner Meta and Headline */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-[#F5F1E8]">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#C5AD86] uppercase tracking-wider mb-2">
              <span>{strings.tourModal.expeditionPrefix} 0{localizedTour.number}</span>
              <span aria-hidden="true">·</span>
              <span>{localizedTour.location}</span>
            </div>

            <h1
              id="tour-modal-title"
              className="text-3xl sm:text-5xl font-serif font-medium text-[#F5F1E8] leading-[1.1] mb-2"
            >
              {localizedTour.title}
            </h1>
            <p className="text-sm sm:text-base font-serif italic text-[#E5DFC8] max-w-2xl">
              {localizedTour.subtitle}
            </p>
          </div>
        </div>

        {/* Key Expedition Parameters Bar */}
        <div className="bg-[#1D2924] border-y border-[#32453B] px-6 sm:px-10 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div>
            <span className="text-[#A58B61] uppercase block text-[10px] tracking-wider">
              {strings.tourModal.durationLabel}
            </span>
            <span className="text-[#F5F1E8] font-medium text-sm">
              {localizedTour.durationLabel}
            </span>
          </div>
          <div>
            <span className="text-[#A58B61] uppercase block text-[10px] tracking-wider">
              {strings.tourModal.difficultyLabel}
            </span>
            <span className="text-[#F5F1E8] font-medium text-sm">
              {localizedTour.difficulty}
            </span>
          </div>
          <div>
            <span className="text-[#A58B61] uppercase block text-[10px] tracking-wider">
              {strings.tourModal.maxAltLabel}
            </span>
            <span className="text-[#F5F1E8] font-medium text-sm">
              {localizedTour.elevationMax}
            </span>
          </div>
          <div>
            <span className="text-[#A58B61] uppercase block text-[10px] tracking-wider">
              {strings.tourModal.startingFrom}
            </span>
            <span className="text-[#F5F1E8] font-medium text-sm">
              {localizedTour.priceDisplay}
            </span>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 sm:px-10 pt-4 bg-[#EAE4D7] border-b border-[#C9C2B5] overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('itinerary')}
            className={`pb-3 pt-2 text-xs uppercase tracking-wider font-mono font-medium transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'itinerary'
                ? 'border-[#243A30] text-[#243A30] font-bold'
                : 'border-transparent text-stone-500 hover:text-[#20221F]'
            }`}
          >
            {strings.tourModal.tabs.itinerary}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('riding')}
            className={`pb-3 pt-2 text-xs uppercase tracking-wider font-mono font-medium transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'riding'
                ? 'border-[#243A30] text-[#243A30] font-bold'
                : 'border-transparent text-stone-500 hover:text-[#20221F]'
            }`}
          >
            {strings.tourModal.tabs.riding}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('stay')}
            className={`pb-3 pt-2 text-xs uppercase tracking-wider font-mono font-medium transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'stay'
                ? 'border-[#243A30] text-[#243A30] font-bold'
                : 'border-transparent text-stone-500 hover:text-[#20221F]'
            }`}
          >
            {strings.tourModal.tabs.stay}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('included')}
            className={`pb-3 pt-2 text-xs uppercase tracking-wider font-mono font-medium transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'included'
                ? 'border-[#243A30] text-[#243A30] font-bold'
                : 'border-transparent text-stone-500 hover:text-[#20221F]'
            }`}
          >
            {strings.tourModal.tabs.included}
          </button>
        </div>

        {/* Modal Body Tab Panes */}
        <div className="p-6 sm:p-10 flex-1 overflow-y-auto max-h-[60vh] space-y-8 text-stone-700">
          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* Overview intro */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg font-sans leading-relaxed text-stone-800 font-light">
                  {localizedTour.overview}
                </p>

                {/* Highlights */}
                <div className="p-6 bg-[#EFEAE0] border border-[#C9C2B5] rounded-xs">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#A58B61] mb-3">
                    {strings.tourModal.highlightsTitle}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                    {localizedTour.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#A58B61] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Day-by-Day Timeline */}
              <div className="space-y-6 pt-4">
                {localizedTour.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="p-6 bg-white/70 border border-[#C9C2B5]/80 rounded-xs flex flex-col md:flex-row gap-6 justify-between shadow-2xs hover:border-[#A58B61] transition-colors"
                  >
                    <div className="md:w-1/4 shrink-0">
                      <span className="font-mono text-xs text-[#A58B61] uppercase tracking-wider block">
                        {strings.tourModal.dayPrefix} 0{day.day}
                      </span>
                      <h4 className="text-lg font-serif font-medium text-[#243A30] mt-1">
                        {day.title}
                      </h4>
                      <div className="mt-3 space-y-1 text-[11px] font-mono text-stone-500">
                        <p>{strings.tourModal.ridingHoursLabel}: {day.ridingHours}</p>
                        <p>{day.altitude}</p>
                      </div>
                    </div>

                    <div className="md:w-3/4 flex flex-col justify-between">
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans mb-4">
                        {day.description}
                      </p>
                      <div className="pt-3 border-t border-[#C9C2B5]/40 text-xs font-mono text-[#243A30] flex items-center gap-2">
                        <span className="text-[#A58B61] font-semibold">{strings.tourModal.campLabel}:</span>
                        <span>{day.campType}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: HORSEMANSHIP */}
          {activeTab === 'riding' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-6 bg-[#EFEAE0] border border-[#C9C2B5] rounded-xs">
                <h3 className="text-lg font-serif font-medium text-[#243A30] mb-2">
                  {strings.tourModal.horsemanshipTitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {localizedTour.difficultyNote}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="p-5 bg-white/70 border border-[#C9C2B5]/80 rounded-xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A58B61] block mb-1">
                    {strings.tourModal.horsemanshipPace}
                  </span>
                  <p className="text-stone-800 leading-relaxed">{localizedTour.ridingRequirements.pace}</p>
                </div>
                <div className="p-5 bg-white/70 border border-[#C9C2B5]/80 rounded-xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A58B61] block mb-1">
                    {strings.tourModal.horsemanshipGaits}
                  </span>
                  <p className="text-stone-800 leading-relaxed">{localizedTour.ridingRequirements.gaits}</p>
                </div>
                <div className="p-5 bg-white/70 border border-[#C9C2B5]/80 rounded-xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A58B61] block mb-1">
                    {strings.tourModal.horsemanshipHours}
                  </span>
                  <p className="text-stone-800 leading-relaxed">{localizedTour.ridingRequirements.hoursPerDay}</p>
                </div>
                <div className="p-5 bg-white/70 border border-[#C9C2B5]/80 rounded-xs">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#A58B61] block mb-1">
                    {strings.tourModal.horsemanshipTerrain}
                  </span>
                  <p className="text-stone-800 leading-relaxed">{localizedTour.ridingRequirements.terrain}</p>
                </div>
              </div>

              <div className="p-5 bg-white/70 border border-[#C9C2B5]/80 rounded-xs">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#A58B61] block mb-1">
                  {strings.tourModal.horsemanshipExperience}
                </span>
                <p className="text-xs text-stone-800 leading-relaxed">
                  {localizedTour.ridingRequirements.experienceNeeded}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: STAY & YURTS */}
          {activeTab === 'stay' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-6 bg-white/80 border border-[#C9C2B5] rounded-xs space-y-4">
                <h3 className="text-lg font-serif font-medium text-[#243A30]">
                  {strings.tourModal.stayTitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {localizedTour.accommodation.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-3 border-t border-[#C9C2B5]/50">
                  {localizedTour.accommodation.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#A58B61] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white/80 border border-[#C9C2B5] rounded-xs space-y-4">
                <h3 className="text-lg font-serif font-medium text-[#243A30]">
                  {strings.tourModal.mealsTitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {localizedTour.meals.description}
                </p>
                <div className="space-y-1.5 text-xs pt-3 border-t border-[#C9C2B5]/50">
                  {localizedTour.meals.highlights.map((meal, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A58B61] shrink-0 mt-1.5" />
                      <span>{meal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INCLUDED & FAQ */}
          {activeTab === 'included' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="p-6 bg-white/70 border border-[#C9C2B5] rounded-xs">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#243A30] font-semibold mb-4">
                    {strings.tourModal.includedTitle}
                  </h3>
                  <div className="space-y-2.5 text-xs text-stone-700">
                    {localizedTour.included.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exclusions */}
                <div className="p-6 bg-[#EFEAE0] border border-[#C9C2B5] rounded-xs">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-stone-600 font-semibold mb-4">
                    {strings.tourModal.excludedTitle}
                  </h3>
                  <div className="space-y-2.5 text-xs text-stone-600">
                    {localizedTour.excluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <X className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs Accordion */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-serif font-medium text-[#243A30] mb-4">
                  {strings.tourModal.faqTitle}
                </h3>
                {localizedTour.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#C9C2B5] bg-white/70 rounded-xs overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-4 text-xs font-medium text-[#243A30] flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-serif text-sm sm:text-base font-normal">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-[#A58B61] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans border-t border-[#C9C2B5]/30 mt-2">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Footer Bar with CTA & Inquire Trigger */}
        <div className="p-4 sm:p-6 bg-[#18231D] border-t border-[#32453B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F5F1E8]">
          <div className="flex items-center gap-3">
            <span className="text-xl sm:text-2xl font-serif font-semibold text-[#F5F1E8]">
              {localizedTour.priceDisplay}
            </span>
            <span className="text-xs text-[#C9C2B5]/75 font-sans">
              {localizedTour.priceNote}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 text-xs uppercase tracking-wider text-[#C9C2B5] hover:text-[#F5F1E8] border border-[#32453B] rounded-xs transition-colors cursor-pointer"
            >
              {strings.tourModal.closeLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenInquiry(localizedTour.id);
              }}
              className="flex-1 sm:flex-none px-7 py-3 text-xs uppercase tracking-[0.18em] font-medium text-[#1A2621] bg-[#F5F1E8] hover:bg-[#C5AD86] active:bg-[#A58B61] rounded-xs transition-colors whitespace-nowrap cursor-pointer shadow-lg"
            >
              {strings.tourModal.inquireBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
