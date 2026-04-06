import { Download, FolderOpen, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { Button } from "@/components/ui/button";

export async function Hero() {
  const t = await getTranslations("hero");
  const tAbout = await getTranslations("about");
  const locale = await getLocale();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-20 backdrop-blur-sm">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-50 leading-tight">
                {t("greeting")}{" "}
                <span className="text-blue-600">{t("name")}</span>
              </h1>
            </div>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href={`/${locale}/contact`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {t("getInTouch")}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Link href={`/${locale}/projects`}>
                  <FolderOpen className="w-4 h-4 mr-2" />
                  {t("viewProjects")}
                </Link>
              </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    {t("downloadCV")}
                  </Link>
                </Button>
            </div>
          </div>

          {/* Profile card */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-gray-700/50 bg-gray-800/30 overflow-hidden">
              <div className="h-20 bg-gradient-to-br from-blue-600/30 to-purple-600/30" />
              <div className="px-6 pb-6">
                <div className="-mt-10 mb-4">
                  <Image
                    src="/profile.png"
                    alt="Corentin"
                    width={72}
                    height={72}
                    className="rounded-full border-4 border-gray-950 bg-gray-800"
                  />
                </div>
                <div className="mb-3">
                  <h2 className="font-bold text-white text-lg">{tAbout("name")}</h2>
                  <p className="text-sm text-blue-400">{tAbout("role")}</p>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-400">
                    <MapPin className="w-3 h-3" />
                    {tAbout("location")}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  {tAbout("status")}
                </span>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["React", "Next.js", "TypeScript", ".NET", "NestJS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-gray-700/60 text-gray-300 border border-gray-600/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nitroc-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/corentin-d-02472724b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
