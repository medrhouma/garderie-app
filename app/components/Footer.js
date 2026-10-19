"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [garderie, setGarderie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/garderie")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGarderie(data.data);
        }
      })
      .catch((err) => console.error("Erreur chargement garderie:", err));
  }, []);

  const info = garderie || {
    nom: "Les Petits Explorateurs",
    adresse: "123 Rue des Étoiles, 75001 Paris, France",
    telephone: "+33 1 23 45 67 89",
    email: "contact@petits-explorateurs.fr",
    horaires: {
      ouverture: "07:00",
      fermeture: "19:00",
      jours: "Lundi au Vendredi",
    },
  };

  return (
    <footer className="footer-pro" id="contact">
      <div className="container">
        <div className="row g-4 justify-content-between">
          {/* Brand Col */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="brand-icon-wrapper" style={{ width: "38px", height: "38px", fontSize: "1.1rem" }}>
                <i className="bi bi-balloon-heart-fill"></i>
              </div>
              <h4 className="footer-title mb-0">{info.nom}</h4>
            </div>
            <p className="small text-secondary mb-4" style={{ lineHeight: "1.7" }}>
              Un environnement d&apos;accueil chaleureux, sécurisé et innovant pour le bien-être,
              l&apos;éveil et l&apos;autonomie des tout-petits.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-sm btn-outline-light rounded-circle" style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-light rounded-circle" style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-sm btn-outline-light rounded-circle" style={{ width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Navigation</h5>
            <ul className="footer-links">
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#services">Nos Services</a></li>
              <li><a href="#activites">Programme d&apos;activités</a></li>
              <li><a href="#inscription" data-bs-toggle="modal" data-bs-target="#modalInscription">Inscriptions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-title">Coordonnées</h5>
            <ul className="footer-links">
              <li className="d-flex align-items-start gap-2">
                <i className="bi bi-geo-alt-fill text-warning mt-1"></i>
                <span className="small">{info.adresse}</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-warning"></i>
                <a href={`tel:${info.telephone}`} className="small">{info.telephone}</a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-envelope-at-fill text-warning"></i>
                <a href={`mailto:${info.email}`} className="small">{info.email}</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours Card */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Horaires d&apos;accueil</h5>
            <div className="p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="small text-white-50">{info.horaires.jours}</span>
                <span className="badge bg-success-subtle text-success fw-bold">Ouvert</span>
              </div>
              <div className="fw-bold text-white fs-5">
                {info.horaires.ouverture} — {info.horaires.fermeture}
              </div>
              <small className="text-secondary mt-1 d-block">
                Fermé les samedis, dimanches et jours fériés
              </small>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            &copy; 2026 {info.nom} — Tous droits réservés.
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-decoration-none">Mentions légales</a>
            <a href="#" className="text-secondary text-decoration-none">Confidentialité</a>
            <a href="#" className="text-secondary text-decoration-none">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
