const DataCard = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
  },
];

export default function LastCard() {
  return (
    <section className="w-full py-12 font-poppins">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Grid Card */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DataCard.map((item) => (
            <div key={item.id} className="flex flex-col justify-between p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl">
              <div>
                <h2 className="mb-3 text-lg font-semibold text-emerald-600">{item.title}</h2>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
              <button className="self-start px-4 py-2 mt-6 text-xs font-medium text-white rounded-md bg-green-950 hover:bg-green-900">Selengkapnya</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
