import { useState } from 'react'
import { Link } from 'react-router-dom'
import { exercices, categories, ExerciceCategory } from '../content/exercices'

export default function ExercicesList() {
  const [selectedCategory, setSelectedCategory] = useState<ExerciceCategory | 'Tous'>('Tous')

  const filteredExercices = selectedCategory === 'Tous' 
    ? exercices 
    : exercices.filter(ex => ex.category === selectedCategory)

  const getCategoryColor = (category: ExerciceCategory) => {
    const colors: Record<ExerciceCategory, string> = {
      IA: 'bg-indigo-100 text-indigo-800',
      Word: 'bg-blue-100 text-blue-800',
      Excel: 'bg-green-100 text-green-800',
      Outlook: 'bg-purple-100 text-purple-800',
      OneDrive: 'bg-cyan-100 text-cyan-800',
      OneNote: 'bg-pink-100 text-pink-800',
      PowerQuery: 'bg-orange-100 text-orange-800'
    }
    return colors[category]
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Exercices pratiques
        </h1>
        <p className="text-gray-600">
          Pratiquez les outils Microsoft 365 avec des exercices concrets avant de commencer le projet fil rouge.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Filtrer par catégorie
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('Tous')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === 'Tous'
                ? 'bg-accent text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tous
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercices.map(exercice => (
          <Link
            key={exercice.id}
            to={`/exercices/${exercice.category.toLowerCase()}/${exercice.id}`}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="flex items-start justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(exercice.category)}`}>
                {exercice.category}
              </span>
              <span className="text-sm text-gray-500">⏱️ {exercice.duration}</span>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {exercice.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {exercice.context.split('\n')[0]}
            </p>

            <div className="flex items-center text-sm text-accent">
              <span>Voir l'exercice →</span>
            </div>
          </Link>
        ))}
      </div>

      {filteredExercices.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucun exercice disponible dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  )
}
