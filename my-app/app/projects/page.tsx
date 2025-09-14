"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import Link from "next/link";

const fullStackProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment processing, and inventory management.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    techStack: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization, scheduling, and multi-platform integration.",
    techStack: ["React", "D3.js", "Firebase", "Chart.js", "Material UI"],
    thumbnail: "/api/placeholder/400/250"
  }
];

const dataAnalystProjects = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    description: "Interactive dashboard for sales data analysis with predictive modeling and real-time reporting capabilities.",
    techStack: ["Python", "Pandas", "Plotly", "Flask", "SQL"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Customer Segmentation Model",
    description: "Machine learning model for customer segmentation using clustering algorithms and behavioral analysis.",
    techStack: ["Python", "Scikit-learn", "K-Means", "Tableau", "NumPy"],
    thumbnail: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Financial Data Pipeline",
    description: "Automated data pipeline for financial market analysis with real-time data processing and visualization.",
    techStack: ["Python", "Apache Spark", "AWS", "Kafka", "Power BI"],
    thumbnail: "/api/placeholder/400/250"
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
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">
                      {project.thumbnail}
                    </div>
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
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                    <div className="text-muted-foreground text-sm">
                      {project.thumbnail}
                    </div>
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