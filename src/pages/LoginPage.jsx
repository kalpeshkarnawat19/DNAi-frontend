import React from "react";
import { useNavigate } from "react-router-dom"; // You must add this import
import "../css/loginpage.css";

function LoginPage() {
  const navigate = useNavigate(); // Initialize the navigate hook

  return (
    <>
      <nav className="branding">
        <div className="logo">DNAi</div>
        <div className="tagline">Diagnosis Assistant</div>
      </nav>
      <div className="page-wrapper">
        <div className="container">
          <div className="login-section">
            <h2>DOCTOR'S LOGIN</h2>
            <input type="text" className="input-box" placeholder="Doctor ID / License No." />
            <input type="password" className="input-box" placeholder="Password" />
            <button className="login-btn" onClick={() => navigate('/dashboard')}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;