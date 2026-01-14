import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Careers from './components/Careers';
import WebDevelopment from './components/services/WebDevelopment';
import SaasDevelopment from './components/services/SaasDevelopment';
import Training from './components/services/Training';
import CctvSolutions from './components/services/CctvSolutions';
import PythonCourse from './components/services/Training/PythonCourse';
import FullStackCourse from './components/services/Training/FullStackCourse';
import DigitalMarketingCourse from './components/services/Training/DigitalMarketingCourse';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds then hide
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-mobile-app-development" element={<WebDevelopment />} />
              <Route path="/services/saas-product-development" element={<SaasDevelopment />} />
              <Route path="/services/training" element={<Training />} />
              <Route path="/services/training/python-course" element={<PythonCourse />} />
              <Route path="/services/training/full-stack-development" element={<FullStackCourse />} />
              <Route path="/services/training/digital-marketing-course" element={<DigitalMarketingCourse />} />
              <Route path="/services/cctv-surveillance" element={<CctvSolutions />} />
              <Route path="/industries" element={<Industries />} />
              {/* <Route path="/portfolio" element={<Portfolio />} /> */}
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact-us" element={<Contact />} />
              {/* <Route path="/careers" element={<Careers />} /> */}
            </Routes>
          </div>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App
