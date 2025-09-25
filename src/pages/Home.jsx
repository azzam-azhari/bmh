// src/pages/Home.jsx
import Hero from './Hero';
import NewsSection from './NewsSection';
import BuktiNyata from './BuktiNyata';
import LastCard from './LastCard';
import JejakKebaikan from './JejakKebaikan';
import ProgramKami from './ProgramKami';
import KenapaHarusKami from './KenapaHarusKami';

export default function Home() {
  return (
    <div className="min-h-screen px-4 bg-slate-100 md:px-6 lg:px-12">
      {/* Hero Section */}
      <Hero />

      {/* News Section */}
      <div className="py-10">
        <NewsSection />
      </div>
      {/* BuktiNyata */}
      <div className="py-10">
        <BuktiNyata />
      </div>
      {/* LastCard */}
      <div className="py-10">
        <LastCard />
      </div>
      {/* KenapaHarusKami */}
      <div className="py-10">
        <KenapaHarusKami />
      </div>
      {/* JejakKebaikan */}
      <div className="py-10">
        <JejakKebaikan />
      </div>
      {/* ProgramKami */}
      <div className="py-10 mb-20">
        <ProgramKami />
      </div>
    </div>
  );
}
