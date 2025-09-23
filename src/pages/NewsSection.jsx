// src/components/NewsSection.jsx
const newsData = [
  {
    id: 1,
    img: '/images/berita-terkini/berita1.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    bg: 'bg-emerald-500',
  },
  {
    id: 2,
    img: '/images/berita-terkini/berita2.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    bg: 'bg-[#FEB738]',
  },
  {
    id: 3,
    img: '/images/berita-terkini/berita3.jpeg',
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    bg: 'bg-[#095046]',
  },
];

export default function NewsSection() {
  return (
    <section className="w-full font-poppins">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* <h2 className="mb-10 text-3xl font-bold text-center underline md:text-4xl text-emerald-900">Berita Terbaru</h2> */}
        <div className="grid gap-8 md:grid-cols-3">
          {newsData.map((news) => (
            <div key={news.id} className="flex flex-col">
              {/* Gambar */}
              <div className="relative flex flex-col overflow-hidden transition-transform duration-500 shadow-lg h-55 rounded-3xl hover:scale-102">
                <img src={news.img} alt={news.title} className="absolute object-cover w-full shadow-xl h-55 border-3 rounded-3xl border-slate-100 shadow-slate-950" />
              </div>
              {/* Konten */}
              <div className="mx-3 bg-transparent">
                <div className={`${news.bg} text-white p-6 pt-10 flex-1 flex flex-col mt-[-20px] rounded-b-3xl shadow-2xl`}>
                  <h3 className="mb-3 text-xl font-semibold hover:cursor-pointer">{news.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed">{news.desc}</p>
                  <button className="self-start px-4 py-2 mt-6 text-sm rounded-xl text-slate-900 bg-slate-50 hover:bg-slate-100 hover:cursor-pointer">Selengkapnya..</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
