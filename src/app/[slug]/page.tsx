import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";
import Aurora from "../Aurora";
import "../globals.css";

const AGENTS = [
  {
    name: "Luis Morales",
    role: "Senior Broker",
    phone: "+51 999 999 999",
    email: "luis@viver.pe",
    slug: "luismorales",
    avatar: "/assets/avatar_luis.png" // You can replace or remove this if not available
  }
];

export default async function AgentCard({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = AGENTS.find(a => a.slug === slug);
  if (!agent) return notFound();

  return (
    <>
      <Aurora colorStops={["#7cff67","#B19EEF","#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <main className="card" style={{ position: 'relative', zIndex: 1 }}>
          <div className="profile__avatar" style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <Image src={agent.avatar || "/assets/avatar_placeholder.png"} alt={agent.name} width={96} height={96} style={{ borderRadius: '50%' }} />
          </div>
          <h1 className="profile__name">{agent.name}</h1>
          <h2 className="profile__role">{agent.role}</h2>
          <div className="profile__contact" style={{ margin: '16px 0' }}>
            <p><strong>Teléfono:</strong> {agent.phone}</p>
            <p><strong>Email:</strong> <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
          </div>
        </main>
        <div className="logo-viver" style={{ display: 'flex', justifyContent: 'center', margin: '32px 0 0 0' }}>
          <Image src="/assets/logo_viver.svg" alt="Logo Viver" width={180} height={48} style={{ height: '48px', width: 'auto', maxWidth: '180px' }} />
        </div>
        <footer className="footer">
          <p>© 2026 Viver. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
}
