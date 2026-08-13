import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/ui/footer";
import { Header } from "@/ui/header";
import { SkipLink } from "@/ui/skip-link";
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
    default: "Faniriantsoa Randriaharimino — Data, MEL, Digital & GIS",
    template: "%s — Faniriantsoa Randriaharimino",
  },
  description:
    "Consultant à Madagascar en qualité des données, suivi-évaluation, systèmes numériques, SIG et coordination de recherches terrain.",
  keywords: [
    "consultant suivi-évaluation Madagascar",
    "Digital M&E & Data Systems",
    "research field partner Madagascar",
    "reporting bailleur et capitalisation",
    "SIG Madagascar",
    "collecte numérique",
    "reporting bailleur",
  ],
  authors: [{ name: "Faniriantsoa Randriaharimino" }],
  creator: "Faniriantsoa Randriaharimino",
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Portfolio de Faniriantsoa Randriaharimino",
    title: "Data, MEL, Digital & GIS pour les projets de développement",
    description:
      "De la donnée terrain au reporting : qualité, suivi-évaluation, SIG, systèmes numériques et recherche à Madagascar.",
    images: [
      {
        url: "/og.png",
        alt: "Faniriantsoa Randriaharimino — Data, MEL, Digital et GIS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faniriantsoa Randriaharimino — Data, MEL, Digital & GIS",
    description:
      "Qualité des données, suivi-évaluation, SIG, systèmes numériques et recherche terrain à Madagascar.",
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
        <SkipLink />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
