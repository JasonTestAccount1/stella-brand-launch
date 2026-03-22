import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Users, Star, Heart } from "lucide-react";

const Community = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative stella-section overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/community-team.jpg" alt="STELLA athletes" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative stella-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="stella-label text-primary-foreground/60">Community</span>
            <h1 className="stella-heading-xl text-primary-foreground mt-4">Stronger Together</h1>
            <p className="font-body font-300 text-primary-foreground/75 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
              STELLA is more than swimwear. It's a community of female water athletes who believe in strength, 
              style, and lifting each other up.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Brand message */}
      <section className="stella-section bg-background">
        <div className="stella-container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="stella-heading-lg text-foreground">Every athlete has a story worth telling.</h2>
            <p className="stella-body mx-auto mt-6">
              We're building a space where female water polo athletes connect, share their journeys, 
              and inspire the next generation. Whether you've played for two months or two decades, 
              your voice matters here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs */}
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="stella-label">Get Involved</span>
              <h2 className="stella-heading-lg text-foreground mt-4">Grow With Us</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Star, title: "Ambassador Programme", desc: "We're looking for athletes who embody the STELLA spirit. Represent the brand, share your story, and help shape what comes next. Applications opening soon.", cta: "Express Interest" },
              { icon: Users, title: "Athlete Features", desc: "Every month, we'll spotlight athletes from our community — their training, their lives, their relationship with the water. Real stories, no script.", cta: "Share Your Story" },
              { icon: Heart, title: "Community Events", desc: "From training sessions to panel talks, we're planning events that bring female water athletes together. Stay tuned for announcements.", cta: "Stay Updated" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-8 rounded-lg bg-background border border-border h-full flex flex-col">
                  <item.icon size={28} className="text-stella-coral" strokeWidth={1.5} />
                  <h3 className="font-display font-600 text-lg text-foreground mt-4">{item.title}</h3>
                  <p className="font-body font-300 text-muted-foreground mt-3 leading-relaxed flex-1">{item.desc}</p>
                  <Button variant="stellaOutline" size="sm" className="mt-6 self-start" asChild>
                    <Link to="/contact">{item.cta}</Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section className="stella-section bg-primary text-primary-foreground">
        <div className="stella-container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="stella-heading-lg">This brand is being built with you, not just for you.</h2>
            <p className="font-body font-300 text-primary-foreground/70 mt-6 text-lg leading-relaxed">
              STELLA is in its earliest days. That means the athletes who join now will shape the brand 
              from the ground up — from product feedback to content creation to community direction.
            </p>
            <Button variant="stellaLight" size="xl" className="mt-8" asChild>
              <Link to="/contact">Join the Founding Community</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
};

export default Community;
