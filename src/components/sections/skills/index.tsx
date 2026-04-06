import { getTranslations } from "next-intl/server";
import { getLocalizedSkills } from "@/data/hardcoded-data";

const DEVICON_MAP: Record<string, string> = {
  HTML5: "devicon-html5-plain colored",
  CSS3: "devicon-css3-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  C: "devicon-c-plain colored",
  "C#": "devicon-csharp-plain colored",
  Java: "devicon-java-plain colored",
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-plain",
  NestJS: "devicon-nestjs-plain colored",
  ".NET": "devicon-dot-net-plain colored",
  "Express.js": "devicon-express-original",
  "Spring Boot": "devicon-spring-plain colored",
  MySQL: "devicon-mysql-plain colored",
  PostgreSQL: "devicon-postgresql-plain colored",
  MongoDB: "devicon-mongodb-plain colored",
  Docker: "devicon-docker-plain colored",
  Git: "devicon-git-plain colored",
  GitHub: "devicon-github-original",
  "GitHub Actions": "devicon-githubactions-plain colored",
};

const CATEGORY_COLORS = [
  { bg: "bg-blue-500/10", border: "border-blue-500/20", icon: "bg-blue-500/20 text-blue-400" },
  { bg: "bg-green-500/10", border: "border-green-500/20", icon: "bg-green-500/20 text-green-400" },
  { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "bg-orange-500/20 text-orange-400" },
];

export async function Skills() {
  const t = await getTranslations("skills");
  const skills = getLocalizedSkills(await getTranslations("skillCategories"));

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => {
            const colors = CATEGORY_COLORS[index];
            return (
              <div key={skillCategory.id} className={`rounded-xl border p-6 ${colors.bg} ${colors.border}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${colors.icon}`}>
                    {skillCategory.icon}
                  </div>
                  <h3 className="font-semibold text-white">{skillCategory.label}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {skillCategory.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-2 rounded-lg bg-gray-900/50 px-3 py-2 border border-gray-700/40"
                    >
                      {DEVICON_MAP[tech] && (
                        <i className={`${DEVICON_MAP[tech]} text-base shrink-0`} />
                      )}
                      <span className="text-xs text-gray-300 truncate">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
