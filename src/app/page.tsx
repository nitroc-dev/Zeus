import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FeaturedProjects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <main className="bg-gray-950">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
    </main>
  );
}
