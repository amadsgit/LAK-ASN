'use client';

import { useEffect, useState } from "react";
import { User, Lock, Loader2 } from "lucide-react";
import { signIn, getSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    nip: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
    isShow: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;  

  // VALIDASI REALTIME
  const handleChange = (field: string, value: string) => {
    if (field === "nip") {
      if (value.length !== 18) {
        setErrors((prev) => ({ ...prev, nip: "NIP harus 18 digit" }));
      } else {
        setErrors((prev) => ({ ...prev, nip: "" }));
      }
      setNip(value);
    }

    if (field === "password") {
      if (value.length < 8) {
        setErrors((prev) => ({ ...prev, password: "Minimal 8 karakter" }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
      setPassword(value);
    }
  };

  // HANDLE LOGIN
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // validasi sebelum submit
    if (errors.nip || errors.password || !nip || !password) {
      setAlert({
        type: "error",
        message: "Periksa kembali input Anda",
        isShow: true,
      });
      return;
    }

    setIsLoading(true);
    setAlert({ type: "", message: "", isShow: false });

    const res = await signIn("credentials", {
      nip,
      password,
      redirect: false,
    });

    if (res?.error) {
      setAlert({
        type: "error",
        message: res.error,
        isShow: true,
      });
      setIsLoading(false);
      return;
    }

    const session = await getSession();
    const role = session?.user?.role;

    toast.success("Login berhasil, selamat datang kembali!");

    let redirectTo = "/dashboard";

    switch (role) {
      case "KASUBAG_TU":
        redirectTo = "/dashboard/kasubagtu";
        break;
      case "PEGAWAI":
        redirectTo = "/dashboard/pegawai";
        break;
    }

    setTimeout(() => {
      router.replace(redirectTo);
    }, 800);

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 p-6">
      
      <div className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            SI-LAK ASN
          </h1>
          <p className="text-gray-500 text-sm">
            Sistem Informasi Lembar Aksi Kegiatan Pegawai <br />
            UPTD Puskesmas Cikalapa
          </p>
        </div>

        {/* ALERT */}
        {alert.isShow && (
          <div className="mb-4 rounded-lg bg-red-100 text-red-700 px-4 py-2 text-sm">
            {alert.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* NIP */}
          <div>
            <label className="text-sm text-gray-600">NIP</label>
            <div className={`flex items-center mt-1 border rounded-lg px-3 ${
              errors.nip ? "border-red-500" : "focus-within:ring-2 focus-within:ring-blue-500"
            }`}>
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Masukkan NIP"
                value={nip}
                maxLength={18}
                onChange={(e) => handleChange("nip", e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
            {errors.nip && (
              <p className="text-xs text-red-500 mt-1">{errors.nip}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className={`flex items-center mt-1 border rounded-lg px-3 ${
              errors.password ? "border-red-500" : "focus-within:ring-2 focus-within:ring-blue-500"
            }`}>
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => handleChange("password", e.target.value)}
                className="w-full p-2 outline-none bg-transparent"
              />
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Login"
            )}
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Sistem LAK ASN
        </div>

      </div>
    </div>
  );
}