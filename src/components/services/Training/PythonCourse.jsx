import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPython, FaBook, FaLaptopCode, FaCertificate } from 'react-icons/fa';
import './TrainingCourse.css';

function PythonCourse() {
  const curriculum = [
    { week: 1, topic: "Introduction to Python", content: ["Python basics", "Variables & Data Types", "Operators"] },
    { week: 2, topic: "Control Structures", content: ["Conditional statements", "Loops", "Functions"] },
    { week: 3, topic: "Data Structures", content: ["Lists, Tuples, Dictionaries", "Sets", "String manipulation"] },
    { week: 4, topic: "Object-Oriented Programming", content: ["Classes & Objects", "Inheritance", "Polymorphism"] },
    { week: 5, topic: "File Handling & Modules", content: ["File operations", "Importing modules", "Exception handling"] },
    { week: 6, topic: "Web Development Basics", content: ["Flask framework", "HTML/CSS integration", "Database basics"] },
    { week: 7, topic: "Data Science Fundamentals", content: ["NumPy & Pandas", "Data visualization", "Basic statistics"] },
    { week: 8, topic: "Final Project", content: ["Real-world project", "Code review", "Presentation"] }
  ];

  const features = [
    {
      icon: <FaBook />,
      title: "Comprehensive Curriculum",
      description: "Complete Python programming course from basics to advanced concepts"
    },
    {
      icon: <FaLaptopCode />,
      title: "Hands-on Projects",
      description: "Real-world projects to build your portfolio and gain practical experience"
    },
    {
      icon: <FaCertificate />,
      title: "Certification",
      description: "Industry-recognized certificate upon course completion"
    },
    {
      icon: <FaPython />,
      title: "Latest Technologies",
      description: "Learn the latest Python frameworks and libraries used in industry"
    }
  ];

  return (
    <div className="training-course">
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Python Training Course</h1>
            <p className="subtitle">
              Master Python programming from basics to advanced concepts with hands-on projects and real-world applications.
            </p>
            <div className="course-details">
              <div className="detail-item">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">8 Weeks</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Level:</span>
                <span className="detail-value">Beginner to Advanced</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Format:</span>
                <span className="detail-value">Online/Offline</span>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/contact-us" className="btn btn-primary">
                Enroll Now
              </Link>
              <Link to="/services/training" className="btn btn-secondary">
                Back to Training
              </Link>
            </div>
          </motion.div>
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
            <h2>Course Features</h2>
            <p>What makes our Python course stand out</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="curriculum-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Course Curriculum</h2>
            <p>8-week comprehensive learning path</p>
          </motion.div>

          <div className="curriculum-grid">
            {curriculum.map((week, index) => (
              <motion.div
                key={index}
                className="curriculum-item"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="week-header">
                  <div className="week-number">Week {week.week}</div>
                  <h3>{week.topic}</h3>
                </div>
                <ul className="week-content">
                  {week.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="outcomes-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>What You'll Achieve</h2>
            <p>Skills and knowledge you'll gain</p>
          </motion.div>

          <div className="outcomes-grid">
            <div className="outcome-item">
              <h3>Python Fundamentals</h3>
              <p>Master Python syntax, data types, and programming concepts</p>
            </div>
            <div className="outcome-item">
              <h3>Web Development</h3>
              <p>Build web applications using Flask and modern web technologies</p>
            </div>
            <div className="outcome-item">
              <h3>Data Science</h3>
              <p>Work with data using NumPy, Pandas, and visualization libraries</p>
            </div>
            <div className="outcome-item">
              <h3>Project Portfolio</h3>
              <p>Complete projects to showcase your skills to potential employers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PythonCourse;