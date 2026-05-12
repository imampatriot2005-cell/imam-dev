import React from 'react';
import { Waves, Droplet, Thermometer } from 'lucide-react';
import StatCard from '../components/StatCard';
import TMAChart from '../components/TMAChart';

export default function MonitoringBanjir() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-display font-bold text-primary">Monitoring Banjir</h1>
        <p className="text-on-surface-variant">Data real-time ketinggian air di berbagai pos pantau Aceh Tamiang.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={Waves} label="TMA Rata-rata" value="450 cm" type="primary" />
        <StatCard icon={Droplet} label="Intensitas Hujan" value="120 mm" type="primary" />
        <StatCard icon={Thermometer} label="Suhu Udara" value="26°C" type="tertiary" />
      </div>

      <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm h-[500px]">
        <TMAChart />
      </div>
    </div>
  );
}
