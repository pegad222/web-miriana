import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Formulario de preselección para conflictos familiares y laborales que necesitan intervención jurídica estratégica.",
};

export default function ContactPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-[32px] bg-white/85 p-10 shadow-elevation">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-ink">Preselección</p>
        <h1 className="mt-3 font-display text-5xl">Cuéntame cuál es el conflicto</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-ink">
          Solo trabajo con personas y equipos comprometidos con resolver. Completa este formulario para valorar si soy la profesional adecuada para tu caso.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>
      <aside className="rounded-[32px] border border-black/5 bg-bone/70 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-ink">Cómo trabajo</p>
        <ul className="mt-6 space-y-4 text-sm text-slate">
          <li>1. Reviso tu caso y confirmo si encaja con la práctica.</li>
          <li>2. Si hay encaje, agendamos la Sesión Estratégica Inicial.</li>
          <li>3. Tras la sesión, recibirás propuesta de intervención.</li>
        </ul>
        <div className="mt-8 text-sm text-muted-ink">
          Email: <a href="mailto:agenda@miriana.com" className="underline">agenda@miriana.com</a>
          <br />
          Teléfono: <a href="tel:+34111222333" className="underline">+34 111 222 333</a>
        </div>
      </aside>
    </div>
  );
}
