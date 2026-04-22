'use client';

import { useEffect, useState } from 'react';
import { UserPlus, Search } from 'lucide-react';

type Pegawai = {
  id: number;
  namaPegawai: string;
  nip: string;
  jabatan: string;
  pangkat: string;
  golongan: string;
  instansi?: {
    nama: string;
  };
};

export default function PegawaiPage() {
  const [data, setData] = useState<Pegawai[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/kasubagtu/pegawai');
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Data Pegawai
          </h1>
          <p className="text-sm text-gray-500">
            Kelola seluruh data pegawai
          </p>
        </div>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          <UserPlus size={18} />
          Tambah Pegawai
        </button>
      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-xl shadow border flex items-center gap-3">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Cari nama / NIP..."
          className="w-full outline-none text-sm"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Nama</th>
                <th className="px-4 py-3 text-left">NIP</th>
                <th className="px-4 py-3 text-left">Jabatan</th>
                <th className="px-4 py-3 text-left">Golongan</th>
                <th className="px-4 py-3 text-left">Instansi</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : data.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">
                    Data belum tersedia
                  </td>
                </tr>
              ) : (
                data.map((p) => (
                  <tr
                    key={p.id}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {p.namaPegawai}
                    </td>
                    <td className="px-4 py-3">{p.nip}</td>
                    <td className="px-4 py-3">{p.jabatan}</td>
                    <td className="px-4 py-3">
                      {p.pangkat} / {p.golongan}
                    </td>
                    <td className="px-4 py-3">
                      {p.instansi?.nama || '-'}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-blue-600 hover:underline text-xs mr-2">
                        Edit
                      </button>
                      <button className="text-red-500 hover:underline text-xs">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}