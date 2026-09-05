import "./globals.css";
// Importamos la fuente Inter de Google Fonts para mejorar el diseño en la Fase 2
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
 
// Configuramos la fuente
const inter = Inter({ subsets: ["latin"] });
 
export const metadata = {
  title: "Mi primer ToDo en Next.js",
  description: "Una lista de tareas simple con funcionalidad de edición.",
};
 
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      {/* Añadimos la clase de la fuente al body para que toda la app la use */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}