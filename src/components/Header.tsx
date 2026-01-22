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
              src="/microsoft.svg" 
              alt="Microsoft" 
              className="w-8 h-8"
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
              Projet
            </Link>
            <Link 
              to="/settings" 
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
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
