import React, { useEffect } from 'react';
import '../Styles/NavBar.css'

function NavBar() {
    useEffect(() => {
        const ratio = 0.6;
        const windowHeight = window.innerHeight;
        const y = Math.round(windowHeight * ratio); // Utilisez une multiplication plutôt qu'une affectation

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
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
        }, {
            rootMargin: `-${windowHeight - y - 1}px 0px -${y}px 0px`, // Utilisez windowHeight au lieu de window.innerHeight
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
