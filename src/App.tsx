import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Portifolio from './pages/Portifolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Service';
import PricingSheet from './components/PricingSheet';


function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <PricingSheet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />      
    </div>
  );
}

export default App;
