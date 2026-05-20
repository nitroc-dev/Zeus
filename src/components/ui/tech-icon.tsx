import {
  siAstro,
  siCss,
  siDocker,
  siDotnet,
  siExpo,
  siExpress,
  siGit,
  siGithub,
  siGithubactions,
  siGo,
  siGraphql,
  siHtml5,
  siJavascript,
  siMongodb,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRedis,
  siSpring,
  siSqlite,
  siSupabase,
  siSvelte,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVuedotjs,
} from "simple-icons";

type SimpleIcon = { path: string; hex: string };

const iconMap: Record<string, SimpleIcon> = {
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Python: siPython,
  Go: siGo,
  React: siReact,
  "React Native": siReact,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  NestJS: siNestjs,
  ".NET": siDotnet,
  Express: siExpress,
  Spring: siSpring,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  SQLite: siSqlite,
  Redis: siRedis,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  "GitHub Actions": siGithubactions,
  Supabase: siSupabase,
  "Tailwind CSS": siTailwindcss,
  Tailwind: siTailwindcss,
  Expo: siExpo,
  Prisma: siPrisma,
  GraphQL: siGraphql,
  Astro: siAstro,
  "Vue.js": siVuedotjs,
  Svelte: siSvelte,
  Vercel: siVercel,
};

interface TechIconProps {
  name: string;
  size?: number;
  branded?: boolean;
}

export function TechIcon({ name, size = 13, branded = false }: TechIconProps) {
  const icon = iconMap[name];
  if (!icon) return null;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={branded ? `#${icon.hex}` : "currentColor"}
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={icon.path} />
    </svg>
  );
}
