import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterSection } from "@/components/NewsletterSection";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <span className="stella-label">Our Story</span>
              <h1 className="stella-heading-xl text-foreground mt-4">
                Born from the water. Built for those who belong in it.
              </h1>
              <p className="stella-body mt-6">
                STELLA started with a simple frustration: why does water polo swimwear look and feel like an afterthought? 
                As athletes ourselves, we spent years in suits that faded after a few months, fit awkwardly, and had zero personality. 
                We decided it was time for something different.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img src="/images/about-athlete.jpg" alt="STELLA athlete" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Gap */}
      <section className="stella-section bg-background">
        <div className="stella-container max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <span className="stella-label">The Gap We Noticed</span>
            <h2 className="stella-heading-lg text-foreground mt-4">
              Performance sportswear evolved everywhere — except the pool.
            </h2>
            <p className="stella-body mx-auto mt-6">
              Running, cycling, yoga — every discipline has brands that combine style with substance. But for female water 
              polo athletes, the options remain overwhelmingly generic. Suits built for function, stripped of identity, 
              designed without women like us in mind. STELLA exists to close that gap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Want to Change */}
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="stella-label">Our Direction</span>
              <h2 className="stella-heading-lg text-foreground mt-4">What STELLA Wants to Change</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              { title: "From generic to personal", desc: "Swimwear should reflect the athlete wearing it — not a corporate design brief." },
              { title: "From disposable to durable", desc: "We're building suits that survive seasons of serious play, not just weeks." },
              { title: "From indifferent to intentional", desc: "Every material choice, every design detail, every colour is a conscious decision." },
              { title: "From invisible to seen", desc: "Female water athletes deserve a brand that sees them, speaks to them, and builds for them." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div>
                  <h3 className="font-display font-600 text-lg text-foreground">{item.title}</h3>
                  <p className="font-body font-300 text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="stella-section bg-background">
        <div className="stella-container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                label: "Mission",
                text: "To empower female water sport athletes with high-quality, stylish, and sustainable gear that supports elite performance and boosts confidence.",
              },
              {
                label: "Vision",
                text: "To become an internationally recognized niche brand that proves strength and femininity can coexist perfectly.",
              },
              {
                label: "Values",
                text: "Authenticity. Empowerment. Quality. Creativity. Community. These are the currents that guide every decision we make.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="text-center md:text-left">
                  <span className="stella-label">{item.label}</span>
                  <p className="font-body font-300 text-foreground/80 mt-4 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="stella-section bg-primary text-primary-foreground">
        <div className="stella-container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="stella-heading-lg">For the athlete who wants both strength and style.</h2>
            <p className="font-body font-300 text-primary-foreground/70 mt-6 text-lg leading-relaxed">
              STELLA is still early. We're building, testing, refining. But the direction is clear — and 
              we'd love you to be part of the journey from here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
};

export default About;
