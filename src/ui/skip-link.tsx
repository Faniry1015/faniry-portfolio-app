"use client";

import { usePathname } from "next/navigation";

export function SkipLink() {
  const isEnglish = usePathname().startsWith("/en");
  return <a className="skip-link" href="#contenu">{isEnglish ? "Skip to content" : "Aller au contenu"}</a>;
}
