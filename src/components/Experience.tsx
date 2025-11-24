import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const highlightTerms = (text: string, terms?: string[]) => {
    if (!terms || terms.length === 0) return text;
    const parts = text.split(new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "i"));
    return parts.map((part, i) => {
      const isMatch = terms.some(t => t.toLowerCase() === part.toLowerCase());
      return isMatch ? (
        <strong key={i} className="font-semibold">{part}</strong>
      ) : (
        <span key={i}>{part}</span>
      );
    });
  };

  const experiences = [
    {
      company: "Solunation",
      role: "Full-Stack Software Engineer Intern",
      period: "Apr 2024 – Jul 2025",
      logo: "💼",
      achievements: [
        "Led the product development of 6 enterprise-grade virtual card games and engineered wireless device connectivity protocols for IoT-enabled card readers using React.js, and WebSockets, achieving ultra-low latency (0.1s) and supporting 10K+ daily real-time operations successfully enabling transactions of about $10,000 every day.",
        "Built analytics dashboards and monitoring tools tracking system metrics, transaction patterns, and user behavior,enabling data-driven decision-making and optimization that improved system reliability to 99.9% uptime",
      ],
      highlights: ["6 enterprise-grade virtual card games", "ultra-low latency (0.1s)", "99.9% uptime"],
    },
    {
      company: "Antennae Ventures",
      role: "Full-Stack Developer Intern",
      period: "Apr 2024 – Oct 2024",
      logo: "💼",
      achievements: [
        "Led project management, full-stack development, and deployment lifecycle for a responsive healthcare platform designed to educate patients on IVF and fertility treatments. With Next.js, and MongoDB within Agileframework, implementing patient-doctor matching and clinic discovery, successfully deployment on AWS Amplify.",
        "Achieved early traction with 500+ appointment bookings and an 85% engagement rate in the first 3 months, and contributed to backend scaling efforts in CI/CD pipelines for international market expansion",
      ],
      highlights: ["500+ appointment bookings", "85% engagement"],
    },
    
    {
      company: "ArbDossier (Now Lawyantra)",
      role: "ML Intern",
      period: "Jun 2023 – Aug 2023",
      logo: "💼",
      achievements: [
        "Engineered NLP-based legal document classification system using deep learning models, improving search functionality by 66% and automated categorization across 15+ document formats for internal workflow platform.",
        "Built scalable web scraping and data processing pipeline collecting 100K+ legal documents, implementing data processing and feature engineering increasing classification accuracy to 92% & reducing manual review time by 50%",
      ],
      highlights: ["66%", "100K+ legal documents"],
    },
    {
      company: "IIT Patna",
      role: "Research Intern",
      period: "Jun 2024–Aug 2024",
      logo: "💼",
      achievements: [
        "Built automated analytics dashboards and visualization pipelines using Python, Tableau, and SQL, tracking performance across 75+ predictive models and enabling decision-making through interactive PowerBI reports",
        "Developed ML classification models (Random Forest, XGBoost) on 500K+ financial records, applying SMOTE for data balancing and statistical analysis to improve prediction accuracy by 20% for forecasting application",
      ],
      highlights: ["75+ predictive models", "500K+ financial records", "20%"],
    },
    {
      company: "Center of Development and Advanced Computing (C-DAC), India",
      role: "Full-Stack Intern",
      period: "Dec 2023 – May 2024",
      logo: "💼",
      achievements: [
        "Built AI-powered educational platform using Java Spring Framework, React.js, and MERN stack with secure authentication and modular architecture, serving 300+ active students with personalized learning that improved engagement by 45%.",
        "Integrated reinforcement learning modules via RESTful APIs, coordinating backend and ML teams while implementing comprehensive testing (95%+ coverage) and CI/CD pipelines for continuous deployment",
      ],
      highlights: ["300+ active students", "45%", "95%+ coverage"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">
          Professional Experience
        </h2>

        <div className="w-full mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="w-full md:w-3/4 md:mx-auto p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 card-gradient animate-fade-in"
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
                        <span className="text-foreground/80">{typeof achievement === 'string' ? highlightTerms(achievement, (exp as any).highlights) : achievement}</span>
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
