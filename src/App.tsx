import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import MonitoringBanjir from './pages/MonitoringBanjir';
import Pengungsian from './pages/Pengungsian';
import DistribusiBantuan from './pages/DistribusiBantuan';
import PendataanKerusakan from './pages/PendataanKerusakan';
import PeringatanDini from './pages/PeringatanDini';
import PemulihanPascabencana from './pages/PemulihanPascabencana';
import BantuanTeknis from './pages/BantuanTeknis';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="monitoring" element={<MonitoringBanjir />} />
          <Route path="pengungsian" element={<Pengungsian />} />
          <Route path="distribusi" element={<DistribusiBantuan />} />
          <Route path="kerusakan" element={<PendataanKerusakan />} />
          <Route path="peringatan" element={<PeringatanDini />} />
          <Route path="pemulihan" element={<PemulihanPascabencana />} />
          <Route path="bantuan-teknis" element={<BantuanTeknis />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
