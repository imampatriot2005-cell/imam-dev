import React from 'react';
import { 
  LayoutDashboard, 
  Droplets, 
  Home, 
  HeartPulse, 
  ClipboardList, 
  AlertTriangle, 
  RefreshCcw, 
  Headset,
  Waves
} from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Waves, label: 'Monitoring Banjir', path: '/monitoring' },
  { icon: Home, label: 'Pengungsian', path: '/pengungsian' },
  { icon: HeartPulse, label: 'Distribusi Bantuan', path: '/distribusi' },
  { icon: ClipboardList, label: 'Pendataan Kerusakan', path: '/kerusakan' },
  { icon: AlertTriangle, label: 'Peringatan Dini', path: '/peringatan' },
  { icon: RefreshCcw, label: 'Pemulihan Pascabencana', path: '/pemulihan' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-72 sticky left-0 top-0 bg-surface-container border-r border-outline-variant shadow-md z-40">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
            <Droplets className="text-white" size={24} />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-primary">SIMBAT</h1>
            <p className="text-[12px] text-on-surface-variant leading-tight">Sistem Manajemen Banjir</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto mt-4 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-4 px-4 py-3 my-1 transition-all duration-200 rounded-lg cursor-pointer
              ${isActive 
                ? 'bg-primary-container text-white font-bold shadow-sm' 
                : 'text-on-surface-variant hover:bg-surface-variant'}
            `}
          >
            <motion.div
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 w-full"
            >
              <item.icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-outline-variant">
        <NavLink 
          to="/bantuan-teknis"
          className={({ isActive }) => `
            flex items-center gap-4 px-4 py-3 rounded-lg transition-all
            ${isActive 
              ? 'bg-primary-container text-white font-bold shadow-sm' 
              : 'text-on-surface-variant hover:bg-surface-variant'}
          `}
        >
          <Headset size={20} />
          <span className="text-sm font-medium">Bantuan Teknis</span>
        </NavLink>
      </div>
    </aside>
  );
}
