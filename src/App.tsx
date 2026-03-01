import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Episodes from './pages/Episodes'
import EpisodeDetail from './pages/EpisodeDetail'
import ExercicesList from './pages/ExercicesList'
import ExerciceDetail from './pages/ExerciceDetail'
import ExcelBible from './pages/ExcelBible'
import Settings from './pages/Settings'
import { EpisodeStatus } from './content/episodes'
import { ExerciceStatus } from './content/exercices'

export interface ProgressState {
  status: EpisodeStatus
  notes: string
}

export interface AppState {
  isTrainerMode: boolean
  progress: Record<number, ProgressState>
  exerciseProgress: Record<string, ExerciceStatus>
}

function App() {
  // Vérifier l'authentification formateur
  const isTrainerAuthenticated = () => {
    return localStorage.getItem('formation365-trainer-auth') === 'true'
  }

  const [appState, setAppState] = useState<AppState>(() => {
    const saved = localStorage.getItem('formation365-state')
    if (saved) {
      const parsed = JSON.parse(saved)
      // Vérifier que l'utilisateur est toujours authentifié
      if (parsed.isTrainerMode && !isTrainerAuthenticated()) {
        parsed.isTrainerMode = false
      }
      return {
        isTrainerMode: parsed.isTrainerMode ?? false,
        progress: parsed.progress ?? {},
        exerciseProgress: parsed.exerciseProgress ?? {}
      }
    }
    return {
      isTrainerMode: false,
      progress: {},
      exerciseProgress: {}
    }
  })

  useEffect(() => {
    localStorage.setItem('formation365-state', JSON.stringify(appState))
  }, [appState])

  const toggleTrainerMode = () => {
    // Si on essaie d'activer le mode formateur, vérifier l'authentification
    if (!appState.isTrainerMode && !isTrainerAuthenticated()) {
      // L'authentification sera gérée par le Header avec la modale
      return
    }
    
    setAppState(prev => ({
      ...prev,
      isTrainerMode: !prev.isTrainerMode
    }))
  }

  const handleTrainerAuthSuccess = () => {
    setAppState(prev => ({
      ...prev,
      isTrainerMode: true
    }))
  }

  const updateEpisodeProgress = (episodeId: number, status: EpisodeStatus) => {
    setAppState(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        [episodeId]: {
          ...prev.progress[episodeId],
          status
        }
      }
    }))
  }

  const updateEpisodeNotes = (episodeId: number, notes: string) => {
    setAppState(prev => ({
      ...prev,
      progress: {
        ...prev.progress,
        [episodeId]: {
          ...prev.progress[episodeId],
          status: prev.progress[episodeId]?.status || 'not_started',
          notes
        }
      }
    }))
  }

  const resetProgress = () => {
    setAppState(prev => ({
      ...prev,
      progress: {}
    }))
  }

  const resetExercisesProgress = () => {
    const exerciseProgressKeys = [
      'formation365-exercises-progress',
      'formation365-exercise-progress',
      'formation365-exercices-progress',
      'formation365-exercice-progress'
    ]

    exerciseProgressKeys.forEach((key) => {
      localStorage.removeItem(key)
    })

    const savedState = localStorage.getItem('formation365-state')
    if (!savedState) {
      return
    }

    try {
      const parsed = JSON.parse(savedState)
      const sanitized = { ...parsed }
      delete sanitized.exerciseProgress
      delete sanitized.exercisesProgress
      localStorage.setItem('formation365-state', JSON.stringify(sanitized))
    } catch {
      // Si l'état est invalide, on n'empêche pas la réinitialisation des clés dédiées.
    }

    setAppState(prev => ({
      ...prev,
      exerciseProgress: {}
    }))
  }

  const updateExerciseProgress = (exerciseId: string, status: ExerciceStatus) => {
    setAppState(prev => ({
      ...prev,
      exerciseProgress: {
        ...prev.exerciseProgress,
        [exerciseId]: status
      }
    }))
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isTrainerMode={appState.isTrainerMode}
          onToggleTrainerMode={toggleTrainerMode}
          onTrainerAuthSuccess={handleTrainerAuthSuccess}
        />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isTrainerMode={appState.isTrainerMode}
                />
              }
            />
            <Route
              path="/exercices"
              element={
                <ExercicesList
                  exerciseProgress={appState.exerciseProgress}
                />
              }
            />
            <Route path="/exercices/excel/bible" element={<ExcelBible />} />
            <Route 
              path="/exercices/:category/:id" 
              element={
                <ExerciceDetail 
                  isTrainerMode={appState.isTrainerMode}
                  exerciseStatus={appState.exerciseProgress}
                  onUpdateExerciseProgress={updateExerciseProgress}
                />
              } 
            />
            <Route 
              path="/episodes" 
              element={
                <Episodes 
                  progress={appState.progress}
                />
              } 
            />
            <Route 
              path="/episodes/:id" 
              element={
                <EpisodeDetail 
                  isTrainerMode={appState.isTrainerMode}
                  progress={appState.progress}
                  onUpdateProgress={updateEpisodeProgress}
                  onUpdateNotes={updateEpisodeNotes}
                />
              } 
            />
            <Route 
              path="/settings" 
              element={
                <Settings 
                  onResetProgress={resetProgress}
                  onResetExercisesProgress={resetExercisesProgress}
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
