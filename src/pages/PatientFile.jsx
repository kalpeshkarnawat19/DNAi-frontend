import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/patientfile.css';

function PatientFile() {
    const navigate = useNavigate();

    // Mock data for a specific patient's history
    const [patientInfo] = useState({
        id: 'P101',
        name:'Jay Kelani',
        age: 20,
        gender: 'Male'
    });

    const [visitHistory] = useState([
        { date: '2026-01-10', record: 'Patient reported persistent migraines. AI analysis suggests potential tension-type headache. Recommended hydration and rest.' },
        { date: '2025-12-15', record: 'Routine checkup. BP 120/80. All vitals stable. No abnormalities detected in DNA scanning.' },
        { date: '2025-11-02', record: 'Initial consultation. Discussion of family history. Patient cleared for DNAi baseline testing.' },
    ]);

    return (
        <div className="app-viewport patient-file-layout">
            <nav className="branding">
                <div className="logo">DNAi</div>
                <div className="tagline">Diagnosis Assistant</div>
            </nav>

            <main className="file-content">
                <header className="file-header">
                    <div className="patient-identity">
                        <h1>{patientInfo.name}</h1>
                        <span className="patient-id-badge">ID:{patientInfo.id}</span>
                    </div>
                    <div className="action-row">
                        <button className="glow-button small secondary" onClick={() => navigate("/Dashboard")}>
                            Dashboard
                        </button>
                    </div>
                </header>

                <div className="table-scroll-container">
                    <section className="history-section">
                        <h3>Medical Visit History</h3>
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>Visit Date</th>
                                    <th>Medical Record / Diagnosis Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visitHistory.map((visit, index) => (
                                    <tr key={index}>
                                        <td className="visit-date">{visit.date}</td>
                                        <td className="visit-record">{visit.record}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            </main>
            </div>
            );
}

            export default PatientFile;