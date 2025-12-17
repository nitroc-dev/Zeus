import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FolderOpen, Phone } from "lucide-react";

export function CTA() {
  return (
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
  );
}
