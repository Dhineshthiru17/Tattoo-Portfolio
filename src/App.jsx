import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <div className="app-shell">
      <Navbar onAboutClick={() => setIsAboutOpen(true)} />
      <main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Hero />
      </main>
      <About isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
