import { Link } from 'react-router-dom'

interface HomeProps {
  isTrainerMode: boolean
}

export default function Home({ isTrainerMode }: HomeProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Formation Microsoft 365
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Projet fil rouge : Rising Stars Tennis Day
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Bienvenue
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cette formation vous accompagne dans la réalisation d'un projet concret de bout en bout : 
          l'organisation du <strong>Rising Stars Tennis Day</strong>, un événement où de jeunes joueurs 
          prometteurs rencontrent une star du tennis.
        </p>
        <p className="text-gray-700 leading-relaxed">
          À travers une série d'épisodes pratiques, vous découvrirez comment utiliser les outils 
          Microsoft 365 pour gérer efficacement un projet réel, de la collecte des inscriptions 
          à la livraison finale.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Intelligence Artificielle
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Module dédié à l'utilisation de l'IA dans un contexte professionnel. Apprenez les fondamentaux, 
          maîtrisez le prompting et découvrez les bonnes pratiques pour intégrer l'IA dans votre travail quotidien.
        </p>
        <Link
          to="/exercices"
          className="inline-block px-6 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition-colors"
        >
          Accéder aux exercices IA
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Par où commencer ?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Avant de commencer le projet fil rouge, nous vous recommandons de pratiquer les outils 
          Microsoft 365 avec des exercices pratiques. Cela vous permettra de maîtriser les fonctionnalités 
          de base avant de les appliquer dans un contexte réel.
        </p>
      </div>

      <div className="bg-white border border-indigo-200 rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Cours
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Cette section vous aide à structurer le démarrage de la formation avec une progression claire,
          orientée usage métier et mise en pratique immédiate.
        </p>
        <Link
          to="/cours"
          className="inline-block mb-6 px-5 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Ouvrir le cours complet
        </Link>

        <div className="mb-6 p-4 bg-indigo-50 rounded-md border border-indigo-100">
          <h3 className="text-lg font-semibold text-indigo-900 mb-2">Parcours recommandé (ordre de travail)</h3>
          <p className="text-indigo-900 text-sm leading-relaxed">
            1) OneDrive et gestion documentaire - 2) Word et communication professionnelle - 3) Excel et analyse
            opérationnelle - 4) Outlook et coordination - 5) OneNote et capitalisation - 6) Power Query pour
            l'automatisation des données - 7) IA pour accélérer la production.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">OneDrive - Fondamentaux à maîtriser</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Créer une arborescence simple et logique (projet, livrables, archives, ressources).</li>
            <li>Partager avec les bons droits : lecture, modification, lien interne/externe.</li>
            <li>Synchroniser correctement avec le poste local et éviter les doublons de versions.</li>
            <li>Utiliser l’historique des versions pour revenir en arrière en cas d’erreur.</li>
            <li>Mettre en place des bonnes pratiques de nommage pour faciliter la recherche.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Excel - Base solide pour bien démarrer</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Construire un tableau propre : en-têtes clairs, types de données cohérents, filtres.</li>
            <li>Maîtriser les formules essentielles : SOMME, MOYENNE, SI, NB.SI, RECHERCHEV/XLOOKUP.</li>
            <li>Utiliser la mise en forme conditionnelle pour repérer rapidement les anomalies.</li>
            <li>Créer des tableaux croisés dynamiques pour synthétiser les informations du projet.</li>
            <li>Préparer des fichiers réutilisables (modèles) pour accélérer les prochains épisodes.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Word - Production de documents professionnels</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Structurer un document avec les styles (Titre 1, Titre 2, Normal) pour garantir la cohérence.</li>
            <li>Créer des tableaux lisibles et des mises en forme réutilisables (modèles).</li>
            <li>Utiliser le mode Révision : commentaires, suivi des modifications, validation finale.</li>
            <li>Mettre en place un publipostage simple pour les communications personnalisées.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Outlook - Coordination et suivi d'activité</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Organiser la boîte mail avec règles, catégories et dossiers prioritaires.</li>
            <li>Planifier des réunions efficaces (ordre du jour, participants, créneaux).</li>
            <li>Suivre les actions avec drapeaux, tâches et rappels.</li>
            <li>Adopter des standards de communication clairs et actionnables.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">OneNote - Organisation de la connaissance</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Structurer un notebook par sections et pages alignées sur les rituels projet.</li>
            <li>Transformer des notes brutes en plans d'action exploitables.</li>
            <li>Utiliser des tags pour retrouver rapidement les points clés et décisions.</li>
            <li>Centraliser comptes-rendus, décisions, risques et actions en un seul endroit.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Power Query - Fiabilisation et automatisation</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Importer des sources hétérogènes (CSV/Excel) avec des types de données propres.</li>
            <li>Appliquer des transformations reproductibles plutôt que des corrections manuelles.</li>
            <li>Fusionner des tables avec des clés fiables et vérifier la qualité de jointure.</li>
            <li>Documenter les étapes pour rendre le traitement auditable et maintenable.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">IA - Accélération des tâches à faible risque</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Rédiger de meilleurs prompts avec contexte, action, contraintes et format attendu.</li>
            <li>Réécrire, synthétiser et préparer des brouillons de documents plus rapidement.</li>
            <li>Valider systématiquement les sorties IA avant diffusion opérationnelle.</li>
            <li>Appliquer les règles de confidentialité sur les données sensibles.</li>
          </ul>
        </div>

        <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Livrables attendus en fin de parcours</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Un espace OneDrive structuré et partagé correctement.</li>
            <li>Un kit documentaire Word (modèle, courrier type, document révisé).</li>
            <li>Un tableau Excel propre avec indicateurs utiles au pilotage.</li>
            <li>Un processus Outlook/OneNote clair pour suivre décisions et actions.</li>
            <li>Un flux Power Query simple et réutilisable.</li>
          </ul>
        </div>
      </div>

      {isTrainerMode && (
        <div className="bg-white border border-green-200 rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              To-Do
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 rounded border border-gray-400" />
                <span>Valider le plan de cours OneDrive (objectifs, démos, exercices guidés).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 rounded border border-gray-400" />
                <span>Préparer 2 jeux de données Excel : initiation et niveau intermédiaire.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 rounded border border-gray-400" />
                <span>Définir la progression pédagogique séance par séance (durée et livrables).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-4 w-4 rounded border border-gray-400" />
                <span>Ajouter des critères d’évaluation simples pour chaque exercice clé.</span>
              </li>
            </ul>
          </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <Link
          to="/exercices"
          className="px-8 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors text-center"
        >
          Exercices pratiques
        </Link>
        <Link
          to="/episodes"
          className="px-8 py-3 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition-colors text-center"
        >
          Démarrer le projet
        </Link>
      </div>

      <div className="flex justify-center">
        <Link
          to="/settings"
          className="px-8 py-3 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors text-center flex items-center justify-center"
          title="Paramètres"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
