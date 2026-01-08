"use client";

import { projects } from "@/data/hardcoded-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, Github } from "lucide-react";
import ProjectCard from "@/components/cards/project";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      <section className="relative min-h-[95vh] px-6 py-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-lg text-gray-300 sm:text-xl max-w-3xl mx-auto leading-relaxed">
              A showcase of my work spanning web development, backend systems,
              and innovative solutions. Each project represents a unique
              challenge and creative approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="/contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get in Touch
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Link href="https://github.com/nitroc-dev" target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
