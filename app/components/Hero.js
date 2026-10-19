"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
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

  const stats = garderie?.statistiques;

  return (
    <>
      <section className="hero-pro-section" id="accueil">
        {/* Dynamic ambient blobs */}
        <div className="hero-deco-blob hero-deco-blob-1"></div>
        <div className="hero-deco-blob hero-deco-blob-2"></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-6">
              <div className="pill-status">
                <span className="pill-dot"></span>
                <span>Inscriptions ouvertes — Places limitées 2026/2027</span>
              </div>

              <h1 className="hero-main-title">
                L&apos;éveil et le <span className="text-gradient-brand">bonheur</span> de vos enfants au quotidien
              </h1>

              <p className="hero-subtext">
                {garderie ? (
                  garderie.description
                ) : (
                  <>
                    Chez <strong>Les Petits Explorateurs</strong>, nous offrons un environnement chaleureux,
                    sécurisé et certifié pour permettre à votre enfant de s&apos;épanouir, grandir et découvrir
                    le monde avec confiance.
                  </>
                )}
              </p>

              <div className="hero-action-group">
                <a
                  href="#inscription"
                  className="btn-cta-main"
                  data-bs-toggle="modal"
                  data-bs-target="#modalInscription"
                >
                  <i className="bi bi-calendar-check-fill"></i>
                  Réserver une visite
                </a>
                <a href="#services" className="btn-cta-outline">
                  <i className="bi bi-compass"></i>
                  Explorer nos services
                </a>
              </div>

              {/* Dynamic Stats Row */}
              <div className="hero-stats-deck">
                <div className="stat-unit">
                  <div className="stat-value text-gradient-brand">
                    {stats ? `${stats.enfantsInscrits}+` : "150+"}
                  </div>
                  <div className="stat-caption">Enfants épanouis</div>
                </div>
                <div className="stat-unit">
                  <div className="stat-value" style={{ color: "var(--color-secondary-dark)" }}>
                    {stats ? stats.educateurs : "15"}
                  </div>
                  <div className="stat-caption">Éducateurs qualifiés</div>
                </div>
                <div className="stat-unit">
                  <div className="stat-value" style={{ color: "var(--color-accent-amber)" }}>
                    {stats ? `${stats.anneesExperience} ans` : "10 ans"}
                  </div>
                  <div className="stat-caption">D&apos;excellence</div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="col-lg-6">
              <div className="hero-visual-card">
                {/* Floating badge top */}
                <div className="floating-glass-badge badge-pos-top">
                  <div className="badge-icon-box green">
                    <i className="bi bi-shield-fill-check"></i>
                  </div>
                  <div>
                    <div className="badge-title-text">Sécurité Maximale</div>
                    <div className="badge-subtitle-text">Agrément PMI & Accès sécurisé</div>
                  </div>
                </div>

                <div className="hero-image-frame">
                  <Image
                    src="/hero-garderie.jpg"
                    alt="Espace chaleureux de la garderie Les Petits Explorateurs"
                    width={700}
                    height={460}
                    priority
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>

                {/* Floating badge bottom */}
                <div className="floating-glass-badge badge-pos-bottom">
                  <div className="badge-icon-box warm">
                    <i className="bi bi-heart-fill"></i>
                  </div>
                  <div>
                    <div className="badge-title-text">
                      {stats ? `${stats.tauxSatisfaction}% de satisfaction` : "98% de satisfaction"}
                    </div>
                    <div className="badge-subtitle-text">Recommandé par les familles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications Strip */}
      <section className="trust-strip">
        <div className="container">
          <div className="row g-3 justify-content-center align-items-center text-center">
            <div className="col-6 col-md-3">
              <div className="trust-item justify-content-center">
                <i className="bi bi-patch-check-fill text-success"></i>
                <span>Agrément officiel PMI</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-item justify-content-center">
                <i className="bi bi-award-fill text-warning"></i>
                <span>Norme Qualité ISO 9001</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-item justify-content-center">
                <i className="bi bi-flower1 text-info"></i>
                <span>Label Éco-Crèche</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="trust-item justify-content-center">
                <i className="bi bi-clock-fill text-primary"></i>
                <span>Ouvert 7h - 19h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
