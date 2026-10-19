import { Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from "./BootstrapClient";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Garderie Les Petits Explorateurs - Garderie d'enfants",
  description:
    "Garderie Les Petits Explorateurs offre un environnement sûr, stimulant et bienveillant pour le développement de vos enfants. Découvrez nos services de garde, activités éducatives et programmes d'éveil.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={nunito.variable}>
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
