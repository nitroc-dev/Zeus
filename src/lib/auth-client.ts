import { createAuthClient } from "better-auth/react";
import { env } from "./env";

export const authClient = createAuthClient({
  baseURL: `${env.NEXT_PUBLIC_API_URL}/api/auth`,
});

export const { signUp, signIn, signOut, useSession } = authClient;
