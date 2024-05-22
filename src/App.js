import React from 'react';
import './App.scss';
import Navbar from "./components/Main/Navbar";
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Speaker from './pages/Speaker';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './pages/About';
import SpeakerDetail from './pages/SpeakerDetail';

function App() {
  return (
  <>
    <Router>
    <Navbar />
    <Routes>
      {/* Home Route (can be with or without exact path) */}
      <Route path="/" element={<Home1 />} />  
	    {/* Renders Home at exact path "/" */}
      {/*<Route exact path="/" element={<Home />} />*/}

      {/* Other Routes for different pages in your app */}
      <Route path="/Home2" element={<Home2 />} />

      {/* Other Routes for different pages in your app */}
      <Route path="/Speaker" element={<Speaker />} />

      <Route path="/About" element={<About />} />

      <Route path="/SpeakerDetail" element={<SpeakerDetail />} />

      {/* Catch-all Route for unmatched paths (optional) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </Router>
	</>
  );
}

export default App;