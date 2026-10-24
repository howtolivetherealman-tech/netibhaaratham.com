import React from 'react';
import { X, Eye, Youtube, MapPin, Share2, ExternalLink, UserCheck } from 'lucide-react';
import {
  extractYouTubeId,
  type LanguageCode,
  type NewsArticleItem,
} from '../utils/newsLogic';
import { getArticleText, TRANSLATIONS } from '../data/indiaLocations';
import { EditorialIllustration } from './EditorialIllustration';

interface ArticleDetailModalProps {
  article: NewsArticleItem | null;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  onClose: () => void;
  onSelectMandal: (state: string, district: string, mandal: string) => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  language,
  onLanguageChange,
  onClose,
  onSelectMandal,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!article) return null;

  const t = TRANSLATIONS[language];
  const { title, summary, content } = getArticleText(article, language);
  const youtubeId = extractYouTubeId(article.youtubeUrl);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 md:p-6 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div className="w-full max-w-3xl rounded-2xl bg-[#FBF9F5] border border-stone-300 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="bg-[#0B1D3A] text-white px-5 py-3.5 flex items-center justify-between gap-4 border-b border-amber-500/30 shrink-0">
          <div className="flex items-center gap-2 text-xs text-amber-300 font-medium truncate">
            <span>నేటిభారతం · NETI BHARATAM</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectMandal(article.state, article.district, article.mandal);
              }}
              className="inline-flex items-center gap-1 underline hover:text-white cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>
                {article.mandal} ({article.district}, {article.state})
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center bg-white/10 rounded-lg p-0.5">
              {(['te', 'hi', 'en'] as LanguageCode[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => onLanguageChange(lang)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    language === lang
                      ? 'bg-amber-400 text-[#0B1D3A]'
                      : 'text-stone-200 hover:text-white'
                  }`}
                >
                  {lang === 'te' ? 'తెలుగు' : lang === 'hi' ? 'हिन्दी' : 'EN'}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close article reader"
              className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {/* Unboxed Metadata Line (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 border-b border-stone-200 pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold uppercase tracking-wider text-[#9A3412]">
                {t.categories[article.category] || article.category}
              </span>
              <span aria-hidden="true">·</span>
              <span>
                {article.state} / {article.district} / <strong>{article.mandal} మండలం</strong>
              </span>
              <span aria-hidden="true">·</span>
              <span>{new Date(article.createdAt).toLocaleDateString('en-IN')}</span>
            </div>

            <div className="flex items-center gap-4 font-mono tabular-nums font-semibold text-stone-800">
              <span className="inline-flex items-center gap-1.5" title="Total Article Views">
                <Eye className="w-4 h-4 text-[#9A3412]" />
                <span>
                  {article.views.toLocaleString('en-IN')} {t.viewsLabel}
                </span>
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            id="article-modal-title"
            className="text-2xl md:text-3xl font-bold text-stone-900 leading-snug"
          >
            {title}
          </h1>

          {/* Lead Deck / Summary */}
          <p className="text-base md:text-lg font-medium text-stone-700 leading-relaxed border-y border-stone-200 py-4">
            {summary}
          </p>

          {/* YouTube Video Embed OR Editorial Illustration */}
          {youtubeId ? (
            <div className="space-y-2">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-stone-300 shadow-sm">
                <iframe
                  title={title}
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600">
                <a
                  href="https://www.youtube.com/channel/UCyfLbWdu0fNqEJdH7Ldi4Fg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#9A3412] hover:underline"
                >
                  <Youtube className="w-4 h-4" />
                  <span>నేటిభారతం వీడియో అప్‌డేట్స్ (YouTube చానెల్)</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCyfLbWdu0fNqEJdH7Ldi4Fg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#0B1D3A] underline"
                >
                  <span>నేటిభారతం YouTube చానెల్ తెరవండి</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-stone-200">
              <EditorialIllustration
                imageType={article.imageType}
                category={article.category}
                level={article.level}
                mandal={article.mandal}
                district={article.district}
              />
            </div>
          )}

          {/* Full Story Prose */}
          <div className="space-y-4 text-base text-stone-800 leading-relaxed max-w-prose">
            {content.split('\n\n').map((para, idx) => (
              <p key={idx} className={idx === 0 ? 'first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#9A3412]' : ''}>
                {para}
              </p>
            ))}
          </div>

          {/* Reporter Attribution & Mandal Page Link */}
          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-amber-300 flex items-center justify-center font-bold text-sm">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-stone-900">{article.reporterName}</div>
                <div className="text-xs text-stone-600">
                  ధృవీకరించబడిన రిపోర్టర్ · {article.mandal} మండలం, {article.district}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectMandal(article.state, article.district, article.mandal);
                }}
                className="px-3.5 py-2 rounded-lg border border-stone-300 bg-white text-xs font-semibold text-stone-800 hover:bg-stone-100 cursor-pointer"
              >
                {article.mandal} మండల వార్తలన్నీ చూడండి
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0B1D3A] text-white text-xs font-semibold hover:bg-[#142F5A] cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'లింక్ కాపీ అయింది!' : 'షేర్ చేయండి'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
