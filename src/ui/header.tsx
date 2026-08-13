"use client";

import Link from "next/link";
import { Check, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!languageOpen) return;

    function closeOnOutsideClick(event: PointerEvent) {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setLanguageOpen(false);
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [languageOpen]);

  const frenchPath = isEnglish ? alternatePath : pathname;
  const englishPath = isEnglish ? pathname : alternatePath;

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          className="brand"
          href={isEnglish ? "/en" : "/"}
          aria-label={isEnglish ? "Home — Faniriantsoa Randriaharimino" : "Accueil — Faniriantsoa Randriaharimino"}
        >
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
          <div className={`language-menu ${languageOpen ? "is-open" : ""}`} ref={languageMenuRef}>
            <button
              className="language-menu__trigger"
              type="button"
              aria-label={isEnglish ? "Change language" : "Changer de langue"}
              aria-expanded={languageOpen}
              aria-controls="language-options"
              onClick={() => setLanguageOpen((value) => !value)}
            >
              <span className="language-menu__flag" aria-hidden="true">{isEnglish ? "🇬🇧" : "🇫🇷"}</span>
              <span className="language-menu__code">{isEnglish ? "ENG" : "FR"}</span>
              <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div
              className="language-menu__panel"
              id="language-options"
              aria-label={isEnglish ? "Language options" : "Choix de langue"}
              hidden={!languageOpen}
            >
              <Link
                className={!isEnglish ? "is-current" : ""}
                href={frenchPath}
                aria-current={!isEnglish ? "page" : undefined}
                onClick={() => { setLanguageOpen(false); setOpen(false); }}
              >
                <span className="language-menu__flag" aria-hidden="true">🇫🇷</span>
                <span>FR</span>
                {!isEnglish ? <Check size={15} aria-hidden="true" /> : null}
              </Link>
              <Link
                className={isEnglish ? "is-current" : ""}
                href={englishPath}
                aria-current={isEnglish ? "page" : undefined}
                onClick={() => { setLanguageOpen(false); setOpen(false); }}
              >
                <span className="language-menu__flag" aria-hidden="true">🇬🇧</span>
                <span>ENG</span>
                {isEnglish ? <Check size={15} aria-hidden="true" /> : null}
              </Link>
            </div>
          </div>
          <a className="button button--compact" href="mailto:frandriaharimino@yahoo.com">
            {isEnglish ? "Discuss an assignment" : "Parler d’une mission"}
          </a>
        </nav>
      </div>
    </header>
  );
}
