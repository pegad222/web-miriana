"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "@/app/(private)/admin/actions";

const initialState = { ok: true, message: "" };

export function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <label className="text-sm font-semibold text-muted-ink">
        Email
        <input
          type="email"
          name="email"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </label>
      <label className="text-sm font-semibold text-muted-ink">
        Contraseña
        <input
          type="password"
          name="password"
          required
          className="mt-2 w-full rounded-2xl border border-black/10 px-4 py-3"
        />
      </label>
      {!state.ok && state.message && (
        <div className="rounded-2xl border border-burgundy/30 bg-burgundy/5 p-3 text-sm text-burgundy">
          {state.message}
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
      {pending ? "Accediendo..." : "Acceder"}
    </button>
  );
}
