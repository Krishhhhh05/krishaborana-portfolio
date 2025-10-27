import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:krisha.borana@rutgers.edu",
      username: "krisha.borana@rutgers.edu",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "/in/krisha-borana",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@krishaborana",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-6 rounded-lg border border-border bg-card hover:bg-card-hover transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <link.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-1">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.username}</p>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.location.href = "mailto:krisha.borana@rutgers.edu"}
          >
            <Send className="mr-2 h-5 w-5" />
            Send me an email
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Krisha Borana. Built with 💻 & ☕
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
