"use server";

import { revalidatePath } from "next/cache";
import { contactFormSchema } from "@/lib/schemas";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type ContactFormState = {
  ok: boolean;
  error?: Record<string, string[] | string> | null;
};

export async function submitContact(_: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const result = contactFormSchema.safeParse({
    fullName: formData.get("fullName")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    conflictType: formData.get("conflictType")?.toString() ?? "familiar",
    summary: formData.get("summary")?.toString() ?? "",
    isEscalating: formData.get("isEscalating")?.toString() ?? "no",
    privacyAccepted: formData.get("privacyAccepted")?.toString() ?? "",
  });

  if (!result.success) {
    return { ok: false, error: result.error.flatten().fieldErrors };
  }

  try {
    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("leads").insert({
      id: crypto.randomUUID(),
      full_name: result.data.fullName,
      email: result.data.email,
      phone: result.data.phone,
      conflict_type: result.data.conflictType,
      summary: result.data.summary,
      is_escalating: result.data.isEscalating === "si",
    });

    if (error) {
      console.error(error.message);
      return { ok: false, error: { form: ["No se pudo registrar la solicitud"] } };
    }

    revalidatePath("/contacto");
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false, error: { form: ["Configura Supabase antes de enviar el formulario"] } };
  }
}
