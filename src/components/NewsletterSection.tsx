import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

interface NewsletterSectionProps {
  variant?: "light" | "dark";
}

export const NewsletterSection = ({ variant = "light" }: NewsletterSectionProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const isDark = variant === "dark";

  return (
    <section className={`stella-section ${isDark ? "bg-primary text-primary-foreground" : "bg-stella-ice"}`}>
      <div className="stella-container text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <span className={`stella-label ${isDark ? "opacity-60" : ""}`}>Stay Connected</span>
          <h2 className={`stella-heading-lg mt-4 ${isDark ? "" : "text-foreground"}`}>
            Be Part of the Beginning
          </h2>
          <p className={`mt-4 font-body font-300 text-base md:text-lg leading-relaxed ${isDark ? "opacity-70" : "text-muted-foreground"}`}>
            Join the STELLA community and be the first to hear about our launch, new collections, 
            and the stories behind the athletes who inspire us.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {submitted ? (
            <div className="mt-8 py-4">
              <p className={`font-display font-500 ${isDark ? "" : "text-foreground"}`}>Welcome to the STELLA community ✦</p>
              <p className={`text-sm font-body mt-2 ${isDark ? "opacity-60" : "text-muted-foreground"}`}>We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`flex-1 h-12 px-4 rounded-md font-body text-sm outline-none transition-shadow focus:ring-2 ${
                  isDark
                    ? "bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/40 focus:ring-primary-foreground/30"
                    : "bg-background text-foreground placeholder:text-muted-foreground border border-border focus:ring-stella-coral/30"
                }`}
              />
              <Button type="submit" variant={isDark ? "stellaLight" : "stella"} size="lg">
                Join the Journey
              </Button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
