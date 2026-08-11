"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Expertise", href: "/#expertise" },
  { label: "Projets", href: "/#projets" },
  { label: "Approche", href: "/#approche" },
  { label: "À propos", href: "/#a-propos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Accueil — Faniriantsoa Randriaharimino">
          <span className="brand-mark" aria-hidden="true">
            FR
          </span>
          <span className="brand-copy">
            <strong>Faniriantsoa</strong>
            <small>Solutions numériques métier</small>
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
          <a className="button button--compact" href="mailto:frandriaharimino@yahoo.com">
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}
