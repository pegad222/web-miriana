import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
};

const cookies = [
  {
    title: "Cookies técnicas",
    body: "Imprescindibles para que el sitio funcione correctamente. No requieren consentimiento y no almacenan datos personales.",
  },
  {
    title: "Cookies analíticas",
    body: "Usadas para medir tráfico y optimizar contenidos. Puedes activarlas o desactivarlas configurando tu navegador.",
  },
  {
    title: "Gestión",
    body: "Puedes eliminar o bloquear cookies desde la configuración del navegador. Ten presente que algunas funciones podrían dejar de estar disponibles.",
  },
];

export default function PoliticaCookiesPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Política de cookies</h1>
      {cookies.map((cookie) => (
        <article key={cookie.title} className="rounded-3xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-2xl">{cookie.title}</h2>
          <p className="mt-2 text-sm text-slate">{cookie.body}</p>
        </article>
      ))}
    </div>
  );
}
