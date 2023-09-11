
import './App.css';

import React from 'react';
import Navbar from './components/NavBar';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import TrackingPage from './components/TrackingPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
      <Routes>
        <Route exact path="/" component={<Homepage/>} />
        <Route path="/tracking" component={<TrackingPage/>} />
        <Route path="/services" component={<ServicesPage/>} />
        <Route path="/contact" component={<ContactPage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
