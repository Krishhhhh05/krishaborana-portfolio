import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FoodSpot",
      tech: "React.js, Node.js, Flask, Google Maps API",
      description: [
        "Developed real-time food truck discovery platform with GPS tracking, interactive mapping, and geofencing, enabling customers to locate 100+ vendors, view live menus, and receive push notifications for deals and availability while facilitating secure payment transactions and social sharing features.",
        "Engineered AI-powered inventory management system using Q-learning and LSTM models for predictive demand forecasting and route optimization, increasing vendor sales by 35% and reducing food waste by 25%"    ],
      image: "🍔",
      github: "https://github.com/Krishhhhh05/FoodSpot-Hackniche",
      demo: "#",
    },
    // {
    //   title: "Storycraft - An end to end storybook generator",
    //   tech: "Python, Pandas, Numpy, LLMs, Finetuning",
    //   description: [
    //     " Designed an adaptive platform that generates personalized children’s stories and images using fine-tuned Mistral LLMs and image diffusion models, preserving character consistency and maintaining a generation accuracy of 97%.",
    //     "Implemented automated image generation from story-derived prompts with semantic validation, achieving 93% prompt-image consistency verified through similarity metrics and manual evaluation"   ],
    //   image: "📄",
    //   github: "https://github.com/Krishhhhh05/StoryCraft",
    //   demo: "#",
    // },
    {
      title: "Video Plagiarism Detection System",
      tech: "Python, OpenCV, CLIP, DTW, Audio Fingerprinting  ",
      description: [
        " Built multi-modal plagiarism detection system combining visual feature extraction, semantic analysis, and audio fingerprinting to identify content theft across transformations.",
        "Achieved 99.44% visual similarity detection for cross-lingual plagiarism, 99.42% accuracy for partial content reuse, and 94.39% detection for cross-modal manipulation across 15 original videos and 45 manipulated variants"   ],
      image: "🎥",
      // intentionally no links for this project
    },
    {
      title: "ResuGenius",
      tech: "Python, FastAPI, Streamlit, FAISS",
      description: [
        "Engineered AI system processing resume PDFs using Python backend services and SQL databases, delivering personalized career recommendations through Zero-Shot Classification",
        "Implemented secure RESTful APIs and FastAPI framework for real-time data processing, helping users improve role alignment through ML-driven insights and portfolio optimization with cloud technologies."     ],
      image: "📄",
      github: "https://github.com/Krishhhhh05/ResuGenuis",
      demo: "#",
    },
  //   {
  //     title: "Efficient Data Extraction from Handwritten Forms",
  //     tech: "Research Project, Computer Vision, Image Processing, IEEE ICAITPR 2024",
  //     description: [
  //       "Built a robust pipeline using Computer Vision, Feature Detection, and Image Matching to digitize and extract structured data from handwritten forms, with preprocessing for keywords and sensitive info."
  // ],
  //     image: "📄",
  //     paper: "https://ieeexplore.ieee.org/document/10959837",
  //   },
    // {
    //   title: "Financial Allocation Management Using Behavioral Psychology",
    //   tech: "Python, LLMs, NLP, PyTorch, Research Paper,Educational Administration: Theory and Practice (Feb 2024).",
    //   description: [
    //   "Conducted research integrating Modern Portfolio Theory and True Risk Tolerance to evaluate decision-making behaviors across 8 diverse portfolio types."
    // ],
    //   image: "📄",
    //   paper: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://kuey.net/index.php/kuey/article/download/8445/6329/16315&ved=2ahUKEwjv2rXMqfyQAxWFD1kFHQrQBIsQFnoECBkQAQ&usg=AOvVaw3p7iBDb7p5KdKod8-5XPDG",
    // },
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 gradient-text">
          Projects & Research
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Building solutions that combine AI, full-stack development, and real-world impact
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-2 sm:px-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="w-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 card-gradient animate-fade-in"
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

                {/* Action Buttons (conditional) */}
                <div className="flex gap-3">
                  {project.github ? (
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.github, "_blank")}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  ) : null}

                  {project.demo ? (
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary-light" onClick={() => window.open(project.demo, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  ) : null}

                  {/* {project.paper ? (
                    <Button variant="ghost" size="sm" className="flex-1" onClick={() => window.open(project.paper, "_blank")}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Paper
                    </Button>
                  ) : null} */}
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
