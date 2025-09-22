import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingMenu from './components/FloatingMenu';

import Home from './pages/Home';
import NewsSection from './pages/NewsSection';
import BuktiNyata from './pages/BuktiNyata';
import LastCard from './pages/LastCard';
import JejakKebaikan from './pages/JejakKebaikan';
import ProgramKami from './pages/ProgramKami';
import ProfilBmh from './pages/ProfilBmh';
import JajaranManajemen from './pages/JajaranManajemen';
import KantorPerwakilan from './pages/KantorPerwakilan';
import KalkulatorZakat from './pages/KalkulatorZakat';
import MajalahMulia from './pages/MajalahMulia';
import HalamanArtikel from './pages/HalamanArtikel';
import DoubleSliderLogin from './pages/DoubleSliderLogin';
import UnderConstruction from './pages/UnderConstruction';

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
          <Route path="/program-kami" element={<ProgramKami />} />
          <Route path="/profil-bmh" element={<ProfilBmh />} />
          <Route path="/jajaran-manajemen" element={<JajaranManajemen />} />
          <Route path="/kantor-perwakilan" element={<KantorPerwakilan />} />
          <Route path="/kalkulator-zakat" element={<KalkulatorZakat />} />
          <Route path="/majalah-mulia" element={<MajalahMulia />} />
          <Route path="/artikel-detail" element={<HalamanArtikel />} />
          <Route path="/double-slider-login" element={<DoubleSliderLogin />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
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
