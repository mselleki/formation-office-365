import { Link } from 'react-router-dom'

interface HeaderProps {
  isTrainerMode: boolean
  onToggleTrainerMode: () => void
}

export default function Header({ isTrainerMode, onToggleTrainerMode }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl">🎾</span>
            <h1 className="text-xl font-semibold text-gray-800">
              Rising Stars Tennis Day
            </h1>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link 
              to="/exercices" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Exercices
            </Link>
            <Link 
              to="/episodes" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Épisodes
            </Link>
            <Link 
              to="/settings" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Paramètres
            </Link>
            <button
              onClick={onToggleTrainerMode}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isTrainerMode
                  ? 'bg-accent text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isTrainerMode ? 'Mode Formateur' : 'Mode Apprenant'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
