/*
  Warnings:

  - You are about to drop the column `userId` on the `LakReport` table. All the data in the column will be lost.
  - You are about to drop the column `jabatan` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `nip` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(18)`.
  - A unique constraint covering the columns `[pegawaiId,bulan,tahun]` on the table `LakReport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pegawaiId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pegawaiId` to the `LakReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pegawaiId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LakDetail" DROP CONSTRAINT "LakDetail_reportId_fkey";

-- DropForeignKey
ALTER TABLE "LakReport" DROP CONSTRAINT "LakReport_userId_fkey";

-- DropIndex
DROP INDEX "LakReport_userId_bulan_tahun_key";

-- AlterTable
ALTER TABLE "LakReport" DROP COLUMN "userId",
ADD COLUMN     "pegawaiId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "jabatan",
DROP COLUMN "name",
ADD COLUMN     "pegawaiId" INTEGER NOT NULL,
ALTER COLUMN "nip" SET DATA TYPE VARCHAR(18);

-- CreateTable
CREATE TABLE "Pegawai" (
    "id" SERIAL NOT NULL,
    "instansiId" INTEGER,
    "foto" TEXT,
    "namaPegawai" VARCHAR(100) NOT NULL,
    "nip" VARCHAR(18) NOT NULL,
    "tempatLahir" VARCHAR(100) NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "jenisKelamin" VARCHAR(20) NOT NULL,
    "jabatan" VARCHAR(50) NOT NULL,
    "pangkat" VARCHAR(50) NOT NULL,
    "golongan" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pegawai_nip_key" ON "Pegawai"("nip");

-- CreateIndex
CREATE INDEX "LakDetail_reportId_idx" ON "LakDetail"("reportId");

-- CreateIndex
CREATE INDEX "LakReport_pegawaiId_tahun_idx" ON "LakReport"("pegawaiId", "tahun");

-- CreateIndex
CREATE UNIQUE INDEX "LakReport_pegawaiId_bulan_tahun_key" ON "LakReport"("pegawaiId", "bulan", "tahun");

-- CreateIndex
CREATE UNIQUE INDEX "User_pegawaiId_key" ON "User"("pegawaiId");

-- AddForeignKey
ALTER TABLE "Pegawai" ADD CONSTRAINT "Pegawai_instansiId_fkey" FOREIGN KEY ("instansiId") REFERENCES "Instansi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_instansiId_fkey" FOREIGN KEY ("instansiId") REFERENCES "Instansi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LakReport" ADD CONSTRAINT "LakReport_pegawaiId_fkey" FOREIGN KEY ("pegawaiId") REFERENCES "Pegawai"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LakDetail" ADD CONSTRAINT "LakDetail_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "LakReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
