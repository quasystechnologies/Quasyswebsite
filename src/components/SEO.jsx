import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, children }) => {
  return (
    <Helmet>
      {/* Title */}
      <title>{title ? `${title} | QUASYS Technologies` : 'QUASYS Technologies - IT Solutions Provider'}</title>
      
      {/* Description */}
      <meta name="description" content={description || 'QUASYS Technologies - Leading IT Solutions Provider in Madurai. Specializing in Web & Mobile App Development, SaaS Products, Training, and CCTV Solutions.'} />
      
      {/* Keywords */}
      <meta name="keywords" content={keywords || 'IT Company in Madurai, Software Development Company in Tamil Nadu, Web and Mobile App Development India, SaaS Product Development Company, Digital Solutions Provider India, Python Training in Madurai, CCTV Installation Madurai'} />
      
      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Author */}
      <meta name="author" content="QUASYS Technologies" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | QUASYS Technologies` : 'QUASYS Technologies - IT Solutions Provider'} />
      <meta property="og:description" content={description || 'QUASYS Technologies - Leading IT Solutions Provider in Madurai. Specializing in Web & Mobile App Development, SaaS Products, Training, and CCTV Solutions.'} />
      <meta property="og:url" content={canonical || 'https://www.quasys.in'} />
      <meta property="og:site_name" content="QUASYS Technologies" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | QUASYS Technologies` : 'QUASYS Technologies - IT Solutions Provider'} />
      <meta name="twitter:description" content={description || 'QUASYS Technologies - Leading IT Solutions Provider in Madurai. Specializing in Web & Mobile App Development, SaaS Products, Training, and CCTV Solutions.'} />
      
      {/* Additional children props for custom meta tags */}
      {children}
    </Helmet>
  );
};

export default SEO;