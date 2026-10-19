/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { FeaturedJourneys } from './components/FeaturedJourneys';
import { TaiDifference } from './components/TaiDifference';
import { DiscoverKyrgyzstan } from './components/DiscoverKyrgyzstan';
import { JourneyTimeline } from './components/JourneyTimeline';
import { GuestStories } from './components/GuestStories';
import { JournalSection } from './components/JournalSection';
import { BespokeCTA } from './components/BespokeCTA';
import { Footer } from './components/Footer';
import { TourDetailModal } from './components/TourDetailModal';
import { InquiryModal } from './components/InquiryModal';
import { ArticleModal } from './components/ArticleModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Tour } from './data/toursData';
import { JournalArticle } from './data/articlesData';
import { SupportedLanguage, translations } from './data/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<SupportedLanguage>(() => {
    try {
      const saved = localStorage.getItem('tai_travel_lang');
      if (saved && (saved === 'en' || saved === 'ru' || saved === 'de' || saved === 'ja' || saved === 'ky')) {
        return saved as SupportedLanguage;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTourId, setInquiryTourId] = useState<string | undefined>(undefined);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Sync html lang attribute
  useEffect(() => {
    try {
      document.documentElement.lang = currentLang;
    } catch {
      // ignore
    }
  }, [currentLang]);

  const handleSelectLang = (lang: SupportedLanguage) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('tai_travel_lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const strings = translations[currentLang] || translations.en;

  const handleOpenInquiry = (tourId?: string) => {
    setInquiryTourId(tourId);
    setIsInquiryOpen(true);
  };

  const scrollToJourneys = () => {
    const el = document.getElementById('journeys');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPhilosophy = () => {
    const el = document.getElementById('philosophy');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#20221F] font-sans selection:bg-[#243A30] selection:text-[#F5F1E8]">
      {/* 1. Primary Top Navigation (Strict Top Bar Contract) */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        strings={strings}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Section 1: Cinematic Hero */}
        <Hero
          currentLang={currentLang}
          strings={strings}
          onExploreJourneys={scrollToJourneys}
          onCreateExpedition={() => handleOpenInquiry('private-bespoke-expedition')}
        />

        {/* Section 2: Brand Introduction */}
        <BrandIntro
          strings={strings}
          onExplorePhilosophy={scrollToPhilosophy}
        />

        {/* Section 3: Featured Horseback Journeys */}
        <FeaturedJourneys
          currentLang={currentLang}
          strings={strings}
          onSelectTour={(tour) => setSelectedTour(tour)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Section 4: The TAI Travel Difference */}
        <TaiDifference strings={strings} />

        {/* Section 5: Discover Kyrgyzstan */}
        <DiscoverKyrgyzstan
          strings={strings}
          onExploreTours={scrollToJourneys}
        />

        {/* Section 6: The Journey, From First Conversation to the Saddle */}
        <JourneyTimeline
          strings={strings}
          onStartPlanning={() => handleOpenInquiry()}
        />

        {/* Section 7: Guest Experiences */}
        <GuestStories strings={strings} />

        {/* Section 8: Journal ("Notes from the Mountains") */}
        <JournalSection
          currentLang={currentLang}
          strings={strings}
          onReadArticle={(article) => setSelectedArticle(article)}
        />

        {/* Section 9: Bespoke Expedition CTA */}
        <BespokeCTA
          strings={strings}
          onCreatePrivateExpedition={() => handleOpenInquiry('private-bespoke-expedition')}
        />
      </main>

      {/* Section 10: Footer */}
      <Footer
        strings={strings}
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Modals & Functional Views */}
      <TourDetailModal
        tour={selectedTour}
        currentLang={currentLang}
        strings={strings}
        onClose={() => setSelectedTour(null)}
        onOpenInquiry={(id) => handleOpenInquiry(id)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        currentLang={currentLang}
        strings={strings}
        onClose={() => setIsInquiryOpen(false)}
        preselectedTourId={inquiryTourId}
        onOpenPrivacy={() => {
          setIsInquiryOpen(false);
          setIsPrivacyOpen(true);
        }}
      />

      <ArticleModal
        article={selectedArticle}
        currentLang={currentLang}
        strings={strings}
        onClose={() => setSelectedArticle(null)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        strings={strings}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
