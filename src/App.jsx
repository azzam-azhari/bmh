import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingMenu from './components/FloatingMenu';

import Home from './pages/Home';
import ProfilBmh from './pages/ProfilBmh';
import NewsSection from './pages/NewsSection';
import BuktiNyata from './pages/BuktiNyata';
import LastCard from './pages/LastCard';
import JejakKebaikan from './pages/JejakKebaikan';
import ProgramKami from './pages/ProgramKami';

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
          <Route path="/jejakKebaikan" element={<JejakKebaikan />} />
          <Route path="/programKami" element={<ProgramKami />} />
          <Route path="/profilBmh" element={<ProfilBmh />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Popup Whatsapp */}
        <WhatsAppButton />
        <FloatingMenu />
      </div>
    </Router>
  );
}

export default App;
