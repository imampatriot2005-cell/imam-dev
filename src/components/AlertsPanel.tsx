import React from 'react';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

const alerts = [
  {
    type: 'error',
    level: 'STATUS AWAS (LVL 3)',
    message: 'Kejuruan Muda: TMA melebihi 500cm. Evakuasi segera dilakukan di pemukiman bantaran sungai.',
    time: '10 Menit Lalu',
    icon: AlertTriangle
  },
  {
    type: 'warning',
    level: 'STATUS SIAGA (LVL 2)',
    message: 'Tamiang Hulu: Debit air meningkat tajam dari arah hulu. Warga diminta waspada.',
    time: '45 Menit Lalu',
    icon: AlertCircle
  },
  {
    type: 'info',
    level: 'STATUS WASPADA (LVL 1)',
    message: 'Karang Baru: Pintu air bendungan mulai dibuka bertahap untuk menjaga stabilitas.',
    time: '2 Jam Lalu',
    icon: Info
  }
];

export default function AlertsPanel() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant shadow-sm flex flex-col h-full">
      <div className="p-6 border-b border-outline-variant bg-surface-container-lowest">
        <h4 className="font-display text-lg text-on-surface font-bold">Peringatan Dini</h4>
      </div>
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {alerts.map((alert, index) => (
          <div 
            key={index}
            className={`flex gap-4 p-4 rounded-xl border transition-all hover:scale-[1.01] ${
              alert.type === 'error' ? 'bg-error-container border-error/10 text-on-error-container' :
              alert.type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-900' :
              'bg-blue-50 border-blue-200 text-blue-900'
            }`}
          >
            <div className={`mt-1 flex-shrink-0 ${
              alert.type === 'error' ? 'text-error' :
              alert.type === 'warning' ? 'text-amber-600' :
              'text-blue-600'
            }`}>
              <alert.icon size={20} fill="currentColor" fillOpacity={0.2} />
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-wider mb-1 uppercase">{alert.level}</p>
              <p className="text-sm font-medium leading-relaxed opacity-90">{alert.message}</p>
              <p className="text-[10px] mt-2 font-bold opacity-70 tracking-wide">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-outline-variant text-center">
        <button className="text-primary font-bold text-xs hover:underline transition-all">Lihat Semua Notifikasi</button>
      </div>
    </div>
  );
}
