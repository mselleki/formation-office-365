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

export interface ProgressState {
  status: EpisodeStatus
  notes: string
}

export interface AppState {
  isTrainerMode: boolean
  progress: Record<number, ProgressState>
}

function App() {
  const [appState, setAppState] = useState<AppState>(() => {
    const saved = localStorage.getItem('formation365-state')
    if (saved) {
      return JSON.parse(saved)
    }
    return {
      isTrainerMode: false,
      progress: {}
    }
  })

  useEffect(() => {
    localStorage.setItem('formation365-state', JSON.stringify(appState))
  }, [appState])

  const toggleTrainerMode = () => {
    setAppState(prev => ({
      ...prev,
      isTrainerMode: !prev.isTrainerMode
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

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header 
          isTrainerMode={appState.isTrainerMode}
          onToggleTrainerMode={toggleTrainerMode}
        />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercices" element={<ExercicesList />} />
            <Route path="/exercices/excel/bible" element={<ExcelBible />} />
            <Route 
              path="/exercices/:category/:id" 
              element={
                <ExerciceDetail 
                  isTrainerMode={appState.isTrainerMode}
                />
              } 
            />
            <Route 
              path="/episodes" 
              element={
                <Episodes 
                  progress={appState.progress}
                  onUpdateProgress={updateEpisodeProgress}
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
