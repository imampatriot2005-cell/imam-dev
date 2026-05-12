import React from 'react';
import { HeartPulse, ShoppingBag, Truck, Package } from 'lucide-react';
import StatCard from '../components/StatCard';
import { DistributionProgress } from '../components/SecondaryStats';

export default function DistribusiBantuan() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-display font-bold text-primary">Distribusi Bantuan</h1>
        <p className="text-on-surface-variant">Logistik dan bantuan sosial untuk warga terdampak banjir.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Package} label="Total Paket Sembako" value="12.500" type="primary" />
        <StatCard icon={Truck} label="Armada Aktif" value="15" type="primary" />
        <StatCard icon={ShoppingBag} label="Donasi Terkumpul" value="Rp 2.4 M" type="tertiary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DistributionProgress />
        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm text-center flex flex-col justify-center items-center gap-4">
          <HeartPulse size={48} className="text-error" />
          <h3 className="text-xl font-bold">Kebutuhan Mendesak</h3>
          <p className="text-sm text-on-surface-variant">Posko Kejuruan Muda membutuhkan tambahan selimut dan obat-obatan dasar.</p>
          <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold">Kirim Bantuan Sekarang</button>
        </div>
      </div>
    </div>
  );
}
