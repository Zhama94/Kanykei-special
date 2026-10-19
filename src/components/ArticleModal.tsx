import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { JournalArticle, getArticleById } from '../data/articlesData';
import { SupportedLanguage, TranslationStrings } from '../data/translations';

interface ArticleModalProps {
  article: JournalArticle | null;
  currentLang: SupportedLanguage;
  strings: TranslationStrings;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  currentLang,
  strings,
  onClose,
  onOpenInquiry,
}) => {
  // Handle Escape key
  useEffect(() => {
    if (!article) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [article, onClose]);

  if (!article) return null;

  // Retrieve localized article
  const localizedArticle = getArticleById(article.id, currentLang) || article;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#F5F1E8] text-[#20221F] shadow-2xl rounded-none sm:rounded-xs overflow-hidden my-auto min-h-screen sm:min-h-0 flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-modal-title"
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-[#20221F]/80 text-[#F5F1E8] hover:bg-[#20221F] hover:text-[#C5AD86] transition-colors cursor-pointer"
          aria-label={strings.tourModal.closeLabel}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Header */}
        <div className="bg-[#243A30] text-[#F5F1E8] p-8 sm:p-12 relative border-b border-[#3A4E44]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C5AD86] uppercase tracking-wider mb-4">
            <span>EDITORIAL DISPATCH 0{localizedArticle.number}</span>
            <span aria-hidden="true">·</span>
            <span>{localizedArticle.category}</span>
          </div>

          <h1
            id="article-modal-title"
            className="text-3xl sm:text-5xl font-serif font-medium text-[#F5F1E8] leading-[1.12] mb-4 text-balance"
          >
            {localizedArticle.title}
          </h1>

          <p className="text-base sm:text-lg font-serif italic text-[#E5DFC8] max-w-2xl mb-6">
            {localizedArticle.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#C9C2B5] pt-4 border-t border-white/10">
            <span>{strings.journal.byAuthor} {localizedArticle.author} ({localizedArticle.authorRole})</span>
            <span aria-hidden="true">·</span>
            <span>{localizedArticle.date}</span>
            <span aria-hidden="true">·</span>
            <span>{localizedArticle.readTime}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-8 sm:p-12 space-y-8 flex-1 overflow-y-auto max-h-[60vh]">
          {/* Pull Quote */}
          <div className="py-6 border-y border-[#C9C2B5]/60 text-center my-6">
            <blockquote className="text-xl sm:text-2xl font-serif italic text-[#243A30] max-w-2xl mx-auto leading-relaxed">
              “{localizedArticle.pullQuote}”
            </blockquote>
          </div>

          {/* Editorial Content Sections with Drop Cap on first section */}
          {localizedArticle.content.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              {sec.sectionTitle && (
                <h2 className="text-2xl font-serif font-medium text-[#243A30] pt-4">
                  {sec.sectionTitle}
                </h2>
              )}
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className={`text-stone-700 text-base sm:text-lg leading-relaxed font-sans editorial-measure ${
                    idx === 0 && pIdx === 0
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#243A30]'
                      : ''
                  }`}
                >
                  {p}
                </p>
              ))}
            </section>
          ))}

          {/* Field Notes Box */}
          <div className="mt-12 p-6 bg-[#EFEAE0] border border-[#C9C2B5] rounded-xs">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#A58B61] mb-4">
              EXPEDITION FIELD NOTES & DISPATCH ARCHIVE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {localizedArticle.fieldNotes.map((note, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="font-mono text-stone-500 uppercase">{note.label}:</span>
                  <p className="font-medium text-[#20221F]">{note.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#EFEAE0] border-t border-[#C9C2B5] flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-wider text-stone-600 hover:text-[#20221F] cursor-pointer"
          >
            {strings.tourModal.closeLabel}
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-[#F5F1E8] bg-[#243A30] hover:bg-[#1A2621] rounded-xs transition-colors cursor-pointer"
          >
            {strings.nav.planJourney}
          </button>
        </div>
      </div>
    </div>
  );
};
