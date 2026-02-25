import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/site";

const processSupport = [
  "Analizar estratégicamente el caso",
  "Redefinir la dirección de intervención",
  "Coordinarme con otros profesionales",
  "Aportar una lectura estructural que permita desbloquear la situación",
];

export const metadata: Metadata = {
  title: "Servicios – Método ICEBERG®",
  description:
    "Aplicación estratégica del Método ICEBERG® para intervenir conflictos empresariales y familiares que se han bloqueado o están escalando.",
};

export default function ServiciosPage() {
  const enterprise = services[0];
  const family = services[1];

  return (
    <div className="space-y-12">
      <section className="rounded-[32px] bg-white/85 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Servicios</p>
        <h1 className="mt-3 font-display text-5xl">Aplicación estratégica del Método ICEBERG®</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-ink">
          Intervengo en conflictos empresariales y familiares donde la situación se ha bloqueado, se repite o está escalando innecesariamente. No abordo solo el aspecto jurídico. Analizo la estructura completa del conflicto para diseñar una intervención eficaz.
        </p>
      </section>

      <section className="rounded-[32px] bg-gradient-to-br from-[#fde5dc] via-[#fff4ee] to-white p-8 text-ink shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Ámbito empresarial</p>
        <h2 className="mt-3 font-display text-4xl">Conflictos empresariales y laborales</h2>
        <p className="mt-4 text-muted-ink">{enterprise.description} Intervengo en:</p>
        <ul className="mt-6 space-y-3 text-sm text-slate">
          {enterprise.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy/70" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-ink">
          Mi enfoque permite ordenar el escenario antes de tomar decisiones que puedan tener impacto estructural.
        </p>
      </section>

      <section className="rounded-[32px] bg-gradient-to-br from-[#dfe9ff] via-[#f4f8ff] to-white p-8 text-ink shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Ámbito familiar</p>
        <h2 className="mt-3 font-display text-4xl">Conflictos familiares y sucesorios</h2>
        <p className="mt-4 text-muted-ink">{family.description} Intervengo en:</p>
        <ul className="mt-6 space-y-3 text-sm text-slate">
          {family.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy/70" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-ink">El objetivo no es intensificar la confrontación, sino intervenir estratégicamente para que el conflicto pueda resolverse.</p>
      </section>

      <section className="rounded-[32px] border border-black/5 bg-white/95 p-8 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Procesos en curso</p>
        <h2 className="mt-3 font-display text-4xl">Intervención en conflictos ya judicializados o con dirección letrada</h2>
        <p className="mt-4 text-muted-ink">
          También intervengo cuando el proceso ya está en marcha y el conflicto se ha estancado o escalado. Puedo:
        </p>
        <ul className="mt-6 space-y-3 text-sm text-slate">
          {processSupport.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-ink">No sustituyo sin necesidad. Intervengo cuando aporta valor.</p>
      </section>

      <section className="rounded-[32px] bg-ink p-10 text-center text-bone shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/70">Próximo paso</p>
        <h2 className="mt-4 font-display text-4xl">Toda intervención comienza con una Sesión Estratégica Inicial.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sand/80">
          Ahí analizamos si este enfoque es el adecuado para tu caso.
        </p>
        <Link
          href="/sesion-estrategica"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
        >
          Reservar Sesión Estratégica Inicial
        </Link>
      </section>
    </div>
  );
}
