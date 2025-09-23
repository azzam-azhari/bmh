import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';

const FloatingMenu = () => {
  const donateLink = '/under-construction'; // ganti sesuai kebutuhan

  return (
    <a
      href={donateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-start overflow-hidden text-white transition-all duration-300 ease-in-out bg-[#FEB738] shadow-lg  group bottom-24 right-6 w-14 hover:w-64 h-14 rounded-xl"
      aria-label="Donasi Sekarang"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-14 h-14 shrink-0">
        <FaHandHoldingHeart className="text-2xl" />
      </div>

      {/* Text muncul saat hover */}
      <span className="text-sm font-medium transition-opacity duration-300 opacity-0 whitespace-nowrap group-hover:opacity-100">Donasikan Sebagian Hartamu</span>
    </a>
  );
};

export default FloatingMenu;
