// Skills.tsx
import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Wrench, Brain } from 'lucide-react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Languages & Frameworks",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95, experience: "4+ years", projects: "ML pipelines, data processing, automation" },
        { name: "JavaScript/TypeScript", level: 90, experience: "3+ years", projects: "Full-stack web applications" },
        { name: "React.js", level: 92, experience: "3+ years", projects: "6+ production systems, real-time dashboards" },
        { name: "Node.js", level: 88, experience: "3+ years", projects: "RESTful APIs, microservices" },
        { name: "Java", level: 85, experience: "3+ years", projects: "Enterprise applications, Spring Framework" },
        { name: "Next.js", level: 87, experience: "2+ years", projects: "Healthcare platform, SSR applications" },
        { name: "C++/C#", level: 80, experience: "2+ years", projects: "System programming, game development" },
        { name: "Go", level: 75, experience: "1+ year", projects: "Backend services, concurrent systems" },
      ]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "AWS", level: 88, experience: "2+ years", projects: "S3, EC2, Lambda, Amplify deployments" },
        { name: "Docker", level: 85, experience: "2+ years", projects: "Containerized applications, microservices" },
        { name: "Kubernetes", level: 78, experience: "1+ year", projects: "Container orchestration, scaling" },
        { name: "CI/CD", level: 90, experience: "3+ years", projects: "GitHub Actions, Jenkins, automated pipelines" },
        { name: "GCP", level: 82, experience: "2+ years", projects: "Cloud Functions, BigQuery" },
        { name: "Azure", level: 75, experience: "1+ year", projects: "Cloud services, DevOps" },
        { name: "Git", level: 95, experience: "4+ years", projects: "Version control, collaboration" },
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Data",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "PostgreSQL", level: 90, experience: "3+ years", projects: "500K+ records, optimized queries" },
        { name: "MongoDB", level: 87, experience: "3+ years", projects: "NoSQL databases, document storage" },
        { name: "Redis", level: 85, experience: "2+ years", projects: "Caching, real-time data" },
        { name: "MySQL", level: 88, experience: "3+ years", projects: "Relational databases, indexing" },
        { name: "Kafka", level: 80, experience: "1+ year", projects: "Streaming data, event processing" },
        { name: "Spark", level: 75, experience: "1+ year", projects: "Big data processing" },
        { name: "Snowflake", level: 70, experience: "1+ year", projects: "Data warehousing" },
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      color: "orange",
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "PyTorch", level: 88, experience: "2+ years", projects: "Deep learning, LLM fine-tuning" },
        { name: "TensorFlow", level: 85, experience: "2+ years", projects: "Neural networks, computer vision" },
        { name: "NLP", level: 90, experience: "3+ years", projects: "Document classification, sentiment analysis" },
        { name: "LLMs", level: 87, experience: "2+ years", projects: "GPT, LangChain, RAG systems" },
        { name: "Computer Vision", level: 83, experience: "2+ years", projects: "Video analysis, object detection" },
        { name: "Scikit-learn", level: 92, experience: "3+ years", projects: "ML models, data preprocessing" },
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Technologies",
      color: "yellow",
      gradient: "from-yellow-500 to-amber-500",
      skills: [
        { name: "Tailwind CSS", level: 90, experience: "2+ years", projects: "Modern UI design" },
        { name: "GraphQL", level: 82, experience: "2+ years", projects: "API development" },
        { name: "WebSockets", level: 88, experience: "2+ years", projects: "Real-time gaming platforms" },
        { name: "REST APIs", level: 95, experience: "4+ years", projects: "Backend services" },
        { name: "Linux/Unix", level: 87, experience: "3+ years", projects: "Server management" },
        { name: "Tableau", level: 85, experience: "2+ years", projects: "Data visualization, dashboards" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 gradient-text">
          Technical Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Hover over categories to explore my proficiency across technologies
        </p>

        {/* Category Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === category.title;

            return (
              <Card
                key={index}
                onMouseEnter={() => setActiveCategory(category.title)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`
                  p-6 cursor-pointer transition-all duration-300 card-gradient
                  hover:shadow-2xl animate-fade-in
                  ${isActive ? 'scale-105 border-primary' : ''}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.skills.length} technologies
                </p>
                
                {/* Top 3 Skills Preview */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.slice(0, 3).map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-card rounded-full text-xs font-medium border border-border hover:border-primary transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {category.skills.length > 3 && (
                    <span className="text-muted-foreground text-xs px-2 py-1">
                      +{category.skills.length - 3} more
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Detailed Skills Display */}
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="p-8 card-gradient">
              {skillCategories
                .filter(cat => cat.title === activeCategory)
                .map((category, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-primary">{category.icon}</div>
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.skills.map((skill, skillIdx) => (
                        <motion.div
                          key={skillIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIdx * 0.05 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-primary text-sm">{skill.experience}</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-card rounded-full h-2 overflow-hidden border border-border">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: skillIdx * 0.05 }}
                              className={`h-full bg-gradient-to-r ${category.gradient}`}
                            />
                          </div>
                          
                          <p className="text-muted-foreground text-sm">{skill.projects}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
            </Card>
          </motion.div>
        )}

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "40+", label: "Technologies" },
            { value: "3+", label: "Years Internship Experience" },
            { value: "10+", label: "Production Systems" },
            { value: "500K+", label: "Records Processed" }
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center card-gradient animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;