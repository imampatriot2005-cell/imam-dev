import React from 'react';
import { AlertTriangle, Bell, Smartphone, Radio } from 'lucide-react';
import StatCard from '../components/StatCard';
import AlertsPanel from '../components/AlertsPanel';

export default function PeringatanDini() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-display font-bold text-primary">Peringatan Dini</h1>
        <p className="text-on-surface-variant">Sistem notifikasi darurat dan broadcast informasi keselamatan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Smartphone} label="SMS Broadcast" value="250.000+" type="primary" />
        <StatCard icon={Radio} label="Siaran Radio" value="Aktif" type="primary" />
        <StatCard icon={Bell} label="Sirene Posko" value="12 Titik" type="error" />
      </div>

      <div className="lg:col-span-12">
        <AlertsPanel />
      </div>

      <div className="bg-error-container p-6 rounded-2xl border border-error/20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <AlertTriangle className="text-error" size={32} />
          <div>
            <h3 className="text-lg font-bold text-on-error-container">Sistem Peringatan Aktif</h3>
            <p className="text-sm text-on-error-container opacity-80">Seluruh sensor TMA terhubung dan mengirimkan data setiap 5 menit.</p>
          </div>
        </div>
        <button className="bg-error text-white px-6 py-2 rounded-lg font-bold">Uji Coba Sistem</button>
      </div>
    </div>
  );
}
