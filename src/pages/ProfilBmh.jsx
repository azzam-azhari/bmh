import React from 'react';

const ProfilBmh = () => {
  return (
    <section className="px-4 font-nunito py-20 bg-slate-100 container mx-auto md:px-8 lg:py-30 lg:px-16">
      <div className="flex flex-col items-center gap-10 mx-auto max-w-7xl lg:flex-row">
        {/* Images */}
        <div className="flex flex-col gap-4 sm:flex-row lg:w-1/2 sm:w-full">
          <img src="/images/profil/profil1.png" alt="BMH Office" className="object-cover w-full shadow-lg rounded-xl md:w-1/2" />
          <img src="/images/profil/profil2.png" alt="Masjid" className="object-cover w-full shadow-lg rounded-xl md:w-1/2" />
        </div>

        {/* Text Content */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h3 className="font-semibold tracking-wide text-green-600 uppercase">TENTANG KAMI</h3>
          <h2 className="mt-2 mb-4 text-3xl font-bold md:font-extrabold">BAITUL MAAL HIDAYATULLAH</h2>
          <p className="leading-relaxed text-gray-700 text-left">
            Lembaga Amil Zakat Nasional Baitul Maal Hidayatullah (BMH) merupakan lembaga amil zakat yang bergerak dalam penghimpunan Responsibility (CSR) perusahaan, dan melakukan distribusi melalui program pendidikan, dakwah, sosial
            kemanusiaan dan ekonomi secara nasional.
            <br />
            <br />
            BMH hadir Kantor layanan LAZNAS BMH hadir di 34 Provinsi dengan unit penghimpunan (UPP) zakat, infak dan sedekah mencapai 97 se-Indonesia. Kami wujudkan semua sebagai komitmen untuk menjadi perantara kebaikan, memberi kemudahan
            bagi masyarakat dalam menunaikan ZISWAF menuju Indonesia yang lebih bermartabat.
            <br />
            <br />
            Kiprah program BMH dari hasil pengelolaan zakat telah melintasi berbagai daerah di Indonesia, setidaknya 287 Pesantren telah eksis dan berkiprah, 5213 Dai Tangguh telah menyebar seantero nusantara, ribuan keluarga dhuafa telah
            terberdayakan dan mandiri, ribuan anak usia sekolah mendapatkan pendidikan yang layak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilBmh;
