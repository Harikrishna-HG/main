import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import BookNow from "./Components/BookNow";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card";
import About from "./Components/About";
import Accordion from "./Components/Accordion";
import Contact from "./Components/Contact";
import Page from "./Components/Page";
import MapIframe from "./Components/MapIframe";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import BusCard from "./Components/BusCard"
import Team from "./Components/Team";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className={isDarkMode ? "bg-purple-700 text-white" : "bg-white text-purple-700"}>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />



        <Routes>
          <Route path="/" element={<><HeroSection isDarkMode={isDarkMode} /><Card isDarkMode={isDarkMode} /><About isDarkMode={isDarkMode} /><Accordion isDarkMode={isDarkMode} /><Contact isDarkMode={isDarkMode} /></>} />
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
          <Route path="/loginout" element={<logout isDarkMode={isDarkMode} />} />
          <Route path="/booknow" element={<BookNow />} />
          <Route path="/about" element={<><Card isDarkMode={isDarkMode} element='pt-20' /><About isDarkMode={isDarkMode} /></>} />
          <Route path="/accordion" element={<Accordion isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<><Contact isDarkMode={isDarkMode} /><Team isDarkMode={isDarkMode}/></>} />
          <Route path="/pages" element={<Page />} />
          <Route path="/signup" element={<Signup isDarkMode={isDarkMode} />} />
          
          <Route path="/faq" element={<Accordion isDarkMode={isDarkMode}/>} />
          <Route path="/services" element={<><About isDarkMode={isDarkMode}/> <Accordion isDarkMode={isDarkMode}/></>} />
          <Route path="/bus" element={<><BusCard /></>} />
          <Route path="/team" element={<><Team  isDarkMode={isDarkMode} /></>} />
          
          
        </Routes>

        <MapIframe />
        <Footer isDarkMode={isDarkMode} />
      </div>
  
    </BrowserRouter>
  );
};

export default App;
