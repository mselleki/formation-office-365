# Guide : Pousser le projet sur GitHub

## Étape 1 : Créer un dépôt sur GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Remplissez les informations :
   - **Repository name** : `formation365` (ou le nom de votre choix)
   - **Description** : "Site vitrine pour formation Microsoft 365"
   - **Visibilité** : Public ou Private (selon votre choix)
   - **NE COCHEZ PAS** "Initialize this repository with a README" (on a déjà un README)
4. Cliquez sur **"Create repository"**

## Étape 2 : Initialiser Git localement

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit: Site formation Microsoft 365"
```

## Étape 3 : Connecter au dépôt GitHub

GitHub vous donnera une URL (ex: `https://github.com/votre-username/formation365.git`)

```bash
# Ajouter le remote GitHub (remplacez par votre URL)
git remote add origin https://github.com/votre-username/formation365.git

# Renommer la branche principale en main (si nécessaire)
git branch -M main

# Pousser le code sur GitHub
git push -u origin main
```

## Étape 4 : Vérification

Allez sur votre dépôt GitHub, vous devriez voir tous vos fichiers !

## Commandes Git utiles

```bash
# Voir l'état des fichiers
git status

# Ajouter des fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des modifications"

# Pousser sur GitHub
git push

# Voir l'historique
git log

# Voir les remotes configurés
git remote -v
```

## Fichiers ignorés

Le fichier `.gitignore` est déjà configuré pour ignorer :
- `node_modules/`
- `dist/`
- Les fichiers de logs
- Les fichiers d'éditeur

## Prochaines étapes

Une fois sur GitHub, vous pourrez :
- ✅ Connecter Vercel à votre dépôt GitHub pour un déploiement automatique
- ✅ Collaborer avec d'autres développeurs
- ✅ Gérer les versions de votre code
