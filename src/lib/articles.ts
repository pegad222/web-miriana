import "server-only";

import { createClient } from "@supabase/supabase-js";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils";
import type { ArticleRecord } from "@/lib/articles/shared";
import { readableDate } from "@/lib/articles/shared";

export { readableDate };

const fallbackArticles: ArticleRecord[] = [
  {
    id: "mock-1",
    title: "Cuando el conflicto familiar necesita estrategia y no más litigio",
    slug: "conflicto-familiar-estrategia",
    excerpt:
      "Ordenar la dinámica antes de judicializar evita escalar costes emocionales y económicos.",
    content:
      "Analizar la raíz sistémica del conflicto permite contener la escalada y definir acuerdos con foco en el futuro. El trabajo previo a la demanda es clave para proteger a la familia y sostener el proceso legal solo cuando es realmente necesario.",
    cover_image: "/images/gallery/PHOTO-2026-02-12-10-18-38.jpg",
    tags: ["conflicto familiar", "estrategia"],
    status: "published",
    created_at: new Date().toISOString(),
  },
  {
    id: "mock-2",
    title: "Negociación laboral sistémica en contextos de tensión",
    slug: "negociacion-laboral-sistemica",
    excerpt:
      "Los procesos de reestructuración requieren diseñar mapas de decisión que incluyan cultura y personas.",
    content:
      "Cuando la organización acompaña la conversación con orden y límites claros, la negociación laboral deja de ser un campo de batalla. La intervención estratégica permite preservar relaciones, reputación y continuidad operativa.",
    cover_image: "/images/gallery/PHOTO-2026-02-12-10-24-07.jpg",
    tags: ["conflicto laboral", "negociacion"],
    status: "published",
    created_at: new Date().toISOString(),
  },
];

function getSupabasePublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    return null;
  }

  return createClient(url, anon, {
    auth: { persistSession: false },
  });
}

export async function getPublishedArticles() {
  const supabase = getSupabasePublicClient();

  if (!supabase) {
    return fallbackArticles;
  }

  try {
    const { data, error } = await supabase
      .from("articles")
      .select("id, title, slug, excerpt, content, cover_image, tags, status, created_at")
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (error || !data) {
      console.warn("Supabase error", error?.message);
      return fallbackArticles;
    }

    return data as ArticleRecord[];
  } catch (error) {
    console.warn("Supabase fallback", error);
    return fallbackArticles;
  }
}

export async function getArticleBySlug(slug: string) {
  const supabase = getSupabasePublicClient();

  if (!supabase) {
    return fallbackArticles.find((article) => article.slug === slug) ?? null;
  }

  try {
    const { data, error } = await supabase
      .from("articles")
      .select("id, title, slug, excerpt, content, cover_image, tags, status, created_at")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return null;
    }

    return data as ArticleRecord;
  } catch (error) {
    console.warn("Supabase fallback", error);
    return null;
  }
}

export async function getAllArticles() {
  const admin = createSupabaseAdminClient();

  try {
    const { data, error } = await admin
      .from("articles")
      .select("id, title, slug, excerpt, content, cover_image, tags, status, created_at")
      .order("created_at", { ascending: false });

    if (error || !data) {
      console.warn("Supabase admin error", error?.message);
      return [] as ArticleRecord[];
    }

    return data as ArticleRecord[];
  } catch (error) {
    console.warn("Supabase admin fallback", error);
    return [] as ArticleRecord[];
  }
}

export async function createArticle(values: {
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags?: string[];
  status: "draft" | "published";
}) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Debes iniciar sesión para crear artículos");
  }

  const admin = createSupabaseAdminClient();

  const payload = {
    id: crypto.randomUUID(),
    title: values.title,
    slug: slugify(values.title),
    excerpt: values.excerpt,
    content: values.content,
    cover_image: values.coverImage,
    tags: values.tags ?? [],
    status: values.status,
  };

  const { error } = await admin.from("articles").upsert(payload, { onConflict: "slug" });

  if (error) {
    throw new Error(error.message);
  }

  return payload.slug;
}

export async function updateArticle(
  id: string,
  values: {
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    tags?: string[];
    status: "draft" | "published";
  }
) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Debes iniciar sesión para editar artículos");
  }

  const admin = createSupabaseAdminClient();

  const payload = {
    title: values.title,
    slug: slugify(values.title),
    excerpt: values.excerpt,
    content: values.content,
    cover_image: values.coverImage,
    tags: values.tags ?? [],
    status: values.status,
  };

  const { error } = await admin.from("articles").update(payload).eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  return payload.slug;
}

export async function deleteArticle(id: string) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Debes iniciar sesión para eliminar artículos");
  }

  const admin = createSupabaseAdminClient();
  const { error } = await admin.from("articles").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
