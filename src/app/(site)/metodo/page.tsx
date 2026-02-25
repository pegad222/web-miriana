import type { Metadata } from "next";
import Link from "next/link";
import { methodSteps } from "@/content/site";

export const metadata: Metadata = {
  title: "Método ICEBERG®",
  description:
    "Modelo propio de resolución estratégica que integra análisis jurídico y comprensión sistémica para intervenir conflictos complejos.",
};

const differentiators = [
  "Se identifica la estructura real del problema.",
  "Se detectan dinámicas que alimentan la escalada.",
  "Se redefine la estrategia desde una visión completa.",
  "Se decide con claridad, no desde la reacción.",
];

const methodAudience = [
  "El conflicto se repite y no entiendes por qué.",
  "Las negociaciones no avanzan.",
  "Hay desgaste económico o emocional creciente.",
  "Sientes que lo jurídico no está resolviendo el fondo del problema.",
  "Quieres intervenir con dirección y no desde la reacción.",
];

export default function MetodoPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[32px] bg-white/90 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Método ICEBERG®</p>
        <h1 className="mt-3 font-display text-5xl">Método ICEBERG®</h1>
        <p className="mt-2 font-display text-xl text-burgundy">Una forma distinta de intervenir el conflicto.</p>
        <div className="mt-4 space-y-4 text-muted-ink">
          <p>El conflicto visible es solo una parte del problema.</p>
          <p>Posiciones enfrentadas, decisiones bloqueadas, negociaciones que no avanzan. Eso es la superficie. Debajo, operan dinámicas que nadie está analizando.</p>
          <p>El Método ICEBERG® nace de más de veinte años de práctica jurídica y negociación estratégica, integrando una lectura profunda del conflicto antes de decidir cómo intervenirlo.</p>
          <p>No es teoría. Es intervención estructurada.</p>
        </div>
      </section>

      <section className="rounded-[32px] border border-black/5 bg-white/95 p-8 shadow-elevation">
        <h2 className="font-display text-4xl">¿Qué cambia cuando se aplica el Método ICEBERG®?</h2>
        <p className="mt-4 text-muted-ink">No se trata de añadir más argumentos. Se trata de comprender qué está sosteniendo realmente el conflicto.</p>
        <ul className="mt-6 space-y-3 text-sm text-slate">
          {differentiators.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-ink">Cuando cambia el análisis, cambia la dirección.</p>
      </section>

      <section className="rounded-[32px] bg-ink p-8 text-bone shadow-elevation">
        <div className="flex flex-col gap-3 border-b border-white/20 pb-6">
          <p className="text-xs uppercase tracking-[0.4em] text-sand/70">Aplicación</p>
          <h2 className="font-display text-4xl">Un proceso claro. Sin complejidad innecesaria.</h2>
          <p className="text-sand/80">El Método ICEBERG® se aplica en cuatro momentos clave:</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step) => (
            <article key={step.title} className="rounded-3xl bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-sand/70">{step.badge}</p>
              <h3 className="mt-3 font-display text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm text-sand/80">{step.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-sand/80">Cada caso requiere una intensidad distinta. Por eso toda intervención comienza con una Sesión Estratégica Inicial.</p>
      </section>

      <section className="rounded-[32px] bg-white/90 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Para quién es</p>
        <h2 className="mt-3 font-display text-4xl">Este modelo es para ti si…</h2>
        <ul className="mt-6 space-y-3 text-sm text-slate">
          {methodAudience.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-muted-ink">Si buscas simplemente defender una posición, este no es tu enfoque. Si buscas resolver estratégicamente, empezamos por la sesión.</p>
        <Link
          href="/sesion-estrategica"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
        >
          Reservar Sesión Estratégica Inicial
        </Link>
      </section>
    </div>
  );
}
