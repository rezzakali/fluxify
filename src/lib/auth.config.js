export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    // Protecting your routes with Next.js Middleware

    // This will prevent users from accessing the admin,blog pages unless they are logged in.
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith('/admin');
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');
      const isOnRegisterPage =
        request.nextUrl?.pathname.startsWith('/register');

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
      if (isOnBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE REGISTER PAGE
      if (isOnRegisterPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }

      return true;
    },
  },
};
