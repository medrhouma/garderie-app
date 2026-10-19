import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section" id="accueil">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-badge">
              <i className="bi bi-stars"></i>
              Bienvenue à la garderie
            </div>

            <h1 className="hero-title">
              Un espace de <span className="highlight">bonheur</span> pour
              vos enfants
            </h1>

            <p className="hero-description">
              Chez <strong>Les Petits Explorateurs</strong>, nous offrons un
              environnement sûr, stimulant et bienveillant où chaque enfant
              peut grandir, apprendre et s&apos;épanouir à son rythme.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn-hero-primary">
                <i className="bi bi-arrow-right-circle-fill"></i>
                Découvrir nos services
              </a>
              <a href="#contact" className="btn-hero-secondary">
                <i className="bi bi-telephone-fill"></i>
                Nous contacter
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-number">150+</div>
                <div className="hero-stat-label">Enfants inscrits</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">15</div>
                <div className="hero-stat-label">Éducateurs</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">10</div>
                <div className="hero-stat-label">Ans d&apos;expérience</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              <div className="hero-floating-card card-top">
                <div
                  className="floating-card-icon"
                  style={{ background: "var(--gradient-secondary)" }}
                >
                  <i className="bi bi-shield-check"></i>
                </div>
                <div>
                  <div className="floating-card-text">Sécurité garantie</div>
                  <div className="floating-card-subtext">
                    Environnement certifié
                  </div>
                </div>
              </div>

              <div className="hero-image-container">
                <Image
                  src="/hero-garderie.jpg"
                  alt="Enfants heureux jouant ensemble à la garderie Les Petits Explorateurs"
                  width={600}
                  height={400}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="hero-floating-card card-bottom">
                <div
                  className="floating-card-icon"
                  style={{ background: "var(--gradient-warm)" }}
                >
                  <i className="bi bi-heart-fill"></i>
                </div>
                <div>
                  <div className="floating-card-text">Satisfaction 98%</div>
                  <div className="floating-card-subtext">
                    Parents satisfaits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
