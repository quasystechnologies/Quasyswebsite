import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaDesktop, FaPalette, FaTools } from 'react-icons/fa';
import './WebDevelopment.css';

function WebDevelopment() {
  const services = [
    {
      title: "Website Development",
      icon: <FaDesktop className="service-icon" />,
      description: "Custom website development tailored to your business needs with responsive design and optimal performance.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Fast Loading",
        "Modern Technologies"
      ]
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="service-icon" />,
      description: "Cross-platform mobile applications for iOS and Android with native-like performance.",
      features: [
        "iOS & Android",
        "Cross-Platform",
        "Native Performance",
        "App Store Deployment"
      ]
    },
    {
      title: "Custom Software",
      icon: <FaTools className="service-icon" />,
      description: "Bespoke software solutions designed to solve your specific business challenges.",
      features: [
        "Custom Solutions",
        "Business Process",
        "Integration",
        "Scalable Architecture"
      ]
    },
    {
      title: "UI/UX Design",
      icon: <FaPalette className="service-icon" />,
      description: "User-centered design that creates intuitive and engaging experiences for your customers.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing"
      ]
    }
  ];

  const technologies = [
    { name: "React", level: 95 },
    { name: "Vue.js", level: 90 },
    { name: "Angular", level: 85 },
    { name: "Node.js", level: 90 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 98 }
  ];

  return (
    <div className="web-development">
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Web & Mobile App Development</h1>
            <p className="subtitle">
              Creating innovative web and mobile applications that drive business growth and enhance user experiences.
            </p>
            <div className="cta-buttons">
              <Link to="/contact-us" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Development Services</h2>
            <p>Comprehensive solutions for your digital needs</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="technologies-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Technologies We Use</h2>
            <p>Powered by the latest and greatest in web development</p>
          </motion.div>

          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="technology-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{tech.name}</h3>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${tech.level}%` }}></div>
                </div>
                <span className="progress-text">{tech.level}%</span>
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
            <h2>Our Development Process</h2>
            <p>From concept to deployment, we follow best practices</p>
          </motion.div>

          <div className="process-steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>Understanding your requirements and business goals</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="step-number">02</div>
              <h3>Design</h3>
              <p>Creating intuitive user interfaces and experiences</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Building your solution with clean, efficient code</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="step-number">04</div>
              <h3>Testing</h3>
              <p>Rigorous testing to ensure quality and performance</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="step-number">05</div>
              <h3>Deployment</h3>
              <p>Launching your solution and providing ongoing support</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;