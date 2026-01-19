# Rising Stars Tennis Day - Formation Microsoft 365

Site vitrine local pour accompagner une formation Microsoft 365 en présentiel, basée sur un projet fil rouge : l'organisation du **Rising Stars Tennis Day**, un événement où de jeunes joueurs prometteurs rencontrent une star du tennis.

## 🎯 Objectifs

Ce site permet au formateur de dérouler la formation et aux apprenants de suivre les exercices étape par étape. Il offre une expérience sobre, professionnelle et structurée pour maîtriser les outils Microsoft 365 à travers un projet concret.

## 🛠️ Technologies utilisées

- **React 18** avec **TypeScript**
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **React Router** pour la navigation
- **localStorage** pour la sauvegarde de la progression (aucun backend requis)

## 📋 Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

## 🚀 Installation et lancement

1. **Installer les dépendances**

```bash
npm install
```

2. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera accessible à l'adresse `http://localhost:5173` (ou un autre port si celui-ci est occupé).

3. **Build de production**

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

4. **Prévisualiser le build de production**

```bash
npm run preview
```

## 📁 Structure du projet

```
formation365/
├── public/
│   └── templates/          # Fichiers modèles téléchargeables
├── src/
│   ├── components/         # Composants React réutilisables
│   │   └── Header.tsx
│   ├── content/            # Contenu centralisé
│   │   └── episodes.ts     # Tous les épisodes de la formation
│   ├── pages/              # Pages de l'application
│   │   ├── Home.tsx        # Page d'accueil
│   │   ├── Episodes.tsx    # Liste des épisodes
│   │   ├── EpisodeDetail.tsx  # Détail d'un épisode
│   │   └── Settings.tsx    # Paramètres
│   ├── App.tsx             # Composant principal et routing
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 📚 Contenu de la formation

La formation comprend **10 épisodes** couvrant les outils Microsoft 365 :

1. **Création du QG du projet** (OneDrive + Teams)
2. **Collecte des inscriptions** (Forms → Excel)
3. **Construction du planning** (Excel)
4. **Dossier officiel de l'événement** (Word)
5. **Partage et collaboration** (droits OneDrive, commentaires, versions)
6. **Réunion de coordination** (Teams + partage écran + email Outlook)
7. **Automatisation avec macros Excel** (mise en forme + export PDF)
8. **Mini brique Python** (lecture CSV/Excel, statistiques, fichiers propres)
9. **IA comme copilote** (réécriture d'email, résumé, checklist risques)
10. **Checklist de livraison finale** (PDF, dossiers partagés, fichiers Excel finaux)

## ✨ Fonctionnalités

### Mode Formateur / Apprenant
- Bascule entre les deux modes depuis le header
- Le mode formateur affiche des notes supplémentaires pour chaque épisode

### Suivi de progression
- Statut de chaque épisode (Non commencé / En cours / Terminé)
- Notes personnelles par épisode
- Sauvegarde automatique dans le localStorage
- Possibilité de réinitialiser la progression depuis les paramètres

### Recherche et filtres
- Recherche textuelle dans les titres et contextes des épisodes
- Filtres par outil Microsoft 365 utilisé

### Templates et fichiers
- Téléchargement de fichiers modèles (Excel, Word, etc.)
- Copie dans le presse-papiers pour les modèles de texte
- Tous les templates sont dans `/public/templates`

## 🎨 Personnalisation du contenu

Tout le contenu de la formation est centralisé dans un seul fichier : `src/content/episodes.ts`

Pour modifier les textes, les étapes, ou ajouter des épisodes, éditez simplement ce fichier TypeScript. La structure est typée et documentée.

## 📝 Notes importantes

- **Aucun backend requis** : tout fonctionne en local avec localStorage
- **Templates** : Les fichiers `.xlsx` et `.docx` dans `/public/templates` sont des placeholders. Remplacez-les par de vrais fichiers si nécessaire.
- **Mode formateur** : Activez-le depuis le header pour voir les notes pédagogiques supplémentaires

## 🔧 Développement

### Ajouter un nouvel épisode

1. Ouvrez `src/content/episodes.ts`
2. Ajoutez un nouvel objet dans le tableau `episodes` en suivant la structure `Episode`
3. L'épisode apparaîtra automatiquement dans la liste

### Modifier le style

Les styles utilisent Tailwind CSS. Modifiez `tailwind.config.js` pour personnaliser les couleurs, ou éditez directement les classes dans les composants.

## 📄 Licence

Ce projet est destiné à un usage pédagogique dans le cadre d'une formation Microsoft 365.

---

**Bon apprentissage ! 🎾**
