import React from 'react';
import { Search, Bell, Settings, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-16 px-6 sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 hover:bg-surface-container-low rounded-full transition-colors">
          <Menu size={20} />
        </button>
        <h2 className="font-display text-lg text-primary font-bold hidden sm:block">SIMBAT Aceh Tamiang</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block w-72">
          <input 
            className="w-full bg-surface-container-low border-none rounded-full px-6 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none" 
            placeholder="Cari data wilayah..." 
            type="text"
          />
          <Search className="absolute right-4 top-2.5 text-on-surface-variant pointer-events-none" size={18} />
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-container-low transition-colors cursor-pointer rounded-full relative">
            <Bell className="text-primary" size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
          </button>
          <button className="p-2 hover:bg-surface-container-low transition-colors cursor-pointer rounded-full">
            <Settings className="text-primary" size={20} />
          </button>
          
          <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary-fixed cursor-pointer ml-2">
            <img 
              alt="User profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVS-2zKr_J3dJlBorRy78OS28CbYNfB7W2IxZcYNQcghGS4OXBIfc_Yun30MVXKm776_TKukqSGQoM3WEX8wu4iO2ZpOs48OI-Y5E6cfJCs5n6G4cElM-8c2A47NSecJbT1m6ZxUk9NpyYW_ggLoy-FUVsiRCBULwWEjgzaZbEWO8XeYheuE0jAYsVzUx0kLo1AQ1J5PhgOdl6ozirB0R9Zs1uuwbsAUX08rHh4kMbsmSHcOl0b8yrKoYs_GcJJVm3jaqMZhLS4CM" 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
