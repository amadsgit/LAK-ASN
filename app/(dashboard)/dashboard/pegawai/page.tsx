import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Pegawai</h1>

      <pre className="mt-4 bg-gray-100 p-4 rounded">
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  );
}