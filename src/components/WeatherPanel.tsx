import React from 'react';
import { CloudRain, Wind, CloudLightning } from 'lucide-react';

export default function WeatherPanel() {
  return (
    <div className="bg-primary-container text-white rounded-xl p-6 shadow-md relative overflow-hidden h-full flex flex-col justify-center">
      <div className="relative z-10">
        <p className="text-xs opacity-80 mb-1 font-medium">Curah Hujan Saat Ini</p>
        <h2 className="text-2xl font-display font-bold mb-4">Sangat Lebat</h2>
        <div className="flex items-center gap-4">
          <CloudRain size={48} strokeWidth={1.5} />
          <div>
            <p className="text-xl font-bold">120 mm/jam</p>
            <div className="flex items-center gap-2 opacity-90">
              <Wind size={14} />
              <p className="text-xs font-medium">Kecepatan Angin: 24 km/jam</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-8 -bottom-8 opacity-10">
        <CloudLightning size={160} strokeWidth={1} />
      </div>
    </div>
  );
}
