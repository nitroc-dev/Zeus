"use client";
import { FolderOpen, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

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

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/hero.svg"
              alt="Developer coding illustration"
              width={350}
              height={300}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
