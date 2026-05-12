import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { time: '00:00', tma: 210 },
  { time: '03:00', tma: 240 },
  { time: '06:00', tma: 320 },
  { time: '09:00', tma: 410 },
  { time: '12:00', tma: 380 },
  { time: '15:00', tma: 450 },
  { time: '18:00', tma: 490 },
  { time: '21:00', tma: 420 },
  { time: '23:59', tma: 512 },
];

export default function TMAChart() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
        <h4 className="font-display text-lg text-on-surface font-bold">Tren Tinggi Muka Air (TMA)</h4>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] text-primary font-bold border border-primary-fixed">Sungai Tamiang</span>
          <span className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] text-on-surface-variant font-medium">24 Jam Terakhir</span>
        </div>
      </div>
      <div className="p-4 flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTma" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0056b3" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0056b3" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#6B7280' }}
              domain={[0, 600]}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            <ReferenceLine y={500} label={{ value: 'AWAS', position: 'insideTopRight', fill: '#ba1a1a', fontSize: 10 }} stroke="#ba1a1a" strokeDasharray="3 3" />
            <ReferenceLine y={400} label={{ value: 'SIAGA', position: 'insideTopRight', fill: '#856404', fontSize: 10 }} stroke="#856404" strokeDasharray="3 3" />
            <ReferenceLine y={300} label={{ value: 'WASPADA', position: 'insideTopRight', fill: '#0c5460', fontSize: 10 }} stroke="#0c5460" strokeDasharray="3 3" />
            <Area 
              type="monotone" 
              dataKey="tma" 
              stroke="#0056b3" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorTma)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
