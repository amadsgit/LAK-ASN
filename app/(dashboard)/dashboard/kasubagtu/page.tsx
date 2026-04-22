import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { PrismaClient, ReportStatus } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const now = new Date();
  const bulan = now.getMonth() + 1;
  const tahun = now.getFullYear();

  //  Total Pegawai
  const totalPegawai = await prisma.pegawai.count();

  //  Sudah submit (DIKIRIM + DISETUJUI)
  const totalSubmit = await prisma.lakReport.count({
    where: {
      bulan,
      tahun,
      status: {
        in: [ReportStatus.DIKIRIM, ReportStatus.DISETUJUI],
      },
    },
  });

  //  Belum submit
  const belumKumpul = totalPegawai - totalSubmit;

  //  Persentase
  const persen =
    totalPegawai > 0
      ? Math.round((totalSubmit / totalPegawai) * 100)
      : 0;

  //  Pegawai yang BELUM submit bulan ini
  const pegawaiBelum = await prisma.pegawai.findMany({
    where: {
      reports: {
        none: {
          bulan,
          tahun,
          status: {
            in: [ReportStatus.DIKIRIM, ReportStatus.DISETUJUI],
          },
        },
      },
    },
    take: 5,
    orderBy: {
      namaPegawai: "asc",
    },
  });


  //  Rekap BULANAN (tahun ini)
const monthlyStats = await prisma.lakReport.groupBy({
  by: ["bulan"],
  where: {
    tahun,
    status: {
      in: [ReportStatus.DIKIRIM, ReportStatus.DISETUJUI],
    },
  },
  _count: {
    id: true,
  },
  orderBy: {
    bulan: "asc",
  },
});

//  Rekap TAHUNAN
const yearlyStats = await prisma.lakReport.groupBy({
  by: ["tahun"],
  where: {
    status: {
      in: [ReportStatus.DIKIRIM, ReportStatus.DISETUJUI],
    },
  },
  _count: {
    id: true,
  },
  orderBy: {
    tahun: "asc",
  },
});


const bulanIndonesia = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard Kasubag TU
        </h1>
        <p className="text-sm text-gray-500">
          Monitoring LAK bulan{" "}
          <span className="font-bold text-green-500">
            {bulanIndonesia[bulan - 1]}
          </span>{" "}
          tahun{" "}
          <span className="font-bold text-green-500">
            {tahun}
          </span>
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-white rounded-xl shadow p-5 border">
          <p className="text-sm text-gray-500">Total Pegawai</p>
          <h2 className="text-2xl font-bold text-gray-800">
            {totalPegawai}
          </h2>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl shadow p-5">
          <p className="text-sm opacity-80">Sudah Submit</p>
          <h2 className="text-2xl font-bold">
            {totalSubmit}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5 border">
          <p className="text-sm text-gray-500">Belum Submit</p>
          <h2 className="text-2xl font-bold text-red-500">
            {belumKumpul}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-5 border">
          <p className="text-sm text-gray-500">Kepatuhan</p>
          <h2 className="text-2xl font-bold text-green-600">
            {persen}%
          </h2>

          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"
              style={{ width: `${persen}%` }}
            />
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* BELUM SUBMIT */}
        <div className="bg-white rounded-xl shadow border p-5">
          <h3 className="font-semibold text-gray-800 mb-3">
            Pegawai Belum Submit
          </h3>

          <ul className="space-y-2">
            {pegawaiBelum.length === 0 ? (
              <p className="text-sm text-green-600">
                Semua pegawai sudah submit 🎉
              </p>
            ) : (
              pegawaiBelum.map((p) => (
                <li
                  key={p.id}
                  className="flex justify-between text-sm border-b pb-1"
                >
                  <span>{p.namaPegawai}</span>
                  <span className="text-red-500 text-xs">
                    Belum
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* INFO PANEL */}
        <div className="bg-gradient-to-br from-indigo-600 to-cyan-500 text-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-2">
            Informasi Sistem
          </h3>

          <p className="text-sm opacity-90">
            Monitoring laporan LAK pegawai berdasarkan bulan aktif.
            Status dihitung dari laporan yang sudah dikirim atau disetujui.
          </p>

          <div className="mt-4 text-sm">
            <p>Login sebagai:</p>
            <p className="font-semibold">
              {session?.user?.name}
            </p>
          </div>
        </div>

      </div>

      {/* REKAP */}
<div className="grid md:grid-cols-2 gap-6">

  {/* REKAP BULANAN */}
  <div className="bg-white rounded-xl shadow border p-5">
    <h3 className="font-semibold text-gray-800 mb-4">
      Rekap Bulanan ({tahun})
    </h3>

    <div className="space-y-2">
      {Array.from({ length: 12 }, (_, i) => {
        const bulanKe = i + 1;
        const data = monthlyStats.find((m) => m.bulan === bulanKe);

        const jumlah = data?._count.id || 0;
        const persen =
          totalPegawai > 0
            ? Math.round((jumlah / totalPegawai) * 100)
            : 0;

        return (
          <div key={bulanKe} className="text-sm">
            <div className="flex justify-between">
              <span>Bulan {bulanKe}</span>
              <span className="font-semibold">
                {jumlah} ({persen}%)
              </span>
            </div>

            <div className="h-2 bg-gray-200 rounded mt-1">
              <div
                className="h-2 rounded bg-gradient-to-r from-indigo-600 to-cyan-500"
                style={{ width: `${persen}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* REKAP TAHUNAN */}
  <div className="bg-white rounded-xl shadow border p-5">
    <h3 className="font-semibold text-gray-800 mb-4">
      Rekap Tahunan
    </h3>

    <div className="space-y-3">
      {yearlyStats.length === 0 ? (
        <p className="text-sm text-gray-400">
          Belum ada data
        </p>
      ) : (
        yearlyStats.map((y) => {
          const persen =
            totalPegawai > 0
              ? Math.round((y._count.id / (totalPegawai * 12)) * 100)
              : 0;

          return (
            <div key={y.tahun} className="text-sm">
              <div className="flex justify-between">
                <span>Tahun {y.tahun}</span>
                <span className="font-semibold">
                  {y._count.id} laporan
                </span>
              </div>

              <div className="h-2 bg-gray-200 rounded mt-1">
                <div
                  className="h-2 rounded bg-gradient-to-r from-indigo-600 to-cyan-500"
                  style={{ width: `${persen}%` }}
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  </div>

</div>
    </div>
  );
}