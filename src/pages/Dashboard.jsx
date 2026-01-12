import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/dashboard.css';

function DoctorDashboard() {
  const navigate = useNavigate();
  
  // Mock data for the patient log
  const [patients] = useState([
    { id: 'P101', name: 'Jay Kelani', lastVisit: '2026-01-10', status: 'Diagnosed' },
    { id: 'P102', name: 'Kalpesh Karnawat', lastVisit: '2026-01-12', status: 'Pending' },
  ]);

  return (
    <div className="app-viewport dashboard-layout">
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      <main className="dashboard-content">
        <header className="welcome-header">
          <h1>Welcome, Dr. Kavin Sharma</h1>
          <div className="action-row">
            <button className="glow-button small">Add New Patient</button>
            <button className="glow-button small secondary">Update Records</button>
          </div>
        </header>

        <section className="patient-log-section">
          <h3>Recent Patient Logs</h3>
          <table className="patient-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Last Visit</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.lastVisit}</td>
                  <td>
                    <span className={`status ${p.status.toLowerCase()}`}>
                      {p.status}
                    </span>
                  </td>
                  <td>
                    <button className="table-link">View Analysis</button>
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