import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Compass, ShieldCheck } from 'lucide-react';
import { getTours } from '../data/toursData';
import { SupportedLanguage, TranslationStrings } from '../data/translations';

interface InquiryModalProps {
  isOpen: boolean;
  currentLang: SupportedLanguage;
  strings: TranslationStrings;
  onClose: () => void;
  preselectedTourId?: string;
  onOpenPrivacy: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  currentLang,
  strings,
  onClose,
  preselectedTourId,
  onOpenPrivacy,
}) => {
  const localizedTours = getTours(currentLang);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [preferredJourney, setPreferredJourney] = useState(preselectedTourId || 'nomad-trail-song-kul');
  const [travelDates, setTravelDates] = useState('');
  const [numberOfTravelers, setNumberOfTravelers] = useState(strings.inquiry.travelersOptions[1] || '2 riders');
  const [ridingExperience, setRidingExperience] = useState('Intermediate');
  const [preferredLanguage, setPreferredLanguage] = useState(strings.inquiry.guideLangOptions[0] || 'English');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync preselectedTourId when modal opens
  useEffect(() => {
    if (preselectedTourId) {
      setPreferredJourney(preselectedTourId);
    }
  }, [preselectedTourId, isOpen]);

  // Handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = strings.inquiry.errors.fullName;
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      errs.email = strings.inquiry.errors.email;
    }
    if (!country.trim()) errs.country = strings.inquiry.errors.country;
    if (!privacyConsent) errs.privacyConsent = strings.inquiry.errors.privacy;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-grade expedition matching submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#F5F1E8] text-[#20221F] shadow-2xl rounded-xs overflow-hidden my-auto border border-[#C9C2B5]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
      >
        {/* Header */}
        <div className="bg-[#243A30] text-[#F5F1E8] px-6 sm:px-8 py-6 relative">
          <button
            type="button"
            onClick={resetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-[#C9C2B5] hover:text-[#F5F1E8] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5AD86] block mb-1">
            TAI TRAVEL · BOUTIQUE EXPEDITION CONSULTATION
          </span>
          <h2 id="inquiry-modal-title" className="text-2xl sm:text-3xl font-serif font-normal">
            {strings.inquiry.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C9C2B5] font-light mt-1 max-w-md">
            {strings.inquiry.subtitle}
          </p>
        </div>

        {/* Modal Form Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#243A30] text-[#A58B61] flex items-center justify-center mx-auto shadow-md border border-[#3A4E44]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-[#243A30] mb-2">
                  {strings.inquiry.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  {strings.inquiry.successSubtitle}
                </p>
              </div>

              <div className="text-left bg-[#EFEAE0] p-6 rounded-xs border border-[#C9C2B5] text-xs text-stone-700 space-y-3 max-w-lg mx-auto">
                <span className="font-mono text-[#A58B61] uppercase font-semibold block mb-1">
                  What Happens Next / Следующие шаги:
                </span>
                {strings.inquiry.successSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#A58B61]">{idx + 1}.</span>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={resetAndClose}
                className="px-8 py-3 text-xs uppercase tracking-wider font-medium text-[#F5F1E8] bg-[#243A30] hover:bg-[#1A2621] rounded-xs transition-colors cursor-pointer"
              >
                {strings.inquiry.successClose}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                    {strings.inquiry.fullNameLabel} *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder={strings.inquiry.fullNamePlaceholder}
                    className={`w-full px-3.5 py-2.5 text-xs bg-white/90 border rounded-xs text-[#20221F] focus:outline-none ${
                      errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#C9C2B5] focus:border-[#243A30]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                    {strings.inquiry.emailLabel} *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder={strings.inquiry.emailPlaceholder}
                    className={`w-full px-3.5 py-2.5 text-xs bg-white/90 border rounded-xs text-[#20221F] focus:outline-none ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#C9C2B5] focus:border-[#243A30]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Country of Residence & Preferred Journey */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                    {strings.inquiry.countryLabel} *
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                      if (errors.country) setErrors({ ...errors, country: '' });
                    }}
                    placeholder={strings.inquiry.countryPlaceholder}
                    className={`w-full px-3.5 py-2.5 text-xs bg-white/90 border rounded-xs text-[#20221F] focus:outline-none ${
                      errors.country ? 'border-red-500 bg-red-50/20' : 'border-[#C9C2B5] focus:border-[#243A30]'
                    }`}
                  />
                  {errors.country && <p className="text-[11px] text-red-600 mt-1">{errors.country}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                    {strings.inquiry.journeyLabel}
                  </label>
                  <select
                    value={preferredJourney}
                    onChange={(e) => setPreferredJourney(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white/90 border border-[#C9C2B5] rounded-xs text-[#20221F] focus:outline-none focus:border-[#243A30] cursor-pointer"
                  >
                    {localizedTours.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.title} ({t.durationLabel})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Target Dates & Number of Travelers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                    {strings.inquiry.datesLabel}
                  </label>
                  <input
                    type="text"
                    value={travelDates}
                    onChange={(e) => setTravelDates(e.target.value)}
                    placeholder={strings.inquiry.datesPlaceholder}
                    className="w-full px-3.5 py-2.5 text-xs bg-white/90 border border-[#C9C2B5] rounded-xs text-[#20221F] focus:outline-none focus:border-[#243A30]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                    {strings.inquiry.travelersLabel}
                  </label>
                  <select
                    value={numberOfTravelers}
                    onChange={(e) => setNumberOfTravelers(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-white/90 border border-[#C9C2B5] rounded-xs text-[#20221F] focus:outline-none focus:border-[#243A30] cursor-pointer"
                  >
                    {strings.inquiry.travelersOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Riding Experience Level (Radio Choice) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-2">
                  {strings.inquiry.experienceLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {strings.inquiry.experienceOptions.map((exp) => (
                    <label
                      key={exp.value}
                      className={`p-3 border rounded-xs flex items-start gap-3 cursor-pointer transition-colors ${
                        ridingExperience === exp.value
                          ? 'border-[#243A30] bg-[#EAE4D7]'
                          : 'border-[#C9C2B5] bg-white/60 hover:bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="ridingExperience"
                        value={exp.value}
                        checked={ridingExperience === exp.value}
                        onChange={(e) => setRidingExperience(e.target.value)}
                        className="mt-0.5 accent-[#243A30]"
                      />
                      <div>
                        <span className="block text-xs font-semibold text-[#20221F]">
                          {exp.label}
                        </span>
                        <span className="block text-[11px] text-stone-600 mt-0.5 leading-snug">
                          {exp.desc}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Preferred Language for Expedition Guide */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                  {strings.inquiry.guideLangLabel}
                </label>
                <div className="flex flex-wrap gap-2">
                  {strings.inquiry.guideLangOptions.map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => setPreferredLanguage(lang)}
                      className={`px-3 py-1.5 text-xs font-mono rounded-xs transition-colors cursor-pointer ${
                        preferredLanguage === lang
                          ? 'bg-[#243A30] text-[#F5F1E8] font-bold border border-[#243A30]'
                          : 'bg-white border border-[#C9C2B5] text-stone-600 hover:text-[#20221F]'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 mb-1.5">
                  {strings.inquiry.notesLabel}
                </label>
                <textarea
                  rows={3}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder={strings.inquiry.notesPlaceholder}
                  className="w-full px-3.5 py-2.5 text-xs bg-white/90 border border-[#C9C2B5] rounded-xs text-[#20221F] focus:outline-none focus:border-[#243A30] resize-none"
                />
              </div>

              {/* Privacy Policy Consent Checkbox */}
              <div>
                <label className="flex items-start gap-2.5 text-xs text-stone-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={privacyConsent}
                    onChange={(e) => {
                      setPrivacyConsent(e.target.checked);
                      if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: '' });
                    }}
                    className="mt-0.5 accent-[#243A30]"
                  />
                  <span>
                    {strings.inquiry.privacyConsent}{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenPrivacy();
                      }}
                      className="underline text-[#243A30] hover:text-[#A58B61] cursor-pointer"
                    >
                      {strings.inquiry.privacyLink}
                    </button>
                  </span>
                </label>
                {errors.privacyConsent && (
                  <p className="text-[11px] text-red-600 mt-1">{errors.privacyConsent}</p>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2 border-t border-[#C9C2B5]/60 flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500">
                  Direct Response Guarantee: &lt; 24h
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 text-xs uppercase tracking-[0.16em] font-medium text-[#F5F1E8] bg-[#243A30] hover:bg-[#1A2621] active:bg-[#121D18] disabled:opacity-50 transition-colors rounded-xs shadow-md whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? strings.inquiry.submittingBtn : strings.inquiry.submitBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
