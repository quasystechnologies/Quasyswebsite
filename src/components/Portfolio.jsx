import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaCameraRetro } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "A full-featured e-commerce platform with payment integration and inventory management.",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "Retail Solutions Inc."
    },
    {
      id: 2,
      title: "Healthcare App",
      category: "mobile",
      description: "Mobile application for patient appointments and health records management.",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png",
      technologies: ["React Native", "Firebase", "Node.js"],
      client: "MediCare Group"
    },
    {
      id: 3,
      title: "SaaS Analytics Dashboard",
      category: "saas",
      description: "Real-time analytics dashboard for business intelligence and reporting.",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png",
      technologies: ["Vue.js", "Express", "PostgreSQL", "D3.js"],
      client: "Data Insights Ltd."
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "web",
      description: "Modern corporate website with CMS integration and SEO optimization.",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
      client: "Tech Innovations Corp."
    },
    {
      id: 5,
      title: "IoT Monitoring System",
      category: "saas",
      description: "Cloud-based system for monitoring IoT devices and collecting sensor data.",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png",
      technologies: ["React", "AWS IoT", "Python", "PostgreSQL"],
      client: "Smart Solutions Ltd."
    },
    {
      id: 6,
      title: "Fitness Tracker App",
      category: "mobile",
      description: "Mobile application for tracking fitness activities and health metrics.",
      image: "https://static.codia.ai/image/2025-12-21/33HNDbWE7Q.png",
      technologies: ["Flutter", "Firebase", "Health APIs"],
      client: "FitLife Inc."
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const categoryIcons = {
    all: <FaLaptopCode />,
    web: <FaLaptopCode />,
    mobile: <FaMobileAlt />,
    saas: <FaCloud />,
    cctv: <FaCameraRetro />
  };

  return (
    <section className="portfolio">
      <Helmet>
        <title>Software Development Projects | Mobile App Portfolio - QUASYS</title>
        <meta name="description" content="Explore QUASYS Technologies' portfolio of successful software development projects, mobile apps, and web solutions. View our case studies and client success stories." />
        <meta name="keywords" content="Software Development Projects, Mobile App Portfolio, Website Development Case Studies" />
        <link rel="canonical" href="https://www.quasys.in/portfolio" />
      </Helmet>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p>Discover our latest projects and success stories</p>
        </motion.div>
        
        <div className="filters">
          {['all', 'web', 'mobile', 'saas'].map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {categoryIcons[category]}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-client">Client: {project.client}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;