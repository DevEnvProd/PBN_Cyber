import React, { useState, useEffect } from "react";
import { ARTICLES, Article } from "../data/articles";
import { ArrowLeft, User, Calendar, Clock, Bookmark, Share2, ThumbsUp } from "lucide-react";

interface ArticleDetailProps {
  slug: string;
  onBack: () => void;
}

export default function ArticleDetail({ slug, onBack }: ArticleDetailProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [likes, setLikes] = useState(12);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const found = ARTICLES.find((a) => a.slug === slug);
    if (found) {
      setArticle(found);
    }
    // Scroll to top when article is loaded
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!article) {
    return (
      <div className="py-24 text-center text-white/60">
        <p className="mb-4">Article not found.</p>
        <button onClick={onBack} className="text-cyber-cyan hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <article className="min-h-screen py-12 text-white" id={`article-${article.slug}`}>
      {/* Schema.org Article metadata in JSON-LD (CRITICAL FOR GOOGLE/SEMRUSH crawling) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DiscussionForumPosting",
          "headline": article.title,
          "description": article.metaDescription,
          "articleSection": article.category,
          "author": {
            "@type": "Person",
            "name": article.author
          },
          "datePublished": article.date,
          "publisher": {
            "@type": "Organization",
            "name": "CyberPulse",
            "logo": {
              "@type": "ImageObject",
              "url": "https://illuminatelabs.space/asset/video/banner_promo_winbox.mp4"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://cyberpulse.site/article/${article.slug}`
          }
        })}
      </script>

      {/* Navigation breadcrumbs and back button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-cyber-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Forums
        </button>
      </div>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/10 text-cyber-cyan uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-xs text-white/40">•</span>
          <span className="text-xs text-white/40 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/10">
              <img src={`https://picsum.photos/seed/${article.author}/40/40`} alt={article.author} />
            </div>
            <div>
              <div className="text-sm font-bold text-white/90">{article.author}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">Forum Veteran</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-white/40 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Styled Rich HTML Article Body for indexing and SEO */}
      <div 
        className="prose prose-invert max-w-none text-white/80 leading-relaxed space-y-6 mb-12 
          prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight 
          prose-h2:text-2xl prose-h2:pt-4 prose-h3:text-xl
          prose-p:text-base prose-p:text-white/70 
          prose-strong:text-white prose-strong:font-bold
          prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
          prose-li:text-white/70"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Actions / Interactive Area */}
      <div className="flex items-center justify-between border-t border-b border-white/5 py-6 mb-12">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-widest transition-all ${
              hasLiked ? "bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan" : "bg-white/5 border-white/5 hover:border-white/20 text-white/60"
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            Helpful ({likes})
          </button>
          <button className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 text-white/60 transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
        <button 
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Article link copied to clipboard!");
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 text-xs font-bold uppercase tracking-widest text-white/60 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>

      {/* User comments and simulated social authority elements mock-up */}
      <section className="space-y-6">
        <h4 className="font-bold text-sm uppercase tracking-[0.2em] text-white/60">Community Discussion</h4>
        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-white/10 overflow-hidden">
                <img src="https://picsum.photos/seed/mod/20/20" alt="" />
              </div>
              <span className="text-xs font-bold text-cyber-gold">Mod_Pro</span>
              <span className="text-[10px] text-white/30 uppercase tracking-widest">1 day ago</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Extremely comprehensive breakdown! This kind of strategic insight is exactly why the CyberPulse community remains the top South East Asia Gaming Forum. The indexing structure of these threads makes our guides easily reachable.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
