"use client";

import { authClient, useSession } from "@/lib/auth-client";

export function useAuth() {
  const { data: session, isPending } = useSession();

  return {
    session,
    isLoading: isPending,
    isAuthenticated: !!session,
    user: session?.user || null,
    signOut: authClient.signOut,
  };
}
