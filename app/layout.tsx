import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const display = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://demo-gimnasio-v1.ideawebx.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FORJA — Training Club | Gimnasio premium en Palermo, Buenos Aires",
    template: "%s | FORJA Training Club",
  },
  description:
    "Gimnasio premium en Palermo. Musculación, funcional, indoor cycling, boxeo y +40 clases por semana. Profesores certificados, equipamiento de primer nivel y planes sin permanencia. Probá una clase gratis.",
  keywords: [
    "gimnasio palermo",
    "gimnasio buenos aires",
    "musculación",
    "entrenamiento funcional",
    "crossfit",
    "indoor cycling",
    "clases grupales",
    "personal trainer",
  ],
  authors: [{ name: "FORJA Training Club" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "FORJA Training Club",
    title: "FORJA — Forjá tu mejor versión",
    description:
      "Gimnasio premium en Palermo. +40 clases por semana, equipamiento de primer nivel y planes sin permanencia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORJA — Training Club",
    description:
      "Gimnasio premium en Palermo, Buenos Aires. Probá una clase gratis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE_URL}/#gym`,
    name: "FORJA Training Club",
    description:
      "Gimnasio premium en Palermo, Buenos Aires. Musculación, entrenamiento funcional, indoor cycling, boxeo y clases grupales.",
    url: SITE_URL,
    telephone: "+54 9 11 6789 0123",
    priceRange: "$$",
    image: `${SITE_URL}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Córdoba 4250",
      addressLocality: "Palermo, CABA",
      addressRegion: "Buenos Aires",
      postalCode: "C1188",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.5895,
      longitude: -58.4255,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://instagram.com/forja.gym",
      "https://facebook.com/forja.gym",
    ],
  };

  return (
    <html lang="es-AR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
