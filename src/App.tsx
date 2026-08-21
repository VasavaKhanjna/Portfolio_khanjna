import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Experience from './pages/Experience'
import About from './pages/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
