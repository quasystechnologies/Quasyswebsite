import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import QuantumCircuit from './QuantumCircuit';
import webDevImg from '../assets/HeroImages/Webdevelopment.png';
import mobileAppImg from '../assets/HeroImages/MobileApps.png';
import saasImg from '../assets/HeroImages/SaaSProducts.png';
import cctvImg from '../assets/HeroImages/CCTV.png';
import digitalMktImg from '../assets/HeroImages/Digitalmarketing.png';
import './Hero.css';

function Hero() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and applications",
      image: webDevImg,
      highlight: "Transforming Ideas Into Digital Reality"
    },
    {
      title: "Digital Marketing",
      description: "Strategic online marketing solutions",
      image: digitalMktImg,
      highlight: "Digital Growth Strategies"
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications",
      image: mobileAppImg,
      highlight: "Innovative Mobile Solutions"
    },
    {
      title: "SaaS Products",
      description: "Scalable cloud-based solutions",
      image: saasImg,
      highlight: "Cloud Excellence"
    },
    {
      title: "CCTV Solutions",
      description: "Security and surveillance systems",
      image: cctvImg,
      highlight: "Advanced Security Systems"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + services.length) % services.length);
  };

  return (
    <section className="hero">
      <QuantumCircuit />
      <div className="hero-slide-background">
        <img 
          src={services[currentSlide].image} 
          alt={services[currentSlide].title}
          className="slide-background-image"
        />
        <div className="background-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            key={currentSlide}
          >
            <h1 className="hero-title">
              <span className="highlight">{services[currentSlide].highlight}</span>
            </h1>
            <h2 className="hero-service-title">{services[currentSlide].title}</h2>
            <p className="hero-subtitle">
              {services[currentSlide].description}
            </p>
            
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Learn More <FaArrowRight className="btn-icon" />
              </Link>
              <Link to="/contact-us" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="carousel-controls">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      
      <div className="carousel-indicators">
        {services.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
