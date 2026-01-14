import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaCameraRetro, FaGraduationCap, FaChartLine, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    title: "Web & Mobile App Development",
    description: "Comprehensive web and mobile application development services using modern technologies and frameworks.",
    icon: <FaLaptopCode className="service-icon" />,
    link: "/services/web-mobile-app-development",
    features: ["Website Development", "Mobile App (Android/iOS)", "Custom Software", "UI/UX Design"]
  },
  {
    title: "SaaS Product Development",
    description: "End-to-end SaaS product development from MVP to scaling, including cloud infrastructure and maintenance.",
    icon: <FaCloud className="service-icon" />,
    link: "/services/saas-product-development",
    features: ["MVP Development", "Cloud-based SaaS", "Product Scaling", "Maintenance & Support"]
  },
  {
    title: "Training & Courses",
    description: "Professional training programs in cutting-edge technologies with hands-on projects and placement assistance.",
    icon: <FaGraduationCap className="service-icon" />,
    link: "/services/training",
    features: ["Python Training", "Full Stack Development", "Digital Marketing", "Certification Programs"]
  },
  {
    title: "CCTV Surveillance Solutions",
    description: "Complete security solutions including installation, monitoring, and maintenance of CCTV systems.",
    icon: <FaCameraRetro className="service-icon" />,
    link: "/services/cctv-surveillance",
    features: ["Residential CCTV", "Commercial Surveillance", "Industrial Security", "AMC & Maintenance"]
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing services to enhance your online presence and drive business growth.",
    icon: <FaChartLine className="service-icon" />,
    link: "/services/digital-marketing",
    features: ["SEO/SEM", "Social Media Marketing", "Content Marketing", "Email Campaigns"]
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud solutions for businesses with security, reliability, and cost-effectiveness.",
    icon: <FaCloud className="service-icon" />,
    link: "/services/cloud-solutions",
    features: ["Cloud Migration", "Infrastructure Setup", "DevOps Solutions", "Monitoring & Support"]
  }
];

function Services() {
  return (
    <div className="services">
      <Helmet>
        <title>IT Services | Web & Mobile App Development Company in Madurai - QUASYS</title>
        <meta name="description" content="Explore QUASYS Technologies' comprehensive IT services including Web & Mobile App Development, SaaS Products, Training, and CCTV Solutions in Madurai, Tamil Nadu." />
        <meta name="keywords" content="Web Development Company in Madurai, Mobile App Development Company India, Custom Software Development, Business Website Development, UI UX Design Services India" />
        <link rel="canonical" href="https://www.quasys.in/services" />
      </Helmet>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
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
              <Link to={service.link} className="service-link">
                Learn More <FaArrowRight className="arrow-icon" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;