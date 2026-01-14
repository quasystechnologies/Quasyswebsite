import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaLaptopCode, FaChartBar, FaUsers } from 'react-icons/fa';
import './Training.css';

function Training() {
  const trainingPrograms = [
    {
      title: "Python Training",
      icon: <FaLaptopCode className="service-icon" />,
      description: "Comprehensive Python training covering fundamentals to advanced concepts with hands-on projects.",
      link: "/services/training/python-course",
      features: [
        "Python Fundamentals",
        "Web Development",
        "Data Science",
        "Machine Learning"
      ]
    },
    {
      title: "Full Stack Development",
      icon: <FaLaptopCode className="service-icon" />,
      description: "Complete full stack development training covering both frontend and backend technologies.",
      link: "/services/training/full-stack-development",
      features: [
        "Frontend (React, Vue)",
        "Backend (Node.js, Python)",
        "Database Management",
        "Project Deployment"
      ]
    },
    {
      title: "Digital Marketing",
      icon: <FaChartBar className="service-icon" />,
      description: "Strategic digital marketing training covering SEO, SEM, social media, and content marketing.",
      link: "/services/training/digital-marketing-course",
      features: [
        "SEO/SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting"
      ]
    },
    {
      title: "Corporate Training",
      icon: <FaUsers className="service-icon" />,
      description: "Customized training programs for organizations to upskill their workforce.",
      link: "/contact-us",
      features: [
        "Custom Curriculum",
        "On-site Training",
        "Certification Programs",
        "Ongoing Support"
      ]
    }
  ];

  const benefits = [
    {
      title: "Industry Expert Trainers",
      description: "Learn from experienced professionals with real-world industry experience."
    },
    {
      title: "Hands-on Projects",
      description: "Practical projects that provide real-world experience and portfolio material."
    },
    {
      title: "Job Placement Assistance",
      description: "Career guidance and placement support to help you land your dream job."
    },
    {
      title: "Flexible Learning Options",
      description: "Choose from online, offline, or hybrid learning modes that suit your schedule."
    }
  ];

  return (
    <div className="training">
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Training & Courses</h1>
            <p className="subtitle">
              Professional training programs designed to enhance your skills and advance your career in technology.
            </p>
            <div className="cta-buttons">
              <Link to="/contact-us" className="btn btn-primary">
                Enroll Now
              </Link>
              <Link to="/about-us" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="programs-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Training Programs</h2>
            <p>Comprehensive courses designed for your career growth</p>
          </motion.div>

          <div className="programs-grid">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="program-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-icon-container">
                  {program.icon}
                </div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <ul className="service-features">
                  {program.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to={program.link} className="service-link">
                  Learn More <span className="arrow">→</span>
                </Link>
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
            <h2>Why Choose Our Training</h2>
            <p>Advantages that set us apart from the competition</p>
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

      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="stat-item">
              <h3>500+</h3>
              <p>Students Trained</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Industry Projects</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Training;