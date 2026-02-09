"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/cards/project";
import { Button } from "@/components/ui/button";
import { getLocalizedProjects } from "@/data/hardcoded-data";

export function Projects() {
  const t = useTranslations("projects");
  const projects = getLocalizedProjects(useTranslations("projectsData"));
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.firstChild as HTMLElement;
    if (!card) return;
    const offset =
      card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth =
      container.firstChild instanceof HTMLElement
        ? container.firstChild.offsetWidth + 24
        : 300;

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-6 py-24 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex justify-center gap-6 px-2 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar mb-8"
        >
          {projects?.map((project) => (
            <div
              key={project.id}
              className="shrink-0 snap-center w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="bg-gray-800/50 border-gray-700 hover:bg-gray-700 text-gray-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="bg-gray-800/50 border-gray-700 hover:bg-gray-700 text-gray-200"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
