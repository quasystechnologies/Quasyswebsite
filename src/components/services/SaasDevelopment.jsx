import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCloud, FaRocket, FaChartLine, FaSyncAlt } from 'react-icons/fa';
import './SaasDevelopment.css';

function SaasDevelopment() {
  const services = [
    {
      title: "MVP Development",
      icon: <FaRocket className="service-icon" />,
      description: "Rapid development of minimum viable products to validate your business ideas in the market.",
      features: [
        "Fast Prototyping",
        "Market Validation",
        "Cost Effective",
        "Scalable Architecture"
      ]
    },
    {
      title: "Cloud-based SaaS",
      icon: <FaCloud className="service-icon" />,
      description: "Secure, scalable cloud solutions that grow with your business needs.",
      features: [
        "Cloud Infrastructure",
        "Auto Scaling",
        "High Availability",
        "Security First"
      ]
    },
    {
      title: "Product Scaling",
      icon: <FaChartLine className="service-icon" />,
      description: "Scale your SaaS product to handle increased users and data while maintaining performance.",
      features: [
        "Performance Optimization",
        "Database Scaling",
        "Load Balancing",
        "Monitoring"
      ]
    },
    {
      title: "Maintenance & Support",
      icon: <FaSyncAlt className="service-icon" />,
      description: "Ongoing support and maintenance to keep your SaaS product running smoothly.",
      features: [
        "24/7 Monitoring",
        "Bug Fixes",
        "Feature Updates",
        "Performance Tuning"
      ]
    }
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce infrastructure costs with scalable cloud solutions that grow with your usage."
    },
    {
      title: "Global Reach",
      description: "Deploy your SaaS product globally with minimal infrastructure investment."
    },
    {
      title: "Automatic Updates",
      description: "Keep your software up-to-date with seamless deployment of new features."
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance with industry standards."
    }
  ];

  return (
    <div className="saas-development">
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>SaaS Product Development</h1>
            <p className="subtitle">
              Building scalable, cloud-based software solutions that transform businesses and create sustainable revenue streams.
            </p>
            <div className="cta-buttons">
              <Link to="/contact-us" className="btn btn-primary">
                Start Your SaaS
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View SaaS Projects
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
            <h2>SaaS Development Services</h2>
            <p>Complete solutions for your SaaS product journey</p>
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

      <section className="benefits-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Benefits of SaaS</h2>
            <p>Why choose SaaS for your business solution</p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
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
            <h2>SaaS Development Process</h2>
            <p>From concept to launch, we build successful SaaS products</p>
          </motion.div>

          <div className="process-steps">
            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="step-number">01</div>
              <h3>Idea Validation</h3>
              <p>Validating your SaaS concept and market demand</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="step-number">02</div>
              <h3>Architecture Design</h3>
              <p>Designing scalable and secure cloud architecture</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Building your SaaS product with modern technologies</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="step-number">04</div>
              <h3>Testing & QA</h3>
              <p>Rigorous testing for performance and security</p>
            </motion.div>

            <motion.div
              className="step"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="step-number">05</div>
              <h3>Deployment</h3>
              <p>Launching and scaling your SaaS product</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SaasDevelopment;