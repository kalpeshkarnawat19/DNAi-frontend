import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/newpatient.css";

export default function AddPatient() {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [initialSymptoms, setInitialSymptoms] = useState("");
  const [duration, setDuration] = useState("");
  const [comorbidities, setComorbidities] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [medicalCase, setMedicalCase] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!patientId || !patientName || !medicalCase) {
      setMessage("Please fill the required fields (ID, Name, and Symptoms).");
      setMessageType("error");
      return;
    }

    if (!/^P\d+$/.test(patientId)) {
      setMessage("Patient ID must look like P103 (P + numbers).");
      setMessageType("error");
      return;
    }

    const data = { patientId, patientName, age, initialSymptoms, duration, comorbidities, familyHistory, medicalCase };
    console.log("Submitted Data:", data);

    setMessage("Patient added successfully!");
    setMessageType("success");

    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  }

  return (
    <div className="add-patient-page">
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      <main className="content-wrapper">
        <h1 className="page-title">ADD NEW PATIENT</h1>

        <form onSubmit={handleSubmit} className="form-card">
          {message && <p className={`message ${messageType}`}>{message}</p>}

          <div className="form-row">
            <div className="form-group">
              <label>Patient ID</label>
              <input
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                placeholder="P103"
              />
            </div>
            <div className="form-group">
              <label>Patient Name</label>
              <input
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Full name"
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)} 
                placeholder="Age in years"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Initial Symptoms</label>
              <textarea
                value={initialSymptoms}
                onChange={(e) => setInitialSymptoms(e.target.value)}
                placeholder="Describe initial symptoms..."
                rows="2"
              />
            </div>
            <div className="form-group">
              <label>Duration</label>
              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g.,72 hours, 2 weeks"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Comorbidities</label>
              <textarea
                value={comorbidities}
                onChange={(e) => setComorbidities(e.target.value)} 
                placeholder="Existing conditions..."
                rows="2"
              />
            </div>
            <div className="form-group">
              <label>Family History</label>
              <textarea
                value={familyHistory}
                onChange={(e) => setFamilyHistory(e.target.value)}
                placeholder="Relevant history"
                rows="2"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Medical Case</label>
            <textarea
              className="medical-textarea"
              value={medicalCase}
              onChange={(e) => setMedicalCase(e.target.value)}
              placeholder="Provide a detailed clinical description"
            />
          </div>

          <button type="submit" className="action-btn">
            Add Patient
          </button>

          <span className="back-link" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </span>
        </form>
      </main>
    </div>
  );
}