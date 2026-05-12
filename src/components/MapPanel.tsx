import React from 'react';
import { Crosshair, MapPin } from 'lucide-react';

export default function MapPanel() {
  return (
    <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden h-[500px] relative">
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-outline-variant">
          <h5 className="text-[10px] uppercase font-bold text-on-surface-variant mb-2 tracking-wider">Legenda Peta</h5>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-error rounded-full ring-2 ring-error-container"></div>
              <span className="text-[11px] font-medium">Terdampak Parah</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-amber-100"></div>
              <span className="text-[11px] font-medium">Terdampak Ringan</span>
            </div>
          </div>
        </div>
      </div>
      
      <img 
        className="w-full h-full object-cover" 
        alt="Map of Aceh Tamiang" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuWaGo-bOrSu79Z0gjG_uEkvlHCq-3mNLnLemmc2abhtlDqkfZaqHoks9wkNDgblHlIeUq7WTWrXIACGwGryXA5-fAsUIG_0NKlumu1iPALGM48CpeH2rusr67y-Fmdr9PUeKmsojU3vpsnycj63f9-qtjdpjnL6Drlgi1b0TFIM3j3BidJzg1jU4Mxb7Gvk0iDeof-qb_n1cu2Kcjd97XVwOoCNFZ-KMCapCwPOQ07eM_8QJbNOxRWPTAfNJz23jA_qbalfaGKh8" 
      />
      
      <div className="absolute bottom-4 right-4 z-10">
        <button className="bg-white p-2.5 rounded-xl shadow-lg border border-outline-variant hover:bg-surface-container-low transition-all text-primary active:scale-95">
          <Crosshair size={20} />
        </button>
      </div>
    </div>
  );
}
