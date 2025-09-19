import React from 'react';
import { FaCalculator, FaMoneyBillWave } from 'react-icons/fa';

export default function JajaranManajemen() {
  return (
    <section className="container py-20 mx-auto font-poppins bg-slate-50 lg:py-30 max-w-7xl">
      {/* Text Content */}
      <div className="text-left lg:text-left">
        <h2 className="mt-1 text-2xl font-bold md:text-3xl md:font-extrabold text-[#095046]">Jajaran Manajemen</h2>
        <div className="h-2 w-40 bg-[#10B981] mt-1 mb-4"></div>
        <p className="leading-relaxed text-justify text-gray-700">
          Di balik setiap langkah besar BMH, ada para pemimpin visioner yang bekerja penuh dedikasi. Jajaran manajemen Baitul Maal Hidayatullah (BMH) merupakan sosok-sosok terbaik yang menjalankan amanah lembaga dengan penuh integritas,
          profesionalitas, dan semangat melayani umat. Mereka bukan hanya mengelola organisasi, tapi juga memastikan setiap program berjalan tepat sasaran, transparan, dan membawa manfaat luas bagi masyarakat. Dengan struktur manajemen yang
          solid—mulai dari Dewan Pembina, Dewan Pengawas, hingga Dewan Pengurus—BMH terus berkomitmen menghadirkan kebermanfaatan zakat, infak, dan sedekah secara optimal.
          <br />
        </p>
      </div>

      {/* Grid Jajaran */}
      <div className="grid gap-6 mt-10 mb-10 md:grid-cols-3">
        {/* Card 1 */}
        <div className="p-6 text-center bg-white shadow-md rounded-xl">
          <img src="/images/jajaran/1.png" alt="Dewan Pembina" className="object-cover w-32 h-32 mx-auto mb-4 rounded-full" />
          <h3 className="text-lg font-bold">Dewan Pembina</h3>
          <p className="mt-2 text-sm text-gray-600">Bapak H. Abdullah Syam, Lc., M.Ag.</p>
        </div>
        {/* Card 2 */}
        <div className="p-6 text-center bg-white shadow-md rounded-xl">
          <img src="/images/jajaran/2.png" alt="Dewan Pengawas" className="object-cover w-32 h-32 mx-auto mb-4 rounded-full" />
          <h3 className="text-lg font-bold">Dewan Pengawas</h3>
          <p className="mt-2 text-sm text-gray-600">Bapak H. Muhammad Syam, Lc., M.Ag.</p>
        </div>
        {/* Card 3 */}
        <div className="p-6 text-center bg-white shadow-md rounded-xl">
          <img src="/images/jajaran/3.png" alt="Dewan Pengurus" className="object-cover w-32 h-32 mx-auto mb-4 rounded-full" />
          <h3 className="text-lg font-bold">Dewan Pengurus</h3>
          <p className="mt-2 text-sm text-gray-600">Bapak H. Muhammad Syam, Lc., M.Ag.</p>
        </div>
      </div>

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
              <a href="#" className="inline-block px-4 py-2 mt-3 text-sm font-medium rounded-lg bg-slate-50 text-emerald-600 hover:bg-slate-100">
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
          <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 text-white transition rounded-lg shadow bg-emerald-500 hover:bg-emerald-600">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
