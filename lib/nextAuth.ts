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
import { Console } from "console";
export const authOptions: AuthOptions = {
  providers: [
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     console.log(credentials);

    //     return null;
    //   },
    // }),
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
            ? `${process.env.NEXTAUTH_URL}/home`
            : "/home", // Adjust for production vs. development
      };
      return session;
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      url = "/";
      // Allows relative callback URLs
      console.log(url, baseUrl);
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
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
