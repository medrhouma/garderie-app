"use client";

import { useState, useEffect } from "react";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur chargement services:", err);
        setLoading(false);
      });
  }, []);

  const themeConfig = {
    orange: { cardClass: "theme-orange", bubbleClass: "bubble-orange" },
    teal: { cardClass: "theme-teal", bubbleClass: "bubble-teal" },
    purple: { cardClass: "theme-purple", bubbleClass: "bubble-purple" },
  };

  return (
    <section className="services-pro-section" id="services">
      <div className="container">
        <div className="text-center">
          <div className="section-tag">
            <i className="bi bi-stars"></i>
            Nos Prestations
          </div>
          <h2 className="section-heading">Un accompagnement sur mesure pour vos enfants</h2>
          <p className="section-intro">
            Chaque enfant est unique. Notre équipe pédagogique a conçu des programmes personnalisés
            combinant apprentissage ludique, sécurité et bienveillance pour leur épanouissement.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-grow text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-3 text-muted fw-bold">Préparation des services...</p>
          </div>
        ) : (
          <div className="row g-4 justify-content-center">
            {services.map((service) => {
              const theme = themeConfig[service.couleur] || themeConfig.orange;
              return (
                <div className="col-md-6 col-lg-4" key={service.id}>
                  <div className={`pro-service-card ${theme.cardClass}`}>
                    <div className={`service-icon-bubble ${theme.bubbleClass}`}>
                      <i className={`bi ${service.icone}`}></i>
                    </div>

                    <h3 className="service-card-title">{service.titre}</h3>
                    <p className="service-card-desc">{service.description}</p>

                    <ul className="service-points-list">
                      {service.caracteristiques.map((feat, idx) => (
                        <li key={idx}>
                          <i className="bi bi-check-circle-fill"></i>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="service-card-footer">
                      <a
                        href="#inscription"
                        className="btn-card-learn"
                        data-bs-toggle="modal"
                        data-bs-target="#modalInscription"
                      >
                        <span>Demander une place</span>
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
