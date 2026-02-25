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
              className="rounded-full border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ink"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/mirianapetrovic/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ink"
            >
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
