"use client";

import { Button } from "@/components/retroui/Button";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const lastScrollYRef = useRef(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;


      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--mouse-x", `-9999px`);
    el.style.setProperty("--mouse-y", `-9999px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-[110vh] grid-background glow-cursor scan-lines"
    >
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6" style={{ height: 'calc(110vh - 60px)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-head mb-8 text-primary text-render-precision leading-tight tracking-tighter font-black text-shadow neon-glow-subtle">
            WELCOME TO
            <br />
            THE FUTURE
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            <Link
              href="/skills"
              className="transition-colors hover:text-secondary focus:text-secondary focus-cyberpunk rounded-sm px-1 py-0.5"
              tabIndex={0}
            >
              Samin Intisar | Full-Stack Engineer | Data Analyst
            </Link>
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/projects">
              <Button className="text-lg px-8 py-4 cyber-border font-bold text-render-legible tracking-wide text-shadow cyber-focus cyber-button">
                VIEW PROJECTS
              </Button>
            </Link>
            <a href="/Samin_Intisar_Resume_v4.pdf" download="Samin_Intisar_Resume_v4.pdf">
              <Button variant="secondary" className="text-lg px-8 py-4 cyber-focus cyber-button cyber-button-secondary">
                DOWNLOAD CV
              </Button>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
