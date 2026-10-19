"use client";

import { useState, useEffect } from "react";

export default function Activities() {
  const [activites, setActivites] = useState([]);
  const [filter, setFilter] = useState("Tous");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/activites")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setActivites(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur chargement activites:", err);
        setLoading(false);
      });
  }, []);

  const categories = ["Tous", "Art", "Musique", "Sport", "Éducation", "Nature"];

  const filteredActivites =
    filter === "Tous"
      ? activites
      : activites.filter((a) => a.categorie.toLowerCase() === filter.toLowerCase());

  const getCatClass = (cat) => {
    switch (cat.toLowerCase()) {
      case "art":
        return "cat-art";
      case "musique":
        return "cat-musique";
      case "sport":
        return "cat-sport";
      case "nature":
        return "cat-nature";
      default:
        return "cat-education";
    }
  };

  return (
    <section className="activities-section" id="activites">
      <div className="container">
        <div className="text-center">
          <div className="section-tag" style={{ background: "var(--color-secondary-subtle)", color: "var(--color-secondary-dark)" }}>
            <i className="bi bi-palette-fill"></i>
            Programme d&apos;Activités
          </div>
          <h2 className="section-heading">Des journées riches en découvertes</h2>
          <p className="section-intro">
            Découvrez nos ateliers interactifs conçus pour développer la motricité, la créativité et la curiosité des enfants.
          </p>

          {/* Interactive filter pills */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`activity-tab-btn ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {filteredActivites.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.id}>
                <div className="activity-card">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`activity-pill-cat ${getCatClass(item.categorie)}`}>
                      {item.categorie}
                    </span>
                    <span className="badge bg-light text-dark border">
                      <i className="bi bi-clock me-1 text-primary"></i>
                      {item.jour} ({item.horaire})
                    </span>
                  </div>

                  <h3 className="activity-title">{item.titre}</h3>
                  <p className="activity-desc">{item.description}</p>

                  <div className="activity-meta">
                    <span>
                      <i className="bi bi-person-badge me-1"></i>
                      Âge recommandé : {item.ageMin} - {item.ageMax} ans
                    </span>
                    <span className="text-success fw-bold">
                      <i className="bi bi-check2"></i> Inclus
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA banner inside activities */}
        <div className="banner-inscription-cta text-center" id="inscription">
          <div className="position-relative" style={{ zIndex: 2 }}>
            <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-3">
              ⚡ Inscriptions Ouvertes 2026/2027
            </span>
            <h2 className="display-6 fw-bold mb-3">Envie de faire visiter la garderie à votre enfant ?</h2>
            <p className="lead text-white-50 mx-auto mb-4" style={{ maxWidth: "600px" }}>
              Venez rencontrer notre équipe d&apos;éducateurs, visiter nos espaces de jeux et poser toutes vos questions.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <button
                type="button"
                className="btn btn-cta-main"
                data-bs-toggle="modal"
                data-bs-target="#modalInscription"
              >
                <i className="bi bi-send-fill"></i>
                Prendre rendez-vous en ligne
              </button>
              <a href="tel:+33123456789" className="btn btn-cta-outline">
                <i className="bi bi-telephone-outbound-fill"></i>
                01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
