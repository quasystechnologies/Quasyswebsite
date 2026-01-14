import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCountryCodeChange = (e) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value
    }));
  };
  
  const validatePhoneNumber = (phone, countryCode) => {
    // Remove all non-digit characters
    const phoneNumber = phone.replace(/\D/g, '');
    
    // Different validation patterns based on country code
    switch(countryCode) {
      case '+91': // India
        return /^([6-9]{1})([0-9]{9})$/.test(phoneNumber) && phoneNumber.length === 10;
      case '+1': // USA/Canada
        return /^([2-9][0-8][0-9])([2-9][0-9]{2})([0-9]{4})$/.test(phoneNumber) && phoneNumber.length === 10;
      case '+44': // UK
        return /^([1-9][0-9]{8,9}|[1-9][0-9]{9})$/.test(phoneNumber) && (phoneNumber.length === 9 || phoneNumber.length === 10);
      case '+61': // Australia
        return /^([2378]{1})([0-9]{8})$/.test(phoneNumber) && phoneNumber.length === 9;
      case '+49': // Germany
        return /^([1-9]{1})([0-9]{10,11})$/.test(phoneNumber);
      case '+33': // France
        return /^([67]{1})([0-9]{8})$/.test(phoneNumber) && phoneNumber.length === 9;
      case '+81': // Japan
        return /^([789]0|[1-9][1-9])([0-9]{8,9})$/.test(phoneNumber);
      case '+86': // China
        return /^([1][3-9])([0-9]{9})$/.test(phoneNumber) && phoneNumber.length === 11;
      default:
        // Default: at least 7 digits
        return phoneNumber.length >= 7;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate phone number if provided
    if (formData.phone && !validatePhoneNumber(formData.phone, formData.countryCode)) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
      return;
    }
    
    setFormStatus('submitting');
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.countryCode + formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'quasystechnologies@gmail.com'
      };
      
      // Initialize EmailJS with your public key
      // Note: You'll need to create an EmailJS account and configure your email service
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Using environment variable
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Using environment variable
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Using environment variable
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', countryCode: '+91', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };
  
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="contact-icon" />,
      title: "Our Location",
      content: "Madurai, Tamil Nadu, India",
      description: "Visit us at our office in the heart of Madurai for in-person consultations."
    },
    {
      icon: <FaPhone className="contact-icon" />,
      title: "Phone Number",
      content: "+91 99431 99431",
      description: "Call us during business hours for immediate assistance."
    },
    {
      icon: <FaEnvelope className="contact-icon" />,
      title: "Email Address",
      content: "info@quasys.in",
      description: "Send us an email and we'll respond as soon as possible."
    },
    {
      icon: <FaClock className="contact-icon" />,
      title: "Working Hours",
      content: "Mon-Fri: 9AM - 6PM",
      description: "We're open from Monday to Friday, ready to assist you."
    }
  ];

  return (
    <div className="contact">
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get in Touch</h1>
            <p className="subtitle">
              Have a project in mind? Reach out to us and let's discuss how we can help bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels</p>
          </motion.div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="contact-icon-container">
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                <p className="contact-content">{info.content}</p>
                <p className="contact-description">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
          </motion.div>

          <motion.div
            className="form-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Mobile Number</label>
                  <div className="phone-input-container">
                    <select name="countryCode" className="country-code-select" value={formData.countryCode} onChange={handleCountryCodeChange}>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+86">🇨🇳 +86</option>
                    </select>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-input phone-number-input" 
                      placeholder="Enter your mobile number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-input" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-textarea" 
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="form-message success">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="form-message error">
                  There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
