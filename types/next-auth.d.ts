import { DefaultSession } from "next-auth";
import { Role } from "@/generated/prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      nip: string;
      role: Role;
      name?: string;
    };
  }

  interface User {
    id: string;
    nip: string;
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    nip: string;
    role: Role;
  }
}