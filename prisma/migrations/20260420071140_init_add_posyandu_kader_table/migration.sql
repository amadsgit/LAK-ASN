/*
  Warnings:

  - The values [KASUBAG] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `LakReport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `jumlahHariKerja` on the `LakReport` table. All the data in the column will be lost.
  - You are about to drop the column `pegawaiId` on the `LakReport` table. All the data in the column will be lost.
  - You are about to drop the column `totalMenit` on the `LakReport` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `LakReport` table. All the data in the column will be lost.
  - The `id` column on the `LakReport` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `LakReport` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `pegawaiId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Jabatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LakKegiatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MonitoringLak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pegawai` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reminder` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UnitKerja` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId,bulan,tahun]` on the table `LakReport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nip]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `LakReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jabatan` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nip` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('DRAFT', 'DIKIRIM', 'DISETUJUI');

-- CreateEnum
CREATE TYPE "JenisTugas" AS ENUM ('TJ', 'TT');

-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('PEGAWAI', 'KASUBAG_TU');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "LakKegiatan" DROP CONSTRAINT "LakKegiatan_lakReportId_fkey";

-- DropForeignKey
ALTER TABLE "LakReport" DROP CONSTRAINT "LakReport_pegawaiId_fkey";

-- DropForeignKey
ALTER TABLE "MonitoringLak" DROP CONSTRAINT "MonitoringLak_pegawaiId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_jabatanId_fkey";

-- DropForeignKey
ALTER TABLE "Pegawai" DROP CONSTRAINT "Pegawai_unitId_fkey";

-- DropForeignKey
ALTER TABLE "Reminder" DROP CONSTRAINT "Reminder_pegawaiId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_pegawaiId_fkey";

-- DropIndex
DROP INDEX "LakReport_pegawaiId_bulan_tahun_key";

-- DropIndex
DROP INDEX "LakReport_pegawaiId_idx";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_pegawaiId_key";

-- AlterTable
ALTER TABLE "LakReport" DROP CONSTRAINT "LakReport_pkey",
DROP COLUMN "jumlahHariKerja",
DROP COLUMN "pegawaiId",
DROP COLUMN "totalMenit",
DROP COLUMN "updatedAt",
ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "totalJam" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalJamTJ" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalJamTT" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "totalKegiatan" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "ReportStatus" NOT NULL DEFAULT 'DRAFT',
ADD CONSTRAINT "LakReport_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "email",
DROP COLUMN "pegawaiId",
DROP COLUMN "updatedAt",
ADD COLUMN     "instansiId" INTEGER,
ADD COLUMN     "jabatan" TEXT NOT NULL,
ADD COLUMN     "nip" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'PEGAWAI',
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Jabatan";

-- DropTable
DROP TABLE "LakKegiatan";

-- DropTable
DROP TABLE "MonitoringLak";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Pegawai";

-- DropTable
DROP TABLE "Reminder";

-- DropTable
DROP TABLE "UnitKerja";

-- DropEnum
DROP TYPE "LakStatus";

-- CreateTable
CREATE TABLE "Instansi" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Instansi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LakDetail" (
    "id" SERIAL NOT NULL,
    "reportId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "jenisTugas" "JenisTugas" NOT NULL,
    "uraianKegiatan" TEXT NOT NULL,
    "volume" DOUBLE PRECISION,
    "satuan" TEXT,
    "output" TEXT,
    "jamMulai" TEXT,
    "jamSelesai" TEXT,
    "durasiJam" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LakDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LakReport_userId_bulan_tahun_key" ON "LakReport"("userId", "bulan", "tahun");

-- CreateIndex
CREATE UNIQUE INDEX "User_nip_key" ON "User"("nip");

-- AddForeignKey
ALTER TABLE "LakReport" ADD CONSTRAINT "LakReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LakDetail" ADD CONSTRAINT "LakDetail_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "LakReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
