import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Water } from "@/components/Water";
import { products } from "@/data/products";
import { ArrowRight, Droplets, Shield, Sparkles, Heart, Users } from "lucide-react";

const Index = () => {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-water.jpg" alt="Female water polo athlete in action" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative stella-container px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="stella-label text-primary-foreground/70 animate-fade-in">Performance Swimwear for Water Athletes</span>
            <h1 className="stella-heading-xl text-primary-foreground mt-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Engineered for the <Water capitalize />. Designed for Her.
            </h1>
            <p className="mt-6 text-lg md:text-xl font-body font-300 text-primary-foreground/80 max-w-lg leading-relaxed animate-fade-up" style={{ animationDelay: "400ms" }}>
              Premium swimwear built for female water polo athletes who refuse to choose between strength and style.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <Button variant="stella" size="xl" asChild>
                <Link to="/shop">Explore the Collection</Link>
              </Button>
              <Button variant="stellaLight" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND POSITIONING ─── */}
      <section className="stella-section bg-background">
        <div className="stella-container text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="stella-label">Why We Exist</span>
            <h2 className="stella-heading-lg text-foreground mt-4">
              Athletic swimwear should never sacrifice identity for performance.
            </h2>
            <p className="stella-body mx-auto mt-6">
              For too long, women in water sports have been forced into swimwear that was designed for function alone — 
              generic fits, corporate colours, zero personality. STELLA was founded on a simple belief: 
              you should feel as powerful as you perform.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── THE GAP ─── */}
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <span className="stella-label">The Problem</span>
              <h2 className="stella-heading-md text-foreground mt-4">
                Water polo swimwear has been stuck in the past.
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "Suits wear out after a few months of serious training",
                  "Designs feel corporate, unisex, or an afterthought",
                  "No brands speak directly to female water athletes",
                  "Sustainability is rarely part of the conversation",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-stella-coral flex-shrink-0" />
                    <p className="font-body font-300 text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <span className="stella-label">Our Answer</span>
              <h2 className="stella-heading-md text-foreground mt-4">
                Performance that looks the part.
              </h2>
              <p className="stella-body mt-6">
                STELLA merges elite-level durability with designs that actually feel like yours. 
                Italian-milled fabrics, thoughtful silhouettes, and colours that carry intent — 
                built for athletes who bring their full identity to the pool.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PERFORMANCE MEETS FEMININITY ─── */}
      <section className="stella-section bg-background">
        <div className="stella-container text-center">
          <ScrollReveal>
            <span className="stella-label">Our Philosophy</span>
            <h2 className="stella-heading-lg text-foreground mt-4">Where Power Meets Grace</h2>
            <p className="stella-body mx-auto mt-6">
              Strength and femininity have never been opposites. They're two currents of the same water. 
              STELLA designs at their intersection — creating swimwear that moves with your power, 
              and looks nothing like anything else in the pool.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Shield, title: "Built to Last", desc: "Reinforced seams, chlorine-resistant fabric, and construction that survives elite training." },
              { icon: Sparkles, title: "Designed with Intent", desc: "Sculptural cuts, considered colour, and details that make a suit feel entirely yours." },
              { icon: Droplets, title: "Conscious Materials", desc: "Recycled fibres, Italian-milled fabrics, and a commitment to thoughtful production." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-8 rounded-lg bg-stella-ice/50 hover:bg-stella-ice transition-colors duration-300">
                  <item.icon size={28} className="text-stella-coral mx-auto" strokeWidth={1.5} />
                  <h3 className="font-display font-600 text-foreground mt-4">{item.title}</h3>
                  <p className="font-body font-300 text-muted-foreground mt-2 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED COLLECTION ─── */}
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <div className="flex items-end justify-between mb-12">
            <ScrollReveal>
              <span className="stella-label">The Collection</span>
              <h2 className="stella-heading-lg text-foreground mt-4">Curated for the Water</h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Button variant="stellaGhost" asChild className="hidden md:flex">
                <Link to="/shop" className="gap-2">
                  View All <ArrowRight size={16} />
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 80}>
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg bg-muted relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-stella-coral text-primary-foreground text-xs font-display font-500 px-3 py-1 rounded-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <p className="stella-label text-xs">{product.category}</p>
                    <h3 className="font-display font-600 text-foreground mt-1 group-hover:text-stella-coral transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">{product.tagline}</p>
                    <p className="font-display font-600 text-foreground mt-2 tabular-nums">${product.price}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="stellaOutline" asChild>
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="stella-section bg-background">
        <div className="stella-container text-center">
          <ScrollReveal>
            <span className="stella-label">Our Values</span>
            <h2 className="stella-heading-lg text-foreground mt-4">What Drives Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {[
              { label: "Authenticity", desc: "Real stories, real athletes, no performance." },
              { label: "Empowerment", desc: "Confidence in and out of the water." },
              { label: "Quality", desc: "Materials and craft you can feel." },
              { label: "Creativity", desc: "Design that breaks the mould." },
              { label: "Community", desc: "Stronger together, always." },
            ].map((v, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="py-6">
                  <h3 className="font-display font-700 text-foreground text-lg">{v.label}</h3>
                  <p className="font-body font-300 text-muted-foreground text-sm mt-2">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUSTAINABILITY HIGHLIGHT ─── */}
      <section className="relative stella-section overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/sustainability-ocean.jpg" alt="Ocean" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative stella-container text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <span className="stella-label text-primary-foreground/60">Sustainability</span>
            <h2 className="stella-heading-lg text-primary-foreground mt-4">Conscious by Design</h2>
            <p className="mt-6 font-body font-300 text-primary-foreground/75 text-lg leading-relaxed">
              The water is where we play. It's also what we protect. STELLA is committed to 
              recycled materials, durable construction that reduces waste, and transparent 
              production practices — because building responsibly isn't optional.
            </p>
            <Button variant="stellaLight" size="lg" className="mt-8" asChild>
              <Link to="/sustainability">Our Commitment</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── AUDIENCE ─── */}
      <section className="stella-section bg-background">
        <div className="stella-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="stella-label">Who We're For</span>
              <h2 className="stella-heading-lg text-foreground mt-4">Built for Athletes Like You</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Competitive Player",
                desc: "You train hard, play harder, and need swimwear that keeps up. You're done with suits that fall apart mid-season or look like they were designed by committee.",
                traits: ["Trains 3–5× per week", "Needs elite durability", "Wants to look sharp on match day"],
              },
              {
                title: "The Aesthetic Athlete",
                desc: "You care about performance, but you also care about identity. Your gear is part of who you are — and you want it to reflect your values, from design to sustainability.",
                traits: ["Style-conscious & active", "Values sustainability", "Loves strong brand stories"],
              },
            ].map((persona, i) => (
              <ScrollReveal key={i} delay={i * 100} direction={i === 0 ? "right" : "left"}>
                <div className="p-8 md:p-10 rounded-lg border border-border bg-stella-ice/30">
                  <h3 className="font-display font-700 text-xl text-foreground">{persona.title}</h3>
                  <p className="font-body font-300 text-muted-foreground mt-3 leading-relaxed">{persona.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {persona.traits.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                        <span className="w-1 h-1 bg-stella-coral rounded-full" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY ─── */}
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ScrollReveal direction="right">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/images/community-team.jpg" alt="STELLA athletes celebrating together" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <span className="stella-label">Community</span>
              <h2 className="stella-heading-lg text-foreground mt-4">Join the Movement</h2>
              <p className="stella-body mt-6">
                STELLA isn't just a brand — it's a growing community of female water athletes 
                who believe that confidence, performance, and style belong together. We're building 
                something bigger than swimwear.
              </p>
              <Button variant="stellaOutline" size="lg" className="mt-8" asChild>
                <Link to="/community">Learn More</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="stella-section bg-background">
        <div className="stella-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="stella-label">Voices</span>
              <h2 className="stella-heading-lg text-foreground mt-4">From the Water</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Finally — a suit that feels like it was actually made for the way I play. The fit is incredible and I love how it looks.", name: "Marta K.", role: "University Water Polo, Centre Forward" },
              { quote: "I've worn through so many suits that I stopped expecting quality. STELLA changed that. Three months in and it still looks brand new.", name: "Lena T.", role: "Club Player, 8 years" },
              { quote: "I care about what I wear and where it comes from. The fact that STELLA uses recycled materials without compromising on performance — that's what I want to support.", name: "Sofia A.", role: "Former National Team, Coach" },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="p-8 rounded-lg border border-border h-full flex flex-col justify-between">
                  <p className="font-body font-300 text-foreground/80 leading-relaxed italic">"{t.quote}"</p>
                  <div className="mt-6">
                    <p className="font-display font-600 text-sm text-foreground">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ─── */}
      <NewsletterSection variant="dark" />
    </main>
  );
};

export default Index;
