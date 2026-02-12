import Link from "next/link";
import { redirect } from "next/navigation";
import { ArticleForm } from "@/components/forms/article-form";
import { ArticleEditCard } from "@/components/forms/article-edit-card";
import { getAllArticles } from "@/lib/articles";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { logoutAction } from "./actions";

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const articles = await getAllArticles();

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
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl">Gestiona tus artículos</h2>
              <p className="text-sm text-slate">Edita o elimina publicaciones sin salir de esta pantalla.</p>
            </div>
            <Link href="/blog" className="text-sm uppercase tracking-[0.3em] text-burgundy">
              Ver blog →
            </Link>
          </div>
          <div className="mt-4 space-y-4">
            {articles.length === 0 ? (
              <p className="rounded-2xl border border-dashed border-black/20 bg-white/60 p-4 text-sm text-muted-ink">
                Aún no hay artículos registrados. Crea el primero para verlo aquí.
              </p>
            ) : (
              articles.map((article) => <ArticleEditCard key={article.id} article={article} />)
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
