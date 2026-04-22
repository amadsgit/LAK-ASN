import { PrismaClient, Role } from "@/generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding data...");

  const instansi = await prisma.instansi.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nama: "UPTD Puskesmas Cikalapa",
    },
  });

  const passwordHash = await bcrypt.hash("password123", 10);

  // ========================
  // 1. KASUBAG TU
  // ========================
  const kasubag = await prisma.pegawai.upsert({
    where: { nip: "198112242010012014" },
    update: {},
    create: {
      instansiId: instansi.id,
      namaPegawai: "Dedi Ruhandi, SKM., MM",
      nip: "198112242010012014",
      tempatLahir: "Subang",
      tanggalLahir: new Date("1981-12-24"),
      jenisKelamin: "Laki-laki",
      jabatan: "Kasubag TU",
      pangkat: "Pembina",
      golongan: "IV/a",
    },
  });

  await prisma.user.upsert({
    where: { pegawaiId: kasubag.id },
    update: {},
    create: {
      pegawaiId: kasubag.id,
      instansiId: instansi.id,
      nip: kasubag.nip,
      password: passwordHash,
      role: Role.KASUBAG_TU,
    },
  });

  // ========================
  // 2. PEGAWAI (ROHAYATI)
  // ========================
  const pegawai = await prisma.pegawai.upsert({
    where: { nip: "199006032019032003" },
    update: {},
    create: {
      instansiId: instansi.id,
      namaPegawai: "Rohayati, SKM",
      nip: "199006032019032003",
      tempatLahir: "Bekasi",
      tanggalLahir: new Date("1990-06-03"),
      jenisKelamin: "Perempuan",
      jabatan: "Penyuluh Kesehatan Masyarakat",
      pangkat: "Penata",
      golongan: "III/c",
    },
  });

  await prisma.user.upsert({
    where: { pegawaiId: pegawai.id },
    update: {},
    create: {
      pegawaiId: pegawai.id,
      instansiId: instansi.id,
      nip: pegawai.nip,
      password: passwordHash,
      role: Role.PEGAWAI,
    },
  });

  console.log("✅ Seed selesai");
  console.log("👤 KASUBAG TU:");
  console.log("NIP      :", kasubag.nip);

  console.log("👤 PEGAWAI:");
  console.log("NIP      :", pegawai.nip);
  console.log("Password :", "password123");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());