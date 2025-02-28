import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hashSync } from "bcrypt";
import { prisma } from "@/prisma/prisma-client";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        
        const values = { email: credentials.email };

        if (!values) {
          return null;
        }

        const findUser = await prisma.user.findFirst({ where: values });

        if (!findUser) {
          return null;
        }

        const isValidPassword = await compare(credentials.password, findUser.password);

        if (!isValidPassword) {
          return null;
        }

        return {
          id: findUser.id.toString(),
          email: findUser.email,
          name: findUser.name,
          role: findUser.role,
        }

      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github") {
        try {
          const existingUser = await prisma.user.findUnique({ where: { email: user.email as string } });

          if (!existingUser) {
            await prisma.user.create({
              data: {
                name: user.name  as string,
                email: user.email as string,
                password: hashSync(user.id.toString(), 10),
                provider: account.provider,
                providerId: account.providerAccountId,
              },
            });
          }

          return true;
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false;
        }
      }
      return true;
    },
  },
};
