import React, { useState } from "react";
import "../css/newpatient.css";

export default function AddPatient() {
  const [patientId, setPatientId] = useState("");
  const [patientName, setPatientName] = useState("");
  const [action, setAction] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    //check whether all fields are filled
    if (!patientId || !patientName || !action) {
      setMessage("Please fill all fields.");
      setMessageType("error");
      return;
    }

    //patient Id rule
    if (!/^P\d+$/.test(patientId)) {
      setMessage("Patient ID must look like P103 (P + numbers).");
      setMessageType("error");
      return;
    }

    //data collection
    const data = { patientId, patientName, action };
    console.log("Submitted:", data);

    setMessage(" Patient added successfully!");
    setMessageType("success");

    // clear form
    setPatientId("");
    setPatientName("");
    setAction("");

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  }

  return (
    <div className="add-patient-page">
      <div className="content-wrapper">
        <h1 className="page-title">Add New Patient</h1>

        {message && <p className={`message ${messageType}`}>{message}</p>}

        <form onSubmit={handleSubmit} className="form-card">
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
            <label>Action</label>
            <select value={action} onChange={(e) => setAction(e.target.value)}>
              <option value="">Select</option>
              <option value="view-analysis">View Analysis</option>
              <option value="update-records">Update Records</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
}
