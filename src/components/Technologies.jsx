import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAngular, FaAws, FaJava, FaPython } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTypescript, SiFlutter, SiKotlin, SiSwift } from 'react-icons/si';
import './Technologies.css';

function Technologies() {
  const techCategories = [
    {
      name: "Frontend",
      icon: <FaReact className="tech-icon react-icon" />,
      technologies: ["React", "Angular", "Vue.js", "HTML5/CSS3"]
    },
    {
      name: "Backend",
      icon: <FaNodeJs className="tech-icon node-icon" />,
      technologies: ["Node.js", "Express", "Python", "Java"]
    },
    {
      name: "Mobile",
      icon: <SiFlutter className="tech-icon flutter-icon" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      name: "Database",
      icon: <SiMongodb className="tech-icon db-icon" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
    },
    {
      name: "Cloud",
      icon: <FaAws className="tech-icon cloud-icon" />,
      technologies: ["AWS", "Azure", "Google Cloud", "Heroku"]
    },
    {
      name: "DevOps",
      icon: <SiTypescript className="tech-icon devops-icon" />,
      technologies: ["Docker", "Kubernetes", "CI/CD", "Jenkins"]
    }
  ];

  return (
    <section className="technologies">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Technologies Stack</h2>
          <p>Powered by the latest and greatest in technology</p>
        </motion.div>
        
        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="tech-category"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="tech-icon-container">
                {category.icon}
              </div>
              <h3>{category.name}</h3>
              <ul className="tech-list">
                {category.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;