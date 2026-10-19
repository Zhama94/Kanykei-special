import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { SupportedLanguage, TranslationStrings } from '../data/translations';

interface FooterProps {
  strings: TranslationStrings;
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
  onOpenPrivacy: () => void;
  onOpenInquiry: (tourId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  strings,
  currentLang,
  onSelectLang,
  onOpenPrivacy,
  onOpenInquiry,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@') || !newsletterEmail.includes('.')) {
      setNewsletterStatus('error');
      return;
    }
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  const languages: { code: SupportedLanguage; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'de', name: 'Deutsch' },
    { code: 'ja', name: '日本語' },
    { code: 'ky', name: 'Кыргызча' },
  ];

  return (
    <footer id="contact" className="bg-[#141E19] text-[#C9C2B5] pt-20 pb-12 border-t border-[#243A30]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#243A30]">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a
                href="#"
                className="text-2xl font-serif tracking-[0.2em] font-semibold text-[#F5F1E8] hover:text-[#C5AD86] transition-colors block mb-4"
              >
                TAI TRAVEL
              </a>
              <p className="text-sm font-sans text-[#C9C2B5]/90 leading-relaxed mb-6 max-w-sm">
                {strings.footer.tagline}
              </p>
            </div>

            {/* Verified Headquarters & Outpost details */}
            <div className="space-y-1.5 text-xs font-mono text-[#A58B61]">
              <p className="text-[#F5F1E8] font-medium">{strings.footer.officeTitle}</p>
              <p>{strings.footer.address}</p>
              <p>{strings.footer.trailhead}</p>
              <p className="pt-2 text-stone-400">{strings.footer.inquiries}</p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1E8] mb-4">
              {strings.footer.explore}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#journeys" className="hover:text-[#F5F1E8] transition-colors">
                  The Nomad Trail (3D)
                </a>
              </li>
              <li>
                <a href="#journeys" className="hover:text-[#F5F1E8] transition-colors">
                  Into the Tian Shan (5D)
                </a>
              </li>
              <li>
                <a href="#journeys" className="hover:text-[#F5F1E8] transition-colors">
                  Great Kyrgyz Expedition (10D)
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenInquiry('private-bespoke-expedition')}
                  className="hover:text-[#F5F1E8] transition-colors text-left cursor-pointer"
                >
                  Private Bespoke Departures
                </button>
              </li>
            </ul>
          </div>

          {/* Land & Culture (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1E8] mb-4">
              {strings.footer.company}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#philosophy" className="hover:text-[#F5F1E8] transition-colors">
                  {strings.nav.philosophy}
                </a>
              </li>
              <li>
                <a href="#discover" className="hover:text-[#F5F1E8] transition-colors">
                  {strings.nav.discover}
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#F5F1E8] transition-colors">
                  {strings.nav.journal}
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#F5F1E8] transition-colors text-left cursor-pointer"
                >
                  {strings.footer.privacy}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1E8] mb-2">
              {strings.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#C9C2B5]/80 leading-relaxed mb-4">
              {strings.footer.newsletterDesc}
            </p>

            {newsletterStatus === 'success' ? (
              <div className="p-3 bg-[#243A30] border border-[#A58B61] rounded-xs text-xs text-[#F5F1E8] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A58B61] shrink-0" />
                <span>{strings.footer.subscribeSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterStatus === 'error') setNewsletterStatus('idle');
                    }}
                    placeholder={strings.footer.subscribePlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#1C2722] border border-[#32453B] rounded-l-xs text-[#F5F1E8] placeholder:text-stone-500 focus:outline-none focus:border-[#A58B61]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-[#20221F] bg-[#F5F1E8] hover:bg-[#C5AD86] rounded-r-xs transition-colors shrink-0 cursor-pointer"
                  >
                    {strings.footer.subscribeBtn}
                  </button>
                </div>
                {newsletterStatus === 'error' && (
                  <p className="text-[11px] text-amber-300">
                    {strings.footer.subscribeError}
                  </p>
                )}
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-[#243A30] flex items-center gap-4 text-xs">
              <span className="text-stone-400">{strings.footer.officialChannels}</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A58B61] hover:text-[#F5F1E8] transition-colors"
              >
                Instagram (@taitravel.kg)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language Switcher, Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} TAI TRAVEL. {strings.footer.rights}</p>

          {/* Multilingual Selector in Footer */}
          <div className="flex items-center gap-3">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider font-mono">
              {strings.footer.languageLabel}
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {languages.map((l) => (
                <button
                  type="button"
                  key={l.code}
                  onClick={() => onSelectLang(l.code)}
                  className={`px-2.5 py-1 text-xs transition-colors rounded-xs cursor-pointer ${
                    currentLang === l.code
                      ? 'text-[#F5F1E8] font-bold bg-[#243A30] border border-[#A58B61]'
                      : 'text-stone-400 hover:text-[#F5F1E8] hover:bg-white/5'
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
