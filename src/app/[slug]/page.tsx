"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import Aurora from "../Aurora";
import { supabase } from "../lib/supabase";

function VideoCarousel({ videos }: { videos: { id: string; title: string }[] }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState<number | null>(null);

  useEffect(() => {
    if (playing !== null) return;
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % videos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [playing, videos.length]);

  if (!videos || videos.length === 0) return null;
  const video = videos[current];

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "8px 0 24px" }}>
      <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", background: "#000", aspectRatio: "16/9" }}>
        {playing === current ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none", position: "absolute", inset: 0, width: "100%", height: "100%" }}
          />
        ) : (
          <div onClick={() => setPlaying(current)} style={{ cursor: "pointer", position: "relative", width: "100%", height: "100%" }}>
            <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 56, height: 56, background: "#509e2f", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 10, left: 12, color: "#fff", fontWeight: 600, fontSize: "0.9rem", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>{video.title}</div>
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 12 }}>
        {videos.map((_, i) => (
          <button key={i} onClick={() => { setCurrent(i); setPlaying(null); }} style={{ width: i === current ? 20 : 8, height: 8, borderRadius: 4, background: i === current ? "var(--color-accent)" : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
        ))}
      </div>
    </div>
  );
}

export default function AgentCard({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [agent, setAgent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAgent() {
      setLoading(true);
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .eq('slug', slug)
        .single();
      if (!data || error) {
        setAgent(null);
      } else {
        setAgent(data);
      }
      setLoading(false);
    }
    fetchAgent();
  }, [slug]);

  if (loading) return null;
  if (!agent) return notFound();

  return (
    <>
      <Aurora colorStops={["#7cff67","#B19EEF","#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <main className="card">
          {agent.premium && (
            <div className="premium-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              PREMIUM
            </div>
          )}
          <div className="profile__avatar">
            <Image src={agent.avatar} alt={agent.name} width={120} height={120} style={{ borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <h1 className="profile__name">{agent.name}</h1>
          <h2 className="profile__role">{agent.role}</h2>
          <p className="profile__bio">{agent.bio}</p>
          <div className="links">
            {Array.isArray(agent.links) && agent.links.slice(0, 3).map((link: any, i: number) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="link-btn">
                <span className="link-btn__icon">{link.icon ? <span dangerouslySetInnerHTML={{ __html: link.icon }} /> : null}</span>
                <span className="link-btn__text">{link.label}</span>
                <span className="link-btn__arrow">→</span>
              </a>
            ))}
          </div>
          <VideoCarousel videos={Array.isArray(agent.videos) ? agent.videos : []} />
          <div className="links">
            {Array.isArray(agent.links) && agent.links.slice(3).map((link: any, i: number) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="link-btn">
                <span className="link-btn__icon">{link.icon ? <span dangerouslySetInnerHTML={{ __html: link.icon }} /> : null}</span>
                <span className="link-btn__text">{link.label}</span>
                <span className="link-btn__arrow">→</span>
              </a>
            ))}
          </div>
        </main>
        <div style={{ display: "flex", justifyContent: "center", margin: "32px 0 0 0" }}>
          <Image src="/assets/logo_viver.svg" alt="Logo Viver" width={180} height={48} />
        </div>
        <footer className="footer">
  <p>© 2026 Viver. Todos los derechos reservados.</p>
  <p>Creado por <a href="https://galoper.cl" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>Galoper</a></p>
</footer>
      </div>
    </>
  );
}
