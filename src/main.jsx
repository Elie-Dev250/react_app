import React from "react";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';  
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from './pages/LoginPage';  
import MorePage from "./pages/MorePage";
import Exit from "./pages/Exit";


import './styles.css'; 
import App from "./App";

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
