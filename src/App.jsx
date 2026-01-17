import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from "./pages/LoginPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddPatient from './pages/NewPatient.jsx';
import UpdateRecords from './pages/UpdateRecords.jsx';
import PatientFile from './pages/PatientFile.jsx'

function HomePage() {
  const [symptoms, setSymptoms] = useState('');

  return (
    <div className="app-viewport">
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      <main className="content-center">
        <div className="input-card">
          <h2>Enter The Symptoms</h2>
          <p className="hint">
            Please document patient findings using standardized medical terminology...
          </p>

          <textarea
            placeholder="Describe the medical case..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />

          <button className="analyze-btn">Initialize Analysis</button>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/NewPatient" element={<AddPatient />}/>
        <Route path="/UpdateRecords" element={<UpdateRecords />}/>
        <Route path="/PatientFile" element={<PatientFile />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
