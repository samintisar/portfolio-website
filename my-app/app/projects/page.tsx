"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import Link from "next/link";
import Image from "next/image";

const fullStackProjects = [
  {
    id: 1,
    title: "AI Receptionist for Dental Clinics",
    description: "A FastAPI service for AI voice agent integration with OpenDental practice management system",
    techStack: ["Python", "FastAPI", "VAPI", "React", "Node.js", "OpenDental API"],
    thumbnail: "/CrownCall.png"
  },
  {
    id: 2,
    title: "SolomindLM (In Progress)",
    description: "An AI-powered study assistant app that integrates your resources to generate personalized study materials",
    techStack: ["React", "Next.js", "LangChain", "OpenAI API", "Supabase"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Lead Generation App",
    description: "A web application that generates leads for a business using Google Maps API and web scraping",
    techStack: ["Svelte", "Python", "Google Maps API", "BeautifulSoup"],
    thumbnail: "/api/placeholder/400/250"
  }
];

const dataAnalystProjects = [
  {
    id: 1,
    title: "Hotel Booking Analytics",
    description: "Power BI dashboard that provides insights into hotel bookings, revenue, and key performance metrics",
    techStack: ["Power BI", "MySQL", "Excel"],
    thumbnail: "/Hotel Booking Analytics.png"
  },
  {
    id: 2,
    title: "Breast Cancer Prediction",
    description: "Machine learning to predict whether a breast tumor is malignant or benign",
    techStack: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    thumbnail: "/Breast Cancer Prediction.png"
  },
  {
    id: 3,
    title: "Disaster Tweet Classification",
    description: "A machine learning model that classifies tweets as disaster-related or not",
    techStack: ["Python", "Hugging Face", "Keras", "DistilBERT", "PyTorch"],
    thumbnail: "/Disaster Tweets Classification.png"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen grid-background scan-lines">
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
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 border-primary">
                <Card.Header className="p-4">
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
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
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300 border-primary">
                <Card.Header className="p-4">
                  <div className="aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}