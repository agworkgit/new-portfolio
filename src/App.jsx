// import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import './App.css';

export const ThemeContext = createContext('dark');

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
  const storedTheme = localStorage.getItem('theme') || 'dark'; // Adjust the default value if needed
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Router>
          <Header />
          <Routes>
            <Route index path="/" element={
              <>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Testimonials />
                <Footer />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>

          <BackToTop />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
