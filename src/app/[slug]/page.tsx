"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Aurora from "../Aurora";

const AGENTS = [
  {
    name: "Luis Morales",
    role: "Senior Broker",
    phone: "+51 999 999 999",
    email: "luis@viver.pe",
    slug: "luismorales",
    avatar: "/assets/joseluis.png"
  }
];

export default async function AgentCard({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = AGENTS.find(a => a.slug === slug);
  if (!agent) return notFound();

  return (
    <>
      <Aurora colorStops={["#7cff67", "#B19EEF", "#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <Image src={agent.avatar} alt={agent.name} width={240} height={240} style={{ borderRadius: "50%", marginBottom: 32, objectFit: "cover" }} priority />
        <h1 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>{agent.name}</h1>
        <h2 style={{ fontSize: 20, fontWeight: 400, margin: 0, color: '#666' }}>{agent.role}</h2>
        <div style={{ margin: "24px 0 0 0", textAlign: "center" }}>
          <p style={{ margin: 0 }}><strong>Teléfono:</strong> {agent.phone}</p>
          <p style={{ margin: 0 }}><strong>Email:</strong> <a href={`mailto:${agent.email}`}>{agent.email}</a></p>
        </div>
        <div style={{ marginTop: 40 }}>
          <Image src="/assets/logo_viver.svg" alt="Logo Viver" width={180} height={48} priority />
        </div>
      </div>
    </>
  );
}
