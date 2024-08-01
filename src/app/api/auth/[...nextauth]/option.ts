import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import prisma from '@/utils/globalPrisma';


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials: any): Promise<any> {
        const userExist = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userExist) {
          return null;
        }

        const isValidPassword = await bcrypt.compare(credentials.password, userExist.password);

        if (!isValidPassword) {
          return null;
        }

        return { id: userExist.id, name: userExist.name, email: userExist.email, role: userExist.role };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  },

  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',
  },
};
