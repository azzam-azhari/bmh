import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative z-20 shadow-lg bg-[#095046] backdrop-blur-md text-slate-50 font-poppins">
      {/* Konten Utama */}
      <div className="grid grid-cols-1 gap-10 px-6 pt-20 pb-10 mx-auto max-w-7xl md:grid-cols-3">
        {/* Kolom 1 */}
        <div className="flex flex-col items-start">
          <img src="/1.png" alt="Logo BMH" className="object-contain h-10 mb-6" />
          <p className="pl-2 pr-2 text-sm leading-relaxed text-justify">
            Lembaga Amil Zakat Nasional <span className="font-bold text-emerald-400"> Baitul Maal Hidayatullah (BMH)</span> Merupakan lembaga amil zakat yang bergerak dalam penghimpunan dana Zakat, infaq, sedekah, Wakaf dan Hibah berikut
            dana sosial kemanusiaan dan Corporate Social Responsibility (CSR) perusahaan, dan melakukan distribusi melalui program pendidikan, dakwah, sosial kemanusiaan dan ekonomi secara nasional.
          </p>
        </div>

        {/* Kolom 2 */}
        <div className="pl-2 pr-2 md:pt-6 md:pl-10 lg:pl-25">
          <h3 className="mb-3 text-lg font-extrabold">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-emerald-500">
                Beranda
              </a>
            </li>
            <li>
              <a href="/profilBmh" className="hover:text-emerald-500">
                Profile
              </a>
            </li>
            <li>
              <a href="/kalkulatorZakat" className="hover:text-emerald-500">
                Layanan
              </a>
            </li>
            <li>
              <a href="/majalahMulia" className="hover:text-emerald-500">
                Majalah Mulia
              </a>
            </li>
            <li>
              <a href="/kontak" className="hover:text-emerald-500">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div className="pl-2 pr-2 md:pt-6">
          <h3 className="mb-3 text-lg font-extrabold">Hubungi Kami</h3>
          <div className="space-y-2 text-sm ">
            {/* Telepon - link ke tel: */}
            <a href="tel:0217975770" className="flex items-center transition hover:text-emerald-500">
              <MdPhone className="mr-2 text-lg" /> 021-7975-770
            </a>

            {/* Email - link ke mailto: */}
            <a href="mailto:sekretariat@bmh.or.id" className="flex items-center transition hover:text-emerald-500">
              <MdEmail className="mr-2 text-lg" /> sekretariat@bmh.or.id
            </a>

            {/* WhatsApp - link ke nomor WhatsApp */}
            <a
              href="https://wa.me/6289517795206" // Ganti dengan nomor CS BMH yang sebenarnya
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition hover:text-emerald-500"
            >
              <FaWhatsapp className="mr-2 text-lg" /> Chat via WhatsApp
            </a>

            {/* Alamat - Link ke Google Maps */}
            <a
              href="https://www.google.com/maps/place/Baitul+Maal+Hidayatullah+Pusat/@-6.259257,106.8402742,17.54z/data=!4m6!3m5!1s0x2e69f2370ee0a723:0x9dfec7fd3fd90a06!8m2!3d-6.259525!4d106.8435202!16s%2Fg%2F1yfdr04nq?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition hover:text-emerald-500"
            >
              <FaMapMarkerAlt className="mr-2 text-lg" />
              Kantor Baitul Maal Hidayatullah Pusat
            </a>
          </div>
        </div>
      </div>

      {/* Sosial Media */}
      <div className="flex justify-center gap-6 pt-5 pb-6 text-xl text-slate-50">
        <a href="https://www.facebook.com/BaitulMaalHidayatullah" className=" hover:text-yellow-500">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/official.bmh/" target="_blank" rel="noopener noreferrer" className=" hover:text-yellow-500">
          <FaInstagram />
        </a>
        <a href="https://x.com/officialbmh" target="_blank" rel="noopener noreferrer" className=" hover:text-yellow-500">
          <FaTwitter />
        </a>
        <a href="https://www.tiktok.com/@official.bmh" target="_blank" rel="noopener noreferrer" className=" hover:text-yellow-500">
          <FaTiktok />
        </a>
        <a href="https://www.youtube.com/channel/UCaVCytqsC7PZCOkPB41rSlQ" target="_blank" rel="noopener noreferrer" className=" hover:text-yellow-500">
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <div className="py-6 text-sm text-center text-white bg-[#095046] border-t-1 border-white/30">© 2025 Hak cipta BMH - All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
