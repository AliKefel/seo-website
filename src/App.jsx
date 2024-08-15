import { useState } from 'react'
import Navbar from './components/header/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer'
import Services from './pages/Services'
import WhoAreWe from './pages/WhoAreWe'
import CaseStudy from './pages/CaseStudy'


function App() {
  return (
    <>
      <div className='app-background'>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Route>
          <Route path="/who-are-we" element={<WhoAreWe />} />
          <Route path="/case-study" element={<CaseStudy />} />

        </Routes>
        <Footer />
      </div>
      </>
  );
}

function HomeLayout() {
  return (
    <>
      <Home />
      <About />
      <Services />
    </>
  );
}

export default App
