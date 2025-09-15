"use client";

import { Card } from "@/components/retroui/Card";
import { Progress } from "@/components/retroui/Progress";
import { Button } from "@/components/retroui/Button";
import Link from "next/link";
import { useRef } from "react";

const skillSections = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "Python", "SQL", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "D3.js",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "CI/CD", "Linux"],
  },
  {
    title: "Data & Analytics",
    items: ["Pandas", "NumPy", "scikit-learn", "PyTorch", "Power BI", "Tableau"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Jest", "ESLint", "Prettier"],
  },
];

const skillLevels: Record<string, number> = {
  TypeScript: 90,
  JavaScript: 92,
  Python: 85,
  SQL: 82,
  HTML: 95,
  CSS: 90,
  React: 90,
  "Next.js": 88,
  "Node.js": 84,
  Express: 80,
  "Tailwind CSS": 92,
  "D3.js": 70,
  PostgreSQL: 82,
  MongoDB: 78,
  SQLite: 75,
  Firebase: 72,
  AWS: 70,
  Docker: 76,
  Vercel: 88,
  "CI/CD": 74,
  Linux: 72,
  Pandas: 88,
  NumPy: 86,
  "scikit-learn": 75,
  Plotly: 72,
  "Power BI": 68,
  Tableau: 70,
  Git: 92,
  GitHub: 90,
  Jest: 78,
  ESLint: 85,
  Prettier: 88,
};

export default function SkillsPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
      className="min-h-screen grid-background glow-cursor scan-lines"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="mb-8">
            <Link href="/">
              <Button variant="secondary">← BACK TO HOME</Button>
            </Link>
          </div>
          <h2 className="text-3xl md:text-4xl font-head mb-8 text-primary border-b-2 border-primary pb-2">
            Technical Skills
          </h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillSections.map((section) => (
            <Card key={section.title} className="border-primary hover:shadow-xl transition-all duration-300">
              <Card.Header>
                <Card.Title className="text-primary">{section.title}</Card.Title>
                <Card.Description>
                  {undefined}
                </Card.Description>
              </Card.Header>
              <Card.Content>
                {section.items.map((item) => {
                  const value = skillLevels[item] ?? 70;
                  return (
                    <div key={item} className="mb-4 last:mb-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">{item}</span>
                        <span className="text-xs text-muted-foreground">{value}%</span>
                      </div>
                      <Progress value={value} />
                    </div>
                  );
                })}
              </Card.Content>
            </Card>
          ))}
        </div>

        
      </div>
    </div>
  );
}


