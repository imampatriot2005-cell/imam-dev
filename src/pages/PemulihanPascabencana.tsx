import React from 'react';
import { RefreshCcw, Hammer, Sprout, HardHat } from 'lucide-react';
import StatCard from '../components/StatCard';

export default function PemulihanPascabencana() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-display font-bold text-primary">Pemulihan Pascabencana</h1>
        <p className="text-on-surface-variant">Langkah strategis rehabilitasi dan rekonstruksi wilayah pasca banjir.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={HardHat} label="Proyek Rekonstruksi" value="12" type="primary" />
        <StatCard icon={Sprout} label="Rehabilitasi Lahan" value="45 Ha" type="tertiary" />
        <StatCard icon={RefreshCcw} label="Target Selesai" value="Des 2025" type="primary" />
      </div>

      <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm space-y-6">
        <h3 className="text-xl font-bold">Fokus Rehabilitasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-primary">Infrastruktur</h4>
            <ul className="list-disc list-inside text-on-surface-variant space-y-2 text-sm text-sm">
              <li>Pembersihan sedimen sungai Tamiang</li>
              <li>Perbaikan tanggul di Bendahara</li>
              <li>Rekonstruksi jembatan penghubung</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-primary">Sosial & Ekonomi</h4>
            <ul className="list-disc list-inside text-on-surface-variant space-y-2 text-sm text-sm">
              <li>Bantuan modal UMKM terdampak</li>
              <li>Program trauma healing untuk anak-anak</li>
              <li>Relokasi warga di zona merah</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
