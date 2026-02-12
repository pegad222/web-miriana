import { z } from "zod";

export const articleFormSchema = z.object({
  title: z.string().min(8, "El titular debe aportar contexto"),
  excerpt: z
    .string()
    .min(32, "Resume el artículo en 2-3 frases")
    .max(280, "Mantén el resumen en menos de 280 caracteres"),
  content: z.string().min(120, "Desarrolla al menos tres párrafos"),
  coverImage: z.string().min(1, "Añade una imagen de portada"),
  tags: z.string().optional(),
  status: z.enum(["draft", "published"]),
});

export type ArticleFormValues = z.infer<typeof articleFormSchema>;

export const contactFormSchema = z.object({
  fullName: z.string().min(5, "Incluye nombre y apellidos"),
  email: z.string().email("Email no válido"),
  phone: z.string().optional(),
  conflictType: z.enum(["familiar", "laboral"]),
  summary: z
    .string()
    .min(40, "Necesito un contexto mínimo")
    .max(500, "Resume la situación en 500 caracteres"),
  isEscalating: z.enum(["si", "no"]),
  privacyAccepted: z.literal("on", {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
