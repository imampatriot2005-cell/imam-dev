import React from 'react';
import { School, Building2, HeartPulse, Home } from 'lucide-react';

const distributionData = [
  { label: 'Logistik Makanan', progress: 85 },
  { label: 'Obat-obatan', progress: 62 },
  { label: 'Pakaian & Selimut', progress: 40 },
];

const damageData = [
  { icon: School, count: 24, label: 'Sekolah' },
  { icon: Building2, count: 42, label: 'Masjid/Ibadah' },
  { icon: HeartPulse, count: 12, label: 'Puskesmas' },
  { icon: Home, count: 1240, label: 'Rumah', focus: true },
];

export function DistributionProgress() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant p-6 shadow-sm flex flex-col h-full">
      <h4 className="font-display text-lg text-on-surface font-bold mb-6">Distribusi Bantuan</h4>
      <div className="flex flex-col gap-6">
        {distributionData.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold text-on-surface-variant">{item.label}</span>
              <span className="text-xs font-bold text-primary">{item.progress}%</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full rounded-full transition-all duration-1000" 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DamageSummary() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant p-6 shadow-sm flex flex-col h-full">
      <h4 className="font-display text-lg text-on-surface font-bold mb-6">Fasilitas Rusak</h4>
      <div className="grid grid-cols-2 gap-3">
        {damageData.map((item, index) => (
          <div key={index} className="p-4 bg-surface-container-low rounded-xl text-center border border-outline-variant/30 hover:shadow-md transition-all">
            <item.icon size={20} className={item.focus ? 'text-error mx-auto mb-2' : 'text-primary mx-auto mb-2'} />
            <p className={`text-xl font-bold font-display ${item.focus ? 'text-error' : 'text-on-surface'}`}>
              {item.count.toLocaleString()}
            </p>
            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
