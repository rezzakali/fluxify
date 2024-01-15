import dbConnect from '@/config/dbConnect';
import User from '@/models/userSchema';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { authConfig } from './auth.config';

const login = async (credentials) => {
  try {
    const { username, password } = credentials || {};
    dbConnect();
    const user = await User.findOne({ username });

    if (!user) throw new Error('Invalid credentials!');

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) throw new Error('Invalid credentials!');

    return user;
  } catch (err) {
    throw new Error('Failed to login!');
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === 'github') {
        dbConnect();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
