// src/components/pages/BuktiNyata.jsx
const buktiNyata = [
  {
    id: 1,
    img: '/images/berita-terkini/berita1.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    color: 'border-emerald-500',
    judul: 'text-emerald-500',
  },
  {
    id: 2,
    img: '/images/berita-terkini/berita2.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    color: 'border-yellow-500',
    judul: 'text-yellow-500',
  },
  {
    id: 3,
    img: '/images/berita-terkini/berita3.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    color: 'border-yellow-500',
    judul: 'text-yellow-500',
  },
  {
    id: 4,
    img: '/images/berita-terkini/berita3.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    color: 'border-emerald-500',
    judul: 'text-emerald-500',
  },
  {
    id: 5,
    img: '/images/berita-terkini/berita3.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    color: 'border-emerald-500',
    judul: 'text-emerald-500',
  },
  {
    id: 6,
    img: '/images/berita-terkini/berita3.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    color: 'border-yellow-500',
    judul: 'text-yellow-500',
  },
];

export default function BuktiNyata() {
  return (
    <section className="w-full px-5 font-poppins">
      <div className="container mx-auto max-w-7xl">
        {/* Judul */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-start md:text-4xl text-emerald-900">Aksi Nyata BMH</h2>
          <div className="w-32 h-2 mt-2 rounded-none bg-emerald-500"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {buktiNyata.map((bukti) => (
            <div key={bukti.id} className="flex flex-col items-center pt-1 pl-1 overflow-hidden bg-transparent border-2 border-emerald-500 rounded-3xl md:flex-row">
              {/* Gambar */}
              <div className="absolute z-20 overflow-hidden duration-500 border-3 w-97 h-45 md:w-80 md:h-50 border-slate-50 rounded-3xl hover:shadow-2xl">
                <img src={bukti.img} alt={bukti.title} className="object-cover w-full h-full transition-shadow shadow-lg" />
              </div>

              {/* Konten */}
              <div className="flex-1 pt-40 mt-4 backdrop-blur md:mt-0 md:ml-6 md:pl-75 md:pt-0">
                <div className="flex flex-col justify-center w-full p-6">
                  <h3 className={'${bukti.judul} mb-2 font-semibold text-md hover:cursor-pointer'}>{bukti.title}</h3>
                  <p className="flex-1 text-xs leading-relaxed md:text-xs text-slate-600">{bukti.desc}</p>
                  <button className="self-start px-5 py-2 mt-4 text-xs text-white bg-teal-900 rounded-xl hover:bg-teal-950">Selengkapnya</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid gap-8 md:grid-cols-2">
          {buktiNyata.map((bukti) => (
            <div key={bukti.id} className="flex flex-col justify-center overflow-hidden bg-transparent rounded-3xl">
              
              <div className="absolute z-10 flex flex-col overflow-hidden transition-shadow duration-500 shadow-lg h-59 border-3 border-slate-100 rounded-3xl hover:shadow-2xl ">
                <div className="object-cover w-full">
                  <img src={bukti.img} alt={bukti.title} className="object-cover h-59 w-80" />
                </div>
              </div>

              
              <div className="border-2 border-emerald-500 pl-80 rounded-3xl backdrop-blur">
                <div className="flex flex-col justify-center w-full p-6">
                  <h3 className={'${bukti.judul} mb-2 font-semibold text-md hover:cursor-pointer'}>{bukti.title}</h3>
                  <p className="flex-1 text-xs leading-relaxed text-slate-600">{bukti.desc}</p>
                  <button className="self-start px-5 py-2 mt-4 text-xs text-white bg-teal-900 hover:cursor-pointer rounded-xl hover:bg-teal-950">Selengkapnya</button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
