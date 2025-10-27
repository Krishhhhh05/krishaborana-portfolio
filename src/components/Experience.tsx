import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Solunation",
      role: "Full-Stack Software Engineer Intern",
      period: "Apr 2024 – Jul 2025",
      logo: "💼",
      achievements: [
        "Built 6 virtual casino games using React.js and WebSockets with ultra-low latency (0.1s)",
        "Integrated chip-embedded cards handling $100K+ transactions with 99.9% uptime",
      ],
    },
    {
      company: "Antennae Ventures",
      role: "Full-Stack Developer Intern",
      period: "Apr 2024 – Oct 2024",
      logo: "💼",
      achievements: [
        "Led project management and Agile sprint planning for a healthcare platform",
        "Achieved 85% engagement and 500+ appointments in 3 months",
      ],
    },
    {
      company: "CDAC",
      role: "Full-Stack Intern",
      period: "Dec 2023 – May 2024",
      logo: "💼",
      achievements: [
        "Developed AI-driven educational platform using Java Spring + React",
        "Coordinated backend/ML integration via Trello & JIRA",
      ],
    },
    {
      company: "ArbDossier (Now Lawyantra)",
      role: "ML Intern",
      period: "Jun 2023 – Aug 2023",
      logo: "💼",
      achievements: [
        "Trained NLP models improving legal document classification by 66%",
        "Built scraping pipelines for 100K+ records",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 card-gradient animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{exp.logo}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <span className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-semibold mb-4">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">▹</span>
                        <span className="text-foreground/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Timeline Line */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
