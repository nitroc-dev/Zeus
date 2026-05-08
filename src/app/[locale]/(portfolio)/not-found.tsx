import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="bg-gray-950 min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-8xl font-black text-blue-600">404</p>
        <h1 className="text-2xl font-bold text-white">Page not found</h1>
        <p className="text-gray-400 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
