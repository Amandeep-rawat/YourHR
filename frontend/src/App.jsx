import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Signup from './Components/Signup'; // Import your Signup component
import ThankYou from './Components/ThankYou';
const App = () => {
  return (
    <Router> {/* Wrap your components with Router */}
      <div className="bg-neutral-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Home page */}
          <Route path="/signup" element={<Signup />} /> {/* Signup page */}
          <Route path="/thank-you" element={<ThankYou />} /> {/* Add the Thank You route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
