import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Rutgers University",
      location: "New Jersey, USA",
      degree: "M.S. in Computer Science",
      period: "Aug 2025 – May 2027",
      logo: "🎓",
    },
    {
      institution: "University of Mumbai",
      location: "India",
      degree: "B.Tech in Information Technology",
      period: "Dec 2021 – May 2025",
      gpa: "CGPA: 8.77/10",
      logo: "🎓",
    },
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Systems",
    "Cloud Computing",
    "Data Science",
    "Artificial Intelligence",
    "Software Engineering",
    "Parallel and Distributed Computing",
  ];

  return (
    <section id="education" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 card-gradient animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-5xl">{edu.logo}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{edu.institution}</h3>
                  <p className="text-muted-foreground mb-2">{edu.location}</p>
                  <p className="text-lg font-semibold text-primary mb-1">{edu.degree}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </span>
                    {edu.gpa && <span className="font-medium text-foreground">{edu.gpa}</span>}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
            <GraduationCap className="h-6 w-6 mr-2 text-primary" />
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {coursework.map((course, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border hover:border-primary hover:shadow-md transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
