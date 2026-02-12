import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
};

const blocks = [
  {
    title: "Titularidad",
    content:
      "Este sitio pertenece a Miriana, abogada colegiada nº 1234 del Ilustre Colegio de Abogados. Dirección profesional: Paseo de la Estrategia 12, Madrid.",
  },
  {
    title: "Objeto",
    content:
      "La información contenida en esta web es de carácter general y no constituye asesoramiento jurídico personalizado hasta la firma del encargo profesional.",
  },
  {
    title: "Responsabilidad",
    content:
      "El titular no se hace responsable del uso que se haga de la información publicada. Las decisiones deben tomarse tras analizar cada caso concreto.",
  },
];

export default function AvisoLegalPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Aviso legal</h1>
      {blocks.map((block) => (
        <section key={block.title} className="rounded-3xl border border-black/10 bg-white/80 p-6">
          <h2 className="font-display text-2xl">{block.title}</h2>
          <p className="mt-2 text-sm text-slate">{block.content}</p>
        </section>
      ))}
    </div>
  );
}
