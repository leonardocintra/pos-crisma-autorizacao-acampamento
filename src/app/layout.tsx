import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { RETREAT_METADATA } from "@/lib/constants";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${RETREAT_METADATA.name} ${RETREAT_METADATA.editionLabel}`,
  description: RETREAT_METADATA.description,
  metadataBase: new URL("https://pos-crisma-autorizacao.local"),
  openGraph: {
    title: `${RETREAT_METADATA.name} ${RETREAT_METADATA.editionLabel}`,
    description: RETREAT_METADATA.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-rose-50/40 text-zinc-900">
        <SiteHeader />
        <main className="flex-1 bg-gradient-to-b from-rose-50/40 to-white">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
