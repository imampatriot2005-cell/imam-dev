import React from 'react';
import { ClipboardList, Home, School, Building2 } from 'lucide-react';
import StatCard from '../components/StatCard';
import { DamageSummary } from '../components/SecondaryStats';

export default function PendataanKerusakan() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-display font-bold text-primary">Pendataan Kerusakan</h1>
        <p className="text-on-surface-variant">Laporan inventarisasi kerusakan infrastruktur dan properti warga.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Home} label="Rumah Rusak" value="1.240" type="error" />
        <StatCard icon={Building2} label="Kantor Pemerintah" value="8" type="tertiary" />
        <StatCard icon={ClipboardList} label="Laporan Masuk" value="5.672" type="primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DamageSummary />
        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm">
          <h3 className="text-lg font-bold mb-4">Grafik Kerusakan Per Wilayah</h3>
          <div className="space-y-4">
            {['Karang Baru', 'Kejuruan Muda', 'Sekerak', 'Manyak Payed'].map((loc) => (
              <div key={loc}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{loc}</span>
                  <span className="text-sm font-bold text-error">{Math.floor(Math.random() * 500)} Unit</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                  <div className="bg-error h-full" style={{ width: `${Math.random() * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
