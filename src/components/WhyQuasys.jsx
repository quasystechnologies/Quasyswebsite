import React from 'react';
import { motion } from 'framer-motion';
import './WhyQuasys.css';

function WhyQuasys() {
  const features = [
    {
      title: "Expert Team",
      description: "Our team of experienced developers and designers deliver cutting-edge solutions tailored to your business needs.",
      icon: "👥"
    },
    {
      title: "Quality Assurance",
      description: "We follow industry best practices and rigorous testing to ensure robust, reliable, and scalable applications.",
      icon: "✅"
    },
    {
      title: "Timely Delivery",
      description: "We respect deadlines and ensure on-time delivery without compromising on quality or functionality.",
      icon: "⏱️"
    },
    {
      title: "Ongoing Support",
      description: "Our support doesn't end after launch. We provide continuous maintenance and updates as needed.",
      icon: "🔄"
    }
  ];

  return (
    <section className="why-quasys">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why QUASYS?</h2>
          <p>Choose us for excellence, innovation, and proven results in technology solutions.</p>
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
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyQuasys;