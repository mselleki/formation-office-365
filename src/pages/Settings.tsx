import { Link } from 'react-router-dom'

interface SettingsProps {
  onResetProgress: () => void
}

export default function Settings({ onResetProgress }: SettingsProps) {
  const handleReset = () => {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.')) {
      onResetProgress()
      alert('Progression réinitialisée avec succès.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Paramètres
      </h1>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Progression
        </h2>
        <p className="text-gray-700 mb-6">
          Votre progression est sauvegardée automatiquement dans le navigateur. 
          Vous pouvez la réinitialiser si vous souhaitez recommencer la formation.
        </p>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Réinitialiser la progression
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          À propos
        </h2>
        <p className="text-gray-700 mb-2">
          <strong>Rising Stars Tennis Day</strong> - Formation Microsoft 365
        </p>
        <p className="text-gray-600 text-sm">
          Site vitrine local pour accompagner une formation Microsoft 365 en présentiel.
        </p>
      </div>

      <div className="text-center">
        <Link
          to="/episodes"
          className="text-accent hover:underline"
        >
          Retour à la liste des épisodes
        </Link>
      </div>
    </div>
  )
}
