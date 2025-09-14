import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Badge } from "@/components/retroui/Badge";
import { Input } from "@/components/retroui/Input";

export default function Home() {
  return (
    <div className="min-h-screen grid-background scan-lines">
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-head mb-8 neon-glow text-primary">
            WELCOME TO
            <br />
            THE FUTURE
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto">
            Cyberpunk Developer | Full-Stack Engineer | Digital Architect
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button className="text-lg px-8 py-4 cyber-border neon-glow">
              VIEW PROJECTS
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="border-t border-primary bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CYBER.DEV - Neural Network Active
          </p>
        </div>
      </footer>
    </div>
  );
}
