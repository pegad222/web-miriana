"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { articleFormSchema } from "@/lib/schemas";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createArticle } from "@/lib/articles";

export async function loginAction(_: unknown, formData: FormData) {
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { ok: false, message: "Credenciales no válidas" };
  }

  redirect("/admin");
}

export async function logoutAction() {
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createArticleAction(_: unknown, formData: FormData) {
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
  return { ok: true, slug };
}
