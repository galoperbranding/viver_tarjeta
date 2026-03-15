import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luis Morales | Bienes Raíces - Viver",
  description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver. Compra, venta y alquiler de propiedades.",
  openGraph: {
    title: "Luis Morales | Bienes Raíces - Viver",
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
    title: "Luis Morales | Bienes Raíces - Viver",
    description: "Tarjeta digital de Luis Morales, asesor inmobiliario de Viver."
  }
};

export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
