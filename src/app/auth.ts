import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

import saveUserToDatabase from "@/lib/queries/saveUserToDatabase";

declare module "next-auth" {
  interface Session {
    githubId?: string;
  }
  interface JWT {
    githubId?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  providers: [GitHub],
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (!account?.providerAccountId) {
          throw new Error("GitHub account data is missing");
        }
        await saveUserToDatabase({
          name: user.name || "",
          email: user.email || "",
          image: user.image || "",
          githubId: account.providerAccountId,
        });

        return true; // Allow sign-in
      } catch (error) {
        console.error("Error saving user to database:", error);
        return "/auth/signup"; // Return false or a URL string to deny sign-in or redirect.
      }
    },
    async jwt({ token, account }) {
      if (account?.providerAccountId) {
        token.githubId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.githubId) {
        session.githubId = token.githubId as string;
      }
      return session;
    },
  },
});
