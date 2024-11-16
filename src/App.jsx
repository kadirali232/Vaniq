import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Plans from './pages/Plans/Plans';
import LogIn from './pages/LogIn/LogIn';
import Footer from './components/Footer/Footer';
import OpenAccount from './pages/OpenAccount/OpenAccount';
import AsSeenOn from './components/AsSeenOn/AsSeenOn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
    <Router>
      <Navbar />
        <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Plans" element={<Plans />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/OpenAccount" element={<OpenAccount />} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;
