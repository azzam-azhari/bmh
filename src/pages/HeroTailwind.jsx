'use client';

// import { useState } from 'react';

export default function HeroTailwind() {
  return (
    <div className="bg-slate-100 font-poppins">
      <div className="relative px-6 isolate pt-14 md:pt-0 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80">
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ffbd4c] to-[#53ffba] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="max-w-2xl py-32 mx-auto sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-gray-600 rounded-full text-sm/6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Menebar Manfaat, Membangun Umat.{' '}
              <a href="#" className="font-semibold text-[#39BA87]">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">Beramal Lebih Mudah, Berkah Lebih Luas.</h1>
            <p className="mt-8 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
              Bersama BMH, wujudkan kepedulian yang nyata untuk dakwah, pendidikan, sosial, dan kemanusiaan. Satu klik kebaikanmu hari ini bisa mengubah masa depan banyak orang.
            </p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <a
                href="https://berbagi.bmh.or.id/"
                target="_blank"
                className="rounded-xl bg-[#39BA87] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#37b683] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#39BA87]"
              >
                Donasi Sekarang
              </a>
              <a href="/program-kami" className="font-semibold text-gray-700 hover:text-gray-900 text-sm/6">
                Pelajari Program <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ffc259] to-[#4cffb7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
