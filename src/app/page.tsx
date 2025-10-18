"use client";

import { experiences, projects, skills } from "@/data/hardcoded-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight, FolderOpen, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import ProjectCard from "@/components/cards/project";
import { ExperienceCard } from "@/components/cards/experience";

export default function Home() {
  // useRefs
  const scrollRef = useRef<HTMLDivElement>(null);

  // useEffects
  useEffect(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const card = container.firstChild as HTMLElement;
    if (!card) return;
    const offset =
      card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, []);

  // Handlers
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
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-6 py-20 backdrop-blur-sm">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-50 leading-tight">
                  Hi, I&apos;m <span className="text-blue-600">Corentin</span>
                </h1>
              </div>

              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                A passionate full-stack developer specializing in web
                development and backend systems. I craft modern, scalable
                solutions that solve real-world problems through clean code and
                innovative thinking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Link href="/projects">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    View Projects
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

      {/* About Section */}
      <section className="relative px-6 py-24 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 mb-4">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Available for work
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Building digital experiences that matter
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              I&apos;m a passionate full-stack developer who enjoys building
              real-world solutions through clean, maintainable code and creative
              thinking. Currently working at Eachstapp while exploring new
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🏡
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Based in Belgium
              </h3>
              <p className="text-sm text-gray-400">
                Working remotely and available for collaborations worldwide
              </p>
            </div>

            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Full-Stack Focus
              </h3>
              <p className="text-sm text-gray-400">
                Specialized in modern web technologies and scalable solutions
              </p>
            </div>

            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Innovation Driven
              </h3>
              <p className="text-sm text-gray-400">
                Thriving on challenges and crafting impactful digital solutions
              </p>
            </div>

            <div className="text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                📚
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Always Learning
              </h3>
              <p className="text-sm text-gray-400">
                Continuously exploring new technologies to stay ahead
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative px-6 py-24 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 mb-4">
              Professional Journey
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Experience & Expertise
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A journey through professional growth, technical challenges, and
              successful project deliveries across different industries and
              technologies.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-600"></div>

            <div className="space-y-16">
              {experiences
                ?.sort(
                  (a, b) =>
                    new Date(b.startDate).getTime() -
                    new Date(a.startDate).getTime()
                )
                ?.map((exp, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div key={exp.id} className="relative">
                      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 border-4 border-gray-900 shadow-lg"></div>

                      <div className="md:hidden pl-12">
                        <ExperienceCard experience={exp} />
                      </div>

                      <div className="hidden md:grid grid-cols-2 gap-8 items-center">
                        {isLeft ? (
                          <>
                            <div className="pr-4">
                              <ExperienceCard experience={exp} />
                            </div>
                            <div></div>
                          </>
                        ) : (
                          <>
                            <div></div>
                            <div className="pl-4">
                              <ExperienceCard experience={exp} />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative px-6 py-24 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 mb-4">
              Technical Stack
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I
              use to build scalable, performant, and user-friendly applications.
            </p>
          </div>

          <div className="space-y-12">
            {skills.map((skillCategory, index) => (
              <div key={skillCategory.id} className="text-center">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      index === 0
                        ? "bg-blue-500/20 text-blue-400"
                        : index === 1
                        ? "bg-green-500/20 text-green-400"
                        : "bg-orange-500/20 text-orange-400"
                    }`}
                  >
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategory.label}
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 hover:-translate-y-1 ${
                        index === 0
                          ? "bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400/50"
                          : index === 1
                          ? "bg-green-500/10 text-green-300 border-green-500/30 hover:bg-green-500/20 hover:border-green-400/50"
                          : "bg-orange-500/10 text-orange-300 border-orange-500/30 hover:bg-orange-500/20 hover:border-orange-400/50"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative px-6 py-24 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs font-medium text-gray-300 mb-4">
              Portfolio Showcase
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A collection of projects that showcase my technical skills and
              creative problem-solving abilities.
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

      {/* CTA Section */}
      <section className="relative px-6 py-24 backdrop-blur-sm">
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-800/50 px-3 py-1 text-xs font-medium text-gray-300 mb-6">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500"></span>
            Ready to collaborate
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to bring your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              ideas to life?
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let&apos;s collaborate to build something amazing together. I&apos;m
            here to turn your vision into reality with clean, scalable code and
            innovative solutions. Let&apos;s start your next project today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Get in Touch
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Link href="/projects">
                <FolderOpen className="w-4 h-4 mr-2" />
                View Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
