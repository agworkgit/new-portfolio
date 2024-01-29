// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as bootstrap from 'bootstrap';
// import ProjectGallery from './pages/ProjectGallery'
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
  return (
    <>
        <Router basename="/new-portfolio/">
          <Header />
          <Routes>
            <Route index element={
              <>
                <Home />
                <About />
                <Skills />
                <Services />
                <Qualification />
                <Testimonials />
                {/* <Contact /> */}
              </>
            } />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/skills" element={<Skills />} /> */}
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/qualification" element={<Qualification />} /> */}
            {/* <Route path="/testimonials" element={<Testimonials />} /> */}

            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />

          </Routes>

          <BackToTop />
          <Footer />
        </Router>
    </>
  );
}

export default App
