import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="contenu" className="not-found">
      <div className="shell not-found__inner">
        <p className="eyebrow">Erreur 404</p>
        <h1>Cette page n’existe pas.</h1>
        <p>Le contenu recherché a peut-être été déplacé ou n’est plus disponible.</p>
        <Link className="button" href="/">
          <ArrowLeft size={18} aria-hidden="true" /> Revenir à l’accueil
        </Link>
      </div>
    </main>
  );
}
