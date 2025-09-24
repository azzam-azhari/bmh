import { GraduationCap, Home, Coins, Heart, Leaf, Stethoscope } from 'lucide-react';

export default function ProgramKami() {
  const programs = [
    { icon: <GraduationCap className="w-6 h-6 font-bold text-emerald-500" />, title: 'Dakwah' },
    { icon: <Home className="w-6 h-6 font-bold text-emerald-500" />, title: 'Pendidikan' },
    { icon: <Coins className="w-6 h-6 font-bold text-emerald-500" />, title: 'Ekonomi' },
    { icon: <Heart className="w-6 h-6 font-bold text-emerald-500" />, title: 'Social Kemanusiaan' },
    { icon: <Leaf className="w-6 h-6 font-bold text-emerald-500" />, title: 'Lingkungan' },
    { icon: <Stethoscope className="w-6 h-6 font-bold text-emerald-500" />, title: 'Kesehatan' },
  ];

  return (
    <section className="container mx-auto max-w-7xl font-poppins">
      {/* Judul */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#095046] md:text-4xl">Program Kami</h2>
        <div className="h-2 mt-2 w-28 bg-amber-400"></div>
      </div>

      {/* Grid Program */}
      <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 lg:grid-cols-3">
        {programs.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 transition border border-slate-200 rounded-xl hover:shadow-sm hover:border-0 hover:bg-slate-200">
            <span className="text-xl text-green-600">{item.icon}</span>
            <p className="text-sm font-semibold text-[#095046]">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Kartu Bantuan */}
      <div className="flex flex-col items-center gap-6 p-6 border border-slate-200 md:flex-row rounded-2xl">
        {/* Kiri */}
        <div className="flex flex-col items-center flex-1 gap-4 p-6 text-white md:flex-row bg-gradient-to-r from-amber-400 to-amber-300 rounded-xl">
          {/* <div className="text-4xl">💛</div> */}
          <div>
            <button className="px-4 py-2 font-semibold text-yellow-500 bg-white shadow hover:bg-slate-50 rounded-xl hover:cursor-pointer">Bantu Sekarang!</button>
            <p className="mt-2 text-sm">
              Jadilah bagian dari perubahan — satu donasi kecil, <span className="font-bold">berdampak besar.</span>
            </p>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#095046]">Masih bingung cara berdonasi?, Tim kami siap membantu kamu</p>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-center text-gray-700 rounded-lg bg-slate-50 hover:bg-slate-200 hover:cursor-pointer">
            <span className="font-semibold ">WhatsApp:</span> 021 - 7975770
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-sm text-center text-gray-700 rounded-lg bg-slate-50 hover:bg-slate-200 hover:cursor-pointer">
            <span className="font-semibold ">Email:</span> sekretariat@bmh.or.id
          </div>
        </div>
      </div>
    </section>
  );
}
