import { PrismaClient, Role } from "@/generated/prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding data...");

  // optional: buat instansi dulu (biar rapi)
  const instansi = await prisma.instansi.upsert({
    where: { id: 1 },
    update: {},
    create: {
      nama: "UPTD Puskesmas Cikalapa",
    },
  });

  // password default
  const passwordHash = await bcrypt.hash("password123", 10);

  // 1. Pegawai (Kasubag TU)
  const pegawai = await prisma.pegawai.upsert({
    where: {
      nip: "197001011999031001",
    },
    update: {},
    create: {
      instansiId: instansi.id,
      namaPegawai: "Dedi ruhandi,SKM.,MM",
      nip: "198112242010012014",
      tempatLahir: "Subang",
      tanggalLahir: new Date("1981-12-24"),
      jenisKelamin: "Laki-laki",
      jabatan: "Kasubag TU",
      pangkat: "Pembina",
      golongan: "IV/a",
    },
  });

  // 2. User login
  await prisma.user.upsert({
    where: {
      pegawaiId: pegawai.id,
    },
    update: {},
    create: {
      pegawaiId: pegawai.id,
      instansiId: instansi.id,
      nip: pegawai.nip,
      password: passwordHash,
      role: Role.KASUBAG_TU,
    },
  });

  console.log("✅ Seed selesai");
  console.log("👤 Login:");
  console.log("NIP      :", pegawai.nip);
  console.log("Password :", "password123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });