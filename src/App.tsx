import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Greta from './pages/Greta'
import Plgos from './pages/Plgos'
import Mediq from './pages/Mediq'

/* A new page starts at the top; a #hash link scrolls to its target, even when
   it is the hash already in the address bar. */
function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, hash, key])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Navigate to="/#work" replace />} />
        <Route path="/work/greta" element={<Greta />} />
        <Route path="/work/plgos" element={<Plgos />} />
        <Route path="/work/mediq" element={<Mediq />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
      </Routes>
    </>
  )
}

export default App
