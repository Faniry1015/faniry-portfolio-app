"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigationFr = [
  { label: "Services", href: "/#services" },
  { label: "Études de cas", href: "/#projets" },
  { label: "Approche", href: "/#approche" },
  { label: "Profil", href: "/#a-propos" },
];

const navigationEn = [
  { label: "Services", href: "/en/#services" },
  { label: "Case studies", href: "/en/#projects" },
  { label: "Approach", href: "/en/#approach" },
  { label: "Profile", href: "/en/#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const navigation = isEnglish ? navigationEn : navigationFr;
  const cvPath = isEnglish
    ? "/documents/CV_Faniriantsoa_RANDRIAHARIMINO_EN.pdf"
    : "/documents/CV_Faniriantsoa_RANDRIAHARIMINO.pdf";
  const alternatePath = isEnglish
    ? pathname.replace(/^\/en\/projects/, "/projets").replace(/^\/en/, "") || "/"
    : pathname.startsWith("/projets/")
      ? pathname.replace(/^\/projets/, "/en/projects")
      : "/en";

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "fr";
  }, [isEnglish]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Accueil — Faniriantsoa Randriaharimino">
          <span className="brand-mark" aria-hidden="true">
            FR
          </span>
          <span className="brand-copy">
            <strong>Faniriantsoa</strong>
            <small>Data • MEL • Digital • GIS</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`main-navigation ${open ? "is-open" : ""}`}
          id="main-navigation"
          aria-label="Navigation principale"
        >
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a href={cvPath} download onClick={() => setOpen(false)}>CV (PDF)</a>
          <span className="language-switch" aria-label={isEnglish ? "Language" : "Langue"}>
            <Link href={isEnglish ? alternatePath : pathname} aria-current={isEnglish ? undefined : "page"}>FR</Link>
            <span aria-hidden="true">/</span>
            <Link href={isEnglish ? pathname : alternatePath} aria-current={isEnglish ? "page" : undefined}>EN</Link>
          </span>
          <a className="button button--compact" href="mailto:frandriaharimino@yahoo.com">
            {isEnglish ? "Discuss an assignment" : "Parler d’une mission"}
          </a>
        </nav>
      </div>
    </header>
  );
}
