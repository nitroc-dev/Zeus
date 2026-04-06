import { FolderOpen, Phone } from "lucide-react";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export async function CTA() {
  const t = await getTranslations("cta");
  const locale = await getLocale();

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          {t("title")}
        </h2>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t("description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
}
