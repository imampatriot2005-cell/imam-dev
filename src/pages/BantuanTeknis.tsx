import React from 'react';
import { Headset, Mail, Phone, MessageSquare } from 'lucide-react';

export default function BantuanTeknis() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-display font-bold text-primary">Bantuan Teknis</h1>
        <p className="text-on-surface-variant">Hubungi tim IT SIMBAT jika Anda mengalami kendala pada sistem.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center text-center gap-4">
          <div className="p-3 bg-primary-fixed rounded-full text-primary">
            <Phone size={24} />
          </div>
          <h3 className="font-bold">Hotline 24/7</h3>
          <p className="text-sm text-on-surface-variant">0811-1234-5678</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center text-center gap-4">
          <div className="p-3 bg-primary-fixed rounded-full text-primary">
            <Mail size={24} />
          </div>
          <h3 className="font-bold">Email Support</h3>
          <p className="text-sm text-on-surface-variant">support@simbat-tamiang.go.id</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-outline-variant shadow-sm flex flex-col items-center text-center gap-4">
          <div className="p-3 bg-primary-fixed rounded-full text-primary">
            <MessageSquare size={24} />
          </div>
          <h3 className="font-bold">Live Chat</h3>
          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">Mulai Percakapan</button>
        </div>
      </div>

      <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant">
        <h3 className="text-xl font-bold mb-6">Kirim Tiket Kendala</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Nama Lengkap</label>
            <input className="bg-white border-outline-variant rounded-lg p-2 focus:ring-primary focus:outline-none" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Instansi/OPD</label>
            <input className="bg-white border-outline-variant rounded-lg p-2 focus:ring-primary focus:outline-none" type="text" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-bold">Deskripsi Kendala</label>
            <textarea className="bg-white border-outline-variant rounded-lg p-2 h-32 focus:ring-primary focus:outline-none"></textarea>
          </div>
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold md:w-fit">Kirim Laporan</button>
        </form>
      </div>
    </div>
  );
}
