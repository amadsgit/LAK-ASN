'use client';

import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';

type CustomSession = {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
};

export default function TopNavbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession() as { data: CustomSession | null };

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' }); // hapus custom cookie
      await signOut({ callbackUrl: '/' }); // NextAuth handle sisanya
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="
        sticky top-0 z-40
        bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500
        text-white shadow-lg backdrop-blur-md border-b border-white/10
      ">
        <div className="px-6 py-3 flex justify-between items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-lg font-semibold">Puskesmas Cikalapa</h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* ONLINE */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 animate-ping opacity-70"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-100">ONLINE</span>
            </div>

            {/* PROFILE */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-full hover:bg-white/10"
              >
                <Image
                  src="/akun.png"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full border border-white/30"
                />
                <span className="hidden md:block text-sm">
                  {session?.user?.name || 'User'}
                </span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white text-gray-700 rounded-xl shadow-xl border overflow-hidden">
                  <div className="px-4 py-2 text-sm font-semibold bg-gray-50 border-b">
                    {session?.user?.role || 'User'}
                  </div>

                  <button
                    onClick={() => {
                      setShowLogoutModal(true);
                      setIsProfileOpen(false);
                    }}
                    className="flex items-center gap-2 w-full px-4 py-2.5 text-sm hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    Log Out
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* MODAL LOGOUT */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm animate-in fade-in zoom-in-95">
            
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Konfirmasi Logout
            </h2>
            <p className="text-gray-600 mb-5">
              Apakah Anda yakin ingin keluar?
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Ya, Logout
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}