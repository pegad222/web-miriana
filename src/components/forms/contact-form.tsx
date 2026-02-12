"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/(site)/contacto/actions";

const initialState = { ok: false, error: null as Record<string, string[] | string> | null };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-muted-ink">
          Nombre completo
          <input
            type="text"
            name="fullName"
            required
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3"
          />
        </label>
        <label className="text-sm font-semibold text-muted-ink">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-muted-ink">
          Teléfono (opcional)
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3"
          />
        </label>
        <label className="text-sm font-semibold text-muted-ink">
          Tipo de conflicto
          <select
            name="conflictType"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3"
          >
            <option value="familiar">Familiar</option>
            <option value="laboral">Laboral</option>
          </select>
        </label>
      </div>
      <label className="text-sm font-semibold text-muted-ink">
        Breve resumen (máx. 500 caracteres)
        <textarea
          name="summary"
          maxLength={500}
          rows={5}
          className="mt-2 w-full rounded-2xl border border-black/10 bg-white/80 px-4 py-3"
          required
        />
      </label>
      <label className="text-sm font-semibold text-muted-ink">
        ¿La otra parte está judicializando?
        <div className="mt-2 flex gap-4 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="isEscalating" value="si" className="accent-burgundy" /> Sí
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="isEscalating" value="no" className="accent-burgundy" defaultChecked /> No
          </label>
        </div>
      </label>
      <label className="flex items-start gap-3 text-sm text-muted-ink">
        <input type="checkbox" name="privacyAccepted" className="mt-1 accent-burgundy" required />
        Acepto la política de privacidad y el tratamiento de datos para evaluar mi caso.
      </label>
      {state.error && (
        <div className="rounded-2xl border border-burgundy/30 bg-burgundy/5 p-4 text-sm text-burgundy">
          Existen errores en el formulario. Revisa los campos y vuelve a enviar.
        </div>
      )}
      {state.ok && (
        <div className="rounded-2xl border border-forest/20 bg-forest/10 p-4 text-sm text-forest">
          Gracias por compartir tu situación. Te escribiré en menos de 48h.
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
      className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone disabled:opacity-70"
      disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar preselección"}
    </button>
  );
}
