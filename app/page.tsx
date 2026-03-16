'use client';

import { useState } from "react";
import { User, Lock } from "lucide-react";

export default function Home() {
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nip, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 p-6">
      
      <div className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            LAK ASN
          </h1>
          <p className="text-gray-500 text-sm">
            Sistem Lembar Aksi Kegiatan ASN <br />
            UPTD Puskesmas Cikalapa
          </p>
        </div>

        {/* Form Login */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Input NIP */}
          <div>
            <label className="text-sm text-gray-600">NIP</label>
            <div className="flex items-center mt-1 border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Masukkan NIP"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
                autoFocus
              />
            </div>
          </div>

          {/* Input Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="flex items-center mt-1 border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Button Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Sistem LAK ASN
        </div>

      </div>
    </div>
  );
}