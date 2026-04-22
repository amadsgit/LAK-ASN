import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, Role } from "@/generated/prisma/client";
import bcrypt from "bcryptjs";
import { z } from "zod";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nip: { label: "NIP", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // validasi input
        const schema = z.object({
          nip: z.string().min(5),
          password: z.string().min(1),
        });

        const { nip, password } = schema.parse(credentials);

        // cari user
        const user = await prisma.user.findUnique({
          where: { nip },
          include: {
            pegawai: true,
          },
        });

        if (!user) {
          throw new Error("Pengguna tidak ditemukan");
        }

        // cek password
        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
          throw new Error("Password salah");
        }

        // return data ke session
        return {
          id: user.id.toString(),
          name: user.pegawai.namaPegawai,
          nip: user.nip,
          role: user.role as Role,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.nip = user.nip;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
        session.user.nip = token.nip as string;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/", // karena login di page utama
  },

  secret: process.env.NEXTAUTH_SECRET,
};