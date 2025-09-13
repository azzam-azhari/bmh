// src/pages/Home.jsx
import Hero from './Hero';
import NewsSection from './NewsSection';
import BuktiNyata from './BuktiNyata';
import LastCard from './LastCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <Hero />

      {/* News Section */}
      <div className="mt-12">
        <NewsSection />
      </div>
      {/* News Section */}
      <div className="mt-12">
        <BuktiNyata />
      </div>
      {/* News Section */}
      <div className="mt-12">
        <LastCard />
      </div>
    </div>
  );
}
