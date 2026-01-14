import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      content: "QUASYS delivered an exceptional web application that transformed our business operations. Their attention to detail and technical expertise exceeded our expectations.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Marketing Director",
      company: "Global Retail Group",
      content: "The mobile app developed by QUASYS has significantly increased our customer engagement. Their team was professional, responsive, and delivered on time.",
      rating: 5
    },
    {
      name: "Suresh Nair",
      position: "CTO",
      company: "Innovate Manufacturing",
      content: "QUASYS helped us implement a complex SaaS solution that streamlined our processes. Their ongoing support has been invaluable to our success.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Client Testimonials</h2>
          <p>Hear what our clients say about our services</p>
        </motion.div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="position">{testimonial.position}</p>
                <p className="company">{testimonial.company}</p>
                <div className="rating">
                  {'★'.repeat(testimonial.rating)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;