export default function Navbar() {
  return (
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
  );
}
