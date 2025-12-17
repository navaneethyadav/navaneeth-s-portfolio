import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/navaneeth-kaku", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/navaneeth-kaku", label: "LinkedIn" },
  { icon: Mail, href: "mailto:navaneethkaku@gmail.com", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="font-display text-2xl font-bold gradient-text mb-2">
              NK
            </a>
            <p className="text-sm text-muted-foreground">
              Data Analyst & Application Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Navaneeth Kaku. Built with
            <Heart size={14} className="text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};
