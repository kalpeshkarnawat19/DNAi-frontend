import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/updaterecords.css";

function UpdateRecords() {
  const [symptoms, setSymptoms] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    const input = e.target.value;
    if (input.length <= 40) {
      setTitle(input);
    }
  };

  const handleSave = () => {
    if (!title.trim() || !symptoms.trim()) {
      alert("Please enter both a Title and Symptoms.");
      return;
    }

    alert("Records Saved!");
    navigate('/patient-file', { 
      state: { 
        date: date, 
        title: title, 
        body: symptoms 
      } 
    });
  };

  return (
    <div className="update-records-page">
      <nav className="records-branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      <main className="records-content">
        <div className="input-card">
          <h2>Enter Details</h2>

          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="text"
                className="records-input"
                placeholder="Case Title"
                value={title}
                onChange={handleTitleChange}
                maxLength={40}
              />
            </div>

            <input
              type="date"
              className="records-input date-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Describe the medical case..."
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />

          <div className="button-container">
            <button className="action-btn" onClick={handleSave}>
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