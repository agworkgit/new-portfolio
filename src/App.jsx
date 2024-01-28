import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as bootstrap from 'bootstrap';
// import ProjectGallery from './pages/ProjectGallery'
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
      <Home />
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
