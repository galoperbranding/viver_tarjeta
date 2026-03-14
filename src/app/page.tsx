"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Aurora from "../Aurora";
import "../globals.css";

const AGENTS = [
  {
    slug: "luismorales",
    name: "Luis Morales",
    role: "Asesor Bienes Raíces",
    bio: "Asesor inmobiliario especializado en compra, venta y alquiler de propiedades, ayudando a clientes e inversionistas a encontrar la mejor oportunidad.",
    phone: "+51 999 999 999",
    email: "luis@viver.pe",
    avatar: "/assets/joseluis.png",
    premium: true,
    links: [
      { label: "Sitio Web", url: "https://viver.pe", icon: "web" },
      { label: "Instagram", url: "https://instagram.com", icon: "instagram" },
      { label: "Facebook", url: "https://facebook.com", icon: "facebook" },
      { label: "YouTube", url: "https://youtube.com", icon: "youtube" },
      { label: "TikTok", url: "https://tiktok.com", icon: "tiktok" },
    ]
  }
];

export default async function AgentCard({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = AGENTS.find(a => a.slug === slug);
  if (!agent) return notFound();

  return (
    <>
      <Aurora colorStops={["#7cff67","#B19EEF","#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <main className="card" style={{ position: "relative", zIndex: 1 }}>
          {agent.premium && (
            <div className="premium-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              PREMIUM
            </div>
          )}
          <div className="profile__avatar" style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <Image src={agent.avatar} alt={agent.name} width={120} height={120} style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <h1 className="profile__name">{agent.name}</h1>
          <h2 className="profile__role">{agent.role}</h2>
          <p className="profile__bio">{agent.bio}</p>
          <div className="links">
            {agent.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="link-button">
                {link.label}
              </a>
            ))}
          </div>
        </main>
        <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 0 0" }}>
          <Image src="/assets/logo_viver.svg" alt="Logo Viver" width={180} height={48} />
        </div>
        <footer className="footer">
          <p>© 2026 Viver. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
}
