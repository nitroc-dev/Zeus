export const protectedRoutes = ["/dashboard"];

export const authRoutes = ["/auth/login", "/auth/register"];

export const allRoutes = [...protectedRoutes, ...authRoutes];
