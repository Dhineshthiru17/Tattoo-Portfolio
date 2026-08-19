import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Hero />
      </main>
      <FloatingWhatsApp />
    </div>
  )
}

export default App
