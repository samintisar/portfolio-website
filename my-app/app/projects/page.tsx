"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  thumbnail?: string;
  githubUrl?: string;
};

const fullStackProjects: Project[] = [
  {
    title: "SolomindLM",
    description: "An AI-powered study assistant app that integrates your resources to generate personalized study materials",
    techStack: ["React", "Next.js", "LangChain", "OpenAI API", "Convex"],
    thumbnail: "/SolomindLM.png",
    githubUrl: "https://www.solomindlm.com/"
  },
  {
    title: "Lead Generation App",
    description: "A web application that generates leads for a business using Google Maps API and web scraping",
    techStack: ["Svelte", "Python", "Google Maps API", "BeautifulSoup"],
    thumbnail: "/Lead Generation App.png",
    githubUrl: "https://google-maps-lead-generation.vercel.app/"
  },
  {
    title: "AI Receptionist for Dental Clinics",
    description: "A FastAPI service for AI voice agent integration with OpenDental practice management system",
    techStack: ["Python", "FastAPI", "VAPI", "React", "Node.js", "OpenDental API"],
    thumbnail: "/CrownCall.png",
    githubUrl: "https://github.com/samintisar/crowncall-website"
  },
  {
    title: "Quant Portfolio System",
    description: "End-to-end portfolio optimization with mean-variance, CVaR, and Black-Litterman models, walk-forward backtests, and FastAPI endpoints",
    techStack: ["Python", "CVXPY", "scikit-learn", "FastAPI"],
    githubUrl: "https://github.com/samintisar/quant-portfolio-system"
  }
];

const dataAnalystProjects: Project[] = [
  {
    title: "Disaster Tweet Classification",
    description: "A machine learning model that classifies tweets as disaster-related or not",
    techStack: ["Python", "Hugging Face", "Keras", "DistilBERT", "PyTorch"],
    thumbnail: "/Disaster Tweets Classification.png",
    githubUrl: "https://github.com/samintisar/disaster-tweet-classification"
  },
  {
    title: "Customer Churn Prediction",
    description: "End-to-end churn model with SHAP explainability, risk tiering, and a Streamlit dashboard for real-time predictions",
    techStack: ["Python", "SHAP", "Streamlit", "scikit-learn"],
    githubUrl: "https://github.com/samintisar/customer-churn-prediction"
  },
  {
    title: "Breast Cancer Prediction",
    description: "Machine learning to predict whether a breast tumor is malignant or benign",
    techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    thumbnail: "/Breast Cancer Prediction.png",
    githubUrl: "https://github.com/samintisar/breast-cancer-diagnosis-ml"
  },
  {
    title: "Employee Attrition Prediction",
    description: "Lasso regression on HR data from 4,653 employees to identify salary, benching, and experience as key attrition drivers",
    techStack: ["R", "MySQL", "Lasso Regression"]
  },
  {
    title: "Return of Service in BC",
    description: "UBC capstone statistical consulting for faculty physicians on IMG retention policy, using logistic and ordinal regression on 80+ survey responses",
    techStack: ["R", "tidyverse", "ggplot2", "R Markdown"]
  },
  {
    title: "Hotel Booking Analytics",
    description: "Power BI dashboard that provides insights into hotel bookings, revenue, and key performance metrics",
    techStack: ["Power BI", "MySQL", "Excel"],
    thumbnail: "/Hotel Booking Analytics.png",
    githubUrl: "https://github.com/samintisar/Hospitality_Domain_Analysis_Dashboard"
  }
];

function ProjectCard({ project }: { project: Project }) {
  const card = (
    <Card className={`hover:shadow-xl transition-all duration-300 border-primary h-full ${project.githubUrl ? "cursor-pointer hover:border-secondary" : ""}`}>
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
            <div className="h-full w-full flex items-center justify-center px-4 text-center text-sm font-head text-primary/70">
              {project.title}
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
  );

  if (!project.githubUrl) {
    return card;
  }

  return (
    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      {card}
    </Link>
  );
}

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

        {/* AI Engineer Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-head mb-8 text-primary border-b-2 border-primary pb-2">
            AI Engineer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullStackProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Applied ML Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-head mb-8 text-primary border-b-2 border-primary pb-2">
            Applied ML
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataAnalystProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
