import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Droplets, Recycle, Timer, Leaf } from "lucide-react";

const Sustainability = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative stella-section overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/sustainability-ocean.jpg" alt="Ocean water" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/65" />
        </div>
        <div className="relative stella-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="stella-label text-primary-foreground/60">Sustainability</span>
            <h1 className="stella-heading-xl text-primary-foreground mt-4">
              Built for the Water. Mindful of It.
            </h1>
            <p className="font-body font-300 text-primary-foreground/75 text-lg mt-6 leading-relaxed max-w-2xl mx-auto">
              We believe the best performance wear should also be the most responsible. 
              STELLA is committed to building thoughtfully — using better materials, reducing waste, 
              and growing in ways that respect the environments we play in.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Honest Approach */}
      <section className="stella-section bg-background">
        <div className="stella-container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="stella-label">Our Approach</span>
            <h2 className="stella-heading-lg text-foreground mt-4">Transparent, Not Performative</h2>
            <p className="stella-body mx-auto mt-6">
              We're an early-stage brand, and we won't pretend to have solved sustainability. What we can promise 
              is that every decision — from fibre choice to production partner — is guided by a commitment to do better. 
              We share our progress honestly and invite you to hold us accountable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="stella-label">Our Commitments</span>
              <h2 className="stella-heading-lg text-foreground mt-4">How We're Building</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Recycle, title: "Recycled Materials", desc: "Our fabrics use recycled polyester and nylon — reducing reliance on virgin plastics while maintaining premium performance and feel." },
              { icon: Timer, title: "Durability as Sustainability", desc: "The most sustainable product is one that lasts. We engineer every suit for extended lifespan, which means fewer replacements and less waste." },
              { icon: Leaf, title: "Mindful Production", desc: "We work with production partners who share our values. As we grow, we're committed to transparent supply chain practices and responsible manufacturing." },
              { icon: Droplets, title: "Respect for the Water", desc: "The pool, the ocean, the lake — water is where our athletes live. Protecting it isn't a marketing angle. It's a responsibility we take seriously." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="p-8 rounded-lg bg-background">
                  <item.icon size={28} className="text-stella-aqua" strokeWidth={1.5} />
                  <h3 className="font-display font-600 text-lg text-foreground mt-4">{item.title}</h3>
                  <p className="font-body font-300 text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Looking ahead */}
      <section className="stella-section bg-background">
        <div className="stella-container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="stella-label">Looking Ahead</span>
            <h2 className="stella-heading-lg text-foreground mt-4">Thoughtful Growth</h2>
            <p className="stella-body mx-auto mt-6">
              Sustainability isn't a destination — it's a direction. As STELLA grows, we'll continue to explore better materials, 
              smarter production methods, and ways to give back to the communities and environments that shape us. 
              We'll share updates along the way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <NewsletterSection variant="dark" />
    </main>
  );
};

export default Sustainability;
