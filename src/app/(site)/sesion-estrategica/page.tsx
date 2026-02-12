import type { Metadata } from "next";
import Link from "next/link";
import { sessionHighlights } from "@/content/site";

export const metadata: Metadata = {
  title: "Sesión Estratégica Inicial",
  description:
    "Sesión obligatoria para ordenar el conflicto con evaluación jurídica, mapa sistémico y próximos pasos claros.",
};

const sessionStructure = [
  { title: "Briefing previo", detail: "Cuestionario guiado para llegar a la sesión con datos" },
  { title: "Sesión 90 minutos", detail: "Trabajo intenso para mapear conflicto y decisiones" },
  { title: "Informe", detail: "Documentación con escenarios y hoja de ruta" },
];

export default function SesionEstrategicaPage() {
  return (
    <div className="space-y-10">
      <header className="rounded-[32px] border border-black/5 bg-white/90 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Puerta de entrada</p>
        <h1 className="mt-3 font-display text-5xl">Sesión Estratégica Inicial</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-ink">
          La intervención comienza con un diagnóstico completo. Analizo la dimensión jurídica, la dinámica relacional y los riesgos reputacionales para activar una estrategia viable.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[32px] bg-ink/95 p-8 text-bone">
          <h2 className="font-display text-3xl">Qué trabajamos</h2>
          <ul className="mt-6 space-y-4 text-sand/80">
            {sessionHighlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sand" />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
          >
            Solicitar fecha
          </Link>
        </div>
        <div className="glass-card">
          <h2 className="font-display text-3xl">Estructura</h2>
          <ul className="mt-6 space-y-4">
            {sessionStructure.map((item) => (
              <li key={item.title} className="rounded-2xl border border-black/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">{item.title}</p>
                <p className="mt-2 text-sm text-slate">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
