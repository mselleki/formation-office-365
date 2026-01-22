import { Link } from 'react-router-dom'

export default function Home() {
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
