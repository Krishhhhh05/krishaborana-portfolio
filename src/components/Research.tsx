import { Card } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Efficient Data Extraction from Handwritten Forms",
      conference: "IEEE ICAITPR 2024",
      year: "2024",
      icon: "📝",
    },
    {
      title: "AI-Based Approach Towards Enhanced Storytelling for Children",
      journal: "Discover Education",
      year: "2025",
      icon: "📚",
    },
    {
      title: "Financial Allocation Management Using Behavioral Psychology",
      journal: "Educational Administration: Theory & Practice",
      year: "2025",
      icon: "💰",
    },
  ];

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 gradient-text">
          Research & Publications
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Contributing to the advancement of AI and machine learning through published research
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-gradient animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{pub.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">{pub.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="flex items-center text-primary font-medium">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {pub.conference || pub.journal}
                    </span>
                    <span className="text-muted-foreground">• {pub.year}</span>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
