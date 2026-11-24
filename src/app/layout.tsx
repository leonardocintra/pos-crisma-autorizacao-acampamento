import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { SiteNav } from "@/components/site-nav";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Acampamento Pós-Crisma 2026",
    template: "%s · Pós-Crisma 2026",
  },
  description:
    "Roteiro, jogos e escala do Acampamento Pós-Crisma 2026 das Paróquias São Pedro e Menino Jesus de Praga — 24 a 29 de novembro.",
  applicationName: "Acampamento Pós-Crisma 2026",
  keywords: [
    "acampamento",
    "pós-crisma",
    "Paróquia São Pedro",
    "Paróquia Menino Jesus de Praga",
    "roteiro",
    "jogos",
    "escala",
  ],
  openGraph: {
    title: "Acampamento Pós-Crisma 2026",
    description:
      "Tudo em um só lugar: roteiro, jogos e escala da vigia das refeições.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17362b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-cream text-ink">
        <a
          href="#conteudo"
          className="sr-only z-[60] rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1 pb-24 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <SiteNav variant="bottom" />
      </body>
    </html>
  );
}
