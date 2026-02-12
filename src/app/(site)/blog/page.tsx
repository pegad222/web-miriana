import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedArticles, readableDate } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Artículos",
  description:
    "Reflexiones sobre conflictos familiares y laborales, negociación estratégica y enfoque sistémico aplicado al derecho.",
};

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <div className="space-y-8">
      <header className="rounded-[32px] bg-white/85 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Blog</p>
        <h1 className="mt-3 font-display text-5xl">Ideas para ordenar conflictos</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-ink">
          Artículos para comprender por qué los conflictos escalan, cómo negociar con responsabilidad y cuándo litigar sin destruir relaciones.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.slug}`}
            className="rounded-[32px] border border-black/5 bg-white/90 p-6 shadow-elevation transition hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">{readableDate(article)}</p>
            <h2 className="mt-3 font-display text-3xl">{article.title}</h2>
            <p className="mt-2 text-sm text-slate">{article.excerpt}</p>
            <div className="mt-4 text-xs uppercase tracking-[0.3em] text-burgundy">Leer artículo →</div>
          </Link>
        ))}
      </section>
    </div>
  );
}
