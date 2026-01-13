import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/newpatient.css";

export default function AddPatient() {
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [status, setStatus] = useState("pending");
  const [medicalCase, setMedicalCase] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!patientId || !patientName || !medicalCase) {
      setMessage("Please fill all fields.");
      setMessageType("error");
      return;
    }

    if (!/^P\d+$/.test(patientId)) {
      setMessage("Patient ID must look like P103 (P + numbers).");
      setMessageType("error");
      return;
    }

    const data = { patientId, patientName, status, medicalCase };
    console.log("Submitted:", data);

    setMessage("Patient added successfully!");
    setMessageType("success");

    setPatientId("");
    setPatientName("");
    setMedicalCase("");

    setTimeout(() => {
      setMessage("");
      setMessageType("");
      navigate('/dashboard');
    }, 3000);
  }

  return (
    <div className="add-patient-page">
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      <div className="content-wrapper">
        <h1 className="page-title">Add New Patient</h1>


        <form onSubmit={handleSubmit} className="form-card">
          {message && <p className={`message ${messageType}`}>{message}</p>}

          {/* Row 1: ID, Name, and Status */}
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
              <label>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="diagnosed">Diagnosed</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          {/* Row 2: Medical Case Textarea */}
          <div className="form-group full-width">
            <label>Medical Case / Symptoms</label>
            <textarea
              className="medical-textarea"
              value={medicalCase}
              onChange={(e) => setMedicalCase(e.target.value)}
              placeholder="Describe the medical case..."
            />
          </div>

          {/* Row 3: Action Button (Centered via CSS) */}
          <button type="submit" className="action-btn">
            Add Patient
          </button>

          {/* Row 4: Subtle Link */}
          <span className="back-link" onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </span>
        </form>
      </div>
    </div>
  );
}