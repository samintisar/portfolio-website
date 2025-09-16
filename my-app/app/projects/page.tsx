"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const fullStackProjects = [
  {
    id: 1,
    title: "Lead Generation App",
    description: "A web application that generates leads for a business using Google Maps API and web scraping",
    techStack: ["Svelte", "Python", "Google Maps API", "BeautifulSoup"],
    thumbnail: "/Lead Generation App.png",
    githubUrl: "https://google-maps-lead-generation-yffq.vercel.app/"
  },
  {
    id: 2,
    title: "SolomindLM (In Progress)",
    description: "An AI-powered study assistant app that integrates your resources to generate personalized study materials",
    techStack: ["React", "Next.js", "LangChain", "OpenAI API", "Supabase"],
    thumbnail: "/SolomindLM.png",
    githubUrl: "https://github.com/samintisar/learning-app"
  },
  {
    id: 3,
    title: "AI Receptionist for Dental Clinics",
    description: "A FastAPI service for AI voice agent integration with OpenDental practice management system",
    techStack: ["Python", "FastAPI", "VAPI", "React", "Node.js", "OpenDental API"],
    thumbnail: "/CrownCall.png",
    githubUrl: "https://github.com/samintisar/crowncall-website"
  }
];

const dataAnalystProjects = [
  {
    id: 1,
    title: "Disaster Tweet Classification",
    description: "A machine learning model that classifies tweets as disaster-related or not",
    techStack: ["Python", "Hugging Face", "Keras", "DistilBERT", "PyTorch"],
    thumbnail: "/Disaster Tweets Classification.png",
    githubUrl: "https://github.com/samintisar/natural-language-processing"
  },
  {
    id: 2,
    title: "Breast Cancer Prediction",
    description: "Machine learning to predict whether a breast tumor is malignant or benign",
    techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    thumbnail: "/Breast Cancer Prediction.png",
    githubUrl: "https://github.com/samintisar/breast-cancer-diagnosis-ml"
  },
  {
    id: 3,
    title: "Hotel Booking Analytics",
    description: "Power BI dashboard that provides insights into hotel bookings, revenue, and key performance metrics",
    techStack: ["Power BI", "MySQL", "Excel"],
    thumbnail: "/Hotel Booking Analytics.png",
    githubUrl: "https://github.com/samintisar/Hospitality_Domain_Analysis_Dashboard"
  }
];

export default function ProjectsPage() {
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
        {/* Header */}
        <div className="mb-12">
          <div className="mb-8">
            <Link href="/">
              <Button variant="secondary">← BACK TO HOME</Button>
            </Link>
          </div>
        </div>

        {/* Full-stack Developer Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-head mb-8 text-primary border-b-2 border-primary pb-2">
            Full-Stack Developer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullStackProjects.map((project) => (
              <Link key={project.id} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Card className="hover:shadow-xl transition-all duration-300 border-primary cursor-pointer hover:border-secondary">
                <Card.Header className="p-4">
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={400}
                        height={225}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
                        No image
                      </div>
                    )}
                  </div>
                  <Card.Title className="text-xl font-bold text-primary">
                    {project.title}
                  </Card.Title>
                </Card.Header>
                <Card.Content className="p-4 pt-0">
                  <Card.Description className="mb-4 text-muted-foreground">
                    {project.description}
                  </Card.Description>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="surface" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Content>
              </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Data Analyst Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-head mb-8 text-primary border-b-2 border-primary pb-2">
            Data Analyst
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataAnalystProjects.map((project) => (
              <Link key={project.id} href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Card className="hover:shadow-xl transition-all duration-300 border-primary cursor-pointer hover:border-secondary">
                <Card.Header className="p-4">
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        width={400}
                        height={225}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm">
                        No image
                      </div>
                    )}
                  </div>
                  <Card.Title className="text-xl font-bold text-primary">
                    {project.title}
                  </Card.Title>
                </Card.Header>
                <Card.Content className="p-4 pt-0">
                  <Card.Description className="mb-4 text-muted-foreground">
                    {project.description}
                  </Card.Description>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="surface" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Content>
              </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}