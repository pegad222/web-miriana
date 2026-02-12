"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { articleFormSchema } from "@/lib/schemas";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createArticle, deleteArticle, updateArticle } from "@/lib/articles";

export type AuthActionState = {
  ok: boolean;
  message?: string;
};

export type ArticleMutationState = {
  ok: boolean;
  slug?: string;
  error?: Record<string, string[] | string> | null;
  message?: string;
};

export type ArticleDeletionState = {
  ok: boolean;
  message?: string;
};

export async function loginAction(_: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { ok: false, message: "Credenciales no válidas" };
  }

  redirect("/admin");
}

export async function logoutAction() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createArticleAction(_: ArticleMutationState, formData: FormData): Promise<ArticleMutationState> {
  const rawValues = {
    title: formData.get("title")?.toString() ?? "",
    excerpt: formData.get("excerpt")?.toString() ?? "",
    content: formData.get("content")?.toString() ?? "",
    coverImage: formData.get("coverImage")?.toString() ?? "",
    tags: formData.get("tags")?.toString() ?? "",
    status: (formData.get("status")?.toString() ?? "draft") as "draft" | "published",
  };

  const parsed = articleFormSchema.safeParse(rawValues);

  if (!parsed.success) {
    return { ok: false, error: parsed.error.flatten().fieldErrors };
  }

  const slug = await createArticle({
    title: parsed.data.title,
    excerpt: parsed.data.excerpt,
    content: parsed.data.content,
    coverImage: parsed.data.coverImage,
    tags: parsed.data.tags
      ?.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    status: parsed.data.status,
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin");
  return { ok: true, slug };
}

export async function updateArticleAction(_: ArticleMutationState, formData: FormData): Promise<ArticleMutationState> {
  const id = formData.get("id")?.toString() ?? "";
  const currentSlug = formData.get("currentSlug")?.toString() ?? "";

  if (!id) {
    return { ok: false, message: "Artículo no encontrado" };
  }

  const rawValues = {
    title: formData.get("title")?.toString() ?? "",
    excerpt: formData.get("excerpt")?.toString() ?? "",
    content: formData.get("content")?.toString() ?? "",
    coverImage: formData.get("coverImage")?.toString() ?? "",
    tags: formData.get("tags")?.toString() ?? "",
    status: (formData.get("status")?.toString() ?? "draft") as "draft" | "published",
  };

  const parsed = articleFormSchema.safeParse(rawValues);

  if (!parsed.success) {
    return { ok: false, error: parsed.error.flatten().fieldErrors };
  }

  try {
    const slug = await updateArticle(id, {
      title: parsed.data.title,
      excerpt: parsed.data.excerpt,
      content: parsed.data.content,
      coverImage: parsed.data.coverImage,
      tags: parsed.data.tags
        ?.split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      status: parsed.data.status,
    });

    revalidatePath("/blog");
    if (currentSlug) {
      revalidatePath(`/blog/${currentSlug}`);
    }
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/admin");

    return { ok: true, slug };
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo actualizar";
    return { ok: false, message };
  }
}

export async function deleteArticleAction(
  _: ArticleDeletionState,
  formData: FormData,
): Promise<ArticleDeletionState> {
  const id = formData.get("id")?.toString() ?? "";
  const slug = formData.get("slug")?.toString() ?? "";

  if (!id) {
    return { ok: false, message: "Artículo no encontrado" };
  }

  try {
    await deleteArticle(id);
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudo eliminar";
    return { ok: false, message };
  }

  revalidatePath("/blog");
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }
  revalidatePath("/admin");

  return { ok: true };
}
