import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
};

const sections = [
  {
    title: "Responsable",
    body: "Miriana es la responsable del tratamiento de datos recogidos a través del formulario de preselección y la Sesión Estratégica Inicial.",
  },
  {
    title: "Finalidad",
    body: "Gestionar solicitudes, enviar comunicaciones relacionadas con el servicio contratado y cumplir obligaciones legales.",
  },
  {
    title: "Legitimación",
    body: "Consentimiento del interesado y ejecución de medidas precontractuales (art. 6.1.a y 6.1.b RGPD).",
  },
  {
    title: "Conservación",
    body: "Los datos se conservarán durante la relación profesional y el tiempo necesario para cumplir obligaciones legales.",
  },
  {
    title: "Derechos",
    body: "Puedes ejercer derechos de acceso, rectificación, supresión, oposición y limitación escribiendo a agenda@miriana.com.",
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Política de privacidad</h1>
      {sections.map((section) => (
        <article key={section.title} className="rounded-3xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-2xl">{section.title}</h2>
          <p className="mt-2 text-sm text-slate">{section.body}</p>
        </article>
      ))}
    </div>
  );
}
