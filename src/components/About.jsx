import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaHandshake, FaGlobeAsia } from 'react-icons/fa';
import './About.css';

function About() {
  const companyValues = [
    {
      icon: <FaLightbulb className="value-icon" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to deliver innovative solutions that set our clients apart in the market."
    },
    {
      icon: <FaRocket className="value-icon" />,
      title: "Excellence",
      description: "We are committed to delivering excellence in every project, ensuring the highest quality standards."
    },
    {
      icon: <FaHandshake className="value-icon" />,
      title: "Integrity",
      description: "We build lasting relationships based on trust, transparency, and mutual respect."
    },
    {
      icon: <FaGlobeAsia className="value-icon" />,
      title: "Global Vision",
      description: "We think globally while serving local communities, creating solutions with worldwide impact."
    }
  ];

  return (
    <div className="about">
      <Helmet>
        <title>About QUASYS Technologies | Top IT Company in Madurai</title>
        <meta name="description" content="About QUASYS Technologies - Leading IT Company in Madurai, Tamil Nadu. Learn about our vision, mission, and approach to delivering innovative technology solutions for businesses of all sizes." />
        <meta name="keywords" content="About QUASYS Technologies, Top IT Company in Madurai, Technology Startup in Tamil Nadu, Innovative Software Company India" />
        <link rel="canonical" href="https://www.quasys.in/about-us" />
      </Helmet>
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About QUASYS Technologies</h1>
            <p className="subtitle">
              Empowering businesses with innovative technology solutions since our inception, we've been at the forefront of digital transformation in Madurai and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container">
          <div className="content-grid">
            <motion.div
              className="content-card"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Vision</h2>
              <p>
                To be the leading technology partner that transforms businesses through innovative solutions, driving growth and success in the digital age.
              </p>
            </motion.div>
            
            <motion.div
              className="content-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Our Mission</h2>
              <p>
                To deliver exceptional technology solutions that empower businesses to achieve their goals, focusing on innovation, quality, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Core Values</h2>
            <p>Guiding principles that define our approach</p>
          </motion.div>

          <div className="values-grid">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="value-icon-container">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Approach</h2>
            <p>How we work with our clients</p>
          </motion.div>

          <div className="approach-grid">
            <motion.div
              className="approach-step"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="step-number">01</div>
              <h3>Understand</h3>
              <p>We take time to understand your business, goals, and challenges.</p>
            </motion.div>
            
            <motion.div
              className="approach-step"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="step-number">02</div>
              <h3>Plan</h3>
              <p>We create a tailored strategy aligned with your objectives.</p>
            </motion.div>
            
            <motion.div
              className="approach-step"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="step-number">03</div>
              <h3>Execute</h3>
              <p>We develop and implement solutions with precision and quality.</p>
            </motion.div>
            
            <motion.div
              className="approach-step"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="step-number">04</div>
              <h3>Support</h3>
              <p>We provide ongoing support and optimization for sustained success.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
