import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import FloatingMenu from './components/FloatingMenu';

import Home from './pages/Home';
import NewsSection from './pages/NewsSection';
import BuktiNyata from './pages/BuktiNyata';
import LastCard from './pages/LastCard';
import JejakKebaikan from './pages/JejakKebaikan';
import ProgramKami from './pages/ProgramKami';
import KenapaHarusKami from './pages/KenapaHarusKami';
import ProfilBmh from './pages/ProfilBmh';
import JajaranManajemen from './pages/JajaranManajemen';
import KantorPerwakilan from './pages/KantorPerwakilan';
import KalkulatorZakat from './pages/KalkulatorZakat';
import MajalahMulia from './pages/MajalahMulia';
import RisetPengembangan from './pages/RisetPengembangan';
import RisetDetail from './pages/RisetDetail';
import HalamanArtikel from './pages/HalamanArtikel';
import DoubleSliderLogin from './pages/DoubleSliderLogin';
import UnderConstruction from './pages/UnderConstruction';
import DonasiPage from './pages/DonasiPage';
import JemputZakat from './pages/JemputZakat';
import LaporanKeuangan from './pages/LaporanKeuangan';

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Nav */}
        <Nav />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsSection" element={<NewsSection />} />
          <Route path="/buktiNyata" element={<BuktiNyata />} />
          <Route path="/lastCard" element={<LastCard />} />
          <Route path="/jejakKebaikan" element={<JejakKebaikan />} />
          <Route path="/program-kami" element={<ProgramKami />} />
          <Route path="/kenapa-harus-kami" element={<KenapaHarusKami />} />
          <Route path="/profil-bmh" element={<ProfilBmh />} />
          <Route path="/jajaran-manajemen" element={<JajaranManajemen />} />
          <Route path="/kantor-perwakilan" element={<KantorPerwakilan />} />
          <Route path="/kalkulator-zakat" element={<KalkulatorZakat />} />
          <Route path="/majalah-mulia" element={<MajalahMulia />} />
          <Route path="/riset-pengembangan" element={<RisetPengembangan />} />
          <Route path="/riset-detail" element={<RisetDetail />} />
          <Route path="/artikel-detail" element={<HalamanArtikel />} />
          <Route path="/double-slider-login" element={<DoubleSliderLogin />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/donasi-bmh" element={<DonasiPage />} />
          <Route path="/jemput-zakat" element={<JemputZakat />} />
          <Route path="/laporan-keuangan" element={<LaporanKeuangan />} />
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
