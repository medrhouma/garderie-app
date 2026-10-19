"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [garderie, setGarderie] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/garderie")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGarderie(data.data);
        }
      })
      .catch((err) => console.error("Erreur chargement garderie:", err));

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nomGarderie = garderie ? garderie.nom : "Les Petits Explorateurs";

  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav
          className={`navbar navbar-expand-lg navbar-glass ${
            scrolled ? "scrolled" : ""
          }`}
          id="navbar"
        >
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <div className="brand-icon-wrapper">
              <i className="bi bi-balloon-heart-fill"></i>
            </div>
            <div className="d-flex flex-column">
              <span className="brand-title">{nomGarderie}</span>
              <span className="brand-badge align-self-start">Éveil & Bienveillance</span>
            </div>
          </a>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-center gap-1 my-2 my-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link-custom active" href="#accueil">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#activites">
                  Activités
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-custom" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <a
                  className="btn btn-header-cta"
                  href="#inscription"
                  data-bs-toggle="modal"
                  data-bs-target="#modalInscription"
                >
                  <i className="bi bi-sparkles"></i>
                  Inscription
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
