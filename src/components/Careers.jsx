import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaRupeeSign, FaClock, FaUserTie } from 'react-icons/fa';
import './Careers.css';

const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Madurai, Tamil Nadu",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹3-6 LPA",
    description: "We are looking for a skilled Frontend Developer to join our team and create amazing user experiences using React, Vue.js, and other modern frameworks.",
    requirements: [
      "2+ years of experience with React or Vue.js",
      "Strong knowledge of HTML, CSS, JavaScript",
      "Experience with modern build tools",
      "Familiarity with RESTful APIs"
    ]
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering",
    location: "Madurai, Tamil Nadu",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹4-8 LPA",
    description: "We need an experienced Backend Developer to build scalable server-side applications and APIs using Node.js, Python, or Java.",
    requirements: [
      "3+ years of backend development experience",
      "Proficiency in Node.js, Python, or Java",
      "Experience with databases (SQL & NoSQL)",
      "Knowledge of cloud platforms"
    ]
  },
  {
    id: 3,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Madurai, Tamil Nadu",
    type: "Full-time",
    experience: "3-6 years",
    salary: "₹5-10 LPA",
    description: "Seeking a Full Stack Developer who can work on both frontend and backend technologies to deliver complete solutions.",
    requirements: [
      "Experience with frontend and backend technologies",
      "MERN or MEAN stack expertise",
      "Understanding of Agile development",
      "Strong problem-solving skills"
    ]
  },
  {
    id: 4,
    title: "Python Developer",
    department: "Engineering",
    location: "Madurai, Tamil Nadu",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹3-7 LPA",
    description: "Join our team as a Python Developer to work on various projects including web applications, data analysis, and automation tools.",
    requirements: [
      "Proficiency in Python and its frameworks",
      "Experience with Django or Flask",
      "Knowledge of database design",
      "Familiarity with version control"
    ]
  }
];

function Careers() {
  return (
    <div className="careers">
      <Helmet>
        <title>Software Jobs in Madurai | IT Careers Tamil Nadu - QUASYS</title>
        <meta name="description" content="Explore career opportunities at QUASYS Technologies in Madurai, Tamil Nadu. Find software jobs, internships, and IT careers in web development, mobile apps, and more." />
        <meta name="keywords" content="Software Jobs in Madurai, IT Careers Tamil Nadu, Internship in Software Company" />
        <link rel="canonical" href="https://www.quasys.in/careers" />
      </Helmet>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Careers at QUASYS</h2>
          <p>Join our team of innovators and grow your career in technology</p>
        </motion.div>
        
        <div className="careers-intro">
          <p>At QUASYS Technologies, we believe in fostering talent and providing opportunities for growth. We offer competitive compensation, a collaborative work environment, and the chance to work on cutting-edge projects.</p>
        </div>
        
        <div className="jobs-section">
          <h3>Open Positions</h3>
          <div className="jobs-grid">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                className="job-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-department">{job.department}</span>
                </div>
                
                <div className="job-details">
                  <div className="job-detail">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail">
                    <FaClock className="detail-icon" />
                    <span>{job.type}</span>
                  </div>
                  <div className="job-detail">
                    <FaRupeeSign className="detail-icon" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="job-detail">
                    <FaUserTie className="detail-icon" />
                    <span>{job.experience} experience</span>
                  </div>
                </div>
                
                <p className="job-description">{job.description}</p>
                
                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="apply-btn">Apply Now</button>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="benefits-section">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Work With Us</h2>
            <p>Benefits and opportunities we offer</p>
          </motion.div>
          
          <div className="benefits-grid">
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FaBriefcase className="benefit-icon" />
              <h3>Competitive Salary</h3>
              <p>Attractive compensation packages with performance bonuses</p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaBriefcase className="benefit-icon" />
              <h3>Learning Opportunities</h3>
              <p>Continuous learning and skill development programs</p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaBriefcase className="benefit-icon" />
              <h3>Work-Life Balance</h3>
              <p>Flexible working hours and remote work options</p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FaBriefcase className="benefit-icon" />
              <h3>Growth Opportunities</h3>
              <p>Clear career progression paths and leadership opportunities</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;