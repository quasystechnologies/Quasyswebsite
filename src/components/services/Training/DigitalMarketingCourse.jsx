import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaSearch, FaFacebook, FaInstagram } from 'react-icons/fa';
import './TrainingCourse.css';

function DigitalMarketingCourse() {
  const curriculum = [
    { week: 1, topic: "Digital Marketing Fundamentals", content: ["Marketing basics", "Digital landscape", "Strategy development"] },
    { week: 2, topic: "Search Engine Optimization (SEO)", content: ["Keyword research", "On-page optimization", "Technical SEO"] },
    { week: 3, topic: "Pay-Per-Click (PPC) Advertising", content: ["Google Ads", "Campaign setup", "Budget management"] },
    { week: 4, topic: "Social Media Marketing", content: ["Facebook marketing", "Instagram strategies", "Content creation"] },
    { week: 5, topic: "Content Marketing", content: ["Content strategy", "Blog writing", "Video marketing"] },
    { week: 6, topic: "Email Marketing", content: ["Email campaigns", "Automation", "List building"] },
    { week: 7, topic: "Analytics & Reporting", content: ["Google Analytics", "Performance tracking", "ROI measurement"] },
    { week: 8, topic: "Final Project", content: ["Digital marketing campaign", "Strategy presentation", "Results analysis"] }
  ];

  const features = [
    {
      icon: <FaChartLine />,
      title: "Data-Driven Approach",
      description: "Learn to use analytics to make informed marketing decisions"
    },
    {
      icon: <FaSearch />,
      title: "SEO Focus",
      description: "Master search engine optimization techniques for organic growth"
    },
    {
      icon: <FaFacebook />,
      title: "Social Media Mastery",
      description: "Comprehensive social media marketing strategies"
    },
    {
      icon: <FaInstagram />,
      title: "Modern Tools",
      description: "Use the latest digital marketing tools and platforms"
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
            <h1>Digital Marketing Course</h1>
            <p className="subtitle">
              Complete digital marketing training covering SEO, social media, PPC, and analytics to grow your online presence.
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
            <p>What makes our Digital Marketing course effective</p>
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
              <h3>SEO Mastery</h3>
              <p>Optimize websites for search engines and drive organic traffic</p>
            </div>
            <div className="outcome-item">
              <h3>PPC Advertising</h3>
              <p>Run effective paid advertising campaigns with optimal ROI</p>
            </div>
            <div className="outcome-item">
              <h3>Social Media Strategy</h3>
              <p>Develop and execute social media marketing campaigns</p>
            </div>
            <div className="outcome-item">
              <h3>Analytics Skills</h3>
              <p>Track, measure, and optimize marketing performance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketingCourse;