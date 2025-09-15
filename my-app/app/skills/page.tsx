"use client";

import { Card } from "@/components/retroui/Card";
import { Progress } from "@/components/retroui/Progress";
import { Button } from "@/components/retroui/Button";
import Link from "next/link";
import { useRef } from "react";

const skillSections = [
  {
    title: "Programming Languages",
    items: ["Python", "SQL", "HTML/CSS", "R", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Svelte",
      "Tailwind CSS",
      "LangChain",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git", "Vercel", "CI/CD"],
  },
  {
    title: "Machine Learning",
    items: ["Pandas", "NumPy", "scikit-learn", "PyTorch", "TensorFlow", "Hugging Face"],
  },
  {
    title: "Data Analytics",
    items: ["Power BI", "Tableau", "Excel", "Databricks"],
  },
];

const skillLevels: Record<string, number> = {
  TypeScript: 85,
  JavaScript: 82,
  Python: 90,
  SQL: 87,
  "HTML/CSS": 70,
  R: 95,
  React: 78,
  "Next.js": 75,
  "Node.js": 80,
  Svelte: 69,
  "Tailwind CSS": 79,
  LangChain: 88,
  PostgreSQL: 87,
  MongoDB: 78,
  SQLite: 82,
  Firebase: 72,
  AWS: 70,
  Docker: 95,
  Vercel: 88,
  "CI/CD": 74,
  Pandas: 92,
  NumPy: 88,
  "scikit-learn": 75,
  PyTorch: 72,
  "Power BI": 89,
  Tableau: 84,
  Git: 92,
  Excel: 65,
  TensorFlow: 72,
  "Hugging Face": 82,
  Databricks: 72,
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


