import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Efficient Data Extraction from Handwritten Forms: A Structured Pipeline Solution",
      conference: "IEEE ICAITPR 2024 Conference",
      venue: "Hyderabad, December 2024",
      year: "2024",
      icon: "📝",
      description: [
        "Built a robust pipeline using Computer Vision, Feature Detection, and Image Matching to digitize and extract structured data from handwritten forms, with preprocessing for keywords and sensitive info.",
        "Published in the IEEE ICAITPR 2024 conference, showcasing its potential for digitizing bulk paper records in education and administration."
      ],
      tech: "Computer Vision, Image Processing, Feature Detection, OCR",
      paper: "https://ieeexplore.ieee.org/document/10959837",
    },
    {
      title: "AI-Based Approach Towards Enhanced Storytelling for Children (Storycraft)",
      conference: "Discover Education 2025 Conference",
      year: "2025",
      icon: "📚",
      description: [
        "Designed an adaptive platform that generates personalized children's stories and images using fine-tuned Mistral LLMs and image diffusion models, preserving character consistency and maintaining a generation accuracy of 97%.",
        "Implemented automated image generation from story-derived prompts with semantic validation, achieving 93% prompt-image consistency verified through similarity metrics and manual evaluation."
      ],
      tech: "Python, LLMs, Mistral, Image Diffusion, Fine-tuning, Generative AI",
      github: "https://github.com/Krishhhhh05/StoryCraft",
    },
    {
      title: "Financial Allocation Management Using Behavioral Psychology",
      journal: "Educational Administration: Theory and Practice",
      venue: "Vol. 30 No. 2, February 2024",
      year: "2024",
      icon: "💰",
      description: [
        "Conducted research integrating Modern Portfolio Theory and True Risk Tolerance to evaluate decision-making behaviors across 8 diverse portfolio types.",
        "Published with DOI: 10.53555/kuey.v30i2.8445, demonstrating ML-driven insights for investment decision-making and risk tolerance assessment."
      ],
      tech: "Python, LLMs, NLP, PyTorch, Financial Modeling, Behavioral Economics",
      paper: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://kuey.net/index.php/kuey/article/download/8445/6329/16315&ved=2ahUKEwjv2rXMqfyQAxWFD1kFHQrQBIsQFnoECBkQAQ&usg=AOvVaw3p7iBDb7p5KdKod8-5XPDG",
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

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-gradient animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl sm:text-5xl flex-shrink-0">{pub.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                    <span className="flex items-center text-primary font-medium">
                      <BookOpen className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="truncate">{pub.conference || pub.journal}</span>
                    </span>
                    {pub.venue && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{pub.venue}</span>
                      </>
                    )}
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{pub.year}</span>
                  </div>

                  <p className="text-sm text-primary font-medium mb-3">{pub.tech}</p>

                  <ul className="space-y-2 mb-4">
                    {pub.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-accent mr-2 flex-shrink-0">▹</span>
                        <span className="text-foreground/80">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {pub.paper && (
                      <Button 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => window.open(pub.paper, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Paper
                      </Button>
                    )}
                    {pub.github && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(pub.github, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Research Stats */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="p-6 text-center card-gradient animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <div className="text-muted-foreground text-sm">Published Papers</div>
          </Card>
          <Card className="p-6 text-center card-gradient animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">97%</div>
            <div className="text-muted-foreground text-sm">Model Accuracy</div>
          </Card>
          <Card className="p-6 text-center card-gradient animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-3xl font-bold gradient-text mb-2">2024-2025</div>
            <div className="text-muted-foreground text-sm">Publication Years</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;