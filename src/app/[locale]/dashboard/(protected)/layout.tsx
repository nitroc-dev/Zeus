import { headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { env } from "@/lib/env";

async function getSession() {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/api/auth/get-session`, {
      headers: await headers(),
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.session ?? null;
  } catch {
    return null;
  }
}

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, locale] = await Promise.all([getSession(), getLocale()]);

  if (!session) {
    redirect({ href: "/dashboard/login", locale });
  }

  return (
    <div className="flex h-screen bg-gray-950">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
