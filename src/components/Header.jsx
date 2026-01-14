import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoName from '../assets/LogoName.png';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let scrollTimeout;
      
    const handleScroll = () => {
      // Debounce scroll events
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Check if we're on the home page
        if (location.pathname === '/') {
          const heroSection = document.querySelector('.hero');
            
          if (heroSection) {
            // Get the hero section's offset from the top of the document
            const heroOffsetTop = heroSection.offsetTop;
            const heroHeight = heroSection.offsetHeight;
            // Calculate where the hero section ends, accounting for header height
            const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
            const triggerPoint = heroOffsetTop + heroHeight - headerHeight;
            const scrollTop = window.scrollY;
              
            // Trigger background change when scrolled past hero section (accounting for header height)
            setScrolledPastHero(scrollTop > triggerPoint);
          } else {
            // Fallback: trigger after scrolling 100px
            setScrolledPastHero(window.scrollY > 100);
          }
        } else {
          // For other pages, always show background
          setScrolledPastHero(true);
        }
      }, 10); // 10ms debounce
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [location.pathname]);

  const toggleMenu = () => {
    // Debug logging removed for production
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when location changes (navigation)
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);



  return (
    <header className={`header ${scrolledPastHero ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo-section">
          <Link to="/" onClick={closeMenu}>
            <img src={logoName} alt="QUASYS Logo" className="logo-image" />
            {/* <div className="logo-text">
              <h1 className="company-name">QUASYS</h1>
              <p className="company-tagline">TECHNOLOGIES</p>
            </div> */}
          </Link>
        </div>
        
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/about-us" 
              className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/industries" 
              className={`nav-link ${location.pathname === '/industries' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Industries
            </Link>
            {/* <Link 
              to="/portfolio" 
              className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/blog" 
              className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Blog
            </Link> */}
            <Link 
              to="/contact-us" 
              className={`nav-link contact-link ${location.pathname === '/contact-us' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            {/* <Link 
              to="/careers" 
              className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Careers
            </Link> */}
          </div>
        </nav>
      </div>
      <div className="header-divider"></div>
    </header>
  )
}

export default Header
