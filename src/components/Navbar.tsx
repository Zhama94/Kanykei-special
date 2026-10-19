import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react';
import { SupportedLanguage, TranslationStrings } from '../data/translations';

interface NavbarProps {
  currentLang: SupportedLanguage;
  onSelectLang: (lang: SupportedLanguage) => void;
  strings: TranslationStrings;
  onOpenInquiry: (tourId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  strings,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reliable click-outside and Escape key listener without blocking DOM overlays
  useEffect(() => {
    if (!langDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [langDropdownOpen]);

  const languageLabels: Record<SupportedLanguage, { code: string; label: string; nativeName: string }> = {
    en: { code: 'EN', label: 'English', nativeName: 'English' },
    ru: { code: 'RU', label: 'Русский', nativeName: 'Русский' },
    de: { code: 'DE', label: 'Deutsch', nativeName: 'Deutsch' },
    ja: { code: 'JA', label: '日本語', nativeName: '日本語' },
    ky: { code: 'KY', label: 'Кыргызча', nativeName: 'Кыргызча' },
  };

  const navLinks = [
    { href: '#journeys', label: strings.nav.journeys },
    { href: '#philosophy', label: strings.nav.philosophy },
    { href: '#discover', label: strings.nav.discover },
    { href: '#journal', label: strings.nav.journal },
  ];

  const handleLanguageChange = (lang: SupportedLanguage) => {
    onSelectLang(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#18231D]/95 backdrop-blur-md border-b border-[#32453B]/60 shadow-lg py-4'
          : 'bg-gradient-to-b from-[#121A15]/85 via-[#121A15]/30 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-8">
          {/* LEFT: TAI TRAVEL Wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif tracking-[0.24em] font-normal text-[#F5F1E8] hover:text-[#C5AD86] transition-colors whitespace-nowrap shrink-0 focus:outline-none focus:ring-1 focus:ring-[#A58B61]"
            aria-label="TAI TRAVEL Home"
          >
            TAI TRAVEL
          </a>

          {/* CENTER: Text Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-9 text-[11px] uppercase tracking-[0.2em] font-mono text-[#C9C2B5]"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F5F1E8] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#A58B61] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* FAR RIGHT: Language Selector & Plan Journey Button */}
          <div className="flex items-center gap-3.5 sm:gap-4 shrink-0">
            {/* Language Selector Dropdown (Ref-based, zero click interference) */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider uppercase rounded-xs transition-all min-h-[38px] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#A58B61] ${
                  langDropdownOpen
                    ? 'bg-[#243A30] text-[#F5F1E8] border border-[#A58B61]'
                    : 'text-[#C9C2B5] hover:text-[#F5F1E8] border border-[#C9C2B5]/30 hover:border-[#A58B61]'
                }`}
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
                aria-label="Choose language"
              >
                <Globe className="w-3.5 h-3.5 text-[#A58B61]" />
                <span className="font-mono text-[11px] font-semibold">{languageLabels[currentLang].code}</span>
                <ChevronDown
                  className={`w-3 h-3 text-[#A58B61] transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-[#18231D] border border-[#3A4E44] rounded-xs shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="px-3.5 py-1.5 text-[10px] font-mono text-stone-400 tracking-wider uppercase border-b border-white/10">
                    Language / Язык
                  </div>
                  {(Object.keys(languageLabels) as SupportedLanguage[]).map((lang) => {
                    const isSelected = currentLang === lang;
                    return (
                      <button
                        type="button"
                        key={lang}
                        role="menuitem"
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#243A30] text-[#F5F1E8] font-semibold'
                            : 'text-[#C9C2B5] hover:bg-[#202E26] hover:text-[#F5F1E8]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-xs bg-black/30 text-[#A58B61]">
                            {languageLabels[lang].code}
                          </span>
                          <span>{languageLabels[lang].nativeName}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#A58B61]" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Outlined Action Button */}
            <button
              type="button"
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-medium text-[#F5F1E8] hover:text-[#20221F] border border-[#A58B61]/80 hover:border-[#F5F1E8] hover:bg-[#F5F1E8] active:bg-[#C5AD86] transition-all duration-300 rounded-xs shadow-sm whitespace-nowrap shrink-0 min-h-[38px] cursor-pointer"
            >
              {strings.nav.planJourney}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F1E8] hover:text-[#C5AD86] focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer rounded-xs"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18231D] border-b border-[#32453B] px-6 py-6 transition-all shadow-2xl">
          <nav className="flex flex-col gap-4 text-xs font-mono uppercase tracking-[0.18em] text-[#C9C2B5]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-[#F5F1E8] transition-colors border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-stone-500 text-[10px]">→</span>
              </a>
            ))}

            {/* Mobile Language Switcher Row */}
            <div className="pt-3 pb-2 border-b border-white/10">
              <span className="text-[10px] text-stone-400 block mb-2 font-mono">LANGUAGE / ТИЛ:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(languageLabels) as SupportedLanguage[]).map((lang) => {
                  const isSelected = currentLang === lang;
                  return (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        handleLanguageChange(lang);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-3 py-2 text-xs rounded-xs font-mono transition-colors flex items-center justify-between min-h-[40px] cursor-pointer ${
                        isSelected
                          ? 'bg-[#A58B61] text-[#1A2621] font-bold shadow-xs'
                          : 'bg-[#243A30] text-[#C9C2B5] hover:text-white hover:bg-[#2c4539]'
                      }`}
                    >
                      <span>{languageLabels[lang].nativeName}</span>
                      <span className="text-[10px] opacity-75">{languageLabels[lang].code}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3.5 text-center text-xs uppercase tracking-[0.18em] font-medium text-[#20221F] bg-[#F5F1E8] hover:bg-[#C5AD86] rounded-xs transition-colors min-h-[44px] cursor-pointer"
              >
                {strings.nav.planJourney}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
