export default function Services() {
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
  );
}
