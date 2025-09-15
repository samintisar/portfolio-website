"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Input } from "@/components/retroui/Input";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;

      if (currentY <= 0) {
        setShowFooter(false);
      } else if (delta > 0) {
        setShowFooter(true);
      } else if (delta < 0) {
        setShowFooter(false);
      }

      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="min-h-[110vh] grid-background scan-lines">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-6" style={{ height: 'calc(110vh - 60px)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-head mb-8 neon-glow text-primary">
            WELCOME TO
            <br />
            THE FUTURE
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            <Link href="/skills" className="transition-colors hover:text-primary">
              Samin Intisar | Full-Stack Engineer | Data Analyst
            </Link>
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/projects">
              <Button className="text-lg px-8 py-4 cyber-border neon-glow">
                VIEW PROJECTS
              </Button>
            </Link>
            <Button variant="secondary" className="text-lg px-8 py-4">
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer
        className={`fixed bottom-0 left-0 right-0 z-50 border-t border-primary bg-background/80 backdrop-blur-sm transform transition-transform duration-200 will-change-transform ${showFooter ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CYBER.DEV - Neural Network Active
          </p>
        </div>
      </footer>
    </div>
  );
}
