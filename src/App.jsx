// import { useState } from 'react'
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      </main>
      {/* <Router>
        <Routes>
          <Route path="/" element={<ProjectGallery />} />
        </Routes>
      </Router> */}
    </div>
  )
}

export default App
