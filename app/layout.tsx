import "./globals.css";
 
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata = {
  title: "To-Do Master | Fase 3",
  description: "Una aplicación de gestión de tareas construida con React y Next.js usando buenas prácticas.",
  keywords: "react, nextjs, todo, crud",
  icons: {
    icon: "/OA-LOGO.svg",
  },
  openGraph: {
    title: "To-Do Master",
    description: "La mejor forma de gestionar tu día a día.",
  },
};
 
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
 