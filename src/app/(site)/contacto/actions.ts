"use server";

import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type ContactFormState = {
  ok: boolean;
  error?: Record<string, string[] | string> | null;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;
const NOTIFY_EMAIL = "info@mirianapetrovic.com";

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

    await notifyByEmail(result.data);

    revalidatePath("/contacto");
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false, error: { form: ["Configura Supabase antes de enviar el formulario"] } };
  }
}

async function notifyByEmail(data: {
  fullName: string;
  email: string;
  phone?: string;
  conflictType: string;
  summary: string;
  isEscalating: string;
}) {
  if (!resendClient) {
    console.warn("RESEND_API_KEY no configurada. No se enviará email de aviso.");
    return;
  }

  const subject = `Nueva solicitud de preselección - ${data.fullName}`;
  const html = `
    <div style="font-family:Arial, Helvetica, sans-serif; line-height:1.6;">
      <h2>Nuevo formulario de preselección</h2>
      <p><strong>Nombre:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Teléfono:</strong> ${data.phone || "No indicado"}</p>
      <p><strong>Tipo de conflicto:</strong> ${data.conflictType}</p>
      <p><strong>¿Escalando?:</strong> ${data.isEscalating === "si" ? "Sí" : "No"}</p>
      <p><strong>Resumen:</strong></p>
      <p>${data.summary.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const text = `Nuevo formulario de preselección\n
Nombre: ${data.fullName}
Email: ${data.email}
Teléfono: ${data.phone || "No indicado"}
Tipo de conflicto: ${data.conflictType}
¿Escalando?: ${data.isEscalating === "si" ? "Sí" : "No"}
Resumen: ${data.summary}`;

  try {
    await resendClient.emails.send({
      from: "Miriana Web <noreply@mirianapetrovic.com>",
      to: [NOTIFY_EMAIL],
      reply_to: data.email,
      subject,
      html,
      text,
    });
  } catch (error) {
    console.error("Error enviando email de preselección", error);
  }
}
