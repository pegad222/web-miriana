"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Feather } from "lucide-react";
import { navLinks } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-[rgba(244,241,235,0.85)] backdrop-blur-xl">
      <div className="container flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 text-left">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-burgundy shadow-sm">
            <Feather size={20} strokeWidth={1.5} />
          </span>
          <span className="font-display text-2xl leading-none tracking-tight">Miriana Petrović</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm uppercase tracking-[0.2em] text-muted-ink transition-colors",
                pathname === item.href && "text-burgundy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <span className="hidden h-6 w-px bg-black/10 md:inline-block" />
          <Link
            href="/contacto"
            className="rounded-full border border-ink/40 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-bone"
          >
            Preselección
          </Link>
          <Link
            href="/sesion-estrategica"
            className="inline-flex items-center gap-2 rounded-full bg-burgundy px-4 py-2 text-sm font-semibold text-bone shadow-elevation transition hover:-translate-y-0.5"
          >
            Sesión Estratégica <ArrowUpRight size={16} />
          </Link>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-full border border-black/10 p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-[rgba(244,241,235,0.95)] p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold uppercase tracking-[0.3em] text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contacto"
              className="rounded-full border border-ink px-4 py-2 text-center text-sm font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              Preselección
            </Link>
            <Link
              href="/sesion-estrategica"
              className="rounded-full bg-burgundy px-4 py-2 text-center text-sm font-semibold text-bone"
              onClick={() => setOpen(false)}
            >
              Sesión Estratégica
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
