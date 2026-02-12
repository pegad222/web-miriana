"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createArticleAction } from "@/app/(private)/admin/actions";

const initialState = { ok: false, slug: "", error: null as Record<string, string[] | string> | null };

export function ArticleForm() {
  const [state, formAction] = useActionState(createArticleAction, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-muted-ink">
          Titular
          <input name="title" className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink" required />
        </label>
        <label className="text-sm font-semibold text-muted-ink">
          Imagen de portada (URL pública)
          <input name="coverImage" className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink" required />
        </label>
      </div>
      <label className="text-sm font-semibold text-muted-ink">
        Extracto (máx. 280 caracteres)
        <textarea
          name="excerpt"
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
          rows={8}
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink"
          required
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-semibold text-muted-ink">
          Tags (separados por coma)
          <input name="tags" className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink" />
        </label>
        <label className="text-sm font-semibold text-muted-ink">
          Estado
          <select name="status" className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3 text-ink">
            <option value="draft">Borrador</option>
            <option value="published">Publicado</option>
          </select>
        </label>
      </div>
      {state.ok && (
        <div className="rounded-2xl border border-forest/20 bg-forest/10 p-3 text-sm text-forest">
          Artículo guardado correctamente ({state.slug}).
        </div>
      )}
      {state.error && (
        <div className="rounded-2xl border border-burgundy/20 bg-burgundy/5 p-3 text-sm text-burgundy">
          Revisa los campos obligatorios.
        </div>
      )}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-full rounded-full bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone disabled:opacity-60"
      disabled={pending}
    >
      {pending ? "Guardando..." : "Guardar artículo"}
    </button>
  );
}
