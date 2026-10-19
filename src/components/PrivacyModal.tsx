import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { TranslationStrings } from '../data/translations';

interface PrivacyModalProps {
  isOpen: boolean;
  strings: TranslationStrings;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, strings, onClose }) => {
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#F5F1E8] text-[#20221F] shadow-2xl rounded-xs overflow-hidden my-auto border border-[#C9C2B5] flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        {/* Header */}
        <div className="bg-[#243A30] text-[#F5F1E8] px-6 sm:px-8 py-5 relative flex items-center justify-between border-b border-[#3A4E44]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#A58B61]" />
            <h2 id="privacy-modal-title" className="text-xl font-serif font-medium">
              {strings.privacyModal.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#C9C2B5] hover:text-[#F5F1E8] hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
          {strings.privacyModal.sections.map((sec, idx) => (
            <section key={idx}>
              <h3 className="font-serif text-base font-semibold text-[#243A30] mb-2">
                {sec.title}
              </h3>
              <p>{sec.body}</p>
            </section>
          ))}

          <div className="pt-4 border-t border-[#C9C2B5]/60 text-stone-500 font-mono text-[11px]">
            {strings.privacyModal.lastUpdated}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#EFEAE0] border-t border-[#C9C2B5] text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-xs uppercase tracking-wider font-medium text-[#F5F1E8] bg-[#243A30] hover:bg-[#1A2621] rounded-xs transition-colors cursor-pointer"
          >
            {strings.privacyModal.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
