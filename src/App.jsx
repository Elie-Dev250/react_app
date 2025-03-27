import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage'; 
import ContactPage from './pages/ContactPage';
import MorePage from './pages/MorePage';
import Samu from './pages/Samu';
import SamuelPage from './Pages/SamuelPage';
 

const App = () => {
  return (
    <Router>
      <div>
        
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li> 
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/more">More</Link></li>
            <li><Link to="/samu">Samu</Link></li>
            <li><Link to="/samuel">MRG</Link></li>
            
          </ul>
        </nav>

       
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/service" element={<ServicesPage />} /> 
          <Route path="/contact" element={<ContactPage />} /> 
           <Route path="/more" element={<MorePage/>}/>
             <Route path='/samu' element ={<Samu/>}/>
             <Route path='/samuel' element ={<SamuelPage/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
