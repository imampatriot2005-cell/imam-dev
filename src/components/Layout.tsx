import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { motion } from 'motion/react';
import { Siren } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex min-h-screen bg-surface font-sans selection:bg-primary/20">
      <Sidebar />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8">
          <Outlet />
        </main>
        
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-error text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-error/90 transition-all z-50 animate-pulse group"
        >
          <Siren size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="sr-only">Hubungi Keadaan Darurat</span>
        </motion.button>
      </div>
    </div>
  );
}
