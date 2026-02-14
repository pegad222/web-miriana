import Link from "next/link";
import { navLinks } from "@/content/navigation";

const legalLinks = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Privacidad", href: "/politica-privacidad" },
  { label: "Cookies", href: "/politica-cookies" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-[rgba(17,18,23,0.92)] text-bone">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Miriana</p>
          <p className="mt-3 max-w-sm text-sm text-sand/80">
            Intervención jurídica estratégica con enfoque sistémico para conflictos familiares y laborales que necesitan orden, no confrontación.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Navegación</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sand/80 transition hover:text-bone">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-sand/60">Contacto</p>
          <p className="mt-4 text-sm text-sand/80">
            Email: <a href="mailto:info@mirianapetrovic.com" className="underline">info@mirianapetrovic.com</a>
            <br />
            Teléfono: <a href="tel:+34617716666" className="underline">+34 617 716 666</a>
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-xs text-sand/60">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-sand/60">
        © {new Date().getFullYear()} Miriana · Estrategia Jurídica. Todos los derechos reservados.
      </div>
    </footer>
  );
}
