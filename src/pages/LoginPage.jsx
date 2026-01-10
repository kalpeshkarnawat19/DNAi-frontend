import React from "react";
import "../css/loginpage.css";

function LoginPage(){
return(
  <>
    <nav className="branding">
      <div className="logo">DNAi</div>
      <div className="tagline">Diagnosis Assistant</div>
    </nav>
    <div className="page-wrapper">  
      <div className="container">

        <div className="login-section">
          <h2>EXISTING PATIENTS</h2>
            <input type="text" className="input-box" placeholder="Patient ID / Reference ID" />
            <button className="login-btn">Login</button>
        </div>

        <div className="register-section">
          <h2>NEW PATIENTS</h2>
            <p className="description">Register a new patient to begin diagnosis</p>
            <button className="register-btn">Register New Patient</button>
        </div>
      </div>
    </div>  
  </>
);
}

export default LoginPage