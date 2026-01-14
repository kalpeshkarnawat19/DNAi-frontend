import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/dashboard.css';

function DoctorDashboard() {
  const navigate = useNavigate();

  // Mock data for the patient log
  const [patients] = useState([
    { id: 'P101', name: 'Jay Kelani', status: 'Diagnosed' },
    { id: 'P102', name: 'Kalpesh Karnawat', status: 'Pending' },
  ]);

  return (
    <div className="app-viewport dashboard-layout">
      {/* Navbar Branding */}
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      <main className="dashboard-content">
        {/* Top Header Section */}
        <header className="welcome-header">
          <h1>Welcome, Dr. Kavin Sharma</h1>
          <div className="action-row">
            <button className="glow-button small" onClick={() => navigate("/NewPatient")}>
              Add New Patient
            </button>
          </div>
        </header>

        {/* Patient Table Section */}
        <section className="patient-log-section">
          <h3>Patient Log</h3>
          <table className="patient-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Manage Patient</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>
                    <span className={`status ${p.status.toLowerCase()}`}>
                      {p.status}
                    </span>
                  </td>

                  <td>
                    <div className="action-group">
                      <button
                        className="glow-button small secondary"
                        onClick={() => navigate("/UpdateRecords")}
                      >
                        Update Records
                      </button>
                      <button
                        className="glow-button small secondary"
                      >
                        Patient File
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default DoctorDashboard;