"use client";

import ProjectCard from "@/components/cards/project";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/hardcoded-data";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Center first card on mount
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.firstChild as HTMLElement;
    if (!card) return;
    const offset =
      card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  return (
    <section className="px-6 py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-10 text-3xl font-bold text-gray-50">
          Featured Projects
        </h2>

        <div
          ref={scrollRef}
          className="flex justify-center gap-6 px-2 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
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

        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-200"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
