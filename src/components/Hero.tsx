import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowDown, Play, Pause } from 'lucide-react';
import { KyrgyzMountainHeroArtwork } from './KyrgyzArtAssets';
import { SupportedLanguage, TranslationStrings } from '../data/translations';

interface HeroProps {
  currentLang: SupportedLanguage;
  strings: TranslationStrings;
  onExploreJourneys: () => void;
  onCreateExpedition: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  strings,
  onExploreJourneys,
  onCreateExpedition,
}) => {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  // Multilingual headline with preserved editorial serif styling and italic accents
  const renderHeadline = () => {
    return (
      <>
        {strings.hero.headlineLine1}
        <span className="block mt-1 sm:mt-2">
          {strings.hero.headlineLine2}
          <span className="italic font-light text-[#EFE8DC]">{strings.hero.headlineAccent}</span>
          {currentLang === 'ru' ? ' Кыргызстана.' : currentLang === 'de' ? ' Kirgisistans.' : currentLang === 'ja' ? 'へ。' : currentLang === 'ky' ? '.' : ' of Kyrgyzstan.'}
        </span>
      </>
    );
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[680px] flex flex-col justify-end overflow-hidden bg-[#121A15]">
      {/* 1. CINEMATIC FULL-SCREEN BACKGROUND (Video + High-Quality Photographic Artwork Fallback) */}
      <div
        className={`absolute inset-0 w-full h-full overflow-hidden ${
          motionEnabled ? 'animate-cinematic-pan' : ''
        }`}
      >
        {/* Photographic Still Artwork Fallback: Tian Shan Mountain Peaks, Glacial Ridges, and Riders */}
        <div className="absolute inset-0 w-full h-full">
          <KyrgyzMountainHeroArtwork className="w-full h-full object-cover scale-[1.06] object-[70%_40%]" />
        </div>

        {/* Cinematic Video Layer with smooth fade-in upon successful load */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[65%_40%] transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-horse-herd-running-in-the-snow-in-the-mountains-43890-large.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Floating atmospheric subalpine mist */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#C4B494]/10 to-transparent ${
            motionEnabled ? 'animate-mist' : 'opacity-10'
          } pointer-events-none`}
        />

        {/* Sophisticated Dark Gradient Scrim: Stronger in the lower-left for AAA contrast, open in upper-right for mountain sky */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121A15] via-[#121A15]/60 to-[#121A15]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121A15]/90 via-[#121A15]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

        {/* Delicate 35mm documentary film grain overlay */}
        <div className="absolute inset-0 film-grain pointer-events-none opacity-40" />

        {/* Seamless bottom edge gradient blending into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F5F1E8]/10 to-transparent pointer-events-none" />
      </div>

      {/* 2. LOWER-LEFT EDITORIAL HEADLINE & COPY COMPOSITION */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 pb-16 sm:pb-20 lg:pb-24 text-left">
        <div className="max-w-4xl animate-fade-in-up">
          {/* Eyebrow Location Marker */}
          <div className="inline-flex items-center gap-2.5 mb-5 sm:mb-6 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-mono font-medium text-[#C5AD86]">
            <span className="w-5 h-[1px] bg-[#A58B61]/70"></span>
            <span>{strings.hero.eyebrow}</span>
          </div>

          {/* Editorial Headline: Exact translation, Cormorant Garamond, Warm Ivory, lower-left placement */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-serif font-normal text-[#F5F1E8] tracking-tight leading-[1.04] mb-6 text-balance max-w-4xl">
            {renderHeadline()}
          </h1>

          {/* Supporting Description: Dynamically translated, constrained to ~520px on desktop */}
          <p className="text-sm sm:text-base md:text-lg font-sans text-[#C9C2B5] font-light leading-relaxed max-w-[520px] mb-9 sm:mb-10 text-balance">
            {strings.hero.subheadline}
          </p>

          {/* Two Refined Calls to Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
            {/* Primary Action: Compact, elegant button with minimal arrow */}
            <button
              onClick={onExploreJourneys}
              className="group inline-flex items-center gap-3 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium text-[#1A2621] bg-[#F5F1E8] hover:bg-[#C5AD86] active:bg-[#A58B61] transition-all duration-300 rounded-xs shadow-xl whitespace-nowrap"
            >
              <span>{strings.hero.primaryCta}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#1A2621] transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary Action: Refined text link with understated underline transition */}
            <button
              onClick={onCreateExpedition}
              className="group inline-flex items-center text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1E8] hover:text-[#C5AD86] transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#A58B61] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left whitespace-nowrap"
            >
              <span>{strings.hero.secondaryCta}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUBTLE CINEMATIC DETAILS IN CORNERS */}
      {/* Lower Right Geographic Coordinates */}
      <div className="absolute bottom-8 right-6 sm:right-12 lg:right-24 z-10 hidden md:flex items-center gap-4 text-[11px] font-mono text-[#A58B61] tracking-widest uppercase">
        <span>{strings.hero.coordinates}</span>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-6 sm:left-12 lg:left-24 z-10 hidden sm:flex items-center gap-3 text-[#C9C2B5]/60 hover:text-[#F5F1E8] transition-colors">
        <button
          onClick={onExploreJourneys}
          className="flex items-center gap-2 focus:outline-none"
          aria-label={strings.hero.scrollIndicator}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono">{strings.hero.scrollIndicator}</span>
          <span className="w-8 h-[1px] bg-[#A58B61]/50"></span>
          <ArrowDown className="w-3 h-3 text-[#A58B61] animate-bounce" />
        </button>
      </div>

      {/* Discreet Atmospheric Motion Control */}
      <div className="absolute bottom-8 right-6 z-10 flex md:hidden items-center">
        <button
          onClick={() => setMotionEnabled(!motionEnabled)}
          className="p-2 text-[#C9C2B5] bg-black/40 backdrop-blur-xs rounded-xs border border-white/10"
          aria-label={motionEnabled ? 'Pause motion' : 'Resume motion'}
        >
          {motionEnabled ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>
    </section>
  );
};
