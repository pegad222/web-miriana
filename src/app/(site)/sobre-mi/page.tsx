import type { Metadata } from "next";
import Image from "next/image";
import { aboutStats } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Miriana, abogada especializada en conflictos familiares y laborales con enfoque sistémico y más de 20 años de experiencia.",
};

const highlights = [
  "Derecho laboral y familiar",
  "Coaching jurídico",
  "Constelaciones familiares aplicadas",
  "Litigación estratégica",
];

export default function SobreMiPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] bg-white/85 p-10 shadow-elevation">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Sobre mí</p>
          <h1 className="mt-3 font-display text-5xl">Trabajo con personas que desean resolver, no destruir.</h1>
          <p className="mt-4 text-lg text-muted-ink">
            Soy abogada desde hace más de 20 años. Mi práctica integra la técnica jurídica, la negociación compleja y la comprensión sistémica de cada conflicto. He acompañado a familias, directivos y comités ejecutivos en decisiones críticas donde el orden y la responsabilidad marcan la diferencia.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-burgundy" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <Image
            src="/images/gallery/PHOTO-2026-02-12-10-13-34.jpg"
            alt="Retrato de Miriana"
            width={640}
            height={820}
            className="rounded-[32px] object-cover shadow-elevation"
          />
          <div className="grid grid-cols-3 gap-4">
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
