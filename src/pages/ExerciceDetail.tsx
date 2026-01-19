import { useParams, Link } from 'react-router-dom'
import { getExerciceById } from '../content/exercices'

interface ExerciceDetailProps {
  isTrainerMode: boolean
}

export default function ExerciceDetail({ isTrainerMode }: ExerciceDetailProps) {
  const { id } = useParams<{ category: string; id: string }>()
  const exercice = id ? getExerciceById(id) : undefined

  if (!exercice) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Exercice non trouvé</p>
        <Link to="/exercices" className="text-accent hover:underline">
          Retour à la liste des exercices
        </Link>
      </div>
    )
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Word: 'bg-blue-100 text-blue-800',
      Excel: 'bg-green-100 text-green-800',
      Outlook: 'bg-purple-100 text-purple-800',
      OneDrive: 'bg-cyan-100 text-cyan-800',
      OneNote: 'bg-pink-100 text-pink-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          to="/exercices"
          className="text-accent hover:underline text-sm"
        >
          ← Retour à la liste des exercices
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(exercice.category)}`}>
              {exercice.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
              {exercice.title}
            </h1>
          </div>
          <div className="text-sm text-gray-500">
            ⏱️ {exercice.duration}
          </div>
        </div>
        {exercice.category === 'Excel' && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link
              to="/exercices/excel/bible"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
            >
              📚 Ouvrir la Bible Excel
            </Link>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          🎯 Objectif pédagogique
        </h2>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
          {exercice.objective}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          📄 Contexte
        </h2>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
          {exercice.context}
        </div>
      </div>

      {exercice.generalInstructions.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            🛠️ Consignes générales
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {exercice.generalInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          🧱 Étapes de l'exercice
        </h2>
        <div className="space-y-8">
          {exercice.steps.map(step => (
            <div key={step.number} className="border-l-4 border-accent pl-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Étape {step.number} – {step.title}
                </h3>
                {step.duration && (
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                    {step.duration}
                  </span>
                )}
              </div>
              <div className="space-y-2 text-gray-700">
                {step.instructions.map((instruction, index) => {
                  // Si l'instruction commence par "•", c'est une liste
                  if (instruction.startsWith('•')) {
                    return (
                      <div key={index} className="ml-4">
                        {instruction}
                      </div>
                    )
                  }
                  // Si c'est vide, c'est un saut de ligne
                  if (instruction === '') {
                    return <br key={index} />
                  }
                  // Si l'instruction contient des pipes "|", c'est probablement un tableau
                  if (instruction.includes('|')) {
                    const cells = instruction.split('|').map(cell => cell.trim())
                    return (
                      <div key={index} className="my-2 p-3 bg-gray-50 rounded border border-gray-200 font-mono text-sm overflow-x-auto">
                        <div className="flex gap-4">
                          {cells.map((cell, cellIndex) => (
                            <span key={cellIndex} className="flex-1 min-w-[120px]">
                              {cell}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  // Sinon, texte normal
                  return (
                    <div key={index} className={instruction.includes('⚠️') ? 'text-yellow-700 font-medium' : ''}>
                      {instruction}
                    </div>
                  )
                })}
              </div>
              {step.tips && step.tips.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-md">
                  <p className="text-sm font-semibold text-blue-900 mb-2">💡 Astuce :</p>
                  <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                    {step.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {exercice.reflectionQuestions && exercice.reflectionQuestions.length > 0 && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            ❓ Questions de réflexion
          </h2>
          <ul className="space-y-3 text-blue-800">
            {exercice.reflectionQuestions.map((question, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="whitespace-pre-line">{question}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isTrainerMode && exercice.trainerScript && (
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-semibold text-yellow-900 mb-4">
            📋 Script formateur
          </h2>
          <div className="text-yellow-900 whitespace-pre-line leading-relaxed">
            {exercice.trainerScript}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          ✅ Livrable attendu
        </h2>
        <ul className="space-y-2 text-gray-700">
          {exercice.deliverables.map((deliverable, index) => (
            <li key={index} className="flex items-start">
              {deliverable.startsWith('•') ? (
                <span className="text-gray-700">{deliverable}</span>
              ) : (
                <>
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{deliverable}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
