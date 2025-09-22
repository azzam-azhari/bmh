import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';

const FloatingMenu = () => {
  const donateLink = 'under-construction'; // ganti link donasi sesuai kebutuhan

  return (
    <a
      href={donateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center text-white transition bg-yellow-400 rounded-full shadow-lg w-14 h-14 bottom-24 right-6 hover:bg-yellow-500"
      aria-label="Donasi Sekarang"
    >
      <FaHandHoldingHeart className="text-2xl" />
    </a>
  );
};

export default FloatingMenu;
