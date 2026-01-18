import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "../css/patientfile.css";

function PatientFile() {
    const location = useLocation();
    const navigate = useNavigate();

    // Track which row is expanded (null means none)
    const [expandedRow, setExpandedRow] = useState(null);

    // Retrieve data from UpdateRecords or use Dummy Data for the table
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
                <h1 className="page-title">PATIENT CLINICAL HISTORY</h1>

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
                                        {/* Main Row */}
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

                                        {/* Expandable Body Row */}
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

                <div className="action-footer">
                    <button className="back-btn" onClick={() => navigate('/dashboard')}>
                        ← Back to Dashboard
                    </button>
                </div>
            </main>
        </div>
    );
}

export default PatientFile;