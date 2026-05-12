import React from 'react';
import { 
  Users, 
  Home, 
  UserX, 
  Search, 
  MapPin 
} from 'lucide-react';
import StatCard from '../components/StatCard';
import TMAChart from '../components/TMAChart';
import AffectedTable from '../components/AffectedTable';
import WeatherPanel from '../components/WeatherPanel';
import MapPanel from '../components/MapPanel';
import AlertsPanel from '../components/AlertsPanel';
import { DistributionProgress, DamageSummary } from '../components/SecondaryStats';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      {/* Statistics Row - Top Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard 
          icon={Users} 
          label="Jiwa Pengungsi" 
          value="206.903" 
          trend="+12%" 
          type="primary" 
        />
        <StatCard 
          icon={Home} 
          label="KK Terdampak" 
          value="51.726" 
          trend="+5%" 
          type="primary" 
        />
        <StatCard 
          icon={UserX} 
          label="Korban Meninggal" 
          value="18" 
          trend="+2" 
          type="error" 
        />
        <StatCard 
          icon={Search} 
          label="Orang Hilang" 
          value="3" 
          type="tertiary" 
        />
        <StatCard 
          icon={MapPin} 
          label="Kecamatan Terdampak" 
          value="12" 
          trend="Total" 
          type="primary" 
        />
      </div>

      {/* Middle Section: TMA Monitoring & Table + Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Chart & Table */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="h-[400px]">
            <TMAChart />
          </div>
          <div className="flex-1 min-h-[300px]">
            <AffectedTable />
          </div>
        </div>

        {/* Right Column: Weather & Secondary Stats */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="h-[220px]">
            <WeatherPanel />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <DistributionProgress />
            <DamageSummary />
          </div>
        </div>
      </div>

      {/* Bottom Section: Map & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map View */}
        <div className="lg:col-span-8 overflow-hidden rounded-2xl shadow-sm border border-outline-variant">
          <MapPanel />
        </div>

        {/* Alerts List */}
        <div className="lg:col-span-4 flex flex-col">
          <AlertsPanel />
        </div>
      </div>
    </div>
  );
}
