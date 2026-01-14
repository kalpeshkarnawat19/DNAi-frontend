import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/loginpage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="page-wrapper">
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>

      <div className="container">
        <div className="login-section">
          <h2>DOCTOR'S LOGIN</h2>
          <input type="text" className="input-box" placeholder="Medical Email" />
          <input type="password" className="input-box" placeholder="Password" />

          <div className="button-group">
            <button className="login-btn" onClick={() => navigate('/dashboard')}>
              Login
            </button>
            <button className="login-btn" onClick={() => setShowModal(true)}>
              Register
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Enter Details</h3>
            <input type="text" className="input-box" placeholder="Full Name" />
            <input type="email" className="input-box" placeholder="Medical Email" />
            <input type="password" className="input-box" placeholder="Create Password" />
            <input type="text" className="input-box" placeholder="Speciality (e.g. Cardiology)" />

            <div className="modal-actions">
              <button className="login-btn" onClick={() => setShowModal(false)}>
                Register
              </button>
              <button className="subtle-cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;