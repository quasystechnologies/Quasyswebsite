import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCameraRetro, FaHome, FaBuilding, FaIndustry, FaTools } from 'react-icons/fa';
import './CctvSolutions.css';

function CctvSolutions() {
  const solutions = [
    {
      title: "Residential CCTV",
      icon: <FaHome className="service-icon" />,
      description: "Comprehensive security solutions for homes and residential properties with 24/7 monitoring.",
      features: [
        "HD Cameras",
        "Night Vision",
        "Mobile Alerts",
        "Remote Access"
      ]
    },
    {
      title: "Commercial Surveillance",
      icon: <FaBuilding className="service-icon" />,
      description: "Advanced security systems for offices, retail stores, and commercial establishments.",
      features: [
        "Multi-Camera Setup",
        "Cloud Storage",
        "Professional Monitoring",
        "Custom Solutions"
      ]
    },
    {
      title: "Industrial Security",
      icon: <FaIndustry className="service-icon" />,
      description: "Robust security solutions for factories, warehouses, and industrial facilities.",
      features: [
        "Weather-Resistant",
        "Wide-Area Coverage",
        "Integration Capabilities",
        "24/7 Support"
      ]
    },
    {
      title: "AMC & Maintenance",
      icon: <FaTools className="service-icon" />,
      description: "Annual maintenance contracts and ongoing support for your surveillance systems.",
      features: [
        "Regular Maintenance",
        "System Updates",
        "Troubleshooting",
        "Warranty Support"
      ]
    }
  ];

  const features = [
    {
      title: "High Definition Video",
      description: "Crystal clear footage with advanced image processing technology."
    },
    {
      title: "Night Vision",
      description: "See clearly in complete darkness with infrared technology."
    },
    {
      title: "Mobile Access",
      description: "Monitor your property from anywhere using our mobile app."
    },
    {
      title: "Cloud Storage",
      description: "Secure cloud-based storage for all your recorded footage."
    }
  ];

  return (
    <div className="cctv-solutions">
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>CCTV Surveillance Solutions</h1>
            <p className="subtitle">
              Advanced security systems designed to protect your property and provide peace of mind with 24/7 monitoring.
            </p>
            <div className="cta-buttons">
              <Link to="/contact-us" className="btn btn-primary">
                Get Security System
              </Link>
              <Link to="/about-us" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Security Solutions</h2>
            <p>Comprehensive CCTV systems for every need</p>
          </motion.div>

          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="solution-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon-container">
                  {solution.icon}
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul className="service-features">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Key Features</h2>
            <p>Advanced technology for superior security</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Installation Process</h2>
            <p>Simple and efficient setup for your security system</p>
          </motion.div>

          <div className="process-steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="step-number">01</div>
              <h3>Site Survey</h3>
              <p>Assessing your security needs and camera placement</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="step-number">02</div>
              <h3>System Design</h3>
              <p>Designing the optimal security solution for your property</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="step-number">03</div>
              <h3>Installation</h3>
              <p>Professional installation by certified technicians</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="step-number">04</div>
              <h3>Testing</h3>
              <p>Thorough testing to ensure optimal performance</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="step-number">05</div>
              <h3>Training</h3>
              <p>Training on system operation and maintenance</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CctvSolutions;