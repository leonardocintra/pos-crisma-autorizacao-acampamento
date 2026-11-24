import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Acampamento Pós-Crisma 2026",
    short_name: "Pós-Crisma 26",
    description:
      "Roteiro, jogos e escala do Acampamento Pós-Crisma 2026 das Paróquias São Pedro e Menino Jesus de Praga.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4eee2",
    theme_color: "#17362b",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
