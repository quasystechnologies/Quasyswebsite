import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import './ContactCta.css';

function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to Transform Your Business?</h2>
          <p>Get in touch with us today and let's discuss how we can help you achieve your goals with our technology solutions.</p>
          <div className="cta-buttons">
            <Link to="/contact-us" className="btn btn-primary">
              <FaPaperPlane className="btn-icon" /> Contact Us
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactCta;