"use client";

import {
  Briefcase,
  Cpu,
  ExternalLink,
  FolderOpen,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Settings2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  {
    href: "/dashboard/projects",
    label: "Projects",
    icon: FolderOpen,
    exact: false,
  },
  { href: "/dashboard/skills", label: "Skills", icon: Cpu, exact: false },
  {
    href: "/dashboard/experiences",
    label: "Experiences",
    icon: Briefcase,
    exact: false,
  },
  {
    href: "/dashboard/messages",
    label: "Messages",
    icon: MessageCircle,
    exact: false,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: Settings2,
    exact: false,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function isActive(href: string, exact: boolean) {
    return exact ? pathname === href : pathname.startsWith(href);
  }

  async function handleSignOut() {
    await signOut();
    router.push("/dashboard/login");
    router.refresh();
  }

  return (
    <aside className="flex h-screen w-56 flex-col border-r border-gray-800 bg-gray-900 px-3 py-4 shrink-0">
      <div className="mb-6 px-2">
        <p className="text-sm font-semibold text-white">Zeus Admin</p>
        <p className="text-xs text-gray-500 mt-0.5">Portfolio manager</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map(({ href, label, icon: Icon, exact }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
              isActive(href, exact)
                ? "bg-blue-600/20 text-blue-400 font-medium"
                : "text-gray-400 hover:bg-gray-800 hover:text-gray-200",
            )}
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </nav>

      <div className="space-y-2">
        <Separator className="bg-gray-800" />
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          <ExternalLink size={16} />
          View portfolio
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-3 text-gray-500 hover:text-red-400 hover:bg-red-400/10"
          onClick={handleSignOut}
        >
          <LogOut size={16} />
          Sign out
        </Button>
      </div>
    </aside>
  );
}
