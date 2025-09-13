import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import ProfilBmh from './pages/ProfilBmh';
import NewsSection from './pages/NewsSection';
import BuktiNyata from './pages/BuktiNyata';
import LastCard from './pages/LastCard';

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Navbar */}
        <Navbar />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsSection" element={<NewsSection />} />
          <Route path="/buktiNyata" element={<BuktiNyata />} />
          <Route path="/lastCard" element={<LastCard />} />
          <Route path="/profilBmh" element={<ProfilBmh />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Popup Whatsapp */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
