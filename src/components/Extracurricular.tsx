import { Card } from "@/components/ui/card";
import { Users, BookOpen, Code } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      title: "Research Mentor @ DJ Init.AI",
      period: "2022–2024",
      description: "Guided AI research papers and led datathon teams",
      icon: Users,
    },
    {
      title: "Head of Editorial @ DJCSI",
      period: "2023–2024",
      description: "Led 7-member team producing monthly newsletters and annual magazine",
      icon: BookOpen,
    },
    {
      title: "Hackathon & Open Source Contributor",
      period: "Ongoing",
      description: "Contributed to full-stack & data visualization projects",
      icon: Code,
    },
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">
          Extracurricular & Leadership
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-gradient animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary/10 text-primary">
                  <activity.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
              <p className="text-sm text-primary font-medium mb-3">{activity.period}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
