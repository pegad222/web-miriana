import type { Metadata } from "next";
import { methodSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Método de intervención",
  description:
    "Metodología en cuatro pasos para intervenir conflictos familiares y laborales con análisis jurídico y mirada sistémica.",
};

export default function MetodoPage() {
  return (
    <div className="space-y-12">
      <header className="rounded-[32px] bg-white/80 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Método</p>
        <h1 className="mt-3 font-display text-5xl">Intervención jurídica con enfoque sistémico</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-ink">
          La estrategia nace de comprender el mapa completo. Combino evaluación jurídica honesta con análisis de dinámica relacional para elegir la vía adecuada: negociación, acuerdos híbridos o litigio preparado.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {methodSteps.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-black/10 bg-bone/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">Paso {index + 1}</p>
            <h2 className="mt-3 font-display text-2xl">{step.title}</h2>
            <p className="mt-2 text-sm text-slate">{step.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        {[
          {
            title: "Herramientas",
            items: [
              "Matrices de decisión jurídicas",
              "Mapas de actores y roles",
              "Protocolos de conversación",
              "Escenarios procesales y económicos",
            ],
          },
          {
            title: "Principios",
            items: [
              "Primero orden, después acción",
              "Transparencia radical con el cliente",
              "Negociar desde datos, no desde impulsos",
              "Litigar solo con narrativa estratégica",
            ],
          },
          {
            title: "Resultados",
            items: [
              "Conflictos que dejan de escalar",
              "Acuerdos sostenibles",
              "Casos judiciales preparados con ventaja",
              "Clientes con claridad para decidir",
            ],
          },
        ].map((card) => (
          <div key={card.title} className="glass-card">
            <h3 className="font-display text-2xl">{card.title}</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              {card.items.map((item) => (
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
