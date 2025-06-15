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
import CrockChat from './components/CrockChat/CrockChat';


function App() {
  return (
    <div className="h-auto bg-gradient-to-br from-gray-900 to-purple-900 ">
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
      <CrockChat 
        apiKey="GYfEQwkKayDBiRrOiFuWUXEORd0tE61t" 
        widgetId="your-widget-id" 
        botName="Crock AI Assistant" 
        theme="auto" 
        debug={true} 
        onOpen={() => console.log('Chat opened')} 
        onClose={() => console.log('Chat closed')} 
        onMessage={(message) => console.log('Message received:', message)} 
        onLeadSubmit={(leadInfo) => console.log('Lead submitted:', leadInfo)} 
      />
    </div>
  );
}

export default App;
