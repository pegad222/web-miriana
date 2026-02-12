"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { updateArticleAction, deleteArticleAction } from "@/app/(private)/admin/actions";
import type { ArticleRecord } from "@/lib/articles/shared";
import { readableDate } from "@/lib/articles/shared";

const formInitialState = {
  ok: false,
  slug: "",
  error: null as Record<string, string[] | string> | null,
  message: undefined as string | undefined,
};

const deleteInitialState = {
  ok: false,
  message: undefined as string | undefined,
};

export function ArticleEditCard({ article }: { article: ArticleRecord }) {
  const [state, formAction] = useActionState(updateArticleAction, formInitialState);
  const [deleteState, deleteAction] = useActionState(deleteArticleAction, deleteInitialState);

  const tagsValue = article.tags?.join(", ") ?? "";

  return (
    <details className="rounded-2xl border border-black/10 bg-white/80 p-5" open={article.status === "draft"}>
      <summary className="cursor-pointer list-none">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">{readableDate(article)}</p>
            <h3 className="font-display text-xl">{article.title}</h3>
          </div>
          <span className="inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-ink">
            {article.status === "published" ? "Publicado" : "Borrador"}
          </span>
        </div>
      </summary>

      <div className="mt-6 space-y-4">
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="id" value={article.id} />
          <input type="hidden" name="currentSlug" value={article.slug} />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-muted-ink">
              Titular
              <input
                name="title"
                defaultValue={article.title}
                className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink"
                required
              />
            </label>
            <label className="text-sm font-semibold text-muted-ink">
              Imagen de portada (URL pública)
              <input
                name="coverImage"
                defaultValue={article.cover_image}
                className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink"
                required
              />
            </label>
          </div>
          <label className="text-sm font-semibold text-muted-ink">
            Extracto (máx. 280 caracteres)
            <textarea
              name="excerpt"
              defaultValue={article.excerpt}
              maxLength={280}
              rows={3}
              className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink"
              required
            />
          </label>
          <label className="text-sm font-semibold text-muted-ink">
            Contenido
            <textarea
              name="content"
              defaultValue={article.content}
              rows={8}
              className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink"
              required
            />
          </label>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-muted-ink">
              Tags (separados por coma)
              <input
                name="tags"
                defaultValue={tagsValue}
                className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink"
              />
            </label>
            <label className="text-sm font-semibold text-muted-ink">
              Estado
              <select
                name="status"
                defaultValue={article.status}
                className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink"
              >
                <option value="draft">Borrador</option>
                <option value="published">Publicado</option>
              </select>
            </label>
          </div>

          {state.ok && (
            <div className="rounded-2xl border border-forest/20 bg-forest/10 p-3 text-sm text-forest">
              Artículo actualizado ({state.slug}).
            </div>
          )}
          {state.error && (
            <div className="rounded-2xl border border-burgundy/20 bg-burgundy/5 p-3 text-sm text-burgundy">
              Revisa los campos obligatorios.
            </div>
          )}
          {state.message && !state.ok && !state.error && (
            <div className="rounded-2xl border border-burgundy/20 bg-burgundy/5 p-3 text-sm text-burgundy">
              {state.message}
            </div>
          )}

          <EditSubmitButton />
        </form>

        <form action={deleteAction} className="flex justify-end">
          <input type="hidden" name="id" value={article.id} />
          <input type="hidden" name="slug" value={article.slug} />
          <DeleteButton title={article.title} />
        </form>
        {deleteState.message && (
          <p className="text-sm text-burgundy">{deleteState.message}</p>
        )}
      </div>
    </details>
  );
}

function EditSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Actualizando..." : "Guardar cambios"}
    </button>
  );
}

function DeleteButton({ title }: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-full border border-burgundy px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-burgundy disabled:opacity-60"
      disabled={pending}
      onClick={(event) => {
        if (pending) {
          return;
        }

        const confirmed = window.confirm(`¿Eliminar "${title}"? Esta acción es permanente.`);
        if (!confirmed) {
          event.preventDefault();
        }
      }}
    >
      {pending ? "Eliminando..." : "Eliminar"}
    </button>
  );
}
