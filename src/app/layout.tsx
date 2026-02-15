import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
