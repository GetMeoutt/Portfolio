import type { NextAuthOptions } from "next-auth";
import { getSession } from "next-auth/react";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import OsuProvider from "next-auth/providers/osu";
import DiscordProvider from "next-auth/providers/discord";
import BattleNetProvider from "next-auth/providers/battlenet";
import prisma from "@/lib/prisma"; 
import bcrypt from "bcrypt";      

type UserType = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };

   
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("No user found with the provided email.");
        }

        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password.");
        }

        return { id: user.id.toString(), name: user.name, email: user.email };
      },
    }),
    OsuProvider({
      clientId: process.env.OSU_ID as string,
      clientSecret: process.env.OSU_SECRET as string,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_ID as string,
      clientSecret: process.env.DISCORD_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    BattleNetProvider({
      clientId: process.env.BATTLENET_ID as string,
      clientSecret: process.env.BATTLENET_SECRET as string,
      issuer: "https://us.battle.net/oauth",
    }),
  ],
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as UserType;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as UserType;
      return session;
    
    },
    async redirect({ url, baseUrl }) {
        // ✅ Always redirect to home page after login
        return baseUrl;
      },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
};
