import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logoName from '../assets/LogoName.png';
import './Footer.css';

function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    // { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact-us' },
    // { name: 'Careers', path: '/careers' }
  ];

  const servicesLinks = [
    { name: 'Web Development', path: '/services/web-mobile-app-development' },
    { name: 'SaaS Products', path: '/services/saas-product-development' },
    { name: 'Training', path: '/services/training' },
    { name: 'CCTV Solutions', path: '/services/cctv-surveillance' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Cloud Solutions', path: '/services/cloud-solutions' }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, label: 'Address', value: 'Madurai, Tamil Nadu, India' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 82200 02337' },
    { icon: <FaEnvelope />, label: 'Email', value: 'info@quasys.in' },
    { icon: <FaClock />, label: 'Hours', value: 'Mon-Fri: 9AM - 6PM' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, label: 'Facebook', url: '#' },
    { icon: <FaTwitter />, label: 'Twitter', url: '#' },
    { icon: <FaInstagram />, label: 'Instagram', url: '#' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <img src={logoName} alt="QUASYS Logo" />
                {/* <h3 className="footer-company">QUASYS</h3>
                <p className="footer-tagline">TECHNOLOGIES</p> */}
              </div>
              <p className="footer-description">
                Empowering businesses with innovative technology solutions since our inception, we've been at the forefront of digital transformation in Madurai and beyond.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="social-link" aria-label={social.label}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <ul className="footer-links">
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact Info</h4>
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} QUASYS Technologies. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
