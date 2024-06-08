import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "@/lib/nextAuth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
