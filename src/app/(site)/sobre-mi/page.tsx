import type { Metadata } from "next";
import Image from "next/image";
import { aboutStats } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Miriana, abogada especializada en conflictos familiares y laborales con enfoque sistémico y más de 20 años de experiencia.",
};

const highlights = [
  "Técnica jurídica rigurosa",
  "Experiencia real en negociación",
  "Litigación estratégica cuando es necesaria",
  "Comprensión sistémica del conflicto",
];

export default function SobreMiPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] bg-white/85 p-8 shadow-elevation sm:p-10">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Sobre mí</p>
          <h1 className="mt-3 font-display text-4xl leading-snug sm:text-5xl">
            Trabajo con personas que desean resolver el conflicto con claridad y responsabilidad.
          </h1>
          <div className="mt-4 space-y-4 text-lg text-muted-ink">
            <p>
              Soy abogada con más de veinte años de experiencia en derecho laboral y negociación compleja. A lo largo de mi trayectoria he intervenido en procesos de alta tensión: despidos estratégicos, reestructuraciones empresariales, conflictos entre dirección y trabajadores, y decisiones críticas donde la estrategia jurídica debía ir acompañada de visión, firmeza y equilibrio.
            </p>
            <p>
              Con el tiempo amplié mi especialización hacia el ámbito familiar, aplicando esa misma capacidad de análisis y negociación a separaciones, convenios reguladores y conflictos relacionados con custodia de menores.
            </p>
            <p>Mi práctica integra:</p>
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
            <p>
              El enfoque sistémico no sustituye al derecho. Lo complementa. Permite comprender qué sostiene el conflicto para intervenir con mayor precisión y evitar escaladas innecesarias.
            </p>
            <p>
              Intervengo tanto en procesos negociados como en procedimientos judiciales ya iniciados. Si es necesario litigar, se litiga. Pero siempre con una estrategia orientada a ordenar, no a confrontar.
            </p>
            <p>
              Conozco estos procesos también desde la experiencia directa. Haber atravesado personalmente un proceso de separación me ha permitido comprender desde dentro la complejidad jurídica y emocional que implica. Esta vivencia refuerza mi convicción de que el conflicto no debe gestionarse únicamente desde la técnica legal, sino también desde la claridad, el orden y la responsabilidad personal.
            </p>
            <p className="text-lg font-semibold text-ink">Trabajo con personas que desean resolver, no destruir.</p>
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
