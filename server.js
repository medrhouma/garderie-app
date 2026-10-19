const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ==========================================
// Données de la garderie
// ==========================================

const garderieInfo = {
  nom: "Les Petits Explorateurs",
  slogan: "Un espace de bonheur pour vos enfants",
  description:
    "Chez Les Petits Explorateurs, nous offrons un environnement sûr, stimulant et bienveillant où chaque enfant peut grandir, apprendre et s'épanouir à son rythme. Notre équipe de professionnels qualifiés accompagne chaque enfant dans son développement personnel.",
  adresse: "123 Rue des Étoiles, 75001 Paris, France",
  telephone: "+33 1 23 45 67 89",
  email: "contact@petits-explorateurs.fr",
  horaires: {
    ouverture: "07:00",
    fermeture: "19:00",
    jours: "Lundi au Vendredi",
  },
  statistiques: {
    enfantsInscrits: 150,
    educateurs: 15,
    anneesExperience: 10,
    tauxSatisfaction: 98,
  },
  certifications: [
    "Agrément PMI",
    "Certification Qualité ISO 9001",
    "Label Éco-Crèche",
  ],
};

const servicesList = [
  {
    id: 1,
    titre: "Éveil Éducatif",
    description:
      "Programme pédagogique stimulant adapté à chaque tranche d'âge, favorisant la curiosité et l'apprentissage par le jeu.",
    icone: "bi-book-half",
    couleur: "orange",
    caracteristiques: [
      "Ateliers créatifs quotidiens",
      "Initiation aux langues",
      "Développement cognitif",
    ],
  },
  {
    id: 2,
    titre: "Garde Flexible",
    description:
      "Horaires adaptés à votre emploi du temps avec des options de garde à temps plein, partiel ou occasionnel.",
    icone: "bi-people-fill",
    couleur: "teal",
    caracteristiques: [
      "Ouvert de 7h à 19h",
      "Formules personnalisées",
      "Accueil d'urgence",
    ],
  },
  {
    id: 3,
    titre: "Activités Ludiques",
    description:
      "Un programme riche en activités artistiques, sportives et musicales pour développer les talents de chaque enfant.",
    icone: "bi-emoji-smile-fill",
    couleur: "purple",
    caracteristiques: [
      "Musique et danse",
      "Arts plastiques",
      "Jeux en plein air",
    ],
  },
];

const activitesList = [
  {
    id: 1,
    titre: "Atelier Peinture",
    description:
      "Expression artistique libre avec différentes techniques de peinture adaptées aux tout-petits.",
    categorie: "Art",
    ageMin: 2,
    ageMax: 5,
    horaire: "09:00 - 10:00",
    jour: "Lundi",
  },
  {
    id: 2,
    titre: "Éveil Musical",
    description:
      "Découverte des instruments de musique et initiation au rythme à travers des comptines et jeux sonores.",
    categorie: "Musique",
    ageMin: 1,
    ageMax: 4,
    horaire: "10:30 - 11:15",
    jour: "Mardi",
  },
  {
    id: 3,
    titre: "Yoga Enfants",
    description:
      "Séances de yoga adaptées aux enfants pour développer la souplesse, la concentration et le calme intérieur.",
    categorie: "Sport",
    ageMin: 3,
    ageMax: 6,
    horaire: "14:00 - 14:45",
    jour: "Mercredi",
  },
  {
    id: 4,
    titre: "Conte et Lecture",
    description:
      "Moments de lecture interactive avec des histoires captivantes pour stimuler l'imagination et le langage.",
    categorie: "Éducation",
    ageMin: 1,
    ageMax: 5,
    horaire: "15:00 - 15:30",
    jour: "Jeudi",
  },
  {
    id: 5,
    titre: "Jardinage",
    description:
      "Initiation au jardinage et à la nature : planter, arroser et observer la croissance des plantes.",
    categorie: "Nature",
    ageMin: 2,
    ageMax: 6,
    horaire: "10:00 - 11:00",
    jour: "Vendredi",
  },
  {
    id: 6,
    titre: "Jeux de Société",
    description:
      "Jeux de société éducatifs pour apprendre à partager, attendre son tour et développer la logique.",
    categorie: "Éducation",
    ageMin: 3,
    ageMax: 6,
    horaire: "16:00 - 16:45",
    jour: "Lundi",
  },
];

// ==========================================
// Routes API
// ==========================================

// GET /api/garderie - Informations générales de la garderie
app.get("/api/garderie", (req, res) => {
  res.json({
    success: true,
    data: garderieInfo,
  });
});

// GET /api/services - Liste des services proposés
app.get("/api/services", (req, res) => {
  res.json({
    success: true,
    data: servicesList,
  });
});

// GET /api/activites - Liste des activités destinées aux enfants
app.get("/api/activites", (req, res) => {
  res.json({
    success: true,
    data: activitesList,
  });
});

// Route racine
app.get("/", (req, res) => {
  res.json({
    message: "API Garderie Les Petits Explorateurs",
    version: "1.0.0",
    endpoints: [
      "GET /api/garderie",
      "GET /api/services",
      "GET /api/activites",
    ],
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`📍 API Garderie: http://localhost:${PORT}/api/garderie`);
  console.log(`📍 API Services: http://localhost:${PORT}/api/services`);
  console.log(`📍 API Activités: http://localhost:${PORT}/api/activites`);
});
