import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// ==============================
// GET: Ambil semua pegawai
// ==============================
export async function GET() {
  try {
    const pegawai = await prisma.pegawai.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        instansi: {
          select: { id: true, nama: true },
        },
        user: {
          select: { id: true, role: true },
        },
      },
    });

    return NextResponse.json(pegawai);
  } catch (error) {
    console.error('[GET pegawai]', error);
    return NextResponse.json(
      { error: 'Gagal mengambil data pegawai' },
      { status: 500 }
    );
  }
}

// ==============================
// POST: Tambah pegawai
// ==============================
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      namaPegawai,
      nip,
      tempatLahir,
      tanggalLahir,
      jenisKelamin,
      jabatan,
      pangkat,
      golongan,
      instansiId,
    } = body;

    if (!namaPegawai || !nip) {
      return NextResponse.json(
        { error: 'Nama dan NIP wajib diisi' },
        { status: 400 }
      );
    }

    // cek NIP unik
    const existing = await prisma.pegawai.findUnique({
      where: { nip },
    });

    if (existing) {
      return NextResponse.json(
        { error: 'NIP sudah terdaftar' },
        { status: 400 }
      );
    }

    const newPegawai = await prisma.pegawai.create({
      data: {
        namaPegawai,
        nip,
        tempatLahir,
        tanggalLahir: new Date(tanggalLahir),
        jenisKelamin,
        jabatan,
        pangkat,
        golongan,
        instansiId,
      },
    });

    return NextResponse.json({
      message: 'Pegawai berhasil ditambahkan',
      data: newPegawai,
    });
  } catch (error) {
    console.error('[POST pegawai]', error);
    return NextResponse.json(
      { error: 'Gagal menambahkan pegawai' },
      { status: 500 }
    );
  }
}