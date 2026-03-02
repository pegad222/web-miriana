import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutStats } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Miriana, abogada especializada en conflictos familiares y laborales con enfoque sistémico y más de 20 años de experiencia.",
};

const highlights = [
  "Estrategia jurídica sólida",
  "Análisis estructural del conflicto",
  "Dirección clara de intervención",
];

export default function SobreMiPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] bg-white/85 p-8 shadow-elevation sm:p-10">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Sobre mí</p>
          <h1 className="mt-3 font-display text-4xl leading-snug sm:text-5xl">
            No siempre resolvemos los conflictos porque no siempre los estamos entendiendo.
          </h1>
          <div className="mt-4 space-y-4 text-lg text-muted-ink">
            <p>
              Soy abogada y llevo más de veinte años trabajando en negociación y estrategia jurídica, principalmente en el ámbito empresarial. He intervenido en conflictos complejos, escenarios de alta tensión y procesos donde una mala decisión podía escalar rápidamente la situación.
            </p>
            <p>
              El derecho me dio estructura. La experiencia me dio criterio. Con el tiempo entendí algo fundamental: el derecho es imprescindible, pero por sí solo casi nunca resuelve.
            </p>
            <p>
              Muchos conflictos no se bloquean por falta de argumentos, sino porque nadie está analizando la dinámica que los sostiene. Lo he visto en empresa y también lo he vivido en el ámbito familiar.
            </p>
            <p>
              Cuando el conflicto no se interviene en profundidad, se repite. Se desplaza. Se intensifica. Esa comprensión cambió mi forma de trabajar. No abandoné el derecho. Lo amplié. Así nació el Método ICEBERG®.
            </p>
            <p>Hoy intervengo en conflictos empresariales y familiares complejos integrando:</p>
          </div>
          <ul className="mt-6 grid gap-3 text-sm text-slate sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-4 text-base text-muted-ink">
            <p>No trabajo para alimentar la confrontación. Trabajo para intervenir el conflicto con claridad y hacerlo resoluble.</p>
            <p>Si buscas simplemente defender una posición, este no es tu enfoque. Si buscas intervenir estratégicamente tu conflicto, empezamos por la Sesión Estratégica Inicial.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/sesion-estrategica"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
            >
              Solicitar Sesión Estratégica Inicial
            </Link>
            <Link
              href="https://www.linkedin.com/in/mirianapetrovic/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-elevation transition hover:bg-[#084f96]"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.82-2.05 3.74-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
              </svg>
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/mirianapetrovic/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-elevation transition hover:opacity-90"
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
              Instagram
            </Link>
          </div>
        </div>
        <div className="space-y-6">
          <Image
            src="/images/gallery/PHOTO-2026-02-12-10-13-34.jpg"
            alt="Retrato de Miriana"
            width={640}
            height={820}
            className="w-full rounded-[32px] object-cover shadow-elevation"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-black/10 bg-white/70 p-4 text-center">
                <p className="font-display text-3xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-ink">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
