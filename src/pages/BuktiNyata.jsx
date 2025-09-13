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
    <section className="w-full py-12 font-poppins">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-center underline md:text-4xl text-emerald-900">Bukti Nyata</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {buktiNyata.map((bukti) => (
            <div key={bukti.id} className="flex flex-col justify-center overflow-hidden bg-transparent rounded-3xl">
              {/* Gambar di kiri */}
              <div className="absolute z-10 flex flex-col overflow-hidden transition-shadow duration-500 shadow-lg h-59 border-3 border-slate-100 rounded-3xl hover:shadow-2xl ">
                <div className="object-cover w-full">
                  <img src={bukti.img} alt={bukti.title} className="object-cover h-59 w-80" />
                </div>
              </div>

              {/* Konten di kanan */}
              <div className="border-2 border-emerald-500 pl-80 rounded-3xl backdrop-blur">
                <div className="flex flex-col justify-center w-full p-6">
                  <h3 className={'${bukti.judul} mb-2 font-semibold text-md hover:cursor-pointer'}>{bukti.title}</h3>
                  <p className="flex-1 text-xs leading-relaxed text-slate-600">{bukti.desc}</p>
                  <button className="self-start px-5 py-2 mt-4 text-xs text-white bg-teal-900 hover:cursor-pointer rounded-xl hover:bg-teal-950">Selengkapnya</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
