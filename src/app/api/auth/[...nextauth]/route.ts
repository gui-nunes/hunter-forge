import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

if (!process.env.DISCORD_CLIENT_ID || !process.env.DISCORD_CLIENT_SECRET) {
  console.log('Missing environment variables for Discord OAuth');
  throw new Error('Missing environment variables for Discord OAuth');
}

const handler = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: `https://discord.com/api/oauth2/authorize?scope=${['identify', 'email'].join(' ')}`,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub!;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };
