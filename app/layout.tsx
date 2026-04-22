import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./ui/globals.css";
import NextAuthSession from "./NextAuthSession";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SI-LAK ASN Puskesmas Cikalapa",
  description: "Sistem Informasi Lembar Aksi Kegiatan pegawai ",
  icons: {
    icon: "/logopkm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextAuthSession>
           <Toaster position="top-center" reverseOrder={false} />
          {children}
        </NextAuthSession> 
      </body>
    </html>
  );
}
