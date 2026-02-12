import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { LoginForm } from "@/components/forms/login-form";

export const metadata: Metadata = {
  title: "Acceso privado",
};

export default async function AdminLoginPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-ink to-burgundy px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/95 p-8 text-ink shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Área privada</p>
        <h1 className="mt-4 font-display text-3xl">Inicia sesión</h1>
        <p className="mt-2 text-sm text-muted-ink">
          Acceso exclusivo para crear y editar artículos del blog estratégico.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
