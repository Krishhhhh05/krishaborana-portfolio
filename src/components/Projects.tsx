import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FoodSpot",
      tech: "React.js, Node.js, Flask, Google Maps API",
      description: [
        "Full-stack food truck tracking & optimization app with AI-based routing (Q-learning, LSTM)",
        "Increased vendor sales by 35% and reduced waste by 25%",
      ],
      image: "🍔",
    },
    {
      title: "ResuGenius",
      tech: "Python, FastAPI, Streamlit, FAISS",
      description: [
        "AI-driven resume evaluator recommending personalized career matches using LLMs",
        "Built REST APIs for live data processing and Zero-Shot Classification",
      ],
      image: "📄",
    },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 gradient-text">
          Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building solutions that combine AI, full-stack development, and real-world impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-gradient animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 flex items-center justify-center text-8xl bg-gradient-to-br from-primary/10 to-accent/10">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">{project.tech}</p>
                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-accent mr-2">▹</span>
                      <span className="text-foreground/80">{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary-light">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
