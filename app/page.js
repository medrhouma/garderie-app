import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />

      {/* Footer */}
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
