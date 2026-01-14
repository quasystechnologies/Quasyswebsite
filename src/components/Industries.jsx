import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaHospital, FaShoppingCart, FaIndustry, FaRocket, FaBuilding } from 'react-icons/fa';
import './Industries.css';

const industries = [
  {
    title: "Education",
    description: "Custom learning management systems, student portals, and educational technology solutions.",
    icon: <FaGraduationCap className="industry-icon" />,
    solutions: ["LMS Development", "Student Portals", "E-Learning Platforms"]
  },
  {
    title: "Healthcare",
    description: "Secure patient management systems, telemedicine platforms, and health information systems.",
    icon: <FaHospital className="industry-icon" />,
    solutions: ["EMR Systems", "Telemedicine", "Patient Portals"]
  },
  {
    title: "Retail",
    description: "E-commerce platforms, inventory management, and customer engagement solutions.",
    icon: <FaShoppingCart className="industry-icon" />,
    solutions: ["E-commerce", "POS Systems", "Inventory Management"]
  },
  {
    title: "Manufacturing",
    description: "ERP systems, supply chain management, and automation solutions.",
    icon: <FaIndustry className="industry-icon" />,
    solutions: ["ERP Solutions", "Supply Chain", "Automation"]
  },
  {
    title: "Startups",
    description: "MVP development, scaling solutions, and technology consulting.",
    icon: <FaRocket className="industry-icon" />,
    solutions: ["MVP Development", "Technology Consulting", "Scaling Solutions"]
  },
  {
    title: "Real Estate",
    description: "Property management systems, CRM solutions, and virtual tour platforms.",
    icon: <FaBuilding className="industry-icon" />,
    solutions: ["Property Management", "CRM Solutions", "Virtual Tours"]
  }
];

function Industries() {
  return (
    <div className="industries">
      <Helmet>
        <title>Industries We Serve | IT Solutions for Business Sectors - QUASYS</title>
        <meta name="description" content="Explore the industries QUASYS Technologies serves with custom IT solutions including Education, Healthcare, Retail, Manufacturing, Startups, and Real Estate in Tamil Nadu and India." />
        <meta name="keywords" content="IT Solutions for Businesses, Software Solutions for Industries, Enterprise Software Development" />
        <link rel="canonical" href="https://www.quasys.in/industries" />
      </Helmet>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Industries We Serve</h2>
          <p>Specialized solutions for diverse business sectors</p>
        </motion.div>
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industry-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="industry-icon-container">
                {industry.icon}
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <ul className="industry-solutions">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx}>{solution}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;