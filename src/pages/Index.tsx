import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Extracurricular from "@/components/Extracurricular";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Extracurricular />
      <Contact />
    </div>
  );
};

export default Index;
