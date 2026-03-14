
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Morales | Asesor Bienes Raíces - Viver",
  description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver. Compra, venta y alquiler de propiedades en el campo. Contacto, redes sociales y más.",
  openGraph: {
    title: "Luis Morales | Asesor Bienes Raíces - Viver",
    description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver. Compra, venta y alquiler de propiedades en el campo. Contacto, redes sociales y más.",
    url: "https://vivercampo.com",
    siteName: "Viver",
    images: [
      {
        url: "/assets/joseluis.png",
        width: 800,
        height: 800,
        alt: "Foto de perfil de Luis Morales"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Morales | Asesor Bienes Raíces - Viver",
    description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver. Compra, venta y alquiler de propiedades en el campo. Contacto, redes sociales y más."
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
