// import { type AuthOptions, CredentialsProvider, GoogleProvider } from "next-auth";
import NextAuth, {
  AuthOptions,
  Profile,
  Account,
  User,
  Session,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AdapterUser } from "next-auth/adapters";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

import clientPromise from "../lib/db";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn(params: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
      email?: { verificationRequest?: boolean | undefined } | undefined;
      credentials?: Record<string, any> | undefined;
    }) {
      const { user, account, profile, email, credentials } = params;
      console.log(user, account, profile, email, credentials);
      return true;
    },
    async session(params: { session: Session; user: User | AdapterUser }) {
      const { session, user } = params;
      console.log(session, user);
      return {
        ...session,
        redirectTo:
          process.env.NODE_ENV === "production"
            ? `/${process.env.NEXTAUTH_URL}`
            : "/", // Adjust for production vs. development
      };
      return session;
    },
  },
  secret: process.env.SECRET as string,
  pages: {
    signIn: "/login",
    // signOut: "/login",
    error: "/error",
    verifyRequest: "/verify-request",
    newUser: "/new-user",
  },
};
