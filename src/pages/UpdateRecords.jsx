import React from "react";
import "../css/updaterecords.css";
import { useState } from 'react';

function UpdateRecords(){
  const [symptoms, setSymptoms] = useState('');
  return(
    <>
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
    </>
  )
}

export default UpdateRecords