import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ==========================================
          NAVBAR SECTION
          ========================================== */}
      <nav className="navbar navbar-expand-lg navbar-garderie fixed-top" id="navbar">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className="navbar-logo">
              <i className="bi bi-balloon-heart-fill"></i>
            </div>
            <span className="navbar-brand-text">Les Petits Explorateurs</span>
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-1">
              <li className="nav-item">
                <a className="nav-link active" href="#accueil">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#activites">
                  Activités
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <a className="nav-link btn-navbar-cta" href="#inscription">
                  <i className="bi bi-pencil-square me-1"></i>
                  Inscription
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ==========================================
          HERO SECTION
          ========================================== */}
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

      {/* ==========================================
          SERVICES SECTION
          ========================================== */}
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

          <div className="row g-4">
            {/* Service Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card service-card card-orange">
                <div className="card-body">
                  <div className="service-icon-wrapper bg-orange">
                    <i className="bi bi-book-half"></i>
                  </div>
                  <h3 className="card-title">Éveil Éducatif</h3>
                  <p className="card-text">
                    Programme pédagogique stimulant adapté à chaque tranche
                    d&apos;âge, favorisant la curiosité et l&apos;apprentissage
                    par le jeu.
                  </p>
                  <ul className="service-features">
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Ateliers créatifs quotidiens
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Initiation aux langues
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Développement cognitif
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card service-card card-teal">
                <div className="card-body">
                  <div className="service-icon-wrapper bg-teal">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <h3 className="card-title">Garde Flexible</h3>
                  <p className="card-text">
                    Horaires adaptés à votre emploi du temps avec des options de
                    garde à temps plein, partiel ou occasionnel.
                  </p>
                  <ul className="service-features">
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Ouvert de 7h à 19h
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Formules personnalisées
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Accueil d&apos;urgence
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card service-card card-purple">
                <div className="card-body">
                  <div className="service-icon-wrapper bg-purple">
                    <i className="bi bi-emoji-smile-fill"></i>
                  </div>
                  <h3 className="card-title">Activités Ludiques</h3>
                  <p className="card-text">
                    Un programme riche en activités artistiques, sportives et
                    musicales pour développer les talents de chaque enfant.
                  </p>
                  <ul className="service-features">
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Musique et danse
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Arts plastiques
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Jeux en plein air
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="footer-garderie" id="contact">
        <div className="container">
          <p className="mb-0">
            &copy; 2026 Garderie Les Petits Explorateurs — Tous droits réservés
            | <a href="#">Mentions légales</a> |{" "}
            <a href="#">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    </>
  );
}
