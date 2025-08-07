"use client";

import Link from "next/link";
import { GithubIcon } from "../../icons/github";
import { LinkedinIcon } from "../../icons/linkedin";
import { MailIcon } from "../../icons/mail";

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-gray-950 border-t border-gray-800">
      <div className="flex flex-col items-center justify-between max-w-6xl mx-auto md:flex-row">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Nitroc. All rights reserved.
        </p>

        <div className="flex mt-4 space-x-6 md:mt-0">
          <Link
            href="https://github.com/nitroc-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/corentin-d-02472724b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:contact@nitroc.xyz"
            aria-label="Email"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <MailIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
