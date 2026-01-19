# Déploiement sur Vercel

## Méthode 1 : Via l'interface Vercel (recommandé)

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Créez un compte (gratuit) avec GitHub, GitLab ou email

2. **Connecter votre projet**
   - Cliquez sur "Add New Project"
   - Importez votre dépôt Git (GitHub, GitLab, Bitbucket)
   - Ou connectez un dossier local

3. **Configuration automatique**
   - Vercel détectera automatiquement que c'est un projet Vite
   - Les paramètres suivants seront utilisés :
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

4. **Déployer**
   - Cliquez sur "Deploy"
   - Vercel construira et déploiera votre site
   - Vous recevrez une URL (ex: `formation365.vercel.app`)

## Méthode 2 : Via la CLI Vercel

1. **Installer la CLI Vercel**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter**
   ```bash
   vercel login
   ```

3. **Déployer**
   ```bash
   vercel
   ```
   
   Suivez les instructions :
   - Appuyez sur Entrée pour confirmer le projet
   - Appuyez sur Entrée pour confirmer le répertoire
   - Choisissez si vous voulez modifier les paramètres (généralement non)

4. **Déploiement en production**
   ```bash
   vercel --prod
   ```

## Configuration

Le fichier `vercel.json` est déjà configuré pour :
- ✅ Détecter automatiquement Vite
- ✅ Router toutes les routes vers `index.html` (nécessaire pour React Router)
- ✅ Utiliser les commandes de build standard

## Variables d'environnement

Si vous avez besoin de variables d'environnement :
1. Allez dans les paramètres du projet sur Vercel
2. Section "Environment Variables"
3. Ajoutez vos variables

## Déploiements automatiques

Une fois connecté à un dépôt Git :
- ✅ Chaque push sur `main` déclenche un déploiement en production
- ✅ Les autres branches déclenchent des déploiements de prévisualisation
- ✅ Chaque déploiement génère une URL unique

## URLs générées

- **Production** : `votre-projet.vercel.app`
- **Prévisualisation** : `votre-projet-git-branch.vercel.app`

## Support

En cas de problème :
- Vérifiez les logs de build dans le dashboard Vercel
- Assurez-vous que `npm run build` fonctionne localement
- Vérifiez que toutes les dépendances sont dans `package.json`
