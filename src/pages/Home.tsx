import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rising Stars Tennis Day
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Formation Microsoft 365
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

      <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
          🤖 Nouveau : Section Intelligence Artificielle
        </h2>
        <p className="text-indigo-800 leading-relaxed mb-4">
          Découvrez notre nouveau module sur l'IA pour non-techniques ! Apprenez à utiliser l'IA 
          de manière efficace et responsable dans votre travail quotidien. Démystifiez l'IA, 
          maîtrisez le prompting, et découvrez les bonnes pratiques.
        </p>
        <Link
          to="/exercices"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Découvrir les exercices IA →
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
          className="px-8 py-3 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors text-center"
        >
          Paramètres
        </Link>
      </div>
    </div>
  )
}
