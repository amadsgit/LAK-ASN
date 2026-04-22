import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export type NavLink = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const getFlatMenuByRole = (role: string): NavLink[] => {
  switch (role) {
    case 'KASUBAG_TU':
      return [
        // DASHBOARD
        {
          name: 'Dashboard',
          href: '/dashboard/kasubagtu',
          icon: HomeIcon,
        },

        // MASTER DATA
        {
          name: 'Data Pegawai',
          href: '/dashboard/kasubagtu/pegawai',
          icon: UserGroupIcon,
        },
        {
          name: 'Data User',
          href: '/dashboard/kasubagtu/user',
          icon: UserIcon,
        },

        // LAK MANAGEMENT
        {
          name: 'Monitoring LAK',
          href: '/dashboard/kasubagtu/lak',
          icon: ClipboardDocumentListIcon,
        },
        {
          name: 'Validasi LAK',
          href: '/dashboard/kasubagtu/lak/validasi',
          icon: ClipboardDocumentCheckIcon,
        },

        // REPORT
        {
          name: 'Rekap Laporan',
          href: '/dashboard/kasubagtu/laporan',
          icon: DocumentTextIcon,
        },
      ];

    case 'PEGAWAI':
      return [
        {
          name: 'Dashboard',
          href: '/dashboard/pegawai',
          icon: HomeIcon,
        },
        {
          name: 'Isi LAK',
          href: '/dashboard/pegawai/lak',
          icon: ClipboardDocumentListIcon,
        },
        {
          name: 'Riwayat LAK',
          href: '/dashboard/pegawai/riwayat',
          icon: DocumentTextIcon,
        },
      ];

    default:
      return [];
  }
};