import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maestría en Gerencia de Proyectos | UNIMINUTO Virtual",
  description: "Conoce la Maestría en Gerencia de Proyectos de UNIMINUTO Virtual, su plan de estudios y el proceso de inscripción.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  );
}
