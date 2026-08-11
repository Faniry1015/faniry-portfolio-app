import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";
import "./globals.css";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-body",
  display: "swap",
});

const quicksand = localFont({
  src: "./fonts/Quicksand-Bold.ttf",
  variable: "--font-display",
  weight: "700",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://faniriantsoa-portfolio.firebaseapp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Faniriantsoa Randriaharimino — Solutions numériques métier",
    template: "%s — Faniriantsoa Randriaharimino",
  },
  description:
    "Concepteur-développeur full-stack et mobile spécialisé en agriculture numérique, suivi-évaluation, data et applications métier.",
  keywords: [
    "développeur Next.js Madagascar",
    "agriculture numérique",
    "suivi-évaluation",
    "data analyst",
    "développeur full-stack",
    "Flutter",
    "PostgreSQL",
    "Supabase",
  ],
  authors: [{ name: "Faniriantsoa Randriaharimino" }],
  creator: "Faniriantsoa Randriaharimino",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Portfolio de Faniriantsoa Randriaharimino",
    title: "Solutions numériques pour l’agriculture, le suivi-évaluation et la data",
    description:
      "Plateformes web, applications mobiles et systèmes de données conçus pour des besoins métier réels.",
    images: [
      {
        url: "/og.png",
        alt: "Faniriantsoa Randriaharimino — Agriculture numérique, suivi-évaluation et data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faniriantsoa Randriaharimino — Solutions numériques métier",
    description:
      "Agriculture numérique, suivi-évaluation, data et développement full-stack.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${quicksand.variable}`}>
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
