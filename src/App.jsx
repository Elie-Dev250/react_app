import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage'; 
import ContactPage from './pages/ContactPage';
 

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation links */}
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/service"></Link></li>
            <li><Link to="/contact"></Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/service" element={<ServicesPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> 

        </Routes>
      </div>
    </Router>
  );
};

export default App;
