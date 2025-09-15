"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/60 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Samin Intisar
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-muted-foreground text-center">
          <a
            href="mailto:samintisardev@gmail.com"
            className="hover:text-primary focus:text-primary focus-cyberpunk transition-colors px-1 py-0.5 rounded-sm"
          >
            samintisardev@gmail.com
          </a>
          <span aria-hidden className="hidden sm:inline">•</span>
          <span className="px-1">778 317 0297</span>
          <span aria-hidden className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="https://www.linkedin.com/in/samin-intisar-6605771b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary focus:text-primary focus-cyberpunk transition-colors px-1 py-0.5 rounded-sm"
            >
              LinkedIn
            </Link>
            <span aria-hidden>•</span>
            <Link
              href="https://github.com/samintisar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary focus:text-primary focus-cyberpunk transition-colors px-1 py-0.5 rounded-sm"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


