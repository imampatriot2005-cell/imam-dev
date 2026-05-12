import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const regions = [
  { name: 'Kejuruan Muda', status: 'Awas', tma: 512, trend: 'up', trendLabel: 'Meningkat' },
  { name: 'Tamiang Hulu', status: 'Siaga', tma: 405, trend: 'flat', trendLabel: 'Stabil' },
  { name: 'Karang Baru', status: 'Waspada', tma: 315, trend: 'down', trendLabel: 'Menurun' },
];

export default function AffectedTable() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-outline-variant bg-surface-container-lowest">
        <h4 className="font-display text-lg text-on-surface font-bold">Wilayah Terdampak</h4>
      </div>
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left">
          <thead className="bg-surface-container-low text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
            <tr>
              <th className="px-6 py-3">Nama Kecamatan</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">TMA (cm)</th>
              <th className="px-6 py-3 text-center">Tren</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {regions.map((region) => (
              <tr key={region.name} className="hover:bg-surface-container-low transition-colors">
                <td className="px-6 py-4 text-sm font-semibold text-on-surface">{region.name}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    region.status === 'Awas' ? 'bg-error-container text-on-error-container' :
                    region.status === 'Siaga' ? 'bg-amber-100 text-amber-800' :
                    'bg-cyan-100 text-cyan-800'
                  }`}>
                    {region.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right">{region.tma}</td>
                <td className={`px-6 py-4 text-center`}>
                  <div className={`flex items-center justify-center gap-1 ${
                    region.trend === 'up' ? 'text-error' :
                    region.trend === 'down' ? 'text-primary' :
                    'text-on-surface-variant'
                  }`}>
                    {region.trend === 'up' && <TrendingUp size={14} />}
                    {region.trend === 'down' && <TrendingDown size={14} />}
                    {region.trend === 'flat' && <Minus size={14} />}
                    <span className="text-[10px] font-bold">{region.trendLabel}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
