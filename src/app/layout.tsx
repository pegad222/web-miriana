import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://miriana-estudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Intervención Jurídica Estratégica | Miriana",
    template: "%s | Miriana",
  },
  description:
    "Intervención jurídica estratégica y premium para conflictos familiares y laborales complejos. Abogada de familia en Madrid y abogada de derecho laboral en Madrid con orden, análisis sistémico y litigación solo cuando aporta valor.",
  keywords: [
    "abogada sistémica",
    "conflictos familiares",
    "conflictos laborales",
    "resolución estratégica",
    "sesión estratégica inicial",
    "abogada de familia madrid",
    "abogada derecho laboral madrid",
  ],
  openGraph: {
    title: "Miriana · Intervención Jurídica Estratégica",
    description:
      "Resolución estratégica de conflictos familiares y laborales con enfoque sistémico y 20+ años de experiencia. Abogada de familia en Madrid y abogada de derecho laboral en Madrid.",
    url: baseUrl,
    siteName: "Miriana",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Miriana Intervención Jurídica Estratégica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miriana · Intervención Jurídica Estratégica",
    description:
      "Orden, estrategia y acompañamiento jurídico sistémico para conflictos familiares y laborales. Abogada de familia en Madrid y abogada de derecho laboral en Madrid.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} antialiased bg-[var(--color-bg)]`}>
        {children}
      </body>
    </html>
  );
}
