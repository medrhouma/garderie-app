import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import RegistrationModal from "./components/RegistrationModal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Activities />
      <Footer />
      <RegistrationModal />
    </main>
  );
}
