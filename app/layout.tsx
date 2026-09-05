import "./globals.css";
 
import { Red_Hat_Display } from "next/font/google";
import type { ReactNode } from "react";
 
const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });
 
export const metadata = {
  title: "Tareas OP-A",
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
      <body className={redHatDisplay.className}>
        {children}
      </body>
    </html>
  );
}
 