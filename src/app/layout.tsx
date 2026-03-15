import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viver | Bienes Raíces",
  description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  openGraph: {
    title: "Viver | Bienes Raíces",
    description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver.",
    url: "https://viver.pe/luismorales",
    siteName: "Viver",
    images: [
      {
        url: "/assets/preview_viver.png",
        width: 1200,
        height: 630,
        alt: "Luis Morales - Asesor Bienes Raíces Viver"
      }
    ],
    locale: "es_PE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Morales | Asesor Bienes Raíces - Viver",
    description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
