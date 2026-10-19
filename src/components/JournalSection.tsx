import React from 'react';
import { ArrowRight } from 'lucide-react';
import { JournalArticle, getArticles } from '../data/articlesData';
import { SupportedLanguage, TranslationStrings } from '../data/translations';
import {
  SongKulYurtArtwork,
  TianShanPassArtwork,
  NomadicHospitalityArtwork,
} from './KyrgyzArtAssets';

interface JournalSectionProps {
  currentLang: SupportedLanguage;
  strings: TranslationStrings;
  onReadArticle: (article: JournalArticle) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ currentLang, strings, onReadArticle }) => {
  const articles = getArticles(currentLang);

  const getArticleVisual = (id: string) => {
    switch (id) {
      case 'first-journey-nomadic-world':
        return <SongKulYurtArtwork className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />;
      case 'what-to-expect-horseback-expedition':
        return <TianShanPassArtwork className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />;
      case 'life-in-the-jailoo-summer-pastures':
      default:
        return <NomadicHospitalityArtwork className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />;
    }
  };

  return (
    <section id="journal" className="py-28 sm:py-36 bg-[#F5F1E8] text-[#20221F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] font-mono font-medium text-[#A58B61] block mb-3">
              {strings.journal.kicker}
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#20221F] tracking-tight leading-[1.08] text-balance">
              {strings.journal.headline}
            </h2>
          </div>

          <div className="text-sm font-sans font-light text-stone-600 max-w-sm leading-relaxed">
            {strings.journal.subtitle}
          </div>
        </div>

        {/* 3 Editorial Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="group cursor-pointer flex flex-col bg-[#EFEAE0]/80 hover:bg-[#EFEAE0] border border-[#C9C2B5]/60 hover:border-[#A58B61] rounded-xs overflow-hidden transition-all duration-300 shadow-xs"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#1A2621]">
                {getArticleVisual(article.id)}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-[#20221F]/85 backdrop-blur-xs text-[10px] font-mono uppercase tracking-wider text-[#C5AD86] border border-white/10 rounded-xs">
                  {article.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-3">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#20221F] group-hover:text-[#243A30] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs font-serif italic text-stone-600 mb-3">
                    {article.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-600 font-sans font-light line-clamp-3 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C9C2B5]/50 flex items-center justify-between text-xs font-medium text-[#243A30]">
                  <span className="tracking-wider uppercase text-[10px] font-mono text-[#A58B61]">
                    {strings.journal.byAuthor} {article.author}
                  </span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform font-mono text-[11px] uppercase tracking-wider">
                    {strings.journal.readArticle}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
