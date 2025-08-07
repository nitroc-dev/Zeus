import Image from "next/image";
import { FolderOpen, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gray-950 min-h-[95vh] flex items-center justify-center px-6 py-20">
      <div className="flex flex-col items-center w-full max-w-5xl gap-10 text-center md:flex-row md:text-left">
        <div className="flex-shrink-0">
          <Image
            src="/profile.png"
            alt="Nitroc"
            width={160}
            height={160}
            className="border-4 border-blue-600 rounded-full"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-50 sm:text-5xl">
            Hi, I&apos;m <span className="text-blue-600">Corentin</span>
          </h1>
          <p className="text-lg text-gray-300 sm:text-xl max-w-2xl">
            A passionate problem-solver specializing in web development and
            backend systems. I believe in the power of clean code,
            collaboration, and continuous learning.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
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
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/projects">
                <FolderOpen className="w-4 h-4 mr-2" />
                View My Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
