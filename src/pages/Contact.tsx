import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full h-12 px-4 rounded-sm border border-border bg-background font-body text-sm text-foreground outline-none focus:ring-2 focus:ring-stella-coral/30 transition-shadow";

  return (
    <main className="pt-20">
      <section className="stella-section bg-stella-ice">
        <div className="stella-container">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Info */}
            <ScrollReveal direction="right">
              <span className="stella-label">Contact</span>
              <h1 className="stella-heading-xl text-foreground mt-4">Let's Talk</h1>
              <p className="stella-body mt-6">
                Whether you're an athlete interested in collaboration, a retailer exploring wholesale, 
                or just someone who wants to say hello — we'd love to hear from you.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="font-display font-600 text-sm text-foreground">Email</p>
                  <a href="mailto:hello@stellaswim.com" className="font-body text-muted-foreground hover:text-stella-coral transition-colors">
                    hello@stellaswim.com
                  </a>
                </div>
                <div>
                  <p className="font-display font-600 text-sm text-foreground">Follow Us</p>
                  <a href="#" className="font-body text-muted-foreground hover:text-stella-coral transition-colors inline-flex items-center gap-2 mt-1">
                    <Instagram size={16} /> @stellaswim
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <p className="font-display font-600 text-sm text-foreground mb-3">Enquiry Types</p>
                <ul className="space-y-2">
                  {["General enquiries", "Wholesale & retail partnerships", "Athlete & ambassador collaborations", "Press & media", "Product feedback"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <span className="w-1 h-1 bg-stella-coral rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal direction="left">
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Mail size={32} className="text-stella-coral mx-auto" />
                    <h3 className="font-display font-600 text-xl text-foreground mt-4">Message Sent</h3>
                    <p className="font-body font-300 text-muted-foreground mt-2">We'll get back to you within 48 hours.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" required placeholder="First name" className={inputClass} />
                    <input type="text" required placeholder="Last name" className={inputClass} />
                  </div>
                  <input type="email" required placeholder="Email address" className={inputClass} />
                  <select className={`${inputClass} text-muted-foreground`} required>
                    <option value="">Enquiry type</option>
                    <option>General</option>
                    <option>Wholesale & Retail</option>
                    <option>Athlete Collaboration</option>
                    <option>Press & Media</option>
                    <option>Product Feedback</option>
                  </select>
                  <textarea
                    required
                    rows={5}
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background font-body text-sm text-foreground outline-none focus:ring-2 focus:ring-stella-coral/30 transition-shadow resize-none"
                  />
                  <Button variant="stella" size="lg" type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
