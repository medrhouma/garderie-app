"use client";

import { useState } from "react";

export default function RegistrationModal() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentNom: "",
    email: "",
    telephone: "",
    enfantNom: "",
    enfantAge: "2 ans",
    formule: "Temps plein (5 jours)",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close feedback after 4 seconds
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div
      className="modal fade"
      id="modalInscription"
      tabIndex="-1"
      aria-labelledby="modalInscriptionLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg" style={{ borderRadius: "24px", overflow: "hidden" }}>
          <div className="modal-header border-0 p-4" style={{ background: "var(--gradient-brand)", color: "white" }}>
            <div className="d-flex align-items-center gap-3">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                }}
              >
                <i className="bi bi-balloon-heart-fill"></i>
              </div>
              <div>
                <h5 className="modal-title fw-bold mb-0" id="modalInscriptionLabel">
                  Demande d&apos;inscription
                </h5>
                <small className="text-white-50">Dar Sghar — دار الصغار — Inscription & Visite</small>
              </div>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-4">
            {submitted ? (
              <div className="text-center py-4">
                <div
                  className="mx-auto mb-3 text-success d-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "var(--color-secondary-subtle)",
                    fontSize: "2rem",
                  }}
                >
                  <i className="bi bi-check-lg"></i>
                </div>
                <h4 className="fw-bold">Demande envoyée avec succès !</h4>
                <p className="text-muted">
                  Merci <strong>{formData.parentNom || "Chers parents"}</strong>. Notre directrice pédagogique prendra contact
                  avec vous sous 24h pour convenir d&apos;une visite.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4"
                  data-bs-dismiss="modal"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label fw-bold text-dark small">Nom complet du parent</label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Sophie Dupont"
                      className="form-control rounded-3 py-2"
                      value={formData.parentNom}
                      onChange={(e) => setFormData({ ...formData, parentNom: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="sophie@example.com"
                      className="form-control rounded-3 py-2"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Téléphone</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="form-control rounded-3 py-2"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Prénom de l&apos;enfant</label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Léo"
                      className="form-control rounded-3 py-2"
                      value={formData.enfantNom}
                      onChange={(e) => setFormData({ ...formData, enfantNom: e.target.value })}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark small">Âge de l&apos;enfant</label>
                    <select
                      className="form-select rounded-3 py-2"
                      value={formData.enfantAge}
                      onChange={(e) => setFormData({ ...formData, enfantAge: e.target.value })}
                    >
                      <option>Moins d&apos;1 an (Nourrisson)</option>
                      <option>1 à 2 ans (Bébés marcheurs)</option>
                      <option>2 à 3 ans (Moyens)</option>
                      <option>3 à 5 ans (Grands)</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold text-dark small">Formule souhaitée</label>
                    <select
                      className="form-select rounded-3 py-2"
                      value={formData.formule}
                      onChange={(e) => setFormData({ ...formData, formule: e.target.value })}
                    >
                      <option>Temps plein (5 jours / semaine)</option>
                      <option>Temps partiel (3 à 4 jours / semaine)</option>
                      <option>Accueil d&apos;urgence ou occasionnel</option>
                    </select>
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-cta-main w-100 justify-content-center py-2">
                      <i className="bi bi-check-circle-fill"></i>
                      Valider ma demande de place
                    </button>
                    <p className="text-muted text-center small mt-2 mb-0">
                      <i className="bi bi-lock-fill me-1"></i> Vos informations restent strictement confidentielles.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
