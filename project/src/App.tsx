import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Listings from './components/Listings';
import Testimonials from './components/Testimonials';
import PaymentSection from './components/PaymentSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Add global animations
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
`;

function App() {
  // Update document title
  useEffect(() => {
    document.title = "TechServise - Find Your Perfect Computer Technicians";
    
    // Add animation styles to head
    const styleElement = document.createElement('style');
    styleElement.innerHTML = animationStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <Listings />
      <Testimonials />
      <PaymentSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;