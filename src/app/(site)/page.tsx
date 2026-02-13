import Image from "next/image";
import Link from "next/link";
import { heroContent, problemPoints, methodSteps, services, sessionHighlights } from "@/content/site";
import { getPublishedArticles, readableDate } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getPublishedArticles();

  return (
    <div className="space-y-24">
      <section className="page-surface relative overflow-hidden px-6 py-12 sm:px-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">{heroContent.kicker}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.4em] text-burgundy">
              {heroContent.brandLine}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-ink sm:text-6xl">
              {heroContent.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-ink">{heroContent.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={heroContent.primaryCta.href}
                className="rounded-full bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-bone shadow-elevation"
              >
                {heroContent.primaryCta.label}
              </Link>
              <Link
                href={heroContent.secondaryCta.href}
                className="rounded-full border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink"
              >
                {heroContent.secondaryCta.label}
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroContent.proofPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-black/10 p-4 text-sm text-muted-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-[32px] bg-burgundy/15 blur-3xl" />
            <Image
              src="/images/gallery/PHOTO-2026-02-12-10-25-18.jpg"
              alt="Miriana en intervención jurídica"
              width={700}
              height={860}
              className="relative rounded-[32px] border border-white/60 object-cover shadow-elevation"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] bg-ink p-10 text-bone">
          <p className="text-xs uppercase tracking-[0.4em] text-sand/70">Problema</p>
          <h2 className="mt-4 font-display text-4xl">Por qué acompañarte</h2>
          <p className="mt-4 text-sand/80">
            El conflicto deja de ser manejable cuando nadie conduce la conversación. Ordeno la dinámica, contengo la escalada y priorizo decisiones que sostienen a las personas y al negocio.
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.4em] text-sand/60">Trabajo con personas que desean resolver, no destruir.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {problemPoints.map((point) => (
            <div key={point.title} className="glass-card">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">{point.title}</p>
              <p className="mt-3 text-sm text-slate">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-white/85 p-10 shadow-elevation">
        <div className="flex flex-col gap-6 border-b border-black/5 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Método</p>
            <h2 className="mt-3 font-display text-4xl">Intervención en cuatro pasos</h2>
          </div>
          <Link href="/metodo" className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy">
            Ver detalle →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step) => (
            <div key={step.title} className="rounded-3xl bg-sand/40 p-5">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-ink">{step.badge}</span>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-2 text-sm text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Servicios</p>
            <h2 className="mt-2 font-display text-4xl">Conflictos familiares y laborales</h2>
          </div>
          <Link href="/servicios" className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy">
            Ver todos →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.category}
              className={`rounded-[32px] bg-gradient-to-br ${service.color} p-8 text-ink shadow-elevation`}
            >
              <h3 className="font-display text-3xl">{service.category}</h3>
              <ul className="mt-6 space-y-3 text-muted-ink">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-burgundy/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/90 p-8 shadow-elevation">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">Sesión estratégica inicial</p>
          <h2 className="mt-3 font-display text-4xl">Puerta de entrada obligatoria</h2>
          <p className="mt-4 text-muted-ink">
            Espacio estructurado de análisis: evaluación jurídica, dinámica del conflicto, estrategia viable y próximos pasos claros.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {sessionHighlights.map((item) => (
              <li key={item} className="rounded-2xl border border-black/10 p-4 text-sm text-slate">
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/sesion-estrategica"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
          >
            Reservar Sesión
          </Link>
        </div>
        <div className="rounded-[32px] bg-ink/95 p-8 text-bone">
          <p className="text-xs uppercase tracking-[0.4em] text-sand/70">Autoridad intelectual</p>
          <h2 className="mt-4 font-display text-4xl">Ideas para ordenar el conflicto</h2>
          <div className="mt-6 space-y-5">
            {articles.slice(0, 3).map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="block rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-sand/70">
                  {readableDate(article)}
                </p>
                <p className="mt-2 font-display text-xl text-bone">{article.title}</p>
                <p className="mt-1 text-sm text-sand/80">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-br from-sand via-bone to-white p-10 text-center shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Conflictos complejos</p>
        <h2 className="mt-4 font-display text-4xl">Convertimos incertidumbre en planes ejecutables</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-ink">
          Si tu conflicto ya está escalando, aún es posible recuperar el orden. El primer paso es entender qué lo alimenta y qué camino aporta valor.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contacto"
            className="rounded-full border border-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-ink"
          >
            Formulario de preselección
          </Link>
          <Link
            href="/sesion-estrategica"
            className="rounded-full bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
          >
            AGENDA Sesión Inicial
          </Link>
        </div>
      </section>
    </div>
  );
}
