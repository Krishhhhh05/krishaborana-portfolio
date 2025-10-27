import { GraduationCap, Code2, BookOpen, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Master's Student @ Rutgers University",
      description: "Pursuing advanced studies in Computer Science",
    },
    {
      icon: Code2,
      title: "Ex-Full Stack Intern",
      description: "Solunation, Antennae Ventures, CDAC",
    },
    {
      icon: BookOpen,
      title: "Machine Learning Researcher",
      description: "3+ published papers in AI and ML",
    },
    {
      icon: Globe,
      title: "Open Source Contributor",
      description: "Active in hackathons and community projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 gradient-text">
            About Me
          </h2>
          
          <p className="text-lg text-foreground/80 text-center mb-12 leading-relaxed">
            I'm a Computer Science graduate student at Rutgers University, passionate about building 
            intelligent, scalable systems that blend AI, data, and product design. My work spans 
            full-stack development, machine learning, and research-driven innovation — always with a 
            focus on real-world impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-gradient border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
