import Link from "next/link";
import { redirect } from "next/navigation";
import { ArticleForm } from "@/components/forms/article-form";
import { getPublishedArticles, readableDate } from "@/lib/articles";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { logoutAction } from "./actions";

export default async function AdminDashboard() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const articles = await getPublishedArticles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-ink via-petrol to-burgundy p-6 text-bone">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-white/90 p-10 text-ink shadow-elevation">
        <header className="flex flex-col gap-4 border-b border-black/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">Área privada</p>
            <h1 className="font-display text-4xl">Editor estratégico</h1>
            <p className="text-sm text-slate">Publica artículos para nutrir la autoridad intelectual.</p>
          </div>
          <form action={logoutAction}>
            <button className="rounded-full border border-black/20 px-4 py-2 text-sm font-semibold">
              Cerrar sesión
            </button>
          </form>
        </header>

        <section className="mt-8">
          <h2 className="font-display text-2xl">Nuevo artículo</h2>
          <p className="text-sm text-slate">Los campos obligatorios ayudan al SEO y a la narrativa.</p>
          <div className="mt-6">
            <ArticleForm />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl">Artículos publicados</h2>
            <Link href="/blog" className="text-sm uppercase tracking-[0.3em] text-burgundy">
              Ver blog →
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {articles.map((article) => (
              <div key={article.id} className="rounded-2xl border border-black/10 bg-white/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">{readableDate(article)}</p>
                <p className="font-display text-xl">{article.title}</p>
                <p className="text-sm text-slate">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
