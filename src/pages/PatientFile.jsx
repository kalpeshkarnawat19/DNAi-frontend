import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/patientfile.css";

function PatientFile() {
    const location = useLocation();
    const navigate = useNavigate();
    const [expandedRow, setExpandedRow] = useState(null);

    const recordData = location.state ? [location.state] : [
        { id: 1, date: "2026-01-15", title: "Acute Respiratory Infection", body: "Patient presents with persistent cough and fever (38.5°C). Lung sounds show slight wheezing." },
        { id: 2, date: "2026-01-10", title: "Post-Op Follow-up", body: "Surgical site healing well. No signs of inflammation. Patient reports mild discomfort." },
        { id: 3, date: "2025-12-28", title: "Routine Blood Panel", body: "All values within normal range except for Vitamin D deficiency. Supplementation started." }
    ];

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };

    return (
        <div className="patient-file-page">
            <nav className="branding">
                <div className="logo">DNAi</div>
                <div className="tagline">Diagnosis Assistant</div>
            </nav>

            <main className="file-content-wrapper">
                <h1 className="page-title">PATIENT CLINICAL RECORD</h1>

                <div className="file-layout-grid">

                    <section className="history-section">
                        <h2 className="section-subtitle">Clinical History</h2>
                        <div className="table-container">
                            <table className="clinical-table">
                                <thead>
                                    <tr>
                                        <th>DATE</th>
                                        <th>CASE TITLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recordData.map((record, index) => {
                                        const recordId = record.id || index;
                                        return (
                                            <React.Fragment key={recordId}>
                                                <tr className={expandedRow === recordId ? 'active-row' : ''}>
                                                    <td className="date-col">{record.date}</td>
                                                    <td
                                                        className="title-col clickable"
                                                        onClick={() => toggleRow(recordId)}
                                                    >
                                                        {record.title}
                                                        <span className="expand-arrow">{expandedRow === recordId ? "▲" : "▼"}</span>
                                                    </td>
                                                </tr>
                                                {expandedRow === recordId && (
                                                    <tr className="detail-row">
                                                        <td colSpan="2">
                                                            <div className="body-reveal">
                                                                <strong>CLINICAL NOTES:</strong>
                                                                <p>{record.body}</p>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* RIGHT SIDE: Diagnosis Actions */}
                    <aside className="diagnosis-actions">
                        <h2 className="section-subtitle">Analysis</h2>
                        <div className="action-card">
                            <p className="action-description">Perform a new AI-driven diagnostic analysis based on current clinical data.</p>
                            <button className="diagnose-btn">
                                <span className="icon">🧠</span> DIAGNOSE
                            </button>

                            <hr className="divider" />

                            <p className="action-description">Review previously generated AI diagnosis reports for this patient.</p>
                            <button className="view-report-btn">
                                <span className="icon">📄</span> VIEW DIAGNOSIS
                            </button>
                        </div>
                    </aside>
                </div>

                <div className="action-footer">
                    <span className="back-btn" onClick={() => navigate('/dashboard')}>
                        ← Back to Dashboard
                    </span>
                </div>
            </main>
        </div>
    );
}

export default PatientFile;