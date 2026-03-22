import { ScrollReveal } from "@/components/ScrollReveal";
import { NewsletterSection } from "@/components/NewsletterSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Product & Sizing",
    items: [
      { q: "How do I find my size?", a: "Our sizing guide is available on each product page. We recommend measuring yourself and comparing to the chart. If you're between sizes, go up for a more relaxed training fit, or stay true for a competition-level compression fit." },
      { q: "What makes STELLA suits different from other water polo swimwear?", a: "We combine elite-level durability with designs that reflect your identity. Our suits use premium Italian-milled fabrics, recycled fibres, and reinforced construction — while offering colourways and silhouettes you won't find anywhere else." },
      { q: "How long will a STELLA suit last?", a: "With proper care, our competition and training suits are built to withstand multiple seasons of serious play. We engineer for extended chlorine resistance, shape retention, and fade prevention." },
      { q: "Can I wear STELLA suits for swimming or other water sports?", a: "Absolutely. While our suits are optimised for water polo, they perform beautifully for lap swimming, aqua training, and other water-based activities." },
    ],
  },
  {
    category: "Care & Maintenance",
    items: [
      { q: "How should I care for my suit?", a: "Rinse your suit in cold fresh water after every use. Lay flat or hang to dry away from direct sunlight. Avoid wringing, tumble drying, or sitting on rough surfaces while wearing your suit." },
      { q: "Will the colours fade?", a: "Our fabrics are treated with anti-fade technology. With proper care, your suit should maintain its colour significantly longer than standard alternatives." },
    ],
  },
  {
    category: "Shipping & Returns",
    items: [
      { q: "Where do you ship?", a: "We're preparing to ship to select markets at launch. Sign up for our newsletter to be notified when shipping opens in your region." },
      { q: "What is your return policy?", a: "We offer a 30-day return window on unworn, unwashed items with original tags. Hygiene seals must be intact. Full details will be available at launch." },
      { q: "How long does shipping take?", a: "Estimated delivery times will be shared at launch. We're working to offer fast, reliable shipping across all markets we serve." },
    ],
  },
  {
    category: "Sustainability",
    items: [
      { q: "Are your products truly sustainable?", a: "We use recycled polyester and nylon, and we're committed to responsible production. We're honest about where we are in our sustainability journey — we share progress transparently and continue to improve." },
      { q: "What are your suits made from?", a: "Depending on the style, our suits use 70–80% recycled polyester or nylon blended with elastane. We source Italian-milled fabrics with advanced performance treatments." },
    ],
  },
  {
    category: "Brand & Future",
    items: [
      { q: "Is STELLA available in stores?", a: "Not yet. We're a direct-to-consumer brand at launch, with plans to explore select retail partnerships in the future." },
      { q: "When is the official launch?", a: "We're in the final stages of preparation. Join our newsletter to be the first to know when we go live." },
      { q: "Can I become a STELLA ambassador?", a: "We'd love to hear from you. Visit our Community page or reach out through our Contact form to express interest." },
    ],
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group active:scale-[0.995] transition-transform"
      >
        <span className="font-display font-500 text-foreground pr-4">{q}</span>
        <ChevronDown size={18} className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="font-body font-300 text-muted-foreground leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <main className="pt-20">
      <section className="stella-section-tight bg-stella-ice">
        <div className="stella-container text-center">
          <ScrollReveal>
            <span className="stella-label">Support</span>
            <h1 className="stella-heading-xl text-foreground mt-4">Frequently Asked Questions</h1>
            <p className="stella-body mx-auto mt-4">
              Everything you need to know about STELLA, our products, and what's ahead.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="stella-section bg-background">
        <div className="stella-container max-w-3xl mx-auto">
          {faqs.map((section, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="mb-12">
                <h2 className="stella-label mb-4">{section.category}</h2>
                {section.items.map((item, j) => (
                  <FAQItem key={j} q={item.q} a={item.a} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <NewsletterSection variant="dark" />
    </main>
  );
};

export default FAQ;
