import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { WorkingOn } from "@/components/sections/working-on";

export default function Home() {
  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />
      <Hero />
      <Projects />
      <WorkingOn />
      <CTA />
    </main>
  );
}
