import React, { useState } from 'react';

const KalkulatorZakat = () => {
  const [selectedType, setSelectedType] = useState('Penghasilan');
  const [periode, setPeriode] = useState('bulanan');

  const [penghasilan, setPenghasilan] = useState('');
  const [tabungan, setTabungan] = useState('');
  const [pendapatanLain, setPendapatanLain] = useState('');
  const [pengeluaran, setPengeluaran] = useState('');
  const [hasilZakat, setHasilZakat] = useState('');

  const hargaEmas = 1558000; // per gram
  const nisab = 85 * hargaEmas; // Rp131.430.000

  const handleHitungZakat = () => {
    let totalTahunan = 0;

    if (selectedType === 'Penghasilan (Profesi)') {
      const penghasilanBersih = parseFloat(penghasilan || 0) + parseFloat(pendapatanLain || 0) - parseFloat(pengeluaran || 0);

      totalTahunan = periode === 'bulanan' ? penghasilanBersih * 12 : penghasilanBersih;
    }

    if (selectedType === 'Tabungan (Maal)') {
      totalTahunan = parseFloat(tabungan || 0); // nilai akhir tabungan setelah 1 tahun
    }

    if (totalTahunan >= nisab) {
      const zakat = totalTahunan * 0.025;
      setHasilZakat(`Rp${zakat.toLocaleString('id-ID')}`);
    } else {
      setHasilZakat('Tidak Wajib Zakat (Belum Mencapai Nisab)');
    }
  };

  return (
    <section className="px-4 py-20 g-slate-100 md:px-8 lg:py-30 lg:px-16 font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-bold text-green-700 uppercase">Layanan</p>
        <h2 className="text-3xl font-bold text-gray-800 md:font-extrabold md:text-4xl">Kalkulator Zakat</h2>
        <p className="mt-2 text-gray-600">Kami menerima beberapa Layanan</p>

        <h3 className="mt-8 text-xl font-bold text-gray-800">Hitung Dan Tunaikan Zakat Anda Dengan Mudah</h3>
        <p className="mt-4 text-sm text-gray-600">Zakat Adalah Kewajiban Bagi Setiap Muslim Yang Hartanya Telah Mencapai Nisab...</p>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <h4 className="mb-4 text-lg font-bold text-center">PILIH JENIS ZAKAT ANDA</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {['Penghasilan (Profesi)', 'Tabungan (Maal)', 'Perdagangan', 'Emas'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`border px-5 py-2 rounded-md flex items-center gap-2 transition-all ${selectedType === type ? 'border-green-500 text-green-500 font-bold' : 'border-gray-400 text-black'}`}
            >
              <span className="capitalize">{type}</span>
              <span className="flex items-center justify-center w-3 h-3 border border-black rounded-full">{selectedType === type && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-6">
          {['bulanan', 'tahunan'].map((p) => (
            <label key={p} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="periode" value={p} checked={periode === p} onChange={(e) => setPeriode(e.target.value)} />
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </label>
          ))}
        </div>

        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium">Penghasilan:</label>
            <input
              type="number"
              value={penghasilan}
              onChange={(e) => setPenghasilan(e.target.value)}
              placeholder="Masukkan Penghasilan bulanan anda"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Pendapatan Lain (Bonus, THR)</label>
            <input type="number" value={pendapatanLain} onChange={(e) => setPendapatanLain(e.target.value)} placeholder="Opsional jika ada" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Pengeluaran Kebutuhan Pokok</label>
            <input type="number" value={pengeluaran} onChange={(e) => setPengeluaran(e.target.value)} placeholder="Opsional jika ada" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          {selectedType === 'Tabungan (Maal)' && (
            <div>
              <label className="block text-sm font-medium">Jumlah Tabungan (setelah 1 tahun):</label>
              <input type="number" value={tabungan} onChange={(e) => setTabungan(e.target.value)} placeholder="Contoh: 150000000" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium">Wajib Bayar</label>
            <input type="text" value={hasilZakat} placeholder="Zakat yang wajib dibayar" readOnly className="w-full px-4 py-2 text-red-500 bg-gray-100 border border-gray-300 rounded-md" />
          </div>

          <button type="button" onClick={handleHitungZakat} className="w-full px-4 py-2 mt-4 text-white transition bg-green-500 rounded-md hover:bg-green-600">
            Hitung Zakat
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-600">
          <p>- Perhitungan Zakat Diupdate Otomatis Berdasarkan Update Harga Emas</p>
          <p>- Harga Emas Per Gram Saat Ini: Rp{hargaEmas.toLocaleString('id-ID')}</p>
          <p>- Nisab 85 Gram Emas: Rp{nisab.toLocaleString('id-ID')}</p>
          <p>- Disarankan Dipotong Dari Gaji Bruto</p>
        </div>
      </div>
    </section>
  );
};

export default KalkulatorZakat;
