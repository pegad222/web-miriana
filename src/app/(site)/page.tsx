import Image from "next/image";
import Link from "next/link";
import { heroContent, problemPoints, methodSteps, services, sessionHighlights } from "@/content/site";
import { getPublishedArticles, readableDate } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getPublishedArticles();
  const latestArticle = articles[0];

  return (
    <>
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

      <section className="rounded-[32px] bg-ink p-10 text-bone shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-sand/70">El problema</p>
        <h2 className="mt-4 font-display text-4xl">¿Qué ocurre cuando solo se aborda la superficie del conflicto?</h2>
        <div className="mt-4 space-y-4 text-sand/80">
          <p>Cuando el análisis se limita a lo inmediato, el conflicto no desaparece.</p>
          <p>Se desplaza o se intensifica.</p>
        </div>
        <ul className="mt-6 space-y-3 text-sm text-sand">
          {problemPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sand" />
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm uppercase tracking-[0.4em] text-sand/70">El resultado no es solución. Es desgaste.</p>
      </section>

      <section className="rounded-[32px] bg-white/95 p-10 shadow-elevation">
        <div className="border-b border-black/5 pb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Método ICEBERG®</p>
          <h2 className="mt-3 font-display text-4xl">Método ICEBERG®</h2>
          <p className="mt-2 font-display text-xl text-burgundy">Resolución estratégica de conflictos</p>
          <div className="mt-4 space-y-4 text-muted-ink">
            <p>El conflicto visible es solo una parte del problema.</p>
            <p>El Método ICEBERG® permite intervenir tanto en la superficie jurídica como en la estructura que sostiene el conflicto.</p>
            <p>Mi intervención se articula en cuatro fases:</p>
          </div>
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
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-muted-ink">No se trata de ganar. Se trata de ordenar para poder resolver.</p>
      </section>

      <section className="rounded-[32px] bg-white/90 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Ámbitos de intervención</p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl">Aplicación del Método ICEBERG®</h2>
            <p className="mt-2 text-lg text-muted-ink">Conflictos empresariales y familiares complejos.</p>
          </div>
          <Link href="/servicios" className="text-sm font-semibold uppercase tracking-[0.3em] text-burgundy">
            Ver detalle →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.category}
              className={`rounded-[32px] bg-gradient-to-br ${service.color} p-8 text-ink shadow-elevation`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">{service.category}</p>
              <p className="mt-3 text-sm text-slate">{service.description}</p>
              <ul className="mt-6 space-y-3 text-muted-ink">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-ink">
          También intervengo en conflictos ya dirigidos por otros profesionales cuando el proceso se encuentra bloqueado o escalando innecesariamente.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-black/5 bg-white/95 p-8 shadow-elevation">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">Cómo empezar</p>
          <h2 className="mt-3 font-display text-4xl">Sesión Estratégica Inicial</h2>
          <p className="mt-4 text-muted-ink">
            Toda intervención comienza con una aplicación concentrada del Método ICEBERG®. En esta sesión analizamos el caso antes de decidir cómo actuar.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.4em] text-muted-ink">En esta sesión analizamos:</p>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {sessionHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-burgundy" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg font-semibold text-ink">Sales con claridad. Y con un plan.</p>
          <Link
            href="/sesion-estrategica"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
          >
            Reservar Sesión Estratégica Inicial
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
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Cierre</p>
        <h2 className="mt-4 font-display text-4xl">Si el conflicto se repite o escala, no necesitas más desgaste.</h2>
        <p className="mt-4 text-lg text-muted-ink">Necesitas claridad.</p>
        <p className="mx-auto mt-4 max-w-2xl text-muted-ink">Solicita tu Sesión Estratégica Inicial.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/sesion-estrategica"
            className="rounded-full bg-burgundy px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-bone"
          >
            Reservar Sesión Estratégica Inicial
          </Link>
        </div>
      </section>
    </div>
    {latestArticle && (
      <aside className="fixed bottom-4 right-4 z-30 w-[min(90vw,280px)] rounded-[24px] border border-black/10 bg-white/95 p-4 shadow-elevation">
        <p className="text-[0.55rem] uppercase tracking-[0.4em] text-muted-ink">Último artículo</p>
        <p className="mt-2 font-display text-lg text-ink">{latestArticle.title}</p>
        <p className="mt-1 text-xs text-muted-ink">{latestArticle.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.3em] text-muted-ink">
          <span>{readableDate(latestArticle)}</span>
          <Link href={`/blog/${latestArticle.slug}`} className="rounded-full bg-ink px-3 py-1 text-bone">
            Abrir
          </Link>
        </div>
      </aside>
    )}
    </>
  );
}
