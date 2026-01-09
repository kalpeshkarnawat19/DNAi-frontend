import { useState } from 'react'
import './App.css'

function App() {
  const [symptoms, setSymptoms] = useState('')

  return (
    <div className="app-viewport">
      {/* Top Left Branding */}
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      {/* Perfectly Centered Input Area */}
      <main className="content-center">
        <div className="input-card">
          <h2>Enter The Symptoms</h2>
          <p className="hint">Please document patient findings using standardized medical terminology. Enter clinical manifestations and diagnostic observations using precise, medically recognized vocabulary. Avoid colloquial expressions or non-clinical descriptors.</p>
          
          <textarea 
            placeholder="Describe the medical case..." 
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
          
          <button className="analyze-btn">Initialize Analysis</button>
        </div>
      </main>
    </div>
  )
}

export default App