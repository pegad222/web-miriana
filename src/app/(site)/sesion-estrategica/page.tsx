import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sesión Estratégica Inicial",
  description:
    "Intervención concentrada del Método ICEBERG® para analizar qué sostiene el conflicto antes de decidir cómo actuar.",
};

const sessionBenefits = [
  "Entender qué sostiene realmente el conflicto.",
  "Detectar dinámicas que lo bloquean.",
  "Analizar escenarios con criterio jurídico.",
  "Definir una dirección de intervención.",
  "Evitar decisiones reactivas.",
];

const sessionProcess = [
  {
    title: "Contexto previo",
    detail: "Antes de la sesión, recopilamos información esencial del caso.",
  },
  {
    title: "Sesión estratégica (90 minutos)",
    detail: "Análisis profundo, identificación de puntos críticos y diseño de dirección estratégica.",
  },
  {
    title: "Cierre con claridad",
    detail: "Terminamos con conclusiones claras y próximos pasos recomendados.",
  },
];

const rightMoment = [
  "Cuando el conflicto se repite y no entiendes por qué.",
  "Cuando la negociación está estancada.",
  "Cuando el desgaste económico o emocional aumenta.",
  "Cuando sientes que estás reaccionando, no decidiendo.",
  "Cuando el proceso ya está iniciado, pero no avanza.",
];

export default function SesionEstrategicaPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-[32px] border border-black/5 bg-white/95 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Sesión Estratégica Inicial</p>
        <h1 className="mt-3 font-display text-5xl">Cuando el conflicto no avanza, no necesitas más desgaste. Necesitas claridad.</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-ink">
          La Sesión Estratégica Inicial es una intervención concentrada del Método ICEBERG® para analizar tu situación antes de decidir cómo actuar. No es una consulta informativa. Es un análisis estratégico.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[32px] bg-ink p-8 text-bone shadow-elevation">
          <h2 className="font-display text-3xl">¿Para qué sirve?</h2>
          <ul className="mt-6 space-y-3 text-sm text-sand/80">
            {sessionBenefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sand" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sand/80">
            Muchas personas llegan agotadas, no porque el conflicto sea irresoluble, sino porque nadie lo ha intervenido con dirección.
          </p>
        </div>
        <div className="rounded-[32px] bg-white/95 p-8 shadow-elevation">
          <h2 className="font-display text-3xl">Cómo funciona</h2>
          <ul className="mt-6 space-y-4">
            {sessionProcess.map((item) => (
              <li key={item.title} className="rounded-2xl border border-black/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">{item.title}</p>
                <p className="mt-2 text-sm text-slate">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[32px] border border-black/5 bg-white/95 p-8 shadow-elevation">
          <h2 className="font-display text-3xl">Cuándo es el momento</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {rightMoment.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-ink">Cuanto más se prolonga, más se intensifica. Intervenir antes es evitar escaladas innecesarias.</p>
        </div>
        <div className="rounded-[32px] bg-white/90 p-8 shadow-elevation">
          <h2 className="font-display text-3xl">Inversión y encaje</h2>
          <p className="mt-4 text-muted-ink">
            La inversión se define en función del tipo de conflicto y el alcance de la intervención. En cualquier caso, esta sesión está diseñada para aportarte claridad y dirección desde el inicio.
          </p>
          <p className="mt-4 text-muted-ink">
            No es para quien solo busca validar su posición, confrontar sin revisar su estrategia o no está dispuesto a un análisis profundo. Es para quien quiere intervenir con criterio.
          </p>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-br from-sand via-bone to-white p-10 text-center shadow-elevation">
        <h2 className="font-display text-4xl">Si el conflicto está estancado, esperar no lo simplifica. La dirección correcta, sí.</h2>
        <Link
          href="/contacto"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
        >
          Reservar Sesión Estratégica Inicial
        </Link>
      </section>
    </div>
  );
}
