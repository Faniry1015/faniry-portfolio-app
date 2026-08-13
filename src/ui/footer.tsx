"use client";

import Link from "next/link";
import { Code2, ContactRound } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const isEnglish = usePathname().startsWith("/en");

  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <Link className="footer-brand" href={isEnglish ? "/en" : "/"}>
            Faniriantsoa Randriaharimino
          </Link>
          <p>{isEnglish ? "Digital solutions for fieldwork and decision-making." : "Solutions numériques utiles au terrain et à la décision."}</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Faniry1015" target="_blank" rel="noreferrer">
            <Code2 size={19} aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/faniriantsoa/"
            target="_blank"
            rel="noreferrer"
          >
            <ContactRound size={19} aria-hidden="true" /> LinkedIn
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} — Madagascar</p>
      </div>
    </footer>
  );
}
