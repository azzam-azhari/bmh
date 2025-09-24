import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const JemputZakat = () => {
  const waNumber = '6285697779888';
  const waMessage = "Assalamu'alaikum, saya ingin menunaikan zakat/infak/sedekah. Mohon jemput zakat di alamat saya.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="flex flex-col min-h-screen bg-emerald-50 font-poppins">
      {/* Hero */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 text-center">
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl text-emerald-800">Jemput Zakat, Infak & Sedekah Anda</h2>
        <p className="max-w-xl mb-6 text-slate-600">
          Tidak perlu repot keluar rumah, cukup klik tombol di bawah ini dan tim <span className="font-semibold text-emerald-700">Baitul Maal Hidayatullah (BMH)</span> akan menjemput zakat Anda. Donasi sekecil apapun sangat berarti bagi
          saudara kita yang membutuhkan.
        </p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white transition rounded-full shadow bg-emerald-600 hover:bg-emerald-700">
          <FaWhatsapp className="text-2xl" />
          Klik untuk Jemput Zakat
        </a>
      </div>
    </section>
  );
};

export default JemputZakat;
