import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true; // Allow access to dashboard
                return false; // Redirect unauthorized users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl)); // Redirect logged-in users away from public pages
            }
            return true; // Allow access to public pages
        },
    },
    providers: [],  // Add providers with an empty array for now

} satisfies NextAuthConfig;