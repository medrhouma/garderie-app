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

  // Mapping des couleurs pour les variantes de cartes
  const colorMap = {
    orange: { cardClass: "card-orange", iconClass: "bg-orange" },
    teal: { cardClass: "card-teal", iconClass: "bg-teal" },
    purple: { cardClass: "card-purple", iconClass: "bg-purple" },
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="text-center">
          <div className="section-badge">
            <i className="bi bi-grid-3x3-gap-fill"></i>
            Nos Services
          </div>
          <h2 className="section-title">
            Des services adaptés à chaque enfant
          </h2>
          <p className="section-subtitle">
            Nous proposons une gamme complète de services pour accompagner le
            développement et l&apos;épanouissement de vos enfants dans un cadre
            chaleureux et professionnel.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
            <p className="mt-3 text-muted">Chargement des services...</p>
          </div>
        ) : (
          <div className="row g-4">
            {services.map((service) => {
              const colors = colorMap[service.couleur] || colorMap.orange;
              return (
                <div className="col-md-6 col-lg-4" key={service.id}>
                  <div className={`card service-card ${colors.cardClass}`}>
                    <div className="card-body">
                      <div className={`service-icon-wrapper ${colors.iconClass}`}>
                        <i className={`bi ${service.icone}`}></i>
                      </div>
                      <h3 className="card-title">{service.titre}</h3>
                      <p className="card-text">{service.description}</p>
                      <ul className="service-features">
                        {service.caracteristiques.map((feature, index) => (
                          <li key={index}>
                            <i className="bi bi-check-circle-fill"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
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
