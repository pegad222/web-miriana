"use client";

import Link from "next/link";
import { useState } from "react";
import type { ArticleRecord } from "@/lib/articles/shared";
import { readableDate } from "@/lib/articles/shared";

interface LatestArticlePopupProps {
  article: ArticleRecord;
}

export function LatestArticlePopup({ article }: LatestArticlePopupProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <aside className="fixed bottom-4 right-4 z-30 w-[min(90vw,280px)] rounded-[24px] border border-black/10 bg-white/95 p-4 shadow-elevation">
      <div className="relative pr-6">
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Cerrar aviso de artículo"
          className="absolute right-0 top-0 rounded-full p-1 text-muted-ink transition hover:bg-black/5 hover:text-ink"
        >
          ×
        </button>
        <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-ink">Último artículo</p>
        <p className="mt-2 font-display text-lg text-ink">{article.title}</p>
        <p className="mt-1 text-xs text-muted-ink">{article.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.3em] text-muted-ink">
          <span>{readableDate(article)}</span>
          <Link href={`/blog/${article.slug}`} className="rounded-full bg-ink px-3 py-1 text-bone">
            Abrir
          </Link>
        </div>
      </div>
    </aside>
  );
}
