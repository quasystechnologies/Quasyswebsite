import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaDatabase, FaServer, FaReact } from 'react-icons/fa';
import './TrainingCourse.css';

function FullStackCourse() {
  const curriculum = [
    { week: 1, topic: "Frontend Fundamentals", content: ["HTML5 & CSS3", "JavaScript basics", "Responsive design"] },
    { week: 2, topic: "Advanced Frontend", content: ["React.js", "Component development", "State management"] },
    { week: 3, topic: "Backend Development", content: ["Node.js", "Express.js", "RESTful APIs"] },
    { week: 4, topic: "Database Management", content: ["MongoDB", "SQL fundamentals", "Data modeling"] },
    { week: 5, topic: "Authentication & Security", content: ["JWT", "OAuth", "Security best practices"] },
    { week: 6, topic: "Deployment & DevOps", content: ["Git & GitHub", "Heroku/AWS", "CI/CD pipelines"] },
    { week: 7, topic: "Advanced Topics", content: ["Testing", "Performance", "Optimization techniques"] },
    { week: 8, topic: "Final Project", content: ["Full-stack application", "Code review", "Presentation"] }
  ];

  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Coverage",
      description: "Complete coverage of both frontend and backend technologies"
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      description: "Learn to work with both SQL and NoSQL databases"
    },
    {
      icon: <FaServer />,
      title: "Deployment Ready",
      description: "Learn to deploy applications to production environments"
    },
    {
      icon: <FaReact />,
      title: "Modern Frameworks",
      description: "Work with the latest JavaScript frameworks and tools"
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
            <h1>Full Stack Development Course</h1>
            <p className="subtitle">
              Comprehensive full-stack development training covering both frontend and backend technologies with hands-on projects.
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
            <p>What makes our Full Stack course comprehensive</p>
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
              <h3>Frontend Mastery</h3>
              <p>Build responsive and interactive user interfaces with modern frameworks</p>
            </div>
            <div className="outcome-item">
              <h3>Backend Development</h3>
              <p>Create robust server-side applications and APIs</p>
            </div>
            <div className="outcome-item">
              <h3>Database Management</h3>
              <p>Design and work with both SQL and NoSQL databases</p>
            </div>
            <div className="outcome-item">
              <h3>Deployment Skills</h3>
              <p>Deploy and maintain applications in production environments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FullStackCourse;