import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  type?: 'primary' | 'error' | 'tertiary';
}

export default function StatCard({ icon: Icon, label, value, trend, type = 'primary' }: StatCardProps) {
  const bgColorMap = {
    primary: 'bg-primary-fixed',
    error: 'bg-error-container',
    tertiary: 'bg-tertiary-fixed',
  };
  
  const textColorMap = {
    primary: 'text-primary',
    error: 'text-error',
    tertiary: 'text-tertiary',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col gap-2"
    >
      <div className="flex justify-between items-start">
        <div className={`p-2 rounded-lg ${bgColorMap[type]}`}>
          <Icon className={textColorMap[type]} size={24} />
        </div>
        {trend && (
          <span className={`text-xs font-bold ${textColorMap[type]}`}>{trend}</span>
        )}
      </div>
      <div>
        <p className="text-xs text-on-surface-variant font-medium">{label}</p>
        <h3 className={`text-2xl font-bold font-display ${type === 'error' ? 'text-error' : 'text-on-surface'}`}>
          {value}
        </h3>
      </div>
    </motion.div>
  );
}
