'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { getFlatMenuByRole } from './navbar-links';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const role = session?.user?.role || 'guest';
  const flatMenu = getFlatMenuByRole(role);

  const renderIcon = (Icon: any) => <Icon className="w-5 h-5" />;

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="
        md:hidden
        bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500
        text-white p-4 flex justify-between items-center shadow-md
      ">
        <span className="font-semibold tracking-wide">SI-LAK ASN</span>
        <button
          onClick={() => setOpen(!open)}
          className="hover:opacity-80 transition"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* OVERLAY (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={clsx(
          `
          fixed md:relative inset-y-0 left-0 w-64 z-50
          transition-transform duration-300 ease-in-out
          bg-gradient-to-b from-slate-900/95 to-slate-800/90
          text-gray-200
          border-r border-white/10
          shadow-[0_0_40px_rgba(59,130,246,0.15)]
          backdrop-blur-xl
          `,
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="flex flex-col h-screen justify-between">

          {/* HEADER */}
          <div>
            <div className="p-5 border-b border-white/10">
              <h1 className="
                text-xl font-bold
                bg-gradient-to-r from-indigo-400 to-cyan-400
                bg-clip-text text-transparent
              ">
                SI-LAK ASN
              </h1>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Sistem Informasi Lembar Aksi Kegiatan Pegawai
              </p>
            </div>

            {/* MENU */}
            <nav className="px-3 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-8rem)]">
              {flatMenu.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      `
                      flex items-center gap-3 px-3 py-2.5 rounded-xl
                      font-medium transition-all duration-200 group
                      `,
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg'
                        : 'hover:bg-white/5 hover:text-cyan-300 hover:scale-[1.02]'
                    )}
                  >
                    {/* ICON */}
                    <span
                      className={clsx(
                        'transition-all duration-200 group-hover:scale-110',
                        isActive ? 'text-white' : 'text-cyan-400'
                      )}
                    >
                      {renderIcon(Icon)}
                    </span>

                    {/* LABEL */}
                    <span className="text-sm tracking-wide">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* FOOTER */}
          <div className="border-t border-white/10 px-4 py-3 text-xs text-center text-gray-400">
            © {new Date().getFullYear()} SI-LAK ASN
          </div>

        </div>
      </aside>
    </>
  );
}