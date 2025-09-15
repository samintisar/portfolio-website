"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-primary/60 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div className="text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} Samin Intisar
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="mailto:samintisardev@gmail.com" className="hover:text-primary transition-colors">samintisardev@gmail.com</a>
          <span aria-hidden>•</span>
          <span>778 317 0297</span>
          <span aria-hidden>•</span>
          <Link href="https://linkedin.com/in/samin-intisarhttps://www.linkedin.com/in/samin-intisar-6605771b6/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</Link>
          <span aria-hidden>•</span>
          <Link href="https://github.com/samintisar" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}


