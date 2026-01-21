import { useState } from 'react'
import { Link } from 'react-router-dom'
import PasswordModal from './PasswordModal'

interface HeaderProps {
  isTrainerMode: boolean
  onToggleTrainerMode: () => void
  onTrainerAuthSuccess: () => void
}

export default function Header({ isTrainerMode, onToggleTrainerMode, onTrainerAuthSuccess }: HeaderProps) {
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  const isTrainerAuthenticated = () => {
    return localStorage.getItem('formation365-trainer-auth') === 'true'
  }

  const handleTrainerButtonClick = () => {
    if (isTrainerMode) {
      // Désactiver le mode formateur (pas besoin de mot de passe)
      onToggleTrainerMode()
    } else {
      // Activer le mode formateur
      if (isTrainerAuthenticated()) {
        // Déjà authentifié, activer directement
        onToggleTrainerMode()
      } else {
        // Pas encore authentifié, afficher la modale
        setShowPasswordModal(true)
      }
    }
  }
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/microsoft.png" 
              alt="Microsoft" 
              className="w-8 h-8"
              onError={(e) => {
                // Fallback vers SVG si PNG ne charge pas
                const target = e.target as HTMLImageElement;
                if (target.src !== '/microsoft.svg') {
                  target.src = '/microsoft.svg';
                }
              }}
            />
            <h1 className="text-xl font-semibold text-gray-800">
              Formation Microsoft 365
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
              onClick={handleTrainerButtonClick}
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
      <PasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onSuccess={onTrainerAuthSuccess}
      />
    </header>
  )
}
