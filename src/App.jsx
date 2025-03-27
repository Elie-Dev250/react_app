import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage'; 
import ContactPage from './pages/ContactPage';
import MorePage from './pages/MorePage';
 

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
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/more">More</Link></li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/service" element={<ServicesPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> 
           <Route path="/more" element={<MorePage/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
