// src/pages/Home.jsx
import Hero from './Hero';
import NewsSection from './NewsSection';
import BuktiNyata from './BuktiNyata';
import LastCard from './LastCard';
import JejakKebaikan from './JejakKebaikan';
import ProgramKami from './ProgramKami';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
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
