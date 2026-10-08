import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#09090B",
};

export const metadata: Metadata = {
  title: "Rennhaus · Taller Especialista en Porsche · Santiago, Chile",
  description:
    "Mantención programada, diagnóstico computarizado y mecánica de precisión para Porsche en Santiago de Chile. Trabajo riguroso según especificaciones del fabricante.",
  keywords: [
    "Porsche Chile",
    "Taller Porsche Santiago",
    "Mecánica Porsche",
    "Mantención Porsche",
    "Diagnóstico Porsche",
    "Rennhaus",
    "911",
    "Cayenne",
    "Macan",
    "Boxster Cayman",
  ],
  authors: [{ name: "Rennhaus" }],
  creator: "Rennhaus",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://rennhaus.cl",
    title: "Rennhaus · Taller Especialista en Porsche · Santiago, Chile",
    description:
      "Mecánica de precisión y mantención para vehículos Porsche en Chile. Trabajo metódico según especificaciones del fabricante.",
    siteName: "Rennhaus",
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
  return (
    <html
      lang="es-CL"
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-[100dvh] bg-[#09090B] text-[#EDEDF2] font-sans antialiased selection:bg-[#C5222A]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
