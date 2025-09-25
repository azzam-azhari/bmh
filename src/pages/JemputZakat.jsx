import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const JemputZakat = () => {
  const waNumber = '6285697779888';
  const waMessage = "Assalamu'alaikum, saya ingin menunaikan zakat/infak/sedekah. Mohon jemput zakat di alamat saya.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section className="flex flex-col min-h-screen mx-auto bg-linear-to-tr from-emerald-50 to-white font-poppins">
      {/* Hero */}
      <div className="grid items-center flex-1 min-h-screen py-20 mx-auto grid-row max-w-7xl lg:py-30 gap-x-12 gap-y-6 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-extrabold md:text-6xl text-emerald-800">
            <span className="text-yellow-500">Jemput</span> Zakat, Infak & Sedekah Anda
          </h2>
          <p className="max-w-xl mb-6 text-slate-600">
            Tidak perlu repot keluar rumah, cukup klik tombol di bawah ini dan tim <span className="font-semibold text-emerald-700">Baitul Maal Hidayatullah (BMH)</span> akan menjemput zakat Anda. Donasi sekecil apapun sangat berarti bagi
            saudara kita yang membutuhkan.
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-lg text-white transition rounded-full shadow font-base bg-emerald-600 hover:bg-emerald-700">
            <FaWhatsapp className="text-2xl" />
            Klik untuk Jemput Zakat
          </a>
        </div>
        <div className="flex items-end justify-center w-full overflow-hidden shadow-2xl h-111 bg-slate-200 rounded-4xl shadow-emerald-100">
          <img src="https://picsum.photos/400/300?random=3" alt="Jemput Zakat" className="object-cover w-full h-full transition-shadow shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default JemputZakat;
