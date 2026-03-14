"use client";
import Image from "next/image";
import Aurora from "./Aurora";

export default function Home() {
  return (
    <>
      <Aurora colorStops={["#7cff67","#B19EEF","#5227FF"]} blend={0.5} amplitude={1.0} speed={1} />
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <Image src="/assets/logo_viver.svg" alt="Logo Viver" width={240} height={64} priority />
      </div>
    </>
  );
}
