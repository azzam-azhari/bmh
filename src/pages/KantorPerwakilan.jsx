import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

export default function KantorPerwakilan() {
  const kantorPusat = [
    {
      nama: 'BMH Jakarta',
      gambar: 'https://picsum.photos/400/300?random=1',
      alamat: 'Samali Residence Jl. H. Samali No. 71 B, Kel. Pejaten Barat, Kec. Pasar Minggu, Jakarta Selatan – DKI Jakarta 12510.',
      telp: '18002428478',
      email: 'csjakarta@bmh.or.id',
    },
    {
      nama: 'BMH Depok',
      gambar: 'https://picsum.photos/400/300?random=2',
      alamat: 'Ruko Verbena Blok A No. 20, Jl. Boulevard, Grand Depok City, Kel. Tirtajaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16412.',
      telp: '18002428478',
      email: 'csdepok@bmh.or.id',
    },
    {
      nama: 'BMH Citayam',
      gambar: 'https://picsum.photos/400/300?random=3',
      alamat: 'Samali Residence Jl. H. Samali No. 71 B, Kel. Pejaten Barat, Kec. Pasar Minggu, Jakarta Selatan – DKI Jakarta 12510.',
      telp: '18002428478',
      email: 'cscitayam@bmh.or.id',
    },
  ];
  return (
    <section className="container py-20 mx-auto font-poppins bg-slate-100 lg:py-30 max-w-7xl">
      {/* Text Content */}
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Kantor Perwakilan BMH</h2>
        <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>
        <h4 className="leading-relaxed text-justify  text-xl font-semibold text-[#095046]">Tunaikan Zakat Anda di Laznas BMH — Amanah, Transparan, dan Profesional Berbasis Dakwah</h4>
        <h4 className="text-xl font-semibold leading-relaxed text-justify text-gray-700">Kantor Pusat BMH</h4>
        <p className="leading-relaxed text-justify text-gray-700">
          Baitul Maal Hidayatullah (BMH) <br /> Jl. Raya Pasar Minggu No. 21 H, Kalibata, Jakarta Selatan 12740
        </p>
        <div className="flex flex-col gap-2 mt-2 w-70">
          <a
            href={`https://wa.me/${kantorPusat[0].telp}?text=Halo`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition rounded-xl bg-slate-200 hover:bg-slate-300"
          >
            WhatsApp: {kantorPusat[0].telp}
          </a>
          <a href={`mailto:${kantorPusat[0].email}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition rounded-xl bg-slate-200 hover:bg-slate-300">
            Email: {kantorPusat[0].email}
          </a>
        </div>
        <h4 className="leading-relaxed text-justify  text-xl font-semibold text-[#095046] mt-4">Daftar Kantor Perwakilan & Layanan ZIS BMH se-Indonesia</h4>
        <h4 className="mt-1 text-xl font-light leading-relaxed text-justify text-gray-700">Temukan kantor BMH terdekat untuk menunaikan zakat, infak, dan sedekah Anda.</h4>
      </div>

      {/* Grid Perwakilan */}
      <section className="py-12 mx-auto">
        {/* Pusat */}
        <h2 className="mb-10 text-3xl font-bold border-yellow-500 border-b-7 text-emerald-900 w-fit">BMH Pusat</h2>

        <div className="grid grid-cols-1 gap-6 mb-15 md:grid-cols-3">
          {kantorPusat.map((item, idx) => (
            <div key={idx} className="flex flex-col overflow-hidden transition border-[#39BA87] shadow border-1 rounded-2xl hover:shadow-md">
              {/* Gambar */}
              <img src={item.gambar} alt={item.nama} className="object-cover w-full h-48" />

              {/* Konten */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="mb-2 text-xl font-extrabold text-emerald-700">{item.nama}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-gray-700">{item.alamat}</p>
                  <p className="text-sm text-gray-700">Tlp: {item.telp}</p>
                  {item.email && <p className="text-sm text-gray-700">Email: {item.email}</p>}
                </div>
                <a href={`https://wa.me/${item.telp}?text=Halo`} target="_blank" rel="noopener noreferrer" className="self-start px-5 py-2 mt-4 text-sm font-semibold text-white transition rounded-full bg-emerald-600 hover:bg-emerald-700">
                  Hubungi Perwakilan
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Jabar */}
        <h2 className="mb-10 text-3xl font-bold border-yellow-500 border-b-7 text-emerald-900 w-fit">BMH Jawa Barat</h2>

        <div className="grid grid-cols-1 gap-6 mb-15 md:grid-cols-3">
          {kantorPusat.map((item, idx) => (
            <div key={idx} className="flex flex-col overflow-hidden transition border-[#39BA87] shadow border-1 rounded-2xl hover:shadow-md">
              {/* Gambar */}
              <img src={item.gambar} alt={item.nama} className="object-cover w-full h-48" />

              {/* Konten */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="mb-2 text-xl font-extrabold text-emerald-700">{item.nama}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-gray-700">{item.alamat}</p>
                  <p className="text-sm text-gray-700">Tlp: {item.telp}</p>
                  {item.email && <p className="text-sm text-gray-700">Email: {item.email}</p>}
                </div>
                <a href={`https://wa.me/${item.telp}?text=Halo`} target="_blank" rel="noopener noreferrer" className="self-start px-5 py-2 mt-4 text-sm font-semibold text-white transition rounded-full bg-emerald-600 hover:bg-emerald-700">
                  Hubungi Perwakilan
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Zakat */}
      <div className="container py-12 mx-auto max-w-7xl">
        {/* Heading */}
        <p className="mb-8 text-xl font-medium text-center text-gray-700">
          Salurkan Zakat Anda Lewat BMH — <span className="font-semibold">Lembaga Zakat Amanah &amp; Terpercaya</span>
        </p>

        {/* Cards */}
        <div className="grid gap-6 mb-10 md:grid-cols-2">
          {/* Kalkulator Zakat */}
          <div className="flex items-start gap-4 p-6 text-white shadow-md bg-emerald-600 rounded-xl">
            <div className="p-3 bg-white rounded-lg">
              <FaCalculator className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Kalkulator Zakat</h3>
              <p className="text-sm text-emerald-100">Temukan dengan cepat berapa kewajiban zakat Anda. Praktis, akurat, dan sesuai syariat.</p>
              <a href="/kalkulator-zakat" className="inline-block px-4 py-2 mt-3 text-sm font-medium rounded-lg bg-slate-50 text-emerald-600 hover:bg-slate-100">
                Hitung Zakat Anda
              </a>
            </div>
          </div>

          {/* Tunaikan Zakat */}
          <div className="flex items-start gap-4 p-6 text-white bg-yellow-500 shadow-md rounded-xl">
            <div className="p-3 bg-white rounded-lg">
              <FaMoneyBillWave className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Tunaikan Zakat</h3>
              <p className="text-sm text-amber-100">Salurkan zakat Anda secara online dengan aman, transparan, dan tepat sasaran. Setiap rupiah Anda akan membantu mereka yang membutuhkan.</p>
              <a href="#" className="inline-block px-4 py-2 mt-3 text-sm font-medium text-yellow-600 rounded-lg bg-slate-50 hover:bg-slate-100">
                Tunaikan Zakat Sekarang
              </a>
            </div>
          </div>
        </div>

        {/* CTA Box */}
        <div className="p-6 text-center shadow bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl">
          <p className="mb-2 text-lg font-medium text-gray-500">Mari Bersama Menebar Kebaikan!</p>
          <h4 className="mb-2 text-lg font-semibold text-emerald-900">BMH: Laznas Amanah, Transparan, dan Profesional Berbasis Dakwah.</h4>
          <p className="mb-4 text-sm text-gray-600">Dengan zakat Anda, ribuan anak bisa belajar, keluarga dhuafa bisa mandiri, dan pesantren bisa terus berdiri.</p>
          <a href="https://wa.me/18002428478" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 text-white transition rounded-lg shadow bg-emerald-500 hover:bg-emerald-600">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
