import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "navaneethkaku@gmail.com",
    href: "mailto:navaneethkaku@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 89193 18298",
    href: "tel:+918919318298",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/navaneeth-kaku",
    href: "https://linkedin.com/in/navaneeth-kaku",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/navaneeth-kaku",
    href: "https://github.com/navaneeth-kaku",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">

        <AnimatedSection>
          <SectionHeading
            title="Get In Touch"
            subtitle="Let's discuss how I can contribute to your team or project"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Contact Info */}
          <AnimatedSection delay={100}>
            <GlassCard className="h-full">
              <h3 className="font-display text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <item.icon size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{item.label}</p>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-primary transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border/30">
                <p className="text-muted-foreground text-sm">
                  I'm currently open to full-time opportunities in Data Analysis and Application Development roles. 
                  Feel free to reach out if you have a position that matches my skills!
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* ✅ REAL WORKING FORM */}
          <AnimatedSection delay={200}>
            <GlassCard className="h-full">
              <h3 className="font-display text-xl font-semibold mb-6">
                Send a Message
              </h3>

              <form
                action="https://formsubmit.co/navaneethkaku@gmail.com"
                method="POST"
                className="space-y-4"
              >
                {/* Hidden fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Portfolio Message!" />

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi Navaneeth, I'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};