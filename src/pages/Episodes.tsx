import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { episodes, allTools, Tool, EpisodeStatus } from '../content/episodes'
import { ProgressState } from '../App'

interface EpisodesProps {
  progress: Record<number, ProgressState>
}

export default function Episodes({ progress }: EpisodesProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTools, setSelectedTools] = useState<Tool[]>([])

  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = 
        episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        episode.context.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesTools = 
        selectedTools.length === 0 ||
        selectedTools.every(tool => episode.tools.includes(tool))

      return matchesSearch && matchesTools
    })
  }, [searchQuery, selectedTools])

  const toggleTool = (tool: Tool) => {
    setSelectedTools(prev =>
      prev.includes(tool)
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    )
  }

  const getStatusLabel = (status: EpisodeStatus) => {
    switch (status) {
      case 'completed':
        return 'Terminé'
      case 'in_progress':
        return 'En cours'
      default:
        return 'Non commencé'
    }
  }

  const getStatusColor = (status: EpisodeStatus) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Épisodes de la formation
      </h1>

      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="mb-4">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Rechercher
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher un épisode..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filtrer par outil
          </label>
          <div className="flex flex-wrap gap-2">
            {allTools.map(tool => (
              <button
                key={tool}
                onClick={() => toggleTool(tool)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTools.includes(tool)
                    ? 'bg-accent text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
          {selectedTools.length > 0 && (
            <button
              onClick={() => setSelectedTools([])}
              className="mt-2 text-sm text-accent hover:underline"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEpisodes.map(episode => {
          const episodeProgress = progress[episode.id]
          const status = episodeProgress?.status || 'not_started'

          return (
            <Link
              key={episode.id}
              to={`/episodes/${episode.id}`}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl font-bold text-accent">
                  Épisode {episode.id}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                  {getStatusLabel(status)}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {episode.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {episode.context}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {episode.tools.map(tool => (
                  <span
                    key={tool}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>⏱️ {episode.estimatedDuration}</span>
                <span className="text-accent">→ Voir les détails</span>
              </div>
            </Link>
          )
        })}
      </div>

      {filteredEpisodes.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Aucun épisode ne correspond à votre recherche.
        </div>
      )}
    </div>
  )
}
