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

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-head mb-12 text-center neon-glow text-accent">
            NEURAL INTERFACE
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="cyber-border">
              <Card.Header>
                <Card.Title className="text-2xl neon-glow text-primary">SKILLS</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Cybersecurity</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">Blockchain</Badge>
                  <Badge variant="secondary">Cloud</Badge>
                </div>
              </Card.Content>
            </Card>
            <Card className="cyber-border">
              <Card.Header>
                <Card.Title className="text-2xl neon-glow text-primary">EXPERIENCE</Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-accent">Senior Full-Stack Developer</h4>
                    <p className="text-muted-foreground">CyberCorp Industries • 2022-Present</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-accent">Software Engineer</h4>
                    <p className="text-muted-foreground">TechNoir Solutions • 2020-2022</p>
                  </div>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-head mb-12 text-center neon-glow text-accent">
            PROJECT MATRIX
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="cyber-border hover:scale-105 transition-transform">
              <Card.Header>
                <Card.Title className="text-xl neon-glow text-primary">Neural Network Dashboard</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-muted-foreground mb-4">
                  Real-time AI monitoring system with cyberpunk aesthetics.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge>React</Badge>
                  <Badge>D3.js</Badge>
                  <Badge>WebGL</Badge>
                </div>
                <Button className="w-full">ACCESS PROJECT</Button>
              </Card.Content>
            </Card>
            <Card className="cyber-border hover:scale-105 transition-transform">
              <Card.Header>
                <Card.Title className="text-xl neon-glow text-primary">Blockchain Validator</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-muted-foreground mb-4">
                  Decentralized validation system for smart contracts.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge>Solidity</Badge>
                  <Badge>Web3</Badge>
                  <Badge>Node.js</Badge>
                </div>
                <Button className="w-full">ACCESS PROJECT</Button>
              </Card.Content>
            </Card>
            <Card className="cyber-border hover:scale-105 transition-transform">
              <Card.Header>
                <Card.Title className="text-xl neon-glow text-primary">Cyber Security Suite</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-muted-foreground mb-4">
                  Advanced threat detection and prevention system.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge>Python</Badge>
                  <Badge>ML</Badge>
                  <Badge>Docker</Badge>
                </div>
                <Button className="w-full">ACCESS PROJECT</Button>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-head mb-12 text-center neon-glow text-accent">
            ESTABLISH CONNECTION
          </h2>
          <Card className="cyber-border">
            <Card.Header>
              <Card.Title className="text-2xl neon-glow text-primary">CONTACT INTERFACE</Card.Title>
            </Card.Header>
            <Card.Content>
              <form className="space-y-6">
                <div>
                  <Input placeholder="Name" className="bg-input border-primary" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" className="bg-input border-primary" />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    className="w-full p-3 bg-input border-2 border-primary rounded min-h-[100px] text-foreground"
                  />
                </div>
                <Button className="w-full cyber-border neon-glow">
                  TRANSMIT MESSAGE
                </Button>
              </form>
            </Card.Content>
          </Card>
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
