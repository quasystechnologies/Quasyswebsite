import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import WhyQuasys from './WhyQuasys';
import Industries from './Industries';
import Technologies from './Technologies';
import Testimonials from './Testimonials';
import ContactCta from './ContactCta';

function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>IT Company in Madurai | Software Development Company in Tamil Nadu - QUASYS Technologies</title>
        <meta name="description" content="QUASYS Technologies - Leading IT Solutions Provider in Madurai. Specializing in Web & Mobile App Development, SaaS Products, Training, and CCTV Solutions. Best software development company in Tamil Nadu." />
        <meta name="keywords" content="IT Company in Madurai, Software Development Company in Tamil Nadu, Web and Mobile App Development India, SaaS Product Development Company, Digital Solutions Provider India, Python Training in Madurai, CCTV Installation Madurai" />
        <link rel="canonical" href="https://www.quasys.in/" />
      </Helmet>
      <Hero />
      <Services />
      <WhyQuasys />
      <Industries />
      <Technologies />
      <Testimonials />
      <ContactCta />
    </div>
  );
}

export default Home;