import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, readableDate } from "@/lib/articles";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.cover_image],
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const paragraphs = article.content.split(/\n+/);

  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">{readableDate(article)}</p>
        <h1 className="font-display text-5xl leading-tight">{article.title}</h1>
        <p className="max-w-3xl text-lg text-muted-ink">{article.excerpt}</p>
      </header>
      <div className="overflow-hidden rounded-[32px]">
        <Image
          src={article.cover_image}
          alt={article.title}
          width={1280}
          height={720}
          className="h-[420px] w-full object-cover"
        />
      </div>
      <div className="prose prose-lg max-w-none text-ink">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg text-muted-ink">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
