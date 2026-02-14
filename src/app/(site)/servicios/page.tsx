import type { Metadata } from "next";
import { services } from "@/content/site";

const outcomes = [
  {
    title: "Conflictos familiares",
    bullets: [
      "Prevención de escalada judicial",
      "Custodia y acuerdos parentales sostenibles",
      "Acompañamiento individual para tomar decisiones sin culpa",
    ],
  },
  {
    title: "Conflictos laborales",
    bullets: [
      "Negociaciones dirigidas con guías de conversación",
      "Reestructuraciones con mínima exposición mediática",
      "Preparación procesal con narrativa corporativa",
    ],
  },
];

export const metadata: Metadata = {
  title: "Servicios jurídicos estratégicos",
  description:
    "Intervención en conflictos familiares y laborales con enfoque sistémico, negociación dirigida y litigación ordenada.",
};

export default function ServiciosPage() {
  return (
    <div className="space-y-12">
      <header className="rounded-[32px] bg-white/80 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Servicios</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          <span className="block sm:inline">Especialización +</span>{" "}
          <span className="block sm:inline">estrategia aplicada</span>
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-ink">
          Diseño intervenciones a medida para familias, profesionales, directivos y empresas que desean resolver con responsabilidad. Cada servicio incluye investigación jurídica, análisis sistémico y hoja de ruta con hitos claros.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.category}
            className={`rounded-[32px] bg-gradient-to-br ${service.color} p-8 text-ink shadow-elevation`}
          >
            <h2 className="font-display text-3xl">{service.category}</h2>
            <ul className="mt-6 space-y-3 text-muted-ink">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-6 rounded-full bg-burgundy/40" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {outcomes.map((block) => (
          <div key={block.title} className="glass-card">
            <h3 className="font-display text-3xl">{block.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate">
              {block.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
