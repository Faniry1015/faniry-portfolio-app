import React, { useEffect } from 'react';
import '../Styles/NavBar.css'

function NavBar() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Mettez à jour la classe "active" dans la barre de navigation
          // en fonction de la section actuellement visible
          const sectionId = entry.target.id;
          const navLinks = document.querySelectorAll('.nav-link');

          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    });

    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <a href="#accueil" className="nav-link active">Accueil</a>
      <a href="#apropos" className="nav-link">À propos</a>
      <a href="#projets" className="nav-link">Projets</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
}

export default NavBar;
