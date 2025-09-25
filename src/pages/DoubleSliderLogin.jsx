import React, { useState } from 'react';

export default function DoubleSliderLogin() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-tr from-emerald-50 to-white font-poppins">
      <div className={`relative w-full max-w-4xl min-h-[500px] shadow-xl transition-transform duration-700 ease-in-out rounded-3xl overflow-hidden bg-white ${isRightPanelActive ? 'translate-x-0' : ''}`}>
        {/* Left Login Panel */}
        <div className={`absolute top-0 left-0 w-1/2 h-full px-8 py-12 flex flex-col justify-center transition-transform duration-700 ease-in-out bg-white z-20 ${isRightPanelActive ? '-translate-x-full opacity-0' : 'opacity-100'}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Login here</h2>
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39BA87]" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#39BA87]" />
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-[#39BA87] hover:underline">
              Forgot password?
            </a>
          </div>
          <button className="py-2 font-semibold text-white bg-[#39BA87] rounded-full hover:bg-emerald-600">Login</button>
          <p className="mt-6 text-sm text-center text-gray-500">
            Belum punya akun?{' '}
            <button className="text-[#39BA87] hover:underline" onClick={() => setIsRightPanelActive(true)}>
              Register
            </button>
          </p>
        </div>

        {/* Right Register Panel */}
        <div className={`absolute top-0 right-0 w-1/2 h-full px-8 py-12 flex flex-col justify-center transition-transform duration-700 ease-in-out bg-white z-10 ${isRightPanelActive ? 'opacity-100' : 'translate-x-full opacity-0'}`}>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Ayo bergabung dan mulai sekarang</h2>
          <input type="text" placeholder="Full Name" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FEB738]" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FEB738]" />
          <input type="password" placeholder="Password" className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#FEB738]" />
          <button className="py-2 font-semibold text-white bg-[#FEB738] rounded-full hover:bg-yellow-600">Register</button>
          <p className="mt-6 text-sm text-center text-gray-500">
            Sudah punya akun?{' '}
            <button className="text-[#FEB738] hover:underline" onClick={() => setIsRightPanelActive(false)}>
              Login
            </button>
          </p>
        </div>

        {/* Overlay (optional animation or image) */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ease-in-out ${isRightPanelActive ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className="w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('/images/login/123.jpg')" }}></div>
        </div>
      </div>
    </div>
  );
}
