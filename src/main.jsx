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

import './styles.css'; 

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Add the Login link */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add the Login route */}
        </Routes>
      </div>
    </Router>
  </StrictMode>
);
