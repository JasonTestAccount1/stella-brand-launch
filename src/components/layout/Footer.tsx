import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="stella-container px-6 md:px-12 lg:px-24 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* Brand */}
          <div className="md:col-span-1">
            <Logo size="md" variant="light" />
            <p className="mt-3 text-xs font-body font-300 opacity-70 leading-relaxed max-w-xs">
              Performance swimwear for female water athletes. Where strength meets femininity.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-600 text-xs tracking-wide mb-3 uppercase">Shop</h4>
            <ul className="space-y-1.5">
              {["Competition", "Training", "Signature Collection", "Essentials"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-xs font-body opacity-60 hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-600 text-xs tracking-wide mb-3 uppercase">Company</h4>
            <ul className="space-y-1.5">
              {[
                { label: "About", href: "/about" },
                { label: "Sustainability", href: "/sustainability" },
                { label: "Community", href: "/community" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-xs font-body opacity-60 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-600 text-xs tracking-wide mb-3 uppercase">Connect</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#" className="text-xs font-body opacity-60 hover:opacity-100 transition-opacity inline-flex items-center gap-2">
                  <Instagram size={14} /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hello@stellaswim.com" className="text-xs font-body opacity-60 hover:opacity-100 transition-opacity inline-flex items-center gap-2">
                  <Mail size={14} /> hello@stellaswim.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs font-body opacity-40">Newsletter coming soon</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body opacity-40">© 2026 STELLA. All rights reserved.</p>
          <div className="flex gap-6">
            {["Terms & Conditions", "Privacy Policy", "Shipping & Returns"].map((item) => (
              <span key={item} className="text-xs font-body opacity-40 hover:opacity-70 cursor-pointer transition-opacity">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
