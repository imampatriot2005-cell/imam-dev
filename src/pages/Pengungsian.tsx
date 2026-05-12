import React from 'react';
import { Home, Users, Bed, Refrigerator } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function Pengungsian() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-display font-bold text-primary">Data Pengungsian</h1>
        <p className="text-on-surface-variant">Update lokasi dan kapasitas titik pengungsian di seluruh wilayah terdampak.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={Home} label="Total Titik" value="84" type="primary" />
        <StatCard icon={Users} label="Total Pengungsi" value="206.903" type="primary" />
        <StatCard icon={Bed} label="Kapasitas Tersisa" value="15.420" type="tertiary" />
        <StatCard icon={Refrigerator} label="Stok Konsumsi" value="Aman" type="primary" />
      </div>

      <div className="bg-white rounded-2xl border border-outline-variant shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-surface-container-low text-xs font-bold uppercase text-on-surface-variant">
            <tr>
              <th className="px-6 py-4">Nama Posko</th>
              <th className="px-6 py-4">Kecamatan</th>
              <th className="px-6 py-4">Jumlah Jiwa</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {[
              { posko: 'Posko Utama Karang Baru', kecamatan: 'Karang Baru', jiwa: 4500 },
              { posko: 'SDN 1 Kejuruan Muda', kecamatan: 'Kejuruan Muda', jiwa: 1200 },
              { posko: 'Masjid Al-Falah Tamiang Hulu', kecamatan: 'Tamiang Hulu', jiwa: 850 },
            ].map((item, idx) => (
              <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                <td className="px-6 py-4 font-semibold">{item.posko}</td>
                <td className="px-6 py-4">{item.kecamatan}</td>
                <td className="px-6 py-4">{item.jiwa.toLocaleString()}</td>
                <td className="px-6 py-4">
                   <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-[10px] font-bold">Aktif</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
