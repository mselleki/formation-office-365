import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { episodes, EpisodeStatus } from '../content/episodes'
import { ProgressState } from '../App'

interface EpisodeDetailProps {
  isTrainerMode: boolean
  progress: Record<number, ProgressState>
  onUpdateProgress: (episodeId: number, status: EpisodeStatus) => void
  onUpdateNotes: (episodeId: number, notes: string) => void
}

export default function EpisodeDetail({
  isTrainerMode,
  progress,
  onUpdateProgress,
  onUpdateNotes
}: EpisodeDetailProps) {
  const { id } = useParams<{ id: string }>()
  const episode = episodes.find(e => e.id === parseInt(id || '0'))

  const [showHints, setShowHints] = useState(false)
  const [showTrainerNotes, setShowTrainerNotes] = useState(false)

  if (!episode) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">Épisode non trouvé</p>
        <Link to="/episodes" className="text-accent hover:underline">
          Retour à la liste des épisodes
        </Link>
      </div>
    )
  }

  const episodeProgress = progress[episode.id]
  const currentStatus = episodeProgress?.status || 'not_started'
  const notes = episodeProgress?.notes || ''

  const handleStatusChange = (newStatus: EpisodeStatus) => {
    onUpdateProgress(episode.id, newStatus)
  }

  const handleDownload = (filePath: string) => {
    window.open(filePath, '_blank')
  }

  const handleCopy = async (filePath: string) => {
    try {
      const response = await fetch(filePath)
      const text = await response.text()
      await navigator.clipboard.writeText(text)
      alert('Contenu copié dans le presse-papiers !')
    } catch (error) {
      console.error('Erreur lors de la copie:', error)
      alert('Erreur lors de la copie')
    }
  }

  const previousEpisode = episodes.find(e => e.id === episode.id - 1)
  const nextEpisode = episodes.find(e => e.id === episode.id + 1)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          to="/episodes"
          className="text-accent hover:underline text-sm"
        >
          ← Retour à la liste des épisodes
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-accent">
              Épisode {episode.id}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">
              {episode.title}
            </h1>
          </div>
          <div className="flex flex-col gap-2">
            <select
              value={currentStatus}
              onChange={(e) => handleStatusChange(e.target.value as EpisodeStatus)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-accent"
            >
              <option value="not_started">Non commencé</option>
              <option value="in_progress">En cours</option>
              <option value="completed">Terminé</option>
            </select>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          {episode.context}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {episode.tools.map(tool => (
            <span
              key={tool}
              className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="text-sm text-gray-500">
          ⏱️ Durée estimée : {episode.estimatedDuration}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Objectifs pédagogiques
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {episode.objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Exercice pas à pas
        </h2>
        <div className="space-y-6">
          {episode.steps.map(step => (
            <div key={step.number} className="border-l-4 border-accent pl-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold mr-3">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Résultat attendu
        </h2>
        <ul className="space-y-2">
          {episode.expectedResults.map((result, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span className="text-gray-700">{result}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Erreurs fréquentes
        </h2>
        <div className="space-y-4">
          {episode.commonErrors.map((error, index) => (
            <div key={index} className="border-l-4 border-yellow-400 pl-4">
              <p className="font-semibold text-gray-900 mb-1">
                ❌ {error.error}
              </p>
              <p className="text-gray-700">
                💡 Solution : {error.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {episode.files && episode.files.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Fichiers et templates
          </h2>
          <div className="space-y-2">
            {episode.files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-700">{file.name}</span>
                {file.type === 'download' ? (
                  <button
                    onClick={() => handleDownload(file.path)}
                    className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors text-sm"
                  >
                    Télécharger
                  </button>
                ) : (
                  <button
                    onClick={() => handleCopy(file.path)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
                  >
                    Copier
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {episode.hints && episode.hints.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <button
            onClick={() => setShowHints(!showHints)}
            className="w-full flex items-center justify-between text-left"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Indices
            </h2>
            <span className="text-accent">
              {showHints ? '▼' : '▶'}
            </span>
          </button>
          {showHints && (
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
              {episode.hints.map((hint, index) => (
                <li key={index}>{hint}</li>
              ))}
            </ul>
          )}
        </div>
      )}

      {isTrainerMode && episode.trainerNotes && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg shadow-sm p-8 mb-6">
          <button
            onClick={() => setShowTrainerNotes(!showTrainerNotes)}
            className="w-full flex items-center justify-between text-left"
          >
            <h2 className="text-2xl font-semibold text-blue-900">
              Notes formateur
            </h2>
            <span className="text-blue-600">
              {showTrainerNotes ? '▼' : '▶'}
            </span>
          </button>
          {showTrainerNotes && (
            <p className="mt-4 text-blue-800 leading-relaxed">
              {episode.trainerNotes}
            </p>
          )}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Mes notes personnelles
        </h2>
        <textarea
          value={notes}
          onChange={(e) => onUpdateNotes(episode.id, e.target.value)}
          placeholder="Ajoutez vos notes personnelles ici..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent min-h-[150px]"
        />
      </div>

      <div className="flex items-center justify-between">
        {previousEpisode ? (
          <Link
            to={`/episodes/${previousEpisode.id}`}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            ← Épisode {previousEpisode.id}
          </Link>
        ) : (
          <div></div>
        )}

        {nextEpisode ? (
          <Link
            to={`/episodes/${nextEpisode.id}`}
            className="px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors"
          >
            Épisode {nextEpisode.id} →
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}
