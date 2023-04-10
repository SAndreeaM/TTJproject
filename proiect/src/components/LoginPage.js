import React from 'react';
import './LoginPage.css';
import Extraction from '../img/extraction.mp4';

function LoginPage() {
  return (
    <div className='login-container'>
      <video src={Extraction} autoPlay loop muted />
      <div className='login-box'>
        <h1>login</h1>
        <p>Choose your fighter!</p>
      </div>
    </div>
  );
}

export default LoginPage;