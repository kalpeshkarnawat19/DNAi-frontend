import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/updaterecords.css";

function UpdateRecords() {
  const [symptoms, setSymptoms] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Saving records:", symptoms);
    alert("Records updated successfully!");
    navigate('/dashboard');
  };

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
            Please document patient findings using standardized medical terminology
          </p>

          <textarea
            placeholder="Describe the medical case..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />

          <div className="button-container">
            <button className="action-btn" onClick={() => alert("Records Saved!")}>
              Save Record
            </button>
            <span className="back-link" onClick={() => navigate('/dashboard')}>
              ← Back to Dashboard
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UpdateRecords;