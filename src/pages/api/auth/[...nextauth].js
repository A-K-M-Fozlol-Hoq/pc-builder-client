import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    // signIn: "/login",
    signIn: "https://pc-builder-omega-flame.vercel.app/login",
  },
};

export default NextAuth(authOptions);
