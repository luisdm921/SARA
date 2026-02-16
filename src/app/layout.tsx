import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, WhatsAppButton } from "@/components";

const siteUrl = "https://sara-2yko.vercel.app";

export const metadata: Metadata = {
  title: "Servicios e Ingeniería SARA - Mantenimiento Industrial",
  description:
    "Empresa mexicana especializada en mantenimiento preventivo, correctivo y reacondicionamiento de equipos industriales. Herrería, pailería, instalaciones neumáticas e hidráulicas.",
  keywords: [
    "mantenimiento industrial",
    "herrería",
    "pailería",
    "maquinaria CNC",
    "instalaciones neumáticas",
    "instalaciones hidráulicas",
    "tornillos de bola",
    "husillos",
    "reparación de equipos",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Servicios e Ingeniería SARA",
    title: "Servicios e Ingeniería SARA - Mantenimiento Industrial",
    description:
      "Empresa mexicana especializada en mantenimiento preventivo, correctivo y reacondicionamiento de equipos industriales. Herrería, pailería, instalaciones neumáticas e hidráulicas.",
    images: [
      {
        url: `${siteUrl}/images/machinery/cnc-torno-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Maquinaria CNC - Servicios e Ingeniería SARA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios e Ingeniería SARA - Mantenimiento Industrial",
    description:
      "Empresa mexicana especializada en mantenimiento preventivo, correctivo y reacondicionamiento de equipos industriales.",
    images: [`${siteUrl}/images/machinery/cnc-torno-1.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Servicios e Ingeniería SARA",
    image: `${siteUrl}/images/machinery/cnc-torno-1.jpg`,
    description:
      "Empresa mexicana especializada en mantenimiento preventivo, correctivo y reacondicionamiento de equipos industriales. Herrería, pailería, instalaciones neumáticas e hidráulicas.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
      addressRegion: "México",
    },
    telephone: "+52-844-390-0702",
    email: "servicios.e.ingenieria.sara@gmail.com",
    url: siteUrl,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    serviceType: [
      "Mantenimiento Industrial",
      "Maquinaria CNC",
      "Herrería y Pailería",
      "Instalaciones Neumáticas",
      "Instalaciones Hidráulicas",
      "Reparación de Equipos",
    ],
  };

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
