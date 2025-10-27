import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 gradient-text">
              Krisha Borana
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-foreground/80">
              Software Engineer | AI Researcher | Full-Stack Developer
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Turning code into impact through AI, systems, and scalable design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open("#", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 font-semibold hover:bg-secondary"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover border border-border transition-all hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-card-hover border border-border transition-all hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:krisha.borana@rutgers.edu"
                className="p-3 rounded-full bg-card hover:bg-card-hover border border-border transition-all hover:scale-110 hover:shadow-lg"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
