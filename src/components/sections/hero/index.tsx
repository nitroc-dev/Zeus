import { FolderOpen, Phone } from "lucide-react";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export async function Hero() {
  const t = await getTranslations("hero");
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
            </div>
          </div>

          {/* TODO: Add hero illustration here */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="w-[350px] h-[300px] rounded-2xl border border-gray-700 bg-gray-800/30 flex items-center justify-center text-gray-600 text-sm">
              Illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
