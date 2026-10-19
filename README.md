# 🧒 Garderie Dar Sghar — دار الصغار

> **Application Web pour la garderie d'enfants Dar Sghar — دار الصغار** — Un espace de bonheur pour vos enfants.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![Express](https://img.shields.io/badge/Express-5-green?logo=express)
![Node.js](https://img.shields.io/badge/Node.js-24-green?logo=node.js)

---

## 📋 Présentation du Projet

**Dar Sghar — دار الصغار** est une application web complète pour une garderie d'enfants. Elle présente les services, les activités et les informations de la garderie à travers une interface moderne, responsive et dynamique.

### Fonctionnalités principales :
- 🏠 **Landing page responsive** avec Navbar, Hero et Services
- 🎨 **Design moderne** avec Bootstrap 5 et animations CSS
- 🔌 **API REST** backend avec Express.js
- 🔄 **Intégration frontend-backend** pour un affichage dynamique des données
- 📱 **Responsive design** adapté à tous les écrans (mobile, tablette, desktop)

---

## 🛠 Technologies Utilisées

| Technologie | Version | Rôle |
|---|---|---|
| **Next.js** | 16.x | Framework React (frontend) |
| **React** | 19.x | Bibliothèque UI |
| **Bootstrap 5** | 5.3.x | Framework CSS responsive |
| **Bootstrap Icons** | 1.x | Bibliothèque d'icônes |
| **Node.js** | 24.x | Runtime JavaScript (backend) |
| **Express** | 5.x | Framework serveur HTTP |
| **CORS** | 2.x | Gestion des requêtes cross-origin |
| **Git / GitHub** | - | Gestion de version et hébergement |

---

## 📁 Structure des Dossiers

```
garderie-app/
├── app/                          # Dossier principal Next.js (App Router)
│   ├── components/               # Composants React réutilisables
│   │   ├── Navbar.js             # Barre de navigation
│   │   ├── Hero.js               # Section héro d'accueil
│   │   └── Services.js           # Section des services (cartes Bootstrap)
│   ├── BootstrapClient.js        # Chargement client de Bootstrap JS
│   ├── globals.css               # Styles globaux et design system
│   ├── layout.js                 # Layout principal (métadonnées, polices, imports)
│   ├── page.js                   # Page d'accueil (landing page)
│   └── favicon.ico               # Icône du site
├── public/                       # Fichiers statiques
│   └── hero-garderie.jpg         # Image héro de la garderie
├── server.js                     # Serveur Express (backend API)
├── package.json                  # Dépendances et scripts
├── next.config.mjs               # Configuration Next.js
└── README.md                     # Documentation du projet
```

---

## 🚀 Installation et Exécution

### Prérequis

- **Node.js** v18+ installé ([télécharger](https://nodejs.org))
- **npm** v9+ (inclus avec Node.js)
- **Git** installé ([télécharger](https://git-scm.com))

### 1. Cloner le dépôt

```bash
git clone https://github.com/medrhouma/garderie-app.git
cd garderie-app
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le backend (Express API)

```bash
npm run server
```

Le serveur Express démarre sur **http://localhost:5000**

### 4. Lancer le frontend (Next.js)

Dans un **nouveau terminal** :

```bash
npm run dev
```

Le frontend Next.js démarre sur **http://localhost:3000**

### 5. Accéder à l'application

Ouvrez votre navigateur et accédez à :
- **Frontend** : [http://localhost:3000](http://localhost:3000)
- **API** : [http://localhost:5000](http://localhost:5000)

---

## 📡 Documentation des API

Le backend Express expose trois endpoints REST :

### `GET /api/garderie`

Retourne les informations générales de la garderie.

**Réponse :**
```json
{
  "success": true,
  "data": {
    "nom": "Dar Sghar — دار الصغار",
    "slogan": "Un espace de bonheur pour vos enfants",
    "description": "Chez Dar Sghar — دار الصغار, nous offrons...",
    "adresse": "123 Rue des Étoiles, 75001 Paris, France",
    "telephone": "+33 1 23 45 67 89",
    "email": "contact@darsghar.com",
    "horaires": {
      "ouverture": "07:00",
      "fermeture": "19:00",
      "jours": "Lundi au Vendredi"
    },
    "statistiques": {
      "enfantsInscrits": 150,
      "educateurs": 15,
      "anneesExperience": 10,
      "tauxSatisfaction": 98
    },
    "certifications": ["Agrément PMI", "Certification Qualité ISO 9001", "Label Éco-Crèche"]
  }
}
```

---

### `GET /api/services`

Retourne la liste des services proposés par la garderie.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "titre": "Éveil Éducatif",
      "description": "Programme pédagogique stimulant...",
      "icone": "bi-book-half",
      "couleur": "orange",
      "caracteristiques": [
        "Ateliers créatifs quotidiens",
        "Initiation aux langues",
        "Développement cognitif"
      ]
    },
    {
      "id": 2,
      "titre": "Garde Flexible",
      "description": "Horaires adaptés à votre emploi du temps...",
      "icone": "bi-people-fill",
      "couleur": "teal",
      "caracteristiques": [
        "Ouvert de 7h à 19h",
        "Formules personnalisées",
        "Accueil d'urgence"
      ]
    },
    {
      "id": 3,
      "titre": "Activités Ludiques",
      "description": "Un programme riche en activités...",
      "icone": "bi-emoji-smile-fill",
      "couleur": "purple",
      "caracteristiques": [
        "Musique et danse",
        "Arts plastiques",
        "Jeux en plein air"
      ]
    }
  ]
}
```

---

### `GET /api/activites`

Retourne la liste des activités destinées aux enfants.

**Réponse :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "titre": "Atelier Peinture",
      "description": "Expression artistique libre...",
      "categorie": "Art",
      "ageMin": 2,
      "ageMax": 5,
      "horaire": "09:00 - 10:00",
      "jour": "Lundi"
    },
    {
      "id": 2,
      "titre": "Éveil Musical",
      "description": "Découverte des instruments de musique...",
      "categorie": "Musique",
      "ageMin": 1,
      "ageMax": 4,
      "horaire": "10:30 - 11:15",
      "jour": "Mardi"
    }
  ]
}
```

> **Note** : L'API retourne 6 activités au total (Atelier Peinture, Éveil Musical, Yoga Enfants, Conte et Lecture, Jardinage, Jeux de Société).

---

## 🌿 Historique des Branches

Le projet a été développé en suivant une stratégie de branches Git rigoureuse :

| Branche | Description | Statut |
|---|---|---|
| `main` | Branche principale de production | ✅ Active |
| `feature/landing-page` | Landing page responsive (Navbar, Hero, Services) | ✅ Fusionnée |
| `feature/components` | Extraction en composants indépendants | ✅ Fusionnée |
| `feature/backend` | Backend Node.js/Express avec API REST | ✅ Fusionnée |
| `feature/api-integration` | Connexion frontend ↔ backend | ✅ Fusionnée |
| `docs/readme` | Documentation README.md | ✅ Fusionnée |

---

## 👤 Auteur

Développé dans le cadre d'un projet de développement web.

---

## 📄 Licence

Ce projet est sous licence MIT.
