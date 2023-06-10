import {
  DefaultSession,
  NextAuthOptions,
  getServerSession as getNextAuthServerSession,
} from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getEnvironment } from "@/internal/environment";
import { PrismaClient } from "@prisma/client";
import { Adapter, AdapterUser } from "next-auth/adapters";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export type AuthSession = DefaultSession & { user: AdapterUser };

export const AUTH_OPTIONS = Object.freeze<NextAuthOptions>({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: getEnvironment().GITHUB_ID,
      clientSecret: getEnvironment().GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: getEnvironment().GOOGLE_ID,
      clientSecret: getEnvironment().GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    session: ({ session, user }) => {
      session.user = user;

      return session as AuthSession;
    },
  },
});

export const getServerSession = (req: NextApiRequest, res: NextApiResponse) => {
  return getNextAuthServerSession<NextAuthOptions, AuthSession>(
    req,
    res,
    AUTH_OPTIONS
  );
};
