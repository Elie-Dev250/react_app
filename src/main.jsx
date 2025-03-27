import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';  
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from './pages/LoginPage';  // Import the LoginPage component
import MorePage from "./pages/MorePage";
import Exit from "./pages/Exit";


import './styles.css'; 

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Add the Login link */}
            <li><Link to="/more">More</Link></li>
            <li><Link to ="/exit">Exit</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add the Login route */}
          <Route path="/more" element={<MorePage/>}/>
          <Route path="/exit" element={<Exit/>}/>
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
