import React from 'react';
import QuantumCircuit from './QuantumCircuit';
import logo from '../assets/Logo.png';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <QuantumCircuit className="splash-quantum-circuit" />
      <div className="logo-container">
        <img src={logo} alt="QUASYS Technologies" className="logo" />
        <div className="logo-lighting-effect"></div>
      </div>
    </div>
  );
};

export default SplashScreen;